import { React, useEffect } from "react";
import Footer from "./Footer";

const Csr = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <section>
        <div className="text-center lg:pt-12 lg:pb-6 lg:px-20 ">
          <h5 className="text-3xl font-semibold   bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200 py-3">
            Thogai Murugan Builders - CSR News
          </h5>
        </div>
        <div className="lg:flex lg:px-12 px-6 lg:py-12 py-6">
          <div className="lg:w-2/6 lg:px-12 lg:py-1 py-5 transform hover:scale-110">
            <div className="bg-blue-100 text-blue-900  py-10">
              <p className=" text-center p-10 text-xl">CSR 1 </p>
            </div>
          </div>
          <div className="lg:w-2/6 lg:px-12 lg:py-1 py-5 transform hover:scale-110">
            <div className="w bg-blue-100 text-blue-900 py-10">
              <p className=" text-center p-10 text-xl">CSR 2</p>
            </div>
          </div>
          <div className="lg:w-2/6 lg:px-12 lg:py-1 py-5  transform hover:scale-110">
            <div className=" bg-blue-100 text-blue-900  py-10">
              <p className=" text-center p-10 text-xl">CSR 3</p>
            </div>
          </div>
        </div>
      </section>

      <Footer></Footer>
    </>
  );
};

export default Csr;
