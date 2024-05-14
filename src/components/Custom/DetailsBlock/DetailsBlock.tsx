import {ReactElement} from 'react';
import DetailsBlockItem from './DetailsBlockItem/DetailsBlockItem';

type DetailsBlockProps = {
  keys: string[] | number[] | undefined[];
  details: {[key: string]: string | string[] | number | number[] | boolean | undefined};
};

const DetailsBlock = ({keys, details}: DetailsBlockProps): ReactElement | undefined => {
  return (
    <>
      {keys.map((prop, index): ReactElement | undefined => {
        if (!prop || !details[prop]) return;

        const validTitle = prop.toString();
        const validContent = Array.isArray(details[prop]) ? (details[prop] as string[])?.join(', ') : details[prop]?.toString();

        return <DetailsBlockItem key={`${index}-${prop}`} title={validTitle} content={validContent} />;
      })}
    </>
  );
};

export default DetailsBlock;
