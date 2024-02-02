"use client";
import Image from "next/image";
import Link from "next/link";
import makaremiLogo from "../../public/Assets/Images/Header/MakaremiLogo.webp";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const isScrolled = window.scrollY > 0;
    setScrolled(isScrolled);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <main className={`max-w-[1440px] w-full h-[107px] flex items-end justify-center fixed duration-500 z-50 ${scrolled ? "flex items-center justify-center bg-white" : ""}`}  >
      <div className="max-w-[1223px] w-full h-[75px] flex items-center gap-[155.5px] ">
        {/* //////////Right////////// */}
        <div className="w-68px h-full">
          <Link href={"/"}>
            <Image src={makaremiLogo} alt="MakareminLogo"></Image>
          </Link>
        </div>
        {/* //////////Middle////////// */}
        <ul className="w-695 h-full flex items-center gap-[8px] text-[16px] font-medium">
          <Link
            href={"/"}
            className={
              pathname === "/"
                ? "w-[61px] h-[44px] flex items-center justify-center bg-green text-[16px] text-white font-medium cursor-pointer duration-500 rounded-[8px]"
                : "w-[61px] h-[44px] flex items-center justify-center  text-[16px] text-white font-medium cursor-pointer duration-500 rounded-[8px] hover:bg-green"
            }
          >
            <li>خانه</li>
          </Link>
          <Link
            href={"/clientSatisfaction"}
            className={
              pathname === "/clientSatisfaction"
                ? "w-[134px] h-[44px] flex items-center justify-center bg-green text-[16px] text-white font-medium cursor-pointer duration-500  rounded-[8px]"
                : "w-[134px] h-[44px] flex items-center justify-center text-[16px] text-white font-medium cursor-pointer duration-500 hover:bg-green rounded-[8px]"
            }
          >
            <li>رضایت مراجعان</li>
          </Link>
          <li className="w-[168px] h-[44px] flex items-center justify-center text-[16px] text-white font-medium cursor-pointer duration-500 hover:bg-green rounded-[8px]">
            بیمه‌های طرف قرارداد
          </li>

          <li className="w-[104px] h-[44px] flex items-center justify-center text-[16px] text-white font-medium cursor-pointer duration-500 hover:bg-green rounded-[8px]">
            تماس با ما
          </li>
          <Link
            href={"/blog"}
            className={
              pathname === "/blog"
                ? "w-[62px] h-[44px] flex items-center justify-center bg-green text-[16px] text-white font-medium cursor-pointer duration-500  rounded-[8px]"
                : "w-[62px] h-[44px] flex items-center justify-center text-[16px] text-white font-medium cursor-pointer duration-500 hover:bg-green rounded-[8px]"
            }
          >
            <li>بلاگ</li>
          </Link>

          <li className="w-[128px] h-[44px] flex items-center justify-center text-[16px] text-white font-medium cursor-pointer duration-500 hover:bg-green rounded-[8px]">
            ورود / عضویت
          </li>
        </ul>
        {/* //////////Left////////// */}
        <button className="w-[149px] h-[44px] bg-green  rounded-[8px] flex items-center justify-center duration-500 gap-[8px] hover:bg-white group">
          <div className="w-[24px] h-[24px] bg-[#FFF] rounded-[100px] text-[19px] duration-500 text-hardgreen font-medium group-hover:bg-green">
            +
          </div>
          <p className=" w-88px h-24px text-[14px] font-medium text-white duration-500 group-hover:text-hardgreen ">
            درخواست نوبت
          </p>
        </button>
      </div>
    </main>
  );
}
