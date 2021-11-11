import { React, useEffect, useState } from "react";
import Bannerone from "./Bannerone";
import Footer from "./Footer";
import { IntlProvider, FormattedMessage } from "react-intl";
import { ImLocation2} from "react-icons/im";
import emailjs from "emailjs-com";
import { useHistory } from "react-router";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter,
} from "react-router-dom";
const messagesInFrench = {
  munnurHead:
    "  THOGAI MURUGAN BUILDERS PRESENTS THE THOGAI MURUGAN AVENUES @  Munnur, Karur Paramathi ",
  propertyDetails: "PROPERTY DETAILS",
  propertyAddress: " PROPERTY ADDRESS",
  address: "Address :",
  city: "City :",
  state: "State :",
  munnurAddressone: "Karur Paramathi to Noyyal road,",
  munnurAddresstwo: "Karur Paramathi, Karur",
  munnurCity: "Karur",
  munnurState: "Tamilnadu",
  propertySpecifications: " PROPERTY DETAILS & SPECIFICATIONS",
  propertyId: "Property Id :",
  nofPlots: "No of Plots:",
  typesofPlots: "Type of Plots :",
  idValue: "Thogai Murugan Avenue",
  munnurNofplots: "111",
  munnurTypesofplots: "Normal flats & EWS Flats",
  propertyFeatures: "PROPERTY FEATURES",
  contactUs: "CONTACT US",
  submit: "SUBMIT",
  featureRoad: "Bitumen road",
  featureDraiange: "Drainage for all roads",
  featureLights: "Street Lights",
  featurePark: "Park facilities",
  featureDtcp: "DTCP approval for all flats",
  featureArch: "Massive concrete Arch",
  booking:"Booking  ",
  bookmyplot:"BOOK MY PLOT"
};
const Booking = () => {

  //const [phone, setPhone] = useState("");
  const history = useHistory();
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
   history.push({
    pathname:  "/plotbooked",
     
 });
 }
