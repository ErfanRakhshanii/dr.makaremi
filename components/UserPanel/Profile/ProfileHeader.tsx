"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import MakaremiLogo from "../../../public/Assets/Images/UserPanel/logomakaremi.webp";
import ArrowDown from "../../../public/Assets/Images/UserPanel/Profile/arrDown.svg";
import LogOut from "../../../public/Assets/Images/UserPanel/Profile/logout.svg";
import { usePathname } from "next/navigation";

export default function ProfileHeader() {
  const pathName = usePathname();

  return (
    <main className="max-w-[1440px] w-full h-[139px] flex items-center justify-between bg-white">
      {/* RIGHT TAB */}
      <div className="h-[75px] w-[240px] flex items-center justify-center">
        <Link href={"/"}>
          <Image src={MakaremiLogo} alt="Makaremi Logo" />
        </Link>
      </div>
      {/* CENTER TABS */}
      <div className="h-[75px] w-[400px] flex items-center justify-between">
        <div className="h-[44px] w-[61px] flex items-center justify-center">
          <Link href={"/"}>
            <p className="text-base font-medium cursor-pointer text-black">
              خانه
            </p>
          </Link>
        </div>
        <div className="h-[44px] w-[104px] flex items-center justify-center">
          <Link href={"/userPanel/Profile/MyCase"}>
            <p
              className={`text-base font-medium cursor-pointer ${
                pathName === "/userPanel/Profile/MyCase"
                  ? "text-green"
                  : "text-black"
              }`}
            >
              پرونده من
            </p>
          </Link>
        </div>
        <div className="h-[44px] w-[128px] flex items-center justify-center">
          <Link href={"/userPanel/Profile/Reservation"}>
            <p
              className={`text-base font-medium cursor-pointer ${
                pathName === "/userPanel/Profile/Reservation"
                  ? "text-green"
                  : "text-black"
              }`}
            >
              رزرو نوبت
            </p>
          </Link>
        </div>
        <div className="h-[44px] w-[128px] flex items-center justify-center">
          <Link href={"/userPanel/Profile/ChatRoom"}>
            <p
              className={`text-base font-medium cursor-pointer ${
                pathName === "/userPanel/Profile/ChatRoom"
                  ? "text-green"
                  : "text-black"
              }`}
            >
              ارسال پیام
            </p>
          </Link>
        </div>
      </div>
      {/* LEFT TAB */}
      <div className="h-[75px] w-[200px] flex items-center justify-between">
        <div className="w-[88px] h-full flex items-center justify-between">
          <p className="text-[#064247] text-base cursor-pointer">متین خانی</p>
          <Image className="cursor-pointer" src={ArrowDown} alt="Arrow Down" />
        </div>
        <div className="w-[33px] h-full flex items-center justify-center">
          <div className="h-[49px] w-[1px] bg-[#CBCBCB]" />
        </div>
        <div className="w-[55px] h-full flex items-center justify-between">
          <Image className="cursor-pointer" src={LogOut} alt="LogOut" />
          <p className="text-black text-sm cursor-pointer">خروج</p>
        </div>
      </div>
    </main>
  );
}
