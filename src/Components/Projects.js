import React from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { IntlProvider, FormattedMessage } from "react-intl";
const messagesInFrench = {
  name: "Thogai Murugan Builders",
  avenuesHead: "THOGAI MURUGAN BUILDERS PRESENTS THE THOGAI MURUGAN AVENUES",
  ongoingProjects: " ONGOING PROJECTS",
  viewDetails: " View Details ➜",
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
          <div className="text-center pt-6 pb-12 lg:px-20 ">
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
            <div className="lg:flex lg:py-6">
              <div className=" px-20 lg:pl-40 ">
                <div className="card shadow-md bg-blue-50 hover:shadow-2xl p-2 pb-3">
                <Link to="/sembadapalayam">
                  <img
                    alt="..."
                    className="align-middle border-none max-w-full h-auto   "
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
                    <FormattedMessage id="siteSemtwo" defaultMessage="Karur " />
                  </p>
                </Link>
                <div className="mt-5 text-center">
                  <Link
                    to="/sembadapalayam"
                    className="bg-indigo-200 border-b-4 border-t-4 border-indigo-800
                  px-6 py-1  "
                  >
                    <FormattedMessage
                      id="viewDetails"
                      defaultMessage="View Details ➜ "
                    />
                  </Link>
                </div>
                </div>
              </div>
              <div className="px-20 lg:pr-40  lg:pt-0 pt-16">
                <Link to="/arthanaripalayam">
                  <img
                    alt="..."
                    className="align-middle border-none max-w-full h-auto hover:shadow-2xl"
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
                  px-6 py-1  "
                  >
                    <FormattedMessage
                      id="viewDetails"
                      defaultMessage="View Details ➜ "
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
                    className="align-middle border-none max-w-full h-auto hover:shadow-2xl"
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
                  px-6 py-1  "
                  >
                    <FormattedMessage
                      id="viewDetails"
                      defaultMessage="View Details ➜ "
                    />
                  </Link>
                </div>
              </div>
              <div className="px-20 lg:pr-40 lg:pt-0 pt-16">
                <Link to="/munnur">
                  <img
                    alt="..."
                    className="align-middle border-none max-w-full h-auto hover:shadow-2xl"
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
                  px-6 py-1  "
                  >
                    <FormattedMessage
                      id="viewDetails"
                      defaultMessage="View Details ➜ "
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
                    className="align-middle border-none max-w-full h-auto hover:shadow-2xl"
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
                  px-6 py-1  "
                  >
                    <FormattedMessage
                      id="viewDetails"
                      defaultMessage="View Details ➜ "
                    />
                  </Link>
                </div>
              </div>
              <div className="px-20 lg:pr-40 lg:pt-0 pt-16">
                <Link to="/aravakurichi">
                  <img
                    alt="..."
                    className="align-middle border-none max-w-full h-auto hover:shadow-2xl"
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
                  px-6 py-1  "
                  >
                    <FormattedMessage
                      id="viewDetails"
                      defaultMessage="View Details ➜ "
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
            <div className="lg:flex py-6 lg:pb-12">
              <div className="px-20 lg:pl-40 ">
                <img
                  alt="..."
                  className="align-middle border-none max-w-full h-auto hover:shadow-2xl"
                  src="/img/demo1.jpg"
                />
                <p className="pt-5 font-bold text-center text-2xl hover:text-blue-700">
                  <FormattedMessage
                    id="completedOne"
                    defaultMessage="   Sempadapalayam,Karur"
                  />
                </p>
              </div>
              <div className="px-20 lg:pr-40 lg:pt-0 pt-12 lg:pb-0 pb-6">
                <img
                  alt="..."
                  className="align-middle border-none max-w-full h-auto hover:shadow-2xl "
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
