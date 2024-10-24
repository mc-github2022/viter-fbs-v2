import React from "react";
import { BsCalculator, BsLaptop } from "react-icons/bs";
import { FaLaptop } from "react-icons/fa";

const LcssServices = () => {
  return (
    <>
      <section className="lcssServices py-20">
        <div className="customContainer">
          <div className="wrapper flex flex-wrap place-content-center">
            <div className="webDEv w-[387px] py-5 md:px-3 lg:px-0">
              <div className="mb-10">
                <p>Here is what you can learn in our</p>
                <h3 className="text-[clamp(20px,7vw,35px)] font-semibold text-primary leading-[1.1]">
                  Web Design & <br /> Development
                </h3>
                <p>On-the-job training.</p>
              </div>
              <ul className="servicesList [&>li]:flex [&>li]:items-center [&>li]:gap-2 [&>li]:mb-2 ">
                <li>
                  <div>
                    <FaLaptop className="text-2xl text-dark" />
                  </div>
                  Web Designing using Figma
                </li>
                <li>
                  <div>
                    <FaLaptop className="text-2xl text-dark" />
                  </div>
                  Website Mockup Designing
                </li>
                <li>
                  <div>
                    <FaLaptop className="text-2xl text-dark" />
                  </div>
                  Mobile Responsive Designing
                </li>
                <li>
                  <div>
                    <FaLaptop className="text-2xl text-dark" />
                  </div>
                  CSS & HTML Programming
                </li>
                <li>
                  <div>
                    <FaLaptop className="text-2xl text-dark" />
                  </div>
                  SASS Preprocessor
                </li>
                <li>
                  <div>
                    <FaLaptop className="text-2xl text-dark" />
                  </div>
                  Scripting Language
                </li>
                <li>
                  <div>
                    <FaLaptop className="text-2xl text-dark" />
                  </div>
                  Tailwind CSS
                </li>
                <li>
                  <div>
                    <FaLaptop className="text-2xl text-dark" />
                  </div>
                  WordPress Development
                </li>
                <li>
                  <div>
                    <FaLaptop className="text-2xl text-dark" />
                  </div>
                  Business Work Ethics
                </li>
              </ul>
            </div>
            <div className="accountingServices w-[387px] py-5 md:px-3 lg:px-0">
              <div className=" my-10 md:mb-10 md:my-0">
                <p>Here is what you can learn in our</p>
                <h3 className="text-[clamp(20px,7vw,35px)] font-semibold text-primary leading-[1.1]">
                  Accounting <br />
                  Processes
                </h3>
                <p>On-the-job training.</p>
              </div>
              <ul className="servicesList [&>li]:flex [&>li]:items-center [&>li]:gap-2 [&>li]:mb-2 ">
                <li>
                  <div>
                    <BsCalculator className="text-2xl text-dark" />
                  </div>
                  Basic Accounting
                </li>
                <li>
                  <div>
                    <BsCalculator className="text-2xl text-dark" />
                  </div> Excel Advanced
                  Functions
                </li>
                <li>
                  <div>
                    <BsCalculator className="text-2xl text-dark" />
                  </div> Accounting
                  Source Documents
                </li>
                <li>
                  <div>
                    <BsCalculator className="text-2xl text-dark" />
                  </div> Business
                  Registration
                </li>
                <li>
                  <div>
                    <BsCalculator className="text-2xl text-dark" />
                  </div>
                  PH & US Taxation
                </li>
                <li>
                  <div>
                    <BsCalculator className="text-2xl text-dark" />
                  </div>
                  PH & US Payroll
                </li>
                <li>
                  <div>
                    <BsCalculator className="text-2xl text-dark" />
                  </div>
                  Quickbooks
                </li>
                <li>
                  <div>
                    <BsCalculator className="text-2xl text-dark" />
                  </div>
                  Xero
                </li>
                <li>
                  <div>
                    <BsCalculator className="text-2xl text-dark" />
                  </div>
                  Budget Monitoring
                </li>
                <li>
                  <div>
                    <BsCalculator className="text-2xl text-dark" />
                  </div>
                  Financial Reports & Projections
                </li>
                <li>
                  <div>
                    <BsCalculator className="text-2xl text-dark" />
                  </div>
                  Non-Profit Accounting
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LcssServices;
