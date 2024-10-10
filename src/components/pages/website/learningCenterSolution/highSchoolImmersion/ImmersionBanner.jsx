import React from "react";

const ImmersionBanner = () => {
  return (
    <>
      <section
        id="ImmersionBanner"
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
                <span className="text-light font-semibold">
                  College On-the-job
                </span>
                <br />
                with industry experience practical, work-related skills
              </h2>
              <p className="text-light mb-10">
                Partner with us for cutting-edge on-the-job training programs
                that equip aspiring IT and Accounting professionals with
                real-world skills, bridging academic learning with practical
                workplace experience. Our program can accommodate students with
                required internship hours ranging from 150 to 600, ensuring
                flexibility and comprehensive skills development.
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
