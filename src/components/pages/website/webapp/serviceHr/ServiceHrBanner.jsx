import React from "react";
import { FaRegCircleCheck } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { banner } from "./data";

const ServiceHrBanner = () => {
  return (
    <>
      <section
        id="ServiceHrBanner"
        className={`banner bg-cover bg-center pt-[59px] md:pt-[112px]`}
        style={{
          // backgroundImage: `url(${devBaseImgUrl}/ServicesBanner.jpg)`,
          backgroundImage: `url(../../public/img/${banner[0].bannerImage})`,
        }}
      >
        <div className="customContainer">
          <div className="wrapper flex flex-col justify-center md:grid md:grid-cols-2 place-items-center h-[80vh] md:h-[90vh] transition-all w-full">
            <div className="text-center md:text-left">
              <h2 className="leading-[1.1] mb-8 text-light font-light text-[clamp(30px,7vw,56px)]">
                {banner[0].bannerTitle}

                <span className="text-light font-semibold">
                  {banner[0].bannerTitleBoldText}
                </span>
              </h2>
              <p className="text-light mb-10">{banner[0].bannerTextDesc}</p>
              <a href="#" className="btn bg-transparent text-light border-2">
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
