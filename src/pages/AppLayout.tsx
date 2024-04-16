import Header from '@/components/Header/Header';
import {Outlet} from 'react-router-dom';

const AppLayout = (): JSX.Element => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default AppLayout;
