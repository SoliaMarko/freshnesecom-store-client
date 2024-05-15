import {ReactElement} from 'react';

export interface ScrollableElement extends ReactElement {
  scrollIntoView: ({behavior}: {behavior: string}) => void;
}
