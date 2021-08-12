import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Bannerhome() {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
  };
  return (
    <div className="slider lg:mx-32 lg:px-56 p-10 ">
      <Slider {...settings}>
        <div>
          <img className="w-full " src="/img/one.jpg" alt="" />
        </div>
        <div>
          <img className="w-full " src="/img/two.jpg" alt="" />
        </div>
        <div>
          <img className="w-full " src="/img/three.jpg" alt="" />
        </div>
        <div>
          <img className="w-full " src="/img/four.jpg" alt="" />
        </div>
        <div>
          <img className="w-full " src="/img/five.jpg" alt="" />
        </div>
        <div>
          <img className="w-full " src="/img/seven.jpg" alt="" />
        </div>
      </Slider>
    </div>
  );
}
export default Bannerhome;
