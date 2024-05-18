import {ReactElement} from 'react';
import {Box, Typography} from '@mui/material';
import LinksList from './LinksList';

export interface LinkItemProps {
  id: string;
  value: string;
}

interface LinksBlockProps {
  linksData: {id: string; header: string; items: LinkItemProps[]; links: {}[]}[];
}

const LinksBlock = ({linksData: links}: LinksBlockProps): ReactElement => {
  return (
    <>
      {links.map((link) => {
        const {id, header, items} = link;

        return (
          <Box key={id}>
            <Typography className="customH3" align="left">
              {header}
            </Typography>
            <LinksList labels={items} />
          </Box>
        );
      })}
    </>
  );
};

export default LinksBlock;
