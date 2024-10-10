import React from "react";

const ImmersionPartners = () => {
  return (
    <>
      <section className="ImmersionPartners py-20">
        <div className="customContainer">
          <p>Our Partner</p>
          <h2 className="text-[35px] font-semibold text-primary leading-[1.1] mb-8">
            educational institutions
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
                src={`../../public/img//GVA.png`}
                alt=""
              />
            </li>
            <li>
              <img
                className="w-[120px] h-[120px] object-contain"
                // src={`${devBaseImgUrl}/csu.png`}
                src={`../../public/img/MFMC.png`}
                alt=""
              />
            </li>
            <li>
              <img
                className="w-[120px] h-[120px] object-contain"
                // src={`${devBaseImgUrl}/bsu.png`}
                src={`../../public/img//SLIS.png`}
                alt=""
              />
            </li>
            <li>
              <img
                className="w-[120px] h-[120px] object-contain"
                // src={`${devBaseImgUrl}/letran.png`}
                src={`../../public/img//SPC.png`}
                alt=""
              />
            </li>
            <li>
              <img
                className="w-[120px] h-[120px] object-contain"
                // src={`${devBaseImgUrl}/lpu.png`}
                src={`../../public/img/STMS.png`}
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
