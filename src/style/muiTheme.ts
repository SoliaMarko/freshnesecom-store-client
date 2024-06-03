import {createTheme} from '@mui/material';

const theme = createTheme({
  typography: {
    button: {
      textTransform: 'none',
      padding: 0,
      minHeight: 0,
      minWidth: 0
    }
  }
});

export default theme;
