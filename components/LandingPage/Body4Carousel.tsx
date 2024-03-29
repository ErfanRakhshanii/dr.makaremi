"use client";
import React, { use, useEffect, useState } from "react";
import pic0 from "../../public/Assets/Images/LandingPage/Body4/BimeDana.webp";
import pic1 from "../../public/Assets/Images/LandingPage/Body4/BimeKhadamatdarmani.webp";
import pic2 from "../../public/Assets/Images/LandingPage/Body4/BimeMoalem.webp";
import pic3 from "../../public/Assets/Images/LandingPage/Body4/BimeRazi.webp";
import pic4 from "../../public/Assets/Images/LandingPage/Body4/BimeSalamat.webp";
import pic5 from "../../public/Assets/Images/LandingPage/Body4/BimeSina.webp";
import pic6 from "../../public/Assets/Images/LandingPage/Body4/BimeTosee.webp";
import Image from "next/image";
import "./styles.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import axios from "axios";

export default function Body4Carousel() {
  const [body4Data, setBody4Data] = useState<Body4DataTypes[] | null>(null);
  console.log(body4Data);
  interface Body4DataTypes {
    id: number;
    name: string;
    site_url: string;
    image: {
      [key: string]: {
        name: string;
        file_name: string;
        uuid: string;
        preview_url: string;
        original_url: string;
        order: number;
        custom_properties: any[];
        extension: string;
        size: number;
      };
    };
  }
  useEffect(() => {
    const FetchBody4Data = async () => {
      try {
        const Response = await axios.get(
          "https://drmakaremi.v1r.ir/api/insurances"
        );
        const JsonData = await Response.data;
        console.log(JsonData);
        setBody4Data(JsonData.data);
        console.log(JsonData.data);
      } catch (error) {
        console.error("Body4 fetching data:", error);
      }
    };
    FetchBody4Data();
  }, []);

  const Insurances = [
    {
      logo: pic1,
      name: "بیمه خدمات درمانی",
    },
    {
      logo: pic0,
      name: "بیمه دانا",
    },
    {
      logo: pic2,
      name: "بیمه معلم",
    },
    {
      logo: pic3,
      name: "بیمه رازی",
    },
    {
      logo: pic4,
      name: "بیمه سلامت",
    },
    {
      logo: pic5,
      name: "بیمه سینا",
    },
    {
      logo: pic6,
      name: "بیمه توسعه",
    },
    {
      logo: pic6,
      name: "بیمه توسعه",
    },
    {
      logo: pic6,
      name: "بیمه توسعه",
    },
    {
      logo: pic6,
      name: "بیمه توسعه",
    },
    {
      logo: pic6,
      name: "بیمه توسعه",
    },
    {
      logo: pic6,
      name: "بیمه توسعه",
    },
  ];
  return (
    <div className="w-full h-full">
      <Swiper
        navigation={true}
        slidesPerView={6.35}
        speed={1200}
        modules={[Navigation]}
        slidesPerGroup={5.1}
        // scrollbar={true}
      >
        {Insurances.map((item) => {
          return (
            <SwiperSlide>
              <div className="cursor-pointer w-[158px] h-[196px] flex flex-col items-center justify-around duration-500 rounded-[10px] hover:shadow-[0px_2px_6px_rgb(0,0,0,0.20)] hover:bg-white">
                <Image alt="Logo" src={item.logo}></Image>
                <span>{item.name}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      {/* <Swiper
        navigation={true}
        slidesPerView={6.35}
        speed={1200}
        modules={[Navigation]}
        slidesPerGroup={5.1}
        // scrollbar={true}
      >
        {body4Data.map((item) => {
          return (
            <SwiperSlide>
              <div className="cursor-pointer w-[158px] h-[196px] flex flex-col items-center justify-around duration-500 rounded-[10px] hover:shadow-[0px_2px_6px_rgb(0,0,0,0.20)] hover:bg-white">
                <Image alt="Logo" src={item}></Image>
                <span>{item}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper> */}
    </div>
  );
}
