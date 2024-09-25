import React from "react";
import { devBaseImgUrl } from "../../../helpers/functions-general";

const LcssPartners = () => {
  return (
    <>
      <section className="partners py-20">
        <div className="customContainer">
          <p>Our Partner</p>
          <h2 className="text-[35px] font-semibold text-primary leading-[1.1] mb-8">
            school and universities.
          </h2>
          <ul className="flex flex-wrap justify-center gap-10 items-center">
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
          </ul>
        </div>
      </section>
    </>
  );
};

export default LcssPartners;
