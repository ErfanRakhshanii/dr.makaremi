"use client";
import Image from "next/image";
import sliderFrame1 from "../../public/Assets/Images/LandingPage/Body0/SliderFrame1.webp";
import doctorMakaremi from "../../public/Assets/Images/LandingPage/Body2/DoctorMakaremi.webp";
import line0 from "../../public/Assets/Images/LandingPage/Body2/Line0.webp";
import line1 from "../../public/Assets/Images/LandingPage/Body2/Line1.webp";
import girl from "../../public/Assets/Images/LandingPage/Body3/Girl.webp";
import warning from "../../public/Assets/Images/LandingPage/Body3/Warning.webp";
import Body1Cards from "./Body1Datas";
import Body3Cards from "./Body3Datas";
import CountUp from "react-countup";

export default function LandingPage() {
  return (
    <main className="max-w-[1440px] w-full h-[5627px] flex flex-col items-center">
      {/* //////////Body0////////// */}
      <div className="w-full h-[719px] bg-blue">
        <Image src={sliderFrame1} alt="Slider" />
      </div>
      {/* //////////Body1////////// */}
      <div className="w-full h-[222px] flex items-center justify-center gap-[32px] my-[-20px]">
        {Body1Cards.map((item, index) => {
          return (
            <div className="w-[222px] h-full bg-[#fff] flex flex-col items-center justify-center rounded-[12.322px] z-20">
              <Image src={item.logo} alt="Logo" width={32} height={32} />
              <div className="w-full h-[8px]"></div>
              <div className="w-full h-[24px] flex items-center justify-center text-[16px] font-bold text-hardgreen">
                {item.issue}
              </div>
              <CountUp
                enableScrollSpy
                end={item.number}
                duration={1.5}
                className="text-[56px] font-bold text-[#190C5D]"
              />
            </div>
          );
        })}
      </div>
      {/* //////////Body2///////// */}
      <div className="w-full h-[530px] flex flex-col justify-center items-end ">
        <div className="w-full h-[401.499px] flex items-end justify-center gap-[208px] mt-[68px]">
          <div className="w-[679px] h-full flex flex-col gap-[32px] ">
            <div className="w-[89px] h-[36px] flex items-center gap-[8px] ">
              <Image src={line0} alt="Logo" />
              <h1 className="text-[24px] font-bold text-hardgreen">بیوگرافی</h1>
            </div>
            <span className="w-[144px] h-[30px] flex justify-end items-center text-[20px] font-bold text-softgreen">
              دکتر علی مکارمی
            </span>
            <div className="w-[617px] h-[215px] flex items-center justify-center self-end rounded-[15.332px] bg-red">
              <ul className="list-disc list-inside w-[585.496px] h-[183.028px] flex flex-col gap-[24px] text-[16px] font-normal text-hardgreen">
                <p>تجارب و تحصیلات</p>
                <li>
                  گذراندن دوره پیشرفته جراحی شبکیه در کشور آلمان زیرنظر پروفسور
                  ایکارت
                </li>
                <li>
                  دوره تکمیلی تومورها و سرطان ‌های چشم در دانشگاه علوم‌پزشکی
                  ایران
                </li>
                <li>شرکت در کنگره‌های داخلی و خارجی در کشورهای مختلف</li>
              </ul>
            </div>
          </div>
          <Image src={doctorMakaremi} alt="Logo" />
        </div>
        <div className="w-full h-[60px] flex items-end ">
          <Image src={line1} alt="Logo" />
        </div>
      </div>
      {/* //////////Body3///////// */}
      <div className="w-[1224px] h-[522px] flex flex-col justify-center gap-[76px] ">
        <div className="w-[190px] h-[36px] flex gap-[8px] ">
          <Image src={line0} alt="Logo" />
          <p className="text-[24px] font-bold text-hardgreen">
            روز های کاری مطب
          </p>
        </div>
        <div className="w-full h-[362px] flex gap-[42px] ">
          <div className="w-[454px] h-[298px]">
            <Image src={girl} alt="Logo" />
          </div>
          <div className="w-[742px] h-[216px] flex flex-col self-end gap-[16px] ">
            <div className="w-full h-[176px] flex gap-[16px] ">
              {Body3Cards.map((item, index) => {
                return (
                  <div className="w-[136px] h-[176px] flex items-center justify-center rounded-[12.55px] bg-verysoftgreen">
                    <div className="w-[107px] h-[98px] flex flex-col items-center justify-between text-[16px] font-normal text-darkblue ">
                      <p>{item.days}</p>
                      <p>{item.time}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="w-[468px] h-[24px] flex items-center gap-[16px] ">
              <Image src={warning} alt="Logo" />
              <p className="text-[16px] font-normal text-hardgreen">
                روزهای کاری ثابت نیستند و بر اساس شرایط ممکن است تغییر کنند.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* //////////Body4///////// */}
    </main>
  );
}
