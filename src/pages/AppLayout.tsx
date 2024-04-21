import {ReactElement} from 'react';
import {Outlet} from 'react-router-dom';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

const AppLayout = (): ReactElement => {
  return (
    <>
      <Header />
      <main className="h-full">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default AppLayout;
