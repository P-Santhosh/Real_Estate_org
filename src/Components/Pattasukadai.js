import { React, useEffect } from "react";
import Bannerone from "./Bannerone";
import Footer from "./Footer";
import { IntlProvider, FormattedMessage } from "react-intl";
import emailjs from "emailjs-com";
const messagesInFrench = {
  pattasukadaiHead:
    "THOGAI MURUGAN BUILDERS PRESENTS THE THOGAI MURUGAN AVENUES @ Pattasukadai, Paramathi Velur",
  propertyDetails: "PROPERTY DETAILS",
  propertyAddress: " PROPERTY ADDRESS",
  address: "Address :",
  city: "City :",
  state: "State :",
  pattasukadaiAddressone: "NH 44, Paramathi to Namakkal road,",
  pattasukadaiAddresstwo: "Near Pattasukadi Paramathi Velur,Namakkal",
  pattasukadaiCity: " Namakkal",
  pattasukadaiState: "Tamilnadu",
  propertySpecifications: " PROPERTY DETAILS & SPECIFICATIONS",
  propertyId: "Property Id :",
  nofPlots: "No of Plots:",
  typesofPlots: "Type of Plots :",
  idValue: "Thogai Murugan Avenue",
  pattasukadaiNofplots: "127",
  pattasukadaiTypesofplots: "Normal flats & EWS Flats",
  propertyFeatures: "PROPERTY FEATURES",
  contactUs: "CONTACT US",
  submit: "SUBMIT",
  featureRoad: "Bitumen road",
  featureDraiange: "Drainage for all roads",
  featureLights: "Street Lights",
  featurePark: "Park facilities",
  featureDtcp: "DTCP approval for all flats",
  featureArch: "Massive concrete Arch",
};
const Pattasukadi = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  function sendEmail(e){
    e.preventDefault();
 
   emailjs.sendForm('Gmail' ,'template_tw3qtjp',  e.target, "user_Wdd2WV1TPRjr521IUFnNb")
 
   .then(function(res){
     console.log("success", res.status);
   },(error) => {
     console.log(error.text)
   });
   e.target.reset()
 }
  return (
    <>
      <IntlProvider messages={messagesInFrench} defaultLocale="en">
        <div className="text-center pt-12 pb-10 lg:px-20 ">
          <h5 className="text-xl font-bold   bg-gradient-to-r from-blue-400 via-blue-200 to-blue-400 py-4">
            <FormattedMessage
              id="pattasukadaiHead"
              defaultMessage="  THOGAI MURUGAN BUILDERS PRESENTS THE THOGAI MURUGAN AVENUES @    Pattasukadai, Paramathi Velur "
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
                  <span className="font-semibold">
                    <FormattedMessage id="address" defaultMessage="Address :" />{" "}
                  </span>
                  <span>
                    <FormattedMessage
                      id="pattasukadaiAddressone"
                      defaultMessage="NH 44, Paramathi to Namakkal road, "
                    />
                    <br />{" "}
                    <FormattedMessage
                      id="pattasukadaiAddresstwo"
                      defaultMessage="Near Pattasukadi Paramathi Velur,Namakkal "
                    />
                  </span>
                </p>
                <p>
                  <span className="font-semibold">
                    <FormattedMessage id="city" defaultMessage="City :" />{" "}
                  </span>
                  <FormattedMessage
                    id="pattasukadaiCity"
                    defaultMessage=" Namakkal "
                  />
                </p>
                <p>
                  <span className="font-semibold">
                    <FormattedMessage id="state" defaultMessage="State :" />{" "}
                  </span>{" "}
                  <FormattedMessage
                    id="pattasukadaiState"
                    defaultMessage="Tamilnadu "
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
                  <span className="font-semibold">
                    <FormattedMessage
                      id="propertyId"
                      defaultMessage="Property Id :"
                    />{" "}
                  </span>
                  <span>
                    {" "}
                    <FormattedMessage
                      id="idValue"
                      defaultMessage=" Thogai Murugan Avenue"
                    />
                  </span>{" "}
                </p>
                <p>
                  <span className="font-semibold">
                    <FormattedMessage
                      id="nofPlots"
                      defaultMessage="No of Plots:"
                    />{" "}
                  </span>
                  <FormattedMessage
                    id="pattasukadaiNofplots"
                    defaultMessage="127"
                  />
                </p>
                <p>
                  <span className="font-semibold">
                    <FormattedMessage
                      id="typesofPlots:"
                      defaultMessage="Type of Plots :"
                    />
                  </span>{" "}
                  <FormattedMessage
                    id="pattasukadaiTypesofplots"
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
                  <li className="list-disc">
                    <FormattedMessage
                      id="featureArch"
                      defaultMessage="Massive concrete Arch"
                    />
                  </li>
                  <li className="list-disc">
                    <FormattedMessage
                      id="featureRoad"
                      defaultMessage="Bitumen road"
                    />
                  </li>
                  <li className="list-disc">
                    <FormattedMessage
                      id="featureDraiange"
                      defaultMessage="Drainage for all roads"
                    />
                  </li>
                  <li className="list-disc">
                    <FormattedMessage
                      id="featureLights"
                      defaultMessage="Street Lights"
                    />
                  </li>
                  <li className="list-disc">
                    <FormattedMessage
                      id="featurePark"
                      defaultMessage="Park facilities"
                    />
                  </li>
                  <li className="list-disc">
                    <FormattedMessage
                      id="featureDtcp"
                      defaultMessage="DTCP approval for all flats"
                    />
                  </li>
                </ul>
              </div>
            </div>
            <div className="lg:w-1/4 px-3 lg:pt-10">
              <p className="text-xl font-bold  text-center bg-gradient-to-r from-blue-400 via-blue-200 to-blue-400 py-4">
                <FormattedMessage id="contactUs" defaultMessage="CONTACT US" />
              </p>
              <form className="px-3 mt-12" onSubmit={sendEmail}>
                <label>
                  <input
                    type="text"
                    placeholder=" Name *"
                    name = "name"
                    className="rounded border hover:border-blue-600   w-11/12  px-5 mb-4 p-2 "
                  />
                </label>
                <br />
                <label>
                  <input
                    type="email"
                    placeholder=" Email "
                    name = "email"
                    className="rounded border hover:border-blue-600  w-11/12 px-5 mb-4 p-2"
                  />
                </label>
                <br />
                <label>
                  <input
                    type="text"
                    placeholder=" Phone Number *"
                    name = "phone number"
                    name = "message"
                    className="rounded border hover:border-blue-600  w-11/12 px-5 mb-4 p-2"
                  />
                </label>
                <br />
                <label>
                  <textarea
                    class="rounded form-textarea border hover:border-blue-600  lg:w-8/9 w-11/12 px-5 mb-4 p-2"
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
          </div>
        </section>
        <Footer />
      </IntlProvider>
    </>
  );
};

export default Pattasukadi;
