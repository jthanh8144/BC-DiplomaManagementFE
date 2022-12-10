import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from '../Admin.module.scss';
import { DiplomaTable } from '~/components/Table';
import { ModalCreate, ModalInfo, ModalUpdate } from '~/components/Modal';
import { diplomaApi } from '~/api/diplomaApi';
import { useDebounce } from '~/hooks';
import { AuthContext } from '~/contexts/AuthContext';
import { DataContext } from '~/contexts/DataContext';

const cx = classNames.bind(styles);

export function Diplomas() {
  const navigate = useNavigate();

  const [diplomas, setDiplomas] = useState([{ id: 1 }, { id: 2 }]);
  const [searchValue, setSearchValue] = useState('');

  const { isSuperAdmin, logoutUser } = useContext(AuthContext);
  const { setLoading } = useContext(DataContext);

  const debouncedValue = useDebounce(searchValue, 200);
  const fetchDiplomas = async () => {
    setLoading(true);
    try {
      const response = await diplomaApi.getAll();
      setDiplomas(response);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      if (error.response.status === 401) {
        logoutUser();
        alert('Bạn chưa đăng nhập');
        navigate('/');
      } else {
        alert('Có lỗi xảy ra');
      }
    }
  };
  const searchDiplomas = async () => {
    try {
      const response = await diplomaApi.search({ name: debouncedValue });
      setDiplomas(response);
    } catch (error) {
      if (error.response.status === 401) {
        logoutUser();
        alert('Bạn chưa đăng nhập');
        navigate('/');
      } else {
        alert('Có lỗi xảy ra');
      }
    }
  };

  useEffect(() => {
    if (!debouncedValue.trim()) {
      fetchDiplomas();
      return;
    }
    searchDiplomas();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedValue]);

  const handleSyncData = async () => {
    try {
      setLoading(true);
      await diplomaApi.sync();
      setLoading(false);
      alert('Đồng bộ dữ liệu thành công!');
      window.location.reload(false);
    } catch (error) {
      setLoading(false);
      if (error.response.status === 401) {
        logoutUser();
        alert('Bạn chưa đăng nhập');
        navigate('/');
      } else {
        alert('Có lỗi xảy ra');
      }
    }
  };

  return (
    <>
      <main className={cx('main-content')}>
        <div className={cx('main-content__top')}>
          <button
            type="button"
            className="btn btn-danger"
            data-bs-toggle="modal"
            data-bs-target="#modal-form"
          >
            <i className="fa-solid fa-plus"></i>
            Thêm văn bằng
          </button>
          {isSuperAdmin && (
            <button
              type="button"
              className="btn btn-danger"
              onClick={handleSyncData}
            >
              <i className="fa-solid fa-arrows-rotate"></i>
              Đồng bộ dữ liệu từ blockchain
            </button>
          )}
          <div className={cx('main-content__top-search')}>
            <input
              type="text"
              placeholder="Tìm kiếm văn bằng"
              className={cx('form-control', 'search-input')}
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <span className={cx('search-btn')}>
              <i className="fa-solid fa-magnifying-glass"></i>
            </span>
          </div>
        </div>
        <DiplomaTable diplomas={diplomas} isSuperAdmin={isSuperAdmin} />
      </main>
      <ModalCreate />
      <ModalUpdate />
      <ModalInfo />
    </>
  );
}
