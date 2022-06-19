import { useNavigate } from "react-router-dom";
import H2 from "../components/typography/H2";
import H3 from "../components/typography/H3";
import PrimaryButton from "../components/buttons/PrimaryButton";
import P from "../components/typography/P";
export default function Failure() {
  const navigate = useNavigate();
  return (
    <div className="w-full h-full flex flex-col gap-4 items-center">
      <H2 classModifiers="text-accent_yellow">Failure to pay</H2>
      <div className="bg-darkmode_black2 w-full md:w-2/3 lg:w-1/3 h-fit flex flex-col items-center text-shade_darker_white text-center gap-9 pb-5">
        <H3>You're time to reserve your ticket expired.</H3>
        <P>
          Please select new tickets and go through the reservation process
          again.
        </P>
      </div>
      <PrimaryButton
        caption="Get new tickets"
        action={() => {
          navigate("/shop/tickets");
          window.scrollTo({ top: 0 });
        }}
      ></PrimaryButton>
    </div>
  );
}
