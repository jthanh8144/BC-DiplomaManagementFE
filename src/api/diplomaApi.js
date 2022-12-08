import { axiosPublic } from './axiosPublic';
import { axiosPrivate } from './axiosPrivate';

export const diplomaApi = {
  search: (data) => {
    const url = '/diplomas';
    return axiosPublic.get(url, { params: data });
  },
  getAll: () => {
    const url = '/diplomas';
    return axiosPrivate.get(url);
  },
  getByCode: (code) => {
    const url = `/diplomas/${code}`;
    return axiosPrivate.get(url);
  },
  create: (data) => {
    const url = '/diplomas';
    return axiosPrivate.post(url, data);
  },
  update: (code, data) => {
    const url = `/diplomas/${code}`;
    return axiosPrivate.put(url, data);
  },
  delete: (code) => {
    const url = `/diplomas/${code}`;
    return axiosPrivate.delete(url);
  },
  sync: () => {
    const url = '/diplomas/sync';
    return axiosPrivate.get(url);
  },
  uploadImage: (data) => {
    const url = '/upload';
    return axiosPrivate.post(url, data, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  },
};
