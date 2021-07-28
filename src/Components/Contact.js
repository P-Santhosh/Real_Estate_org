import React from "react";
import Footer from "../Components/Footer";
import { IntlProvider, FormattedMessage, FormattedNumber } from "react-intl";
const messagesInFrench = {
  name: "Thogai Murugan Builders",
  addressOne: "18, Kadai Veedhi, sempadapalayam",
  addressTwo: "Tamil Nadu 639001",
  contactOne: "94426-93171",
  contactTwo: "97890-63333",
};
const Contact = () => {
  return (
    <>
      <IntlProvider messages={messagesInFrench} locale="fr" defaultLocale="en">
        <p></p>
        <div className=" lg:pl-40  lg:p-24  lg:flex h-full rounded mb-20  lg:pt-24  ">
          <img
            alt="..."
            className="align-middle border-none max-w-full h-auto rounded-lg sm:pl-32 "
            src="/img/banner.jpg"
          />

          <div className="center-content lg:pl-64 px-12 lg:pt-8 pt-2  ">
            <h2 className="text-xl mb-2">
              <FormattedMessage
                id="name"
                defaultMessage="Thogai Murugan Builders"
              />
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
            <p className="mb-2"><FormattedMessage
                id="addressOne"
                defaultMessage="18, Kadai Veedhi, sempadapalayam "
              /></p>
            <p className="mb-2"> <FormattedMessage
                id="addressTwo"
                defaultMessage="Tamil Nadu 639001 "
              /></p>

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
            <p className="mb-2"><FormattedMessage
                id="contactOne"
                defaultMessage="94426-93171 "
              /> </p>
            <p className="mb-2"><FormattedMessage
                id="contactTwo"
                defaultMessage="97890-63333 "
              /></p>
          </div>
        </div>
        <p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1531.6078754163677!2d78.02250659742523!3d11.072595949194923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baa2c9b832431eb%3A0x859ae5b494920b0!2sThogai%20Murugan%20Builders!5e0!3m2!1sen!2sin!4v1627102742001!5m2!1sen!2sin"
            className="w-full h-96"
          ></iframe>
        </p>
        <Footer />
      </IntlProvider>
    </>
  );
};

export default Contact;
