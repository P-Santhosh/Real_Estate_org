import React from "react";
import { Link } from "react-router-dom";
import { IntlProvider, FormattedMessage } from "react-intl";
import Bannerhome from "./Bannerhome";
import Connect from "./Connect";
import Grpcmpy from "./Grpcmpy";
const messagesInFrench = {
  founderHead: "FOUNDER OF THOGAI MURUGAN BUILDERS",
  founderGoal:
    "Achievements become routine if dreams are backed by the desire to reach them.",
  founderName: "Shri.Thogai Murugan ",
  founderPosition: "Founder, Thogai Murugan Builders",
  mdName: "Mr.Santhose Murugan",
  mdPosition: "MD, Thogai Murugan Builders",
  visionHead: "Our Vision & Values",
  vision:
    ' "Thogai Murugan Builders brings a host of capabilities to majorprojects through an integrated approach that spans the life cycle of infrastructure to professional & support services". Today, the company is a leader and a trendsetter in the constructionindustry, delivering custom-designed turnkey projects to governmentagencies, large corporations and private bodies.',
  readMore: " READ MORE",
  projectsHead: "THOGAI MURUGAN BUILDERS PRESENTS THE THOGAI MURUGAN AVENUES",
  projectsOngoing: "OUR ONGOING PROJECTS",
  projectsOngoingdesc:
    ' "Thogai Murugan Builders brings a host of capabilities to major infrastructure projects through an integrated approach that spans the life cycle of infrastructure to professional & support services". Today, the company is a leader and a trendsetter in the construction industry, delivering custom-designed turnkey projects to government agencies, large corporations and private bodies.',
  viewAll: " View All ➜",
  projectsCompleted: "OUR COMPLETED PROJECTS",
  projectsCompleteddesc:
    ' "Thogai Murugan Builders brings a host of capabilities to major infrastructure projects through an integrated approach that spans the life cycle of infrastructure to professional & support services". Today, the company is a leader and a trendsetter in the construction industry, delivering custom-designed turnkey projects to government agencies, large corporations and private bodies.',
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
  contactUs: "CONTACT US",
  submit: "SUBMIT",
  name: "Thogai Murugan Builders",
  addressOne: "18, Kadai Veedhi, ",
  addressTwo: " Sempadapalayam, Karur",
  addressThree: "Tamil Nadu 639001",
  contactOne: "94426-93171",
  contactTwo: "97890-63333",
  about: "About Us",
  aboutContent:
    "Thogai Murugan Builders is a Karur based real estate industry, which offers high quality real estate in karur and its surrounding districts. Our company was founded in 2004 and we have created path for many families dream home. Thogai Murugan Builders is one of the leading real estate industry in karur. We are constantly expanding our footprint with elevated lifestyle solutions in Karur and Namakkal. Our motive is to identify and develop properties in karur that inspire and combine customers into group of families with our high quality projects and its excellence. Our aim is to create an everlasting relationship with customer which built on trust, confidence and professionalism.",
  ourProjects: "Our Projects",
  clickHere: "CLICK HERE TO EXPLORE PROJECTS",
  csr: "CSR",
};
const Content = () => {
  return (
    <>
      <IntlProvider messages={messagesInFrench} defaultLocale="en">
        <section>
          <div className="bg-gray-200 text-gray-700 lg:py-16 lg:px-12 px-5 lg:py-12 py-6">
            <p className="text-center text-4xl font-semibold text-gray-800">
              <FormattedMessage id="about" defaultMessage="About Us" />
            </p>
            <div className="lg:flex lg:pt-16  py-6">
              <div className="lg:w-2/6  text-center ">
                <img
                  alt="..."
                  src="/img/founder.jpg"
                  className=" rounded-full  w-3/6 shadow-2xl mx-auto"
                />
                <div className="pt-5">
                  <b>
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
              <div className="lg:w-2/6 text-center text-justify lg:px-2 px-1 lg:mt-1 mt-6">
                <p className="font-semibold">
                  <FormattedMessage
                    id=" aboutContent"
                    defaultMessage="Thogai Murugan Builders is a Karur based real estate industry, which offers high quality real estate in karur and its surrounding districts.
                    Our company was founded in 2004 and we have created path for many families dream home. Thogai Murugan Builders is one of the leading real estate industry in karur. We are constantly expanding our footprint with elevated lifestyle solutions in Karur and Namakkal.
                    Our motive is to identify and develop properties in karur that inspire and combine customers into group of families with our high quality projects and its excellence. Our aim is to create an everlasting relationship with customer which built on trust, confidence and professionalism."
                  />
                </p>
                <div className=" py-6  text-gray-900 lg:text-left  text-center">
                  <Link
                    to="/about"
                    className="rounded-full border-4 px-20  py-2 font-bold
      text-sm bg-blue-400 border-blue-600 hover:bg-white  "
                  >
                    <FormattedMessage
                      id=" readMore"
                      defaultMessage="READ MORE"
                    />
                  </Link>
                </div>
              </div>
              <div className="lg:w-2/6 text-center lg:pt-0 pt-5">
                <img
                  alt="..."
                  src="/img/ceo.jpg"
                  className=" rounded-full  w-3/6 shadow-2xl mx-auto"
                />
                <div className="pt-5">
                  <b>
                    <FormattedMessage
                      id=" mdName"
                      defaultMessage="Mr.Santhose Murugan "
                    />
                  </b>
                  <p className="font-medium">
                    <FormattedMessage
                      id=" mdPosition"
                      defaultMessage="MD, Thogai Murugan Builders"
                    />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="text-center lg:pt-10 py-3 lg:px-20 ">
            <h5 className="text-3xl font-semibold   bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200 py-3">
              <FormattedMessage
                id="ourProjects"
                defaultMessage="Our Projects"
              />
            </h5>
          </div>
          <Bannerhome></Bannerhome>
          <div className=" py-6  text-gray-900 text-center">
            <Link
              to="/projects"
              className="rounded-full border-4 lg:px-20 px-6    py-3 font-bold
       text-sm bg-blue-400 border-blue-600  hover:bg-white "
            >
              <FormattedMessage
                id="clickHere"
                defaultMessage="CLICK HERE To EXPLORE PROJECTS"
              />
            </Link>
          </div>
        </section>

        {/* <section>
          <div className="text-center lg:px-20 mt-10">
            <h5 className="lg:text-3xl text-2xl font-semibold pb-2  bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200 py-3">
              <FormattedMessage id="csr" defaultMessage="CSR" />
            </h5>
          </div>
          <div className="py-12">
            <BannerCsr></BannerCsr>
          </div>
       </section>*/}
        <Grpcmpy></Grpcmpy>
        <Connect></Connect>
      </IntlProvider>
    </>
  );
};

export default Content;
