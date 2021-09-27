import { React, useEffect } from "react";
import Footer from "./Footer";

const Builders = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <p className="p-32"> Builders</p>
      //className="transform hover:scale-110 card shadow-md bg-blue-50
      hover:shadow-2xl pb-6"
      <Footer></Footer>
    </>
  );
};

export default Builders;
