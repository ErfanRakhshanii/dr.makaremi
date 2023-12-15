"use client";
import React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Image from "next/image";
import TaskAlt from "../../public/Assets/Images/UserPanel/task_alt.svg";

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

export default function PasswordModal({
  setReservation,
  reservation,
}: {
  setReservation: React.Dispatch<React.SetStateAction<string>>;
  reservation: string;
}) {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <div className="h-[51px] w-full flex items-center justify-center">
        <div
          onClick={() => {
            if (reservation === "phone") {
              setOpen(true);
            }
            setReservation("pass");
          }}
          className="h-full w-[200px] flex items-center justify-center rounded-lg cursor-pointer text-[#288E87] border-[#288E87] border-[1.18px] hover:bg-[#2b2b2b] hover:border-none transition-all"
        >
          تایید
        </div>
      </div>
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
