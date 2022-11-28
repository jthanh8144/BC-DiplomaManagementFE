import { useState, useEffect, useContext } from 'react';
import classNames from 'classnames/bind';

import styles from '../Admin.module.scss';
import { DiplomaTable } from '~/components/Table';
import { ModalCreate, ModalInfo, ModalUpdate } from '~/components/Modal';
import { diplomaApi } from '~/api/diplomaApi';
import { useDebounce } from '~/hooks';
import { AuthContext } from '~/contexts/AuthContext';

const cx = classNames.bind(styles);

export function Diplomas() {
  const [diplomas, setDiplomas] = useState([{ id: 1 }, { id: 2 }]);
  const [searchValue, setSearchValue] = useState('');
  
  const { isSuperAdmin } = useContext(AuthContext);

  const debouncedValue = useDebounce(searchValue, 500);
  const fetchDiplomas = async () => {
    try {
      const response = await diplomaApi.getAll();
      setDiplomas(response);
    } catch (error) {
      console.log(error);
    }
  };
  const searchDiplomas = async () => {
    try {
      const response = await diplomaApi.getAll();
      setDiplomas(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!debouncedValue.trim()) {
      fetchDiplomas();
      return;
    }
    searchDiplomas();
  }, [debouncedValue]);

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
