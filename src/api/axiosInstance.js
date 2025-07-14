import axios from 'axios';
import config from '../config/config';

// Create an axios instance with default config
const axiosInstance = axios.create({
  baseURL: config.API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  // You can add other global settings here, e.g. timeout, auth headers, etc.
});

// Optional: Add request interceptor (e.g. to add token automatically)
axiosInstance.interceptors.request.use(
  (request) => {
    // Example: Add Authorization token if available
    // const token = localStorage.getItem('token');
    // if (token) {
    //   request.headers.Authorization = `Bearer ${token}`;
    // }
    return request;
  },
  (error) => Promise.reject(error)
);

// Optional: Add response interceptor to handle global errors
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Global error handling, e.g. redirect to login on 401
    if (error.response && error.response.status === 401) {
      // handle unauthorized access, e.g. logout user
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
