import { useState, useEffect, useContext } from 'react';

import { userApi } from '~/api/userApi';
import { DataContext } from '~/contexts/DataContext';

export function ModalAdmin() {
  const { admin, setLoading } = useContext(DataContext);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('admin');

  useEffect(() => {
    if (!!admin) {
      setUsername(admin.username);
      setRole(admin.role);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [admin]);

  const handleClick = () => {
    if (!!admin) {
      handleUpdate();
    } else {
      handleCreate();
    }
  };

  const handleCreate = () => {
    if (username && password && role) {
      (async () => {
        setLoading(true);
        try {
          await userApi.register({ username, password, role });
          setLoading(false);
          alert('Thêm người quản lí thành công!');
          window.location.reload(false);
        } catch (error) {
          setLoading(false);
          console.log(error);
        }
      })();
    }
  };

  const handleUpdate = () => {
    if (password || role !== admin.role) {
      (async () => {
        setLoading(true);
        try {
          await userApi.update(admin.id, { password, role });
          setLoading(false);
          alert('Chỉnh sửa người quản lí thành công!');
          window.location.reload(false);
        } catch (error) {
          setLoading(false);
          console.log(error);
        }
      })();
    }
  };

  const clearInput = () => {
    setUsername('');
    setPassword('');
    setRole('admin');
  };

  return (
    <div
      className="modal fade"
      id="modal-admin"
      tabIndex="-1"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">
              {!!admin ? 'Chỉnh sửa người quản lí' : 'Thêm người quản lí'}
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={clearInput}
            ></button>
          </div>
          <div className="modal-body">
            <form>
              <div className="mb-3">
                <label htmlFor="admin-username" className="col-form-label">
                  Tên người dùng
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="admin-username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  readOnly={!!admin}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="admin-password" className="col-form-label">
                  Mật khẩu
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="admin-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="admin-role" className="col-form-label">
                  Loại tài khoản
                </label>
                <select
                  className="form-control"
                  id="admin-role"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                >
                  <option value="admin">Admin</option>
                  <option value="superadmin">Super Admin</option>
                </select>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Huỷ
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={handleClick}
            >
              {!!admin ? 'Lưu thay đổi' : 'Thêm'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
