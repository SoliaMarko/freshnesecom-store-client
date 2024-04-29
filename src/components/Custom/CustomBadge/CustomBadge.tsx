import {ReactElement} from 'react';
import {Badge} from '@mui/material';
import {CustomBadgeProps} from '@/interfaces/props/Custom/Badge/customBadgeProps.interface';

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
