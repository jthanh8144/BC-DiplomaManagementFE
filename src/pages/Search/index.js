import { useContext } from 'react';
import classNames from 'classnames/bind';

import styles from './Search.module.scss';
import { DiplomaTable } from '~/components/Table';
import { DataContext } from '~/contexts/DataContext';

const cx = classNames.bind(styles);

export function Search() {
  const { searchDiplomas } = useContext(DataContext);
  
  return (
    <main className={cx('main-content')}>
      <div className={cx('main-content__top')}>
        <span className={cx('main-content__top-title')}>Kết quả</span>
      </div>
      <DiplomaTable diplomas={searchDiplomas} isSuperAdmin={false} />
    </main>
  );
}
