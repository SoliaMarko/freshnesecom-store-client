import {ReactElement, ReactNode} from 'react';
import {Accordion, AccordionDetails, AccordionSummary} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface CustomAccordionItemProps {
  summary: string;
  details?: ReactNode;
}

const CustomAccordionItem = ({summary, details}: CustomAccordionItemProps): ReactElement => {
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>{summary}</AccordionSummary>
      <AccordionDetails>{details}</AccordionDetails>
    </Accordion>
  );
};

export default CustomAccordionItem;
