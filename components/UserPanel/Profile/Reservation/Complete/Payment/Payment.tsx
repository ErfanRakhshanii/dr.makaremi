"use client";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/components/Redux/Store";

export default function PaymentPage() {
  const select = useSelector((state: RootState) => state);

  return (
    <div className="max-w-[1440px] h-full w-full flex items-center justify-center">
      <div className="w-[862px] h-full flex flex-col items-center justify-center gap-7">
        <div className="h-[24px] w-full flex items-start text-base font-bold text-[#0D0630]">
          اطلاعات ثبت نوبت برای {select.firstName + select.lastName}
        </div>
        <div className="h-[117px] w-full flex flex-col border border-[#EDEDEE] rounded-lg">
          <div className="w-full h-2/4 flex items-center justify-center gap-[110px] text-base font-bold text-[#0D0630]">
            <div className="w-[116px] h-[24px] flex items-center justify-center">
              دکتر
            </div>
            <div className="w-[116px] h-[24px] flex items-center justify-center">
              روز
            </div>
            <div className="w-[116px] h-[24px] flex items-center justify-center">
              ساعت مراجعه
            </div>
            <div className="w-[116px] h-[24px] flex items-center justify-center">
              مبلغ پیش‌پرداخت
            </div>
          </div>
          <div className="w-full h-2/4 flex items-center justify-center gap-[110px] text-base font-normal text-[#0D0630] bg-[#F2FFFE]">
            <div className="w-[116px] h-[24px] flex items-center justify-center">
              علی مکارمی
            </div>
            <div className="w-[116px] h-[24px] flex items-center justify-center">
              {select.date === "" ? "-" : select.date}
            </div>
            <div className="w-[116px] h-[24px] flex items-center justify-center">
              {select.selectedTime === "" ? "-" : select.selectedTime}
            </div>
            <div className="w-[116px] h-[24px] flex items-center justify-center">
              {select.date === "" && select.selectedTime === ""
                ? "-"
                : "۳۰۰ هزار تومن"}
            </div>
          </div>
        </div>
        <div className="h-[24px] w-full flex items-start text-base font-bold text-[#0D0630]">
          نکات مهم
        </div>
        <div className="h-[236px] w-full flex flex-col items-center justify-center gap-[30px] rounded-lg border border-[#EDEDEE]">
          <div className="w-[95%] h-[24px] flex items-start text-base font-normal text-[#0D0630]">
            <li>به مرکز اجازه تصرف پیش‌پرداخت را می‌دهم.</li>
          </div>
          <div className="w-[95%] h-[72px] flex items-start text-base font-normal text-[#0D0630]">
            <li>
              چناچه نوبت را اخذ نمودید نوبت شما قطعی می‌باشد و تا ۱ روز قبل
              امکان مرجوع آن وجود ندارد با شماره پیگیری خود به
              <br /> مرکز درمانی مراجعه نمایید پذیرش دریافت کنید و بعد از پذیرش
              میتوانید به پزشک مراجعه نمایید. (نوبت اخذ شده
              <br /> توسط شما محفوظ میباشد.)
            </li>
          </div>
          <div className="w-[95%] h-[20px] flex items-start text-xs font-medium text-[#757575] gap-2">
            <input
              type="checkbox"
              className="h-[20px] w-[20px] cursor-pointer appearance-none rounded-md border border-[#757575] checked:bg-[#757575]"
            />
            <div className="h-full flex items-center justify-center">
              موارد بالا را می‌پذیرم
            </div>
          </div>
        </div>
        <div className="h-[53px] w-[200px] rounded-md flex items-center justify-center text-base font-medium text-white bg-[#288E87] cursor-pointer">
          تایید و پرداخت
        </div>
      </div>
    </div>
  );
}
