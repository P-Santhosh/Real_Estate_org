import { React, useEffect } from "react";
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
  ourProjects: "Our Projects",
  clickHere: "click here to explore our projects",
  csr: "CSR",
};

const Delete = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
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
        {/*<div className="lg:flex ">
            <div className="lg:w-2/4 ">
              <div className="  lg:px-1 px-12 py-6">
              <img
                  alt="..."
                  src="/img/ceo.jpg"
                  className="shadow-lg rounded-full mx-auto w-2/6 hover:shadow-2xl"
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
            <div className="lg:w-2/4 ">
              <div className="  lg:px-1 px-12 py-6">
              <img
                  alt="..."
                  src="/img/ceo.jpg"
                  className="shadow-lg rounded-full mx-auto w-2/6 hover:shadow-2xl"
                />
              </div>
              <b>
                <FormattedMessage
                  id=" ceoName"
                  defaultMessage="Mr.Santhose Murugan "
                />
              </b>
              <p>
                <FormattedMessage
                  id=" ceoPosition"
                  defaultMessage="MD, Thogai Murugan Builders"
                />
              </p>
            </div>
  </div>*/}
      </IntlProvider>
    </>
  );
};

export default Delete;
/* projects older*/
/*
import React from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { IntlProvider, FormattedMessage } from "react-intl";

const messagesInFrench = {
  name: "Thogai Murugan Builders",
  avenuesHead: "THOGAI MURUGAN BUILDERS PRESENTS THE THOGAI MURUGAN AVENUES",
  ongoingProjects: " ONGOING PROJECTS",
  viewDetails: " VIEW DETAILS ➜",
  siteSemone: "Sempadapalayam, Punjai Pugalur",
  siteSemtwo: "Karur",
  siteArthone: " Arthanaripalayam, Paramathi Velur",
  siteArthtwo: "  Namakkal",
  sitePattsone: " Pattasukadai, Paramathi Velur",
  sitePatttswo: " Namakkal",
  siteMunnurone: " Munnur, Karur Paramathi",
  siteMunnurtwo: " Karur",
  siteNanaparappuone: " Nanaparappu, Punjai Pugalur",
  siteNanaparapputwo: " Karur",
  siteAravaione: " Aravakurichi",
  siteAravaitwo: "Karur",
  completedProjects: "COMPLETED PROJECTS",
  completedOne: " Sempadapalayam,Karur",
  completedTwo: " Paramathi,Karur",
};
const Projects = () => {
  return (
    <>
      <IntlProvider messages={messagesInFrench} defaultLocale="en">
        <div>
          <div className="text-center pt-6 lg:pb-12 pb-3 lg:px-20 ">
            <h5 className="text-xl font-bold   bg-gradient-to-r from-blue-400 via-blue-200 to-blue-400 py-4">
              <FormattedMessage
                id="avenuesHead"
                defaultMessage="THOGAI MURUGAN BUILDERS PRESENTS THE THOGAI MURUGAN AVENUES "
              />
            </h5>
            <div className="text-xl p-5   ">
              <b>
                <FormattedMessage
                  id="ongoingProjects"
                  defaultMessage="ONGOING PROJECTS "
                />
              </b>
            </div>
            <hr></hr>
          </div>
          <section>
            <div className="lg:flex lg:px-12 px-6 lg:py-12 py-6">
              <div className="lg:w-3/6 lg:px-12 lg:py-1 py-5  transform hover:scale-110">
                <div className="bg-blue-100 hover:bg-blue-600 hover:text-white text-blue-900 hover:shadow-2xl py-10 text-center">
                  <Link to="/sembadapalayam">
                    <p className="pt-5 font-bold text-center text-3xl underline  ">
                      THOGAI MURUGAN AVENUES
                    </p>
                    <Link to="/sembadapalayam">
                      <img
                        alt="..."
                        className="align-middle border-none px-12 py-5   "
                        src="/img/bthree.jpg"
                      />
                    </Link>
                    <p className=" pt-1 font-bold text-center text-xl ">
                      Avenue Number
                      &nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp; 1
                    </p>

                    <p className="pt-3 font-bold text-center text-xl">
                      <FormattedMessage
                        id="siteSemone"
                        defaultMessage="Sempadapalayam, Punjai Pugalur "
                      />
                    </p>
                    <p className="pt-3 font-bold text-center text-xl ">
                      <FormattedMessage
                        id="siteSemtwo"
                        defaultMessage="Karur "
                      />
                    </p>
                  </Link>
                </div>
                <div className="lg:mt-12 mt-10 text-center">
                  <Link
                    to="/sembadapalayam"
                    className="bg-indigo-200 border-b-4 border-t-4 border-indigo-800
                  px-6 py-1 hover:bg-blue-900  hover:border-blue-100 hover:text-white  "
                  >
                    <FormattedMessage
                      id="viewDetails"
                      defaultMessage="VIEW DETAILS ➜ "
                    />
                  </Link>
                </div>
              </div>
              <div className="lg:w-3/6 lg:px-12 lg:py-1 py-5 lg:pt-0 pt-12 transform hover:scale-110">
                <div className="bg-blue-100 hover:bg-blue-600 hover:text-white text-blue-900 hover:shadow-2xl py-10 text-center">
                  <Link to="/arthanaripalayam">
                    <p className="pt-5 font-bold text-center text-3xl underline  ">
                      THOGAI MURUGAN AVENUES
                    </p>
                    <Link to="/arthanaripalayam">
                      <img
                        alt="..."
                        className="align-middle border-none px-12 py-5   "
                        src="/img/bone.jpg"
                      />
                    </Link>
                    <p className="pt-1  font-bold text-center text-xl ">
                      Avenue Number
                      &nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp; 2
                    </p>

                    <p className="pt-3 font-bold text-center text-xl">
                      <FormattedMessage
                        id="siteArthone"
                        defaultMessage=" Arthanaripalayam, Paramathi Velur "
                      />
                    </p>
                    <p className="lg:pt-3 font-bold text-center text-xl ">
                      <FormattedMessage
                        id="siteArthtwo"
                        defaultMessage="Namakkal "
                      />
                    </p>
                  </Link>
                </div>
                <div className="lg:mt-12 mt-10 text-center">
                  <Link
                    to="/arthanaripalayam"
                    className="bg-indigo-200 border-b-4 border-t-4 border-indigo-800
                  px-6 py-1 hover:bg-blue-900  hover:border-blue-100 hover:text-white  "
                  >
                    <FormattedMessage
                      id="viewDetails"
                      defaultMessage="VIEW DETAILS ➜ "
                    />
                  </Link>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="lg:flex lg:px-12 px-6 lg:py-12 py-6">
              <div className="lg:w-3/6 lg:px-12 lg:py-1 py-5  transform hover:scale-110">
                <div className="bg-blue-100 hover:bg-blue-600 hover:text-white text-blue-900 hover:shadow-2xl py-10 text-center">
                  <Link to="/pattasukadi">
                    <p className="pt-5 font-bold text-center text-3xl underline  ">
                      THOGAI MURUGAN AVENUES
                    </p>
                    <Link to="/pattasukadi">
                      <img
                        alt="..."
                        className="align-middle border-none px-12 py-5   "
                        src="/img/demo.jpg"
                      />
                    </Link>
                    <p className=" pt-1 font-bold text-center text-xl ">
                      Avenue Number
                      &nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp; 3
                    </p>

                    <p className="pt-3 font-bold text-center text-xl">
                      <FormattedMessage
                        id="sitePattsone"
                        defaultMessage=" Pattasukadai, Paramathi Velur "
                      />
                    </p>
                    <p className="lg:pt-3 font-bold text-center text-xl ">
                      <FormattedMessage
                        id="sitePattstwo"
                        defaultMessage="Namakkal "
                      />
                    </p>
                  </Link>
                </div>
                <div className="lg:mt-12 mt-10 text-center">
                  <Link
                    to="/pattasukadi"
                    className="bg-indigo-200 border-b-4 border-t-4 border-indigo-800
                  px-6 py-1 hover:bg-blue-900  hover:border-blue-100 hover:text-white  "
                  >
                    <FormattedMessage
                      id="viewDetails"
                      defaultMessage="VIEW DETAILS ➜ "
                    />
                  </Link>
                </div>
              </div>
              <div className="lg:w-3/6 lg:px-12 lg:py-1 py-5 lg:pt-0 pt-12 transform hover:scale-110">
                <div className="bg-blue-100 hover:bg-blue-600 hover:text-white text-blue-900 hover:shadow-2xl py-10 text-center">
                  <Link to="/munnur">
                    <p className="pt-1 font-bold text-center text-3xl underline  ">
                      THOGAI MURUGAN AVENUES
                    </p>
                    <Link to="/munnur">
                      <img
                        alt="..."
                        className="align-middle border-none px-12 py-5   "
                        src="/img/demo2.jpg"
                      />
                    </Link>
                    <p className=" pt-1 font-bold text-center text-xl ">
                      Avenue Number
                      &nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp; 4
                    </p>

                    <p className="pt-3 font-bold text-center text-xl">
                      <FormattedMessage
                        id="siteMunnurone"
                        defaultMessage=" Munnur, Karur Paramathi "
                      />
                    </p>
                    <p className="pt-3 font-bold text-center text-xl ">
                      <FormattedMessage
                        id="siteMunnurtwo"
                        defaultMessage="Karur"
                      />
                    </p>
                  </Link>
                </div>
                <div className="lg:mt-12 mt-10 text-center">
                  <Link
                    to="/munnur"
                    className="bg-indigo-200 border-b-4 border-t-4 border-indigo-800
                  px-6 py-1 hover:bg-blue-900  hover:border-blue-100 hover:text-white  "
                  >
                    <FormattedMessage
                      id="viewDetails"
                      defaultMessage="VIEW DETAILS ➜ "
                    />
                  </Link>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="lg:flex lg:px-12 px-6 lg:py-12 py-6">
              <div className="lg:w-3/6 lg:px-12 lg:py-1 py-5  transform hover:scale-110">
                <div className="bg-blue-100 hover:bg-blue-600 hover:text-white text-blue-900 hover:shadow-2xl py-10 text-center">
                  <Link to="/nanaparappu">
                    <p className="pt-5 font-bold text-center text-3xl underline  ">
                      THOGAI MURUGAN AVENUES
                    </p>
                    <Link to="/nanaparappu">
                      <img
                        alt="..."
                        className="align-middle border-none px-12 py-5   "
                        src="/img/a1.jpg"
                      />
                    </Link>
                    <p className=" pt-1 font-bold text-center text-xl ">
                      Avenue Number
                      &nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp; 5
                    </p>

                    <p className="pt-3 font-bold text-center text-xl">
                      <FormattedMessage
                        id="siteNanaparappuone"
                        defaultMessage="  Nanaparappu, Punjai Pugalur "
                      />
                    </p>
                    <p className="pt-3 font-bold text-center text-xl ">
                      <FormattedMessage
                        id="siteNanaparapputwo"
                        defaultMessage="Karur"
                      />
                    </p>
                  </Link>
                </div>
                <div className="lg:mt-12 mt-10 text-center">
                  <Link
                    to="/nanaparappu"
                    className="bg-indigo-200 border-b-4 border-t-4 border-indigo-800
                  px-6 py-1 hover:bg-blue-900  hover:border-blue-100 hover:text-white  "
                  >
                    <FormattedMessage
                      id="viewDetails"
                      defaultMessage="VIEW DETAILS ➜ "
                    />
                  </Link>
                </div>
              </div>
              <div className="lg:w-3/6 lg:px-12 lg:py-1 py-5 lg:pt-0 pt-12 transform hover:scale-110">
                <div className="bg-blue-100 hover:bg-blue-600 hover:text-white text-blue-900 hover:shadow-2xl py-10 text-center">
                  <Link to="/aravakurichi">
                    <p className="pt-5 font-bold text-center text-3xl underline  ">
                      THOGAI MURUGAN AVENUES
                    </p>
                    <Link to="/aravakurichi">
                      <img
                        alt="..."
                        className="align-middle border-none px-12 py-5   "
                        src="/img/a2.jpg"
                      />
                    </Link>
                    <p className="pt-1 font-bold text-center text-xl ">
                      Avenue Number
                      &nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp; 6
                    </p>

                    <p className="pt-3 font-bold text-center text-xl">
                      <FormattedMessage
                        id="siteAravaione"
                        defaultMessage="   Aravakurichi"
                      />
                    </p>
                    <p className="pt-3 font-bold text-center text-xl ">
                      <FormattedMessage
                        id="siteAravaitwo"
                        defaultMessage="  Karur"
                      />
                    </p>
                  </Link>
                </div>
                <div className="lg:mt-12 mt-10 text-center">
                  <Link
                    to="/aravakurichi"
                    className="bg-indigo-200 border-b-4 border-t-4 border-indigo-800
                  px-6 py-1 hover:bg-blue-900  hover:border-blue-100 hover:text-white  "
                  >
                    <FormattedMessage
                      id="viewDetails"
                      defaultMessage="VIEW DETAILS ➜ "
                    />
                  </Link>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="lg:flex lg:py-6">
              <div className=" px-20 lg:pl-40 ">
                <div>
                  <Link to="/sembadapalayam">
                    <img
                      alt="..."
                      className="align-middle border-none max-w-full h-auto  transform hover:scale-110 "
                      src="/img/demo1.jpg"
                    />
                  </Link>
                  <Link to="/sembadapalayam">
                    <p className="pt-5 font-bold text-center text-2xl hover:text-blue-700">
                      <FormattedMessage
                        id="siteSemone"
                        defaultMessage="Sempadapalayam, Punjai Pugalur "
                      />
                    </p>
                    <p className="lg:pt-5 font-bold text-center text-2xl hover:text-blue-700">
                      <FormattedMessage
                        id="siteSemtwo"
                        defaultMessage="Karur "
                      />
                    </p>
                  </Link>
                  <div className="mt-5 text-center">
                    <Link
                      to="/sembadapalayam"
                      className="bg-indigo-200 border-b-4 border-t-4 border-indigo-800
                  px-6 py-1 hover:bg-blue-900  hover:border-blue-100 hover:text-white  "
                    >
                      <FormattedMessage
                        id="viewDetails"
                        defaultMessage="VIEW DETAILS ➜ "
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="px-20 lg:pr-40  lg:pt-0 pt-16">
                <Link to="/arthanaripalayam">
                  <img
                    alt="..."
                    className="align-middle border-none max-w-full h-auto hover:shadow-2xl transform hover:scale-110"
                    src="/img/demo1.jpg"
                  />
                </Link>
                <Link to="/arthanaripalayam">
                  <p className="pt-5 font-bold text-center text-2xl hover:text-blue-700">
                    <FormattedMessage
                      id="siteArthone"
                      defaultMessage=" Arthanaripalayam, Paramathi Velur "
                    />
                  </p>
                  <p className="lg:pt-5 font-bold text-center text-2xl hover:text-blue-700">
                    <FormattedMessage
                      id="siteArthtwo"
                      defaultMessage="Namakkal "
                    />
                  </p>
                </Link>
                <div className="mt-5 text-center">
                  <Link
                    to="/arthanaripalayam"
                    className="bg-indigo-200 border-b-4 border-t-4 border-indigo-800
                  px-6 py-1 hover:bg-blue-900  hover:border-blue-100 hover:text-white "
                  >
                    <FormattedMessage
                      id="viewDetails"
                      defaultMessage="VIEW DETAILS ➜ "
                    />
                  </Link>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="lg:flex lg:pt-16 pt-16 lg:pb-12 ">
              <div className="px-20 lg:pl-40 ">
                <Link to="/pattasukadi">
                  <img
                    alt="..."
                    className="align-middle border-none max-w-full h-auto hover:shadow-2xl transform hover:scale-110"
                    src="/img/demo1.jpg"
                  />
                </Link>
                <Link to="/pattasukadi">
                  <p className="pt-5 font-bold text-center text-2xl hover:text-blue-700">
                    <FormattedMessage
                      id="sitePattsone"
                      defaultMessage=" Pattasukadai, Paramathi Velur "
                    />
                  </p>
                  <p className="lg:pt-5 font-bold text-center text-2xl hover:text-blue-700">
                    <FormattedMessage
                      id="sitePattstwo"
                      defaultMessage="Namakkal "
                    />
                  </p>
                </Link>
                <div className="mt-5 text-center">
                  <Link
                    to="/pattasukadi"
                    className="bg-indigo-200 border-b-4 border-t-4 border-indigo-800
                  px-6 py-1 hover:bg-blue-900  hover:border-blue-100 hover:text-white "
                  >
                    <FormattedMessage
                      id="viewDetails"
                      defaultMessage="VIEW DETAILS ➜ "
                    />
                  </Link>
                </div>
              </div>
              <div className="px-20 lg:pr-40 lg:pt-0 pt-16">
                <Link to="/munnur">
                  <img
                    alt="..."
                    className="align-middle border-none max-w-full h-auto hover:shadow-2xl transform hover:scale-110"
                    src="/img/demo1.jpg"
                  />
                </Link>
                <Link to="/munnur">
                  <p className="pt-5 font-bold text-center text-2xl hover:text-blue-700">
                    <FormattedMessage
                      id="siteMunnurone"
                      defaultMessage=" Munnur, Karur Paramathi "
                    />
                  </p>
                  <p className="lg:pt-5 font-bold text-center text-2xl hover:text-blue-700">
                    <FormattedMessage
                      id="siteMunnurtwo"
                      defaultMessage="Karur"
                    />
                  </p>
                </Link>
                <div className="mt-5 text-center">
                  <Link
                    to="/munnur"
                    className="bg-indigo-200 border-b-4 border-t-4 border-indigo-800
                  px-6 py-1 hover:bg-blue-900  hover:border-blue-100 hover:text-white "
                  >
                    <FormattedMessage
                      id="viewDetails"
                      defaultMessage="VIEW DETAILS ➜ "
                    />
                  </Link>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="lg:flex lg:py-6">
              <div className="px-20 lg:pl-40 lg:pt-0 pt-16 ">
                <Link to="/nanaparappu">
                  <img
                    alt="..."
                    className="align-middle border-none max-w-full h-auto hover:shadow-2xl transform hover:scale-110"
                    src="/img/demo1.jpg"
                  />
                </Link>
                <Link to="/nanaparappu">
                  <p className="pt-5 font-bold text-center text-2xl hover:text-blue-700">
                    <FormattedMessage
                      id="siteNanaparappuone"
                      defaultMessage="  Nanaparappu, Punjai Pugalur "
                    />
                  </p>
                  <p className="lg:pt-5 font-bold text-center text-2xl hover:text-blue-700">
                    <FormattedMessage
                      id="siteNanaparapputwo"
                      defaultMessage="Karur"
                    />
                  </p>
                </Link>
                <div className="mt-5 text-center">
                  <Link
                    to="/nanaparappu"
                    className="bg-indigo-200 border-b-4 border-t-4 border-indigo-800
                  px-6 py-1 hover:bg-blue-900  hover:border-blue-100 hover:text-white  "
                  >
                    <FormattedMessage
                      id="viewDetails"
                      defaultMessage="VIEW DETAILS ➜ "
                    />
                  </Link>
                </div>
              </div>
              <div className="px-20 lg:pr-40 lg:pt-0 pt-16">
                <Link to="/aravakurichi">
                  <img
                    alt="..."
                    className="align-middle border-none max-w-full h-auto hover:shadow-2xl transform hover:scale-110"
                    src="/img/demo1.jpg"
                  />
                </Link>
                <Link to="/aravakurichi">
                  <p className="pt-5 font-bold text-center text-2xl hover:text-blue-700">
                    <FormattedMessage
                      id="siteAravaione"
                      defaultMessage="   Aravakurichi"
                    />
                  </p>
                  <p className="lg:pt-5 font-bold text-center text-2xl hover:text-blue-700">
                    <FormattedMessage
                      id="siteAravaitwo"
                      defaultMessage="  Karur"
                    />
                  </p>
                </Link>
                <div className="mt-5 text-center">
                  <Link
                    to="/aravakurichi"
                    className="bg-indigo-200 border-b-4 border-t-4 border-indigo-800
                  px-6 py-1  hover:bg-blue-900  hover:border-blue-100 hover:text-white"
                  >
                    <FormattedMessage
                      id="viewDetails"
                      defaultMessage="VIEW DETAILS ➜ "
                    />
                  </Link>
                </div>
              </div>
            </div>
          </section>
          <div className="text-center lg:pt-6 pt-16  lg:px-20 ">
            <div className="text-xl p-5">
              <b>
                <FormattedMessage
                  id="completedProjects"
                  defaultMessage="COMPLETED PROJECTS "
                />
              </b>
            </div>
            <hr></hr>
          </div>
          <section>
            <div className="lg:flex lg:px-12 px-6 lg:py-12 py-6">
              <div className="lg:w-3/6 lg:px-12 lg:py-1 py-5  transform hover:scale-110">
                <div className="bg-blue-100 hover:bg-blue-600 hover:text-white text-blue-900 hover:shadow-2xl py-10 text-center">
                  
                    <p className="pt-5 font-bold text-center text-3xl underline  ">
                      THOGAI MURUGAN AVENUES
                    </p>
                    
                      <img
                        alt="..."
                        className="align-middle border-none px-12 py-5   "
                        src="/img/a5.jpg"
                      />
                  
                  
                    <p className="pt-3 font-bold text-center text-xl">
                    <FormattedMessage
                    id="completedOne"
                    defaultMessage="   Sempadapalayam"
                  />
                    </p>
                    
               
                </div>
               
              </div>
              <div className="lg:w-3/6 lg:px-12 lg:py-1 py-5 lg:pt-0 pt-12 transform hover:scale-110">
                <div className="bg-blue-100 hover:bg-blue-600 hover:text-white text-blue-900 hover:shadow-2xl py-10 text-center">
                  
                    <p className="pt-5 font-bold text-center text-3xl underline  ">
                      THOGAI MURUGAN AVENUES
                    </p>
                    
                      <img
                        alt="..."
                        className="align-middle border-none px-12 py-5   "
                        src="/img/a6.jpg"
                      />
                  
                    

                    <p className="pt-3 font-bold text-center text-xl">
                    <FormattedMessage
                    id="completedTwo"
                    defaultMessage="  Paramathi,Karur"
                  />
                    </p>
                    
                  
                </div>
               
              </div>
            </div>
          </section>
          <section>
            <div className="lg:flex py-6 lg:pb-12">
              <div className="px-20 lg:pl-40 ">
                <img
                  alt="..."
                  className="align-middle border-none max-w-full h-auto hover:shadow-2xl transform hover:scale-110"
                  src="/img/demo1.jpg"
                />
                <p className="pt-5 font-bold text-center text-2xl hover:text-blue-700">
                  <FormattedMessage
                    id="completedOne"
                    defaultMessage="   Sempadapalayam"
                  />
                </p>
              </div>
              <div className="px-20 lg:pr-40 lg:pt-0 pt-12 lg:pb-0 pb-6">
                <img
                  alt="..."
                  className="align-middle border-none max-w-full h-auto hover:shadow-2xl transform hover:scale-110 "
                  src="/img/demo1.jpg"
                />
                <p className="pt-5 font-bold text-center text-2xl hover:text-blue-700">
                  <FormattedMessage
                    id="completedTwo"
                    defaultMessage="  Paramathi,Karur"
                  />
                </p>
              </div>
            </div>
          </section>
        </div>
        <Footer></Footer>
      </IntlProvider>
    </>
  );
};

export default Projects;
*/
