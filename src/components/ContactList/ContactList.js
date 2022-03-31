import styles from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactsOperations';
import phonebookSelectors from 'redux/contacts/contactsSelectors';

export default function ContactList() {
  const dispatch = useDispatch();

  const contacts = useSelector(phonebookSelectors.getCurrentContacts);
  const onDeleteContact = id => dispatch(deleteContact(id));

  return (
    <ul className={styles.contact_list}>
      {contacts.map(({ id, name, number }) => (
        <li className={styles.contact_list_item} key={id}>
          <p className={styles.contact_list_contact}>
            <span className={styles.contact_list_contact_name}>{name}:</span>{' '}
            {number}
          </p>
          <button
            className={styles.delete_btn}
            type="button"
            onClick={() => onDeleteContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
