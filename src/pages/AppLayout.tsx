import Header from '@/components/Header/Header';
import {Outlet} from 'react-router-dom';

const AppLayout = (): JSX.Element => {
  return (
    <>
      <Header />
      <main className="h-full">
        <Outlet />
      </main>
    </>
  );
};

export default AppLayout;
