import React from "react";
import { FaRegCircleCheck } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { banner } from "./data";
import { devBaseImgUrl } from "../../../../helpers/functions-general";

const ServiceHrBanner = () => {
  return (
    <>
      <section
        id="ServiceHrBanner"
        className="banner pt-[59px] md:pt-[95px] min-h-[100vh] md:min-h-[90vh] relative flex items-center"
      >
        <img
          src={`${devBaseImgUrl}/${banner[0].bannerImage}`}
          alt="Smarter, Faster, and More Efficient HR Information System"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        <div className="customContainer relative z-10 h-full">
          <div className="wrapper flex flex-col justify-center items-center h-full text-center lg:grid lg:grid-cols-2">
            <div className="text-center py-10 lg:text-left">
              <h2 className="text-[clamp(30px,3vw,45px)] leading-[1.1] mb-8 text-light font-light">
                {banner[0].bannerTitle}
                <span className="text-light font-semibold">
                  {banner[0].bannerTitleBoldText}
                </span>
              </h2>
              <p className="text-light mb-10">{banner[0].bannerTextDesc}</p>
              <a
                href="https://calendly.com/carlodm-fbs/demo-discovery-call"
                target="_blank"
                className="btn bg-transparent text-light border-2"
              >
                {banner[0].bannerBtnText}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceHrBanner;
