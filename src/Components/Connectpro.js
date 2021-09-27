import { React, useEffect } from "react";

import { IntlProvider, FormattedMessage } from "react-intl";
const messagesInFrench = {
  contactUs: "CONTACT US",
  submit: "SUBMIT",
};
const Connectpro = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <IntlProvider messages={messagesInFrench} defaultLocale="en">
        <section>
          <div className="lg:w-1/4 px-3 lg:pt-10">
            <p className="text-xl font-bold  text-center bg-gradient-to-r from-blue-400 via-blue-200 to-blue-400 py-4">
              <FormattedMessage id="contactUs" defaultMessage="CONTACT US" />
            </p>
            <form className="px-3 mt-12">
              <label>
                <input
                  type="text"
                  placeholder=" Name *"
                  className="rounded border hover:border-blue-600   w-11/12  px-5 mb-4 p-2 "
                />
              </label>
              <br />
              <label>
                <input
                  type="email"
                  placeholder=" Email "
                  className="rounded border hover:border-blue-600  w-11/12 px-5 mb-4 p-2"
                />
              </label>
              <br />
              <label>
                <input
                  type="text"
                  placeholder=" Phone Number *"
                  className="rounded border hover:border-blue-600  w-11/12  px-5 mb-4 p-2"
                />
              </label>
              <br />
              <label>
                <textarea
                  class="rounded form-textarea border hover:border-blue-600  lg:w-8/9 w-11/12  px-5 mb-4 p-2"
                  rows="6"
                  placeholder="Message"
                ></textarea>
              </label>
              <button
                className="rounded-full border-4 lg:px-16 px-6 py-2 font-bold
      text-sm bg-blue-400 border-blue-600 lg:w-3/4 w-11/12 mt-5 lg:mt-16 lg:ml-8 hover:bg-white"
              >
                <b>
                  {" "}
                  <FormattedMessage id="submit" defaultMessage="SUBMIT" />
                </b>
              </button>
              <br />
            </form>
          </div>
        </section>
      </IntlProvider>
    </>
  );
};

export default Connectpro;
