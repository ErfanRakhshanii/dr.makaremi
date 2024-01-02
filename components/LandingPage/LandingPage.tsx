"use client";
import Image from "next/image";
import sliderFrame1 from "../../public/Assets/Images/LandingPage/Body0/SliderFrame1.webp";
import doctorMakaremi from "../../public/Assets/Images/LandingPage/Body2/DoctorMakaremi.webp";
import line0 from "../../public/Assets/Images/LandingPage/Body2/Line0.webp";
import line1 from "../../public/Assets/Images/LandingPage/Body2/Line1.webp";
import girl from "../../public/Assets/Images/LandingPage/Body3/Girl.webp";
import warning from "../../public/Assets/Images/LandingPage/Body3/Warning.webp";
import arrow from "../../public/Assets/Images/LandingPage/Body5/Arrow.webp";
import doctor from "../../public/Assets/Images/LandingPage/Body5/Doctor.webp";
import arrow0 from "../../public/Assets/Images/LandingPage/Body6/Arrow.webp";
import Body1Cards from "./Body1Datas";
import Body3Cards from "./Body3Datas";
import CountUp from "react-countup";
import Body4Carousel from "./Body4Carousel";
import Body5Cards from "./Body5Datas";
import { useState } from "react";
import Body6Cards from "./Body6Datas";

