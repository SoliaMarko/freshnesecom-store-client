import {ReactElement} from 'react';
import {Box, Typography} from '@mui/material';
import LinksList from './LinksList';
import {LinksBlockProps} from '@/interfaces/props/LayoutProps/Footer/usefulLinks.interface';

const LinksBlock = ({linksData}: LinksBlockProps): ReactElement => {
  return (
    <>
      {linksData.map(
        (link, index): ReactElement => (
          <Box key={`${index}-${link.header}`}>
            <Typography className="customH3" align="left">
              {link.header}
            </Typography>
            <LinksList labels={linksData[index].items} />
          </Box>
        )
      )}
    </>
  );
};

export default LinksBlock;
