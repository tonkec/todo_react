import axios from 'axios';
const TODOS_API = 'https://kodiraonica-todos.herokuapp.com/api/';
const api = axios.create({
  baseURL: TODOS_API,
  timeout: 1000,
});

export default api;
