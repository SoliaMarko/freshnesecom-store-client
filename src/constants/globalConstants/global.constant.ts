export const storeInfo = {
  NAME: 'Freshnesecom',
  CONTACT_NUMBER: '+420 336 775 664',
  EMAIL: 'info@freshenesecom.com',
  links: {
    CONDITIONS_OF_USE: '#',
    PRIVACY_NOTICE: '#'
  }
};

export const generalAppInfo = {
  SECONDS_TO_REDIRECT: 5,
  pagination: {
    INITIAL_PAGE: 0,
    ITEMS_PER_PAGE: 10
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
  },
  product: {
    PRODUCT: 'product',
    ID: ':id'
  }
};

export const commonRoutes = routes.common;
export const userRoutes = routes.user;
export const productRoutes = routes.product;
