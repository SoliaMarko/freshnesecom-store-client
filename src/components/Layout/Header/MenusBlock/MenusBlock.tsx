import {ReactElement} from 'react';
import {Box} from '@mui/material';
import {temporalCategories} from '@/temporalData/temporalData';
import CustomMenu from '@/components/Custom/CustomMenu/CustomMenu';

const MenusBlock = (): ReactElement => {
  return (
    <Box className="mb-3.5 mt-2 flex justify-between bg-primary-700 px-11 py-3">
      {temporalCategories.map((categoryInfo) => {
        const {
          id,
          value: {header, subcategories}
        } = categoryInfo;

        return (
          <Box key={id}>
            <CustomMenu header={header} options={subcategories}>
              {header}
            </CustomMenu>
          </Box>
        );
      })}
    </Box>
  );
};

export default MenusBlock;
