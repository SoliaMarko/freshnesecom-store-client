import Filters from '@/components/Layout/Home/Filters/Filters';
import {Drawer, IconButton} from '@mui/material';
import clsx from 'clsx';
import {ReactElement, useState} from 'react';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import {NewParams} from '@/components/Layout/Home/ProductsWithSortAndFiltersContainer/ProductsWithSortAndFiltersContainer';

interface FilterButtonProps {
  handleSearchParamsChange: (params: NewParams) => void;
  classNames?: string;
}

const FilterButton = ({handleSearchParamsChange, classNames}: FilterButtonProps): ReactElement => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  const toggleDrawer = (value: boolean): void => {
    setIsDrawerOpen(value);
  };

  const handleOpenDrawer = (): void => {
    toggleDrawer(true);
  };

  const handleCloseDrawer = (): void => {
    toggleDrawer(false);
  };

  return (
    <>
      <IconButton onClick={handleOpenDrawer}>
        <FilterAltIcon className={clsx('text-3xl text-primary', classNames)} />
      </IconButton>
      <Drawer open={isDrawerOpen} onClose={handleCloseDrawer} anchor="left" variant="temporary">
        <Filters handleSearchParamsChange={handleSearchParamsChange} />
      </Drawer>
    </>
  );
};

export default FilterButton;
