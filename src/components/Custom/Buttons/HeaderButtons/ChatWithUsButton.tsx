import {Box, IconButton} from '@mui/material';
import {NavLink} from 'react-router-dom';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import {ReactElement} from 'react';
import clsx from 'clsx';

interface ChatWithUsButtonProps {
  classNames?: string;
}

const ChatWithUsButton = ({classNames}: ChatWithUsButtonProps): ReactElement => {
  return (
    <NavLink to="#">
      <Box className="relative">
        <IconButton>
          <QuestionAnswerIcon className={clsx('text-2xl text-secondary-200', classNames)} />
        </IconButton>
      </Box>
    </NavLink>
  );
};

export default ChatWithUsButton;
