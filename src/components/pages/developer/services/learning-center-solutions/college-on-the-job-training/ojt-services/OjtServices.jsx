import React from "react";
import { BsCalculator } from "react-icons/bs";
import { FaEdit, FaLaptop } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const OjtServices = ({handleUpdateOjtServices}) => {
  return (
    <>
      <section className="lcssServices py-20">
        <div className="customContainer relative">
          <a
            className="absolute cursor-pointer right-[6rem] -top-8"
            onClick={handleUpdateOjtServices}
          >
            <span className=" bg-[#C7AC27] rounded-lg  w-[25px] h-[20px] px-[8px] border-[1px] text-black hover:underline text-base">
              Add
            </span>
          </a>
          <div className="wrapper flex flex-wrap place-content-center md:grid md:grid-cols-2">
            <div className="webDEv w-[387px] py-5 md:px-3 lg:px-0">
              <div className="flex items-center place-self-end">
                <button
                  className="tooltip-action-table"
                  data-tooltip="Edit"
                  // onClick={() => handleEdit(scopeList)}
                >
                  <FaEdit className="text-gray-600 text-[16px]" />
                </button>
                <button
                  className="tooltip-action-table"
                  data-tooltip="Delete"
                  // onClick={() => handleDelete(scopeList)}
                >
                  <MdDelete className="text-gray-600 text-[18px]" />
                </button>
              </div>
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
                  Scripting Languages
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
              <div className="flex items-center place-self-end">
                <button
                  className="tooltip-action-table"
                  data-tooltip="Edit"
                  // onClick={() => handleEdit(scopeList)}
                >
                  <FaEdit className="text-gray-600 text-[16px]" />
                </button>
                <button
                  className="tooltip-action-table"
                  data-tooltip="Delete"
                  // onClick={() => handleDelete(scopeList)}
                >
                  <MdDelete className="text-gray-600 text-[18px]" />
                </button>
              </div>
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
                  </div>{" "}
                  Excel Advanced Functions
                </li>
                <li>
                  <div>
                    <BsCalculator className="text-2xl text-dark" />
                  </div>{" "}
                  Accounting Source Documents
                </li>
                <li>
                  <div>
                    <BsCalculator className="text-2xl text-dark" />
                  </div>{" "}
                  Business Registration
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
                  QuickBooks
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

export default OjtServices;
