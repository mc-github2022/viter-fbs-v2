import React from "react";
import { devNavUrl } from "../../../helpers/functions-general";
import WebSvg from "../../../partials/customSVG/WebSvg";
import { FaArrowRight } from "react-icons/fa";
import VASvg from "../../../partials/customSVG/VASvg";
import AccountingSvg from "../../../partials/customSVG/AccountingSvg";
import SkillDevSvg from "../../../partials/customSVG/SkillDevSvg";
import { HiPencil } from "react-icons/hi";

const Services = () => {
  return (
    <section className="services py-10 relative">
      <div className="customContainer">
        <div className="theTitle leading-1 mb-12 relative">
          <a
            className="absolute cursor-pointer tooltip-btn left-[550px] top-2"
            data-tooltip="Edit contents"
            // onClick={handleAdd}
          >
            <HiPencil className=" bg-[#C7AC27] rounded-full  w-[25px] h-[25px] p-[5px] border-[1px] text-black" />
          </a>
          <p>Here Are</p>
          <h2 className="text-[clamp(30px,7vw,45px)] font-semibold text-primary leading-[1.1]">
            Our Specialized Services
          </h2>
          <p>to Help Grow Your Business</p>
        </div>
        <div className="wrapper grid gap-5 md:gap-0 grid-cols-1 md:grid-cols-2 ">
          <div className="serviceItem  z-10 grid  hover:addRadialGradient hover:bg-primary hover:addShadow hover:bg-opacity-100 bg-opacity-0 hover:text-light rounded-lg p-5 md:px-10 md:py-10 transition-all hover:addShadow group">
            <div className="relative">
              <div className="serviceName flex items-center gap-4 mb-6">
                <a
                  className="absolute cursor-pointer tooltip-btn right-0 -top-2"
                  data-tooltip="Edit contents"
                  // onClick={handleAdd}
                >
                  <HiPencil className=" bg-[#C7AC27] rounded-full  w-[25px] h-[25px] p-[5px] border-[1px] text-black" />
                </a>
                <WebSvg />
                <h3 className="text-[clamp(20px,5vw,30px)] leading-[1.2] font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-[transparent] group-hover:text-light">
                  Web App & Website Development
                </h3>
              </div>
              <p className="mb-12">
                We deliver cutting-edge web development and custom applications
                to enhance user experience, boost engagement, and drive
                conversions.
              </p>
              <span className="flex items-center gap-3 font-normal lg:text-light text-xl lg:group-hover:opacity-100 lg:opacity-0 lg:translate-y-8 lg:group-hover:translate-y-0 lg:transition-all absolute bottom-0">
                Learn More <FaArrowRight />
              </span>
            </div>
          </div>
          <div className="serviceItem z-10 grid  hover:addRadialGradient hover:bg-primary hover:addShadow hover:bg-opacity-100 bg-opacity-0 hover:text-light rounded-lg p-5 md:px-10 md:py-10 transition-all hover:addShadow group">
            <div className="relative">
              <div className="serviceName  flex items-center gap-4 mb-6">
                <a
                  className="absolute cursor-pointer tooltip-btn right-0 -top-2"
                  data-tooltip="Edit contents"
                  // onClick={handleAdd}
                >
                  <HiPencil className=" bg-[#C7AC27] rounded-full  w-[25px] h-[25px] p-[5px] border-[1px] text-black" />
                </a>
                <VASvg />
                <h3 className="text-[clamp(20px,5vw,30px)] leading-[1.2] font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-[transparent] group-hover:text-light">
                  Virtual Assistant Solutions
                </h3>
              </div>
              <p className="mb-12">
                Our Virtual Assistant offers professional, flexible, and
                reliable support, freeing you to focus on growing your business.
              </p>
              <span className="flex items-center gap-3 font-normal lg:text-light text-xl lg:group-hover:opacity-100 lg:opacity-0 lg:translate-y-8 lg:group-hover:translate-y-0 lg:transition-all absolute bottom-0">
                Learn More <FaArrowRight />
              </span>
            </div>
          </div>
          <div className="serviceItem z-10 grid  hover:addRadialGradient hover:bg-primary hover:addShadow hover:bg-opacity-100 bg-opacity-0 hover:text-light rounded-lg p-5 md:px-10 md:py-10 transition-all hover:addShadow group">
            <div className="relative">
              <div className="serviceName  flex items-center gap-4 mb-6">
                <a
                  className="absolute cursor-pointer tooltip-btn right-0 -top-2"
                  data-tooltip="Edit contents"
                  // onClick={handleAdd}
                >
                  <HiPencil className=" bg-[#C7AC27] rounded-full  w-[25px] h-[25px] p-[5px] border-[1px] text-black" />
                </a>
                <AccountingSvg />
                <h3 className="text-[clamp(20px,5vw,30px)] leading-[1.2] font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-[transparent] group-hover:text-light">
                  Accounting Solutions
                </h3>
              </div>
              <p className="mb-12">
                We partner with Twomiles Corp for foreign clients accounting
                needs and support local startups with business registration and
                compliance for sustainable growth.
              </p>
              <span className="flex items-center gap-3 font-normal lg:text-light text-xl lg:group-hover:opacity-100 lg:opacity-0 lg:translate-y-8 lg:group-hover:translate-y-0 lg:transition-all absolute bottom-0">
                Learn More <FaArrowRight />
              </span>
            </div>
          </div>
          <div className="serviceItem z-10 grid  hover:addRadialGradient hover:bg-primary hover:addShadow hover:bg-opacity-100 bg-opacity-0 hover:text-light rounded-lg p-5 md:px-10 md:py-10 transition-all hover:addShadow group">
            <div className="relative">
              <div className="serviceName  flex items-center gap-8 mb-6">
                <a
                  className="absolute cursor-pointer tooltip-btn right-0 -top-2"
                  data-tooltip="Edit contents"
                  // onClick={handleAdd}
                >
                  <HiPencil className=" bg-[#C7AC27] rounded-full  w-[25px] h-[25px] p-[5px] border-[1px] text-black" />
                </a>
                <SkillDevSvg />
                <h3 className="text-[clamp(20px,5vw,30px)] font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-[transparent] group-hover:text-light">
                  Skills Development
                </h3>
              </div>
              <p className="mb-12">
                Our College OJT and Senior High School Immersion programs
                provide real-world skills development, preparing students for
                employment and aligning them with industry
              </p>
              <span className="flex items-center gap-3 font-normal lg:text-light text-xl lg:group-hover:opacity-100 lg:opacity-0 lg:translate-y-8 lg:group-hover:translate-y-0 lg:transition-all absolute bottom-0">
                Learn More <FaArrowRight />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
