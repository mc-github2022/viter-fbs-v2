import React from "react";
import { devBaseImgUrl } from "../../../../helpers/functions-general";

const ConStudPartners = () => {
  return (
    <>
      <section className="ConStudPartners py-20">
        <div className="customContainer">
          <p>Our Partner</p>
          <h2 className="text-[clamp(20px,7vw,35px)] font-semibold text-primary leading-[1.1] mb-8">
            school and universities.
          </h2>
          <ul className="flex flex-wrap justify-center gap-14 items-center">
            <li>
              <img
                className="w-[120px] h-[120px] object-contain"
                src={`${devBaseImgUrl}/aclc.png`}
                alt=""
              />
            </li>
            <li>
              <img
                className="w-[120px] h-[120px] object-contain"
                src={`${devBaseImgUrl}/dlsl_official_logo.png`}
                alt=""
              />
            </li>
            <li>
              <img
                className="w-[120px] h-[120px] object-contain"
                src={`${devBaseImgUrl}/csu.png`}
                alt=""
              />
            </li>
            <li>
              <img
                className="w-[120px] h-[120px] object-contain"
                src={`${devBaseImgUrl}/bsu.png`}
                alt=""
              />
            </li>
            <li>
              <img
                className="w-[120px] h-[120px] object-contain"
                src={`${devBaseImgUrl}/letran.png`}
                alt=""
              />
            </li>
            <li>
              <img
                className="w-[120px] h-[120px] object-contain"
                src={`${devBaseImgUrl}/lpu.png`}
                alt=""
              />
            </li>
            <li>
              <img
                className="w-[120px] h-[120px] object-contain"
                src={`${devBaseImgUrl}/Bicol-Univ.png`}
                alt=""
              />
            </li>
            <li>
              <img
                className="w-[120px] h-[120px] object-contain"
                src={`${devBaseImgUrl}/lspu.png`}
                alt=""
              />
            </li>
            <li>
              <img
                className="w-[120px] h-[120px] object-contain"
                src={`${devBaseImgUrl}/pup.png`}
                alt=""
              />
            </li>
            <li>
              <img
                className="w-[120px] h-[120px] object-contain"
                src={`${devBaseImgUrl}/spc.png`}
                alt=""
              />
            </li>
            <li>
              <img
                className="w-[120px] h-[120px] object-contain"
                src={`${devBaseImgUrl}/sti.png`}
                alt=""
              />
            </li>
            <li>
              <img
                className="w-[120px] h-[120px] object-contain"
                src={`${devBaseImgUrl}/tip.png`}
                alt=""
              />
            </li>
            <li>
              <img
                className="w-[120px] h-[120px] object-contain"
                src={`${devBaseImgUrl}/tmlc.png`}
                alt=""
              />
            </li>
            <li>
              <img
                className="w-[120px] h-[120px] object-contain"
                src={`${devBaseImgUrl}/ub.png`}
                alt=""
              />
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default ConStudPartners;
