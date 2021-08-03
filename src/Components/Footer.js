import React from "react";
import { Link } from "react-router-dom";
import { IntlProvider, FormattedMessage } from "react-intl";
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
  contact: " Contact",
};
class Footer extends React.Component {
  render() {
    return (
      <IntlProvider messages={messagesInFrench} defaultLocale="en">
        <footer className=" bg-gradient-to-r from-blue-300 via-blue-100 to-blue-300 text-blue-900  pt-10 lg:p-12 text-center">
          <section className="lg:py-9">
            <div className="lg:flex lg:mt-2 mb-6 px-12">
              <div className="w-full md:w-6/12 lg:w-4/12 lg:mb-0 mb-12 px-4 ">
                <div className="px-6">
                  <a href="https://karurtech.com/" target="_blank ">
                    <img
                      alt="..."
                      src="/img/banner.jpg"
                      className="shadow-lg  mx-auto w-3/4 hover:shadow-2xl"
                    />
                  </a>
                </div>
              </div>
              <div className="text-left lg:px-32 px-12  text-xl font-medium">
                <p>
                  <Link to="/" className="p-4 hover:text-red-600">
                    <FormattedMessage id="home " defaultMessage="Home " />
                  </Link>
                </p>
                <Link to="/about" className="p-4 hover:text-red-600">
                  <FormattedMessage id="about " defaultMessage="About Us " />
                </Link>
                <p>
                  <Link to="/projects" className="p-4 hover:text-red-600">
                    <FormattedMessage
                      id="projects"
                      defaultMessage="Projects "
                    />
                  </Link>
                </p>
                <p>
                  <Link to="/blogs" className="p-4 hover:text-red-600">
                    <FormattedMessage id="blogs" defaultMessage="Blogs " />
                  </Link>
                </p>
                <p>
                  <Link to="/gallery" className="p-4 hover:text-red-600">
                    <FormattedMessage id="gallery" defaultMessage="Gallery" />
                  </Link>
                </p>
                <p>
                  <Link to="/contact" className="p-4 hover:text-red-600">
                    <FormattedMessage id=" contact" defaultMessage=" Contact" />
                  </Link>
                </p>
              </div>

              <div className="text-left lg:px-32  px-8 py-3 font-bold ">
                <h2>
                  <b className="pb-4">
                    <FormattedMessage
                      id="name"
                      defaultMessage="Thogai Murugan Builders"
                    />
                  </b>
                </h2>
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
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
                <p className="mb-2 font-medium">
                  <FormattedMessage
                    id="addressOne"
                    defaultMessage="18, Kadai Veedhi, sempadapalayam "
                  />
                </p>
                <p className="mb-2 font-medium">
                  <FormattedMessage
                    id="addressTwo"
                    defaultMessage="Tamil Nadu 639001 "
                  />
                </p>
                <svg
                  className="w-6 h-6"
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
                </svg>
                <p className="mb-2 font-medium">
                  <FormattedMessage
                    id="contactOne"
                    defaultMessage="94426-93171 "
                  />
                  /
                  <FormattedMessage
                    id="contactTwo"
                    defaultMessage="97890-63333 "
                  />
                </p>
              </div>
            </div>
          </section>
          <hr></hr>
          <div className="pb-6 font-bold">
            <p className="p-3  mt-4">
              <FormattedMessage
                id="copyright"
                defaultMessage="Copyright 2021 © Thogai Murugan Builders "
              />
              <br />
              <FormattedMessage
                id="allrights"
                defaultMessage="All Rights Reserved "
              />
            </p>
            <a href="https://karurtech.com/" target="blank">
              <FormattedMessage
                id="kts"
                defaultMessage="With love of Karur Tech Solution  "
              />
              <span>
                <FormattedMessage
                  id="ktsLink"
                  defaultMessage=" @karurtech.com "
                />
              </span>
            </a>
          </div>
        </footer>
      </IntlProvider>
    );
  }
}

export default Footer;
