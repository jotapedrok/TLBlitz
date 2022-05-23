import axios from 'axios';
import store from '../store';

const {
  user: { token },
} = store.getState();

const api = axios.create({
  baseURL: process.env.API_URL,
  responseType: 'json',
  headers: {
    Authorization: token,
  },
});

export { api };
