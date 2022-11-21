import { Header } from '~/components/Header';
import { ModalForm, ModalInfo } from '~/components/Modal';

export function DefaultLayout({ children }) {
  return (
    <>
      <div className="container">
        <Header />
        {children}
      </div>
      <ModalForm />
      <ModalInfo />
    </>
  );
}
