import {React, useEffect } from "react";
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
  siteMunnurPhase: " Munnur Phase 2, Karur Paramathi",
  siteNanaparappuone: " Nanaparappu, Punjai Pugalur",
  siteNanaparapputwo: " Karur",
  siteAravaione: " Aravakurichi",
  siteAravaitwo: "Karur",
  sitekoodacheri: "Koodacheri,  Paramathi Velur",
  sitekoodacheritwo: "Namakkal",
  completedProjects: "COMPLETED PROJECTS",
  completedOne: " Sempadapalayam,Karur",
  completedTwo: " Saravanampatti,Coimbatore",
};

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
 });
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
                  <Link to="/pattasukadi">
                    <p className="pt-5 font-bold text-center text-3xl underline  ">
                      THOGAI MURUGAN AVENUE
                    </p>
                    <Link to="/pattasukadi">
                      <img
                        alt="..."
                        className="align-middle border-none px-12 py-5   "
                        src="/img/demo.jpg"
                      />
                    </Link>

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
              <div className="lg:w-3/6 lg:px-12 lg:py-1 py-5 lg:pt-0 pt-12 ">
                <div className="bg-blue-100 hover:bg-blue-600 hover:text-white text-blue-900 hover:shadow-2xl py-10 text-center transform hover:scale-110 duration-700 ease-in-out">
                  <Link to="/munnur">
                    <p className="pt-1 font-bold text-center text-3xl underline  ">
                      THOGAI MURUGAN AVENUE
                    </p>
                    <Link to="/munnur">
                      <img
                        alt="..."
                        className="align-middle border-none px-12 py-5   "
                        src="/img/demo2.jpg"
                      />
                    </Link>

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

          <section>
            <div className="lg:flex lg:px-12 px-6 lg:py-12 py-6">
              <div className="lg:w-3/6 lg:px-12 lg:py-1 py-5  ">
                <div className="bg-blue-100 hover:bg-blue-600 hover:text-white text-blue-900 hover:shadow-2xl py-10 text-center transform hover:scale-110 duration-700 ease-in-out">
                  <Link to="/munnurtwo">
                    <p className="pt-5 font-bold text-center text-3xl underline  ">
                      THOGAI MURUGAN AVENUE
                    </p>
                    <Link to="/munnurtwo">
                      <img
                        alt="..."
                        className="align-middle border-none px-12 py-5   "
                        src="/img/a1.jpg"
                      />
                    </Link>

                    <p className="pt-3 font-bold text-center text-xl">
                      <FormattedMessage
                        id="siteMunnurPhase"
                        defaultMessage="  Munnur Phase 2, Karur Paramathi"
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
                    to="/munnurtwo"
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
              <div className="lg:w-3/6 lg:px-12 lg:py-1 py-5 lg:pt-0 pt-12">
                <div className="bg-blue-100 hover:bg-blue-600 hover:text-white text-blue-900 hover:shadow-2xl py-10 text-center transform hover:scale-110 duration-700 ease-in-out">
                  <Link to="/koodacheri">
                    <p className="pt-5 font-bold text-center text-3xl underline  ">
                      THOGAI MURUGAN AVENUE
                    </p>
                    <Link to="/koodacheri">
                      <img
                        alt="..."
                        className="align-middle border-none px-12 py-5   "
                        src="/img/a2.jpg"
                      />
                    </Link>

                    <p className="pt-3 font-bold text-center text-xl">
                      <FormattedMessage
                        id=" sitekoodacheri"
                        defaultMessage=" Koodacheri,  Paramathi Velur"
                      />
                    </p>
                    <p className="pt-3 font-bold text-center text-xl ">
                      <FormattedMessage
                        id="sitekoodacheritwo"
                        defaultMessage="Namakkal"
                      />
                    </p>
                  </Link>
                </div>
                <div className="lg:mt-12 mt-10 text-center">
                  <Link
                    to="/koodacheri"
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

          <div className="text-center lg:pt-6   lg:px-20 ">
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
              <div className="lg:w-3/6 lg:px-12 lg:py-1 py-5  ">
                <div className="bg-blue-100 hover:bg-blue-600 hover:text-white text-blue-900 hover:shadow-2xl py-10 text-center transform hover:scale-110 duration-700 ease-in-out">
                  <p className="pt-5 font-bold text-center text-3xl underline  ">
                    THOGAI MURUGAN AVENUE
                  </p>

                  <img
                    alt="..."
                    className="align-middle border-none px-12 py-5   "
                    src="/img/a5.png"
                  />

                  <p className="pt-3 font-bold text-center text-xl">
                    <FormattedMessage
                      id="completedOne"
                      defaultMessage="   Sempadapalayam"
                    />
                  </p>
                </div>
              </div>
              <div className="lg:w-3/6 lg:px-12 lg:py-1 py-5 lg:pt-0 pt-12 ">
                <div className="bg-blue-100 hover:bg-blue-600 hover:text-white text-blue-900 hover:shadow-2xl py-10 text-center transform hover:scale-110 duration-700 ease-in-out">
                  <p className="pt-5 font-bold text-center text-3xl underline  ">
                    THOGAI MURUGAN AVENUE
                  </p>

                  <img
                    alt="..."
                    className="align-middle border-none px-12 py-5   "
                    src="/img/a6.png"
                  />

                  <p className="pt-3 font-bold text-center text-xl">
                    <FormattedMessage
                      id="completedTwo"
                      defaultMessage="  Saravanampatti,Coimbatore"
                    />
                  </p>
                </div>
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
