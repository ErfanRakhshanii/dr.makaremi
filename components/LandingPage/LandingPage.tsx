"use client";
import Image from "next/image";
import doctorMakaremi from "../../public/Assets/Images/LandingPage/Body2/DoctorMakaremi.webp";
import line0 from "../../public/Assets/Images/LandingPage/Body2/Line0.webp";
import line1 from "../../public/Assets/Images/LandingPage/Body2/Line1.png";
import girl from "../../public/Assets/Images/LandingPage/Body3/Girl.webp";
import warning from "../../public/Assets/Images/LandingPage/Body3/Warning.webp";
import arrow from "../../public/Assets/Images/LandingPage/Body5/Arrow.webp";
import doctor from "../../public/Assets/Images/LandingPage/Body5/Doctor.webp";
import arrow0 from "../../public/Assets/Images/LandingPage/Body6/Arrow.webp"
import line from "../../public/Assets/Images/LandingPage/Body6/Line0.webp"
import Body1Cards from "./Body1Datas";
import Body3Cards from "./Body3Datas";
import CountUp from "react-countup";
import { useEffect, useState } from "react";
import Body6Cards from "./Body6Datas";
import Body4Carousel from "./Body4Carousel";
import Body0Carousel from "./Body0/Body0Carousel";
import Body9Carousel from "./Body9Carousel";
import axios from "axios";
import jalaliMoment from "jalali-moment";
import { useParams } from "next/navigation";
import Link from "next/link";
import LandingpageBody0 from "./Body0/Body0";


