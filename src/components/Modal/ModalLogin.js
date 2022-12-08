import { useState, useContext, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthContext } from '~/contexts/AuthContext';
import { userApi } from '~/api/userApi';

export function ModalLogin() {
  const navigate = useNavigate();

  const { loginUser, setIsSuperAdmin } = useContext(AuthContext);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const closeModal = useRef()

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      if (username && password) {
        const response = await userApi.login({ username, password });
        if (response.accessToken) {
          loginUser(response.accessToken, username);
          const res = await userApi.profile();
          setIsSuperAdmin(res.role === 'superadmin');
          closeModal.current.click()
          navigate('/admins/diplomas');
        }
      }
    } catch (error) {
      console.log(error);
      alert('Sai tài khoản hoặc mật khẩu!');
    }
  };

  return (
    <div
      className="modal fade"
      id="modal-login"
      tabIndex="-1"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Đăng nhập</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              ref={closeModal}
            ></button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleLogin}>
              <div className="mb-3">
                <label htmlFor="login-username" className="col-form-label">
                  Tên người dùng
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="login-username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="login-password" className="col-form-label">
                  Mật khẩu
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="login-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-danger"
              onClick={handleLogin}
            >
              Đăng nhập
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
