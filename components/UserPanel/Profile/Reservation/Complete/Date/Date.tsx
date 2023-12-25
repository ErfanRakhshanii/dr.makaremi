"use client";
import React from "react";
import "./Date.css";
import { Calendar } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/components/Redux/Store";
import {
  chnageActive,
  getDate,
  getSelectedTime,
} from "@/components/Redux/Slice";

export default function DatePage() {
  const select = useSelector((state: RootState) => state.MakaremiReducer);
  const dispatch = useDispatch();

  return (
    <div className="max-w-[1440px] h-full w-full flex items-center justify-center">
      <div className="w-[35%] h-full flex items-center justify-center ">
        <Calendar
          weekDays={[
            "شنبه",
            "یکشنبه",
            "دوشنبه",
            "سه شنبه",
            "چهارشنبه",
            "پنجشنبه",
            "جمعه",
          ]}
          calendar={persian}
          locale={persian_fa}
          hideYear
          showOtherDays
          format="D / M / YYYY"
          onChange={(dateObject: any) => {
            console.log(dateObject.format());
            dispatch(getDate(dateObject.format()));
          }}
        />
      </div>
      <div className="w-[35%] h-full flex items-center justify-center">
        <div className="w-[280px] h-[350px] flex flex-col items-center justify-center gap-5">
          <div className="w-[252px] h-[56px] flex items-center justify-center border border-[#83DCD6] rounded-xl bg-white text-sm font-light text-[#064247]">
            {select.date === ""
              ? "تاریخ مورد نظر خود را انتخاب کنید"
              : select.date}
          </div>
          <div className="h-[21px] w-[85px] text-sm font-light">
            انتخاب ساعت
          </div>
          <div className="h-[119px] w-[263px] flex items-center justify-center gap-2 flex-wrap">
            {select.time && select.time.map((item, index) => {
              return (
                <div
                  key={index}
                  className={`h-[51px] w-[73px] flex items-center justify-center cursor-pointer rounded-2xl ${
                    select.active === item.id
                      ? "bg-[#45CBC2] text-white"
                      : "bg-[#D6F3F1]"
                  }`}
                  onClick={() => {
                    dispatch(chnageActive(item.id));
                    dispatch(getSelectedTime(item.hour));
                  }}
                >
                  {item.hour}
                </div>
              );
            })}
          </div>
          <Link href={"/userPanel/Profile/Reservation/Complete/Payment"}>
            <div className="h-[50px] w-[177px] rounded-[7px] flex items-center justify-center text-sm font-light text-white cursor-pointer bg-[#288E87]">
              تایید
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
