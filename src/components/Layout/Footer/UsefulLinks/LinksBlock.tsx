import {ReactElement} from 'react';
import {Box} from '@mui/material';
import StyledHeader3 from '@/components/Headers/StyledHeader3';
import LinksList from './LinksList';

const LinksBlock = ({linksData}: {linksData: {header: string; items: string[]; links: string[]}[]}): ReactElement => {
  return (
    <>
      {linksData.map(
        (link, index): ReactElement => (
          <Box key={`${index}-${link.header}`}>
            <StyledHeader3>{link.header}</StyledHeader3>
            <LinksList labels={linksData[index].items} />
          </Box>
        )
      )}
    </>
  );
};

export default LinksBlock;
