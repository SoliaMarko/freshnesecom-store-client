import {ReactElement} from 'react';
import DetailsBlockItem from './DetailsBlockItem/DetailsBlockItem';
import {WithID} from '@/utils/arrayFormaters/getTransformedArrayWithIDs';

type DetailsBlockProps = {
  keys?: WithID<string>[];
  details: unknown;
};

const DetailsBlock = ({keys = [], details}: DetailsBlockProps): ReactElement | undefined => {
  return (
    <>
      {keys.map(({id, value: key}) => {
        if (!key || !details[key]) return;

        const validTitle = `${key}: `;
        const validContent = Array.isArray(details[key]) ? details[key]?.join(', ') : details[key]?.toString();

        return <DetailsBlockItem key={id} title={validTitle} content={validContent} />;
      })}
    </>
  );
};

export default DetailsBlock;
