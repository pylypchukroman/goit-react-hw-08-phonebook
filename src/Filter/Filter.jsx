import style from './Filter.module.css';
import { changeFilter } from '../redux/contacts/contactsActions';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/contacts/contactsSelectors';
import { Audio } from 'react-loader-spinner';

const Filter = () => {
  const isLoading = useSelector(state => state.contacts.isLoading);
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  return (
    <div className={style.filter__wrapper}>
      <h2 className={style.Title}>Find contacts by name</h2>
      <input
        className={style.inpute}
        placeholder="Enter contact name"
        type="text"
        value={filter}
        onChange={e => dispatch(changeFilter(e))}
      />
      {isLoading && (
        <h1 className={style.loader}>
          <Audio height="100" width="100" color="grey" ariaLabel="loading" />
        </h1>
      )}
    </div>
  );
};

export default Filter;
