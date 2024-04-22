import {ReactElement} from 'react';
import {Box} from '@mui/material';
import BreadcrumbsBlock from '@/components/Layout/Home/BreadcrumbsBlock/BreadcrumbsBlock';

const Home = (): ReactElement => {
  return (
    <Box>
      <BreadcrumbsBlock />
      <Box>Home Page</Box>
    </Box>
  );
};

export default Home;
