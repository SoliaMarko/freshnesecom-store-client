import * as React from 'react';
import Slider, {SliderThumb, SliderValueLabelProps} from '@mui/material/Slider';
// import {styled} from '@mui/material/styles';
import {Box, Tooltip, Typography} from '@mui/material';
import {ReactElement} from 'react';

function ValueLabelComponent(props: SliderValueLabelProps) {
  const {children, value} = props;

  return (
    <Tooltip enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}

// const PrettoSlider = styled(Slider)({
//   color: '#52af77',
//   height: 8,
//   '& .MuiSlider-track': {
//     border: 'none'
//   },
//   '& .MuiSlider-thumb': {
//     height: 24,
//     width: 24,
//     backgroundColor: '#fff',
//     border: '2px solid currentColor',
//     '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
//       boxShadow: 'inherit'
//     },
//     '&::before': {
//       display: 'none'
//     }
//   },
//   '& .MuiSlider-valueLabel': {
//     lineHeight: 1.2,
//     fontSize: 12,
//     background: 'unset',
//     padding: 0,
//     width: 32,
//     height: 32,
//     borderRadius: '50% 50% 50% 0',
//     backgroundColor: '#52af77',
//     transformOrigin: 'bottom left',
//     transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
//     '&::before': {display: 'none'},
//     '&.MuiSlider-valueLabelOpen': {
//       transform: 'translate(50%, -100%) rotate(-45deg) scale(1)'
//     },
//     '& > *': {
//       transform: 'rotate(45deg)'
//     }
//   }
// });

// // const AirbnbSlider = styled(Slider)(({theme}) => ({
// //   color: '#3a8589',
// //   height: 3,
// //   padding: '13px 0',
// //   '& .MuiSlider-thumb': {
// //     height: 27,
// //     width: 27,
// //     backgroundColor: '#fff',
// //     border: '1px solid currentColor',
// //     '&:hover': {
// //       boxShadow: '0 0 0 8px rgba(58, 133, 137, 0.16)'
// //     },
// //     '& .airbnb-bar': {
// //       height: 9,
// //       width: 1,
// //       backgroundColor: 'currentColor',
// //       marginLeft: 1,
// //       marginRight: 1
// //     }
// //   },
// //   '& .MuiSlider-track': {
// //     height: 3
// //   },
// //   '& .MuiSlider-rail': {
// //     color: theme.palette.mode === 'dark' ? '#bfbfbf' : '#d8d8d8',
// //     opacity: theme.palette.mode === 'dark' ? undefined : 1,
// //     height: 3
// //   }
// // }));

// // interface AirbnbThumbComponentProps extends React.HTMLAttributes<unknown> {}

// // function AirbnbThumbComponent(props: AirbnbThumbComponentProps) {
// //   const {children, ...other} = props;
// //   return (
// //     <SliderThumb {...other}>
// //       {children}
// //       <span className="airbnb-bar" />
// //       <span className="airbnb-bar" />
// //       <span className="airbnb-bar" />
// //     </SliderThumb>
// //   );
// // }

const CustomeSlider = (): ReactElement => {
  return (
    <Box sx={{width: 320}}>
      <Typography gutterBottom>iOS</Typography>
      <Box sx={{m: 3}} />
      <Typography gutterBottom>pretto.fr</Typography>
      {/* <PrettoSlider valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={20} /> */}
      <Box sx={{m: 3}} />
      <Typography gutterBottom>Tooltip value label</Typography>
      <Slider
        valueLabelDisplay="auto"
        slots={{
          valueLabel: ValueLabelComponent
        }}
        aria-label="custom thumb label"
        defaultValue={20}
      />
      <Box sx={{m: 3}} />
      {/* <Typography gutterBottom>Airbnb</Typography>
      <AirbnbSlider
        slots={{thumb: AirbnbThumbComponent}}
        getAriaLabel={(index) => (index === 0 ? 'Minimum price' : 'Maximum price')}
        defaultValue={[20, 40]}
      /> */}
    </Box>
  );
};

export default CustomeSlider;
