import { useContext } from 'react';

import { DataContext } from '~/contexts/DataContext';
import { userApi } from '~/api/userApi';

export function AdminTableItem({ admin, isSuperAdmin = true }) {
  const { setAdmin } = useContext(DataContext);
  const handleClick = async () => {
    try {
      const response = userApi.getById(admin.id);
      setAdmin(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async () => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm('Bạn cho chắc sẽ xoá tài khoản này chứ?') === true) {
      try {
        await userApi.delete(admin.id);
        alert('Xoá tài khoản thành công!');
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <tr>
      <td>{admin.id}</td>
      <td>{admin.username}</td>
      <td>{admin.role}</td>
      {isSuperAdmin && (
        <td>
          <i
            className="fa-solid fa-pen"
            onClick={handleClick}
            data-bs-toggle="modal"
            data-bs-target="#modal-admin"
          ></i>
          <i
            className="fa-solid fa-trash"
            onClick={handleDelete}
            data-bs-toggle="modal"
            data-bs-target="#modal-admin"
          ></i>
        </td>
      )}
    </tr>
  );
}
