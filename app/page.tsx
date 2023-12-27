import Image from "next/image";
import sliderFrame1 from "../public/Assets/Images/LandingPage/Body0/SliderFrame1.webp"
export default function Home() {
  const Body1Cards = [
    {
      issue: "تعداد مراجعه کننده",
      number: "14019",
      logo: "kir"
    },
    {
      issue: "تعداد جراحی لیزیک",
      number: "2720",
      logo: "kir"
    },
    {
      issue: "تعداد جراحی سالیانه",
      number: "8627",
      logo: "kir"
    },
    {
      issue: "تعداد مقاله معتبر",
      number: "20",
      logo: "kir"
    },
  ]
  return (
    <main className="max-w-[1440px] w-full h-[5627px] flex flex-col items-center">
        {/* //////////Body0////////// */}
     <div className="w-full h-[719px] bg-blue">
      <Image src={sliderFrame1} alt="Slider"/>
     </div>
        {/* //////////Body1////////// */}
        <div className="w-full h-[222px] bg-red flex items-center justify-center gap-[32px]">
         
        </div>
    </main>
  );
}
