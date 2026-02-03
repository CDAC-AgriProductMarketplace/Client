import axios from "axios";
import { isTokenExpired } from "./AuthService";

const baseUrl = import.meta.env.VITE_BACKEND_SERVER;

const api = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token && !isTokenExpired(token)) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;
