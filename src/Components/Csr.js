import React from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { IntlProvider, FormattedMessage } from "react-intl";
const messagesInFrench = {
  disclaimer: "Disclaimer",
  disclaimerContent:
    "This website is the sole property of Thogai Murugan Builders Limited. (the use of 'TMBL' hereinafter, implies Thogai Murugan Builders Limited). The information contained in this site is for prospective purchasers and general guidance on matters of interest only. TMBL provides information based on source believed to be accurate and reliable. Users are responsible for seeking the advice of professionals, as appropriate, regarding the information, specifications, features, opinions, FAQs, advice or content availableat TMBL. TMBL makes no representations and disclaims all warranties, whether express, implied, or statutory, including but not limited to warranties as to accuracy, reliability, usefulness, completeness, or fitness of information for any particular purpose, non-infringement and any damages ensuing thereby. In no event shall THBL or its Chairman, Managing Director, directors, managers, officers, employees or content providers be liable for any direct, indirect, special, incidental, exemplary, punitive or conseqential damages, whether or not advised of the possibility of such damages including without limitation, those pertaining to lost profits to any TMBL subscriber, participant, customer, or other person or entity for furunishing of information or arising from the contents/use of this website. ",
};

const Csr = () => {
  return (
    <>
      <IntlProvider messages={messagesInFrench} defaultLocale="en">
        <div className="text-center lg:pt-12 lg:pb-12 lg:px-20 ">
          <h5 className="text-xl font-bold   bg-gradient-to-r from-blue-400 via-blue-200 to-blue-400 py-4">
            <FormattedMessage id=" disclaimer" defaultMessage=" Disclaimer" />
          </h5>
        </div>
        <div className="lg:px-32 lg:pb-16 lg:py-1 py-6 px-6 text-justify lg:text-lg">
          <p>
            <FormattedMessage
              id=" disclaimerContent"
              defaultMessage=" This website is the sole property of Thogai Murugan Builders
            Limited. (the use of 'TMBL' hereinafter, implies Thogai Murugan
            Builders Limited). The information contained in this site is for
            prospective purchasers and general guidance on matters of interest
            only. TMBL provides information based on source believed to be
            accurate and reliable. Users are responsible for seeking the advice
            of professionals, as appropriate, regarding the information,
            specifications, features, opinions, FAQs, advice or content
            availableat TMBL. TMBL makes no representations and disclaims all
            warranties, whether express, implied, or statutory, including but
            not limited to warranties as to accuracy, reliability, usefulness,
            completeness, or fitness of information for any particular purpose,
            non-infringement and any damages ensuing thereby. In no event shall
            THBL or its Chairman, Managing Director, directors, managers,
            officers, employees or content providers be liable for any direct,
            indirect, special, incidental, exemplary, punitive or conseqential
            damages, whether or not advised of the possibility of such damages
            including without limitation, those pertaining to lost profits to
            any TMBL subscriber, participant, customer, or other person or
            entity for furunishing of information or arising from the
            contents/use of this website. "
            />
          </p>
        </div>

        <Footer></Footer>
      </IntlProvider>
    </>
  );
};

export default Csr;
