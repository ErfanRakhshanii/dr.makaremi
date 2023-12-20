"use client";
import ProfileHeader from "@/components/UserPanel/Profile/ProfileHeader";
import CompleteHeader from "@/components/UserPanel/Profile/Reservation/Complete/CompleteHeader/CompleteHeader";
import { usePathname } from "next/navigation";

export const LayoutProvider = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const excludeHeaderFooterRoutes = ["/kir"];

  return (
    <>
      {!excludeHeaderFooterRoutes.includes(pathname) && <ProfileHeader />}

      {children}

      {!excludeHeaderFooterRoutes.includes(pathname)}
    </>
  );
};
