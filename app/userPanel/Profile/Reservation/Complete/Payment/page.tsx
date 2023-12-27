import CompleteHeader from "@/components/UserPanel/Profile/Reservation/Complete/CompleteHeader/CompleteHeader";
import PaymentPage from "@/components/UserPanel/Profile/Reservation/Complete/Payment/Payment";

export default function Payment() {
  return (
    <div className="max-w-[1440px] w-full h-[90vh] flex flex-col items-center">
      <CompleteHeader/>
      <PaymentPage />
    </div>
  );
}
