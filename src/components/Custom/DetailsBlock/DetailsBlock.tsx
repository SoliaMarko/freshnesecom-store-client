import {ReactElement} from 'react';
import DetailsBlockItem from './DetailsBlockItem/DetailsBlockItem';
import {ItemWithIDType} from '@/utils/arrayFormaters/getTransformedArrayWithIDs';
import {Typography} from '@mui/material';

type DetailsBlockProps = {
  keys?: ItemWithIDType<string>[];
  details: {[key: string]: string | number | string[] | number[] | undefined};
};

const DetailsBlock = ({keys = [], details}: DetailsBlockProps): ReactElement => {
  return (
    <>
      {keys.map(({id, value: key}) => {
        if (!key || !details[key]) return;

        const title = `${key}: `;
        const content = Array.isArray(details[key]) ? (details[key] as (string | number)[])?.join(', ') : details[key]?.toString();

        return <DetailsBlockItem key={id} title={title} content={content} />;
      })}
      {!details.stock && <Typography className="text-left text-red-400">Out of stock</Typography>}
    </>
  );
};

export default DetailsBlock;
