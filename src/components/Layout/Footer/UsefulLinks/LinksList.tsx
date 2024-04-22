import StyledNavLink from '@/components/Links/StyledNavLink';
import {Box} from '@mui/material';
import {ReactElement} from 'react';

const LinksList = ({labels}: {labels: string[]}): ReactElement => (
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
