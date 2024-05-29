import {ReactElement} from 'react';
import {Outlet} from 'react-router-dom';
import Header from '@/components/Layout/Header/Header';
import Footer from '@/components/Layout/Footer/Footer';
import CustomSnackbar from '@/components/Custom/CustomSnackbar/CustomSnackbar';
import CustomSpinner from '@/components/Custom/CustomSpinner/CustomSpinner';

const AppLayout = (): ReactElement => {
  return (
    <>
      <CustomSpinner />
      <CustomSnackbar />
      <Header />
      <main className="mx-11 my-3">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default AppLayout;
