import SignUpForm from '@/components/Forms/SignUpForm/SignUpForm';
import {Card, CardContent, Typography} from '@mui/material';

const SignUp = (): JSX.Element => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5">Sign Up</Typography>
        <SignUpForm />
      </CardContent>
    </Card>
  );
};

export default SignUp;
