import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

function BannerCsr() {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
  };
  return (
    <div className="slider lg:mx-6 lg:p-6 ">
      <Slider {...settings}>
        <div>
          <Link to="/csr">
            <img
              className="w-full max-h-screen lg:px-10 px-2"
              src="/img/one.jpg"
              alt=""
            />
          </Link>
        </div>
        <div>
          <Link to="/csr">
            <img
              className="w-full max-h-screen lg:px-10 px-2"
              src="/img/two.jpg"
              alt=""
            />{" "}
          </Link>
        </div>
        <div>
          <Link to="/csr">
            <img
              className="w-full max-h-screen lg:px-10 px-2"
              src="/img/three.jpg"
              alt=""
            />{" "}
          </Link>
        </div>
        <div>
          <Link to="/csr">
            <img
              className="w-full max-h-screen lg:px-10 px-2"
              src="/img/four.jpg"
              alt=""
            />{" "}
          </Link>
        </div>
        <div>
          <Link to="/csr">
            <img
              className="w-full max-h-screen lg:px-10 px-2"
              src="/img/five.jpg" 
              alt=""
            />{" "}
          </Link>
        </div>
      </Slider>
    </div>
  );
}
export default BannerCsr;
