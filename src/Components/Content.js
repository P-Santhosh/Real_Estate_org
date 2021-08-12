import React from "react";
import { Link } from "react-router-dom";
import { IntlProvider, FormattedMessage } from "react-intl";
import Bannerhome from "./Bannerhome";
import Banner from "./Banner";
import BannerCsr from "./BannerCsr";
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
  readMore: " Read More",
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
  submit: "Submit",
  name: "Thogai Murugan Builders",
  addressOne: "18, Kadai Veedhi, ",
  addressTwo: " Sempadapalayam, Karur",
  addressThree: "Tamil Nadu 639001",
  contactOne: "94426-93171",
  contactTwo: "97890-63333",
  about: "About Us",
  aboutContent:
    "Founded in 2004 by the visionary entrepreneur Mr.Thogai Murugan, Thogai Murugan Builders is an eminent real estate conglomerate and one of the leading builders in Karur and around districts of karur. We are constantly expanding our footprint with innovative facades, exquisite dwellings and elevated lifestyle solutions in our Thogai Murugan Avenues at karur and around districts of karur. And our clientele spans thousands of happy residents and families in this beloved city.",
    ourProjects:"Our Projects",
    clickHere:"click here to explore our projects",
    csr:"CSR",
};
const Content = () => {
  return (
    <>
      <IntlProvider messages={messagesInFrench} defaultLocale="en">
        <section>
          <div className="bg-gray-200 text-gray-700 lg:py-16 px-12 py-12">
            <p className="text-center text-4xl font-semibold text-gray-800">
              <FormattedMessage id="about" defaultMessage="About Us" />
            </p>
            <div className="lg:flex lg:pt-16  py-10">
              <div className="lg:w-2/6  text-center ">
                <img
                  alt="..."
                  src="/img/ceo.jpg"
                  className="shadow-lg rounded-full  w-3/6 hover:shadow-2xl mx-auto"
                />
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
                      defaultMessage="Read More"
                    />
                  </Link>
                </div>
              </div>
              <div className="lg:w-2/6 text-center ">
                <img
                  alt="..."
                  src="/img/ceo.jpg"
                  className="shadow-lg rounded-full  w-3/6 hover:shadow-2xl mx-auto"
                />
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
        </section>
    
       <section>
       <div className="text-center py-3 lg:px-20 ">
          <h5 className="text-3xl font-semibold   bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200 py-3">
            <FormattedMessage
              id="ourProjects"
              defaultMessage="Our Projects"
            />
          </h5>
        </div>
        <Bannerhome ></Bannerhome>
        <div className=" py-6  text-gray-900 text-center">
                  <Link
                    to="/projects"
                    className="rounded-full border-4 lg:px-20 px-5    py-3 font-semibold
      text-lg bg-blue-400 border-blue-600   "
                  >
                    <FormattedMessage
                      id="clickHere"
                      defaultMessage="click here to explore our projects"
                    />
                  </Link>
                </div>
       </section>
     
    <section>
    <div className="text-center lg:px-20 mt-10">
            <h5 className="lg:text-3xl text-2xl font-semibold pb-2  bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200 py-3">
              <FormattedMessage
                id="csr"
                defaultMessage="CSR"
              />
            </h5>
          </div>
          <div className="py-12">
          <BannerCsr ></BannerCsr>
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
                <a href="https://karurtech.com/" target="blank">
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
        <div className="text-center lg:pt-12 pt-1 pb-3 lg:px-20 ">
          <h5 className="text-3xl font-semibold   bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200 py-3">
            <FormattedMessage id="contactUs" defaultMessage="CONTACT US" />
          </h5>
        </div>
        <section>
          <div className="lg:flex lg:py-12 lg:pb-24 pb-12 ">
            <div className="lg:w-2/4 ">
              <div className=" lg:pl-56 pl-8">
                <form>
                  <label>
                    <input
                      type="text"
                      placeholder=" Name *"
                      className="rounded border hover:border-blue-600 mt-5 lg:px-28 px-16 py-3"
                    />
                  </label>
                  <br />
                  <label>
                    <input
                      type="email"
                      placeholder="Email "
                      className="rounded border hover:border-blue-600 mt-5 lg:px-28 px-16 py-3"
                    />
                  </label>
                  <br />
                  <label>
                    <input
                      type="text"
                      placeholder=" Phone Number *"
                      className="rounded border hover:border-blue-600 mt-5 lg:px-28 px-16 py-3"
                    />
                  </label>
                  <br />
                  <label>
                    <textarea
                      class=" rounded form-textarea border hover:border-blue-600 lg:px-28 px-16 py-3 mt-5 block w-3/4"
                      rows="4"
                      placeholder="Message"
                    ></textarea>
                  </label>
                  <button
                    className="rounded-full border-4 px-16 py-2 font-semibold
      text-md bg-blue-400 border-blue-600 w-3/4 mt-5"
                  >
                    <b>
                      <FormattedMessage id="submit" defaultMessage="Submit" />
                    </b>
                  </button>
                  <br />
                </form>
              </div>
            </div>
            <div className="lg:text-justify text-left lg:pt-2 pt-8 lg:w-2/4  lg:pr-56 ">
              <img
                alt="..."
                src="/img/banner.jpg"
                className="shadow-lg  mx-auto w-2/4 hover:shadow-2xl"
              />
              <div className="lg:pl-32  px-12 lg:pt-6  pt-5">
                <b className="text-xl ">
                  <FormattedMessage
                    id="name"
                    defaultMessage="Thogai Murugan Builders"
                  />
                </b>
                <div className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                  <p className="mb-2">
                    <FormattedMessage
                      id="addressOne"
                      defaultMessage="18, Kadai Veedhi,"
                    />
                  </p>
                </div>
                <p className="mb-2">
                  <FormattedMessage
                    id="addressTwo"
                    defaultMessage="Sempadapalayam, Karur "
                  />
                </p>
                <p className="mb-2">
                  <FormattedMessage
                    id="addressThree"
                    defaultMessage="Tamil Nadu 639001 "
                  />
                </p>
                <div className="flex">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <p className="mb-2">
                    <FormattedMessage
                      id="contactOne"
                      defaultMessage="94426-93171 "
                    />
                  </p>
                  <p className="mb-2">
                    <FormattedMessage
                      id="contactTwo"
                      defaultMessage="97890-63333 "
                    />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </IntlProvider>
    </>
  );
};

export default Content;
