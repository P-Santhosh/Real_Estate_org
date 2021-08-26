import React from "react";

import { IntlProvider, FormattedMessage } from "react-intl";

const messagesInFrench = {
  ourGroup: "OUR GROUP OF COMPANIES",
  
};
const Grpcmpy = () => {
  return (
    <>
      <IntlProvider messages={messagesInFrench} defaultLocale="en">
       
        <section className="lg:py-12 pt-10">
          <div className="text-center lg:px-20">
            <h5 className="lg:text-3xl text-2xl font-semibold pb-2  bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200 py-3">
              <FormattedMessage
                id="ourGroup"
                defaultMessage="OUR GROUP OF COMPANIES"
              />
            </h5>
          </div>
          <div className="lg:flex lg:mt-20  mt-6 mb-6">
            <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4 ">
              <div className="px-6">
                <a href="https://karurtech.com/" target="blank">
                  <img
                    alt="..."
                    src="/img/kgf.png"
                    className="shadow-lg  mx-auto w-3/4 hover:shadow-2xl"
                  />
                </a>
              </div>
            </div>
            <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
              <div className="px-6">
                <a href="https://karurtech.com/" target="blank">
                  <img
                    alt="..."
                    src="/img/kts.jpeg"
                    className="shadow-lg  mx-auto w-3/4 hover:shadow-2xl"
                  />
                </a>
              </div>
            </div>
            <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
              <div className="px-6">
                <a href="http://finstreetservices.com/" target="blank">
                  <img
                    alt="..."
                    src="/img/finestreet.jpg"
                    className="shadow-lg  mx-auto w-3/4 hover:shadow-2xl"
                  />
                </a>
              </div>
            </div>
            <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
              <div className="px-6">
                <a href="https://karurtech.com/" target="blank">
                  <img
                    alt="..."
                    src="/img/banner.jpg"
                    className="shadow-lg  mx-auto w-3/4 hover:shadow-2xl"
                  />
                </a>
              </div>
            </div>
          </div>
        </section>
      
      </IntlProvider>
    </>
  );
};

export default Grpcmpy;
