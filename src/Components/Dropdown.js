import React from "react";
import { Link } from "react-router-dom";
import { IntlProvider, FormattedMessage } from "react-intl";
const messagesInFrench = {
  home: "Home",
  about: "About Us",
  projects: "Projects",
  blogs: "Blogs",
  gallery: "Gallery",
  contact: " Contact",
  disclaimer: "Disclaimer",
  csr:"CSR",
};
const Dropdown = ({ isOpen, toggle }) => {
  return (
    <IntlProvider messages={messagesInFrench} defaultLocale="en">
      <div
        className={
          isOpen
            ? "grid grid-rows-3 text-center items-center bg-white "
            : "hidden"
        }
        onClick={toggle}
      >
        <Link to="/" className="p-4 hover:text-red-600 Link">
          <FormattedMessage id="home " defaultMessage="Home " />
        </Link>
        <Link to="/about" className="p-4 hover:text-red-600 Link">
          <FormattedMessage id="about " defaultMessage="About Us " />
        </Link>
        <Link to="/projects" className="p-4 hover:text-red-600 Link">
          <FormattedMessage id="projects" defaultMessage="Projects " />
        </Link>
        <Link to="/blogs" className="p-4 hover:text-red-600 Link">
          <FormattedMessage id="blogs" defaultMessage="Blogs " />
        </Link>
       {/* <Link to="/csr" className="p-4 hover:text-red-600  Link">
            <FormattedMessage id="csr" defaultMessage="CSR " />
      </Link>*/}
        <Link to="/gallery" className="p-4 hover:text-red-600  Link">
          <FormattedMessage id="gallery" defaultMessage="Gallery" />
        </Link>
        <Link to="/contact" className="p-4 hover:text-red-600  Link">
          <FormattedMessage id=" contact" defaultMessage=" Contact" />
        </Link>
        <Link to="/disclaimer" className="p-4 hover:text-red-600  Link">
            <FormattedMessage id=" disclaimer" defaultMessage=" Disclaimer" />
          </Link>
      </div>
    </IntlProvider>
  );
};

export default Dropdown;
