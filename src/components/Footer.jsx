import React from "react";
import { AiFillGithub, AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import H4 from "./typography/H4";
import PrimaryButton from "./buttons/PrimaryButton";

function Footer() {
  return (
    <footer className="p-4 sm:p-6 bg-darkmode_black mt-20">
      <div className="flex flex-col justify-between lg:flex-row gap-10 lg:gap-0">
        <a href="">
          <img
            src={process.env.PUBLIC_URL + "/LogoText.svg"}
            className="mr-3 h-12"
            alt="Ragnarock Logo"
          />
        </a>
        <PrimaryButton
          caption="Get your tickets now"
          onClick={"/shop"}
        ></PrimaryButton>
        <div className="flex">
          <AiFillFacebook
            className="text-white h-10 w-auto hover:fill-accent_yellow cursor-pointer"
            alt="Facebook logo"
          />
          <AiFillInstagram
            className="text-white h-10 w-auto hover:fill-accent_yellow cursor-pointer"
            alt="Instagram logo"
          />
        </div>
      </div>

      <div className="flex md:justify-end mt-6 sm:justify-start"></div>
      <hr className="my-6 border-darkmode_black8 sm:mx-auto lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between my-6">
        <span className="text-sm text-darkmode_black8 sm:text-center">
          © 2022 George Nicolae, Simon Giesler & Tomine Ødegård.
        </span>
        <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
          <a
            href="https://github.com/siangi/CPHRT_FooFest"
            className="text-darkmode_black8 hover:text-accent_yellow"
          >
            <AiFillGithub className="w-5 h-5 hover:fill-accent_yellow cursor-poiner" />
          </a>
        </div>
      </div>
    </footer>

    // <footer className='bg-darkmode_black h-40 md:h-24 p-3 md:px-6 grid grid-rows-2 grid-cols-4 gap-2 md:flex md:justify-between md:items-center'>
    //     <div className='flex flex-row md:justify-start items-center gap-3 row-start-2 col-start-4 md:h-full md:w-1/4'>
    //         <a title='RagnaRocks Facebook Page' href='https://www.facebook.com' className='h-full'>
    //             <img src={process.env.PUBLIC_URL + "/socialMedia/facebook.svg"} alt=""
    //             className="h-full" />
    //         </a>
    //         <a title='RagnaRocks Instagram Page' href='https://www.instagram.com' className='h-full'>
    //             <img src={process.env.PUBLIC_URL + "/socialMedia/Instagram.svg"} alt=""
    //             className="h-full" />
    //         </a>
    //     </div>
    //         <img src={process.env.PUBLIC_URL + "/LogoText.svg"} alt="" className="h-full row-start-1 col-start-1 col-span-4 self-center justify-self-center object-cover" />
    //     <div className='flex flex-row md:justify-end gap-1 md:gap-3 row-start-2 col-start-1 col-span-3 md:h-full md:w-1/4    '>
    //         <img src={process.env.PUBLIC_URL + "/sponsors/RedBullSmall.png"} alt="sponsor: Red Bull"
    //             className="w-1/3 h-auto md:w-auto md:h-full object-cover" />
    //         <img src={process.env.PUBLIC_URL + "/sponsors/Dominos.png"} alt="sponsor: Dominos"
    //             className="max-w-1/3 h-auto md:w-auto md:h-full object-cover" />
    //         <img src={process.env.PUBLIC_URL + "/sponsors/Tuborg.png"} alt="sponsor: Tuborg"
    //             className="w-1/3 h-auto md:w-auto md:h-full object-cover" />
    //     </div>
    // </footer>
  );
}

export default Footer;
