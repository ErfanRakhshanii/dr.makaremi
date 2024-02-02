import Image from "next/image";
import sliderFrame0 from "../../../public/Assets/Images/LandingPage/Body0/SliderFrame0.png";
import sliderFrame1 from "../../../public/Assets/Images/LandingPage/Body0/SliderFrame1.png";
import sliderFrame2 from "../../../public/Assets/Images/LandingPage/Body0/SliderFrame2.png";
import sliderFrame3 from "../../../public/Assets/Images/LandingPage/Body0/SliderFrame3.png";
import eye from "../../../public/Assets/Images/LandingPage/Body0/eye.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";

export default function Body0Carousel() {
  const Frames = [sliderFrame0, sliderFrame1, sliderFrame2, sliderFrame3];
  return (
    <Swiper
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, Navigation]}
      speed={1200}
      slidesPerView={1}
      slidesPerGroup={1}
    >
      {Frames.map((item) => {
        return (
          <SwiperSlide className="w-full h-full"
          style={{
            backgroundImage: `url(${item.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}>
            <div className="w-full h-[578px] flex items-end ">
              <div className="w-[163px] h-full "></div>
              <div className="w-full h-[383px] flex flex-col items-start ">
                <span className="text-[64px] font-bold text-white">
                  چشم پزشکی دکتر مکارمی
                </span>
                <div className="w-full h-[59px] "></div>
                <span className="w-[503px] text-[20px] font-normal text-white text-right">
                  عمل PRK نوعی از جراحی عیوب انکساری نزدیک بینی، دوربینی و
                  آستیگماتیسم است. PRK اولین نوع از عمل جراحی لیزر چشم برای
                  تصحیح بینایی است.
                </span>
                <div className="w-full h-10 "></div>
                <button className="w-[225px] h-[68px] flex items-center justify-center gap-2 rounded-[10px] border border-green duration-500 hover:bg-green group">
                  <Image src={eye} alt="Logo"/>
                  <span className="text-[16px] font-medium duration-500 text-green group-hover:text-white ">مشاهده بیشتر</span>
                </button>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
