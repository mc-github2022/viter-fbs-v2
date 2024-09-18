import React from "react";
import { AiFillTikTok } from "react-icons/ai";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaYoutubeSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="footer bg-[#000000] pt-14 text-light relative overflow-hidden">
        <div className="footerGradientBlack absolute h-[700px] w-full top-[-70%] left-[-28%]"></div>
        <div className="customContainer">
          <div className="wrapper grid grid-cols-2 relative z-[1]">
            <div>
              <div className="theLogo">
                <img src="../../public/img/logo-fbs.png" alt="" />
              </div>
              <p className="text-xs my-6">
                Baloc Road, Brgy. San Ignacio, San Pablo City <br /> Laguna
                Philippines 4000
              </p>
              <ul className="flex gap-2 text-3xl">
                <li>
                  <FaFacebookSquare />
                </li>
                <li>
                  <FaLinkedin />
                </li>
                <li>
                  <FaYoutubeSquare />
                </li>
                <li>
                  <FaInstagramSquare />
                </li>
                <li>
                  <AiFillTikTok />
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-2">
              <div>
                <div className="contactDetails">
                  <p className="font-semibold">CONTACT US</p>
                </div>
                <ul className="text-xs my-6">
                  <li className="font-semibold mb-1">Phone</li>
                  <li>(049) 501-3592</li>
                  <li>(+63) 927-168-6810</li>
                </ul>
                <div className="text-xs">
                  <p className="font-semibold mb-1">Email</p>
                  <p>marketing@frontlinebusiness.com.ph</p>
                </div>
              </div>
              <div>
                <p className="font-semibold">QUIKLINKS</p>
                <ul className="text-xs my-6 [&>li]:mb-1">
                  <li>Web Solutions</li>
                  <li>Virtual Assistant Solutions</li>
                  <li>Accounting Solution</li>
                  <li>Learning Center Solutions</li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="mt-10 relative z-[1]" />
          <div className="py-10 relative z-[1]">
            <div className="wrapper flex justify-between items-center">
              <p className="text-sm">
                Copyright 2024 | Frontline Business Solutions, Inc. All rights
                reserved.
              </p>
              <p className="text-sm">
                Privacy Policy | Terms of Service | EULA
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
