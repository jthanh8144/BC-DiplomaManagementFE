import axios from 'axios';

const axiosPublic = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'content-type': 'application/json',
  },
});

axiosPublic.interceptors.request.use(async (config) => {
  return config;
});

axiosPublic.interceptors.response.use(
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

export { axiosPublic };
