import {ReactElement} from 'react';
import {Outlet} from 'react-router-dom';
import Header from '@/components/Layout/Header/Header';
import Footer from '@/components/Layout/Footer/Footer';
import CustomSnackbar from '@/components/Custom/CustomSnackbar/CustomSnackbar';
// import {Backdrop} from '@mui/material';

const AppLayout = (): ReactElement => {
  // const [hasBackdrop, setHasBackdrop] = useState<boolean>(false);

  // const openBackdrop = () => {
  //   setHasBackdrop(true);
  // };

  // const closeBackdrop = () => {
  //   setHasBackdrop(false);
  // };

  return (
    <>
      <CustomSnackbar />
      {/* <Backdrop open={hasBackdrop} /> */}
      <Header />
      <main className="my-3">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default AppLayout;
