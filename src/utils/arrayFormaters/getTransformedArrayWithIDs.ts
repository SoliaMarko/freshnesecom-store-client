import {v4 as uuid} from 'uuid';

export interface WithID<T> {
  id: string;
  value: T;
}

export const getTransformedArrayWithIDs = <ItemsType>(items: ItemsType[]): WithID<ItemsType>[] => {
  return items.map((item) => ({id: uuid(), value: item}));
};

export const getArrayChunks = <ItemsType>(initArray: ItemsType[], chunkSize: number): ItemsType[][] => {
  return Array.from({length: Math.ceil(initArray.length / chunkSize)}, (_: ItemsType, index: number) =>
    initArray.slice(index * chunkSize, index * chunkSize + chunkSize)
  );
};
