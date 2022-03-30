import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { changeFilter } from '../../redux/contacts/contactsActions.js';
import {
  getContacts,
  postContact,
  removeContact,
} from '../../redux/contacts/contactsOperations';

const contacts = createReducer([], {
  [postContact.fulfilled]: (state, { payload }) => [payload, ...state],
  [getContacts.fulfilled]: (_, { payload }) => payload,
  [removeContact.fulfilled]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload.id),
});

const isLoadingReduser = createReducer(false, {
  [getContacts.pending]: () => true,
  [getContacts.fulfilled]: () => false,
  [getContacts.rejected]: () => false,
  [postContact.pending]: () => true,
  [postContact.fulfilled]: () => false,
  [postContact.rejected]: () => false,
  [removeContact.pending]: () => true,
  [removeContact.fulfilled]: () => false,
  [removeContact.rejected]: () => false,
});

const errorReduser = createReducer(null, {
  [getContacts.pending]: (_, { payload }) => payload,
  [getContacts.rejected]: () => null,
  [postContact.pending]: (_, { payload }) => payload,
  [postContact.rejected]: () => null,
  [removeContact.pending]: (_, { payload }) => payload,
  [removeContact.rejected]: () => null,
});

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

const phonebookReducer = combineReducers({
  contacts,
  filter,
  isLoading: isLoadingReduser,
  error: errorReduser,
});
export default phonebookReducer;
