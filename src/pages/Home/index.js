import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './Home.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

export function Home() {
  return (
    <div className={cx('home-container')}>
      <div className="container">
        <nav className="navbar">
          <Link to="/" className={cx('home-logo', 'home-link')}>
            HTT
          </Link>
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={cx('home-link')}
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#modal-login"
              >
                Đăng nhập
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className={cx('d-flex', 'justify-content-center', 'home-wraper')}>
        <img
          alt="center"
          src={images.home}
          className={cx('home-wraper__image')}
        />
      </div>
      <div className="container">
        <div className={cx('home-search')}>
          <span className={cx('home-search__title')}>
            Hệ thống tra cứu văn bằng
          </span>
          <div className={cx('home-search__input')}>
            <input className="form-control" placeholder="Họ và tên" />
            <span>Hoặc</span>
            <input className="form-control" placeholder="Số hiệu văn bằng" />
            <button type="button" className={cx('home-search__btn', 'btn btn-danger')}>
              <i class="fa-solid fa-magnifying-glass"></i>
              Tìm kiếm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
