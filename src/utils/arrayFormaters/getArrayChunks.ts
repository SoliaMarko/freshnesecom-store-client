export const getArrayChunks = <ItemsType>(initArray: ItemsType[], chunkSize: number): ItemsType[][] => {
  return Array.from({length: Math.ceil(initArray.length / chunkSize)}, (_: ItemsType, index: number) =>
    initArray.slice(index * chunkSize, index * chunkSize + chunkSize)
  );
};
