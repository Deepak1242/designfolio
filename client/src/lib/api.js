import axios from 'axios';

// Backend URL - use env variable or hardcoded production URL
const API_URL = import.meta.env.VITE_API_URL || (
  import.meta.env.PROD 
    ? 'https://designfoliobackend.vercel.app'
    : ''
);

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add auth token to requests if available
api.interceptors.request.use((config) => {
  const userInfo = localStorage.getItem('userInfo');
  if (userInfo) {
    const { token } = JSON.parse(userInfo);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});

export default api;
