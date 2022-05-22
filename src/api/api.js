import axios from 'axios';
import { store } from '../redux/store';
import config from '../assets/configs/config.json';

const instance = axios.create({
  baseURL: config.baseURL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use(function (config) {
  const token = store?.getState()?.user?.currentUser?.token;
  if (token) {
    config.headers.Authorization = 'Bearer ' + token;
  }
  return config;
});

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (!error || (error.response && error.response.status === 401)) {
      window.localStorage.setItem('error', error);
      window.location = '/login';
    }
    return Promise.reject(error);
  }
);

export default instance;
