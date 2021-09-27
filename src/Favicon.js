import { React, useEffect } from "react";


const Favicon = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <img
            alt="..."
           
            src="/img/favicon.jpg"
          />
    </>
  );
};

export default Favicon;
