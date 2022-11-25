import { axiosPrivate } from './axiosPrivate';

export const diplomaApi = {
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
};
