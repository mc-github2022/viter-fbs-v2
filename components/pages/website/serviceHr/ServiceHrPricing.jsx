import React from "react";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import { devBaseImgUrl } from "../../../helpers/functions-general";
import { FaCheckCircle, FaRegThumbsUp } from "react-icons/fa";

const ServiceHrPricing = () => {
  return (
    <>
      <section className="ServiceHrPricing py-20 bg-[#000000] relative overflow-hidden">
        <div className="footerGradientBlack absolute h-[1000px] w-full bottom-[-30%] right-[-30%]"></div>
        <div className="absolute bg-light h-[180px] w-full bottom-0 z-[1]"></div>
        <div className="customContainer">
          <div className="mb-20 text-center relative z-[3]">
            <p className="text-light">Choose what's best for your needs</p>
            <h3 className="text-[35px] font-semibold leading-[1.1] text-light">
              Suitable Pricing Plans
            </h3>
          </div>
          <div className="wrapper grid grid-cols-3 gap-6 items-center">
            <div className="priceItem relative z-[1] bg-customGray text-center p-10 rounded-lg addShadow h-[438px] grid place-items-center">
              <div>
                <div className="title mb-4">
                  <FaRegThumbsUp className="text-[50px] mx-auto mb-4 text-primary" />
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-[transparent] mb-6">
                    Free Trial
                  </h3>
                  <p className="text-2xl text-dark font-bold">PHP 0 / 7 days</p>
                </div>
                <ul className="[&>li]:flex [&>li]:items-center [&>li]:gap-2 mb-8">
                  <li>
                    <FaCheckCircle className="text-dark" />
                    Employee Records
                  </li>
                  <li>
                    <FaCheckCircle className="text-dark" />
                    Task Timer
                  </li>
                  <li>
                    <FaCheckCircle className="text-dark" /> Announcement
                  </li>
                </ul>
                <a href="#" className="btn bg-light text-primary font-bold">
                  CHOOSE PLAN
                </a>
              </div>
            </div>
            <div className="priceItem relative z-[1] text-light text-center p-10 rounded-lg addShadow bg-primary h-[500px] grid place-items-center">
              <div>
                <div className="title mb-4 ">
                  <FaRegThumbsUp className="text-[50px] mx-auto mb-4" />
                  <h3 className="text-2xl font-bold  text-light mb-6">
                    Free Trial
                  </h3>
                  <p className="text-2xl  font-bold text-light">
                    PHP 20 / Emp / Mo
                  </p>
                  <p className="text-light text-lg italic">
                    31 and above employees
                  </p>
                </div>
                <ul className="[&>li]:flex [&>li]:items-center [&>li]:gap-2 mb-8">
                  <li>
                    <FaCheckCircle className="text-light" />
                    Employee Records
                  </li>
                  <li>
                    <FaCheckCircle className="text-light" />
                    Task Timer
                  </li>
                  <li>
                    <FaCheckCircle className="text-light " /> Announcement
                  </li>
                </ul>
                <a href="#" className="btn bg-light text-primary font-bold">
                  CHOOSE PLAN
                </a>
              </div>
            </div>
            <div className="priceItem relative z-[1] bg-customGray text-center p-10 rounded-lg addShadow h-[438px] grid place-items-center">
              <div>
                <div className="title mb-4">
                  <FaRegThumbsUp className="text-[50px] mx-auto mb-4 text-primary" />
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-[transparent] mb-6">
                    Free Trial
                  </h3>
                  <p className="text-2xl text-dark font-bold">PHP 0 / 7 days</p>
                </div>
                <ul className="[&>li]:flex [&>li]:items-center [&>li]:gap-2 mb-8">
                  <li>
                    <FaCheckCircle className="text-dark" />
                    Employee Records
                  </li>
                  <li>
                    <FaCheckCircle className="text-dark" />
                    Task Timer
                  </li>
                  <li>
                    <FaCheckCircle className="text-dark" /> Announcement
                  </li>
                </ul>
                <a href="#" className="btn bg-light text-primary font-bold">
                  CHOOSE PLAN
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceHrPricing;
