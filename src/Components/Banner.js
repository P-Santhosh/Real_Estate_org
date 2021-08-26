//import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//function Banner() {
  //const settings = {
    /* dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1*/

   /* infinite: true,
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
          <img className="w-full max-h-screen" src="/img/demo1.jpg" alt="" />
        </div>
        <div>
          <img className="w-full max-h-screen" src="/img/demo.jpg" alt="" />
        </div>
        <div>
          <img className="w-full max-h-screen" src="/img/demo2.jpg" alt="" />
        </div>
        <div>
          <img className="w-full max-h-screen" src="/img/demo3.jpg" alt="" />
        </div>
      </Slider>
    </div>
  );
}
export default Banner;*/
/*class Banner extends Component {
  render() {
    return (
      <div className="App">
      <p>hello</p>
      <video width="100%" height="500" controls >
      <source src="/img/test.mp4" type="video/mp4"/>
     </video>
      </div>
    );
  }   
}
export default Banner;*/
/*}*/

function Banner() {
  return (
    <>
    <div >
      <div className="App ">
        <video width="100%" height="calc(100vh-90px)" controls autoPlay muted loop>
          <source src="/img/Tester.mp4" type="video/mp4" />
        </video>
      </div>
      </div>
    </>
  );
}
export default Banner;
