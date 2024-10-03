import React from "react";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import { FaCheckCircle, FaRegThumbsUp } from "react-icons/fa";
import { pricing } from "./data";

const ServicePayrollPricing = () => {
  return (
    <>
      <section className="ServicePayrollPricing py-20 bg-[#000000] relative overflow-hidden">
        <div className="footerGradientBlack absolute h-[1000px] w-full bottom-[-30%] right-[-30%]"></div>
        <div className="absolute bg-light h-[180px] w-full bottom-0 z-[1]"></div>
        <div className="customContainer">
          <div className="mb-20 text-center relative z-[3]">
            <p className="text-light">
              Web application for your payroll processing needs
            </p>
            <h3 className="text-[35px] font-semibold leading-[1.1] text-light">
              Affordable Pricing Plan
            </h3>
          </div>
          <div className="grid place-items-center">
            <div className="wrapper grid grid-cols-1 gap-8 items-center">
              {pricing.map((price, key) => {
                return (
                  <div
                    key={key}
                    className={`priceItem relative z-[1] text-light text-center p-10 rounded-lg addShadow w-[350px] min-h-[520px] ${
                      price.isActive
                        ? "bg-primary h-[500px]"
                        : "bg-customGray !text-dark"
                    } grid place-items-center`}
                  >
                    <div>
                      <div className="title mb-4 ">
                        {price.icon}
                        <h3
                          className={`${price.customCss} text-2xl font-bold  text-light mb-6`}
                        >
                          {price.title}
                        </h3>
                        <p
                          className={`${price.customCss} text-2xl  font-bold text-light`}
                        >
                          {price.rate}
                        </p>

                        {price.note !== "" && (
                          <p
                            className={`${price.customCss} text-light text-lg italic`}
                          >
                            {price.note}
                          </p>
                        )}
                      </div>
                      <ul className="[&>li]:flex [&>li]:items-center [&>li]:gap-2 mb-8">
                        {price.info.map((info, key) => (
                          <li key={key}>
                            <FaCheckCircle
                              className={`${price.customCss} text-light`}
                            />
                            {info}
                          </li>
                        ))}
                      </ul>
                      <a
                        href={`${price.link}`}
                        className="btn bg-light text-primary font-bold"
                      >
                        LEARN MORE
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicePayrollPricing;
