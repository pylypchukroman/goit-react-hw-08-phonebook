import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Filter.module.css';
import Form from 'react-bootstrap/Form';
import phonebookSelectors from 'redux/contacts/contactsSelectors';
import { changeFilter } from 'redux/contacts/contactsActions';

export default function Filter() {
  const dispatch = useDispatch();

  const value = useSelector(phonebookSelectors.getFilter);
  const onChange = useCallback(
    e => dispatch(changeFilter(e.target.value)),
    [dispatch]
  );

  return (
    <Form.Group size="sm" className="mb-3">
      <Form.Control
        placeholder="Find contacts by name"
        className={styles.input_value}
        type="text"
        value={value}
        onChange={onChange}
      />
    </Form.Group>
  );
}
