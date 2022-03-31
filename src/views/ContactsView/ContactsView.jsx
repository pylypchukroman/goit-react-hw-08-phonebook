import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactForm from '../../components/ContactForm/ContactForm';
import Filter from '../../components/Filter/Filter';
import { Audio } from 'react-loader-spinner';
import ContactList from 'components/ContactList/ContactList';
import { fetchContacts } from 'redux/contacts/contactsOperations';
import phonebookSelectors from 'redux/contacts/contactsSelectors';
import styles from './ContactcsView.module.css';

export default function ContactsView() {
  const dispatch = useDispatch();

  const isLoading = useSelector(phonebookSelectors.getLoading);

  useEffect(() => dispatch(fetchContacts()), [dispatch]);

  return (
    <div className={styles.phonebook}>
      <div className={styles.flex_item}>
        <h2 className={styles.contacts_view_header}>Phonebook</h2>
        <ContactForm />
      </div>
      <div className={styles.flex_item}>
        <h2 className={styles.contacts_view_header}>Contacts</h2>
        <Filter />
        {isLoading && (
          <Audio type="Grid" color="#212121" height={100} width={100} />
        )}
        <ContactList />
      </div>
    </div>
  );
}
