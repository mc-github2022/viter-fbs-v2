import React from "react";
import { FaArrowRight } from "react-icons/fa";
import webLogo from "/web.svg";
import WebSvg from "../../../partials/customSVG/WebSvg";
import VASvg from "../../../partials/customSVG/VASvg";
import AccountingSvg from "../../../partials/customSVG/AccountingSvg";
import SkillDevSvg from "../../../partials/customSVG/SkillDevSvg";

const Services = () => {
  return (
    <section className="services py-20 relative">
      <div className="customContainer">
        <div className="theTitle leading-1 mb-12">
          <p>We are here</p>
          <h2 className="text-[clamp(30px,7vw,45px)] font-semibold text-primary leading-[1.1]">
            to grow your business
          </h2>
          <p>through our specialized services</p>
        </div>
        <div className="wrapper grid  grid-cols-1 md:grid-cols-2 ">
          <div className="serviceItem  z-10 grid  hover:addRadialGradient hover:bg-primary hover:addShadow hover:bg-opacity-100 bg-opacity-0 hover:text-light rounded-lg p-5 md:px-10 md:py-10 transition-all hover:addShadow group">
            <div>
              <div className="serviceName  flex items-center gap-4 mb-6">
                <WebSvg />
                <h3 className="text-[clamp(20px,5vw,30px)] leading-[1.2] font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-[transparent] group-hover:text-light">
                  Web App & Website Development
                </h3>
              </div>
              <p className="mb-6">
                We Deliver cutting-edge web development and custom applications
                to enhance user experience, boost engagement, and drive
                conversions.
              </p>
              <a
                href="#"
                className="flex items-center gap-3 font-normal sm:text-light text-xl group-hover:opacity-100 sm:opacity-0 sm:translate-y-8 sm:group-hover:translate-y-0 transition-all ">
                Learn More <FaArrowRight />
              </a>
            </div>
          </div>
          <div className="serviceItem z-10 grid  hover:addRadialGradient hover:bg-primary hover:addShadow hover:bg-opacity-100 bg-opacity-0 hover:text-light rounded-lg p-5 md:px-10 md:py-10 transition-all hover:addShadow group">
            <div>
              <div className="serviceName  flex items-center gap-4 mb-6">
                <VASvg />
                <h3 className="text-[clamp(20px,5vw,30px)] leading-[1.2] font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-[transparent] group-hover:text-light">
                  Virtual Assistant Solutions
                </h3>
              </div>
              <p className="mb-6">
                Our Virtual Assistant offer professional, flexible, and
                realiable support, freeing you to focus on growing your
                business.
              </p>
              <a
                href="#"
                className="font-normal flex items-center gap-3  sm:text-light text-xl group-hover:opacity-100 sm:opacity-0 sm:translate-y-8 sm:group-hover:translate-y-0 transition-all ">
                Learn More <FaArrowRight />
              </a>
            </div>
          </div>
          <div className="serviceItem z-10 grid  hover:addRadialGradient hover:bg-primary hover:addShadow hover:bg-opacity-100 bg-opacity-0 hover:text-light rounded-lg p-5 md:px-10 md:py-10 transition-all hover:addShadow group">
            <div>
              <div className="serviceName  flex items-center gap-4 mb-6">
                <AccountingSvg />
                <h3 className="text-[clamp(20px,5vw,30px)] leading-[1.2] font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-[transparent] group-hover:text-light">
                  Accounting Solutions
                </h3>
              </div>
              <p className="mb-6">
                We partner with Twomiles Corp for foreign clients accouting
                needs and support local startups with business registration and
                compliance for systainable growth.
              </p>
              <a
                href="#"
                className="font-normal flex items-center gap-3  sm:text-light text-xl group-hover:opacity-100 sm:opacity-0 sm:translate-y-8 sm:group-hover:translate-y-0 transition-all ">
                Learn More <FaArrowRight />
              </a>
            </div>
          </div>
          <div className="serviceItem z-10 grid place-items-center hover:addRadialGradient hover:bg-primary hover:addShadow hover:bg-opacity-100 bg-opacity-0 hover:text-light rounded-lg px-10 py-10 transition-all hover:addShadow group">
            <div>
              <div className="serviceName  flex items-center gap-8 mb-6">
                <SkillDevSvg />
                <h3 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-[transparent] group-hover:text-light">
                  Skills Development
                </h3>
              </div>
              <p className="mb-6">
                Our College OJT and Senior High School Immersions programs
                provide real-world skills development, preparing students for
                employment and aligning them with industry
              </p>
              <a
                href="#"
                className="font-normal flex items-center gap-3  sm:text-light text-xl group-hover:opacity-100 sm:opacity-0 sm:translate-y-8 sm:group-hover:translate-y-0 transition-all ">
                Learn More <FaArrowRight />
              </a>
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
