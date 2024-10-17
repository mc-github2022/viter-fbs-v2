import React from "react";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import { FaCheckCircle, FaRegThumbsUp } from "react-icons/fa";
import { pricing } from "./data";

const ServiceOnlineDonationPricing = () => {
  return (
    <>
      <section className="ServiceOnlineDonationPricing py-20 bg-[#000000] relative overflow-hidden">
        <div className="footerGradientBlack absolute h-[1000px] w-full bottom-[-30%] right-[-30%]"></div>
        <div className="absolute bg-light h-[180px] w-full bottom-0 z-[1]"></div>
        <div className="customContainer">
          <div className="mb-20 text-center relative z-[3]">
            <p className="text-light">
              Web application for your asset inventory needs
            </p>
            <h3 className="text-[clamp(20px,7vw,35px)] font-semibold leading-[1.1] text-light">
              Affordable Pricing Plan
            </h3>
          </div>
          <div className="grid place-items-center">
            <div className="wrapper md:grid md:grid-cols-2 gap-6 items-center">
              {pricing.map((price, key) => {
                return (
                  <div
                    key={key}
                    className={`priceItem mb-5 md:mb-0 relative z-[1] text-light text-center p-10 rounded-lg addShadow ${
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
                    </div>
                    <a
                      href={`${price.link}`}
                      className="btn bg-light text-primary font-bold"
                    >
                      CONTACT US
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

export default ServiceOnlineDonationPricing;
