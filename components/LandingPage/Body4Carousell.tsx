import Carousel from "nuka-carousel";
import BimeDana from "../../public/Assets/Images/LandingPage/Body4/BimeDana.webp";
import BimeKhadamatdarmani from "../../public/Assets/Images/LandingPage/Body4/BimeKhadamatdarmani.webp";
import BimeMoalem from "../../public/Assets/Images/LandingPage/Body4/BimeMoalem.webp";
import BimeRazi from "../../public/Assets/Images/LandingPage/Body4/BimeRazi.webp";
import BimeSalamat from "../../public/Assets/Images/LandingPage/Body4/BimeSalamat.webp";
import BimeSina from "../../public/Assets/Images/LandingPage/Body4/BimeSina.webp";
import BimeTosee from "../../public/Assets/Images/LandingPage/Body4/BimeTosee.webp";
import arrow from "../../public/Assets/Images/LandingPage/Body4/Arrow.webp";
import Image from "next/image";

interface n {
  nextSlide: any;
  currentSlide: any;
  slideCount: any;
  slidesToShow: any;
  previousSlide: any;
}
const LeftControls = ({ previousSlide, currentSlide } : n) => (
  <button>
      <Image src={arrow} alt="Logo" className="rotate-180" />
  </button>
);
const RightControls = ({ nextSlide }: n) => {
  return (
    <button className="relative right-[105px]" onClick={nextSlide}>
      <Image src={arrow} alt="Logo" />
    </button>
  );
};

export default function Body4Slider() {
  const SliderPics = [
    { bime: "بیمه سلامت ایران", logo: BimeSalamat },
    { bime: "بیمه خدمات درمانی", logo: BimeKhadamatdarmani },
    { bime: "بیمه رازی", logo: BimeRazi },
    { bime: "بیمه معلم", logo: BimeMoalem },
    { bime: "بیمه توسعه", logo: BimeTosee },
    { bime: "بیمه دانا", logo: BimeDana },
    { bime: "بیمه سینا", logo: BimeSina },
    { bime: "بیمه سینا", logo: BimeSina },
    { bime: "بیمه سینا", logo: BimeSina },
    { bime: "بیمه سینا", logo: BimeSina },
    { bime: "بیمه سینا", logo: BimeSina },
    { bime: "بیمه سینا", logo: BimeSina },
  ];

  return (
    <div>
      <Carousel
        slidesToShow={6.5}
        // slidesToScroll={1}
        // disableEdgeSwiping={false}
        // dragging={true}
        // speed={1000}
        // // cellSpacing={20}
        // renderBottomCenterControls={null}
        // renderCenterLeftControls={null}
        // // renderCenterLeftControls={LeftControls}
        // renderCenterRightControls={RightControls}
      >
        {SliderPics.map((item) => (
          <div className="w-[158px] h-[196px] flex flex-col items-center justify-around rounded-[16px] duration-500  hover:bg-red">
            <Image src={item.logo} alt="Logo" />
            <p className="text-[18px] font-light">{item.bime}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
