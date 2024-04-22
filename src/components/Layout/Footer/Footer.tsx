import {ReactElement} from 'react';
import UsefulLinks from './UsefulLinks/UsefulLinks';
import ProductTags from './ProductTags/ProductTags';
import Copyright from './Copyright/Copyright';

const Footer = (): ReactElement => {
  return (
    <footer className="mx-12 mb-16 mt-12">
      <UsefulLinks />
      <ProductTags />
      <Copyright />
    </footer>
  );
};

export default Footer;
