import { React, useEffect } from "react";
import Content from "./Content";
import Banner from "./Banner";
import Footer from "./Footer";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <Banner />
      <Content />
      <Footer />
    </>
  );
};

export default Home;
