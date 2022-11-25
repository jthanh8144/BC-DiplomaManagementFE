import { axiosPrivate } from './axiosPrivate';
import { axiosPublic } from './axiosPublic';

export const userApi = {
  login: (data) => {
    const url = '/admins/login';
    return axiosPublic.post(url, data);
  },
  register: (data) => {
    const url = '/admins/register';
    return axiosPrivate.post(url, data);
  },
  profile: () => {
    const url = '/admins';
    return axiosPrivate.get(url);
  },
};
