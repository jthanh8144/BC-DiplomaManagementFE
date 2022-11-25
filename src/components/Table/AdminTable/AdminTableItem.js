export function AdminTableItem({ admin, isSuperAdmin = true }) {
  return (
    <tr>
      <td>{admin.id}</td>
      <td>{admin.username}</td>
      <td>{admin.role}</td>
      {isSuperAdmin && (
        <td>
          <i className="fa-solid fa-pen"></i>
          <i className="fa-solid fa-trash"></i>
        </td>
      )}
    </tr>
  );
}
