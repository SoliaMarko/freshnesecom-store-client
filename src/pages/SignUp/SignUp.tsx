import SignUpForm from '@/components/Forms/SignUpForm/SignUpForm';
import {Box, Card, CardContent, Typography} from '@mui/material';

const SignUp = (): JSX.Element => {
  return (
    <Box className="m-auto flex h-full justify-center">
      <Card>
        <CardContent>
          <Typography className="pb-5 font-display text-2xl font-semibold">Sign Up</Typography>
          <SignUpForm />
        </CardContent>
      </Card>
    </Box>
  );
};

export default SignUp;
