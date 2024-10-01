import React from "react";
import { devBaseImgUrl } from "../../../helpers/functions-general";

const WhyUsPartners = () => {
  return (
    <>
      <section className="partners py-20">
        <div className="customContainer">
          <p>Cliennts who trusted their</p>
          <h2 className="text-[35px] font-semibold text-primary leading-[1.1] mb-8">
            growth with us.
          </h2>
          <ul className="flex flex-wrap justify-center gap-14 items-center">
            <li>
              <img
                className="w-[120px] h-[120px] object-contain"
                // src={`${devBaseImgUrl}/tazaMia.png`}
                src={`../../public/img/tazaMia.png`}
                alt=""
              />
            </li>
            <li>
              <img
                className="w-[120px] h-[120px] object-contain"
                // src={`${devBaseImgUrl}/web-obich.png`}
                src={`../../public/img/web-obich.png`}
                alt=""
              />
            </li>
            <li>
              <img
                className="w-[120px] h-[120px] object-contain"
                // src={`${devBaseImgUrl}/aka-global.png`}
                src={`../../public/img/aka-global.png`}
                alt=""
              />
            </li>
            <li>
              <img
                className="w-[120px] h-[120px] object-contain"
                // src={`${devBaseImgUrl}/DTOD-BPO.png`}
                src={`../../public/img/DTOD-BPO.png`}
                alt=""
              />
            </li>
            <li>
              <img
                className="w-[120px] h-[120px] object-contain"
                // src={`${devBaseImgUrl}/bensHalo.png`}
                src={`../../public/img/bensHalo.png`}
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
