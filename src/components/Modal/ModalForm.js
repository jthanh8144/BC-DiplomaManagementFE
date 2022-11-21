import classNames from 'classnames/bind';

import styles from './Modal.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

export function ModalForm() {
  return (
    <div
      className="modal fade"
      id="modal-form"
      tabIndex="-1"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-scrollable modal-xl">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">
              Thêm văn bằng
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form className={cx('modal-section__form')}>
              <p className={cx('modal-section__title')}>Thông tin cá nhân</p>
              <div className="row g-3 align-items-center">
                <div className="col-auto">
                  <label htmlFor="full-name" className="col-form-label">
                    Họ và tên
                  </label>
                </div>
                <div className="col-auto">
                  <input type="text" id="full-name" className="form-control" />
                </div>
                <div className="col-auto">
                  <label htmlFor="date-of-birth" className="col-form-label">
                    Ngày sinh
                  </label>
                </div>
                <div className="col-auto">
                  <input
                    type="date"
                    id="date-of-birth"
                    className="form-control"
                  />
                </div>
                <div className="col-auto">
                  <label htmlFor="" className="col-form-label">
                    Giới tính
                  </label>
                </div>
                <div className="col-auto">
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio1"
                      value="option1"
                    />
                    <label className="form-check-label" htmlFor="inlineRadio1">
                      Nam
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio2"
                      value="option2"
                    />
                    <label className="form-check-label" htmlFor="inlineRadio2">
                      Nữ
                    </label>
                  </div>
                </div>
              </div>
            </form>
            <form className={cx('modal-section__form')}>
              <p className={cx('modal-section__title')}>Thông tin văn bằng</p>
              <div className="row g-3 align-items-center">
                <div className="col-4">
                  <label htmlFor="code" className="col-form-label">
                    Số hiệu bằng
                  </label>
                  <input type="text" id="code" className="form-control" />
                </div>
                <div className="col-6">
                  <label htmlFor="certificate" className="col-form-label">
                    Loại bằng
                  </label>
                  <input
                    type="text"
                    id="certificate"
                    className="form-control"
                  />
                </div>
                <div className="col-2">
                  <label htmlFor="status" className="col-form-label">
                    Trạng thái
                  </label>
                  <select className="form-select">
                    <option value="0">Chưa xác nhận</option>
                    <option value="1">Đã xác nhận</option>
                  </select>
                </div>
              </div>
              <div className="row g-3 align-items-center">
                <div className="col-6">
                  <label htmlFor="speciality" className="col-form-label">
                    Chuyên ngành
                  </label>
                  <input type="text" id="speciality" className="form-control" />
                </div>
                <div className="col-6">
                  <label htmlFor="modeOfStudy" className="col-form-label">
                    Loại hình đào tạo
                  </label>
                  <input
                    type="text"
                    id="modeOfStudy"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="row g-3 align-items-center">
                <div className="col-6">
                  <label htmlFor="school" className="col-form-label">
                    Trường
                  </label>
                  <input type="text" id="school" className="form-control" />
                </div>
                <div className="col-2">
                  <label htmlFor="graduationYear" className="col-form-label">
                    Năm tốt nghiệp
                  </label>
                  <input
                    type="text"
                    id="graduationYear"
                    className="form-control"
                  />
                </div>
                <div className="col-2">
                  <label htmlFor="" className="col-form-label">
                    Xếp loại
                  </label>
                  <select className="form-select">
                    <option value="0">Xuất sắc</option>
                    <option value="1">Giỏi</option>
                    <option value="2">Khá</option>
                    <option value="3">Trung bình</option>
                  </select>
                </div>
                <div className="col-2">
                  <label htmlFor="regNo" className="col-form-label">
                    Số vào sổ
                  </label>
                  <input type="text" id="regNo" className="form-control" />
                </div>
              </div>
              <div className="row g-3 align-items-center mt-2">
                <div className="col-12">
                  <div className="row mb-2">
                    <div className="col-2">
                      <label htmlFor="school" className="col-form-label">
                        Ảnh văn bằng
                      </label>
                    </div>
                    <div className="col-10">
                      <input
                        type="file"
                        accept="image/png, image/jpeg"
                        id="school"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className={cx('modal-section__form-preview')}>
                    <img
                      src={images.imagePlaceholder}
                      alt="preview"
                      className={cx('modal-section__form-img')}
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-danger">
              Hoàn thành
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
