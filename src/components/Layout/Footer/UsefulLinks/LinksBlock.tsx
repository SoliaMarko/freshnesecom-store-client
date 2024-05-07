import {ReactElement} from 'react';
import {Box, Typography} from '@mui/material';
import LinksList from './LinksList';

interface LinksBlockProps {
  linksData: {header: string; items: string[]; links: string[]}[];
}

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
