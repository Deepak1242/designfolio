import axios from 'axios';

// Production backend URL
const API_URL = import.meta.env.PROD 
  ? 'https://designfoliobackend-d0pp8657k-demoncommander12-1854s-projects.vercel.app'
  : '';

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
