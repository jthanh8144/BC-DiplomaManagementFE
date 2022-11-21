import classNames from 'classnames/bind';

import styles from './Diplomas.module.scss';
import { DiplomaTable } from '~/components/DiplomaTable/DiplomaTable';

const cx = classNames.bind(styles);

export function Search() {
  return (
    <main className={cx('main-content')}>
      <div className={cx('main-content__top')}>
        Kết quả
      </div>
      <DiplomaTable diplomas={[{id: 1}, {id: 2}]} />
    </main>
  );
}
