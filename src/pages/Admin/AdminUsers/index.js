import { useState, useEffect, useContext } from 'react';
import classNames from 'classnames/bind';

import styles from '../Admin.module.scss';
import { AdminTable } from '~/components/Table';
import { ModalAdmin } from '~/components/Modal';
import { userApi } from '~/api/userApi';
import { AuthContext } from '~/contexts/AuthContext';
import { DataContext } from '~/contexts/DataContext';

const cx = classNames.bind(styles);

export function AdminUsers() {
  const { isSuperAdmin } = useContext(AuthContext);
  const { setAdmin, setLoading } = useContext(DataContext);

  const [admins, setAdmins] = useState([]);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const response = await userApi.getAll();
        setAdmins(response);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    })();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <main className={cx('main-content')}>
        {isSuperAdmin && (
          <div className={cx('main-content__top')}>
            <button
              type="button"
              className="btn btn-danger"
              data-bs-toggle="modal"
              data-bs-target="#modal-admin"
              onClick={() => setAdmin(null)}
            >
              <i className="fa-solid fa-plus"></i>
              Thêm người quản lí
            </button>
          </div>
        )}

        <AdminTable admins={admins} isSuperAdmin={isSuperAdmin} />
      </main>
      <ModalAdmin />
    </>
  );
}
