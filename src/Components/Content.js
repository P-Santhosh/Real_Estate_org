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
  clickHere: "CLICK HERE TO SEE MORE",
  csr: "CSR",
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
  completedTwo: " Saravanampatti,Coimbatore",
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
              <div className="lg:w-2/6 text-center text-justify lg:px-2 px-1 lg:mt-1 mt-6 ">
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
      text-sm bg-blue-400 border-blue-600 hover:bg-blue-900 hover:border-blue-100  hover:text-white  "
      
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
          {/*<Bannerhome></Bannerhome>*/}
          <section>
            <div className="lg:flex lg:px-12 px-6 lg:py-12 py-6">
              <div className="lg:w-3/6 lg:px-12 lg:py-1 py-5  ">
                <div className="bg-blue-100 hover:bg-blue-600 hover:text-white text-blue-900 hover:shadow-2xl py-10 text-center transform hover:scale-110 duration-700 ease-in-out">
                  <Link to="/sembadapalayam">
                    <p className="pt-5 font-bold text-center text-3xl underline  ">
                      THOGAI MURUGAN AVENUE
                    </p>
                    <Link to="/sembadapalayam">
                      <img
                        alt="..."
                        className="align-middle border-none px-12 py-5   "
                        src="/img/bthree.jpg"
                      />
                    </Link>
                    

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
              <div className="lg:w-3/6 lg:px-12 lg:py-1 py-5 lg:pt-0 pt-12 ">
                <div className="bg-blue-100 hover:bg-blue-600 hover:text-white text-blue-900 hover:shadow-2xl py-10 text-center transform hover:scale-110 duration-700 ease-in-out">
                  <Link to="/arthanaripalayam">
                    <p className="pt-5 font-bold text-center text-3xl underline  ">
                      THOGAI MURUGAN AVENUE
                    </p>
                    <Link to="/arthanaripalayam">
                      <img
                        alt="..."
                        className="align-middle border-none px-12 py-5   "
                        src="/img/bone.jpg"
                      />
                    </Link>
                    
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
              <div className="lg:w-3/6 lg:px-12 lg:py-1 py-5  ">
                <div className="bg-blue-100 hover:bg-blue-600 hover:text-white text-blue-900 hover:shadow-2xl py-10 text-center transform hover:scale-110 duration-700 ease-in-out">
                  <Link to="/nanaparappu">
                    <p className="pt-5 font-bold text-center text-3xl underline  ">
                      THOGAI MURUGAN AVENUE
                    </p>
                    <Link to="/nanaparappu">
                      <img
                        alt="..."
                        className="align-middle border-none px-12 py-5   "
                        src="/img/a1.jpg"
                      />
                    </Link>
                    

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
              <div className="lg:w-3/6 lg:px-12 lg:py-1 py-5 lg:pt-0 pt-12 ">
                <div className="bg-blue-100 hover:bg-blue-600 hover:text-white text-blue-900 hover:shadow-2xl py-10 text-center transform hover:scale-110 duration-700 ease-in-out">
                  <Link to="/aravakurichi">
                    <p className="pt-5 font-bold text-center text-3xl underline  ">
                      THOGAI MURUGAN AVENUE
                    </p>
                    <Link to="/aravakurichi">
                      <img
                        alt="..."
                        className="align-middle border-none px-12 py-5   "
                        src="/img/a2.jpg"
                      />
                    </Link>
                    

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
          <div className=" py-6  text-gray-900 text-center">
            <Link
              to="/projects"
              className="rounded-full border-4 lg:px-20 px-6    py-3 font-bold
       text-sm bg-blue-400 border-blue-600  hover:bg-blue-900 hover:border-blue-100  hover:text-white"
            >
              <FormattedMessage
                id="clickHere"
                defaultMessage="CLICK HERE TO SEE MORE"
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
