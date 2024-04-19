import {Button} from '@mui/material';

const PrimaryButton = ({children}: {children: string}): JSX.Element => {
  return (
    <Button
      type="submit"
      sx={{color: 'white'}}
      className=" w-56 rounded-xl border-2 border-solid border-secondary-200 bg-secondary px-12 py-3 text-sm"
    >
      {children}
    </Button>
  );
};

export default PrimaryButton;
