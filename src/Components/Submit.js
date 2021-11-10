import { React, useEffect } from "react";
import Footer from "./Footer";
import { IntlProvider, FormattedMessage } from "react-intl";
const messagesInFrench = {
  disclaimer: "Disclaimer",
  disclaimerContent:
    "This website is the sole property of Thogai Murugan Builders. (the use of 'TMB' hereinafter, implies Thogai Murugan Builders). The information contained in this site is for prospective purchasers and general guidance on matters of interest only. TMB provides information based on source believed to be accurate and reliable. Users are responsible for seeking the advice of professionals, as appropriate, regarding the information, specifications, features, opinions, FAQs, advice or content available at TMB. TMB makes no representations and disclaims all warranties, whether express, implied, or statutory, including but not limited to warranties as to accuracy, reliability, usefulness, completeness, or fitness of information for any particular purpose, non-infringement and any damages ensuing thereby. In no event shall TMB or its Chairman, Managing Director, directors, managers, officers, employees or content providers be liable for any direct, indirect, special, incidental, exemplary, punitive or consequential damages, whether or not advised of the possibility of such damages including without limitation, those pertaining to lost profits to any TMB subscriber, participant, customer, or other person or entity for furunishing of information or arising from the contents/use of this website. ",
};

const Submit = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <div className="lg:ml-96 lg:pl-56 px-12 lg:pt-10 ">
        <img alt="..." src="/img/banner.jpg" />
      </div>
      <div className="lg:px-32 lg:pb-8 pb-5 font-bold  px-6 text-center lg:text-2xl">
          <p>Thank you for booking a plot at Thogai Murugan Avenue.</p>
          <p>We will call you back soon.</p>
        </div>
        <div className="lg:px-96 lg:mx-32 px-3 lg:pb-20 pb-8 lg:pt-5 text-gray-900 text-center">
            <p
              className="rounded-lg   lg:px-20 lg:px-6 px-1    py-3 font-bold
       text-sm bg-green-400 border-green-600  hover:bg-green-900 hover:border-green-100  hover:text-white"
            >
          <p className="  text-lg  ">
              <a href="tel:04446276233" className="hover:text-green-100 ">
                {" "}
                📞 Call now @  0444-627-6233 📞{" "}
              </a>
            </p>
            </p>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Submit;
