import Image from "next/image";
import React from "react";
import Date from "../../../../../../public/Assets/Images/UserPanel/Profile/Reservation/Complete/Date/Group67.svg";
import Calendar from "../../../../../../public/Assets/Images/UserPanel/Profile/Reservation/Complete/Date/calendar-2.svg";
import Shield from "../../../../../../public/Assets/Images/UserPanel/Profile/Reservation/Complete/Date/shield-tick.svg";
import Card from "../../../../../../public/Assets/Images/UserPanel/Profile/Reservation/Complete/Date/card.svg";
import Link from "next/link";

export default function CompleteHeader() {
  return (
    <div className="max-w-[1440px] w-[480px] h-[180px] flex flex-col justify-end items-center gap-2">
      <div className="h-[90px] w-[515px] flex items-center justify-between">
        <div className="flex items-center justify-center">
          <Image src={Date} alt="date" className="relative" />
          <Image src={Shield} alt="calnedar" className="absolute mb-5" />
        </div>

        <div className="flex items-center justify-center">
          <Image src={Date} alt="date" className="relative" />
          <Image src={Calendar} alt="calnedar" className="absolute mb-5" />
        </div>

        <div className="flex items-center justify-center">
          <Image src={Date} alt="date" className="relative" />
          <Image src={Card} alt="calnedar" className="absolute mb-5" />
        </div>
      </div>
      <div className="w-[100%] h-[1px] bg-[#D6F3F1] flex items-center">
        <div className="w-[100%] h-[1px] flex items-center justify-between bg-[#D6F3F1]">
          <div className="h-[15px] w-[15px] flex justify-center items-center rounded-full border border-[#288E87]">
            <div className="h-[10px] w-[10px] bg-[#288E87] rounded-full"></div>
          </div>
          <Link href={"/userPanel/Profile/Reservation/Complete/Date"}>
            <div className="h-[15px] w-[15px] flex justify-center items-center rounded-full border border-[#288E87]">
              <div className="h-[10px] w-[10px] bg-[#288E87] rounded-full"></div>
            </div>
          </Link>
          <Link href={"/userPanel/Profile/Reservation/Complete/Payment"}>
            <div className="h-[15px] w-[15px] flex justify-center items-center rounded-full border border-[#288E87]">
              <div className="h-[10px] w-[10px] bg-[#288E87] rounded-full"></div>
            </div>
          </Link>
        </div>
      </div>
      <div className="w-[515px] h-[20px] flex items-center justify-between">
        <p className="text-[#288E87]">انتخاب بیمار</p>
        <p className="text-[#288E87]">تعیین روز و ساعت</p>
        <p className="text-[#288E87]">پرداخت</p>
      </div>
    </div>
  );
}
