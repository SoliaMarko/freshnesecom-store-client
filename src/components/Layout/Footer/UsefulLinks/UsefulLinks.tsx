import {ReactElement} from 'react';
import {Box} from '@mui/material';
import LinksBlock from './LinksBlock';
import {temporalUsefulLinks} from '@/temporalData/temporalData';

const UsefulLinks = (): ReactElement => {
  return (
    <Box className="mb-12">
      <Box className="flex flex-row justify-between">
        <LinksBlock linksData={temporalUsefulLinks} />
      </Box>
    </Box>
  );
};

export default UsefulLinks;
