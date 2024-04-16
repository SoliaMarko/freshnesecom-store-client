import {Button, TextField} from '@mui/material';

const SignUpForm = () => {
  const handleSubmit = (): void => {};

  return (
    <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', gap: '20px', minWidth: '360px'}}>
      <TextField name="firstName" label="First Name" required />
      <TextField name="lastName" label="Last Name" required />
      <TextField name="email" label="Email" required />
      <TextField name="password" label="Password" required />
      <TextField name="phoneNumber" label="Phone Number" />
      <Button type="submit">Sign Up</Button>
    </form>
  );
};

export default SignUpForm;
