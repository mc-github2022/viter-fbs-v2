import React from "react";
import { BsCalculator } from "react-icons/bs";
import { FaLaptop } from "react-icons/fa";

const ImmersionServices = () => {
  return (
    <>
      <section className="ImmersionServices py-20">
        <div className="customContainer">
          <div className="wrapper grid grid-cols-2">
            <div className="webDEv">
              <div className="mb-10">
                <p>Here is what you can learn in our</p>
                <h3 className="text-[35px] font-semibold text-primary leading-[1.1]">
                  Web Design & Development
                </h3>
                <p>On-the-job training.</p>
              </div>
              <ul className="servicesList [&>li]:flex [&>li]:items-center [&>li]:gap-2 [&>li]:mb-2 ">
                <li>
                  <FaLaptop className="text-2xl text-dark" /> Web Designing
                  using Figma
                </li>
                <li>
                  <FaLaptop className="text-2xl text-dark" /> Website Mockup
                  Designing
                </li>
                <li>
                  <FaLaptop className="text-2xl text-dark" /> Mobile Responsive
                  Designing
                </li>
                <li>
                  <FaLaptop className="text-2xl text-dark" /> CSS & HTML
                  Programming
                </li>
                <li>
                  <FaLaptop className="text-2xl text-dark" />
                  SASS Preprocessor
                </li>
                <li>
                  <FaLaptop className="text-2xl text-dark" />
                  Scripting Language
                </li>
                <li>
                  <FaLaptop className="text-2xl text-dark" />
                  Tailwind CSS
                </li>
                <li>
                  <FaLaptop className="text-2xl text-dark" />
                  WordPress Development
                </li>
                <li>
                  <FaLaptop className="text-2xl text-dark" />
                  Business Wirk Ethics
                </li>
              </ul>
            </div>
            <div className="accountingServices">
              <div className="mb-10">
                <p>Here is what you can learn in our</p>
                <h3 className="text-[35px] font-semibold text-primary leading-[1.1]">
                  Accounting Processes
                </h3>
                <p>On-the-job training.</p>
              </div>
              <ul className="servicesList [&>li]:flex [&>li]:items-center [&>li]:gap-2 [&>li]:mb-2 ">
                <li>
                  <BsCalculator className="text-2xl text-dark" /> Basic
                  Accoutning
                </li>
                <li>
                  <BsCalculator className="text-2xl text-dark" /> Excel Advanced
                  Functions
                </li>
                <li>
                  <BsCalculator className="text-2xl text-dark" /> Accounting
                  Source Documents
                </li>
                <li>
                  <BsCalculator className="text-2xl text-dark" /> Business
                  Registration
                </li>
                <li>
                  <BsCalculator className="text-2xl text-dark" />
                  PH & US Taxation
                </li>
                <li>
                  <BsCalculator className="text-2xl text-dark" />
                  PH & US Payroll
                </li>
                <li>
                  <BsCalculator className="text-2xl text-dark" />
                  Quickbooks
                </li>
                <li>
                  <BsCalculator className="text-2xl text-dark" />
                  Xero
                </li>
                <li>
                  <BsCalculator className="text-2xl text-dark" />
                  Budget Monitoring
                </li>
                <li>
                  <BsCalculator className="text-2xl text-dark" />
                  Financial Reports & Projections
                </li>
                <li>
                  <BsCalculator className="text-2xl text-dark" />
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

export default ImmersionServices;
