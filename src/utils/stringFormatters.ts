export const getCamelCase = (input: string): string => {
  const wordsArrayInit = input.split(' ');
  const wordsArrayCamel = wordsArrayInit.map((word, index) => {
    if (index === 0) return word.toLowerCase();

    return word[0].toUpperCase() + word.slice(1).toLowerCase();
  });

  return wordsArrayCamel.join('');
};
