import axios from 'axios';

export const API = axios.create({
  baseURL: 'https://my-contacts-dev.herokuapp.com/',
  headers: { 'Access-Control-Max-Age': 30 },
});