export default function LandingPage() {
  const [Body5DropDown0, setBody5DropDown0] = useState(false);
  const [Body5DropDown1, setBody5DropDown1] = useState(false);
  const [Body5DropDown2, setBody5DropDown2] = useState(false);
  const [Body5DropDown3, setBody5DropDown3] = useState(false);
  const [body3Data, setBody3Data] = useState<Body3DataTypes[] | null>(null);
  const [body5Data, setBody5Data] = useState<Body5DataTypes[] | null>(null);

  interface Body3DataTypes {
    date: string;
  }
  interface Body5DataTypes {
    question: string,
    answer: string
  }


  useEffect(() => {
    const FetchBody3Data = async () => {
      try {
        const Response = await axios.get(
          "https://drmakaremi.v1r.ir/api/work-days"
        );
        const JsonData = await Response.data;
        setBody3Data(JsonData.data);
      } catch (error) {
        console.error("Body3 fetching data:", error);
      }
    };
    FetchBody3Data();
  }, []);
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
    <main className="max-w-[1440px] w-full h-[5242px] flex flex-col items-center">
      {/* //////////Body0////////// */}
     <LandingpageBody0/>
      {/* //////////Body1////////// */}
      <div className="w-full h-[222px] flex items-center justify-center gap-[32px] my-[-20px]">
        {Body1Cards.map((item) => {
          return (
            <div className="w-[222px] h-full flex flex-col items-center justify-center bg-white shadow-[0px_30px_60px_0px_rgb(37,37,37,0.15)]  rounded-[12.322px] z-20">
              <Image src={item.logo} alt="Logo" width={32} height={32} />
              <div className="w-full h-[8px]"></div>
              <div className="w-full h-[24px] flex items-center justify-center text-[16px] font-bold text-hardgreen">
                {item.issue}
              </div>
              <CountUp
                enableScrollSpy
                end={item.number}
                duration={1.7}
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
            <div className="w-[617px] h-[215px] flex items-center justify-center self-end shadow-[-2px_16px_26px_rgb(199,182,182,0.20)] rounded-[15.332px]  ">
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
        <div className="w-full h-[60px]  mt-[-15px]">
          <Image src={line1} alt="Logo" />
        </div>
      </div>
      {/* //////////Body3///////// */}
      <div className="w-[1224px] h-[522px] flex flex-col justify-center gap-[76px]">
        <div className="w-[99.3%] h-[36px] flex self-end gap-[8px] ">
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
            {body3Data ? (
              <div className="w-full h-[176px] flex gap-[16px]">
                {body3Data.map((item, index) => {
                  const iranianDate = jalaliMoment(item.date).locale('fa').format(
                    "jYYYY/jM/jD"
                  );
                  
                  const dayName = jalaliMoment(item.date).locale('fa').format('dddd'); 
                  return (
                    <div
                      key={index}
                      className="w-[136px] h-[176px] flex items-center justify-center bg-verysoftgreen rounded-[12.55px] shadow-[ 0px_4px_9px_0px_rgb(0, 0, 0, 0.02), 0px_16px_16px_0px_rgb(0, 0, 0, 0.02), 0px_37px_22px_0px_rgb(0, 0, 0, 0.01), 0px_66px_26px_0px_rgb(0, 0, 0, 0.00), 0px_103px_29px_0px_rgb(0, 0, 0, 0.00)]"
                    >
                      <div className="w-[107px] h-[98px] flex flex-col items-center justify-between text-[16px] font-normal text-darkblue ">
                        <p>{dayName}</p>
                        <p>{iranianDate}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              ""
            )}

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
        <div className="w-[98.5%] h-[36px] flex self-end gap-[8px] ">
          <Image src={line0} alt="Logo" />
          <p className="text-[24px] font-bold text-hardgreen">
            بیمه‌های طرف قرارداد
          </p>
        </div>
        <div className="w-full h-[231px] flex gap-[24px]">
          <div className="w-[0px]"></div>
          <Body4Carousel />
        </div>
      </div>
      {/* //////////Body5///////// */}
      <div className="w-full h-[620px]  flex items-end bg-[url('../public/Assets/Images/LandingPage/Body5/Vector.png')]">
        <div className="w-full h-[580px] flex  ">
          <div className="w-[60px] h-full"></div>
          <div className="w-[506px] h-[361px] flex flex-col gap-[32px]">
            <div className="w-[96.2%] h-[36px] flex self-end gap-[8px]  relative left-[9px] ">
              <Image src={line0} alt="Logo" />
              <p className="text-[24px] font-bold text-hardgreen">
                سوالات متداول
              </p>
            </div>
            <div className="w-full h-[288px] flex flex-col items-end rounded-[15px] bg-white">
              <div
                className="w-[498px] h-[72px] flex flex-col items-center justify-center cursor-pointer "
                onClick={() => {
                  if (!Body5DropDown0) {
                    setBody5DropDown0(true);
                    setBody5DropDown1(false);
                    setBody5DropDown2(false);
                    setBody5DropDown3(false);
                  } else {
                    setBody5DropDown0(false);
                  }
                }}
              >
                <div className="w-full h-[71px] flex items-center justify-center gap-[64px] ">
                  <span>بعد از عمل لازک چشم چه علایم موقتی پدیدار می شود؟</span>
                  <Image
                    src={arrow}
                    alt="Logo"
                    style={{ rotate: Body5DropDown0 === true ? "270deg" : "" }}
                    className="duration-500"
                  />
                </div>
                <div className="w-[417px] h-[1px] bg-gray" />
              </div>

              {Body5DropDown0 && (
                <div className="w-full h-[45px] flex items-center justify-center bg-white">
                  بعدش تا یک هفته جق ممنوع
                </div>
              )}
              <div
                className="w-[498px] h-[72px] flex flex-col items-center justify-center cursor-pointer "
                onClick={() => {
                  if (!Body5DropDown1) {
                    setBody5DropDown1(true);
                    setBody5DropDown0(false);
                    setBody5DropDown2(false);
                    setBody5DropDown3(false);
                  } else {
                    setBody5DropDown1(false);
                  }
                }}
              >
                <div className="w-full h-[71px] flex items-center justify-center gap-[64px] ">
                  <span>بعد از عمل لازک چشم چه علایم موقتی پدیدار می شود؟</span>
                  <Image
                    src={arrow}
                    alt="Logo"
                    style={{ rotate: Body5DropDown1 === true ? "270deg" : "" }}
                    className="duration-500"
                  />
                </div>
                <div className="w-[417px] h-[1px] bg-gray" />
              </div>

              {Body5DropDown1 && (
                <div className="w-full h-[45px] flex items-center justify-center bg-white">
                  بعدش تا یک هفته جق ممنوع
                </div>
              )}
              <div
                className="w-[498px] h-[72px] flex flex-col items-center justify-center cursor-pointer "
                onClick={() => {
                  if (!Body5DropDown2) {
                    setBody5DropDown2(true);
                    setBody5DropDown0(false);
                    setBody5DropDown1(false);
                    setBody5DropDown3(false);
                  } else {
                    setBody5DropDown2(false);
                  }
                }}
              >
                <div className="w-full h-[71px] flex items-center justify-center gap-[64px] ">
                  <span>بعد از عمل لازک چشم چه علایم موقتی پدیدار می شود؟</span>
                  <Image
                    src={arrow}
                    alt="Logo"
                    style={{ rotate: Body5DropDown2 === true ? "270deg" : "" }}
                    className="duration-500"
                  />
                </div>
                <div className="w-[417px] h-[1px] bg-gray" />
              </div>

              {Body5DropDown2 && (
                <div className="w-full h-[45px] flex items-center justify-center bg-white">
                  بعدش تا یک هفته جق ممنوع
                </div>
              )}
              <div
                className="w-[498px] h-[72px] flex flex-col items-center justify-center cursor-pointer "
                onClick={() => {
                  if (!Body5DropDown3) {
                    setBody5DropDown3(true);
                    setBody5DropDown0(false);
                    setBody5DropDown1(false);
                    setBody5DropDown2(false);
                  } else {
                    setBody5DropDown3(false);
                  }
                }}
              >
                <div className="w-full h-[71px] flex items-center justify-center gap-[64px] ">
                  <span>بعد از عمل لازک چشم چه علایم موقتی پدیدار می شود؟</span>
                  <Image
                    src={arrow}
                    alt="Logo"
                    style={{ rotate: Body5DropDown3 === true ? "270deg" : "" }}
                    className="duration-500"
                  />
                </div>
                <div className="w-[417px] h-[1px] bg-gray" />
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
      <div>
      <div className="w-full h-[592px] flex flex-col justify-end items-center ">
        <div className="w-[89.7%] h-[36px]  flex gap-[8px] ">
          <Image src={line} alt="Logo" />
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
              <Link href={`/${item.id}`}>
                <div
                  key={index}
                  className="w-[347px] h-[461px] flex flex-col items-center gap-[12.5px] rounded-[10px] shadow-[0px_4px_10px_0px_rgb(0,0,0,0.07)] cursor-pointer"
                >
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
              </Link>
            );
          })}
        </div>
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
          <button className=" w-[255px] h-[92px] flex items-center justify-center rounded-[10px] bg-green relative right-[1073px] duration-500 hover:shadow-[0px_30px_60px_0px_rgb(36,37,37,0.15)] ">
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
      <div className="w-[1104px] h-[258px] mt-[85px]">
        <Body9Carousel />
      </div>
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
