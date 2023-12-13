import Image from "next/image";
import Link from "next/link";
import MakaremiLogo from "../../public/Assets/Images/LandingPage/MakaremiLogo.png";

export default function Header() {
  return (
    <main className="max-w-[1223px] w-full h-[107px] bg-red sticky top-0 flex items-end justify-center">
      <div className="w-full h-[75px] bg-blue flex items-center gap-[155.5px] ">
        <div className="w-68px h-full bg-red">
          <Link href={"/"}>
            <Image src={MakaremiLogo} alt="MakareminLogo"></Image>
          </Link>
        </div>
        <ul className="w-695 h-full flex gap-[8px] text-[16px] font-medium bg-white ">
          <Link
            href={"/"}
            className="px-[16px] py-[24px] text-[16px] text-white font-medium bg-red"
          >
            <li>خانه</li>
          </Link>
          <li className="px-[16px] py-[24px] text-[16px] text-white font-medium bg-red">
            رضایت مراجعان
          </li>
          <li className="px-[16px] py-[24px] text-[16px] text-white font-medium bg-red">
            بیمه‌های طرف قرارداد
          </li>
          <li className="px-[16px] py-[24px] text-[16px] text-white font-medium bg-red">
            تماس با ما
          </li>
          <li className="px-[16px] py-[24px] text-[16px] text-white font-medium bg-red">
            بلاگ
          </li>
          <li className="px-[16px] py-[24px] text-[16px] text-white font-medium bg-red">
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
