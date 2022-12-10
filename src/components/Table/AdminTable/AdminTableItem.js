import { useContext } from 'react';

import { DataContext } from '~/contexts/DataContext';
import { userApi } from '~/api/userApi';

export function AdminTableItem({ admin, isSuperAdmin = true }) {
  const { setAdmin, setLoading } = useContext(DataContext);
  const handleClick = async () => {
    setLoading(true);
    try {
      const response = await userApi.getById(admin.id);
      setAdmin(response);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const handleDelete = async () => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm('Bạn cho chắc sẽ xoá tài khoản này chứ?') === true) {
      setLoading(true);
      try {
        await userApi.delete(admin.id);
        setLoading(false);
        alert('Xoá tài khoản thành công!');
        window.location.reload(false);
      } catch (error) {
        setLoading(false);
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
          <i className="fa-solid fa-trash" onClick={handleDelete}></i>
        </td>
      )}
    </tr>
  );
}
