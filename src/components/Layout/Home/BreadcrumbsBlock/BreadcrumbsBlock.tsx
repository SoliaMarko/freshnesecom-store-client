import {ReactElement} from 'react';
import {Box, Breadcrumbs, Link, Typography} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';

const BreadcrumbsBlock = (): ReactElement => {
  return (
    <Box className="mb-2 mt-3.5 py-4">
      <Breadcrumbs aria-label="breadcrumb" className="text-primary-400">
        <Link href="/" className="flex items-center text-primary-300 no-underline hover:underline">
          <HomeIcon className="mr-1" />
          Homepage
        </Link>
        <Typography className="text-primary">All products</Typography>
      </Breadcrumbs>
    </Box>
  );
};

export default BreadcrumbsBlock;
