import React from "react";

const ConStudBanner = () => {
  return (
    <>
      <section
        id="ConStudBanner"
        className={`banner bg-cover bg-center pt-[59px] md:pt-[112px]`}
        style={{
          // backgroundImage: `url(${devBaseImgUrl}/LCS-Banner.jpg)`,
          backgroundImage: `url(../../public/img/LCS-Banner.jpg)`,
        }}
      >
        <div className="customContainer">
          <div className="wrapper grid grid-cols-2 place-items-center h-[80vh] md:h-[70vh] transition-all w-full">
            <div className="text-left">
              <h2 className="text-[45px] leading-[1.1] mb-8 text-light font-light">
                Unlock Your Potential <br />
                with our
                <span className="text-light font-semibold">
                  &nbsp;Continuing Study Program
                </span>
              </h2>
              <p className="text-light mb-10">
                Empowering young professionals, fresh graduates, and career
                shifters with essential technical skills in frontend
                development, backend development, and Accounting through
                hands-on training and real-world experience.
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

export default ConStudBanner;
