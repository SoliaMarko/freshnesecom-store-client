import {ReactElement} from 'react';
import {Divider, IconButton, InputBase, Paper} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CustomMenu from '@/components/CustomMenu/CustomMenu';
import {temporalCategories} from '@/temporalData/temporalData';

const SearchBar = (): ReactElement => {
  const categoriesHeaders = temporalCategories.map((category) => category.header);

  return (
    <Paper component="form" className=" flex w-3/6 bg-primary-700">
      <CustomMenu label="All categories" options={categoriesHeaders} />
      <Divider className="m-1 h-9" orientation="vertical" />
      <InputBase className="ml-1 flex-1" placeholder="Search Products, categories ..." inputProps={{'aria-label': 'search google maps'}} />
      <IconButton type="button" className="p-2.5" aria-label="search">
        <SearchIcon className="text-primary" />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
