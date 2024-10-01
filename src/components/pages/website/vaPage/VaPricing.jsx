import React from "react";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import { devBaseImgUrl } from "../../../helpers/functions-general";
import { FaCheckCircle, FaRegThumbsUp } from "react-icons/fa";

const VaPricing = () => {
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
          <div className="grid place-items-center">
            <div className="wrapper grid grid-cols-2 gap-6 items-center">
              <div className="priceItem relative z-[1] bg-customGray text-center p-10 rounded-lg addShadow h-[510px]  w-[400px] grid place-items-center">
                <div>
                  <div className="title mb-4">
                    <FaRegThumbsUp className="text-[50px] mx-auto mb-4 text-primary" />
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-[transparent] mb-6">
                      Part-Time
                    </h3>
                    <p className="text-2xl text-dark font-bold">$10 / Hour</p>
                    <p className="text-xl text-dark font-bold">
                      (20 hours per week)
                    </p>
                  </div>
                  <p className="mb-8">
                    Get dedicated virtual assistant support for half the week,
                    perfect for business needing flexible help with task and
                    projects without the commitment of full-time hours.
                  </p>
                  <a href="#" className="btn bg-light text-primary font-bold">
                    CHOOSE PLAN
                  </a>
                </div>
              </div>
              <div className="priceItem relative z-[1] text-light text-center p-10 rounded-lg addShadow bg-primary h-[510px] w-[400px] grid place-items-center">
                <div>
                  <div className="title mb-4 ">
                    <FaRegThumbsUp className="text-[50px] mx-auto mb-4" />
                    <h3 className="text-2xl font-bold  text-light mb-6">
                      Full-Time
                    </h3>
                    <p className="text-2xl  font-bold text-light">$8 / Hour</p>
                    <p className="text-xl text-lighst font-bold">
                      (40 hours per week)
                    </p>
                  </div>
                  <p className="mb-8">
                    Enjoy full-time virtual assistance, providing your business
                    with consistent, reliable support to mannage tasks,
                    streamline operations, and increase productivity throughout
                    the week at a mose cost-effective rate.{" "}
                  </p>
                  <a href="#" className="btn bg-light text-primary font-bold">
                    CHOOSE PLAN
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VaPricing;
