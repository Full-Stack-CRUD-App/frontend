import styles from './Cats.css';
import { Link, Outlet } from 'react-router-dom';

export default function Cats() {
  return (
    <div className={styles.Cats}>
      <h1>Cats</h1>
      <nav>
        <Link to="">Renly</Link>
        <Link to="jackielegs">Jackie Legs</Link>
        <Link to="shadow">Shadow</Link>
      </nav>

      <main>
        <Outlet />
      </main>
    </div>
  );
}
