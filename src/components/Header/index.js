import { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './Header.module.scss';
import images from '~/assets/images';
import { AuthContext } from '~/contexts/AuthContext';
import { userApi } from '~/api/userApi';

const cx = classNames.bind(styles);

export function Header() {
  const navigate = useNavigate();
  const { user, logoutUser, setIsSuperAdmin } = useContext(AuthContext);

  useEffect(() => {
    if (user) {
      (async () => {
        try {
          const res = await userApi.profile();
          setIsSuperAdmin(res.role === 'superadmin');
        } catch (error) {
          if (error.response.status === 401) {
            logoutUser();
            alert('Bạn chưa đăng nhập');
            navigate('/');
          }
        }
      })();
    }
    // eslint-disable-next-line
  }, []);

  return (
    <nav
      className={cx('navbar', 'navbar navbar-expand-lg navbar-light bg-white')}
    >
      <div className={cx('container-fluid', 'main-nav')}>
        <Link to="/" className={cx('main-nav__logo', 'navbar-brand')}>
          LOGOLOGO
        </Link>
        <button className="navbar-toggler" type="button">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {!!user && (
              <>
                <li className={cx('nav-item', 'main-nav__item')}>
                  <Link
                    to="/admin/diplomas"
                    className={cx('nav-link', 'main-nav__item-link', 'active')}
                  >
                    Quản lí văn bằng
                  </Link>
                </li>
                <li className={cx('nav-item', 'main-nav__item')}>
                  <Link
                    to="/admins/users"
                    className={cx('nav-link', 'main-nav__item-link')}
                  >
                    Quản lí người dùng
                  </Link>
                </li>
              </>
            )}
          </ul>
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className={cx('nav-item', { dropdown: !!user })}>
              {!!user ? (
                <div className={cx('main-nav__avatar')}>
                  <img
                    src={images.placeholder}
                    alt="avatar-placeholder"
                    className={cx('main-nav__avatar-img')}
                  />
                  <Link
                    to="/"
                    className="nav-link dropdown-toggle"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {user}
                  </Link>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <Link className="dropdown-item" to="#">
                        Action
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/"
                        onClick={() => logoutUser()}
                      >
                        Đăng xuất
                      </Link>
                    </li>
                  </ul>
                </div>
              ) : (
                <Link
                  className={cx('main-nav__link')}
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#modal-login"
                >
                  Đăng nhập
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
