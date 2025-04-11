import React from "react";
import { devBaseImgUrl } from "../../../helpers/functions-general";
import { HiPencil } from "react-icons/hi";
import { FaRegImages } from "react-icons/fa";

const PartnerWithUs = () => {
  return (
    <>
      <section className="partnerWithUs pt-[50%] pb-40 md:pt-20 md:pb-20 relative overflow-hidden">
        <div className="customContainer">
          <div className="wrapper grid grid-cols-1 lg:grid-cols-[_1.5fr_1fr] ">
            <div className="bg-customGray md:bg-opacity-70 py-10 md:py-20 px-10 z-10 rounded-lg addShadow relative">
              <p>Empowering Your Business With</p>
              <h2 className="lg:text-[45px] font-semibold text-primary leading-[1.1] mb-8 text-[clamp(20px,4vw,45px)]">
                Reliable, Cost-effective, and Expertly Managed Solutions.
              </h2>

              <p className="mb-8">
                Our talented professionals are carefully supervised by
                experienced management, ensuring high standards and consistent
                performance. Plus, we are dedicated to empowering local talent,
                and helping you support the community while benefiting from
                skilled expertise.
              </p>
              <button className="btn bg-primary text-light my-5  font-semibold inline-block rounded-full ">
                PARTNER WITH US
              </button>
            </div>
            <div className="bgImage w-full absolute top-0 left-0 md:left-auto md:w-[68%] md:right-0 md:h-full ">
              <a
                className="absolute cursor-pointer tooltip-btn right-1 top-2"
                data-tooltip="Edit contents"
                // onClick={handleAdd}
              >
                <FaRegImages className=" bg-[#C7AC27] rounded-full  w-[25px] h-[25px] p-[5px] border-[1px] text-black" />
              </a>
              <img
                src={`${devBaseImgUrl}/partnerWithUs.jpg`}
                loading="lazy"
                className="w-full h-full object-cover object-top"
                alt="Reliable, Cost-effective, and Expertly Managed Solutions."
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PartnerWithUs;
