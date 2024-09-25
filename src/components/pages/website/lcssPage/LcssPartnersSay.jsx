import React from "react";
import { RiDoubleQuotesL } from "react-icons/ri";
import { devBaseImgUrl } from "../../../helpers/functions-general";

const LcssPartnersSay = () => {
  return (
    <>
      <section className="partnersSay py-20">
        <div className="customContainer">
          <div className=" mb-[90px]">
            <p>What our school and university</p>
            <h2 className="text-[35px] font-semibold text-primary leading-[1.1] mb-8">
              partners say
            </h2>
          </div>
          <div className="wrapper ">
            <div className="testimonialItem bg-customGray grid grid-cols-[_2fr_1fr] items-center p-20 rounded-xl w-[80%] mx-auto relative">
              <div className="theMessage  relative">
                <div className="absolute top-[-30px] left-[-40px]">
                  <img
                    src={`${devBaseImgUrl}/quote-white.png`}
                    className="w-[80px]"
                    alt=""
                  />
                </div>
                <p className="relative z-10 italic">
                  Yes, we are pleased to have chosen Frontline Business
                  Solutions as our partner in Human Resource Information System
                  because you are able to deliver on your promises.
                </p>
              </div>
              <img
                src={`${devBaseImgUrl}/Client_IMG_1.png`}
                className="absolute bottom-0 w-[355px] right-8"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LcssPartnersSay;
