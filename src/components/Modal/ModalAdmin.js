export function ModalAdmin({ admin }) {
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
                />
              </div>
              <div className="mb-3">
                <label htmlFor="admin-role" className="col-form-label">
                  Loại tài khoản
                </label>
                <select className="form-control" id="admin-role">
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
            <button type="button" className="btn btn-danger">
              {!!admin ? 'Lưu thay đổi' : 'Thêm'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
