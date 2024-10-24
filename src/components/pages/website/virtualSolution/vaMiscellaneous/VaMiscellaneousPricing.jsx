import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { pricing, pricingCardCount } from "./data";

const VaMiscellaneousPricing = () => {
  return (
    <>
      <section className="VaMiscellaneousPricing py-20 bg-[#000000] relative overflow-hidden">
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
              className={`wrapper md:grid md:grid-cols-${pricingCardCount[0].columnNumber} gap-6 md:items-center`}
            >
              {pricing.map((price, key) => {
                return (
                  <div
                    key={key}
                    className={`${
                      price.isActive
                        ? "!bg-primary text-light"
                        : "!bg-customGray"
                    } priceItem mb-5 md:mb-0 relative z-[1]  text-center p-10 rounded-lg addShadow min-h-[630px]  max-w-[400px] grid place-items-center`}
                  >
                    <div className="">
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
                        <div className="grid place-items-center">
                          <ul className="[&>li]:flex [&>li]:items-center [&>li]:gap-2 my-4">
                            {price.info.map((info, key) => (
                              <li key={key}>
                                <FaCheckCircle
                                  className={`${price.customCss} text-light`}
                                />
                                {info}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <p className="mb-8">{price.priceDesc}</p>
                      <a
                        href={price.link}
                        className="btn bg-light text-primary font-bold"
                      >
                        {price.btnText}
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

export default VaMiscellaneousPricing;
