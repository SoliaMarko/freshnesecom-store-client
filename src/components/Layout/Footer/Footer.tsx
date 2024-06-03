import {ReactElement} from 'react';
import UsefulLinks from './UsefulLinks/UsefulLinks';
import ProductTags from './ProductTags/ProductTags';
import Copyright from './Copyright/Copyright';

const Footer = (): ReactElement => {
  return (
    <footer className="mx-2 mb-8 mt-6 sm:mx-6 sm:mb-16 sm:mt-12 md:mx-12">
      <UsefulLinks />
      <ProductTags />
      <Copyright />
    </footer>
  );
};

export default Footer;
