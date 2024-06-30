import Filters from '@/components/Layout/AllProducts/Filters/Filters';
import {IconButton, SwipeableDrawer} from '@mui/material';
import clsx from 'clsx';
import {ReactElement, useState} from 'react';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import {NewParams} from '@/components/Layout/AllProducts/ProductsWithSortAndFiltersContainer/ProductsWithSortAndFiltersContainer';

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
      <SwipeableDrawer
        open={isDrawerOpen}
        onOpen={handleOpenDrawer}
        onClose={handleCloseDrawer}
        anchor="left"
        className="w-96"
        PaperProps={{
          className: 'overflow-hidden min-w-72'
        }}
      >
        <Filters handleSearchParamsChange={handleSearchParamsChange} classNames="w-full my-4 mx-4 flex justify-center" />
      </SwipeableDrawer>
    </>
  );
};

export default FilterButton;
