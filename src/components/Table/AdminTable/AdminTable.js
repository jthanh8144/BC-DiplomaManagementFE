import classNames from 'classnames/bind';

import styles from '../Table.module.scss';
import { AdminTableItem } from './AdminTableItem';

const cx = classNames.bind(styles);

const isSuperAdmin = true

export function AdminTable({ admins }) {
  return (
    <div className={cx('main-content__table')}>
      <table className="table text-center">
        <thead className="sticky-top bg-white">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Tên tài khoản</th>
            <th scope="col">Loại tài khoản</th>
            {isSuperAdmin && <th scope="col"></th>}
          </tr>
        </thead>
        <tbody className={cx('main-content__data')}>
          {admins.map((admin) => (
            <AdminTableItem
              admin={admin}
              isSuperAdmin={true}
              key={admin.id}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
