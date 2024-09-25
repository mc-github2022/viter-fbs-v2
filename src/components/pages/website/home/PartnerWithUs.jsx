import React from "react";
import { devBaseImgUrl } from "../../../helpers/functions-general";

const PartnerWithUs = () => {
  return (
    <>
      <section className="partnerWithUs pt-60 pb-40 md:pt-60 md:pb-20 relative overflow-hidden">
        <div className="customContainer">
          <div className="wrapper grid grid-cols-1 lg:grid-cols-[_1.5fr_1fr] ">
            <div className="bg-customGray md:bg-opacity-70 py-20 px-10 z-10 rounded-lg addShadow">
              <p>Empowering you business with</p>
              <h2 className="lg:text-[45px] font-semibold text-primary leading-[1.1] mb-8 text-[clamp(20px,4vw,45px)]">
                reliable, cost-effective, and expertly managed solutins.
              </h2>
              <p className="mb-8">
                Our talented professionals are carefully supervised by
                experienced management, ensuring high standards and cosistent
                performance. Plus, we are dedicated to empowering local talent,
                and helping you support the community while benefiting from
                skilled expertise.
              </p>
              <a
                href=""
                className="btn bg-primary text-light my-5  inline-block rounded-full "
              >
                PARTNER WITH US
              </a>
            </div>
            <div className="bgImage w-full absolute top-0 left-0 md:left-auto md:w-[68%] md:right-0 md:h-full ">
              <img
                src={`${devBaseImgUrl}/partnerWithUs.jpg`}
                className="w-full h-full object-cover object-top"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PartnerWithUs;
