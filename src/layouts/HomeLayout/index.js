import { ModalLogin } from '~/components/Modal';

export function HomeLayout({ children }) {
  return (
    <>
      {children}
      {!true === false && <ModalLogin />}
    </>
  );
}
