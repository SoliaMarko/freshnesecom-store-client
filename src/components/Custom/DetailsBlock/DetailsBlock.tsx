import {ReactElement} from 'react';
import DetailsBlockItem from './DetailsBlockItem/DetailsBlockItem';

type DetailsBlockProps = {
  keys: string[] | number[];
  details: unknown;
};

const DetailsBlock = ({keys = [], details}: DetailsBlockProps): ReactElement | undefined => {
  return (
    <>
      {keys.map((key, index) => {
        if (!key || !details[key]) return;

        const validTitle = key.toString();
        const validContent = Array.isArray(details[key]) ? details[key]?.join(', ') : details[key]?.toString();

        return <DetailsBlockItem key={`${index}-${key}`} title={validTitle} content={validContent} />;
      })}
    </>
  );
};

export default DetailsBlock;
