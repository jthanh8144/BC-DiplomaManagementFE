import { useContext } from 'react';
import { ModalLogin } from '~/components/Modal';
import { AuthContext } from '~/contexts/AuthContext';

export function HomeLayout({ children }) {
  const { user } = useContext(AuthContext);
  return (
    <>
      {children}
      {!!user === false && <ModalLogin />}
    </>
  );
}
