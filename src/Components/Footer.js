import React from "react";
import { Link } from "react-router-dom";
import { IntlProvider, FormattedMessage } from "react-intl";
const messagesInFrench = {
  name: "Thogai Murugan Builders",
  addressOne: "18, Kadai Veedhi, ",
  addressTwo: "Sempadapalayam, Karur",
  addressThree: "Tamil Nadu 639001",
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
                      className="shadow-lg  mx-auto lg:w-3/4  hover:shadow-2xl"
                    />
                  </a>
                </div>
              </div>
              <div className="text-left lg:pl-32 lg:pr-12 px-6 lg:pt-3 text-xl font-medium">
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

              <div className="text-left lg:px-32  px-10 py-2 font-bold ">
                <h2>
                  <b>
                    <FormattedMessage
                      id="name"
                      defaultMessage="Thogai Murugan Builders"
                    />
                  </b>
                </h2>
                <div className="flex">
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
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>

                  <p className="mb-2 font-medium">
                    <FormattedMessage
                      id="addressOne"
                      defaultMessage="18, Kadai Veedhi,  "
                    />
                  </p>
                </div>
                <p className="mb-2 font-medium">
                  <FormattedMessage
                    id="addressTwo"
                    defaultMessage="Sempadapalayam, Karur "
                  />
                </p>
                <p className="mb-2 font-medium">
                  <FormattedMessage
                    id="addressThree"
                    defaultMessage="Tamil Nadu 639001 "
                  />
                </p>
                <div className="flex">
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
                  </svg>
                  <p className="mb-2 font-medium items-end ">
                  <a href="tel:+9442693171">
                    <FormattedMessage
                      id="contactOne"
                      defaultMessage="94426-93171 "
                    />
                    </a>
                  </p>
                </div>
                <div className="flex">
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

              <p className="mb-2  ">
                <a href="mailto:santhoshprakash19@gmail.com">
                  contact@thoagimuruganbuilders.com
                </a>
              </p>
            </div>
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
