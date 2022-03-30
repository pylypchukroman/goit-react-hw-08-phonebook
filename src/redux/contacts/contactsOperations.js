import { createAsyncThunk } from '@reduxjs/toolkit';
import * as contactsAPI from '../../utils/contactsAPI';

export const getContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const newContact = await contactsAPI.fetchContacts();
      return newContact;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const postContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, { rejectWithValue }) => {
    try {
      const newContact = await contactsAPI.addContact(contact);
      return newContact;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const removeContact = createAsyncThunk(
  'contacts/removeContact',
  async (id, { rejectWithValue }) => {
    try {
      const removeContact = await contactsAPI.removeContact(id);
      return removeContact;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
