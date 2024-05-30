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

export const products = {
  MIN_POSSIBLE_PRICE: 0.01,
  MAX_POSSIBLE_PRICE: 100_000
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
    FAVORITES: 'favorites',
    SETTINGS: 'settings'
  },
  product: {
    PRODUCTS: 'products',
    ID: ':id'
  }
};

export const commonRoutes = routes.common;
export const userRoutes = routes.user;
export const productRoutes = routes.product;
