import React, { useEffect, useState } from 'react'
import arrow from "../../public/Assets/Images/LandingPage/Body5/Arrow.webp";
import Image from 'next/image';
import axios from 'axios';
export default function Body5Datas({ question, answer } : { question: string; answer: string }) {
  const [Body5DropDown0, setBody5DropDown0] = useState(false);
  const [body5Data, setBody5Data] = useState<Body5DataTypes[] | null>(null);
  interface Body5DataTypes {
    question: string,
    answer: string
  }
  useEffect(() => {
    const FetchBody5Data = async () => {
      try {
        const Response = await axios.get(
          "https://drmakaremi.v1r.ir/api/questions"
        );
        const JsonData = await Response.data;
        setBody5Data(JsonData.data);
      } catch (error) {
        console.error("Body5 fetching data:", error);
      }
    };
    FetchBody5Data();
  }, []);
    return (
        <div className="w-[498px] h-[72px] flex flex-col items-center justify-center cursor-pointer">
          <div className="w-full h-[71px] flex items-center justify-center gap-[64px] ">
            <span>{question}</span>
            <Image
              src={arrow}
              alt="Logo"
              style={{ rotate: Body5DropDown0 === true ? "270deg" : "" }}
              className="duration-500"
            />
          </div>
          <div className="w-[417px] h-[1px] bg-gray" />
          <div className="w-full h-[45px] flex items-center justify-center bg-white">{answer}</div>
        </div>
      );
}

  