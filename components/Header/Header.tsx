import Image from "next/image";
import Link from "next/link";
import MakaremiLogo from "../../public/Assets/Images/LandingPage/MakaremiLogo.png";

export default function Header() {
  return (
    <main className="max-w-[1223px] w-full h-[107px] bg-red flex items-end justify-center sticky top-0 z-50">
      <div className="w-full h-[75px] bg-blue flex items-center gap-[155.5px] ">
        <div className="w-68px h-full bg-red">
          <Link href={"/"}>
            <Image src={MakaremiLogo} alt="MakareminLogo"></Image>
          </Link>
        </div>
        <ul className="w-695 h-full flex items-center gap-[8px] text-[16px] font-medium bg-white ">
          <Link
            href={"/"}
            className=" w-[61px] h-[44px] flex items-center justify-center text-[16px] text-white font-medium cursor-pointer bg-red duration-500 rounded-[8px] hover:bg-green"
          >
            <li>خانه</li>
          </Link>
          <li className="w-[134px] h-[44px] flex items-center justify-center text-[16px] text-white font-medium cursor-pointer bg-red duration-500 hover:bg-green rounded-[8px]">
            رضایت مراجعان
          </li>
          <li className="w-[168px] h-[44px] flex items-center justify-center text-[16px] text-white font-medium cursor-pointer bg-red duration-500 hover:bg-green rounded-[8px]">
            بیمه‌های طرف قرارداد
          </li>
          <li className="w-[104px] h-[44px] flex items-center justify-center text-[16px] text-white font-medium cursor-pointer bg-red duration-500 hover:bg-green rounded-[8px]">
            تماس با ما
          </li>
          <li className="w-[62px] h-[44px] flex items-center justify-center text-[16px] text-white font-medium cursor-pointer bg-red duration-500 hover:bg-green rounded-[8px]">
            بلاگ
          </li>
          <li className="w-[128px] h-[44px] flex items-center justify-center text-[16px] text-white font-medium cursor-pointer bg-red duration-500 hover:bg-green rounded-[8px]">
            ورود / عضویت
          </li>
        </ul>
        <button className="w-[149px] h-[44px] bg-green  rounded-[8px] flex items-center justify-center gap-[8px]">
          <button className="w-[24px] h-[24px] flex items-center justify-center bg-[#FFF] rounded-[100px] text-[20px] font-medium">
            +
          </button>{" "}
          <span className="w-88px h-24px text-[14px] font-medium text-white hover:text-black">
            درخواست نوبت
          </span>{" "}
        </button>
      </div>
    </main>
  );
}
