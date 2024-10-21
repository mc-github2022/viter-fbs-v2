import React from "react";
import { BsCalculator } from "react-icons/bs";
import { FaLaptop } from "react-icons/fa";

const ConStudServices = () => {
  return (
    <>
      <section className="ConStudServices py-20">
        <div className="customContainer">
          <div className="wrapper lg:grid lg:grid-cols-4">
            <div className="webDesign">
              <div className="mb-10">
                <p>Here is what you can learn in our</p>
                <h3 className="text-[clamp(20px,7vw,35px)] font-semibold text-primary leading-[1.1]">
                  Website <br /> Designing <br />
                  Training
                </h3>
                <p>Minimun of 80 Hours </p>
                <p>Prerequisite: None</p>
              </div>
              <ul className="servicesList [&>li]:flex [&>li]:items-center [&>li]:gap-2 [&>li]:mb-2 ">
                <li>
                  <FaLaptop className="text-2xl text-dark" /> Figma Introduction
                </li>
                <li>
                  <FaLaptop className="text-2xl text-dark" /> Figma User
                  Interface
                </li>
                <li>
                  <FaLaptop className="text-2xl text-dark" /> Layers
                </li>
                <li>
                  <FaLaptop className="text-2xl text-dark" /> Colors, Images,
                  Icons, and Typography
                </li>
                <li>
                  <FaLaptop className="text-2xl text-dark" />
                  Components
                </li>
                <li>
                  <FaLaptop className="text-2xl text-dark" />
                  Plugins
                </li>
                <li>
                  <FaLaptop className="text-2xl text-dark" />
                  Grids
                </li>
                <li>
                  <FaLaptop className="text-2xl text-dark" />
                  Collaborations
                </li>
                <li>
                  <FaLaptop className="text-2xl text-dark" />
                  Prototyping
                </li>
              </ul>
            </div>
            <div className="webFrontend">
              <div className="mb-10">
                <p>Here is what you can learn in our</p>
                <h3 className="text-[clamp(20px,7vw,35px)] font-semibold text-primary leading-[1.1]">
                  Frontend <br /> Development <br />
                  Training
                </h3>
                <p>Minimun of 240 Hours </p>
                <p>Prerequisite: None</p>
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
                  Business Work Ethics
                </li>
              </ul>
            </div>
            <div className="webBackend">
              <div className="mb-10">
                <p>Here is what you can learn in our</p>
                <h3 className="text-[clamp(20px,7vw,35px)] font-semibold text-primary leading-[1.1]">
                  Backend <br /> Development <br />
                  Training
                </h3>
                <p>Minimun of 160 Hours</p>
                <p>Prerequisite: Frontend Dev.</p>
              </div>
              <ul className="servicesList [&>li]:flex [&>li]:items-center [&>li]:gap-2 [&>li]:mb-2 ">
                <li>
                  <FaLaptop className="text-2xl text-dark" /> ReactJs Frontend
                </li>
                <li>
                  <FaLaptop className="text-2xl text-dark" /> Props, State, and
                  Store Context
                </li>
                <li>
                  <FaLaptop className="text-2xl text-dark" /> MySQL, CRUD, CORS,
                  and API
                </li>
                <li>
                  <FaLaptop className="text-2xl text-dark" /> ReactJS Project
                  Development
                </li>
              </ul>
            </div>
            <div className="accountingServices">
              <div className="my-10 md:mb-10 md:my-0">
                <p>Here is what you can learn in our</p>
                <h3 className="text-[clamp(20px,7vw,35px)] font-semibold text-primary leading-[1.1]">
                  Online Accounting System
                </h3>
                <p>80 Hours</p>
              </div>
              <ul className="servicesList [&>li]:flex [&>li]:items-center [&>li]:gap-2 [&>li]:mb-2 ">
                <li>
                  <BsCalculator className="text-2xl text-dark" />
                  Quickbooks Online
                </li>
                <li>
                  <BsCalculator className="text-2xl text-dark" />
                  Xero
                </li>
                <li>
                  <BsCalculator className="text-2xl text-dark" /> Pro Adviser
                  Certification Reviewer
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ConStudServices;
