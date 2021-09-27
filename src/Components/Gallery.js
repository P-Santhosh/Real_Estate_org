import { React, useEffect } from "react";
import Footer from "./Footer";

const Gallery = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <div className="py-10">
        <div className="lg:flex px-12 ">
          <div className="card transform hover:scale-110 p-5">
            <img alt="..." src="/img/one.jpg" />
          </div>
          <div className=" card transform hover:scale-110 p-5">
            <img alt="..." src="/img/two.jpg" />
          </div>
          <div className=" card transform hover:scale-110 p-5">
            <img alt="..." src="/img/three.jpg" />
          </div>
        </div>
        <div className="lg:flex px-12 ">
          <div className="card transform hover:scale-110 p-5">
            <img alt="..." src="/img/four.jpg" />
          </div>
          <div className=" card transform hover:scale-110 p-5">
            <img alt="..." src="/img/six.jpg" />
          </div>
          <div className=" card transform hover:scale-110  p-5">
            <img alt="..." src="/img/seven.jpg" />
          </div>
        </div>
        <div className="lg:flex px-12 ">
          <div className="card transform hover:scale-110 p-5">
            <img alt="..." src="/img/bone.jpg" />
          </div>
          <div className=" card transform hover:scale-110 p-5">
            <img alt="..." src="/img/demo.jpg" />
          </div>
          <div className=" card transform hover:scale-110  p-5">
            <img alt="..." src="/img/demo2.jpg" />
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Gallery;

/*import * as React from 'react'
import {IntlProvider, FormattedMessage, FormattedNumber} from 'react-intl'
import Footer from './Footer'

// Translated messages in French with matching IDs to what you declared
const messagesInFrench = {
  myMessage: "HELLo",
}

export default function Gallery() {
  return (
    <IntlProvider messages={messagesInFrench} locale="fr" defaultLocale="en">
      <p>
        <FormattedMessage
          id="myMessage"
          defaultMessage="Heloo"
          
        />
        <br />
        
      </p>
    </IntlProvider>
  )
}*/
