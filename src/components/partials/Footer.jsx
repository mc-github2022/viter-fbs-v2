import React from "react";
import { AiFillTikTok } from "react-icons/ai";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaYoutubeSquare,
} from "react-icons/fa";
import {
  copyrightYear,
  devBaseImgUrl,
  devNavUrl,
} from "../helpers/functions-general";

const Footer = () => {
  return (
    <>
      <footer className="footer bg-[#000000] pt-14 text-light relative overflow-hidden">
        <div className="customContainer">
          <div className="footerGradientBlack top-[-20%] left-0 absolute h-[700px] w-full sm:top-[-70%] sm:left-[-30rem]"></div>
          <div className="wrapper md:grid md:grid-cols-2 relative z-[1]">
            <div className="text-center sm:text-left">
              <div className="theLogo">
                <img
                  src={`${devBaseImgUrl}/logo-fbs.png`}
                  className="w-[157px] mx-auto sm:mx-0"
                  alt="Frontline Business Solutions Company Logo"
                />
              </div>
              <p className="text-xs my-6">
                Baloc Road, Brgy. San Ignacio, San Pablo City <br /> Laguna
                Philippines 4000
              </p>
              <div className="flex justify-center sm:flex-auto sm:justify-start">
                <ul className="flex gap-2 text-3xl mb-12 md:mb-0">
                  <li>
                    <a
                      href="https://www.facebook.com/frontline.business"
                      target="_blank"
                    >
                      <FaFacebookSquare />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/company/frontline-business-solutions-inc"
                      target="_blank"
                    >
                      <FaLinkedin />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/@frontlinebusinesssolutions6578"
                      target="_blank"
                    >
                      <FaYoutubeSquare />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/frontline.business"
                      target="_blank"
                    >
                      <FaInstagramSquare />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.tiktok.com/@frontlinebusinessinc"
                      target="_blank"
                    >
                      <AiFillTikTok />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="sm:grid sm:grid-cols-2">
              <div className="mb-12 sm:mb-0 text-center sm:text-left">
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
              <div className="text-center sm:text-left">
                <p className="font-semibold">QUICKLINKS</p>
                <ul className="text-xs my-6 [&>li]:mb-1">
                  <li>
                    <a href={`${devNavUrl}/webapp-hris`}>Web Solutions</a>
                  </li>
                  <li>
                    <a href={`${devNavUrl}/va-administrative`}>
                      Virtual Assistant Solutions
                    </a>
                  </li>
                  <li>
                    <a href={`${devNavUrl}/accounting-bookkeeping`}>
                      Accounting Solutions
                    </a>
                  </li>
                  <li>
                    <a href={`${devNavUrl}/college-ojt`}>
                      Learning Center Solutions
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="mt-10 relative z-[1]" />
          <div className="py-10 relative z-[1]">
            <div className="wrapper text-center lg:text-left lg:flex lg:justify-between items-center">
              <p className="text-xs mb-4 lg:mb-0">
                Copyright {copyrightYear()} | Frontline Business Solutions, Inc.
                All rights reserved.
              </p>
              <p className="text-xs">
                <a href={`${devNavUrl}/privacy-policy`}>Privacy Policy</a>
                <span className="mx-2">|</span>
                <a href={`${devNavUrl}/terms-of-service`}>Terms of Service</a>
                <span className="mx-2">|</span>{" "}
                <a href={`${devNavUrl}/eula`}>EULA</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
