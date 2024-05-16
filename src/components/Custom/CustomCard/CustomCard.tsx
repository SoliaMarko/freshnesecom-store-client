import {ReactElement, ReactNode} from 'react';
import {Box, Card, CardContent, Typography} from '@mui/material';

interface CustomCardProps {
  children: ReactNode;
  title?: string;
}

const CustomCard = ({children, title = ''}: CustomCardProps): ReactElement => {
  return (
    <Card>
      <CardContent className="max-w-2xl border-2 border-solid border-primary-200 bg-primary-500 py-8 shadow-xl">
        <Box className="flex w-full flex-col gap-5">
          <Typography className="pb-5 font-display text-2xl font-semibold">{title}</Typography>
          {children}
        </Box>
      </CardContent>
    </Card>
  );
};

export default CustomCard;
