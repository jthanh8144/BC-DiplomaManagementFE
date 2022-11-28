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
    const url = '/admins/profile';
    return axiosPrivate.get(url);
  },
  getAll: () => {
    const url = '/admins';
    return axiosPrivate.get(url);
  },
  getById: (id) => {
    const url = `/admins/${id}`;
    return axiosPrivate.get(url);
  },
  update: (id, data) => {
    const url = `/admins/${id}`;
    return axiosPrivate.put(url, data);
  },
  delete: (id) => {
    const url = `/admins/${id}`;
    return axiosPrivate.delete(url);
  },
};
