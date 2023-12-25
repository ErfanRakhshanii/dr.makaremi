import Image from "next/image";
import Link from "next/link";
import makaremiLogo from "../../public/Assets/Images/Header/MakaremiLogo.webp";

export default function Header() {
  return (
    <main className="max-w-[1223px] w-full h-[107px]  flex items-end justify-center fixed z-50 ">
      <div className="w-full h-[75px] flex items-center gap-[155.5px] ">
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
            className=" w-[61px] h-[44px] flex items-center justify-center text-[16px] text-white font-medium cursor-pointer duration-500 rounded-[8px] hover:bg-green"
          >
            <li>خانه</li>
          </Link>
          <li className="w-[134px] h-[44px] flex items-center justify-center text-[16px] text-white font-medium cursor-pointer duration-500 hover:bg-green rounded-[8px]">
            رضایت مراجعان
          </li>
          <li className="w-[168px] h-[44px] flex items-center justify-center text-[16px] text-white font-medium cursor-pointer duration-500 hover:bg-green rounded-[8px]">
            بیمه‌های طرف قرارداد
          </li>
          <li className="w-[104px] h-[44px] flex items-center justify-center text-[16px] text-white font-medium cursor-pointer duration-500 hover:bg-green rounded-[8px]">
            تماس با ما
          </li>
          <li className="w-[62px] h-[44px] flex items-center justify-center text-[16px] text-white font-medium cursor-pointer duration-500 hover:bg-green rounded-[8px]">
            بلاگ
          </li>
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
