import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { Lists } from '../Lists/Lists.jsx';
import { ShoppingList } from '../Lists/ShoppingList.jsx';
import ListsProvider from '../state/ListsContext.jsx';
import UserProvider from '../state/UserContext.jsx';
import Auth from './Auth/Auth.jsx';
import AuthForm from './Auth/AuthForm.jsx';
import ProtectedRoute from './Auth/ProtectedRoute.jsx';
import Dashboard from './Dashboard/Dashboard.jsx';
import Layout from './Page/Layout.jsx';
import Search from './Search/Search.jsx';

export default function App() {
  return (
    <Router>
      <UserProvider>
        <Routes>
    
          <Route path="auth" element={<Auth />}>
            <Route index element={<AuthForm mode="signin" />} />
            <Route path="signup" element={<AuthForm mode="signup" />} />
          </Route>
  
          <Route element={<ProtectedRoute />}>
            <Route element={<Layout />}>
              <Route index element={<Dashboard />} />
              <Route element={<ListsProvider />}>
                <Route path="lists">
                  <Route index element={<Lists />} />
                  <Route path=":id" element={<ShoppingList />} />
                </Route>
              </Route>
              <Route path="search" element={<Search />} />
            </Route>
          </Route>

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </UserProvider>
    </Router>
  );
}
