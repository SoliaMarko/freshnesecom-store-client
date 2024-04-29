import {ReactElement} from 'react';
import {Typography} from '@mui/material';
import {fontSizes} from '@/constants/globalConstants/global.constant';
import {StyledHeaderProps} from '@/interfaces/props/Custom/Typography/styledHeaderProps.interface';

const StyledHeader = ({children, align = 'left', size = 1}: StyledHeaderProps): ReactElement => {
  return <Typography className={`mb-4 text-${align} font-display text-${fontSizes[size]} font-semibold`}>{children}</Typography>;
};

export default StyledHeader;
