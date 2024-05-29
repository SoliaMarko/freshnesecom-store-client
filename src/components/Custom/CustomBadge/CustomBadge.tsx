import {ReactElement} from 'react';
import {Badge} from '@mui/material';
import clsx from 'clsx';

interface CustomBadgeProps {
  content: string | number;
  alignY?: 'top' | 'bottom';
  alignX?: 'left' | 'right';
  classNames?: string;
}

const CustomBadge = ({content, alignY = 'bottom', alignX = 'left', classNames}: CustomBadgeProps): ReactElement => {
  if (!content) return <></>;

  return (
    <Badge
      anchorOrigin={{
        vertical: alignY,
        horizontal: alignX
      }}
      overlap="circular"
      badgeContent={content.toString()}
      color="secondary"
      className={clsx('absolute bottom-3 left-3 bg-green-500 text-white', classNames)}
      sx={{bgcolor: 'red'}}
    ></Badge>
  );
};

export default CustomBadge;
