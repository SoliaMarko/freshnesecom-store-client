import {ReactElement} from 'react';
import {Box, Typography} from '@mui/material';
import LinksList from './LinksList';
import {useId} from 'react-id-generator';

interface LinksBlockProps {
  linksData: {header: string; items: string[]; links: string[]}[];
}

const LinksBlock = ({linksData}: LinksBlockProps): ReactElement => {
  return (
    <>
      {linksData.map((link, index) => {
        const [keyID] = useId();

        return (
          <Box key={keyID}>
            <Typography className="customH3" align="left">
              {link.header}
            </Typography>
            <LinksList labels={linksData[index].items} />
          </Box>
        );
      })}
    </>
  );
};

export default LinksBlock;
