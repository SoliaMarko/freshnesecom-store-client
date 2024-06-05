import {ReactElement, ReactNode, useState} from 'react';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import {Box, Card, Slide, IconButton} from '@mui/material';
import {getTransformedArrayWithIDs} from '@/utils/arrayFormaters/getTransformedArrayWithIDs';
import clsx from 'clsx';
import {Direction} from '@/enums/global/direction.enum';

interface CustomCarouselProps {
  cards: ReactNode[];
  cardsPerPage?: number;
  selectOnClick?: boolean;
  arrowsClassNames?: string;
}

const CustomCarousel = ({cards, cardsPerPage = 4, selectOnClick, arrowsClassNames = 'text-5xl'}: CustomCarouselProps): ReactElement => {
  const [firstCardIndex, setFirstCardIndex] = useState<number>(0);
  const [slideDirection, setSlideDirection] = useState<Direction>(Direction.left);
  const [selectedItemIndex, setSelectedItemIndex] = useState<number>(0);
  const cardsWithIDs = getTransformedArrayWithIDs(cards);
  const lastCardIndex = firstCardIndex + cardsPerPage - 1;
  const scrollable = cards.length > cardsPerPage;

  const handleGoToPrevious = () => {
    setSlideDirection(Direction.right);
    setFirstCardIndex((current) => current - 1);
  };

  const handleGoToNext = () => {
    setSlideDirection(Direction.left);
    setFirstCardIndex((current) => current + 1);
  };

  const handleSelectedItemIndex = (index: number) => {
    setSelectedItemIndex(index);
  };

  return cardsWithIDs ? (
    <Box className="flex flex-row items-center justify-between">
      {scrollable && (
        <IconButton onClick={handleGoToPrevious} className="m-0 sm:mr-3" disabled={firstCardIndex === 0}>
          <NavigateBeforeIcon className={arrowsClassNames} />
        </IconButton>
      )}
      <Box className="flex flex-row flex-wrap items-stretch gap-4 overflow-hidden md:gap-8">
        {cardsWithIDs.map(({value: card}, index) => {
          const displayType = index >= firstCardIndex && index <= lastCardIndex ? 'block' : 'hidden';
          const selectedClassNames =
            selectOnClick && selectedItemIndex === index && 'border-solid border-2 border-primary-200 rounded-3xl bg-blend-darken';
          return (
            <Slide
              key={index}
              direction={slideDirection}
              in={index >= firstCardIndex && index <= lastCardIndex}
              onClick={() => handleSelectedItemIndex(index)}
            >
              <Card className={clsx('flex-1 border-2 border-solid border-primary-600 bg-transparent shadow-xl', displayType, selectedClassNames)}>
                {card}
              </Card>
            </Slide>
          );
        })}
      </Box>
      {scrollable && (
        <IconButton onClick={handleGoToNext} className="m-0 sm:ml-3" disabled={lastCardIndex === cards.length - 1}>
          <NavigateNextIcon className={arrowsClassNames} />
        </IconButton>
      )}
    </Box>
  ) : (
    <></>
  );
};

export default CustomCarousel;
