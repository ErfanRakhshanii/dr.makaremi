import Image from "next/image";
import sliderFrame0 from "../../public/Assets/Images/LandingPage/Body9/HijabWoman.webp";
import quote from "../../public/Assets/Images/LandingPage/Body9/Quote.webp";
import arrowRight from "../../public/Assets/Images/LandingPage/Body9/ArrowRight.webp";
import arrowLeft from "../../public/Assets/Images/LandingPage/Body9/ArrowLeft.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useCallback } from "react";
import "swiper/swiper-bundle.css";

export default function Body9Carousel() {
  const swiperRef = useCallback<any>((swiper: any) => {
    if (swiper !== null && swiper !== undefined) {
      swiperRef.current = swiper;
    }
  }, []);

  const Comments = [
    {
      name: "درسا حیدری",
      profileImage: sliderFrame0,
      comment:
        "من مشکل بینایی داشتم. بعد از سه ماه رفتن به دکترهای دیگر به هیچ نتیجه‌‌ای نرسیدم. به آقای دکتر مکارمی مراجعه کردم و ایشان به بهترین نحو مشکل بینایی منو به صورت کامل برطرف کردن. از لطف و زحمات ایشون بسیار سپاسگزارم.",
      patientProblem: "عمل لیزیک",
    },
    {
      name: "امیر جعفری",
      profileImage: sliderFrame0,
      comment:
        "با عرض سلام و خسته نباشید. من مشکلی در تاری دید داشتم. به آقای دکتر راجعه کردم و پس از جلسه اول به من عینک پیشنهاد کردن. ایشون تشخیصشون بسیار خوب هست.",
      patientProblem: "عمل لیزیک",
    },
    {
      name: "محمد امیری",
      profileImage: sliderFrame0,
      comment:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، ",
      patientProblem: "عمل لیزیک",
    },
  ];
 

  return (
    <Swiper
      onSwiper={swiperRef}
      
      modules={[Navigation]}
      speed={1200}
      slidesPerView={1}
      slidesPerGroup={1}
    >
      {Comments.map((item) => {
        return (
          <SwiperSlide>
            <div className="w-full h-full flex items-end gap-[24px]">
              <div
                className="w-[258px] h-full rounded-full bg-gray"
                style={{
                  backgroundImage: `url(${item.profileImage.src})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <div className="w-[822px] h-[218px] flex flex-col">
                <div className="w-full h-[162px] flex gap-[24px] ">
                  <Image src={quote} alt="Logo" className="w-[70px] h-[70px]" />
                  <span className="w-[728px] h-full text-[14px] font-light text-right text-hardgreen">
                    {item.comment}
                  </span>
                </div>
                <div className="w-[704px] h-[56px] flex self-end ">
                  <div className="w-[616px] h-[46px] flex flex-col gap-[4px]">
                    <span className="w-full h-[24px] text-[16px] text-right font-normal text-black">
                      {item.name}
                    </span>
                    <p className="w-full h-[18px] text-[12px] text-right font-light text-[#757575] ">
                      {item.patientProblem}
                    </p>
                  </div>
                  <div className="w-[88px] h-full flex items-end gap-[8px] ">
                    <button
                      onClick={() => swiperRef.current?.slidePrev()}
                      className="w-[40px] h-[40px] flex items-center justify-center bg-green text-center rounded"
                    >
                      <Image src={arrowRight} alt="Logo" />
                    </button>
                    <button
                      onClick={() => swiperRef.current?.slideNext()}
                      className="w-[40px] h-[40px] flex items-center justify-center bg-green text-center rounded"
                    >
                      <Image src={arrowLeft} alt="Logo" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
