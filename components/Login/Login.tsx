"use client";
import { Backdrop, Box, Fade, Modal } from "@mui/material";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import TaskAlt from "../../public/Assets/Images/UserPanel/task_alt.svg";

export default function Login() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const regex = /^[0-9۰-۹\b]+$/;
  const [forgetPass, setForgetPass] = useState(false);
  const [codeSent, setCodeSent] = useState(false);
  const [code, setCode] = useState("");
  const [open, setOpen] = useState(false);
  const [newPassword, setNewPassword] = useState(false);
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");

  const HandleLoginRequest = async () => {
    console.log("start");
    try {
      const response = await axios.post(
        "https://drmakaremi.v1r.ir/api/login",
        {
          phone_number: phoneNumber,
          password: password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.data;
      console.log(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const ForgetPassword = () => {
    setForgetPass(true);
  };

  const HandleForgetEnterPhone = async () => {
    console.log("start");
    try {
      const response = await axios.post(
        "https://drmakaremi.v1r.ir/api/forget-password",
        {
          phone_number: phoneNumber,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.data;
      console.log(data);
      setCodeSent(true);
      setOpen(true);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const HandlePostCode = async () => {
    try {
      const response = await axios.post(
        "https://drmakaremi.v1r.ir/api/check_reset_pass",
        {
          phone_number: phoneNumber,
          code: code,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.data;
      console.log(data);
      setNewPassword(true);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const HandlePostSetPassword = async () => {
    try {
      const response = await axios.post(
        "https://drmakaremi.v1r.ir/api/update-password",
        {
          phone_number: phoneNumber,
          new_password: password1,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.data;
      console.log(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 336,
    height: 235,
    bgcolor: "#EDEDED",
    p: 4,
    borderRadius: "40px",
    outline: "none",
    border: "2px solid white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
  };

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
      {/* set new password */}
      {newPassword ? (
        <>
          <div className="h-[66px] w-full flex items-center justify-center">
            <div className="h-full w-[200px] flex flex-col items-start p-3 justify-center gap-2 rounded-[4.73px] border-[#CBCBCB] border-[1.5px] border-l-0 rounded-l-none">
              <p className="text-xs font-semibold text-[#0D0630]">رمز عبور</p>
              <p className="text-xs font-medium text-[#CBCBCB]">
                یک رمز عبور برای خود انتخاب کنید
              </p>
            </div>
            <input
              type="password"
              maxLength={11}
              value={password1}
              onChange={(e) => {
                if (e.target.value === "" || regex.test(e.target.value)) {
                  setPassword1(e.target.value);
                }
              }}
              className="h-full w-[614px] rounded-[4.73px] border-[#CBCBCB] border-[1.5px] border-r-0 rounded-r-none outline-none text-left p-5"
            />
          </div>
          <div className="h-[66px] w-full flex items-center justify-center">
            <div className="h-full w-[200px] flex flex-col items-start p-3 justify-center gap-2 rounded-[4.73px] border-[#CBCBCB] border-[1.5px] border-l-0 rounded-l-none">
              <p className="text-xs font-semibold text-[#0D0630]">
                تکرار رمز عبور
              </p>
              <p className="text-xs font-medium text-[#CBCBCB]">
                رمز عبور خود را دوباره وارد کنید
              </p>
            </div>
            <input
              type="password"
              maxLength={11}
              value={password2}
              onChange={(e) => {
                if (e.target.value === "" || regex.test(e.target.value)) {
                  setPassword2(e.target.value);
                }
              }}
              className="h-full w-[614px] rounded-[4.73px] border-[#CBCBCB] border-[1.5px] border-r-0 rounded-r-none outline-none text-left p-5"
            />
          </div>
          <div className="h-[51px] w-full flex items-center justify-center">
            <div
              onClick={HandlePostSetPassword}
              className="h-full w-[200px] flex items-center justify-center rounded-lg cursor-pointer text-[#288E87] border-[#288E87] border-[1.18px] hover:bg-[#2b2b2b] hover:border-none transition-all"
            >
              تایید
            </div>
          </div>
        </>
      ) : // enter phone number to get code for reset password
      forgetPass && !codeSent ? (
        <div className="w-full h-[280px] flex flex-col items-center justify-center gap-[35px]">
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
                  setPhoneNumber(e.target.value);
                }
              }}
              value={phoneNumber}
              maxLength={11}
              className="h-full w-[614px] rounded-[4.73px] border-[#CBCBCB] border-[1.5px] border-r-0 rounded-r-none outline-none text-left p-5"
            />
          </div>

          <div className="h-[51px] w-full flex items-center justify-center">
            <div
              onClick={HandleForgetEnterPhone}
              className="h-full w-[200px] flex items-center justify-center rounded-lg cursor-pointer text-[#288E87] border-[#288E87] border-[1.18px] hover:bg-[#2b2b2b] hover:border-none transition-all"
            >
              تایید
            </div>
          </div>
        </div>
      ) : // login
      !forgetPass && !codeSent ? (
        <>
          <div className="w-full h-[280px] flex flex-col items-center justify-center gap-[31px]">
            <div className="w-full h-[177px] flex flex-col items-center justify-center gap-[15px]">
              <div className="h-[66px] w-full flex items-center justify-center">
                <div className="h-full w-[126px] flex flex-col items-start justify-center gap-2 rounded-[4.73px] border-[#CBCBCB] border-[1.5px] border-l-0 rounded-l-none">
                  <p className="text-xs font-semibold mr-2 text-[#0D0630]">
                    شماره تلفن همراه
                  </p>
                  <p className="text-xs font-medium mr-2 text-[#CBCBCB]">
                    مثال : ۰۹۱۱۲۳۴۵۶۷۸
                  </p>
                </div>
                <input
                  onChange={(e) => {
                    if (e.target.value === "" || regex.test(e.target.value)) {
                      setPhoneNumber(e.target.value);
                    }
                  }}
                  value={phoneNumber}
                  maxLength={11}
                  className="h-full w-[614px] rounded-[4.73px] border-[#CBCBCB] border-[1.5px] border-r-0 rounded-r-none outline-none text-left p-5"
                />
              </div>
              <div className="h-[66px] w-full flex items-center justify-center">
                <div className="h-full w-[126px] flex flex-col items-start justify-center gap-2 rounded-[4.73px] border-[#CBCBCB] border-[1.5px] border-l-0 rounded-l-none">
                  <p className="text-xs font-semibold mr-2 text-[#0D0630]">
                    رمز عبور
                  </p>
                  <p className="text-xs font-medium mr-2 text-[#CBCBCB]">
                    رمز عبور خود را وارد کنید
                  </p>
                </div>
                <input
                  type="password"
                  maxLength={11}
                  value={password}
                  onChange={(e) => {
                    if (e.target.value === "" || regex.test(e.target.value)) {
                      setPassword(e.target.value);
                    }
                  }}
                  className="h-full w-[614px] rounded-[4.73px] border-[#CBCBCB] border-[1.5px] border-r-0 rounded-r-none outline-none text-left p-5"
                />
              </div>
              <div className="w-[740px] h-[21px] flex items-center justify-between">
                <div className="w-[194px] h-full flex gap-1">
                  <p className="text-sm">حساب کاربری ندارید؟</p>
                  <Link href={"/userPanel"} className="text-sm text-[#45CBC2]">
                    ثبت نام کنید
                  </Link>
                </div>
                <div className="w-[100px] h-full">
                  <p
                    className="text-sm text-[#45CBC2] cursor-pointer"
                    onClick={ForgetPassword}
                  >
                    فراموشی رمز عبور
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full h-[51px] flex justify-center items-center">
              <div
                onClick={HandleLoginRequest}
                className="h-full w-[200px] flex items-center justify-center rounded-lg cursor-pointer text-[#288E87] border-[#288E87] border-[1.18px] hover:bg-[#2b2b2b] hover:border-none transition-all"
              >
                ورود
              </div>
            </div>
          </div>
        </>
      ) : // enter code
      codeSent ? (
        <>
          <div className="h-[250px] w-full flex flex-col items-center justify-center">
            <div className="h-[100px] w-full flex items-center justify-center">
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
                    setCode(e.target.value);
                  }
                }}
                value={code}
                maxLength={6}
                className="h-[66px] w-[614px] rounded-[4.73px] border-[#CBCBCB] border-[1.5px] border-r-0 rounded-r-none outline-none text-left p-5"
              />
            </div>
            <div className="h-[24px] w-[740px] flex items-center justify-between text-base text-green">
              <p className="cursor-pointer">ارسال مجدد رمز تا ۰۰:۱۲ دیگر</p>
              <p className="cursor-pointer">تصحیح شماره تلفن</p>
            </div>
            <div className="h-[51px] w-full flex items-center justify-center">
              <div
                onClick={HandlePostCode}
                className="h-full w-[200px] flex items-center justify-center rounded-lg cursor-pointer text-[#288E87] border-[#288E87] border-[1.18px] hover:bg-[#2b2b2b] hover:border-none transition-all"
              >
                تایید
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
      {/* modal for success code sent */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Image src={TaskAlt} alt="Task Alt" />
            <p className="text-base text-[#064247] font-bold">
              رمز عبور موقت برای شما پیامک شد
            </p>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
