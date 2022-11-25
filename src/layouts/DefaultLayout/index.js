import { useContext } from 'react';

import { AuthContext } from '~/contexts/AuthContext';
import { Header } from '~/components/Header';
import { ModalLogin } from '~/components/Modal';

export function DefaultLayout({ children }) {
  const { user } = useContext(AuthContext);

  return (
    <>
      <div className="container">
        <Header />
        {children}
      </div>
      {!true === false && (
        <ModalLogin />
      )}
    </>
  );
}
