import React from "react";

const Process = () => {
  return (
    <>
      <section className="process py-20">
        <div className="customContainer">
          <div className="theTitle leading-1 mb-12">
            <p>Three key stages</p>
            <h2 className="text-[clamp(30px,7vw,45px)] font-semibold text-primary leading-[1.1]">
              how our process works
            </h2>
          </div>
          <img
            src="../../public/img/our-process.png"
            className=" h-full object-contain object-top w-[78%] mx-auto mb-2"
            alt=""
          />
          <div className="wrapper grid grid-cols-4">
            <div className="processItem text-center translate-y-[-50px] lg:translate-y-[-100px]">
              <p className="text-primary font-bold text-lg">We Collaborate</p>
              <p>
                with our clients to understand their specific talent needs and
                project requirements.
              </p>
            </div>
            <div className="processItem text-center">
              <p className="text-primary font-bold text-lg">We Collaborate</p>
              <p>
                with our clients to understand their specific talent needs and
                project requirements.
              </p>
            </div>
            <div className="processItem text-center translate-y-[-50px] lg:translate-y-[-100px]">
              <p className="text-primary font-bold text-lg">We Collaborate</p>
              <p>
                with our clients to understand their specific talent needs and
                project requirements.
              </p>
            </div>
            <div className="processItem text-center">
              <p className="text-primary font-bold text-lg">We Collaborate</p>
              <p>
                with our clients to understand their specific talent needs and
                project requirements.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Process;
