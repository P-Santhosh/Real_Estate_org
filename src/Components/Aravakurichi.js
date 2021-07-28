import React from "react";
import Bannerone from "./Bannerone";
import Footer from "./Footer";
import { IntlProvider, FormattedMessage, FormattedNumber } from "react-intl";
const messagesInFrench = {
  aravaiHead:
    "THOGAI MURUGAN BUILDERS PRESENTS THE THOGAI MURUGAN AVENUES @ Aravakurichi, Karur ",
  propertyDetails: "PROPERTY DETAILS",
  propertyAddress:" PROPERTY ADDRESS",
  address:"Address :",
  city:"City :",
  state:"State :",
  aravaiAddressone:"Aravakurichi, Karur",
  aravaiAddresstwo:"",
  aravaiCity:"Karur",
  aravaiState:"Tamilnadu",
  propertySpecifications:" PROPERTY DETAILS & SPECIFICATIONS",
  propertyId:"Property Id :",
  nofPlots:"No of Plots:",
  typesofPlots:"Type of Plots :",
  idValue:"Thogai Murugan Avenue",
  aravaiNofplots:"184",
  aravaiTypesofplots:"Normal flats & EWS Flats",
  propertyFeatures:"PROPERTY FEATURES",
  contactUs: "CONTACT US",
};
const Aravakurichi = () => {
  return (
    <>
      <IntlProvider messages={messagesInFrench} locale="fr" defaultLocale="en">
        <div className="text-center pt-12 pb-10 lg:px-20 ">
          <h5 className="text-xl font-bold   bg-gradient-to-r from-blue-400 via-blue-200 to-blue-400 py-4">
            <FormattedMessage
              id="aravaiHead"
              defaultMessage="THOGAI MURUGAN BUILDERS PRESENTS THE THOGAI MURUGAN AVENUES @ Aravakurichi, Karur "
            />
          </h5>
        </div>
        <Bannerone />
        <section className="lg:px-12">
          <div className="lg:flex py-20 ">
            <div className="lg:w-3/4 px-6">
              <p className="text-3xl text-blue-900 ">
                <FormattedMessage
                  id="propertyDetails"
                  defaultMessage="PROPERTY DETAILS "
                />
              </p>
              <p className="text-xl font-bold mt-1 text-center bg-gradient-to-r from-blue-400 via-blue-200 to-blue-400 py-4">
              <FormattedMessage
                  id="propertyAddress"
                  defaultMessage="PROPERTY ADDRESS "
                />
              </p>
              <div className="lg:px-80 py-2 text-base py-5">
                <p>
                  <span className="font-semibold"><FormattedMessage
                  id="address"
                  defaultMessage="Address :"
                /> </span>
                  <span><FormattedMessage
                  id="aravaiAddressone"
                  defaultMessage="Aravakurichi, Karur"
                />  </span>
                </p>
                <p>
                  <span className="font-semibold "><FormattedMessage
                  id="city"
                  defaultMessage="City :"
                /> </span> <FormattedMessage
                id="aravaiCity"
                defaultMessage="Karur"
              /> 
                </p>
                <p>
                  <span className="font-semibold"><FormattedMessage
                  id="state"
                  defaultMessage="State :"
                /> </span> <FormattedMessage
                id="aravaiState"
                defaultMessage="Tamilnadu"
              /> 
                </p>
              </div>
              <p className="text-xl font-bold mt-1 text-center bg-gradient-to-r from-blue-400 via-blue-200 to-blue-400 py-4">
              <FormattedMessage
                  id="propertySpecifications"
                  defaultMessage="PROPERTY DETAILS & SPECIFICATIONS "
                /> 
              </p>
              <div className="lg:px-80 py-2 text-base py-5">
                <p>
                  <span className="font-semibold"><FormattedMessage
                  id="propertyId"
                  defaultMessage="Property Id :"
                /> </span>
                  <span> <FormattedMessage
                  id="idValue"
                  defaultMessage=" Thogai Murugan Avenue"
                /></span>
                </p>
                <p>
                  <span className="font-semibold"><FormattedMessage
                  id="nofPlots"
                  defaultMessage="No of Plots:"
                />  </span> <FormattedMessage
                id="aravaiNofplots"
                defaultMessage=" 184"
              /> 
                </p>
                <p>
                  <span className="font-semibold"><FormattedMessage
                  id="typesofPlots:"
                  defaultMessage="Type of Plots :"
                /></span><FormattedMessage
                id="aravaiTypesofplots"
                defaultMessage=" Normal flats & EWS Flats"
              /> 
                </p>
              </div>
              <p className="text-xl font-bold mt-1 text-center bg-gradient-to-r from-blue-400 via-blue-200 to-blue-400 py-4">
              <FormattedMessage
                  id="propertyFeatures"
                  defaultMessage="PROPERTY FEATURES"
                />
              </p>
              <div className="lg:px-80 py-2 text-base py-5">
                <ul>
                  <li className="list-disc">Bitumen road</li>
                  <li className="list-disc">Drainage for all roads</li>
                  <li className="list-disc">Street Lights</li>
                  <li className="list-disc">Park facilities</li>
                  <li className="list-disc">DTCP approval for all flats</li>
                </ul>
              </div>
            </div>
            <div className="lg:w-1/4 px-3 lg:pt-10">
              <p className="text-xl font-bold  text-center bg-gradient-to-r from-blue-400 via-blue-200 to-blue-400 py-4">
              <FormattedMessage id="contactUs" defaultMessage="CONTACT US" />
              </p>
              <form className="px-3 mt-12">
                <label>
                  <input
                    type="text"
                    placeholder=" Name *"
                    className=" border hover:border-blue-600 lg:px-16 px-6 mb-4 p-2 "
                  />
                </label>
                <br />
                <label>
                  <input
                    type="email"
                    placeholder=" Email "
                    className=" border hover:border-blue-600 lg:px-16 px-6 mb-4 p-2"
                  />
                </label>
                <br />
                <label>
                  <input
                    type="text"
                    placeholder=" Phone Number *"
                    className=" border hover:border-blue-600 lg:px-16 px-6 mb-4 p-2"
                  />
                </label>
                <br />
                <label>
                  <textarea
                    class="form-textarea border hover:border-blue-600  w-8/9 lg:px-16 px-6mb-4 p-2"
                    rows="6"
                    placeholder="Message"
                  ></textarea>
                </label>
                <button
                  className="rounded-full border-4 lg:px-16 px-6 py-2 font-bold
      text-sm bg-blue-400 border-blue-600 w-3/4 mt-5 lg:mt-16 lg:ml-8"
                >
                  <b>Submit</b>
                </button>
                <br />
              </form>
            </div>
          </div>
        </section>
        <Footer />
      </IntlProvider>
    </>
  );
};

export default Aravakurichi;