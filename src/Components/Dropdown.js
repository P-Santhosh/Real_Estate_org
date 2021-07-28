import React from 'react';
import { Link } from 'react-router-dom';
import { IntlProvider, FormattedMessage, FormattedNumber } from "react-intl";
const messagesInFrench = {
  home:"Home",
  about:"About Us",
  projects:"Projects",
  blogs:"Blogs",
  gallery:"Gallery",
  contact:" Contact",

};
const Dropdown = ({ isOpen, toggle }) => {
  return (
    <IntlProvider messages={messagesInFrench} locale="fr" defaultLocale="en">
    <div
      className={
        isOpen
          ? 'grid grid-rows-3 text-center items-center bg-white '
          : 'hidden'
      }
      onClick={toggle}
    >
      <Link to='/' className='p-4 '>
      <FormattedMessage
                id="home "
                defaultMessage="Home "
              /> 
      </Link>
      <Link to='/about' className='p-4'>
      <FormattedMessage
                id="about "
                defaultMessage="About Us "
              />
      </Link>
      <Link to='/projects' className='p-4'>
      <FormattedMessage
                id="projects"
                defaultMessage="Projects "
              />
      </Link>
      <Link to='/blogs' className='p-4'>
      <FormattedMessage
                id="blogs"
                defaultMessage="Blogs "
              />
      </Link>
      <Link to='/gallery' className='p-4'>
      <FormattedMessage
                id="gallery"
                defaultMessage="Gallery"
              />
      </Link>
      <Link to='/contact' className='p-4'>
      <FormattedMessage
                id=" contact"
                defaultMessage=" Contact"
              />
      </Link>
    </div>
    </IntlProvider>
  );
};

export default Dropdown;
