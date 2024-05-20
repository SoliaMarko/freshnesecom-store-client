import {ChangeEvent, ReactElement} from 'react';
import {Box} from '@mui/material';
import CustomNumberField from '@/components/Custom/Inputs/CustomNumberField/CustomNumberField';

interface RangeInputsProps {
  range: {min: number; max: number};
  values: {min: number; max: number};
  handleMin: (value: number) => void;
  handleMax: (value: number) => void;
}

const RangeInputs = ({range, values, handleMin, handleMax}: RangeInputsProps): ReactElement => {
  const {min, max} = range;
  const {min: minSelected, max: maxSelected} = values;

  const handleMinChange = (event: ChangeEvent<HTMLInputElement>): void => {
    handleMin(+event?.target.value);
  };

  const handleMaxChange = (event: ChangeEvent<HTMLInputElement>): void => {
    handleMax(+event.target.value);
  };

  return (
    <Box className="justify-space flex flex-row items-center gap-6">
      <Box className="flex-1">
        <CustomNumberField label="Min" placeholder={min} value={minSelected} onChangeHandler={handleMinChange} />
      </Box>
      <Box> - </Box>
      <Box className="flex-1">
        <CustomNumberField label="Max" placeholder={max} value={maxSelected} onChangeHandler={handleMaxChange} />
      </Box>
    </Box>
  );
};

export default RangeInputs;
