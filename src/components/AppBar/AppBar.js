import React from 'react';
import { useSelector } from 'react-redux';
import Navigation from './Navigation';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from './AuthNav';
import { getIsAuthenticated } from '../../redux/auth/authSelectors';
import { Container } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import styles from './AppBar.module.css';

export default function AppBar() {
  const isLoggedIn = useSelector(getIsAuthenticated);

  return (
    <Navbar bg="light" variant="light">
      <Container className={styles.appBar_main}>
        <div className={styles.header}>
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </div>
      </Container>
    </Navbar>
  );
}
