import React from "react";
import Footer from "./Footer";
import { IntlProvider, FormattedMessage } from "react-intl";
const messagesInFrench = {
  disclaimer: "Disclaimer",
  disclaimerContent:
    "This website is the sole property of Thogai Murugan Builders. (the use of 'TMB' hereinafter, implies Thogai Murugan Builders). The information contained in this site is for prospective purchasers and general guidance on matters of interest only. TMB provides information based on source believed to be accurate and reliable. Users are responsible for seeking the advice of professionals, as appropriate, regarding the information, specifications, features, opinions, FAQs, advice or content available at TMB. TMB makes no representations and disclaims all warranties, whether express, implied, or statutory, including but not limited to warranties as to accuracy, reliability, usefulness, completeness, or fitness of information for any particular purpose, non-infringement and any damages ensuing thereby. In no event shall TMB or its Chairman, Managing Director, directors, managers, officers, employees or content providers be liable for any direct, indirect, special, incidental, exemplary, punitive or consequential damages, whether or not advised of the possibility of such damages including without limitation, those pertaining to lost profits to any TMB subscriber, participant, customer, or other person or entity for furunishing of information or arising from the contents/use of this website. ",
};

const Disclaimer = () => {
  return (
    <>
      <IntlProvider messages={messagesInFrench} defaultLocale="en">
        <div className="text-center lg:pt-12 lg:pb-12 lg:px-20 ">
          <h5 className="text-3xl font-semibold   bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200 py-3">
            <FormattedMessage id=" disclaimer" defaultMessage=" Disclaimer" />
          </h5>
        </div>
        <div className="lg:px-32 lg:pb-16 lg:py-1 py-6 px-6 text-justify lg:text-lg">
          <p>
            <FormattedMessage
              id=" disclaimerContent"
              defaultMessage=" This website is the sole property of Thogai Murugan Builders. (the use of 'TMB' hereinafter, implies Thogai Murugan Builders). The information contained in this site is for prospective purchasers and general guidance on matters of interest only. TMB provides information based on source believed to be accurate and reliable. Users are responsible for seeking the advice of professionals, as appropriate, regarding the information, specifications, features, opinions, FAQs, advice or content available at TMB. TMB makes no representations and disclaims all warranties, whether express, implied, or statutory, including but not limited to warranties as to accuracy, reliability, usefulness, completeness, or fitness of information for any particular purpose, non-infringement and any damages ensuing thereby. In no event shall TMB or its Chairman, Managing Director, directors, managers, officers, employees or content providers be liable for any direct, indirect, special, incidental, exemplary, punitive or consequential damages, whether or not advised of the possibility of such damages including without limitation, those pertaining to lost profits to any TMB subscriber, participant, customer, or other person or entity for furunishing of information or arising from the contents/use of this website."
            />
          </p>
        </div>

        <Footer></Footer>
      </IntlProvider>
    </>
  );
};

export default Disclaimer;
