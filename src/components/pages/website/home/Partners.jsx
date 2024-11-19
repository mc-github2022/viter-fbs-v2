import React from "react";
import { devBaseImgUrl } from "../../../helpers/functions-general";

const Partners = () => {
  return (
    <>
      <section className="partners py-24 lg:pb-24 lg:pt-0">
        <div className="customContainer">
          <div className="wrapper grid grid-cols-1 lg:grid-cols-[_1fr_1fr]">
            <div className="order-2 lg:order-1">
              <ul className="grid grid-cols-2 [&>li>img]:mx-auto gap-10 items-center">
                <li>
                  <img
                    src={`${devBaseImgUrl}/logo-avant-white.png`}
                    alt="Avant"
                    className="w-[170px] h-[170px] object-contain"
                  />
                </li>
                <li>
                  <img
                    src={`${devBaseImgUrl}/ftc-e1716532807623.png`}
                    alt="Face the Children"
                    className="w-[170px] h-[170px] object-contain"
                  />
                </li>
                <li>
                  <img
                    src={`${devBaseImgUrl}/logo-go-mission-trip.png`}
                    alt="Go Mission trip"
                    className="w-[170px] h-[170px] object-contain"
                  />
                </li>
                <li>
                  <img
                    src={`${devBaseImgUrl}/jcceos-logo.png`}
                    alt="Jesus Christ's CEOs"
                    className="w-[170px] h-[170px] object-contain"
                  />
                </li>
                <li>
                  <img
                    src={`${devBaseImgUrl}/lightuptoy.png`}
                    alt="Light Up"
                    className="w-[170px] h-[170px] object-contain"
                  />
                </li>
                <li>
                  <img
                    src={`${devBaseImgUrl}/rebekah.png`}
                    alt="Rebekah Nicole"
                    className="w-[170px] h-[170px] object-contain"
                  />
                </li>
                <li>
                  <img
                    src={`${devBaseImgUrl}/tm_logo_dark.png`}
                    alt="Two Miles"
                    className="w-[170px] h-[170px] object-contain"
                  />
                </li>
                <li>
                  <img
                    src={`${devBaseImgUrl}/logo-world-focus.png`}
                    alt="World Focus"
                    className="w-[170px] h-[170px] object-contain"
                  />
                </li>
              </ul>
            </div>
            <div className="text-right flex items-center justify-end order-1 lg:order-2">
              <div className="mb-20">
                <h3 className="text-[clamp(30px,6vw,45px)] font-semibold  leading-[1.1] mb-8  text-dark">
                  They Love <br />
                  <span className="text-primary">Working With Us.</span>
                </h3>
                <div className="flex justify-end">
                  <p className="lg:w-[400px]">
                    Explore the diverse range of clients and partners who trust
                    us to deliver exceptional solution and services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Partners;
