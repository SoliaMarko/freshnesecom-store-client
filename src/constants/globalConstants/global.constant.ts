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

export const SECONDS_TO_REDIRECT = 5;
