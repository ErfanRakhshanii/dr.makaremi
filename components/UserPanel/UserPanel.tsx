"use client";
import React, { useState } from "react";
import PasswordModal from "./PasswordModal";
import axios from "axios";
import { Backdrop, Box, Fade, Modal } from "@mui/material";
import Image from "next/image";
import TaskAlt from "../../public/Assets/Images/UserPanel/task_alt.svg"

export default function UserPanel() {
  // const [reservation, setReservation] = useState("phone");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [successModal, setSuccessModal] = useState(false);
  // const [inputPass, setInputPass] = useState("");
  const regex = /^[0-9۰-۹\b]+$/;

  const HandlePostRequest = async () => {
    try {
      const response = await axios.post(
        "https://drmakaremi.v1r.ir/api/register",
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
      setSuccessModal(true);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const AlertError = () => {
    alert("لطفا شماره تلفن را وارد نمایید");
  };

  const HandleWithFetch = async () => {
    const response = await fetch("https://drmakaremi.v1r.ir/api/register", {
      method: "POST",
      body: JSON.stringify({ phone_number: phoneNumber }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
  };

  const [open, setOpen] = React.useState(false);
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

      <div className="w-full h-[280px] flex flex-col items-center justify-center gap-[35px]">
        {/* {reservation === "phone" ? ( */}
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
            onClick={phoneNumber !== "" ? HandlePostRequest : AlertError}
            className="h-full w-[200px] flex items-center justify-center rounded-lg cursor-pointer text-[#288E87] border-[#288E87] border-[1.18px] hover:bg-[#2b2b2b] hover:border-none transition-all"
          >
            تایید
          </div>
        </div>

        {/* ) : ( */}
        {/* <div className="h-[101px] w-full flex flex-col items-center justify-center">
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
          </div> */}
        {/* )} */}
        {/* <PasswordModal
            reservation={reservation}
            setReservation={setReservation}
          /> */}

        {successModal && (
          <>
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
          </>
        )}
      </div>
    </div>
  );
}
