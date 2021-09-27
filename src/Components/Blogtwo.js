import { React, useEffect } from "react";
import Footer from "./Footer";
import Connect from "./Connect";
const Blogtwo = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <div className="text-center lg:pt-12 lg:pb-12 lg:px-20 ">
        <h5 className="text-3xl font-semibold   bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200 py-3">
          Why you choose Thogai Murugan Builders
        </h5>
      </div>
      <div className="lg:px-32 lg:py-1 py-6">
        <img
          alt="..."
          className="align-middle border-none  lg:px-32 px-10  transform hover:scale-110 "
          src="/img/one.jpg"
        />
      </div>
      <div className="lg:px-56 lg:pb-16 lg:py-10 py-6 px-6 text-justify lg:text-lg">
        <p className="text-xl font-semibold pt-5">About Us</p>
        <p>
          Founded in 2004 by the visionary entrepreneur Mr.Thogai Murugan,
          Thogai Murugan Builders is an eminent real estate conglomerate and one
          of the leading builders in Karur and around districts of karur. We are
          constantly expanding our footprint with innovative facades, exquisite
          dwellings and elevated lifestyle solutions in our Thogai Murugan
          Avenues at karur and around districts of karur. And our clientele
          spans thousands of happy residents and families in this beloved city.
        </p>

        <p className="text-xl font-semibold pt-5">PROPERTY FEATURES</p>
        <p>
          <span>1 )</span> Massive concrete Arch
        </p>
        <p>
          <span>2 )</span>Bitumen road
        </p>
        <p>
          <span>3 )</span>Drainage for all roads
        </p>
        <p>
          <span>4 )</span>Street Lights
        </p>
        <p>
          <span>5 )</span>Park facilities
        </p>
        <p>
          <span>6 )</span>DTCP approval for all flats
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

export default Blogtwo;
