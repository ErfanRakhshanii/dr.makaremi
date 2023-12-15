"use client";
import React, { useState } from "react";
import PasswordModal from "./PasswordModal";

export default function UserPanel() {
  const [reservation, setReservation] = useState("phone");
  const [inputPhone, setInputPhone] = useState("");
  const [inputPass, setInputPass] = useState("");
  const regex = /^[0-9۰-۹\b]+$/;

  return (
    <div className="max-w-[1440px] h-full w-full flex flex-col">
      <div className="w-full h-[154px] flex items-center justify-center ">
        <div className="h-[54px] w-[1002px] flex items-center justify-center gap-[30px]">
          <div className="h-[1px] w-[300px] bg-[#064247]" />
          <div className="text-[32px] font-bold text-[#064247]">
            نوبت‌دهی دکتر مکارمی
          </div>
          <div className="h-[1px] w-[300px] bg-[#064247]" />
        </div>
      </div>

      <div className="w-full h-[280px] flex flex-col items-center justify-center gap-[35px]">
        {reservation === "phone" ? (
          <div className="h-[66px] w-full flex items-center justify-center">
            <div className="h-full w-[126px] flex flex-col items-center justify-center gap-2 rounded-[4.73px] border-[#CBCBCB] border-[1.5px] border-l-0 rounded-l-none">
              <p className="text-xs font-semibold text-[#0D0630]">
                شماره تلفن همراه
              </p>
              <p className="text-xs font-medium text-[#CBCBCB]">
                مثال : ۰۹۱۱۲۳۴۵۶۷۸
              </p>
            </div>
            <input
              onChange={(e) => {
                if (e.target.value === "" || regex.test(e.target.value)) {
                  setInputPhone(e.target.value);
                }
              }}
              value={inputPhone}
              maxLength={11}
              className="h-full w-[614px] rounded-[4.73px] border-[#CBCBCB] border-[1.5px] border-r-0 rounded-r-none outline-none text-left p-5"
            />
          </div>
        ) : (
          <div className="h-[101px] w-full flex flex-col items-center justify-center">
            <div className="h-full w-full flex items-center justify-center">
              <div className="h-[66px] w-[126px] flex flex-col items-center justify-center gap-2 rounded-[4.73px] border-[#CBCBCB] border-[1.5px] border-l-0 rounded-l-none">
                <p className="text-xs font-semibold text-[#0D0630]">
                  رمز عبور موقت
                </p>
                <p className="text-xs font-medium text-[#CBCBCB]">
                  مثال : ۱۲۳۴
                </p>
              </div>
              <input
                onChange={(e) => {
                  if (e.target.value === "" || regex.test(e.target.value)) {
                    setInputPass(e.target.value);
                  }
                }}
                value={inputPass}
                maxLength={4}
                className="h-[66px] w-[614px] rounded-[4.73px] border-[#CBCBCB] border-[1.5px] border-r-0 rounded-r-none outline-none text-left p-5"
              />
            </div>
            <div className="h-[24px] w-[740px] flex items-center justify-between text-base text-green">
              <p className="cursor-pointer">ارسال مجدد رمز تا ۰۰:۱۲ دیگر</p>
              <p
                className="cursor-pointer"
                onClick={() => {
                  setReservation("phone");
                }}
              >
                تصحیح شماره تلفن
              </p>
            </div>
          </div>
        )}
        <PasswordModal
          reservation={reservation}
          setReservation={setReservation}
        />
      </div>
    </div>
  );
}
