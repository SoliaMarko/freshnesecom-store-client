import {ReactElement} from 'react';
import {Outlet} from 'react-router-dom';
import Header from '@/components/Layout/Header/Header';
import Footer from '@/components/Layout/Footer/Footer';
import CustomSnackbar from '@/components/Custom/CustomSnackbar/CustomSnackbar';
import CustomSpinner from '@/components/Custom/CustomSpinner/CustomSpinner';
import CustomConfirmDialog from '@/components/Custom/CustomConfirmDialog/CustomConfirmDialog';
import BreadcrumbsBlock from '@/components/Custom/BreadcrumbsBlock/BreadcrumbsBlock';
import {useBreadcrumbs} from '@/hooks/useBreadcrumbs';
import router from '@/router';
import {getTransformedArrayWithIDs} from '@/utils/arrayFormaters/getTransformedArrayWithIDs';

const AppLayout = (): ReactElement => {
  const breadcrumbs = useBreadcrumbs({router});
  const breadcrumbsWithIDs = breadcrumbs.length > 1 && getTransformedArrayWithIDs(breadcrumbs);

  return (
    <>
      <CustomConfirmDialog />
      <CustomSpinner />
      <CustomSnackbar />
      <Header />
      {breadcrumbsWithIDs && <BreadcrumbsBlock breadcrumbs={breadcrumbsWithIDs} />}
      <main className="relative my-3">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default AppLayout;
