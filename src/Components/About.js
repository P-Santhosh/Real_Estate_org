import React from "react";
import Footer from "./Footer";
import Grpcmpy from "./Grpcmpy";
import { IntlProvider, FormattedMessage } from "react-intl";
const messagesInFrench = {
  founderHead: "FOUNDER OF THOGAI MURUGAN BUILDERS",
  founderGoal:
    "Achievements become routine if dreams are backed by the desire to reach them.",
  founderName: "Shri.Thogai Murugan ",
  founderPosition: "Founder, Thogai Murugan Builders",
  ceoName: "Mr.Santhose Murugan",
  ceoPosition: "MD, Thogai Murugan Builders",
  visionHead: "Our Vision & Values",
  vision:
    ' "Thogai Murugan Builders brings a host of capabilities to majorprojects through an integrated approach that spans the life cycle of infrastructure to professional & support services". Today, the company is a leader and a trendsetter in the constructionindustry, delivering custom-designed turnkey projects to governmentagencies, large corporations and private bodies.',
  visionOne:
    " 1 ) Ethical business practices to be a responsible corporate body by committing to enhance",
  visionTwo:
    "2 ) Collaborative and creative work environment to be a responsible corporate body by committing to enhance",
  visionThree:
    " 3 ) Caring culture towards employees and society to be a responsible corporate body by committing to enhance",
  visionFour:
    " 4 ) To be a responsible corporate body by committing to enhance to be a responsible corporate body by committing to enhance",
  visionFive:
    " 5 ) To provide a climate of transparency, mutuality and to be a responsible corporate body by committing to enhance",
  visionSix:
    " 6 ) To maximize stakeholder value through continuous adoption, to be a responsible corporate body by committing to enhance",
  managementHead: "THOGAI MURUGAN BUILDERS MANAGEMENTS",
  managementGoal:
    " Achievements become a routine if dreams are backed by the desir to reach them.",
  bnameOne: "Shri.Thogai Murugan",
  bpositionOne: "Founder",
  bnameTwo: "Santhose Murugan",
  bpositionTwo: " CHAIRMAN",
  bnameThree: "Santhose Murugan",
  bpositionThree: "MANAGING DIRECTOR",
  bnameFour: "Santhose Murugan",
  bpositionFour: "CEO",
  bnameFive: "Santhose Murugan",
  bpositionFive: "CTO",
  ourGroup: "OUR GROUP OF COMPANIES",
  aboutCont:
    "Thogai Murugan Builders is a Karur based real estate industry, which offers high quality real estate in karur and its surrounding districts. Our company was founded in 2004 and we have created path for many families dream home. Thogai Murugan Builders is one of the leading real estate industry in karur. We are constantly expanding our footprint with elevated lifestyle solutions in Karur and Namakkal. Our motive is to identify and develop properties in karur that inspire and combine customers into group of families with our high quality projects and its excellence. Our aim is to create an everlasting relationship with customer which built on trust, confidence and professionalism.",
};
const About = () => {
  return (
    <>
      <IntlProvider messages={messagesInFrench} defaultLocale="en">
        <div className="text-center pt-12 pb-12 lg:px-20 ">
          <h5 className="lg:text-2xl text-xl font-bold p-3  bg-gradient-to-r from-blue-400 via-blue-200 to-blue-400 ">
            <FormattedMessage
              id=" founderHead"
              defaultMessage=" FOUNDER OF THOGAI MURUGAN BUILDERS"
            />
          </h5>

          <p className="py-5 lg:px-0 px-3">
            <FormattedMessage
              id=" founderGoal"
              defaultMessage="Achievements become routine if dreams are backed by the desire to reach them."
            />
          </p>
          <hr />
          <div className="lg:flex lg:pt-16  py-10">
            <div className="lg:w-3/6  text-center ">
              <img
                alt="..."
                src="/img/founder.jpg"
                className="shadow-lg rounded-full  w-2/6 hover:shadow-2xl mx-auto"
              />
              <div className="pt-5" >
              <b >
                <FormattedMessage
                  id=" founderName"
                  defaultMessage="Shri.Thogai Murugan "
                />
              </b>
              <p className="font-medium">
                <FormattedMessage
                  id=" founderPosition"
                  defaultMessage="Founder, Thogai Murugan Builders"
                />
              </p>
              </div>
            </div>
            <div className="lg:w-3/6 text-center text-justify px-6  lg:mt-6 mt-6">
              <p className="font-semibold">
                <FormattedMessage
                  id=" aboutCont"
                  defaultMessage="Thogai Murugan Builders is a Karur based real estate industry, which offers high quality real estate in karur and its surrounding districts. Our company was founded in 2004 and we have created path for many families dream home. Thogai Murugan Builders is one of the leading real estate industry in karur. We are constantly expanding our footprint with elevated lifestyle solutions in Karur and Namakkal. Our motive is to identify and develop properties in karur that inspire and combine customers into group of families with our high quality projects and its excellence. Our aim is to create an everlasting relationship with customer which built on trust, confidence and professionalism."
                />
              </p>
              
            </div>
          </div>
        
          <div className="lg:flex lg:pt-16  py-10 bg-blue-100">
            <div className="lg:w-3/6  text-center ">
              <img
                alt="..."
                src="/img/ceo.jpg"
                className="shadow-lg rounded-full  w-2/6 hover:shadow-2xl mx-auto"
              />
               <div className="pt-5" >
              <b>
              <FormattedMessage
                  id=" ceoName"
                  defaultMessage="Mr.Santhose Murugan "
                />
              </b>
              <p className="font-medium">
              <FormattedMessage
                  id=" ceoPosition"
                  defaultMessage="MD, Thogai Murugan Builders"
                />
              </p>
              </div>
            </div>
            <div className="lg:w-3/6 text-center text-justify px-6  lg:mt-6 mt-3">
            <p className="font-semibold">
                <FormattedMessage
                  id=" aboutCont"
                  defaultMessage="Thogai Murugan Builders is a Karur based real estate industry, which offers high quality real estate in karur and its surrounding districts. Our company was founded in 2004 and we have created path for many families dream home. Thogai Murugan Builders is one of the leading real estate industry in karur. We are constantly expanding our footprint with elevated lifestyle solutions in Karur and Namakkal. Our motive is to identify and develop properties in karur that inspire and combine customers into group of families with our high quality projects and its excellence. Our aim is to create an everlasting relationship with customer which built on trust, confidence and professionalism."
                />
              </p>
            </div>
          </div>
        </div>
        <div className="text-justify pt-12 lg:w-full lg:px-40 md:pl-12 text-center  p-6">
          <b className="pb-2">
            <FormattedMessage
              id=" visionHead"
              defaultMessage="Our Vision & Values"
            />
          </b>
          <hr></hr>
          <p className="pt-3">
            <FormattedMessage
              id=" vision"
              defaultMessage='"Thogai Murugan Builders brings a host of capabilities to majorinfrastructure projects through an integrated approach that spans thelife cycle of infrastructure to professional & support services".
                Today, the company is a leader and a trendsetter in the construction industry, delivering custom-designed turnkey projects to government agencies, large corporations and private bodies.'
            />
          </p>
        </div>

        <div className="text-lg lg:pl-40 pb-12 px-6 ">
          <p>
            <FormattedMessage
              id=" visionOne"
              defaultMessage="  1 ) Ethical business practices to be a responsible corporate body by committing to enhance"
            />
          </p>
          <p>
            <FormattedMessage
              id=" visionTwo"
              defaultMessage="2 ) Collaborative and creative work environment to be a responsible corporate body by committing to enhance"
            />
          </p>
          <p>
            <FormattedMessage
              id=" visionThree"
              defaultMessage="3 ) Caring culture towards employees and society to be a responsible corporate body by committing to enhance"
            />
          </p>
          <p>
            <FormattedMessage
              id=" visionFour"
              defaultMessage=" 4 ) To be a responsible corporate body by committing to enhance to be a responsible corporate body by committing to enhance"
            />
          </p>
          <p>
            <FormattedMessage
              id=" visionFive"
              defaultMessage="  5 ) To provide a climate of transparency, mutuality and to be a responsible corporate body by committing to enhance"
            />
          </p>
          <p>
            <FormattedMessage
              id=" visionSix"
              defaultMessage="6 ) To maximize stakeholder value through continuous adoption, to be a responsible corporate body by committing to enhance"
            />
          </p>
        </div>
        <Grpcmpy></Grpcmpy>
        <Footer></Footer>
      </IntlProvider>
    </>
  );
};

export default About;
