import React from "react";
import { devBaseImgUrl } from "../../../../helpers/functions-general";

const ConStudBanner = () => {
  return (
    <>
      <section
        id="ConStudBanner"
        className={`banner pt-[59px] md:pt-[95px] min-h-[100vh] md:min-h-[90vh] relative flex items-center`}
      >
        <img
          src={`${devBaseImgUrl}/continuing-studies-bg.webp`}
          alt="Unlock Your Potential with our Continuing Study Program"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="customContainer relative z-10 h-full">
          <div className="wrapper flex flex-col justify-center lg:grid lg:grid-cols-2 place-items-center transition-all w-full py-10">
            <div className="text-center  py-10 lg:text-left">
              <h2 className="text-[clamp(30px,3vw,45px)] leading-[1.1] mb-8 text-light font-light">
                Unlock Your Potential <br />
                with our
                <span className="text-light font-semibold">
                  &nbsp;Continuing Study Program
                </span>
              </h2>
              <p className="text-light mb-10">
                Empowering young professionals, fresh graduates, and career
                shifters with essential technical skills in frontend
                development, backend development, and accounting through
                hands-on training and real-world experience.
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

export default ConStudBanner;
