// "use client";
// import BimeDana from "../../public/Assets/Images/LandingPage/Body4/BimeDana.webp";
// import BimeKhadamatdarmani from "../../public/Assets/Images/LandingPage/Body4/BimeKhadamatdarmani.webp";
// import BimeMoalem from "../../public/Assets/Images/LandingPage/Body4/BimeMoalem.webp";
// import BimeRazi from "../../public/Assets/Images/LandingPage/Body4/BimeRazi.webp";
// import BimeSalamat from "../../public/Assets/Images/LandingPage/Body4/BimeSalamat.webp";
// import BimeSina from "../../public/Assets/Images/LandingPage/Body4/BimeSina.webp";
// import BimeTosee from "../../public/Assets/Images/LandingPage/Body4/BimeTosee.webp";
// import arrow from "../../public/Assets/Images/LandingPage/Body4/Arrow.webp";
// import Image from "next/image";
// import { Swiper, SwiperSlide } from "swiper/react";
// export default function Body4Carousel() {
//   const SliderPics = [
//     { bime: "بیمه سلامت ایران", logo: BimeSalamat },
//     { bime: "بیمه خدمات درمانی", logo: BimeKhadamatdarmani },
//     { bime: "بیمه رازی", logo: BimeRazi },
//     { bime: "بیمه معلم", logo: BimeMoalem },
//     { bime: "بیمه توسعه", logo: BimeTosee },
//     { bime: "بیمه دانا", logo: BimeDana },
//     { bime: "بیمه سینا", logo: BimeSina },
//     { bime: "بیمه سینا", logo: BimeSina },
//     { bime: "بیمه سینا", logo: BimeSina },
//     { bime: "بیمه سینا", logo: BimeSina },
//     { bime: "بیمه سینا", logo: BimeSina },
//     { bime: "بیمه سینا", logo: BimeSina },
//   ];
//   return (
//     <Swiper
//       className="w-full  bg-red"
//     //   spaceBetween={50}
//     //   slidesPerView={3}
//     //   slidesPerColumnFill="row"
//     slidesPerView={3} // or 'auto'
//     // slidesPerColumn={2}
//     slidesPerGroup={3}
//     spaceBetween={5}
//     // slidesPerColumnFill="row"
//     grabCursor={true}
//     autoplay={{ delay: 3000 }}
//     navigation
//       onSlideChange={() => console.log("slide change")}
//       onSwiper={(swiper) => console.log(swiper)}
//     >
//       <SwiperSlide className="flex">
//         <Image src={BimeSina} alt="Logo"/>
//       </SwiperSlide>
//       <SwiperSlide>
//         <Image src={BimeSina} alt="Logo"/>
//       </SwiperSlide>
//       {/* <SwiperSlide>
//         <Image src={BimeSina} alt="Logo"/>
//       </SwiperSlide>
//       <SwiperSlide>
//         <Image src={BimeSina} alt="Logo"/>
//       </SwiperSlide> */}
//     </Swiper>
//     // <Swiper>
//     //   {SliderPics.map((item, index) => (
//     //     <SwiperSlide>
//     //       <div className="w-[158px] h-[196px] flex flex-col items-center justify-around rounded-[16px] duration-500  hover:bg-red">
//     //         <Image src={item.logo} alt="Logo" />
//     //         <p className="text-[18px] font-light">{item.bime}</p>
//     //       </div>
//     //     </SwiperSlide>
//     //   ))}
//     // </Swiper>
//   );
// }
