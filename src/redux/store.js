import { configureStore } from '@reduxjs/toolkit';
import phonebookReducer from '../redux/contacts/contactsReduser';

export const store = configureStore({
  reducer: { contacts: phonebookReducer },
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
  // devTools: process.env.NODE_ENV === 'development',
});

export default store;
