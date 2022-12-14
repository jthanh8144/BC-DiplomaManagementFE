import axios from 'axios';

const axiosPrivate = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'content-type': 'application/json',
  },
});

axiosPrivate.interceptors.request.use(async (config) => {
  let authTokens = localStorage.getItem('authTokens')
    ? localStorage.getItem('authTokens')
    : null;
  if (authTokens) {
    config.headers['Authorization'] = `Bearer ${authTokens}`;
  }
  return config;
});

axiosPrivate.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  async (error) => {
    throw error;
  }
);

export { axiosPrivate };
