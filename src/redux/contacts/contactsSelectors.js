import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => state.contacts.contacts;
export const getFilter = state => state.contacts.filter;
// export const isLoading = state => state.contacts.isLoading;
export const getFilteredContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);

// export const getFilteredContacts = state => {
//   const contacts = getContacts(state);
//   const filter = getFilter(state);
//   if (!filter) return contacts;

//   return contacts.length
//     ? contacts?.filter(contact =>
//         contact.name.toLowerCase().includes(filter.toLowerCase())
//       )
//     : [];
// };
