import React from 'react'
import BurgerMenu from './navigation/BurgerMenu';
import PrimaryButton from './buttons/PrimaryButton';

export default function Header() {
  return (
    <div className="flex justify-between">
        <BurgerMenu></BurgerMenu>
        <img src={process.env.PUBLIC_URL + "/LogoText.svg"} alt="" className="h-20" />
        <PrimaryButton caption="Get tickets" action="/pages/Shop"></PrimaryButton>
    </div>
  );
}
