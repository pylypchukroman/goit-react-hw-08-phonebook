import axios from 'axios';

axios.defaults.baseURL = 'https://6213b60589fad53b1ffeba6e.mockapi.io';

export async function fetchContacts() {
  const { data } = await axios.get('/contacts');
  return data;
}

export async function addContact(contact) {
  const { data } = await axios.post('/contacts', contact);
  return data;
}

export async function removeContact(id) {
  const { data } = await axios.delete(`/contacts/${id}`);
  return data;
}
