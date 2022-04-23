import { API } from './API';

export async function getContacts(orderBy) {
  try {
    const { data } = await API.get(`/contacts?orderBy=${orderBy}`);

    return data;
  } catch (error) {
    throw error.response.data.error;
  }
}

export async function createContact(dataForm) {
  try {
    const { data } = await API.post('/contacts', dataForm);

    return data;
  } catch (error) {
    throw error.response.data.error;
  }
}
