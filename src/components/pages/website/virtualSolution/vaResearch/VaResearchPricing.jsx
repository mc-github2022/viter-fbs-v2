import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { pricing, pricingCardCount } from "./data";

const VaResearchPricing = () => {
  return (
    <>
      <section className="ServiceHrPricing py-20 bg-[#000000] relative overflow-hidden">
        <div className="footerGradientBlack absolute h-[1000px] w-full bottom-[-30%] right-[-30%]"></div>
        <div className="absolute bg-light h-[180px] w-full bottom-0 z-[1]"></div>
        <div className="customContainer">
          <div className="mb-20 text-center relative z-[3]">
            <p className="text-light">Choose what's best for your needs</p>
            <h3 className="text-[clamp(20px,7vw,35px)] font-semibold leading-[1.1] text-light">
              Suitable Pricing Plans
            </h3>
          </div>
          <div className="grid place-items-center">
            <div
              className={`wrapper grid md:grid md:grid-cols-${pricingCardCount[0].columnNumber} gap-6 md:items-center`}
            >
              {pricing.map((price, key) => {
                return (
                  <div
                    key={key}
                    className={`${
                      price.isActive
                        ? "!bg-primary text-light"
                        : "!bg-customGray"
                    } priceItem mb-5 md:mb-0 relative z-[1]  text-center p-10 rounded-lg addShadow
                    max-w-[400px] grid place-items-center lg:min-h-[900px]`}
                  >
                    <div className=" mb-5 relative">
                      <div className="title mb-4">
                        {price.icon}
                        <h3
                          className={`${price.customCss} text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-[transparent] mb-6`}
                        >
                          {price.title}
                        </h3>
                        <p
                          className={`${price.customCss} text-2xl text-dark font-bold`}
                        >
                          {price.rate}
                        </p>
                        <p
                          className={`${price.customCss} text-xl text-dark font-bold`}
                        >
                          {price.duration}
                        </p>
                        <div className="grid place-items-center text-left">
                          {/* <ul className="[&>li]:flex [&>li]:items-center [&>li]:gap-2 my-4">
                            {price.info.map((info, key) => (
                              <li key={key}>
                                <div>
                                  <FaCheckCircle
                                    className={`${price.customCss} text-light`}
                                  />
                                </div>
                                {info}
                              </li>
                            ))}
                          </ul> */}
                          <table className="prices my-5">
                            {price.info.map((info, key) => (
                              <tr
                                key={key}
                                className="border-0 flex items-start"
                              >
                                <td>
                                  <FaCheckCircle
                                    className={`${price.customCss} text-light translate-y-1`}
                                  />
                                </td>
                                <td className="text-[16px]">{info}</td>
                              </tr>
                            ))}
                          </table>
                        </div>
                      </div>
                      <p className="mb-8 hidden lg:block">{price.priceDesc}</p>
                    </div>
                    <a
                      href={price.link}
                      className="btn px-5 mt-10 bg-light text-primary font-bold bottom-0"
                    >
                      {price.btnText}
                    </a>
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

export default VaResearchPricing;
