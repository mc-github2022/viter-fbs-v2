import React from "react";
import { FaFileDownload } from "react-icons/fa";
import { FaRegCircleCheck } from "react-icons/fa6";

const ServiceHrOverview = () => {
  return (
    <>
      <section className="ServiceHrOverview py-20 bg-customGray">
        <div className="customContainer">
          <p> Our web Applications is perfect</p>
          <h2 className="text-[35px] leading-[1.1] mb-12 text-light">
            <span className="font-semibold text-primary">
              for your HR specific needs.
            </span>
          </h2>
          <div className="wrapper grid grid-cols-2 gap-12">
            <div>
              <img
                // src={`${devBaseImgUrl}/HRISscreenShot.png`}
                src={`../../public/img/HRISscreenShot.png`}
                className="mb-12"
                alt=""
              />
              <ul className="flex items-center gap-12">
                <li>
                  <a
                    href="#"
                    className="btn bg-primary text-light font-semibold"
                  >
                    SCHEDULE A DEMO
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center gap-2 font-bold text-primary"
                  >
                    Download Proposal <FaFileDownload />
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li className="flex items-start gap-4 text-dark mb-6">
                  <div className="flex gap-4 items-start">
                    <div>
                      <FaRegCircleCheck className="circleCheck text-primary text-[30px] bg-gradient-to-r from-primary to-secondary bg-clip-text text-[transparent]" />
                    </div>
                    <div>
                      <h3 className="text-primary bg-gradient-to-r from-primary to-secondary bg-clip-text text-[transparent] text-2xl mb-3">
                        Compatibility
                      </h3>
                      <p>
                        Compatible with various timekeeping tools and terminals,
                        both biometric and non-biometric, for easu customization
                        of importing and extracting exployee time data.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-4 text-dark mb-6">
                  <div className="flex gap-4 items-start">
                    <div>
                      <FaRegCircleCheck className="circleCheck text-primary text-[30px] bg-gradient-to-r from-primary to-secondary bg-clip-text text-[transparent]" />
                    </div>
                    <div>
                      <h3 className="text-primary bg-gradient-to-r from-primary to-secondary bg-clip-text text-[transparent] text-2xl mb-3">
                        Flexibility
                      </h3>
                      <p>
                        Accessible anytime and anywhere, and fully mobile-ready
                        to accommodate the dynamic needs of your organization.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-4 text-dark">
                  <div className="flex gap-4 items-start">
                    <div>
                      <FaRegCircleCheck className="circleCheck text-primary text-[30px] bg-gradient-to-r from-primary to-secondary bg-clip-text text-[transparent]" />
                    </div>
                    <div>
                      <h3 className="text-primary bg-gradient-to-r from-primary to-secondary bg-clip-text text-[transparent] text-2xl mb-3">
                        Customizable
                      </h3>
                      <p>
                        Allowing it to be tailored to meet the specific
                        requirements and unique needs of your organization.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceHrOverview;
