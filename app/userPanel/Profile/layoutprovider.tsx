"use client";
import ProfileHeader from "@/components/UserPanel/Profile/ProfileHeader";
import { usePathname } from "next/navigation";

export const LayoutProvider = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const excludeHeaderFooterRoutes = ["/signin"];

  return (
    <>
      {!excludeHeaderFooterRoutes.includes(pathname) && <ProfileHeader />}

      {children}

      {!excludeHeaderFooterRoutes.includes(pathname)}
    </>
  );
};
