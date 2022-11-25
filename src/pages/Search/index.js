import classNames from 'classnames/bind';

import styles from './Search.module.scss';
import { DiplomaTable } from '~/components/Table';

const cx = classNames.bind(styles);

export function Search() {
  return (
    <main className={cx('main-content')}>
      <div className={cx('main-content__top')}>
        <span className={cx('main-content__top-title')}>Kết quả</span>
      </div>
      <DiplomaTable diplomas={[{id: 1}, {id: 2}]} />
    </main>
  );
}
