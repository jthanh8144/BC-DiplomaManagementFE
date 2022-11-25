export function ModalLogin() {
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
            ></button>
          </div>
          <div className="modal-body">
            <form>
              <div className="mb-3">
                <label htmlFor="login-username" className="col-form-label">
                  Tên người dùng
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="login-username"
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
                />
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-danger">
              Đăng nhập
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
