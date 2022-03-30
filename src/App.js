// import React, { useState, useEffect } from 'react';
// import { nanoid } from 'nanoid';
import style from './App.module.css';
import Filter from './Filter/Filter.jsx';
import ContactForm from './contactForm/ContactForm.jsx';
import ContactList from './ContactList/ContactList';

const App = () => {
  return (
    <div className={style.App}>
      <h2>Phonebook</h2>
      <ContactForm />
      <h2 className={style.title}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

export default App;
