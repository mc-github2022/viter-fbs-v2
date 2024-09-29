import React from "react";
import { devBaseImgUrl } from "../../../helpers/functions-general";
import { FaFileDownload } from "react-icons/fa";
import { FaRegCircleCheck } from "react-icons/fa6";

const WhyUsCompanyProfile = () => {
  return (
    <>
      <section className="partnersWithUs py-20 bg-customGray">
        <div className="customContainer">
          <p> We are here to deliver the</p>
          <h2 className="text-[35px] leading-[1.1] mb-12 text-light">
            <span className="font-semibold text-primary">
              expertise and solutions you need.
            </span>
          </h2>
          <div className="wrapper grid grid-cols-2 gap-12">
            <div>
              <img
                // src={`${devBaseImgUrl}/lcssBannerImg.jpg`}
                src={`../../public/img//lcssBannerImg.jpg`}
                className="mb-12"
                alt=""
              />
              <ul className="flex items-center gap-12">
                <li>
                  <a
                    href="#"
                    className="btn bg-primary text-light font-semibold">
                    PARTNER WITH US
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center gap-2 font-bold text-primary">
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
                        Faith-driven company
                      </h3>
                      <p>
                        Rooted in Christian values, we operate with integrety,
                        care and a commitment to purposeful service. Our
                        mmission goes beyond business success. We aim to
                        positively Impact our clients, employees, and
                        communities through ethical practices and faith-based
                        leadership.
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
                        End-to-End Solution
                      </h3>
                      <p>
                        We offer a wide range of service that cover every
                        aspects of your business needs. From custom web
                        applications to website design and developent, virtual
                        assistants and skill development programs, we provide
                        everthing you need under one roof.
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
                        Customized Solutions
                      </h3>
                      <p>
                        By gaining insdustry-aligned experience and expert
                        training, students enhance their employability, making
                        them more competitive in the job market and ready for
                        career opportunities.
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

export default WhyUsCompanyProfile;
