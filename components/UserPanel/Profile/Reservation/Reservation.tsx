"use client";
import React, { useState } from "react";
import ArrowDown from "../../../../public/Assets/Images/UserPanel/Profile/arrDown.svg";
import Image from "next/image";
import SelectMonth from "./SelectMonth";
import SeelctDay from "./SelectDay";
import SelectYear from "./SelectYear";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/components/Redux/Store";
import {
  addPerson,
  fillInputs,
  getCity,
  getCode,
  getFristName,
  getLastName,
  getSelectedPerson,
} from "@/components/Redux/Slice";

export default function ReservationPage() {
  const dispatch = useDispatch();

  const select = useSelector((state: RootState) => state.MakaremiReducer);

  const [open, setOpen] = useState(false);

  return (
    <div
      className="max-w-[1440px] h-full w-full flex flex-col"
      onClick={() => {
        setOpen(false);
      }}
    >
      <div className="w-full h-[100px] flex items-center justify-center">
        <div className="h-[54px] w-[1002px] flex items-center justify-center gap-[30px]">
          <div className="h-[1px] w-[300px] bg-[#064247]" />
          <div className="text-[32px] font-bold text-[#064247]">
            نوبت‌دهی دکتر مکارمی
          </div>
          <div className="h-[1px] w-[300px] bg-[#064247]" />
        </div>
      </div>
      <div className="w-full h-[120px] flex flex-col items-center justify-evenly">
        <div className="h-[48px] w-[85.5%] flex items-center justify-around">
          <div className="h-full w-[350px] text-base font-normal text-[#0D0630]">
            لیست مراجعین ثبت شده با شماره{" "}
            <strong className="text-green font-normal">۰۹۱۱۲۳۴۵۶۷۸</strong>{" "}
            <br /> لطفا جهت نوبت گرفتن، فرد موردنظر را انتخاب کنید.
          </div>
          <div className="h-[31px] w-[115px] flex items-center justify-around">
            <div
              className="w-[88px] h-full flex items-center justify-between"
              onClick={() => {
                setOpen(!open);
              }}
            >
              <p className="text-[#064247] text-base cursor-pointer">
                {select.selectPerson?.firstName} {select.selectPerson?.lastName}
              </p>
              <Image
                className="cursor-pointer"
                src={ArrowDown}
                alt="Arrow Down"
              />
              <div
                className={`absolute flex flex-col items-center justify-center gap-[15px] z-10 h-fit w-[148px] bg-[#EDEDEE] rounded-2xl top-[240px] left-[395px] ${
                  open ? "flex" : "hidden"
                }`}
              >
                {select.person.map((item, index) => {
                  return (
                    <div
                      className="cursor-pointer m-1"
                      onClick={() => {
                        dispatch(getSelectedPerson(item));
                      }}
                    >
                      {item.firstName} {item.lastName}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="h-[30px] w-full flex items-center justify-center">
          <p
            className="text-xl text-[#064247] font-bold cursor-pointer"
            onClick={() => {
              dispatch(getSelectedPerson(undefined));
            }}
          >
            یا تشکیل پرونده برای فرد جدید
          </p>
        </div>
      </div>
      <div className="w-full h-[800px] flex flex-col items-center">
        <div className="w-[880px] h-[60%] flex items-center justify-center">
          <div className="w-[50%] h-full flex flex-col items-center justify-center gap-7">
            <div className="h-[66px] w-[440px] flex items-center justify-center">
              <div className="h-full w-[73px] flex flex-col items-start justify-center rounded-[4.73px] border-[#CBCBCB] border-[1.5px] border-l-0 rounded-l-none">
                <p className="text-xs m-2 font-semibold text-[#0D0630]">نام</p>
                <p className="text-xs m-2 font-medium text-[#CBCBCB]">
                  {select.selectPerson
                    ? select.selectPerson.firstName
                    : "مثال : علی"}
                </p>
              </div>
              <input
                value={select.firstName}
                onChange={(e) => {
                  dispatch(getFristName(e.target.value));
                }}
                maxLength={11}
                className="h-full w-[320px] rounded-[4.73px] border-[#CBCBCB] border-[1.5px] border-r-0 rounded-r-none outline-none text-left p-5"
              />
            </div>

            <div className="h-[66px] w-[440px] flex items-center justify-center">
              <div className="h-full w-[120px] flex flex-col items-start justify-center rounded-[4.73px] border-[#CBCBCB] border-[1.5px] border-l-0 rounded-l-none">
                <p className="text-xs m-2 font-semibold text-[#0D0630]">
                  کد ملی
                </p>
                <p className="text-xs m-2 font-medium text-[#CBCBCB]">
                  {select.selectPerson
                    ? select.selectPerson.code
                    : "مثال : ۰۲۵۰۲۳۷۸۴۶"}
                </p>
              </div>
              <input
                value={select.code}
                onChange={(e) => {
                  dispatch(getCode(e.target.value));
                }}
                maxLength={11}
                className="h-full w-[273px] rounded-[4.73px] border-[#CBCBCB] border-[1.5px] border-r-0 rounded-r-none outline-none text-left p-5"
              />
            </div>

            <div className="h-[66px] w-[440px] flex items-center justify-center">
              <div className="h-full w-[80px] flex flex-col items-start justify-center rounded-[4.73px] border-[#CBCBCB] border-[1.5px] border-l-0 rounded-l-none">
                <p className="text-xs m-2 font-semibold text-[#0D0630]">شهر</p>
                <p className="text-xs m-2 font-medium text-[#CBCBCB]">
                  {select.selectPerson
                    ? select.selectPerson.city
                    : "مثال : تهران"}
                </p>
              </div>
              <input
                value={select.city}
                onChange={(e) => {
                  dispatch(getCity(e.target.value));
                }}
                maxLength={11}
                className="h-full w-[313px] rounded-[4.73px] border-[#CBCBCB] border-[1.5px] border-r-0 rounded-r-none outline-none text-left p-5"
              />
            </div>
          </div>
          <div className="w-[50%] h-full flex flex-col items-center justify-center gap-7">
            <div className="h-[66px] w-[440px] flex items-center justify-center">
              <div className="h-[66px] w-[440px] flex items-center justify-center">
                <div className="h-full w-[80px] flex flex-col items-start justify-center rounded-[4.73px] border-[#CBCBCB] border-[1.5px] border-l-0 rounded-l-none">
                  <p className="text-xs m-2 font-semibold text-[#0D0630]">
                    نام خانوادگی
                  </p>
                  <p className="text-xs m-2 font-medium text-[#CBCBCB]">
                    {select.selectPerson
                      ? select.selectPerson.lastName
                      : "مثال : علوی"}
                  </p>
                </div>
                <input
                  value={select.lastName}
                  onChange={(e) => {
                    dispatch(getLastName(e.target.value));
                  }}
                  maxLength={11}
                  className="h-full w-[313px] rounded-[4.73px] border-[#CBCBCB] border-[1.5px] border-r-0 rounded-r-none outline-none text-left p-5"
                />
              </div>
            </div>
            <div className="h-[66px] w-[400px] flex flex-col items-center">
              <div className="w-[98%] h-[30%] flex items-center text-xs font-medium text-[#064247]">
                تاریخ تولد
              </div>
              <div className="w-full h-[70%] flex items-center justify-center gap-[13px]">
                <div className="h-[44px] w-[89px] flex items-center justify-center border border-[#CBCBCB] rounded-md">
                  <select className="h-full w-[50px] outline-none text-xs font-semibold">
                    {SeelctDay.map((item, index) => {
                      return (
                        <>
                          <option key={index}>{item.day}</option>
                        </>
                      );
                    })}
                  </select>
                </div>
                <div className="h-[44px] w-[162px] flex items-center justify-center border border-[#CBCBCB] rounded-md">
                  <select className="h-full w-[80px] outline-none text-xs font-semibold">
                    {SelectMonth.map((item, index) => {
                      return (
                        <>
                          <option key={index}>{item.month}</option>
                        </>
                      );
                    })}
                  </select>
                </div>
                <div className="h-[44px] w-[113px] flex items-center justify-center border border-[#CBCBCB] rounded-md">
                  <select className="h-full w-[80px] outline-none text-xs font-semibold">
                    {SelectYear.map((item, index) => {
                      return (
                        <>
                          <option key={index}>{item.year}</option>
                        </>
                      );
                    })}
                  </select>
                </div>
                <div></div>
              </div>
            </div>
            <div className="h-[66px] w-[400px] flex items-center">
              <div className="w-[18%] h-full flex items-center text-sm text-[#064247] font-medium">
                جنسیت :{" "}
              </div>
              <div className="w-[50%] h-full flex items-center text-xs font-medium text-[#0D0630] gap-2">
                <div className="inline-flex items-center">
                  <input
                    type="checkbox"
                    className="before:content[''] peer relative h-[20px] w-[20px] cursor-pointer appearance-none rounded-full border border-[#0D0630] checked:bg-[#0D0630]"
                  />
                </div>
                آقا
                <div className="inline-flex items-center">
                  <input
                    type="checkbox"
                    className="before:content[''] peer relative h-[20px] w-[20px] cursor-pointer appearance-none rounded-full border border-[#0D0630] checked:bg-[#0D0630]"
                  />
                </div>
                خانم
              </div>
            </div>
          </div>
        </div>
        <div className="w-[880px] h-[40%] flex flex-col items-center gap-7">
          <div className="h-[121px] w-[835px] flex flex-col items-center border border-[#CBCBCB] rounded-[4.73px]">
            <div className="h-[53px] w-[99%] flex flex-col items-start justify-evenly">
              <p className="text-xs font-medium text-[#064247]">نشانی</p>
              <p className="text-xs font-semibold text-[#CBCBCB]">
                مثال : میدان هروی، بلوار پناهی نیا، پلاک ۲
              </p>
            </div>
            <div className="h-[68px] w-full">
              <textarea className="h-full w-full resize-none outline-none p-2" />
            </div>
          </div>
          <div
            className="h-[48px] w-[210px] flex items-center justify-center bg-[#288E87] rounded-lg cursor-pointer text-base text-[#FFFFFF] font-medium"
            onClick={() => {
              let items = {
                firstName: select.firstName,
                lastName: select.lastName,
                code: select.code,
                city: select.city,
                address: select.address,
              };
              dispatch(addPerson(items));
              dispatch(getFristName(""));
              dispatch(getLastName(""));
              dispatch(getCode(""));
              dispatch(getCity(""));
            }}
          >
            رزرو نوبت
          </div>
        </div>
      </div>
    </div>
  );
}
