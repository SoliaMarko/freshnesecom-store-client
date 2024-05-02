import {ReactElement} from 'react';
import {Box, Card, CardContent, Typography} from '@mui/material';
import {CustomCardProps} from '@/interfaces/props/CustomProps/Cards/customCardProps.interface';

const CustomCard = ({children, title = ''}: CustomCardProps): ReactElement => {
  return (
    <Card>
      <CardContent>
        <Box className="flex min-w-72 flex-col gap-5">
          <Typography className="pb-5 font-display text-2xl font-semibold">{title}</Typography>
          {children}
        </Box>
      </CardContent>
    </Card>
  );
};

export default CustomCard;