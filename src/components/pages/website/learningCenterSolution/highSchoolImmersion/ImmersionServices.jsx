import React from "react";
import { Laptop, Calculator, NotebookPen } from "lucide-react";

const ImmersionServices = () => {
  return (
    <>
      <section className="ImmersionServices py-20">
        <div className="customContainer">
          <div className="wrapper grid grid-cols-3">
            <div className="webDEv">
              <div className="mb-10">
                <p>STEM and ICT students can learn</p>
                <h3 className="text-[35px] font-semibold text-primary leading-[1.1]">
                  Web Design & Development
                </h3>
                <p>SHS Work Immersion</p>
              </div>
              <ul className="servicesList [&>li]:flex [&>li]:items-center [&>li]:gap-2 [&>li]:mb-2 ">
                <li>
                  <Laptop className="text-2xl text-dark" />
                  Web Designing using Figma
                </li>
                <li>
                  <Laptop className="text-2xl text-dark" /> Website Mockup
                  Designing
                </li>
                <li>
                  <Laptop className="text-2xl text-dark" /> Frontend Development
                </li>
                <li>
                  <Laptop className="text-2xl text-dark" /> Mobile Responsive
                  Designing
                </li>
                <li>
                  <Laptop className="text-2xl text-dark" />
                  HTML5 & CSS3 Programming
                </li>
                <li>
                  <Laptop className="text-2xl text-dark" />
                  Basic Scripting Language
                </li>
                <li>
                  <Laptop className="text-2xl text-dark" />
                  Business Work Ethics
                </li>
              </ul>
            </div>
            <div className="accountingServices">
              <div className="mb-10">
                <p>ABM students can learn</p>
                <h3 className="text-[35px] font-semibold text-primary leading-[1.1]">
                  Accounting <br />
                  Processes
                </h3>
                <p>SHS Work Immersion</p>
              </div>
              <ul className="servicesList [&>li]:flex [&>li]:items-center [&>li]:gap-2 [&>li]:mb-2 ">
                <li>
                  <Calculator className="text-2xl text-dark" /> Journal Entry
                </li>
                <li>
                  <Calculator className="text-2xl text-dark" /> Ledger Posting
                </li>
                <li>
                  <Calculator className="text-2xl text-dark" /> Trial Balance
                  Reporting
                </li>
                <li>
                  <Calculator className="text-2xl text-dark" /> Adjusting Entry
                </li>
                <li>
                  <Calculator className="text-2xl text-dark" />
                  Financial Statements & Reports
                </li>
                <li>
                  <Calculator className="text-2xl text-dark" />
                  Excel Advanced Functions & Formulas
                </li>
                <li>
                  <Calculator className="text-2xl text-dark" />
                  Payroll Report
                </li>
                <li>
                  <Calculator className="text-2xl text-dark" />
                  Quickbooks Online
                </li>
              </ul>
            </div>
            <div className="adminTasks">
              <div className="mb-10">
                <p>HUMSS and GAS students can learn</p>
                <h3 className="text-[35px] font-semibold text-primary leading-[1.1]">
                  Administrative <br />
                  Tasks
                </h3>
                <p>SHS Work Immersion</p>
              </div>
              <ul className="servicesList [&>li]:flex [&>li]:items-center [&>li]:gap-2 [&>li]:mb-2 ">
                <li>
                  <NotebookPen className="text-2xl text-dark" />
                  Leadership Principles
                </li>
                <li>
                  <NotebookPen className="text-2xl text-dark" />
                  Business Correspondence
                </li>
                <li>
                  <NotebookPen className="text-2xl text-dark" />
                  Standard Operating Procedures
                </li>
                <li>
                  <NotebookPen className="text-2xl text-dark" />
                  Job Interview Simulation
                </li>
                <li>
                  <NotebookPen className="text-2xl text-dark" />
                  Basic Accounting Application
                </li>
                <li>
                  <NotebookPen className="text-2xl text-dark" />
                  Excel Advanced Functions and Formulas
                </li>
                <li>
                  <NotebookPen className="text-2xl text-dark" />
                  Payroll Setup
                </li>
                <li>
                  <NotebookPen className="text-2xl text-dark" />
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
