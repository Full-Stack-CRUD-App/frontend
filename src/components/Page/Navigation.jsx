import { NavLink } from 'react-router-dom';
import styles from './Navigation.css';

export default function Navigation() {
  return (
    <nav className={styles.Navigation}>
      <NavLink to="">Home</NavLink>
      <NavLink to="search">Search</NavLink>
      <NavLink to="pizza">Pizza</NavLink>
      <NavLink to="cats">Cats</NavLink>
      <NavLink to="auth">Auth</NavLink>
    </nav>
  );
}
