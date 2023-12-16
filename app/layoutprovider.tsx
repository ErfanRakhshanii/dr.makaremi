"use client";
import Header from "@/components/Header/Header";
import { usePathname } from "next/navigation";

export const LayoutProvider = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const excludeHeaderFooterRoutes = [
    "/userPanel",
    "/userPanel/Profile/Reservation",
    "/userPanel/Profile/ChatRoom",
    "/userPanel/Profile/MyCase",
  ];

  return (
    <>
      {!excludeHeaderFooterRoutes.includes(pathname) && <Header />}
      {children}
      {!excludeHeaderFooterRoutes.includes(pathname)}
    </>
  );
};
