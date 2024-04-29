import {ReactElement} from 'react';
import {Box} from '@mui/material';
import StyledNavLink from '@/components/Custom/Links/StyledNavLink';
import {LinksListProps} from '@/interfaces/props/Layout/Footer/usefulLinks.interface';

const LinksList = ({labels}: LinksListProps): ReactElement => (
  <Box className="align-left flex flex-col items-start justify-between gap-4">
    {labels.map(
      (label, index): ReactElement => (
        <StyledNavLink to="#" key={`${index}-${label}`}>
          {label}
        </StyledNavLink>
      )
    )}
  </Box>
);

export default LinksList;
