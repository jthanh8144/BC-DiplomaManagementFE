import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './Home.module.scss';
import images from '~/assets/images';
import { AuthContext } from '~/contexts/AuthContext';
import { DataContext } from '~/contexts/DataContext';
import { diplomaApi } from '~/api/diplomaApi';

const cx = classNames.bind(styles);

export function Home() {
  const navigate = useNavigate();

  const { user } = useContext(AuthContext);
  const { setSearchDiplomas } = useContext(DataContext);

  const [fullName, setFullName] = useState('');
  const [code, setCode] = useState('');

  const handleSearch = async () => {
    if (fullName || code) {
      try {
        const response = await diplomaApi.search({ fullName, code });
        setSearchDiplomas(response);
        navigate('/diplomas');
      } catch (error) {
        alert('Có lỗi xảy ra trong quá trình tìm kiếm!')
        console.log(error);
      }
    }
  };

  return (
    <div className={cx('home-container')}>
      <div className="container">
        <nav className="navbar">
          <Link to="/" className={cx('home-logo', 'home-link')}>
            HTT
          </Link>
          <ul className="navbar-nav mb-2 mb-lg-0">
            {!!!user ? (
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
            ) : (
              <li className="nav-item">
                <Link className={cx('home-link')} to="/admins/diplomas">
                  Trang quản lí
                </Link>
              </li>
            )}
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
            <input
              className="form-control"
              placeholder="Họ và tên"
              value={fullName}
              onChange={(e) => {
                setFullName(e.target.value);
                setCode('');
              }}
            />
            <span>Hoặc</span>
            <input
              className="form-control"
              placeholder="Số hiệu văn bằng"
              value={code}
              onChange={(e) => {
                setCode(e.target.value);
                setFullName('');
              }}
            />
            <button
              type="button"
              className={cx('home-search__btn', 'btn btn-danger')}
              onClick={handleSearch}
            >
              <i className="fa-solid fa-magnifying-glass"></i>
              Tìm kiếm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
