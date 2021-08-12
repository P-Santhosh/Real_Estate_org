import React from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { IntlProvider, FormattedMessage } from "react-intl";
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

const Delete = () => {
  return (
    <>
      <IntlProvider messages={messagesInFrench} defaultLocale="en">
          {/*<section>
          <div className="text-center pt-12 lg:pb-12 lg:px-20 px-3">
            <h5 className="text-xl font-bold">
              <FormattedMessage
                id=" founderHead"
                defaultMessage=" FOUNDER OF THOGAI MURUGAN BUILDERS"
              />
            </h5>
            <p className="pt-4">
              <FormattedMessage
                id=" founderGoal"
                defaultMessage="Achievements become routine if dreams are backed by the desire to reach them."
              />
            </p>
            <hr></hr>
            <div className="lg:flex lg:pt-8 ">
              <div className="lg:w-2/4 ">
                <div className=" lg:pl-48 lg:px-1 px-16 lg:pt-6">
                  <img
                    alt="..."
                    className="align-middle border-none max-w-full h-auto rounded-lg"
                    src="/img/banner.jpg"
                  />
                </div>
                <b>
                  <FormattedMessage
                    id=" founderName"
                    defaultMessage="Shri.Thogai Murugan "
                  />
                </b>
                <p>
                  <FormattedMessage
                    id=" founderPosition"
                    defaultMessage="Founder, Thogai Murugan Builders"
                  />
                </p>
              </div>
              <div className="text-justify pt-12 lg:w-2/4 md:pl-12 lg:pr-48 p-6 ">
                <b>
                  <FormattedMessage
                    id=" visionHead"
                    defaultMessage="Our Vision & Values"
                  />
                </b>
                <hr></hr>
                <p>
                  <FormattedMessage
                    id=" vision"
                    defaultMessage='"Thogai Murugan Builders brings a host of capabilities to majorinfrastructure projects through an integrated approach that spans thelife cycle of infrastructure to professional & support services".
                Today, the company is a leader and a trendsetter in the construction industry, delivering custom-designed turnkey projects to government agencies, large corporations and private bodies.'
                  />
                </p>
                <div className=" py-6  ">
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
            </div>
          </div>
       </section>*/}
        {/*  <div className="text-center lg:pt-12 lg:pb-12 lg:px-20 ">
          <h5 className="text-xl font-bold   bg-gradient-to-r from-blue-400 via-blue-200 to-blue-400 py-4">
            <FormattedMessage
              id=" projectsHead"
              defaultMessage="THOGAI MURUGAN BUILDERS PRESENTS THE THOGAI MURUGAN AVENUES"
            />
          </h5>
        </div>
        <section>
          <div className="lg:flex lg:py-12 ">
            <div className="lg:w-2/4 ">
              <div className=" lg:pl-56">
                <img
                  alt="..."
                  className="align-middle border-none max-w-full h-auto  hover:shadow-2xl"
                  src="/img/one.jpg"
                />
              </div>
            </div>
            <div className="text-justify pt-12 lg:w-2/4 md:pl-12 lg:pr-48 p-6">
              <b>
                <FormattedMessage
                  id=" projectsOngoing"
                  defaultMessage="OUR ONGOING PROJECTS"
                />
              </b>

              <hr></hr>
              <p>
                <FormattedMessage
                  id=" projectsOngoingdesc"
                  defaultMessage='"Thogai Murugan Builders brings a host of capabilities to major
               infrastructure projects through an integrated approach that spans
               the life cycle of infrastructure to professional & support
               services". Today, the company is a leader and a trendsetter in the
               construction industry, delivering custom-designed turnkey projects
               to government agencies, large corporations and private bodies.'
                />
              </p>
              <div className=" py-6   ">
                <Link
                  to="/projects"
                  className="bg-indigo-200 border-b-4 border-t-4 border-indigo-800
                  px-20   py-1"
                >
                  <FormattedMessage id=" viewAll" defaultMessage="View All ➜" />
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="lg:flex lg:py-6 lg:pb-16">
            <div className="lg:w-2/4 ">
              <div className="text-justify lg:pl-56 lg:pt-16 lg:px-0 px-6">
                <b>
                  <FormattedMessage
                    id=" projectsCompleted"
                    defaultMessage="OUR COMPLETED PROJECTS"
                  />
                </b>
                <hr></hr>
                <p>
                  <FormattedMessage
                    id=" projectsCompleteddesc"
                    defaultMessage='"Thogai Murugan Builders brings a host of capabilities to major
               infrastructure projects through an integrated approach that spans
               the life cycle of infrastructure to professional & support
               services". Today, the company is a leader and a trendsetter in the
               construction industry, delivering custom-designed turnkey projects
               to government agencies, large corporations and private bodies.'
                  />
                </p>
                <div className=" py-6  ">
                  <Link
                    to="/projects"
                    className="bg-indigo-200 border-b-4 border-t-4 border-indigo-800
                   px-20  py-1 "
                  >
                    <FormattedMessage
                      id=" viewAll"
                      defaultMessage="View All ➜"
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="text-justify pt-6 lg:w-2/4 md:pl-12 lg:pr-48 p-6">
              <img
                alt="..."
                className="align-middle border-none max-w-full h-auto hover:shadow-2xl"
                src="/img/demo1.jpg"
              />
            </div>
          </div>
      </section>*/}
        {/*<section className="lg:pt-16 lg:pb-12 lg:px-20">
          <div className="text-center">
            <h5 className="text-xl font-bold pb-2 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200  py-4">
              <FormattedMessage
                id=" managementHead"
                defaultMessage="THOGAI MURUGAN BUILDERS MANAGEMENTS"
              />
            </h5>
            <p className="pt-6">
              <FormattedMessage
                id=" managementGoal"
                defaultMessage="Achievements become a routine if dreams are backed by the desire to reach them."
              />
            </p>
            <hr></hr>
          </div>
          <div className="lg:flex mt-12">
            <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
              <div className="px-6">
                <img
                  alt="..."
                  src="/img/ceo.jpg"
                  className="shadow-lg rounded-full mx-auto w-3/4 hover:shadow-2xl"
                />
                <div className="pt-6 text-center">
                  <h5 className=" font-bold">
                    <FormattedMessage
                      id="bnameOne"
                      defaultMessage="Shri.Thogai Murugan "
                    />
                  </h5>
                  <p className="mt-1  text-blueGray-400 uppercase font-semibold">
                    <FormattedMessage
                      id="bpositionOne"
                      defaultMessage=" Founder "
                    />
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
              <div className="px-6">
                <img
                  alt="..."
                  src="/img/ceo.jpg"
                  className="shadow-lg rounded-full mx-auto w-3/4 hover:shadow-2xl"
                />
                <div className="pt-6 text-center">
                  <h5 className=" font-bold">
                    <FormattedMessage
                      id="bnameTwo"
                      defaultMessage="Santhose Murugan "
                    />
                  </h5>
                  <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                    <FormattedMessage
                      id="bpositionTwo"
                      defaultMessage="CHAIRMAN "
                    />
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
              <div className="px-6">
                <img
                  alt="..."
                  src="/img/ceo.jpg"
                  className="shadow-lg rounded-full mx-auto w-3/4 hover:shadow-2xl"
                />
                <div className="pt-6 text-center">
                  <h5 className=" font-bold">
                    <FormattedMessage
                      id="bnameThree"
                      defaultMessage="Santhose Murugan "
                    />
                  </h5>
                  <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                    <FormattedMessage
                      id="bpositionThree"
                      defaultMessage="MANAGING DIRECTOR "
                    />
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
              <div className="px-6">
                <img
                  alt="..."
                  src="/img/ceo.jpg"
                  className="shadow-lg rounded-full mx-auto w-3/4 hover:shadow-2xl"
                />
                <div className="pt-6 text-center">
                  <h5 className=" font-bold">
                    <FormattedMessage
                      id="bnameFour"
                      defaultMessage="Santhose Murugan "
                    />
                  </h5>
                  <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                    <FormattedMessage id="bpositionFour" defaultMessage="CEO" />
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
              <div className="px-6">
                <img
                  alt="..."
                  src="/img/ceo.jpg"
                  className="shadow-lg rounded-full mx-auto w-3/4 hover:shadow-2xl"
                />
                <div className="pt-6 text-center">
                  <h5 className=" font-bold">
                    <FormattedMessage
                      id="bnameFive"
                      defaultMessage="Santhose Murugan "
                    />
                  </h5>
                  <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                    <FormattedMessage id="bpositionFive" defaultMessage="CTO" />
                  </p>
                </div>
              </div>
            </div>
          </div>
    </section>*/}
      </IntlProvider>
    </>
  );
};

export default Delete;
