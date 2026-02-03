import axios from 'axios';
//import { isTokenExpired } from './AuthService';
const baseUrl=import.meta.env.VITE_BACKEND_SERVER;
const api = axios.create({
  baseURL: baseUrl, 
  headers: {
    'Content-Type': 'application/json'
  }
});
api.interceptors.request.use((config) => {
console.log("Interceptor URL",config.url);

  const token = localStorage.getItem('token');
console.log("Axios interceptor token",token);

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
console.log("Final headers",config.headers);

  return config;
});

export default api;
