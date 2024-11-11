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
        className={`banner bg-cover bg-center pt-[59px] md:pt-[95px]`}
        style={{
          // backgroundImage: `url(${devBaseImgUrl}/ServicesBanner.jpg)`,
          backgroundImage: `url(${devBaseImgUrl}/${banner[0].bannerImage})`,
        }}
      >
        <div className="customContainer">
          <div className="wrapper flex flex-col justify-center lg:grid lg:grid-cols-2 place-items-center  min-h-[350px] md:min-h-[80vh] transition-all w-full">
            <div className="text-center py-10 lg:text-left">
              <h2 className="text-[clamp(30px,3vw,45px)] leading-[1.1] mb-8 text-light font-light">
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
