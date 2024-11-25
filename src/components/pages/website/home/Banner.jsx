import React, { useState } from "react";
import BannerSlider from "./BannerSlider";

const Banner = () => {
  return (
    <>
      <section id="HomeBanner" className="banner place-content-center">
        <div className="pt-[43px] md:pt-[95px]">
          <BannerSlider />
        </div>
      </section>
    </>
  );
};

export default Banner;
