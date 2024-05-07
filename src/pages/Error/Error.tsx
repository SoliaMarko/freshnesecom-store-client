import {Box} from '@mui/material';
import {ReactElement} from 'react';

interface ErrorProps {
  content?: string;
}

const Error = ({content}: ErrorProps): ReactElement => {
  return <Box>{content ? content : 'Error Page'}</Box>;
};

export default Error;
