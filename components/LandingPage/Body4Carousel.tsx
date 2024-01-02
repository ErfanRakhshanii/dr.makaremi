import Slider from "react-slick";
import BimeTosee from "../../public/Assets/Images/LandingPage/Body4/BimeTosee.webp";
import Image from "next/image";

export default function Body4Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div >
      <h2> Single Item</h2>
      <Slider {...settings}>
        <div>
         <Image src={BimeTosee} alt="Logo"/>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  );
}
