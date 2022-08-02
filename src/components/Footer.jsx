import React from "react";
import { AiFillGithub, AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import P from "./typography/P";
import { Link } from "react-router-dom";


function Footer() {
  return (
    <footer className="p-4 sm:p-6 bg-darkmode_black mt-6 md:mt-10">
      <div className="flex items-center flex-col justify-between a md:flex-row gap-10 lg:gap-0">
      <Link to="/">
            <img
              src={process.env.PUBLIC_URL + "/LogoText.svg"}
              alt=""
              className="w-52 h-full self-center justify-self-center"
            />
          </Link>
          <Link to="/shop">
            <P classModifiers="font-displayFont hover:text-accent_yellow cursor-pointer">Copenhagen, August 8th - 14th 2022</P>
          </Link>
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



    <div className='flex flex-col justify-start mt-4'>
      <hr className="mt-6 border-darkmode_black8 lg:my-8 mb-4" />
      <div className="flex mb-3 items-baseline gap-4">
        <P classModifiers="text-darkmode_black8">© 2022 George Nicolae, Simon Gisler & Tomine Ødegård.</P>
        <div className="flex mt-3">
          <a
            href="https://github.com/siangi/CPHRT_FooFest" target="_blank" rel="noreferrer"
            className="text-darkmode_black8 hover:text-accent_yellow"
          >
            <AiFillGithub className="w-5 h-5 hover:fill-accent_yellow cursor-poiner" />
          </a>
          </div>
        </div>

   
      </div>
    </footer>
  );
}

export default Footer;
