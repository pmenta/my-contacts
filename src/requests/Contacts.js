import { API } from './API';

export async function getContacts(orderBy) {
  const { data } = await API.get(`/contacts?orderBy=${orderBy}`);

  return data;
}

export async function createContact(dataForm) {
  const { data } = await API.post('/contacts', dataForm);

  return data;
}
