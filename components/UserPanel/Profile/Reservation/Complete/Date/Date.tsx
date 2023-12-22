"use client";
import React, { useState } from "react";
import "./Date.css";
import { Calendar } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

export default function DatePage() {
  const [date, setDate] = useState("");

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
          format="D MMMM"
          onChange={(dateObject: any) => {
            console.log(dateObject.format());
            setDate(dateObject.format());
          }}
        />
      </div>
      <div className="w-[35%] h-full flex items-center justify-center">
        <div className="w-[280px] h-[350px] flex flex-col items-center justify-center gap-5 bg-blue">
          <div className="w-[252px] h-[56px] flex items-center justify-center border border-[#83DCD6] rounded-xl bg-white text-sm font-light text-[#064247]">
            {date === "" ? "تاریخ مورد نظر خود را انتخاب کنید" : date}
          </div>
          <div className="h-[21px] w-[85px] text-sm font-light">انتخاب ساعت</div>
          <div className="h-[119px] w-[263px] bg-black"></div>
          <div className="h-[50px] w-[177px] bg-green"></div>
        </div>
      </div>
    </div>
  );
}
