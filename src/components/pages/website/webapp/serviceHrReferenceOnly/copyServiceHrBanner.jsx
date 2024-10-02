import React from "react";

const ServiceHrBanner = () => {
  return (
    <>
      <section
        id="serviceHrBanner"
        className={`banner bg-cover bg-center pt-[59px] md:pt-[112px]`}
        style={{
          // backgroundImage: `url(${devBaseImgUrl}/ServicesBanner.jpg)`,
          backgroundImage: `url(../../public/img/ServicesBanner.jpg)`,
        }}
      >
        <div className="customContainer">
          <div className="wrapper grid grid-cols-2 place-items-center h-[80vh] md:h-[70vh] transition-all w-full">
            <div className="text-left">
              <h2 className="text-[45px] leading-[1.1] mb-8 text-light">
                Smarter, faster, <br /> and more efficient <br />
                <span className="text-light font-semibold">HR Solutions</span>
                <br />
              </h2>
              <p className="text-light mb-10">
                Experience seamless HR operation and make data-driven decisions
                that drive organizational success. Designed to centralize all HR
                data and workflows, our solution simplifies employee records
                management, leave and attendance tracking, performance
                evaluations, and HR analytics
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

export default ServiceHrBanner;
