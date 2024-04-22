import {ReactElement} from 'react';
import {Box} from '@mui/material';
import {temporalCategories} from '@/temporalData/temporalData';
import CustomMenu from '@/components/CustomMenu/CustomMenu';

const MenusBlock = (): ReactElement => {
  return (
    <Box className="mb-3.5 mt-2 flex justify-between bg-primary-700 px-11 py-3">
      {temporalCategories.map(
        (categoryInfo, index): ReactElement => (
          <Box key={`${index}-${categoryInfo.header}`}>
            <CustomMenu options={categoryInfo.subcategories}>{categoryInfo.header}</CustomMenu>
          </Box>
        )
      )}
    </Box>
  );
};

export default MenusBlock;
