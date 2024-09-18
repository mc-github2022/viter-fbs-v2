import React from "react";
import { RiDoubleQuotesL } from "react-icons/ri";

const Testimonials = () => {
  return (
    <>
      <section className="testimonials relative py-24  overflow-hidden">
        <div className="customContainer">
          <div className="wrapper grid grid-cols-[_1fr_3fr] h-[700px]">
            <div className="grid place-items-center relative">
              <div className="z-50 text-light">
                <h3 className="text-[45px] font-semibold  leading-[1.1] mb-8">
                  Our clients' <span className="text-primary">experience</span>
                </h3>
                <p>
                  See what our clients say about our services and how we've
                  helped them achieve
                </p>
              </div>
              <div className="testimonialQoute absolute left-0 top-6 w-[150px] h-[150px] z-[1]">
                <img
                  src="../../public/img/quote.png"
                  className="w-full h-full object-cover object-top block"
                  alt=""
                />
              </div>
            </div>
            <div className="flex justify-end">
              <div className="w-[439px] relative z-[1] text-light text-right">
                <p className=" mt-[130px] mb-3">
                  FBS is a true partner to our firm. They have help form our
                  vision and trajectory. We are immnensely gratefull our
                  partnership. Our expectation is to FBS to grow with us. They
                  are an important part of our success. And beyond the business
                  perpective, they are fantastic people. We are bless to work
                  with them.
                </p>
                <h3 className="text-[24px] font-semibold">Robert Han, COO</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="testimonialPhoto absolute z-[1] left-[50%] translate-x-[-40%] top-[130px] w-[380px]">
          <img src="../../public/img/Rober_han.png" alt="" />
        </div>
        <div className="smPill w-[70%] h-[100px] bg-primary top-[60%] z-[5] rounded-tl-full rounded-bl-full absolute -right-[5%] -rotate-[15deg]">
          <img
            src="../../public/img/tm_logo.png"
            alt=""
            className="rotate-[15deg] ml-24"
          />
        </div>
        <div className="z-0">
          <div className="radial w-full h-[510px] bgGradientBlack absolute left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%] overflow-hidden">
            <div className="bigPill w-[70%] h-[300px] bg-primary top-0 z-[5] rounded-tl-full rounded-bl-full absolute -right-[5%] -rotate-[15deg] "></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