export default function LandingPage() {
  const [Body5DropDown0, setBody5DropDown0] = useState(false);
  const [Body5DropDown1, setBody5DropDown1] = useState(false);
  const [Body5DropDown2, setBody5DropDown2] = useState(false);
  const [Body5DropDown3, setBody5DropDown3] = useState(false);
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
      <div className="w-[1224px] h-[522px] flex flex-col justify-center gap-[76px]">
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
          <div className="w-[742px] h-full flex flex-col justify-end gap-[16px]">
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
            <div className="w-full h-[30px]"></div>
          </div>
        </div>
      </div>
      {/* //////////Body4///////// */}
      <div className="w-[1247px] h-[383px] flex flex-col justify-end gap-[52px]">
        <div className="w-[214px] h-[36px] flex gap-[8px]">
          <Image src={line0} alt="Logo" />
          <p className="text-[24px] font-bold text-hardgreen">
            بیمه‌های طرف قرارداد
          </p>
        </div>
        <div className="w-full h-[231px] flex items-center bg-blue">
          {/* <Body4Carousel/> */}
        </div>
      </div>
      {/* //////////Body5///////// */}
      <div className="w-full h-[620px]  flex items-end" >
        <div className="w-full h-[580px] flex  ">
          <div className="w-[101px] h-full"></div>
          <div className="w-[498px] h-[361px] flex flex-col gap-[32px] ">
            <div className="w-full h-[36px] flex gap-[8px] ">
              <Image src={line0} alt="Logo" />
              <p className="text-[24px] font-bold text-hardgreen">
                سوالات متداول
              </p>
            </div>
            <div className="w-full h-[288px] ">
              <div
                className="w-full h-[72px] flex items-center justify-center gap-[64px] cursor-pointer bg-red"
                onClick={() => {
                  Body5DropDown0 === false
                    ? setBody5DropDown0(true)
                    : setBody5DropDown0(false);
                }}
              >
                <span>بعد از عمل لازک چشم چه علایم موقتی پدیدار می شود؟</span>
                <Image
                  src={arrow}
                  alt="Logo"
                  style={{ rotate: Body5DropDown0 === true ? "270deg" : "" }}
                  className="duration-500"
                />
              </div>
              {Body5DropDown0 && (
                <div className="w-full h-[45px] flex items-center justify-center bg-white">
                  بعدش تا یک هفته جق ممنوع
                </div>
              )}
              <div
                className="w-full h-[72px] flex items-center justify-center gap-[64px] cursor-pointer"
                onClick={() => {
                  Body5DropDown1 === false
                    ? setBody5DropDown1(true)
                    : setBody5DropDown1(false);
                }}
              >
                <span>بعد از عمل لازک چشم چه علایم موقتی پدیدار می شود؟</span>
                <Image
                  src={arrow}
                  alt="Logo"
                  style={{ rotate: Body5DropDown1 === true ? "270deg" : "" }}
                  className="duration-500"
                />
              </div>
              {Body5DropDown1 && (
                <div className="w-full h-[45px] flex items-center justify-center bg-white">
                  بعدش تا یک هفته جق ممنوع
                </div>
              )}
              <div
                className="w-full h-[72px] flex items-center justify-center gap-[64px] cursor-pointer"
                onClick={() => {
                  Body5DropDown2 === false
                    ? setBody5DropDown2(true)
                    : setBody5DropDown2(false);
                }}
              >
                <span>بعد از عمل لازک چشم چه علایم موقتی پدیدار می شود؟</span>
                <Image
                  src={arrow}
                  alt="Logo"
                  style={{ rotate: Body5DropDown2 === true ? "270deg" : "" }}
                  className="duration-500"
                />
              </div>
              {Body5DropDown2 && (
                <div className="w-full h-[45px] flex items-center justify-center bg-white">
                  بعدش تا یک هفته جق ممنوع
                </div>
              )}
              <div
                className="w-full h-[72px] flex items-center justify-center gap-[64px] cursor-pointer"
                onClick={() => {
                  Body5DropDown3 === false
                    ? setBody5DropDown3(true)
                    : setBody5DropDown3(false);
                }}
              >
                <span>بعد از عمل لازک چشم چه علایم موقتی پدیدار می شود؟</span>
                <Image
                  src={arrow}
                  alt="Logo"
                  style={{ rotate: Body5DropDown3 === true ? "270deg" : "" }}
                  className="duration-500"
                />
              </div>
              {Body5DropDown3 && (
                <div className="w-full h-[45px] flex items-center justify-center bg-white">
                  بعدش تا یک هفته جق ممنوع
                </div>
              )}
            </div>
          </div>
          <div className="w-[324px] h-full "></div>
          <div className="w-[387px] h-full flex items-end">
            <Image src={doctor} alt="Logo" />
          </div>
        </div>
      </div>
      {/* //////////Body6///////// */}
      <div className="w-full h-[592px] flex flex-col justify-end items-center ">
        <div className="w-full h-[36px] flex gap-[8px] ">
          <Image src={line0} alt="Logo" />
          <span className="text-[24px] font-bold text-hardgreen">
            بلاگ و مقالات
          </span>
        </div>
        <div className="w-[1224px] h-[25px] flex justify-end  ">
          <div className="w-[92px] h-full flex items-center gap-[8px] cursor-pointer">
            <span className="text-[14px] font-medium text-[#83DCD6]">
              مشاهده همه
            </span>
            <Image src={arrow0} alt="Logo" />
          </div>
        </div>
        <div className="w-full h-[20px] "></div>
        <div className="w-[1224px] h-[461px] flex  gap-[79px]">
          {Body6Cards.map((item, index) => {
            return (
              <div className="w-[347px] h-[461px] flex flex-col items-center gap-[12.5px] rounded-[10px] bg-red cursor-pointer">
                <div className="w-[346px] h-[346px]  flex items-center justify-center">
                  <Image
                    src={item.mainFrame}
                    alt="Logo"
                    className="w-[313px] h-[313px] rounded-[10px]"
                  />
                </div>
                <div className="w-[327px] h-[101px] flex flex-col gap-[24px] ">
                  <div className="w-full h-[41px] flex flex-col">
                    <span className="text-[16px] font-bold text-hardgreen">
                      {item.subject}
                    </span>
                    <span className="text-[12px] font-light text-darkblue">
                      {item.summary}
                    </span>
                  </div>
                  <div className="w-[326px] h-[36px] flex items-center gap-[122px]">
                    <div className="w-[137px] h-full flex items-center gap-[8px]">
                      <Image src={item.timerLogo} alt="Logo" />
                      <span className="text-[12px] font-medium text-[#757575]">
                        {item.time}
                      </span>
                    </div>
                    <div className="w-[67px] h-full flex items-center gap-[8px]">
                      <Image src={item.notifLogo} alt="Logo" />
                      <span className="text-[12px] font-medium text-[#757575]">
                        {item.notif}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* //////////Body7///////// */}
      <div className="w-full h-[313px] flex items-end ">
        <div className="w-full h-[202px] flex items-center ">
          <div className="w-[1213px] h-[153px] flex items-center absolute border-y border-l border-green rounded-[10px]">
            <div className="w-[108px] h-full"></div>
            <div className="w-[800px] h-[102px] flex flex-col gap-[18px] ">
              <span className="text-[32px] font-bold text-hardgreen">
                هم اکنون عضو خانوادۀ بزرگ کلینیک دکتر مکارمی شوید!
              </span>
              <span className="text-[20px] font-bold text-hardgreen">
                وب اپلیکیشن دکتر مکارمی قابل نصب بر روی تمامی اپلیکیشن‌ها
              </span>
            </div>
          </div>
          <button className="w-[255px] h-[92px] flex items-center justify-center rounded-[10px] bg-green relative right-[1073px]">
            <span className="w-[131px] h-[60px] text-[20px] font-normal text-hardgreen">
              رزرو نوبت آنلاین در وب اپلیکیشن
            </span>
          </button>
        </div>
      </div>
      {/* //////////Body8///////// */}
      <div className="w-full h-[211px] flex items-end justify-center">
        <div className="w-[1224px] h-[58px] flex items-center justify-center  gap-[30px] ">
          <div className="w-[392.5px] h-[1px] bg-green"></div>
          <span className="w-[403px] h-[54px] text-[32px] font-bold text-hardgreen">
            کلینیک دکتر مکارمی از دید شما
          </span>
          <div className="w-[392.5px] h-[1px] bg-green"></div>
        </div>
      </div>
      {/* //////////Body9///////// */}
      <div className="w-full h-[385px]"></div>
      {/* //////////Body10///////// */}
      <div className="w-full h-[566px] flex items-end justify-center ">
        <div className="w-[860px] h-[482px] flex flex-col items-center gap-[43px] ">
          <span className="w-[386px] h-[30px] text-[20px] font-bold text-hardgreen">
            شما میتوانید در این قسمت با ما در تماس باشید
          </span>
          <div className="w-full h-[409px] flex flex-col items-center ">
            <div className="w-[860px] h-[66px] flex gap-[28px] ">
              <input
                type="text"
                placeholder="مثال: عرفان رخشانی"
                className="w-[415px] h-full rounded-[5px] border border-gray pr-[19px] outline-none placeholder:text-gray placeholder:text-[14px] placeholder:font-ligh"
              ></input>
              <input
                type="text"
                placeholder="مثال: 09301296586"
                className="w-[415px] h-full rounded-[5px] border border-gray pr-[19px] outline-none placeholder:text-gray placeholder:text-[14px] placeholder:font-light"
              ></input>
            </div>
            <span className="w-full h-[28px] text-[14px] font-light relative bottom-[60px] right-[21px]">
              نام و نام خانوادگی
            </span>

            <textarea
              placeholder="پیام خود را در اینجا بنویسید ..."
              className="w-[860px] h-[220px] rounded-[5px] outline-none resize-none border border-gray pt-[20px] pr-[20px]  placeholder:text-gray placeholder:text-[16px] placeholder:font-medium"
            ></textarea>
            <span className="w-full h-[28px] text-[14px] font-light relative bottom-[310px] right-[463px]">
              شماره تلفن
            </span>
            <button className="w-[248px] h-[66px] flex items-center justify-center rounded-[8px] text-[16px] font-medium text-softgreen border border-softgreen">
              ثبت نظر
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
