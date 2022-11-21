import classNames from 'classnames/bind';

import styles from './Modal.module.scss';

const cx = classNames.bind(styles);

export function ModalInfo({ diploma }) {
  return (
    <div
      className="modal fade"
      id="modal-info"
      tabIndex="-1"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-scrollable modal-xl">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Thông tin văn bằng</h5>
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
                <div className={cx('col-1', 'modal-section__label')}>
                  Họ và tên:
                </div>
                <div className={cx('col-3', 'modal-section__info')}>
                  Võ Văn Thành
                </div>
                <div className={cx('col-1', 'modal-section__label')}>
                  Ngày sinh:
                </div>
                <div className={cx('col-3', 'modal-section__info')}>
                  01/11/2001
                </div>
                <div className={cx('col-1', 'modal-section__label')}>
                  Giới tính:
                </div>
                <div className={cx('col-3', 'modal-section__info')}>Nam</div>
              </div>
            </form>
            <form className={cx('modal-section__form')}>
              <div className={cx('modal-section__wrap')}>
                <p className={cx('modal-section__title')}>Thông tin văn bằng</p>
                {/* <span
                  className={cx('badge', {
                    'bg-success': diploma.status,
                    'bg-danger': !diploma.status,
                  })}
                >
                  Đã xác nhận
                </span> */}
              </div>
              <div className="row g-3 align-items-center">
                <div className="col-6">
                  <div className="row">
                    <div className={cx('col-4', 'modal-section__label')}>
                      Số hiệu bằng:
                    </div>
                    <div className={cx('col-8', 'modal-section__info')}>
                      ABC-123-XYZ
                    </div>
                  </div>
                  <div className="row">
                    <div className={cx('col-4', 'modal-section__label')}>
                      Loại bằng:
                    </div>
                    <div className={cx('col-8', 'modal-section__info')}>
                      Đại học
                    </div>
                  </div>
                  <div className="row">
                    <div className={cx('col-4', 'modal-section__label')}>
                      Chuyên ngành:
                    </div>
                    <div className={cx('col-8', 'modal-section__info')}>
                      Công nghệ thông tin
                    </div>
                  </div>
                  <div className="row">
                    <div className={cx('col-4', 'modal-section__label')}>
                      Hình thức đào tạo:
                    </div>
                    <div className={cx('col-8', 'modal-section__info')}>
                      Chính quy
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="row">
                    <div className={cx('col-4', 'modal-section__label')}>
                      Trường:
                    </div>
                    <div className={cx('col-8', 'modal-section__info')}>
                      ABC-123-XYZ
                    </div>
                  </div>
                  <div className="row">
                    <div className={cx('col-4', 'modal-section__label')}>
                      Năm tốt nghiệp:
                    </div>
                    <div className={cx('col-8', 'modal-section__info')}>
                      2023
                    </div>
                  </div>
                  <div className="row">
                    <div className={cx('col-4', 'modal-section__label')}>
                      Xếp loại:
                    </div>
                    <div className={cx('col-8', 'modal-section__info')}>
                      Giỏi
                    </div>
                  </div>
                  <div className="row">
                    <div className={cx('col-4', 'modal-section__label')}>
                      Số vào sổ:
                    </div>
                    <div className={cx('col-8', 'modal-section__info')}>
                      HX-86-5301
                    </div>
                  </div>
                </div>
              </div>
              <div className="row g-3 align-items-center mt-2">
                <div className="col-12">
                  <div className={cx('modal-section__form-preview')}>
                    <img
                      src={'./placeholder.png'}
                      alt="preview"
                      className={cx('modal-section__form-img')}
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
