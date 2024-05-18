import {ReactElement} from 'react';
import {Box} from '@mui/material';
import StyledNavLink from '@/components/Custom/Links/StyledNavLink';
import {LinkItemProps} from './LinksBlock';

interface LinksListProps {
  labels: LinkItemProps[];
}

const LinksList = ({labels}: LinksListProps): ReactElement => (
  <Box className="align-left flex flex-col items-start justify-between gap-4">
    {labels.map((label) => {
      const {id, value} = label;

      return (
        <StyledNavLink to="#" key={id}>
          {value}
        </StyledNavLink>
      );
    })}
  </Box>
);

export default LinksList;
