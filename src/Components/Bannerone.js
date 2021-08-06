import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Bannerone() {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
  };
  return (
    <div className="slider m-0 p-0">
      <Slider {...settings}>
        <div>
          <img className="w-full max-h-screen" src="/img/one.jpg" alt="" />
        </div>
        <div>
          <img className="w-full max-h-screen" src="/img/two.jpg" alt="" />
        </div>
        <div>
          <img className="w-full max-h-screen" src="/img/three.jpg" alt="" />
        </div>
        <div>
          <img className="w-full max-h-screen" src="/img/four.jpg" alt="" />
        </div>
        <div>
          <img className="w-full max-h-screen" src="/img/demo1.jpg" alt="" />
        </div>
        <div>
          <img className="w-full max-h-screen" src="/img/demo3.jpg" alt="" />
        </div>
      </Slider>
    </div>
  );
}
export default Bannerone;
