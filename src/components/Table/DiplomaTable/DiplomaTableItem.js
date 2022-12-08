import { useContext } from 'react';
import classNames from 'classnames';

import { DataContext } from '~/contexts/DataContext';
import { diplomaApi } from '~/api/diplomaApi';

export function DiplomaTableItem({
  index = 1,
  diploma,
  isAdmin = false,
  isSuperAdmin = false,
}) {
  const { setDiploma } = useContext(DataContext);

  const handleClick = async () => {
    try {
      const response = await diplomaApi.getByCode(diploma.code);
      console.log(response);
      setDiploma(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async () => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm('Bạn cho chắc sẽ xoá văn bằng này chứ?') === true) {
      try {
        await diplomaApi.delete(diploma.code);
        alert('Xoá văn bằng thành công!');
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <tr>
      <td>{index}</td>
      <td>{diploma.fullName}</td>
      <td>{diploma.dateOfBirth}</td>
      <td>{diploma.gender}</td>
      <td>{diploma.certificate}</td>
      <td>{diploma.modeOfStudy}</td>
      <td>{diploma.speciality}</td>
      <td>{diploma.graduationYear}</td>
      <td>{diploma.code}</td>
      <td>
        <span
          className={classNames('badge', {
            'bg-success': diploma.status,
            'bg-danger': !diploma.status,
          })}
        >
          {diploma.status ? 'Đã xác nhận' : 'Chưa xác nhận'}
        </span>
      </td>
      <td>
        <i
          className="fa-solid fa-eye"
          onClick={handleClick}
          data-bs-toggle="modal"
          data-bs-target="#modal-info"
        ></i>
        {isAdmin && (
          <i
            className="fa-solid fa-pen"
            onClick={handleClick}
            data-bs-toggle="modal"
            data-bs-target="#modal-update"
          ></i>
        )}
        {isAdmin && isSuperAdmin && (
          <i className="fa-solid fa-trash" onClick={handleDelete}></i>
        )}
      </td>
    </tr>
  );
}
