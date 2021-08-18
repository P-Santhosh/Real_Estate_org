import React from "react";
import { Link } from "react-router-dom";
import { IntlProvider, FormattedMessage } from "react-intl";
import Bannerhome from "./Bannerhome";
import BannerCsr from "./BannerCsr";
const messagesInFrench = {
  
  contactUs: "CONTACT US",
  submit: "Submit",
  name: "Thogai Murugan Builders",
  addressOne: "18, Kadai Veedhi, ",
  addressTwo: " Sempadapalayam, Karur",
  addressThree: "Tamil Nadu 639001",
  contactOne: "94426-93171",
  contactTwo: "97890-63333",
  
};
const Connect= () => {
  return (
    <>
      <IntlProvider messages={messagesInFrench} defaultLocale="en">
       
        <div className="text-center lg:pt-12 pt-1 pb-3 lg:px-20 ">
          <h5 className="text-3xl font-semibold   bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200 py-3">
            <FormattedMessage id="contactUs" defaultMessage="CONTACT US" />
          </h5>
        </div>
        <section>
          <div className="lg:flex lg:py-12 lg:pb-24 pb-12 ">
            <div className="lg:w-2/4 ">
              <div className=" lg:pl-56 pl-8">
                <form>
                  <label>
                    <input
                      type="text"
                      placeholder=" Name *"
                      className="rounded border hover:border-blue-600 mt-5 lg:px-28 px-16 py-3"
                    />
                  </label>
                  <br />
                  <label>
                    <input
                      type="email"
                      placeholder="Email "
                      className="rounded border hover:border-blue-600 mt-5 lg:px-28 px-16 py-3"
                    />
                  </label>
                  <br />
                  <label>
                    <input
                      type="text"
                      placeholder=" Phone Number *"
                      className="rounded border hover:border-blue-600 mt-5 lg:px-28 px-16 py-3"
                    />
                  </label>
                  <br />
                  <label>
                    <textarea
                      class=" rounded form-textarea border hover:border-blue-600 lg:px-28 px-16 py-3 mt-5 block w-3/4"
                      rows="4"
                      placeholder="Message"
                    ></textarea>
                  </label>
                  <button
                    className="rounded-full border-4 px-16 py-2 font-semibold
      text-md bg-blue-400 border-blue-600 w-3/4 mt-5"
                  >
                    <b>
                      <FormattedMessage id="submit" defaultMessage="Submit" />
                    </b>
                  </button>
                  <br />
                </form>
              </div>
            </div>
            <div className="lg:text-justify text-left lg:pt-2 pt-8 lg:w-2/4  lg:pr-56 ">
              <img
                alt="..."
                src="/img/banner.jpg"
                className="shadow-lg  mx-auto w-2/4 hover:shadow-2xl"
              />
              <div className="lg:pl-32  lg:px-12 px-6 lg:pt-6  pt-5">
                <b className="text-xl ">
                  <FormattedMessage
                    id="name"
                    defaultMessage="Thogai Murugan Builders"
                  />
                </b>
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
                  <p className="mb-2">
                    <FormattedMessage
                      id="addressOne"
                      defaultMessage="18, Kadai Veedhi,"
                    />
                  </p>
                </div>
                <p className="mb-2">
                  <FormattedMessage
                    id="addressTwo"
                    defaultMessage="Sempadapalayam, Karur "
                  />
                </p>
                <p className="mb-2">
                  <FormattedMessage
                    id="addressThree"
                    defaultMessage="Tamil Nadu 639001 "
                  />
                </p>
                <div className="flex">
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
                  <p className="mb-2">
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
                <a href="mailto:thogaimuruganrealestates@gmail.com">
                thogaimuruganrealestates@gmail.com
                </a>
              </p>
            </div>
              </div>
            </div>
          </div>
        </section>
      </IntlProvider>
    </>
  );
};

export default Connect;
