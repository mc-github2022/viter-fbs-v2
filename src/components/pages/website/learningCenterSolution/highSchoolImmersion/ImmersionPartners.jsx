import React from "react";
import { devBaseImgUrl } from "../../../../helpers/functions-general";

const ImmersionPartners = () => {
  return (
    <>
      <section className="ImmersionPartners py-20">
        <div className="customContainer">
          <p>Our Partner</p>
          <h2 className="text-[clamp(20px,7vw,35px)] font-semibold text-primary leading-[1.1] mb-8">
            Educational Institutions
          </h2>
          <ul className="flex flex-wrap justify-center gap-14 items-center">
            <li>
              <img
                className="w-[120px] h-[120px] object-contain"
                // src={`${devBaseImgUrl}/aclc.png`}
                src={`${devBaseImgUrl}/aclc.png`}
                alt=""
              />
            </li>
            <li>
              <img
                className="w-[120px] h-[120px] object-contain"
                // src={`${devBaseImgUrl}/dlsl_official_logo.png`}
                src={`${devBaseImgUrl}/GVA.png`}
                alt=""
              />
            </li>
            <li>
              <img
                className="w-[120px] h-[120px] object-contain"
                // src={`${devBaseImgUrl}/csu.png`}
                src={`${devBaseImgUrl}/MFMC.png`}
                alt=""
              />
            </li>
            <li>
              <img
                className="w-[120px] h-[120px] object-contain"
                // src={`${devBaseImgUrl}/bsu.png`}
                src={`${devBaseImgUrl}/SLIS.png`}
                alt=""
              />
            </li>
            <li>
              <img
                className="w-[120px] h-[120px] object-contain"
                // src={`${devBaseImgUrl}/letran.png`}
                src={`${devBaseImgUrl}/SPC.png`}
                alt=""
              />
            </li>
            <li>
              <img
                className="w-[120px] h-[120px] object-contain"
                // src={`${devBaseImgUrl}/lpu.png`}
                src={`${devBaseImgUrl}/STMS.png`}
                alt=""
              />
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default ImmersionPartners;
