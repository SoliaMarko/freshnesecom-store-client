import {ReactElement} from 'react';
import {Box} from '@mui/material';
import StyledNavLink from '@/components/Custom/Links/StyledNavLink';
import {useId} from 'react-id-generator';

interface LinksListProps {
  labels: string[];
}

const LinksList = ({labels}: LinksListProps): ReactElement => (
  <Box className="align-left flex flex-col items-start justify-between gap-4">
    {labels.map((label) => {
      const [keyID] = useId();

      return (
        <StyledNavLink to="#" key={keyID}>
          {label}
        </StyledNavLink>
      );
    })}
  </Box>
);

export default LinksList;
