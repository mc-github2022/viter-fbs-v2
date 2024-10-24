import React from "react";
import { devBaseImgUrl } from "../../../helpers/functions-general";

const LcssPartners = () => {
  return (
    <>
      <section className="partners py-20">
        <div className="customContainer">
          <p>Our Partner</p>
          <h2 className="text-[clamp(20px,7vw,35px)] font-semibold text-primary leading-[1.1] mb-8">
            Schools and Universities.
          </h2>
          <ul className="flex flex-wrap justify-center gap-14 items-center">
            <li>
              <img
                className="w-[120px] h-[120px] object-contain"
                // src={`${devBaseImgUrl}/aclc.png`}
                src={`../../public/img/aclc.png`}
                alt=""
              />
            </li>
            <li>
              <img
                className="w-[120px] h-[120px] object-contain"
                // src={`${devBaseImgUrl}/dlsl_official_logo.png`}
                src={`../../public/img//dlsl_official_logo.png`}
                alt=""
              />
            </li>
            <li>
              <img
                className="w-[120px] h-[120px] object-contain"
                // src={`${devBaseImgUrl}/csu.png`}
                src={`../../public/img/csu.png`}
                alt=""
              />
            </li>
            <li>
              <img
                className="w-[120px] h-[120px] object-contain"
                // src={`${devBaseImgUrl}/bsu.png`}
                src={`../../public/img//bsu.png`}
                alt=""
              />
            </li>
            <li>
              <img
                className="w-[120px] h-[120px] object-contain"
                // src={`${devBaseImgUrl}/letran.png`}
                src={`../../public/img//letran.png`}
                alt=""
              />
            </li>
            <li>
              <img
                className="w-[120px] h-[120px] object-contain"
                // src={`${devBaseImgUrl}/lpu.png`}
                src={`../../public/img/lpu.png`}
                alt=""
              />
            </li>
            <li>
              <img
                className="w-[120px] h-[120px] object-contain"
                // src={`${devBaseImgUrl}/Bicol-Univ.png`}
                src={`../../public/img/Bicol-Univ.png`}
                alt=""
              />
            </li>
            <li>
              <img
                className="w-[120px] h-[120px] object-contain"
                // src={`${devBaseImgUrl}/lspu.png`}
                src={`../../public/img/lspu.png`}
                alt=""
              />
            </li>
            <li>
              <img
                className="w-[120px] h-[120px] object-contain"
                // src={`${devBaseImgUrl}/pup.png`}
                src={`../../public/img/pup.png`}
                alt=""
              />
            </li>
            <li>
              <img
                className="w-[120px] h-[120px] object-contain"
                // src={`${devBaseImgUrl}/spc.png`}
                src={`../../public/img/spc.png`}
                alt=""
              />
            </li>
            <li>
              <img
                className="w-[120px] h-[120px] object-contain"
                // src={`${devBaseImgUrl}/sti.png`}
                src={`../../public/img/sti.png`}
                alt=""
              />
            </li>
            <li>
              <img
                className="w-[120px] h-[120px] object-contain"
                // src={`${devBaseImgUrl}/tip.png`}
                src={`../../public/img/tip.png`}
                alt=""
              />
            </li>
            <li>
              <img
                className="w-[120px] h-[120px] object-contain"
                // src={`${devBaseImgUrl}/tmlc.png`}
                src={`../../public/img/tmlc.png`}
                alt=""
              />
            </li>
            <li>
              <img
                className="w-[120px] h-[120px] object-contain"
                // src={`${devBaseImgUrl}/ub.png`}
                src={`../../public/img/ub.png`}
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
