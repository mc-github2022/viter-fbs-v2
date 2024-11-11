import React from "react";
import { devBaseImgUrl } from "../../../helpers/functions-general";

const Process = () => {
  return (
    <>
      <section className="process pt-20 pb-10">
        <div className="customContainer">
          <div className="theTitle leading-1 mb-12">
            <p>Key Stages</p>
            <h2 className="text-[clamp(30px,7vw,45px)] font-semibold text-primary leading-[1.1]">
              How our Process Works
            </h2>
          </div>
          <img
            src={`${devBaseImgUrl}/our-process.png`}
            className="hidden md:block h-full object-contain object-top w-[78%] mx-auto mb-2"
            alt=""
          />
          <div>
            <div className="grid place-items-center text-justify">
              <div className="md:grid grid-cols-4">
                <div className="processItem md:text-center md:translate-y-[-50px] lg:translate-y-[-100px] mb-6">
                  <div>
                    <img
                      src={`${devBaseImgUrl}/wecollaborate.png`}
                      className=""
                      alt=""
                    />
                  </div>
                  <div>
                    <p className="text-primary font-bold text-lg">
                      We Collaborate
                    </p>
                    <p>
                      with our clients to understand their specific talent needs
                      and project requirements.
                    </p>
                  </div>
                </div>
                <div className="processItem md:text-center mb-6">
                  <div>
                    <p className="text-primary font-bold text-lg">We Deliver</p>
                    <p>
                      skilled professionals tailored to meet the client's
                      demands, ensuring the right fit for their business.
                    </p>
                  </div>
                </div>
                <div className="processItem md:text-center md:translate-y-[-50px] lg:translate-y-[-100px] mb-6">
                  <div>
                    <p className="text-primary font-bold text-lg">We Manage</p>
                    <p>
                      the ongoing performance and development of the provided
                      talents, ensuring seamless integration and success.
                    </p>
                  </div>
                </div>
                <div className="processItem md:text-center">
                  <div>
                    <p className="text-primary font-bold text-lg">
                      We Give back
                    </p>
                    <p>
                      to the ministry and work for the Kingdom of God, aligning
                      our business practices with our faith and commitment to a
                      higher purpose.
                    </p>
                  </div>
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
