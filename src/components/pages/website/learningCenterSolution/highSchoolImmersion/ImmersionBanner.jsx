import React from "react";

const ImmersionBanner = () => {
  return (
    <>
      <section
        id="ImmersionBanner"
        className={`banner bg-cover bg-center pt-[59px] md:pt-[112px]`}
        style={{
          // backgroundImage: `url(${devBaseImgUrl}/LCS-Banner.jpg)`,
          backgroundImage: `url(../../public/img/workimmersion-bg.jpg)`,
        }}
      >
        <div className="customContainer">
          <div className="wrapper flex flex-col justify-center lg:grid lg:grid-cols-2 place-items-center min-h-[90vh] md:h-[70vh] lg:min-h-0 transition-all w-full">
            <div className="text-center lg:text-left">
              <h2 className="text-[clamp(30px,4vw,45px)] leading-[1.1] mb-8 text-light font-light">
                <span className="text-light font-semibold">
                  Senior High School <br />
                  Work Immersion
                </span>
                <br />
                <span class="font-light">
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

export default ImmersionBanner;
