import {ReactElement} from 'react';
import {Divider, InputBase, Paper} from '@mui/material';
import CustomMenu from '@/components/Custom/CustomMenu/CustomMenu';
import {ItemWithIDType} from '@/utils/arrayFormaters/getTransformedArrayWithIDs';

interface CustomQuantityInputProps {
  options: ItemWithIDType<string>[] | ItemWithIDType<ReactElement>[];
}

const CustomQuantityInput = ({options}: CustomQuantityInputProps): ReactElement => {
  return (
    <Paper component="form" className="flex max-w-40 flex-row rounded-xl border-primary-400 bg-primary-700 p-3">
      <InputBase className="ml-1" placeholder="1" />
      <Divider className="m-1 h-5" orientation="vertical" />
      <CustomMenu header="product-quantity" options={options}>
        {options[0].value}
      </CustomMenu>
    </Paper>
  );
};

export default CustomQuantityInput;
