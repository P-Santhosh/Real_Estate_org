import React from "react";
import { Link } from "react-router-dom";
import { IntlProvider, FormattedMessage } from "react-intl";
import { FiFacebook, FiLinkedin, FiInstagram } from "react-icons/fi";
const messagesInFrench = {
  name: "Thogai Murugan Builders",
  addressOne: "18, Kadai Veedhi ",
  addressTwo: "Sempadapalayam, Karur",
  addressThree: "Tamil Nadu 639001",
  contactOne: "94426-93171",
  contactTwo: "97890-63333",
  copyright: "Copyright 2021 © Thogai Murugan Builders",
  allrights: "All Rights Reserved",
  kts: "Made by love 💙 Karur Tech Solution",
  ktsLink: "@karurtech.com",
  home: "Home",
  about: "About Us",
  projects: "Projects",
  blogs: "Blogs",
  gallery: "Gallery",
  contact: " Contact",
  disclaimer: "Disclaimer",
  csr: "CSR",
};
class Footer extends React.Component {
  render() {
    return (
      <IntlProvider messages={messagesInFrench} defaultLocale="en">
        <footer className=" bg-gradient-to-r from-blue-300 via-blue-100 to-blue-300 text-blue-900  pt-5 lg:p-12 text-center">
          <section className="lg:py-5">
            <div className="lg:flex lg:mt-2 mb-6 lg:px-12 px-3">
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
              <div className="text-left lg:pl-32 lg:pr-12 lg:px-6  text-xl font-medium">
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
                {/*<p>
                  <Link to="/csr" className="p-4 hover:text-red-600">
                    <FormattedMessage id="csr" defaultMessage="CSR " />
                  </Link>
                </p>*/}
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
                <p>
                  <Link to="/disclaimer" className="p-4 hover:text-red-600">
                    <FormattedMessage
                      id="disclaimer"
                      defaultMessage=" Disclaimer"
                    />
                  </Link>
                </p>
              </div>

              <div className="text-left lg:px-32 pl-4 py-2  font-bold ">
                <h2 className="text-lg pb-3">
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
                    &nbsp;&nbsp;
                    <FormattedMessage
                      id="addressOne"
                      defaultMessage="18, Kadai Veedhi "
                    />
                  </p>
                </div>
                <p className="mb-2 font-medium pl-9">
                  <FormattedMessage
                    id="addressTwo"
                    defaultMessage="Sempadapalayam, Karur "
                  />
                </p>
                <p className="mb-2 font-medium pl-9">
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
                      &nbsp;&nbsp;&nbsp;
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
                    &nbsp;&nbsp;&nbsp;
                    <a href="mailto:thogaimuruganrealestates@gmail.com">
                      thogaimuruganrealestates@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </section>
          <div className="flex lg:px-96 lg:mx-40 px-20 lg:pb-0 pb-2 lg:py-3">
            <p className="lg:px-6 px-3">
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
            <p className="lg:px-6 px-3">
              <a
                href="mailto:thogaimuruganrealestates@gmail.com"
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

            <p className="lg:px-6 px-3 ">
              <a
                className="hover:text-blue-600"
                href="https://www.linkedin.com/company/thogai-murugan-real-estates"
                target="blank"
              >
                {" "}
                <FiLinkedin />{" "}
              </a>
            </p>
            <p className="lg:px-6 px-3">
              <a
                className="hover:text-blue-400 "
                href="https://www.facebook.com/thogaimuruganbuilders/"
                target="blank"
              >
                {" "}
                <FiFacebook />{" "}
              </a>
            </p>
            <p className="lg:px-6 px-3">
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
          <hr></hr>
          <div className=" font-bold ">
            <p className=" lg:pt-5 text-lg hover:text-green-600">
              <a href="tel:+0444-627-6233">
                {" "}
                Toll Free&nbsp; @&nbsp; 0444-627-6233{" "}
              </a>
            </p>
            <p>
              <FormattedMessage
                id="copyright"
                defaultMessage="Copyright 2021 © Thogai Murugan Builders "
              />
            </p>
            <p>
              <FormattedMessage
                id="allrights"
                defaultMessage="All Rights Reserved "
              />
            </p>
            <a
              href="https://karurtech.com/"
              target="blank"
              className="hover:text-green-900"
            >
              <FormattedMessage
                id="kts"
                defaultMessage="Made by love 💙   Karur Tech Solution  "
              />
            </a>
          </div>
        </footer>
      </IntlProvider>
    );
  }
}

export default Footer;
