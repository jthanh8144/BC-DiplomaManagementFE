import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';

import styles from '../Admin.module.scss';
import { AdminTable } from '~/components/Table';
import { ModalAdmin } from '~/components/Modal';
import { userApi } from '~/api/userApi';

const cx = classNames.bind(styles);

export function AdminUsers() {
  const [admins, setAdmins] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await userApi.getAll();
        setAdmins(response);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

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
          {/* <div className={cx('main-content__top-search')}>
            <input
              type="text"
              placeholder="Tìm kiếm người quản lí"
              className={cx('form-control', 'search-input')}
            />
            <span className={cx('search-btn')}>
              <i className="fa-solid fa-magnifying-glass"></i>
            </span>
          </div> */}
        </div>
        <AdminTable admins={admins} />
      </main>
      <ModalAdmin />
    </>
  );
}
