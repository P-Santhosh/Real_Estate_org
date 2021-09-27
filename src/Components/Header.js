/*import React, { Component } from "react";


class Header extends React.Component {
  render() {
    return (
        <header className="border-2 border-gray-300">
        <div className="bg-gray-50 p-4 justify-between flex pl-24 pr-24">
            <img className="w-40 h-20 "
              src={
                "https://karurtech.com/img/kts_logo.jpeg?auto=format&fit=max&w=256"
              }
              alt="Logo"
            />
            
            <nav>
              <ol>
                <li className="list-none inline-block p-1 pr-5 pt-6 hover:text-red-600" >
                  <a href=" ">
                    <h3>Home</h3>
                  </a>
                </li>
                <li className="list-none inline-block p-1 pr-5 pt-4 hover:text-red-600">
                  <a href=" ">
                    <h3>Services</h3>
                  </a>
                </li>
                <li className="list-none inline-block p-1 pr-5 pt-4 hover:text-red-600">
                  <a href=" ">
                    <h3>Our Work</h3>
                  </a>
                </li>
                <li className="list-none inline-block p-1 pr-5 pt-4 hover:text-red-600">
                  <a href=" ">
                    <h3>Our Team</h3>
                  </a>
                </li>
                <li className="list-none inline-block p-1 pr-5 pt-4 hover:text-red-600">
                  <a href=" ">
                    <h3>Learn with Us?</h3>
                  </a>
                </li>
                <li className="list-none inline-block p-1 pr-5 pt-4 hover:text-red-600">
                  <a href=" ">               
                    <h3> Contact</h3>
                  </a>
                </li>
              </ol>
            </nav>
          </div>
        </header>
    );
  }
}

export default Header;*/
import React from "react";
import { Link } from "react-router-dom";
import { IntlProvider, FormattedMessage } from "react-intl";
import { FiFacebook, FiLinkedin, FiInstagram } from "react-icons/fi";
const messagesInFrench = {
  name: "Thogai Murugan Builders",
  addressOne: "18, Kadai Veedhi, sempadapalayam",
  addressTwo: "Tamil Nadu 639001",
  contactOne: "94426-93171",
  contactTwo: "97890-63333",
  copyright: "Copyright 2021 © Thogai Murugan Builders",
  allrights: "All Rights Reserved",
  kts: "With love of Karur Tech Solution",
  ktsLink: "@karurtech.com",
  home: "Home",
  about: "About Us",
  projects: "Projects",
  blogs: "Blogs",
  gallery: "Gallery",
  contact: " Contact Us",
  disclaimer: "Disclaimer",
  csr:"CSR",
};
const Header = ({ toggle }) => {
  return (
    <IntlProvider messages={messagesInFrench} defaultLocale="en">
      <div className="navbar mt-72">
      <div className="bg-black text-white px-3 py-5">
            <p className="pb-2">
              <a href="tel:+9442693171" className="hover:text-green-600">
                <svg
                  className="w-6 h-6 "
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>{" "}
              </a>
            </p>
            <p className="pb-2" >
              <a
                href="mailto:thogaimuruganbuilders@gmail.com"
                className="hover:text-red-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </a>
            </p>

            <p className="pb-3">
              <a
                className="hover:text-blue-600"
                href="https://www.linkedin.com/company/thogai-murugan-real-estates"
                target="blank"
              >
                {" "}
                <FiLinkedin />{" "}
              </a>
            </p>
            <p className="pb-3">
              <a
                className="hover:text-blue-400 "
                href="https://www.facebook.com/thogaimuruganbuilders/"
                target="blank"
              >
                {" "}
                <FiFacebook />{" "}
              </a>
            </p>
            <p >
              <a
                className="hover:text-pink-600"
                href="https://instagram.com/thogaimuruganbuilders?utm_medium=copy_link"
                target="blank"
              >
                {" "}
                <FiInstagram />{" "}
              </a>
            </p>
          </div>
</div>
      <nav
        className="flex justify-between items-center h-24 bg-white  font-semibold relative shadow-lg lg:pl-24 lg:pr-24  text-lg sticky"
        role="navigation"
      >
        <Link to="/" className="pl-8  ">
          <img
            alt="..."
            className="align-middle border-none max-w-full h-auto rounded-lg"
            src="/img/logo.jpg"
          />
        </Link>
        <div className="px-4 cursor-pointer md:hidden" onClick={toggle}>
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
        <div className="pr-8 md:block  hidden " >
          <Link to="/" className="px-4 text-blue-900 hover:text-red-600 Link ">
            <FormattedMessage id="home " defaultMessage="Home " />
          </Link>
          <Link to="/about" className="px-4 text-blue-900 hover:text-red-600 Link">
            <FormattedMessage id="about " defaultMessage="About Us " />
          </Link>
          <Link to="/projects" className="px-4  text-blue-900 hover:text-red-600  Link" >
            <FormattedMessage id="projects" defaultMessage="Projects " />
          </Link>
          <Link to="/blogs" className="px-4 text-blue-900 hover:text-red-600  Link ">
            <FormattedMessage id="blogs" defaultMessage="Blogs " />
          </Link>
          {/*<Link to="/csr" className="px-4 text-blue-900 hover:text-red-600 Link">
            <FormattedMessage id="csr" defaultMessage="CSR " />
  </Link>*/}
          <Link to="/gallery" className="px-4 text-blue-900 hover:text-red-600 Link">
            <FormattedMessage id="gallery" defaultMessage="Gallery" />
          </Link>
          <Link to="/contact" className="px-4 text-blue-900 hover:text-red-600  Link ">
            <FormattedMessage id=" contact" defaultMessage=" Contact Us" />
          </Link>
          <Link to="/disclaimer" className="px-4 text-blue-900 hover:text-red-600 Link">
            <FormattedMessage id=" disclaimer" defaultMessage=" Disclaimer" />
          </Link>
        </div>
      </nav>
    </IntlProvider>
  );
};

export default Header;
