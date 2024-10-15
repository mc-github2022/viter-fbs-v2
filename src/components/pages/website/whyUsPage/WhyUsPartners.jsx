import React from "react";
import { devBaseImgUrl } from "../../../helpers/functions-general";

const WhyUsPartners = () => {
  return (
    <>
      <section className="partners py-20">
        <div className="customContainer">
          <p>Clients who trusted their</p>
          <h2 className="text-[clamp(20px,7vw,35px)] font-semibold text-primary leading-[1.1] mb-8">
            growth with us.
          </h2>
          <ul className="flex flex-wrap justify-center gap-14 items-center">
            <li>
              <img
                className="w-[120px] h-[100px] object-contain"
                // src={`${devBaseImgUrl}/DTOD-BPO.png`}
                src={`../../public/img/ftc-logo.png`}
                alt=""
              />
            </li>
            <li>
              <img
                className="w-[180px] h-[120px] object-contain"
                // src={`${devBaseImgUrl}/tazaMia.png`}
                src={`../../public/img/logo-pfm.png`}
                alt=""
              />
            </li>
            <li>
              <img
                className="w-[200px] h-[120px] object-contain"
                // src={`${devBaseImgUrl}/web-obich.png`}
                src={`../../public/img/logo-fwc-2.png`}
                alt=""
              />
            </li>
            <li>
              <img
                className="w-[200px] h-[130px] object-contain"
                // src={`${devBaseImgUrl}/bensHalo.png`}
                src={`../../public/img/logo-threadworks.png`}
                alt=""
              />
            </li>
            <li>
              <img
                className="w-[120px] h-[100px] object-contain"
                // src={`${devBaseImgUrl}/aka-global.png`}
                src={`../../public/img/logo-fca.png`}
                alt=""
              />
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default WhyUsPartners;
