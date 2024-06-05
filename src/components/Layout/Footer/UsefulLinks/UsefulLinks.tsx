import {ReactElement} from 'react';
import {Box} from '@mui/material';
import LinksBlock from './LinksBlock';
import {temporalUsefulLinks} from '@/temporalData/temporalData';
import CustomAccordionItem from '@/components/Custom/CustomAccordion/CustomAccordionItem/CustomAccordionItem';
import LinksList from './LinksList';

const UsefulLinks = (): ReactElement => {
  return (
    <Box className="mb-12">
      <Box className="my-6 block md:hidden">
        {temporalUsefulLinks.map(({id, value: {header, items}}) => {
          return <CustomAccordionItem key={id} summary={header} details={<LinksList labels={items} />} />;
        })}
      </Box>
      <LinksBlock linksData={temporalUsefulLinks} classNames="md:flex md:flex-row md:flex-wrap md:justify-between hidden" />
    </Box>
  );
};

export default UsefulLinks;
