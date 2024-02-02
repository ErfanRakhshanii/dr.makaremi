"use client";
import ProfileHeader from "@/components/UserPanel/Profile/ProfileHeader";
import { usePathname } from "next/navigation";

export const LayoutProvider = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const excludeHeaderFooterRoutes = [
    ''
    //   "/userPanel/Profile/Reservation/Complete/Date",
    //   "/userPanel/Profile/Reservation/Complete/Payment",
    //   "/userPanel/Profile/Reservation",
    //   "/userPanel/Profile/ChatRoom",
    //   "/userPanel/Profile/MyCase",
  ];

  return (
    <>
      {!excludeHeaderFooterRoutes.includes(pathname) && <ProfileHeader />}
      {children}
      {!excludeHeaderFooterRoutes.includes(pathname)}
    </>
  );
};
