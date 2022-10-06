import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import UserProvider from '../state/UserContext.jsx';
import Auth from './Auth/Auth.jsx';
import AuthForm from './Auth/AuthForm.jsx';
import Cats from './Cats/Cats.jsx';
import JackieLegs from './Cats/JackieLegs.jsx';
import Renly from './Cats/Renly.jsx';
import Shadow from './Cats/Shadow.jsx';
import Dashboard from './Dashboard/Dashboard.jsx';
import Layout from './Page/Layout.jsx';
import Pizza from './Pizza/Pizza.jsx';
import Search from './Search/Search.jsx';

export default function App() {
  return (
    <Router>
      <UserProvider>
        <Routes>
  
  
          <Route element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="search" element={<Search />} />
            <Route path="pizza" element={<Pizza />} />
            <Route path="cats" element={<Cats />}>
              <Route index element={<Renly />} />
              <Route path ="jackielegs" element={<JackieLegs />} />
              <Route path ="shadow" element={<Shadow />} />
            </Route>
  
  
            <Route path="auth" element={<Auth />}>
              <Route index element={<AuthForm mode="signin" />} />
              <Route path="signup" element={<AuthForm mode="signup" />} />
            </Route>
  
  
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </UserProvider>
    </Router>
  );
}
