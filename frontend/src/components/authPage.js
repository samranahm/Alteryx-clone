import axios from 'axios';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = true;

const client = axios.create({
  baseURL: "http://127.0.0.1:8000",
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, // Ensures cookies are sent with requests
});


export default client;

