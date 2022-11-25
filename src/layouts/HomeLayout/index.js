import { useContext } from 'react';

import { AuthContext } from '~/contexts/AuthContext';
import { ModalLogin } from '~/components/Modal';

export function HomeLayout({ children }) {
  const { user } = useContext(AuthContext);

  return (
    <>
      {children}
      {!true === false && <ModalLogin />}
    </>
  );
}
