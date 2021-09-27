import { React, useEffect } from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";
const Blogs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <div>
        <section>
          <div className="text-center lg:pt-12 lg:pb-6 lg:px-20 ">
            <h5 className="text-3xl font-semibold   bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200 py-3">
              Thogai Murugan Builders - Blogs
            </h5>
          </div>
        </section>

        <section>
          <div className="lg:flex py-10  lg:pb-20">
            <div className=" lg:px-20 px-6 lg:pl-40 ">
              <div>
                <Link to="/blogone">
                  <img
                    alt="..."
                    className="align-middle border-none   transform hover:scale-110  duration-700 ease-in-out "
                    src="/img/demo1.jpg"
                  />
                </Link>
                <Link to="/blogone">
                  <p className="lg:pt-5 font-bold text-center text-2xl hover:text-blue-700">
                    5 Things To Do Before Buying a Property
                  </p>
                </Link>
                <div className="mt-5 text-center">
                  <Link
                    to="/blogone"
                    className="bg-indigo-200 border-b-4 border-t-4 border-indigo-800
                  px-6 py-1 hover:bg-blue-900  hover:border-blue-100 hover:text-white "
                  >
                    CLICK HERE TO SEE BLOG ➜
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:px-20 px-6 lg:pr-40  lg:pt-0 pt-16">
              <Link to="/blogtwo">
                <img
                  alt="..."
                  className="align-middle border-none   transform hover:scale-110 duration-700 ease-in-out"
                  src="/img/one.jpg"
                />
              </Link>
              <Link to="/blogtwo">
                <p className="lg:pt-5 font-bold text-center text-2xl hover:text-blue-700">
                  Why you choose Thogai Murugan Builders
                </p>
              </Link>
              <div className="mt-5 text-center">
                <Link
                  to="/blogtwo"
                  className="bg-indigo-200 border-b-4 border-t-4 border-indigo-800
                  px-6 py-1 hover:bg-blue-900  hover:border-blue-100 hover:text-white "
                >
                  CLICK HERE TO SEE BLOG ➜
                </Link>
              </div>
            </div>
          </div>
        </section>
        <Footer></Footer>
      </div>
    </>
  );
};

export default Blogs;
