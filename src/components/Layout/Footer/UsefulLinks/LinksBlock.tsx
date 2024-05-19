import {ReactElement} from 'react';
import {Box, Typography} from '@mui/material';
import LinksList from './LinksList';

export interface LinkItemProps {
  id: string;
  value: string;
}

export interface LinksProps {
  header: string;
  items: LinkItemProps[];
  links: {}[];
}

interface LinksBlockProps {
  linksData: {id: string; value: LinksProps}[];
}

const LinksBlock = ({linksData: links}: LinksBlockProps): ReactElement => {
  return (
    <>
      {links.map((link) => {
        const {
          id,
          value: {header, items}
        } = link;

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
