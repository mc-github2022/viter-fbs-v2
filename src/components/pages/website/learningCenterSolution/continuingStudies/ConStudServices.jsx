import React from "react";
import { BsCalculator } from "react-icons/bs";
import { FaLaptop } from "react-icons/fa";
import { Palette, Laptop, Calculator } from "lucide-react";

const ConStudServices = () => {
  return (
    <>
      <section className="ConStudServices py-20">
        <div className="customContainer">
          <div className="wrapper flex flex-wrap place-content-center">
            <div className="webDesign w-[320px] py-5 md:px-3 lg:px-0">
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
                  <div><Palette className="text-2xl text-dark" /></div> Figma Introduction
                  and UI
                </li>
                <li>
                  <div><Palette className="text-2xl text-dark" /></div> Layers
                </li>
                <li>
                  <div><Palette className="text-2xl text-dark" /></div> Colors, Images,
                  Icons, and Typography
                </li>
                <li>
                  <div><Palette className="text-2xl text-dark" /></div>
                  Components
                </li>
                <li>
                  <div><Palette className="text-2xl text-dark" /></div>
                  Plugins & Grids
                </li>
                <li>
                  <div><Palette className="text-2xl text-dark" /></div>
                  Collaborations
                </li>
                <li>
                  <div><Palette className="text-2xl text-dark" /></div>
                  Prototyping
                </li>
              </ul>
            </div>
            <div className="webFrontend w-[320px] py-5 md:px-3 lg:px-0">
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
                  <div><Laptop className="text-2xl text-dark" /></div> Web Designing using
                  Figma
                </li>
                <li>
                  <div><Laptop className="text-2xl text-dark" /></div> Website Mockup
                  Designing
                </li>
                <li>
                  <div><Laptop className="text-2xl text-dark" /></div> Mobile Responsive
                  Designing
                </li>
                <li>
                  <div><Laptop className="text-2xl text-dark" /></div> CSS & HTML
                  Programming
                </li>
                <li>
                  <div><Laptop className="text-2xl text-dark" /></div>
                  SASS Preprocessor
                </li>
                <li>
                  <div><Laptop className="text-2xl text-dark" /></div>
                  Scripting Language
                </li>
                <li>
                  <div><Laptop className="text-2xl text-dark" /></div>
                  Tailwind CSS
                </li>
                <li>
                  <div><Laptop className="text-2xl text-dark" /></div>
                  WordPress Development
                </li>
              </ul>
            </div>
            <div className="webBackend w-[320px] py-5 md:px-3 lg:px-0">
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
                  <div><Laptop className="text-2xl text-dark" /></div> ReactJs Frontend
                </li>
                <li>
                  <div><Laptop className="text-2xl text-dark" /></div> Props, State, and
                  Store Context
                </li>
                <li>
                  <div><Laptop className="text-2xl text-dark" /></div> MySQL, CRUD, CORS,
                  and API
                </li>
                <li>
                  <div><Laptop className="text-2xl text-dark" /></div> ReactJS Project
                  Development
                </li>
              </ul>
            </div>
            <div className="accountingServices w-[320px] py-5 md:px-3 lg:px-0">
              <div className="my-10 md:mb-10 md:my-0">
                <p>Here is what you can learn in our</p>
                <h3 className="text-[clamp(20px,7vw,35px)] font-semibold text-primary leading-[1.1]">
                  Online Accounting System
                </h3>
                <p>Minimum of 80 Hours</p>
                <p>Prerequisite: Basic Accounting</p>
              </div>
              <ul className="servicesList [&>li]:flex [&>li]:items-center [&>li]:gap-2 [&>li]:mb-2 ">
                <li>
                  <div><Calculator className="text-2xl text-dark" /></div>
                  Quickbooks Online
                </li>
                <li>
                  <div><Calculator className="text-2xl text-dark" /></div>
                  Xero Accounting Software
                </li>
                <li>
                  <div><Calculator className="text-2xl text-dark" /></div> ProAdvisor
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
