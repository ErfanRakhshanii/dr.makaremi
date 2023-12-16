import Image from "next/image";
import Link from "next/link";
import MakaremiLogo from "../../public/Assets/Images/UserPanel/logomakaremi.webp";
import AddCircle from "../../public/Assets/Images/UserPanel/add-circle.svg";

export default function UserPanelHeader() {
  return (
    <main className="max-w-[1440px] w-full h-[139px] flex items-center justify-around bg-white">
      {/* RIGHT TAB */}
      <div className="h-[75px] w-[160px] flex items-center justify-center">
        <Link href={"/"}>
          <Image src={MakaremiLogo} alt="Makaremi Logo" />
        </Link>
      </div>
      {/* CENTER TABS */}
      <div className="h-[75px] w-[330px] flex items-center justify-between">
        <div className="h-[44px] w-[61px] flex items-center justify-center">
          <Link href={"/"}>
            <p className="text-base font-medium cursor-pointer text-black">
              خانه
            </p>
          </Link>
        </div>
        <div className="h-[44px] w-[104px] flex items-center justify-center">
          <p className="text-base font-medium cursor-pointer text-black">
            تماس با ما
          </p>
        </div>
        <div className="h-[44px] w-[128px] flex items-center justify-center">
          <p className="text-base font-medium cursor-pointer text-green">
            ورود / عضویت
          </p>
        </div>
      </div>
      {/* LEFT TAB */}
      <div className="h-[75px] w-[160px] flex items-center justify-center">
        <div className="h-[44px] w-[149px] flex justify-center items-center gap-2 bg-[#BDBDBD] text-white rounded-lg cursor-pointer">
          <Image src={AddCircle} alt="Add Circle" />
          <p>درخواست نوبت</p>
        </div>
      </div>
    </main>
  );
}
