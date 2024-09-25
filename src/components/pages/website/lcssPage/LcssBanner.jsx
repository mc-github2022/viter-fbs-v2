import React from "react";
import { FaRegCircleCheck } from "react-icons/fa6";

const LcssBanner = () => {
  return (
    <>
      <section
        id="lcssBanner"
        className="banner bg-secondary bg-opacity-80 bg-[url('../../public/img/lcssBannerImg.jpg')] bg-cover bg-center pt-[112px] bg-blend-multiply		"
      >
        <div className="customContainer">
          <div className="wrapper grid grid-cols-2 place-items-center h-[80vh] md:h-[70vh] transition-all w-full">
            <div className="text-left">
              <h2 className="text-[45px] leading-[1.1] mb-8 text-light">
                <span className="text-light font-semibold">
                  College On-the-job
                </span>
                <br />
                with industry experience practical, work-related skills
              </h2>
              <p className="text-light mb-10">
                Partner with us for cutting-edge on-the-job training programs
                that equip aspiring IT and Accounting professionals practical
                workplace workplace experience.
              </p>
              <a href="#" className="btn bg-transparent text-light border-2">
                SCHEDULE A DEMO
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LcssBanner;
