import React from "react";
import { banner } from "./data";

const VaAdminSolutionBanner = () => {
  return (
    <>
      <section
        id="VaAdminSolutionBanner"
        className={`banner bg-cover bg-center pt-[59px] md:pt-[112px]`}
        style={{
          // backgroundImage: `url(${devBaseImgUrl}/VABG.jpg)`,
          backgroundImage: `url(../../public/img/${banner[0].bannerImage})`,
        }}
      >
        <div className="customContainer">
          <div className="wrapper flex flex-col justify-center lg:grid lg:grid-cols-2 place-items-center min-h-[90vh] md:h-[70vh] lg:min-h-0 transition-all w-full">
            <div className="text-center lg:text-left">
              <h2 className="text-[clamp(30px,4vw,45px)] leading-[1.1] mb-8 text-light">
                {banner[0].bannerTitle}
                <br />
                <span className="text-light font-semibold">
                  {banner[0].bannerTitleBoldText}
                </span>
              </h2>
              <p className="text-light font-light mb-10">
                {banner[0].bannerTextDesc}
              </p>
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

export default VaAdminSolutionBanner;
