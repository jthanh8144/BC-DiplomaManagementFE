import { useContext } from 'react';

import { AuthContext } from '~/contexts/AuthContext';
import { Header } from '~/components/Header';
import { ModalCreate, ModalInfo, ModalUpdate } from '~/components/Modal';

export function DefaultLayout({ children }) {
  const { user } = useContext(AuthContext);

  return (
    <>
      <div className="container">
        <Header />
        {children}
      </div>
      {!false === true && (
        <>
          <ModalCreate />
          <ModalUpdate />
          <ModalInfo />
        </>
      )}
    </>
  );
}
