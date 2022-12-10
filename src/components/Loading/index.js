import { useContext } from 'react';
import Modal from 'react-bootstrap/Modal';
import Spinner from 'react-bootstrap/Spinner';
import classNames from 'classnames/bind';

import styles from './Loading.module.scss';
import { DataContext } from '~/contexts/DataContext';

const cx = classNames.bind(styles);

export function Loading() {
  const { loading } = useContext(DataContext);
  return (
    <Modal
      show={loading}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className={cx('loading-body')}>
        <Spinner
          as="span"
          animation="border"
          role="status"
          aria-hidden="true"
        />
        <span className={cx('loading-body__text')}>
          Vui lòng chờ trong giây lát...
        </span>
      </Modal.Body>
    </Modal>
  );
}
