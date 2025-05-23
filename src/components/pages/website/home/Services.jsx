import React from "react";
import { FaArrowRight } from "react-icons/fa";
import AccountingSvg from "../../../partials/customSVG/AccountingSvg";
import SkillDevSvg from "../../../partials/customSVG/SkillDevSvg";
import VASvg from "../../../partials/customSVG/VASvg";
import WebSvg from "../../../partials/customSVG/WebSvg";
import { apiVersion, devNavUrl } from "../../../helpers/functions-general";
import useQueryData from "../../../custom-hooks/useQueryData";

const Services = () => {
  const { data: servicesData } = useQueryData(
    `${apiVersion}/services`, // endpoint
    "get", // method
    "services", // key
    {},
    null,
    true
  );
  return (
    <section className="services py-10 relative">
      <div className="customContainer">
        <div className="theTitle leading-1 mb-12">
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
              {servicesData?.data.map((item, key) => (
                <a
                  href={`${devNavUrl}${item.services_button_link_a}`}
                  key={key}
                >
                  <div className="serviceName flex items-center gap-4 mb-6">
                    <WebSvg />
                    <h3 className="text-[clamp(20px,5vw,30px)] leading-[1.2] font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-[transparent] group-hover:text-light">
                      {item.services_title_a}
                    </h3>
                  </div>
                  <p className="mb-12">{item.services_description_a}</p>
                  <span className="flex items-center gap-3 font-normal lg:text-light text-xl lg:group-hover:opacity-100 lg:opacity-0 lg:translate-y-8 lg:group-hover:translate-y-0 lg:transition-all absolute bottom-0">
                    {item.services_button_text_a} <FaArrowRight />
                  </span>
                </a>
              ))}
            </div>
          </div>
          <div className="serviceItem z-10 grid  hover:addRadialGradient hover:bg-primary hover:addShadow hover:bg-opacity-100 bg-opacity-0 hover:text-light rounded-lg p-5 md:px-10 md:py-10 transition-all hover:addShadow group">
            <div className="relative">
              {servicesData?.data.map((item, key) => (
                <a
                  href={`${devNavUrl}${item.services_button_link_b}`}
                  className=""
                  key={key}
                >
                  <div className="serviceName  flex items-center gap-4 mb-6">
                    <VASvg />
                    <h3 className="text-[clamp(20px,5vw,30px)] leading-[1.2] font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-[transparent] group-hover:text-light">
                      {item.services_title_b}
                    </h3>
                  </div>
                  <p className="mb-12">{item.services_description_b}</p>
                  <span className="flex items-center gap-3 font-normal lg:text-light text-xl lg:group-hover:opacity-100 lg:opacity-0 lg:translate-y-8 lg:group-hover:translate-y-0 lg:transition-all absolute bottom-0">
                    {item.services_button_text_b} <FaArrowRight />
                  </span>
                </a>
              ))}
            </div>
          </div>
          <div className="serviceItem z-10 grid  hover:addRadialGradient hover:bg-primary hover:addShadow hover:bg-opacity-100 bg-opacity-0 hover:text-light rounded-lg p-5 md:px-10 md:py-10 transition-all hover:addShadow group">
            <div className="relative">
              {servicesData?.data.map((item, key) => (
                <a
                  href={`${devNavUrl}${item.services_button_link_c}`}
                  key={key}
                >
                  <div className="serviceName  flex items-center gap-4 mb-6">
                    <AccountingSvg />
                    <h3 className="text-[clamp(20px,5vw,30px)] leading-[1.2] font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-[transparent] group-hover:text-light">
                      {item.services_title_c}
                    </h3>
                  </div>
                  <p className="mb-12">{item.services_description_c}</p>
                  <span className="flex items-center gap-3 font-normal lg:text-light text-xl lg:group-hover:opacity-100 lg:opacity-0 lg:translate-y-8 lg:group-hover:translate-y-0 lg:transition-all absolute bottom-0">
                    {item.services_button_text_c} <FaArrowRight />
                  </span>
                </a>
              ))}
            </div>
          </div>
          <div className="serviceItem z-10 grid  hover:addRadialGradient hover:bg-primary hover:addShadow hover:bg-opacity-100 bg-opacity-0 hover:text-light rounded-lg p-5 md:px-10 md:py-10 transition-all hover:addShadow group">
            <div className="relative">
              {servicesData?.data.map((item, key) => (
                <a
                  href={`${devNavUrl}${item.services_button_link_d}`}
                  key={key}
                >
                  <div className="serviceName  flex items-center gap-8 mb-6">
                    <SkillDevSvg />
                    <h3 className="text-[clamp(20px,5vw,30px)] font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-[transparent] group-hover:text-light">
                      {item.services_title_d}
                    </h3>
                  </div>
                  <p className="mb-12">
                  {item.services_description_d}
                  </p>
                  <span className="flex items-center gap-3 font-normal lg:text-light text-xl lg:group-hover:opacity-100 lg:opacity-0 lg:translate-y-8 lg:group-hover:translate-y-0 lg:transition-all absolute bottom-0">
                    {item.services_button_text_d} <FaArrowRight />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
        {/* <div className="bgImage opacity-0 lg:opacity-100 absolute top-[50%] h-[600px] -translate-y-[50%] right-0 z-0 ">
          <img
            src="../../public/img/logoBigGlobe.png"
            className="w-full h-full object-contain object-top"
            alt=""
          />
        </div> */}
      </div>
    </section>
  );
};

export default Services;
