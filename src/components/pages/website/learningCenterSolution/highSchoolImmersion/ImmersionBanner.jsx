import React from "react";
import { devBaseImgUrl } from "../../../../helpers/functions-general";

const ImmersionBanner = () => {
  return (
    <>
      <section
        id="ImmersionBanner"
        className={`banner pt-[59px] md:pt-[95px] min-h-[100vh] md:min-h-[90vh] relative flex items-center`}
      >
        <img
          src={`${devBaseImgUrl}/workimmersion-bg.webp`}
          alt="Senior High School Work Immersion with industry experience practical, work-related skills"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="customContainer relative z-10 h-full">
          <div className="wrapper flex flex-col justify-center lg:grid lg:grid-cols-2 place-items-center transition-all w-full py-10">
            <div className="text-center py-10 lg:text-left">
              <h2 className="text-[clamp(30px,3vw,45px)] leading-[1.1] mb-8 text-light font-light">
                <span className="text-light font-semibold">
                  Senior High School <br />
                  Work Immersion
                </span>
                <br />
                <span className="font-light">
                  with industry experience practical, work-related skills
                </span>
              </h2>
              <p className="text-light mb-10">
                Join us for an innovative Senior High School Work Immersion
                program designed for students from the STEM, ABM, HUMSS, and GAS
                strands, equipping them with real-world skills. Our program
                bridges classroom learning with practical workplace expertise.
                With a focus on flexibility and comprehensive skills
                development, we prepare future professionals for success in IT,
                Accounting, Administration, and beyond.
              </p>
              <a
                href="https://calendly.com/herlyn-torres-frontlinebusiness/30min"
                target="_blank"
                className="btn bg-transparent text-light border-2"
              >
                SCHEDULE A MEETING
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ImmersionBanner;
