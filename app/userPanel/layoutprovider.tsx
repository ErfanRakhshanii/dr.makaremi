"use client";
import UserPanelHeader from "@/components/UserPanel/UserPanelHeader";
import { usePathname } from "next/navigation";

export const LayoutProvider = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const excludeHeaderFooterRoutes = [
    "/userPanel/Profile/Reservation",
    "/userPanel/Profile/ChatRoom",
    "/userPanel/Profile/MyCase",
    "/userPanel/Profile/Reservation/Complete",
    "/userPanel/Profile/Reservation/Complete/Date",
    "/userPanel/Profile/Reservation/Complete/Payment",
  ];

  return (
    <>
      {!excludeHeaderFooterRoutes.includes(pathname) && <UserPanelHeader />}

      {children}

      {!excludeHeaderFooterRoutes.includes(pathname)}
    </>
  );
};
