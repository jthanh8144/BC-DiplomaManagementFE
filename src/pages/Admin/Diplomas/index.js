import classNames from 'classnames/bind';
import { useState } from 'react';

import styles from './Diplomas.module.scss';
import { DiplomaTable } from '~/components/DiplomaTable/DiplomaTable';
import { ModalForm } from '~/components/Modal';

const cx = classNames.bind(styles);

const diplomas = [{}];

export function Diplomas() {
  const [isShow, setIsShow] = useState(false)
  const handleClick = () => {
    setIsShow(!isShow)
  };

  return (
    <main className={cx('main-content')}>
      <div className={cx('main-content__top')}>
        <button
          type="button"
          className="btn btn-danger"
          data-bs-toggle="modal"
          data-bs-target="#modal-form"
        >
          <i className="fa-solid fa-plus"></i>
          Thêm văn bằng
        </button>
        <button className="btn btn-danger" onClick={handleClick}>
          Sửa văn bằng
        </button>
        {isShow && <ModalForm/>}
        <div className={cx('main-content__top-search')}>
          <input
            type="text"
            placeholder="Tìm kiếm văn bằng"
            className={cx('form-control', 'search-input')}
          />
          <span className={cx('search-btn')}>
            <i className="fa-solid fa-magnifying-glass"></i>
          </span>
        </div>
      </div>
      <DiplomaTable diplomas={[{ id: 1 }, { id: 2 }]} />
    </main>
  );
}
