import React from "react";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import { FaCheckCircle, FaRegThumbsUp } from "react-icons/fa";
import { pricing } from "./data";

const ServiceHrPricing = () => {
  return (
    <>
      <section className="ServiceHrPricing py-20 bg-[#000000] relative sm:overflow-hidden">
        <div className="footerGradientBlack hidden sm:block absolute h-[1000px] w-full bottom-[-30%] right-[-30%]"></div>
        <div className="customContainer z-[1]">
          <div className="mb-20 text-center relative z-[3]">
            <p className="text-light">
              Web application for your payroll processing needs
            </p>
            <h3 className="text-[clamp(20px,7vw,35px)] font-semibold leading-[1.1] text-light">
              Affordable Pricing Plan
            </h3>
          </div>
          <div className="md:grid md:place-items-center">
            <div className="wrapper md:grid md:grid-cols-2 gap-6 items-center">
              {pricing.map((price, key) => {
                return (
                  <div
                    key={key}
                    className={`priceItem mb-5 lg:mb-0 relative z-[1]  w-full text-light text-center p-10 rounded-lg addShadow ${
                      price.isActive ? "bg-primary" : "bg-customGray !text-dark"
                    } grid `}
                  >
                    <div className="flex flex-col justify-between">
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
                        {/* <ul className="[&>li]:flex [&>li]:items-center [&>li]:gap-2 mb-8">
                          {price.info.map((info, key) => (
                            <li key={key} className="text-left">
                              <FaCheckCircle
                                className={`${price.customCss} text-light`}
                              />
                              {info}
                            </li>
                          ))}
                        </ul> */}
                        <table className="prices my-5">
                          {price.info.map((info, key) => (
                            <tr key={key} className="border-0 flex items-start">
                              <td>
                                <FaCheckCircle
                                  className={`${price.customCss} text-light translate-y-`}
                                />
                              </td>
                              <td className="text-[16px]">{info}</td>
                            </tr>
                          ))}
                        </table>
                      </div>

                      <a
                        href={`${price.link}`}
                        className="btn bg-primary text-light border-light border-2 mt-10 font-bold w-[190px] mx-auto hover:bg-light hover:text-primary hover:border-primary"
                      >
                        CHOOSE PLAN
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="absolute bg-light h-[180px] w-full bottom-[-2px] "></div>
      </section>
    </>
  );
};

export default ServiceHrPricing;