//  function handleClick(e){

  
//   if(phone.length != "0"){
//     setPhone(phone);
//   }
//     else{
//       alert("please enter the phone number");
//     }
//   }
  
 


  return (
    <>
      <IntlProvider messages={messagesInFrench} defaultLocale="en">
      <div className="lg:px-96 lg:mx-32 px-3  pt-5 text-gray-900 text-center">
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
        <div className="text-center pt-3 pb-3 lg:px-20 ">
          <div className="lg:text-5xl text-xl font-bold    bg-gradient-to-r from-blue-400 via-blue-200 to-blue-400 py-4">
              <p>தோகைமுருகன் அவன்யூ</p>
          {/*<p className="flex item-center font-semibold"> <ImLocation2 />அரவக்குறிச்சி </p>
          <p className="flex item-center"> <ImLocation2 />க.பரமத்தி </p>*/}
          </div>
        </div>
        <div className="text-center ">
          <p className="lg:text-2xl text-sm font-bold ">📢 &nbsp;கரூர் மாநகராட்சியின் மாபெரும்&nbsp; 📢 </p>
          <p className="lg:text-5xl text-xl font-bold pt-3 text-blue-900">PLOT மேளா&nbsp;!!!</p>
        </div>
        <div className="lg:mx-56 lg:px-56 px-6  lg:pt-10 pt-3 pb-10">
              <div className="lg:text-xl  text-sm flex font-bold lg:pl-32 pl-8 text-center bg-gradient-to-r from-blue-400 via-blue-200 to-blue-400 py-4">
              <div className=" flex font-semibold"> <ImLocation2 /><p>அரவக்குறிச்சி</p> </div>
              <div className="flex  font-semibold">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <ImLocation2 /><p>க.பரமத்தி</p> </div>
             
              </div>
              <form className="px-3 mt-12" onSubmit={sendEmail}>
                <label>
                  <input
                    type="text"
                    placeholder=" Name "
                    name = "name" 
                    className="rounded border hover:border-blue-600  border-blue-900  w-11/12 px-5 mb-4 p-2 "
                    required
                  />
                </label>
                <br />
                <label>
                  <input
                    type="email"
                    placeholder=" Email "
                    name = "email"
                    className="rounded border hover:border-blue-600   border-blue-900 w-11/12 px-5 mb-4 p-2"
                    
                  />
                </label>
                <br />
                <label>
                  <input
                    type="text"
                    placeholder=" Phone Number *"
                    name = "phone number"
                    className="rounded border hover:border-blue-600  border-blue-900  w-11/12 px-5 mb-4 p-2"
                    required
                   minLength="10"
                   maxLength="10"
                  />
                </label>
                <br />
               
                <button  
                  className="rounded-full border-4 lg:px-5 px-6 py-2 font-bold
      text-sm bg-blue-400 border-blue-600 lg:w-5/12 w-11/12 mt-5  lg:ml-36 hover:bg-white"
      
                >
                  <b>
                    {" "}
                    <FormattedMessage id="bookmyplot" defaultMessage="BOOK MY PLOT" />
                  </b>
                </button>
                <br />
               
              </form>
            </div>
            
        <Bannerone />
        <section className="lg:px-12 ">
          <div className="lg:flex pt-20 pb-5">
            <div className="lg:w-11/12 px-6 lg:pl-20">
              <p className="text-3xl text-blue-900 ">
                <FormattedMessage
                  id="propertyDetails"
                  defaultMessage="PROPERTY DETAILS "
                />
              </p>
            
              <p className="text-xl font-bold mt-1 text-center bg-gradient-to-r from-blue-400 via-blue-200 to-blue-400 py-4">
                <FormattedMessage
                  id="propertyFeatures"
                  defaultMessage="PROPERTY FEATURES"
                />
              </p>
              <div className="lg:ml-96 lg:pl-28 pl-20 py-2 lg:text-xl text-base py-5 lg:pt-10 lg:leading-9">
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
                  <li className="list-disc">
                    <FormattedMessage
                      id="munnurTypesofplots"
                      defaultMessage="Normal flats & EWS Flats"
                    />
                  </li>
                </ul>
              </div>
            </div>
            {/*<div className="lg:w-6/12 px-3 lg:pt-10">
              <p className="text-xl font-bold  text-center bg-gradient-to-r from-blue-400 via-blue-200 to-blue-400 py-4">
                <FormattedMessage id="booking" defaultMessage="Booking " />
              </p>
              <form className="px-3 mt-12" onSubmit={sendEmail}>
                <label>
                  <input
                    type="text"
                    placeholder=" Name "
                    name = "name" 
                    className="rounded border hover:border-blue-600  border-blue-900  w-11/12 px-5 mb-4 p-2 "
                  />
                </label>
                <br />
                <label>
                  <input
                    type="email"
                    placeholder=" Email "
                    name = "email"
                    name = "phone number"
                    className="rounded border hover:border-blue-600   border-blue-900 w-11/12 px-5 mb-4 p-2"
                  />
                </label>
                <br />
                <label>
                  <input
                    type="text"
                    placeholder=" Phone Number "
                    className="rounded border hover:border-blue-600  border-blue-900  w-11/12 px-5 mb-4 p-2"
                  />
                </label>
                <br />
             
                <button
                  className="rounded-full border-4 lg:px-16 px-6 py-2 font-bold
      text-sm bg-blue-400 border-blue-600 lg:w-3/4 w-11/12 mt-5  lg:ml-8 hover:bg-white"
                >
                  <b>
                    {" "}
                    <FormattedMessage id="bookmyplot" defaultMessage="BOOK MY PLOT" />
                  </b>
                </button>
                <br />
               
              </form>
        </div>*/}
          </div>
        </section>
        {/*<div className="lg:px-56 px-6 pb-10  text-gray-900 text-center">
            <p
              className="rounded-full  lg:px-20 lg:px-6 px-2    py-3 font-bold
       text-sm bg-green-400 border-green-600  hover:bg-green-900 hover:border-green-100  hover:text-white"
            >
          <p className="  text-lg  ">
              <a href="tel:04446276233" className="hover:text-green-100 ">
                {" "}
                📞   Toll Free&nbsp; @&nbsp; 0444-627-6233{" "}
              </a>
            </p>
            </p>
      </div>*/}
        <Footer />
      </IntlProvider>
    </>
  );
};

export default  withRouter(Booking);
