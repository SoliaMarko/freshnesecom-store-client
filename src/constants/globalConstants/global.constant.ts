export const storeInfo = {
  NAME: 'Freshnesecom',
  CONTACT_NUMBER: '+420 336 775 664',
  EMAIL: 'info@freshenesecom.com',
  links: {
    CONDITIONS_OF_USE: '#',
    PRIVACY_NOTICE: '#'
  }
};

const routes = {
  common: {
    ROOT: '/',
    LOGIN: 'login',
    SIGNUP: 'signup',
    CART: 'cart'
  },
  user: {
    USER: 'user',
    FAVORITE: 'favorite',
    PROFILE: 'profile'
  }
};

export const commonRoutes = routes.common;
export const userRoutes = routes.user;

export const fontSizes = {
  1: '3xl',
  2: '2xl',
  3: 'lg',
  4: 'base',
  5: 'sm'
};

export const SECONDS_TO_REDIRECT = 5;
