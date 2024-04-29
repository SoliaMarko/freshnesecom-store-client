import {ReactElement} from 'react';
import {Box} from '@mui/material';
import StyledHeader from '@/components/Custom/CustomTypography/StyledHeader';
import LinksList from './LinksList';
import {LinksBlockProps} from '@/interfaces/props/Layout/Footer/usefulLinks.interface';

const LinksBlock = ({linksData}: LinksBlockProps): ReactElement => {
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
