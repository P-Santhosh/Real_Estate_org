import React from "react";
import Footer from "./Footer";
import { IntlProvider, FormattedMessage } from "react-intl";
const messagesInFrench = {
  founderHead: "FOUNDER OF THOGAI MURUGAN BUILDERS",
  founderGoal:
    "Achievements become routine if dreams are backed by the desire to reach them.",
  founderName: "Shri.Thogai Murugan ",
  founderPosition: "Founder, Thogai Murugan Builders",
  ceoName: "Santhose Murugan",
  ceoPosition: "CEO, Thogai Murugan Builders",
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
          <div className="lg:flex">
            <div className="lg:w-2/4 ">
              <div className=" lg:pl-56 lg:px-1 px-12">
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
            <div className="lg:w-2/4 ">
              <div className=" lg:pl-56 lg:px-1 px-12">
                <img
                  alt="..."
                  className="align-middle border-none max-w-full h-auto rounded-lg "
                  src="/img/banner.jpg"
                />
              </div>
              <b>
                <FormattedMessage
                  id=" ceoName"
                  defaultMessage="Santhose Murugan "
                />
              </b>
              <p>
                <FormattedMessage
                  id=" ceoPosition"
                  defaultMessage="CEO, Thogai Murugan Builders"
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
        <section className="lg:pt-16 lg:pb-12 lg:px-20">
          <div className="text-center">
            <h5 className="text-xl font-bold pb-2 bg-gradient-to-r from-blue-400 via-blue-200 to-blue-400  py-4">
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
                  className="shadow-lg rounded-full mx-auto w-3/4 hover:shadow-2xl "
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
        </section>
        <section className="lg:py-12">
          <div className="text-center lg:px-20">
            <h5 className="text-xl font-bold pb-2  bg-gradient-to-r from-blue-400 via-blue-200 to-blue-400 py-4">
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
        <Footer></Footer>
      </IntlProvider>
    </>
  );
};

export default About;
