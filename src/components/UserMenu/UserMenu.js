import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import { getUserName } from '../../redux/auth/authSelectors';
import styles from './userMenu.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();

  const userName = useSelector(getUserName);
  const onLogout = useCallback(() => dispatch(logOut()), [dispatch]);

  return (
    <div style={styles.container}>
      <span style={styles.name}>Welcome, {userName}</span>
      <button type="button" className={styles.logout_btn} onClick={onLogout}>
        Out
      </button>
    </div>
  );
}
