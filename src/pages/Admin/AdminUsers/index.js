import { useContext } from 'react';
import classNames from 'classnames/bind';

import styles from '../Admin.module.scss';
import { AdminTable } from '~/components/Table';
import { DataContext } from '~/contexts/DataContext';
import { ModalAdmin } from '~/components/Modal';

const cx = classNames.bind(styles);

const admin = { username: 'jthanh8144', role: 'superadmin' };

export function AdminUsers() {
  const { setAdmin } = useContext(DataContext);

  const handleClick = () => {
    setAdmin(admin);
  };

  return (
    <>
      <main className={cx('main-content')}>
        <div className={cx('main-content__top')}>
          <button
            type="button"
            className="btn btn-danger"
            data-bs-toggle="modal"
            data-bs-target="#modal-admin"
          >
            <i className="fa-solid fa-plus"></i>
            Thêm người quản lí
          </button>
          <button
            type="button"
            className="btn btn-danger"
            data-bs-toggle="modal"
            data-bs-target="#modal-admin"
            onClick={handleClick}
          >
            Sửa
          </button>
          <div className={cx('main-content__top-search')}>
            <input
              type="text"
              placeholder="Tìm kiếm người quản lí"
              className={cx('form-control', 'search-input')}
            />
            <span className={cx('search-btn')}>
              <i className="fa-solid fa-magnifying-glass"></i>
            </span>
          </div>
        </div>
        <AdminTable admins={[{ id: 1 }, { id: 2 }]} />
      </main>
      <ModalAdmin />
    </>
  );
}
