import React from "react";
import { devBaseImgUrl } from "../../../helpers/functions-general";

const WhyUsPartners = () => {
  return (
    <>
      <section className="partners py-20">
        <div className="customContainer">
          <p>Our Ministry Partners</p>
          <h2 className="text-[clamp(20px,7vw,35px)] font-semibold text-primary leading-[1.1] mb-8">
            Who Help Support <br />
            in Our Mission.
          </h2>
          <ul className="flex flex-wrap justify-center gap-14 items-center">
            <li>
              <img
                className="w-[120px] h-[100px] object-contain"
                src={`${devBaseImgUrl}/ftc-logo.png`}
                alt="client logo"
              />
            </li>
            <li>
              <img
                className="w-[180px] h-[120px] object-contain"
                src={`${devBaseImgUrl}/logo-pfm.png`}
                alt="client logo"
              />
            </li>
            <li>
              <img
                className="w-[200px] h-[120px] object-contain"
                src={`${devBaseImgUrl}/logo-fwc-2.png`}
                alt="client logo"
              />
            </li>
            <li>
              <img
                className="w-[200px] h-[130px] object-contain"
                src={`${devBaseImgUrl}/logo-threadworks.png`}
                alt="client logo"
              />
            </li>
            <li>
              <img
                className="w-[120px] h-[100px] object-contain"
                src={`${devBaseImgUrl}/logo-fca.png`}
                alt="client logo"
              />
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default WhyUsPartners;
