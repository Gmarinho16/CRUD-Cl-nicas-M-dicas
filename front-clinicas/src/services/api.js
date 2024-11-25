import axios from 'axios';

const api = axios.create({
  baseURL: 'https://crud-clinicas.vercel.app/',
});

export default api;
