import { React, useEffect } from "react";
import Footer from "./Footer";
import Connect from "./Connect";
const Blogone = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <div className="text-center lg:pt-12 lg:pb-12 lg:px-20 ">
        <h5 className="text-3xl font-semibold   bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200 py-3">
          5 Things To Do Before Buying a Property
        </h5>
      </div>
      <div className="lg:px-32 lg:py-1 py-6">
        <img
          alt="..."
          className="align-middle border-none  lg:px-32 px-10  transform hover:scale-110 "
          src="/img/a8.jpg"
        />
      </div>
      <div className="lg:px-56 lg:pb-16 lg:py-10 py-6 px-6 text-justify lg:text-lg">
        <p>
          Buying a land is dream for many people out there. In the urge and
          eager many buy land without proper knowledge on specific property and
          suffer later. To avoid such scenarios here are some of basic things
          listed below to note before buying a property.
        </p>

        <p className="text-xl font-semibold pt-5">Budget</p>
        <p>
          On buying a real estate property first thing is to choose the property
          which suits your budget. Select the property which is affordable with
          additional and hidden charges.
        </p>
        <p className="text-xl font-semibold pt-5">Document Clearance</p>
        <p>
          Always do a legal clearance before buying a property. Ensure that the
          property is free from hassles and no complications will occur in
          future. Go through the buyer seller agreement carefully.
        </p>
        <p className="text-xl font-semibold pt-5">Basic Infrastructure</p>
        <p>
          Without basic needs we can’t survive in a locality. So check for
          availability of water and ground water level in the location. Check
          how often power cuts happen in the surroundings.
        </p>
        <p className="text-xl font-semibold pt-5">Resale Value</p>
        <p>
          Always go for the land with future values. Many factors determine the
          value of land like schools, colleges, industrial estates, etc. near
          the buying location. So choose wisely.
        </p>
        <p className="text-xl font-semibold pt-5">RERA Registered</p>
        <p>
          Government approved product is good for us in any situation, likewise
          buy the RERA registered flats which protects you from structural
          defects.
        </p>
      </div>
      <Connect></Connect>
      <Footer></Footer>
    </>
  );
};

export default Blogone;
