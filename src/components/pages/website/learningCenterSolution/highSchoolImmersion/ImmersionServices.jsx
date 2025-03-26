import React from "react";
import { Laptop, Calculator, NotebookPen } from "lucide-react";

const ImmersionServices = () => {
  return (
    <>
      <section className="ImmersionServices py-20">
        <div className="customContainer">
          <div className="wrapper flex flex-wrap place-content-center md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 xl:grid-cols-4 lg:gap-8">
            <div className="webDEv w-[387px] md:w-auto py-5 md:px-3 lg:px-0">
              <div className="mb-10">
                <p>STEM and ICT students can learn</p>
                <h3 className="text-[clamp(20px,7vw,30px)] font-semibold text-primary leading-[1.1]">
                  Web Design & <br /> Development
                </h3>
                <p>SHS Work Immersion</p>
              </div>
              <ul className="servicesList [&>li]:flex [&>li]:items-start [&>li]:gap-2 [&>li]:mb-2 ">
                <li>
                  <div>
                    <Laptop className="text-2xl text-dark" />
                  </div>
                  Web Designing using Figma
                </li>
                <li>
                  <div>
                    <Laptop className="text-2xl text-dark" />
                  </div>{" "}
                  Website Mockup Designing
                </li>
                <li>
                  <div>
                    <Laptop className="text-2xl text-dark" />
                  </div>{" "}
                  Frontend Development
                </li>
                <li>
                  <div>
                    <Laptop className="text-2xl text-dark" />
                  </div>{" "}
                  Mobile Responsive Designing
                </li>
                <li>
                  <div>
                    <Laptop className="text-2xl text-dark" />
                  </div>
                  HTML5 & CSS3 Programming
                </li>
                <li>
                  <div>
                    <Laptop className="text-2xl text-dark" />
                  </div>
                  Basic Scripting Languages
                </li>
                <li>
                  <div>
                    <Laptop className="text-2xl text-dark" />
                  </div>
                  Business Work Ethics
                </li>
              </ul>
            </div>
            <div className="css w-[387px]  md:w-auto py-5 md:px-3 lg:px-0">
              <div className="mb-10">
                <p>CSS students can learn</p>
                <h3 className="text-[clamp(20px,7vw,30px)] font-semibold text-primary leading-[1.1]">
                  Computer System & Network Maintenance
                </h3>
                <p>SHS Work Immersion</p>
              </div>
              <ul className="servicesList [&>li]:flex [&>li]:items-start [&>li]:gap-2 [&>li]:mb-2 ">
                <li>
                  <div>
                    <Laptop className="text-2xl text-dark" />
                  </div>
                  Installing and Configuring Computer System
                </li>
                <li>
                  <div>
                    <Laptop className="text-2xl text-dark" />
                  </div>
                  Setting up and Configuring Networks and Servers
                </li>
                <li>
                  <div>
                    <Laptop className="text-2xl text-dark" />
                  </div>
                  Maintaining and Repairing Computer Sustems and Networks
                </li>
              </ul>
            </div>
            <div className="accountingServices w-[387px]  md:w-auto py-5 md:px-3 lg:px-0">
              <div className="mb-10">
                <p>ABM students can learn</p>
                <h3 className="text-[clamp(20px,7vw,30px)] font-semibold text-primary leading-[1.1]">
                  Accounting <br />
                  Processes
                </h3>
                <p>SHS Work Immersion</p>
              </div>
              <ul className="servicesList [&>li]:flex [&>li]:items-start [&>li]:gap-2 [&>li]:mb-2 ">
                <li>
                  <div>
                    <Calculator className="text-2xl text-dark" />
                  </div>{" "}
                  Journal Entry
                </li>
                <li>
                  <div>
                    <Calculator className="text-2xl text-dark" />
                  </div>{" "}
                  Ledger Posting
                </li>
                <li>
                  <div>
                    <Calculator className="text-2xl text-dark" />
                  </div>{" "}
                  Trial Balance Reporting
                </li>
                <li>
                  <div>
                    <Calculator className="text-2xl text-dark" />
                  </div>{" "}
                  Adjusting Entry
                </li>
                <li>
                  <div>
                    <Calculator className="text-2xl text-dark" />
                  </div>
                  Financial Statements & Reports
                </li>
                <li>
                  <div>
                    <Calculator className="text-2xl text-dark" />
                  </div>
                  Excel Advanced Functions & Formulas
                </li>
                <li>
                  <div>
                    <Calculator className="text-2xl text-dark" />
                  </div>
                  Payroll Report
                </li>
                <li>
                  <div>
                    <Calculator className="text-2xl text-dark" />
                  </div>
                  QuickBooks Online
                </li>
              </ul>
            </div>
            <div className="adminTasks w-[387px]  md:w-auto py-5 md:px-3 lg:px-0">
              <div className="mb-10">
                <p>HUMSS and GAS students can learn</p>
                <h3 className="text-[clamp(20px,7vw,30px)] font-semibold text-primary leading-[1.1]">
                  Administrative <br />
                  Tasks
                </h3>
                <p>SHS Work Immersion</p>
              </div>
              <ul className="servicesList [&>li]:flex [&>li]:items-start [&>li]:gap-2 [&>li]:mb-2 ">
                <li>
                  <div>
                    <NotebookPen className="text-2xl text-dark" />
                  </div>
                  Leadership Principles
                </li>
                <li>
                  <div>
                    <NotebookPen className="text-2xl text-dark" />
                  </div>
                  Business Correspondence
                </li>
                <li>
                  <div>
                    <NotebookPen className="text-2xl text-dark" />
                  </div>
                  Standard Operating Procedures
                </li>
                <li>
                  <div>
                    <NotebookPen className="text-2xl text-dark" />
                  </div>
                  Job Interview Simulation
                </li>
                <li>
                  <div>
                    <NotebookPen className="text-2xl text-dark" />
                  </div>
                  Basic Accounting Application
                </li>
                <li>
                  <div>
                    <NotebookPen className="text-2xl text-dark" />
                  </div>
                  Excel Advanced Functions and Formulas
                </li>
                <li>
                  <div>
                    <NotebookPen className="text-2xl text-dark" />
                  </div>
                  Payroll Setup
                </li>
                <li>
                  <div>
                    <NotebookPen className="text-2xl text-dark" />
                  </div>
                  Business Work Ethics
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
