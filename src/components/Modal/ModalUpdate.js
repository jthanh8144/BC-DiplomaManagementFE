import { useContext } from 'react';
import classNames from 'classnames/bind';

import styles from './Modal.module.scss';
import images from '~/assets/images';
import { DataContext } from '~/contexts/DataContext';

const cx = classNames.bind(styles);

export function ModalUpdate() {
  const { diploma } = useContext(DataContext);

  const handleChangeRadio = (e) => {
    console.log(e.target.value);
  };
  
  return (
    <div
      className="modal fade"
      id="modal-update"
      tabIndex="-1"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-scrollable modal-xl">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Chỉnh sửa văn bằng</h5>
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
                  <input
                    type="text"
                    id="full-name"
                    className="form-control"
                    value={diploma?.name}
                  />
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
                    value={diploma?.birthday}
                  />
                </div>
                <div className="col-auto">
                  <label htmlFor="" className="col-form-label">
                    Giới tính
                  </label>
                </div>
                <div
                  className="col-auto"
                  onChange={(e) => handleChangeRadio(e)}
                >
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio1"
                      value="nam"
                      checked={
                        diploma?.gender ? diploma?.gender === 'nam' : true
                      }
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
                      value="nữ"
                      // checked={diploma?.gender === 'nữ'}
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
                  <input
                    type="text"
                    id="code"
                    className="form-control"
                    value={diploma?.code}
                  />
                </div>
                <div className="col-6">
                  <label htmlFor="certificate" className="col-form-label">
                    Loại bằng
                  </label>
                  <input
                    type="text"
                    id="certificate"
                    className="form-control"
                    value={diploma?.name}
                  />
                </div>
                <div className="col-2">
                  <label htmlFor="status" className="col-form-label">
                    Trạng thái
                  </label>
                  <select className="form-select" value={diploma?.status}>
                    <option value="false">Chưa xác nhận</option>
                    <option value="true">Đã xác nhận</option>
                  </select>
                </div>
              </div>
              <div className="row g-3 align-items-center">
                <div className="col-6">
                  <label htmlFor="speciality" className="col-form-label">
                    Chuyên ngành
                  </label>
                  <input
                    type="text"
                    id="speciality"
                    className="form-control"
                    value={diploma?.name}
                  />
                </div>
                <div className="col-6">
                  <label htmlFor="modeOfStudy" className="col-form-label">
                    Loại hình đào tạo
                  </label>
                  <input
                    type="text"
                    id="modeOfStudy"
                    className="form-control"
                    value={diploma?.name}
                  />
                </div>
              </div>
              <div className="row g-3 align-items-center">
                <div className="col-6">
                  <label htmlFor="school" className="col-form-label">
                    Trường
                  </label>
                  <input
                    type="text"
                    id="school"
                    className="form-control"
                    value={diploma?.school}
                  />
                </div>
                <div className="col-2">
                  <label htmlFor="graduationYear" className="col-form-label">
                    Năm tốt nghiệp
                  </label>
                  <input
                    type="text"
                    id="graduationYear"
                    className="form-control"
                    value={diploma?.graduateYear}
                  />
                </div>
                <div className="col-2">
                  <label htmlFor="" className="col-form-label">
                    Xếp loại
                  </label>
                  <select className="form-select" value={diploma?.rank || '1'}>
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
                  <input
                    type="text"
                    id="regNo"
                    className="form-control"
                    value={diploma?.regNo}
                  />
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
                      src={
                        diploma?.urlImage
                          ? diploma.urlImage
                          : images.imagePlaceholder
                      }
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
