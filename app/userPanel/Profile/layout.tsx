import type { Metadata } from "next";
import "../../globals.css";
import { LayoutProvider } from "./layoutprovider";
import localFont from "next/font/local";
import { Providers } from "@/components/Redux/Provider";
const sansR = localFont({
  src: "../../font/IRANSansXRegular.ttf",
  display: "swap",
  variable: "--sansR",
});
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={sansR.className}>
      <body>
        <LayoutProvider>
          <Providers>{children}</Providers>
        </LayoutProvider>
      </body>
    </html>
  );
}
