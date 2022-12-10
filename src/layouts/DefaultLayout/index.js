import { Header } from '~/components/Header';
import { ModalLogin } from '~/components/Modal';

export function DefaultLayout({ children }) {
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
