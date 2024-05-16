import {ReactElement} from 'react';
import DetailsBlockItem from './DetailsBlockItem/DetailsBlockItem';
import {useId} from 'react-id-generator';

type DetailsBlockProps = {
  keys: string[] | number[];
  details: unknown;
};

const DetailsBlock = ({keys = [], details}: DetailsBlockProps): ReactElement | undefined => {
  return (
    <>
      {keys.map((key) => {
        const [keyID] = useId();
        if (!key || !details[key]) return;

        const validTitle = key.toString();
        const validContent = Array.isArray(details[key]) ? details[key]?.join(', ') : details[key]?.toString();

        return <DetailsBlockItem key={keyID} title={validTitle} content={validContent} />;
      })}
    </>
  );
};

export default DetailsBlock;
