import React from "react";
import { devNavUrl } from "../../../../helpers/functions-general";
import WebSvg from "../../../../partials/customSVG/WebSvg";
import { FaArrowRight } from "react-icons/fa";
import VASvg from "../../../../partials/customSVG/VASvg";
import AccountingSvg from "../../../../partials/customSVG/AccountingSvg";
import SkillDevSvg from "../../../../partials/customSVG/SkillDevSvg";
import { HiPencil } from "react-icons/hi";

const Services = ({
  servicesData,
  handleUpdateServicesTitle,
  handleUpdateServicesA,
  handleUpdateServicesB,
  handleUpdateServicesC,
  handleUpdateServicesD,
}) => {
  return (
    <section className="services py-10 relative">
      <div className="customContainer">
        <div className="theTitle leading-1 mb-12 relative">
          <a
            className="absolute cursor-pointer tooltip-btn left-[550px] top-2"
            data-tooltip="Edit contents"
            onClick={handleUpdateServicesTitle}
          >
            <HiPencil className=" bg-[#C7AC27] rounded-full  w-[25px] h-[25px] p-[5px] border-[1px] text-black" />
          </a>
          <p>
            {servicesData?.data?.length > 0 &&
            servicesData.data[0]?.services_sub_title_a
              ? servicesData?.data[0].services_sub_title_a
              : "Subtitle A"}
          </p>
          <h2 className="text-[clamp(30px,7vw,45px)] font-semibold text-primary leading-[1.1]">
            {servicesData?.data?.length > 0 &&
            servicesData.data[0]?.services_title
              ? servicesData?.data[0].services_title
              : "Title"}
          </h2>
          <p>
            {servicesData?.data?.length > 0 &&
            servicesData.data[0]?.services_sub_title_b
              ? servicesData?.data[0].services_sub_title_b
              : "Subtitle B"}
          </p>
        </div>
        <div className="wrapper grid gap-5 md:gap-0 grid-cols-1 md:grid-cols-2 ">
          <div className="serviceItem  z-10 grid  hover:addRadialGradient hover:bg-primary hover:addShadow hover:bg-opacity-100 bg-opacity-0 hover:text-light rounded-lg p-5 md:px-10 md:py-10 transition-all hover:addShadow group">
            <div className="relative">
              <div className="serviceName flex items-center gap-4 mb-6">
                <a
                  className="absolute cursor-pointer tooltip-btn right-0 -top-2"
                  data-tooltip="Edit contents"
                  onClick={handleUpdateServicesA}
                >
                  <HiPencil className=" bg-[#C7AC27] rounded-full  w-[25px] h-[25px] p-[5px] border-[1px] text-black" />
                </a>
                <WebSvg />
                <h3 className="text-[clamp(20px,5vw,30px)] leading-[1.2] font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-[transparent] group-hover:text-light">
                  {servicesData?.data?.length > 0 &&
                  servicesData.data[0]?.services_title_a
                    ? servicesData?.data[0].services_title_a
                    : "Title"}
                </h3>
              </div>
              <p className="mb-12">
                {servicesData?.data?.length > 0 &&
                servicesData.data[0]?.services_description_a
                  ? servicesData?.data[0].services_description_a
                  : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit perspiciatis voluptas assumenda aut esse fugiat!"}
              </p>
              <span className="flex items-center gap-3 font-normal lg:text-light text-xl lg:group-hover:opacity-100 lg:opacity-0 lg:translate-y-8 lg:group-hover:translate-y-0 lg:transition-all absolute bottom-0">
                {servicesData?.data?.length > 0 &&
                servicesData.data[0]?.services_button_text_a
                  ? servicesData?.data[0].services_button_text_a
                  : "Button"}
                <FaArrowRight />
              </span>
            </div>
          </div>
          <div className="serviceItem z-10 grid  hover:addRadialGradient hover:bg-primary hover:addShadow hover:bg-opacity-100 bg-opacity-0 hover:text-light rounded-lg p-5 md:px-10 md:py-10 transition-all hover:addShadow group">
            <div className="relative">
              <div className="serviceName  flex items-center gap-4 mb-6">
                <a
                  className="absolute cursor-pointer tooltip-btn right-0 -top-2"
                  data-tooltip="Edit contents"
                  onClick={handleUpdateServicesB}
                >
                  <HiPencil className=" bg-[#C7AC27] rounded-full  w-[25px] h-[25px] p-[5px] border-[1px] text-black" />
                </a>
                <VASvg />
                <h3 className="text-[clamp(20px,5vw,30px)] leading-[1.2] font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-[transparent] group-hover:text-light">
                  {servicesData?.data?.length > 0 &&
                  servicesData.data[0]?.services_title_b
                    ? servicesData?.data[0].services_title_b
                    : "Title"}
                </h3>
              </div>
              <p className="mb-12">
                {servicesData?.data?.length > 0 &&
                servicesData.data[0]?.services_description_b
                  ? servicesData?.data[0].services_description_b
                  : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit perspiciatis voluptas assumenda aut esse fugiat!"}
              </p>
              <span className="flex items-center gap-3 font-normal lg:text-light text-xl lg:group-hover:opacity-100 lg:opacity-0 lg:translate-y-8 lg:group-hover:translate-y-0 lg:transition-all absolute bottom-0">
                {servicesData?.data?.length > 0 &&
                servicesData.data[0]?.services_button_text_b
                  ? servicesData?.data[0].services_button_text_b
                  : "Button"}
                <FaArrowRight />
              </span>
            </div>
          </div>
          <div className="serviceItem z-10 grid  hover:addRadialGradient hover:bg-primary hover:addShadow hover:bg-opacity-100 bg-opacity-0 hover:text-light rounded-lg p-5 md:px-10 md:py-10 transition-all hover:addShadow group">
            <div className="relative">
              <div className="serviceName  flex items-center gap-4 mb-6">
                <a
                  className="absolute cursor-pointer tooltip-btn right-0 -top-2"
                  data-tooltip="Edit contents"
                  onClick={handleUpdateServicesC}
                >
                  <HiPencil className=" bg-[#C7AC27] rounded-full  w-[25px] h-[25px] p-[5px] border-[1px] text-black" />
                </a>
                <AccountingSvg />
                <h3 className="text-[clamp(20px,5vw,30px)] leading-[1.2] font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-[transparent] group-hover:text-light">
                  {servicesData?.data?.length > 0 &&
                  servicesData.data[0]?.services_title_c
                    ? servicesData?.data[0].services_title_c
                    : "Title"}
                </h3>
              </div>
              <p className="mb-12">
                {servicesData?.data?.length > 0 &&
                servicesData.data[0]?.services_description_c
                  ? servicesData?.data[0].services_description_c
                  : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit perspiciatis voluptas assumenda aut esse fugiat!"}
              </p>
              <span className="flex items-center gap-3 font-normal lg:text-light text-xl lg:group-hover:opacity-100 lg:opacity-0 lg:translate-y-8 lg:group-hover:translate-y-0 lg:transition-all absolute bottom-0">
                {servicesData?.data?.length > 0 &&
                servicesData.data[0]?.services_button_text_c
                  ? servicesData?.data[0].services_button_text_c
                  : "Button"}
                <FaArrowRight />
              </span>
            </div>
          </div>
          <div className="serviceItem z-10 grid  hover:addRadialGradient hover:bg-primary hover:addShadow hover:bg-opacity-100 bg-opacity-0 hover:text-light rounded-lg p-5 md:px-10 md:py-10 transition-all hover:addShadow group">
            <div className="relative">
              <div className="serviceName  flex items-center gap-8 mb-6">
                <a
                  className="absolute cursor-pointer tooltip-btn right-0 -top-2"
                  data-tooltip="Edit contents"
                  onClick={handleUpdateServicesD}
                >
                  <HiPencil className=" bg-[#C7AC27] rounded-full  w-[25px] h-[25px] p-[5px] border-[1px] text-black" />
                </a>
                <SkillDevSvg />
                <h3 className="text-[clamp(20px,5vw,30px)] font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-[transparent] group-hover:text-light">
                  {servicesData?.data?.length > 0 &&
                  servicesData.data[0]?.services_title_d
                    ? servicesData?.data[0].services_title_d
                    : "Title"}
                </h3>
              </div>
              <p className="mb-12">
                {servicesData?.data?.length > 0 &&
                servicesData.data[0]?.services_description_d
                  ? servicesData?.data[0].services_description_d
                  : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit perspiciatis voluptas assumenda aut esse fugiat!"}
              </p>
              <span className="flex items-center gap-3 font-normal lg:text-light text-xl lg:group-hover:opacity-100 lg:opacity-0 lg:translate-y-8 lg:group-hover:translate-y-0 lg:transition-all absolute bottom-0">
                {servicesData?.data?.length > 0 &&
                servicesData.data[0]?.services_button_text_d
                  ? servicesData?.data[0].services_button_text_d
                  : "Button"}
                <FaArrowRight />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
