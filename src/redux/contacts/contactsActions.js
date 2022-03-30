import { createAction } from '@reduxjs/toolkit';

// export const addContactRequest = createAction('contacts/addContactRequest');
// export const addContactSuccess = createAction('contacts/addTContactSuccess');
// export const addContactError = createAction('contacts/addContactError');

export const changeFilter = createAction('contacts/filter', e => {
  return {
    payload: e.target.value,
  };
});
