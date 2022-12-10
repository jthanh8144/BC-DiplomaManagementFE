import { useContext } from 'react';
import { Header } from '~/components/Header';
import { ModalLogin } from '~/components/Modal';
import { AuthContext } from '~/contexts/AuthContext';

export function DefaultLayout({ children }) {
  const { user } = useContext(AuthContext);

  return (
    <>
      <div className="container">
        <Header />
        {children}
      </div>
      {!!user === false && <ModalLogin />}
    </>
  );
}
