import {ReactElement} from 'react';
import {Divider, InputBase, Paper} from '@mui/material';
import CustomMenu from '@/components/Custom/CustomMenu/CustomMenu';
import {WithID} from '@/utils/productsHelpers/getTransformedArrayWithIDs';

interface CustomQuantityInputProps {
  options: WithID<string>[] | WithID<ReactElement>[];
}

const CustomQuantityInput = ({options}: CustomQuantityInputProps): ReactElement => {
  return (
    <Paper component="form" className="flex max-w-40 flex-row rounded-xl border-primary-400 bg-primary-700 p-3">
      <InputBase className="ml-1" placeholder="1" />
      <Divider className="m-1 h-5" orientation="vertical" />
      <CustomMenu options={options}>{options[0].values}</CustomMenu>
    </Paper>
  );
};

export default CustomQuantityInput;
