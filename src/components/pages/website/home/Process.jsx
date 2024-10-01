import React from "react";
import { devBaseImgUrl } from "../../../helpers/functions-general";

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
            className="hidden md:block h-full object-contain object-top w-[78%] mx-auto mb-2"
            alt=""
          />
          <div>
            <div className="grid place-items-center">
              <div className="md:grid grid-cols-4">
                <div className="processItem md:text-center md:translate-y-[-50px] lg:translate-y-[-100px] mb-6">
                  <p className="text-primary font-bold text-lg">
                    We Collaborate
                  </p>
                  <p>
                    with our clients to understand their specific talent needs
                    and project requirements.
                  </p>
                </div>
                <div className="processItem md:text-center mb-6">
                  <p className="text-primary font-bold text-lg">
                    We Collaborate
                  </p>
                  <p>
                    with our clients to understand their specific talent needs
                    and project requirements.
                  </p>
                </div>
                <div className="processItem md:text-center md:translate-y-[-50px] lg:translate-y-[-100px] mb-6">
                  <p className="text-primary font-bold text-lg">
                    We Collaborate
                  </p>
                  <p>
                    with our clients to understand their specific talent needs
                    and project requirements.
                  </p>
                </div>
                <div className="processItem md:text-center">
                  <p className="text-primary font-bold text-lg">
                    We Collaborate
                  </p>
                  <p>
                    with our clients to understand their specific talent needs
                    and project requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Process;
