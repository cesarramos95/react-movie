import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    language: 'pt-BR',
    api_key: process.env.REACT_APP_API_KEY,
  },
});

export default api;
