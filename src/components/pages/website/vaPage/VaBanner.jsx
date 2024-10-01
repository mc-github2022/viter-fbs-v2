import React from "react";

const VaBanner = () => {
  return (
    <>
      <section
        id="lcssBanner"
        className={`banner bg-cover bg-center pt-[59px] md:pt-[112px]`}
        style={{
          // backgroundImage: `url(${devBaseImgUrl}/VABG.jpg)`,
          backgroundImage: `url(../../public/img/VABG.jpg)`,
        }}
      >
        <div className="customContainer">
          <div className="wrapper grid grid-cols-2 place-items-center h-[80vh] md:h-[70vh] transition-all w-full">
            <div className="text-left">
              <h2 className="text-[45px] leading-[1.1] mb-8 text-light">
                Boost your business efficiency with our VA Admin Assistance{" "}
                <br />
                <span className="text-light font-semibold">
                  College On-the-job
                </span>
              </h2>
              <p className="text-light mb-10">
                Let us handle your email management, data entry, database
                management, document preparation, and file management, so you
                can focus on what matters most. Save time, reduce stress, and
                ensure your operations run smoothly with our expert support
                tailored to you needs!
              </p>
              <a href="#" className="btn bg-transparent text-light border-2">
                PARTNER WITH US
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VaBanner;
