import {ReactElement} from 'react';
import {Outlet} from 'react-router-dom';
import Header from '@/components/Layout/Header/Header';
import Footer from '@/components/Layout/Footer/Footer';

const AppLayout = (): ReactElement => {
  return (
    <>
      <Header />
      <main className="my-3">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default AppLayout;
