import {ReactElement} from 'react';
import DetailsBlockItem from './DetailsBlockItem/DetailsBlockItem';
import {ItemWithIDType} from '@/utils/arrayFormaters/getTransformedArrayWithIDs';

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
    </>
  );
};

export default DetailsBlock;
