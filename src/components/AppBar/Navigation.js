import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsAuthenticated } from '../../redux/auth/authSelectors';
import Nav from 'react-bootstrap/Nav';
import styles from './Navigation.module.css';

export default function Navigation() {
  const isLoggedIn = useSelector(getIsAuthenticated);

  return (
    <Nav defaultActiveKey="/">
      <NavLink
        to="/"
        exact
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink
          to="/contacts"
          exact
          className={styles.link}
          activeClassName={styles.activeLink}
        >
          Phonebook
        </NavLink>
      )}
    </Nav>
  );
}
