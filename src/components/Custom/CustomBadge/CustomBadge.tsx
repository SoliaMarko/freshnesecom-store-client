import {ReactElement} from 'react';
import {Badge} from '@mui/material';

interface CustomBadgeProps {
  content: string;
  alignY?: 'top' | 'bottom';
  alignX?: 'left' | 'right';
}

const CustomBadge = ({content, alignY = 'top', alignX = 'right'}: CustomBadgeProps): ReactElement => {
  return (
    <Badge
      anchorOrigin={{
        vertical: alignY,
        horizontal: alignX
      }}
      overlap="circular"
      badgeContent={content}
      color="success"
      className={`absolute ${alignY}-0 ${alignX}-0`}
    ></Badge>
  );
};

export default CustomBadge;
