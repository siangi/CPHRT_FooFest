import React from 'react';
import { useNavigate } from 'react-router-dom';
import H2 from '../components/typography/H2';
import PrimaryButton from '../components/buttons/PrimaryButton';
import P from '../components/typography/P'

function Confirmation() {
    const navigate = useNavigate();
  return (
    <div className='w-full h-full flex flex-col gap-4 items-center mt-40 lg:mt-32'>
        <H2>You're going to Ragnarok!</H2>
        <div className='border border-accent_yellow p-4 w-full md:w-2/3 lg:w-1/3 h-fit flex flex-col items-center text-center'>
            <img src={process.env.PUBLIC_URL + "/icons/rockOnHand.svg"} className="w-1/2 h-auto" alt="rockhand symbol"></img>
            <P>Your purchase is confirmed. A confirmation email and your ticket(s) have been sent to the e-mail(s) you submitted in the personal information forms.</P>
        </div>
        <PrimaryButton caption="See the schedule" action={() => navigate("/schedule")}></PrimaryButton>
    </div>
  )
}

export default Confirmation