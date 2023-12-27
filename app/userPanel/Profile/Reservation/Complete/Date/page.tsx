import CompleteHeader from "@/components/UserPanel/Profile/Reservation/Complete/CompleteHeader/CompleteHeader";
import DatePage from "@/components/UserPanel/Profile/Reservation/Complete/Date/Date";

export default function Date() {
  return (
    <div className="max-w-[1440px] w-full h-[90vh] flex flex-col items-center">
      <CompleteHeader/>
      <DatePage />
    </div>
  );
}