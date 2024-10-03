import React from "react";
import { banner } from "./data";

const VaResearchBanner = () => {
  return (
    <>
      <section
        id="VaResearchBanner"
        className={`banner bg-cover bg-center pt-[59px] md:pt-[112px]`}
        style={{
          // backgroundImage: `url(${devBaseImgUrl}/VABG.jpg)`,
          backgroundImage: `url(../../public/img/${banner[0].bannerImage})`,
        }}
      >
        <div className="customContainer">
          <div className="wrapper grid grid-cols-2 place-items-center h-[80vh] md:h-[70vh] transition-all w-full">
            <div className="text-left">
              <h2 className="text-[45px] leading-[1.1] mb-8 text-light">
                {banner[0].bannerTitle}
                <br />
                <span className="text-light font-semibold">
                  {banner[0].bannerTitleBoldText}
                </span>
              </h2>
              <p className="text-light mb-10">{banner[0].bannerTextDesc}</p>
              <a href="#" className="btn bg-transparent text-light border-2">
                {banner[0].bannerTextDesc}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VaResearchBanner;
