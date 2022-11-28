import classNames from 'classnames/bind';

import styles from '../Table.module.scss';
import { DiplomaTableItem } from './DiplomaTableItem';

const cx = classNames.bind(styles);

export function DiplomaTable({ diplomas, isAdmin = true, isSuperAdmin }) {
  return (
    <div className={cx('main-content__table')}>
      <table className="table text-center">
        <thead className="sticky-top bg-white">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Tên đầy đủ</th>
            <th scope="col">Ngày sinh</th>
            <th scope="col">Giới tính</th>
            <th scope="col">Loại bằng</th>
            <th scope="col">Hình thức ĐT</th>
            <th scope="col">Chuyên ngành</th>
            <th scope="col">Năm TN</th>
            <th scope="col">Số hiệu bằng</th>
            <th scope="col">Trạng thái</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody className={cx('main-content__data')}>
          {diplomas.length > 0 ? (
            diplomas.map((diploma) => (
              <DiplomaTableItem
                diploma={diploma}
                isAdmin={isAdmin}
                isSuperAdmin={isSuperAdmin}
                key={diploma.id}
              />
            ))
          ) : (
            <tr>
              <td colSpan="10">Không có văn bằng nào!</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
