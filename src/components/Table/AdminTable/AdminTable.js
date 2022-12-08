import classNames from 'classnames/bind';

import styles from '../Table.module.scss';
import { AdminTableItem } from './AdminTableItem';

const cx = classNames.bind(styles);

export function AdminTable({ admins, isSuperAdmin }) {
  return (
    <div className={cx('main-content__table')}>
      <table className="table text-center">
        <thead className="bg-white">
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
              isSuperAdmin={isSuperAdmin}
              key={admin.id}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
