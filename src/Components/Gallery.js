/*import React from 'react';
import Footer from './Footer'

const Gallery = () => {
  return (
      <>
    <div  className="lg:ml-96 w-full h-48  ">
    <img   alt="..." src="/img/b1.jpg" />
    
    
    </div >
    <Footer></Footer>
    </>
  );
};

export default Gallery;*/
import * as React from "react";
import { IntlProvider, FormattedMessage } from "react-intl";
//import Footer from './Footer'

// Translated messages in French with matching IDs to what you declared
const messagesInFrench = {
  myMessage: "HELLo",
};

export default function Gallery() {
  return (
    <IntlProvider messages={messagesInFrench} defaultLocale="en">
      <p>
        <FormattedMessage id="myMessage" defaultMessage="Heloo" />
        <br />
      </p>
    </IntlProvider>
  );
}
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
