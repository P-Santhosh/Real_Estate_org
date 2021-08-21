import React from "react";
import { Link } from "react-router-dom";
import { IntlProvider, FormattedMessage } from "react-intl";
import Bannerhome from "./Bannerhome";
import BannerCsr from "./BannerCsr";
import Connect from "./Connect";
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
    "Founded in 2004 by the visionary entrepreneur Mr.Thogai Murugan, Thogai Murugan Builders is an eminent real estate conglomerate and one of the leading builders in Karur and around districts of karur. We are constantly expanding our footprint with innovative facades, exquisite dwellings and elevated lifestyle solutions in our Thogai Murugan Avenues at karur and around districts of karur. And our clientele spans thousands of happy residents and families in this beloved city.",
  ourProjects: "Our Projects",
  clickHere: "CLICK HERE TO EXPLORE OUR PROJECTS",
  csr: "CSR",
};
const Content = () => {
  return (
    <>
      <IntlProvider messages={messagesInFrench} defaultLocale="en">
        <section>
          <div className="bg-gray-200 text-gray-700 lg:py-16 px-12 lg:py-12 py-6">
            <p className="text-center text-4xl font-semibold text-gray-800">
              <FormattedMessage id="about" defaultMessage="About Us" />
            </p>
            <div className="lg:flex lg:pt-16  py-6">
              <div className="lg:w-2/6  text-center ">
                <img
                  alt="..."
                  src="/img/founder.jpg"
                  className="shadow-lg rounded-full  w-3/6 hover:shadow-2xl mx-auto"
                />
                 <div className="pt-5" >
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
              <div className="lg:w-2/6 text-center text-justify lg:px-6 px-3 lg:mt-1 mt-6">
                <p className="font-semibold">
                  <FormattedMessage
                    id=" aboutContent"
                    defaultMessage="Founded in 2004 by the visionary entrepreneur Mr.Thogai Murugan, Thogai Murugan Builders is an eminent real estate conglomerate and one of the leading builders in Karur and around districts of karur. We are constantly expanding our footprint with innovative facades, exquisite dwellings and elevated lifestyle solutions in our Thogai Murugan Avenues at karur and around districts of karur. And our clientele spans thousands of happy residents and families in this beloved city."
                  />
                </p>
                <div className=" py-6  text-gray-900">
                  <Link
                    to="/about"
                    className="rounded-full border-4 px-20   py-2 font-bold
      text-sm bg-blue-400 border-blue-600   "
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
                  className="shadow-lg rounded-full  w-3/6 hover:shadow-2xl mx-auto"
                />
                 <div className="pt-5" >
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
              className="rounded-full border-4 lg:px-20 px-5    py-3 font-semibold
      text-lg bg-blue-400 border-blue-600   "
            >
              <FormattedMessage
                id="clickHere"
                defaultMessage="CLICK HERE TO EXPLORE OUR PROJECTS"
              />
            </Link>
          </div>
        </section>

        <section>
          <div className="text-center lg:px-20 mt-10">
            <h5 className="lg:text-3xl text-2xl font-semibold pb-2  bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200 py-3">
              <FormattedMessage id="csr" defaultMessage="CSR" />
            </h5>
          </div>
          <div className="py-12">
            <BannerCsr></BannerCsr>
          </div>
        </section>
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
       <Connect></Connect>
      </IntlProvider>
    </>
  );
};

export default Content;
