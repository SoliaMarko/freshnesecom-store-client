import {fontSizes} from '@/constants/global.constant';
import {FontSizeKey} from '@/types/global.type';
import {Typography} from '@mui/material';
import {ReactElement} from 'react';

const StyledHeader = ({children, align = 'left', size = 1}: {children: string; align?: string; size?: FontSizeKey}): ReactElement => {
  return <Typography className={`mb-4 text-${align} font-display text-${fontSizes[size]} font-semibold`}>{children}</Typography>;
};

export default StyledHeader;
