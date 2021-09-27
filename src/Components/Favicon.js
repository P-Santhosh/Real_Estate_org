import { React, useEffect } from "react";
import Footer from "./Footer";

const Favicon = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <p className="p-32"> Builders</p>
      //className="transform hover:scale-110 card shadow-md bg-blue-50
      hover:shadow-2xl pb-6"
      <img
            alt="..."
            className="align-middle border-none max-w-full h-auto rounded-lg"
            src="/img/favicon.jpg"
          />
      <Footer></Footer>
    </>
  );
};

export default Favicon;
