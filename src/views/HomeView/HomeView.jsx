import React from 'react';
import styles from './HomeView.module.css';

const HomeView = () => (
  <div className={styles.container}>
    <div className={styles.home_view_container}>
      <h1 className={styles.title}>Phonebook</h1>
      <p className={styles.text}> All your contacts in one place</p>
    </div>
  </div>
);

export default HomeView;
