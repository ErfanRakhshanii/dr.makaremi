import footerBackGround from "../../public/Assets/Images/Footer/FooterBackGround.webp";
import map from "../../public/Assets/Images/Footer/Map.webp";
import location from "../../public/Assets/Images/Footer/Location.webp";
import line from "../../public/Assets/Images/Footer/Line.webp";
import phone from "../../public/Assets/Images/Footer/Phone.webp";
import gmail from "../../public/Assets/Images/Footer/Gmail.webp";
import instagram from "../../public/Assets/Images/Footer/Instagram.webp";
import telegram from "../../public/Assets/Images/Footer/Telegram.webp";
import Image from "next/image";

export default function Footer() {
  return (
    <main className="max-w-[1440px] w-full h-[385px] flex items-center justify-center bg-cover bg-center  bg-[url('../public/Assets/Images/Footer/FooterBackGround.webp')] text-white " style={{backgroundImage: `${footerBackGround}`}}>
      <div className="max-w-[1223px] w-full h-[291px] flex justify-between ">
        {/* //////////Right////////// */}
        <div className="w-[428px] h-[262px] flex flex-col gap-[54px]">
        {/* //////////RightBody0////////// */}
          <div className="w-[195px] h-[36px] flex gap-[8px] text-[24px] font-bold ">
            <Image
              src={line}
              alt="Logo"
              className="w-[1px]
                         h-[31px]"
            />
            آدرس و شمارۀ تلفن
          </div>
        {/* //////////RightBody1////////// */}
          <div className="w-[428px] h-[86px] flex flex-col gap-[14px] ">
            <div className="w-full h-[48px] flex gap-[8px]">
              <Image
                src={location}
                alt="Location"
                className="w-[20px]
                           h-[18.909px]"
              />
              <p className="text-[16px] font-normal">
                آدرس : مـازندران، بـابــل، میــدان کشـوری، سـاختمــان پـزشـکـان
                مهـــر، طبقــه ســوم
              </p>
            </div>
            <div className="w-full h-[24px] flex gap-[6px]">
              <Image
                className="w-[16.115px]
                           h-[16.957px]"
                src={phone}
                alt="Logo"
              />
              <p className="text-[16px] font-normal">
                شماره تلفن : ۸۸۸ ۸۸ ۳۲۲ – ۰۱۱
              </p>
            </div>
          </div>
        {/* //////////RightBody2////////// */}
          <div className="w-[138px] h-[32px] flex gap-[21px]">
            <Image src={gmail} alt="Gmail" />
            <Image src={instagram} alt="Instagram" />
            <Image src={telegram} alt="Telegram" />
          </div>
        </div>
        {/* //////////Left////////// */}
        <div className="w-[361.46px] h-full ">
          <Image src={map} alt="map" className="rounded-[10px]" />
        </div>
      </div>
    </main>
  );
}
