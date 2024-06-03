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
  classNames?: string;
}

const LinksBlock = ({linksData: links, classNames}: LinksBlockProps): ReactElement => {
  return (
    <Box className={classNames}>
      {links.map((link) => {
        const {
          id,
          value: {header, items}
        } = link;

        return (
          <Box key={id}>
            <Typography className="customH3 text-left">{header}</Typography>
            <LinksList labels={items} />
          </Box>
        );
      })}
    </Box>
  );
};

export default LinksBlock;
