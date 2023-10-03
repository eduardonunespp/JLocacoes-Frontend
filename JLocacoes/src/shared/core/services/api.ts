import axios from 'axios'

export const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_API_URL
})

const token = localStorage.getItem('jlocacoes-access-token');

if (token) {
  api.defaults.headers.Authorization = `Bearer ${token}`;
} else {
  delete axios.defaults.headers.common.Authorization;
} 

