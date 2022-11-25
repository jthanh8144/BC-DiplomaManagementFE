import classNames from 'classnames';

export function DiplomaTableItem({
  diploma,
  isAdmin = false,
  isSuperAdmin = false,
}) {
  return (
    <tr>
      <td>{diploma.id}</td>
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
      {isAdmin && (
        <td>
          <i className="fa-solid fa-pen"></i>
          {isSuperAdmin && <i className="fa-solid fa-trash"></i>}
        </td>
      )}
    </tr>
  );
}
