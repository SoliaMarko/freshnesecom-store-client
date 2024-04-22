import {ReactElement} from 'react';
import {Box} from '@mui/material';
import StyledHeader from '@/components/Headers/StyledHeader';
import LinksList from './LinksList';

const LinksBlock = ({linksData}: {linksData: {header: string; items: string[]; links: string[]}[]}): ReactElement => {
  return (
    <>
      {linksData.map(
        (link, index): ReactElement => (
          <Box key={`${index}-${link.header}`}>
            <StyledHeader align="left" size={3}>
              {link.header}
            </StyledHeader>
            <LinksList labels={linksData[index].items} />
          </Box>
        )
      )}
    </>
  );
};

export default LinksBlock;
