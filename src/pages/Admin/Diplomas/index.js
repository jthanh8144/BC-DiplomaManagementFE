import { useContext } from 'react';
import classNames from 'classnames/bind';

import styles from './Diplomas.module.scss';
import { DiplomaTable } from '~/components/DiplomaTable/DiplomaTable';
import { DataContext } from '~/contexts/DataContext';

const cx = classNames.bind(styles);

const diploma = { name: 'vvv', status: true };

export function Diplomas() {
  const { setDiploma } = useContext(DataContext);

  const handleClick = () => {
    setDiploma(diploma);
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
        <button
          type="button"
          className="btn btn-danger"
          data-bs-toggle="modal"
          data-bs-target="#modal-info"
          onClick={handleClick}
        >
          Sửa văn bằng
        </button>
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
