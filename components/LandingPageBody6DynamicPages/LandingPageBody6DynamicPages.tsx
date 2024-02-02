"use client";
import { useParams } from "next/navigation";
import React from "react";
import Body6Cards from "../LandingPage/Body6Datas";
import timer from "../../public/Assets/Images/LandingPage/Body6/Timer.webp";
import Image from "next/image";

export default function LandingPageBody6DynamicPages() {
  const params = useParams();
  const courseInfos = Body6Cards.find((item) => {
    return +params.id === item.id;
  });
  return (
    <div className="w-screen h-[1951px] flex flex-col items-center">
      <div className="w-[1300px] h-[1256px] flex items-end bg-blue">
        <div className="w-full h-[1064px] flex gap-[47px] bg-indigo">
          <div className="w-[504px] h-full flex flex-col gap-[79px] bg-green">
            <div className="w-full h-[72px] flex flex-col gap-2 bg-black">
              <span className="w-full h-12 text-[#00626A] text-[32px] font-bold">
                {courseInfos && courseInfos.subject}
              </span>
              <div className="w-full h-4 flex gap-2">
                <Image src={timer} alt="Logo" className="w-4 h-4" />
                <p className="text-[12px] text-[#757575] font-medium">
                  {courseInfos && courseInfos.time}
                </p>
              </div>
            </div>
            <div className="w-full h-[902px] text-[#404040] text-[16px] font-medium bg-black">
              {courseInfos && courseInfos.text}
            </div>
          </div>
          <div className="w-[749px] h-full rounded-[20px] bg-[url(../public/Assets/Images/LandingPage/Body6/Pic6.png)]"></div>
        </div>
      </div>
      <div className="w-[1300px] h-[613px] flex items-end gap-[149px] bg-red">
        <div className="w-[649px] h-[494px] flex flex-col text-hardgreen text-[18px] font-bold bg-blue">
          <span className="w-full h-[28px]">
            شما میتوانید در این قسمت با ما در تماس باشید
          </span>
          <div className="w-full h-[39px] bg-white">
            <span className="text-black text-xs font-light relative right-[20px] top-[45px] z-50">
              نام و نام خانوادگی
            </span>
          </div>
          <div className="w-full h-[55px] flex gap-[14px] bg-red">
            <input
              placeholder="مثال: عرفان رخشانی"
              className="w-[316px] h-full rounded border border-gray outline-none text-xs font-semibold pr-[18px] pt-6  placeholder:text-gray placeholder:text-xs text-black placeholder:font-semibold"
              type="text"
            />
            <input
              placeholder="مثال: 09301296586"
              className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none w-[316px] h-full rounded border border-gray outline-none text-xs font-semibold text-black pr-[18px] pt-6  placeholder:text-gray placeholder:text-xs placeholder:font-semibold"
              type="number"
            />
          </div>
          <div className="w-full h-[31px] bg-white">
            <span className="text-black text-xs font-semibold relative right-[350px] bottom-[50px] z-50">
              شماره تلفن
            </span>
          </div>
          <textarea
            className="w-[648px] h-[262px] text-black outline-none resize-none rounded border border-gray pr-[18px] pt-[18px] placeholder:text-[14px] placeholder:text-[#757575] placeholder:font-medium  "
            placeholder="پیام های خود را در اینجا بنویسید..."
          ></textarea>
          <div className="w-full h-[25px] bg-black"></div>
          <button className="w-[227px] h-[52px] flex self-center items-center justify-center outline-none border border-softgreen text-[14px] font-medium text-softgreen rounded-lg duration-500 hover:bg-softgreen hover:text-white">
            ثبت نظر
          </button>
        </div>
        <div className="w-[502px] h-[494px] bg-black">chap</div>
      </div>
      <div className="w-full h-[112px]"></div>
    </div>
  );
}
