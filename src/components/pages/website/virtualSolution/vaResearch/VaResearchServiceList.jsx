import React from "react";
import { FaHeadset, FaRegHandshake } from "react-icons/fa6";
import { GoChecklist } from "react-icons/go";
import {
  MdInfoOutline,
  MdOutlineRocketLaunch,
  MdOutlineSupportAgent,
} from "react-icons/md";

const VaResearchServiceList = () => {
  return (
    <>
      <section className="VaResearchServiceList pt-20 pb-40">
        <div className="customContainer">
          <div className="sectionDesc text-center md:w-[70%] mx-auto mb-14">
            <h2 className="text-[clamp(20px,6vw,60px)] leading-[1.1] font-semibold mb-10">
              What Can Customer Service Assistants Do?
            </h2>
            <p className="subDesc mb-10">
              Using an assistant to help manage your customer service saves you
              time and money and means that you can deliver a better customer
              experience.
            </p>
            <a
              href="#"
              className="btn bg-primary text-light font-bold hover:bg-secondary transition-all"
            >
              Get Started
            </a>
          </div>
          <ul className="serviceInclusion grid md:grid-cols-2 gap-6">
            <li className="flex items-center gap-7">
              <div className="bg-customGray rounded-lg addShadow">
                <div className="w-16 h-16 grid place-items-center">
                  <FaHeadset className="text-3xl text-primary" />
                </div>
              </div>
              <p className="font-semibold text-xl lg:text-2xl">
                Phone, Email & Live Chat Support
              </p>
            </li>
            <li className="flex items-center gap-7">
              <div className="bg-customGray rounded-lg addShadow">
                <div className="w-16 h-16 grid place-items-center">
                  <MdInfoOutline className="text-3xl text-primary" />
                </div>
              </div>
              <p className="font-semibold text-xl lg:text-2xl">
                Escalation Management
              </p>
            </li>
            <li className="flex items-center gap-7">
              <div className="bg-customGray rounded-lg addShadow">
                <div className="w-16 h-16 grid place-items-center">
                  <MdOutlineSupportAgent className="text-3xl text-primary" />
                </div>
              </div>
              <p className="font-semibold text-xl lg:text-2xl">
                24/7 Customer Support
              </p>
            </li>
            <li className="flex items-center gap-7">
              <div className="bg-customGray rounded-lg addShadow">
                <div className="w-16 h-16 grid place-items-center">
                  <FaRegHandshake className="text-3xl text-primary" />
                </div>
              </div>
              <p className="font-semibold text-xl lg:text-2xl">
                Customer Retention & Relationship Building
              </p>
            </li>
            <li className="flex items-center gap-7">
              <div className="bg-customGray rounded-lg addShadow">
                <div className="w-16 h-16 grid place-items-center">
                  <MdOutlineRocketLaunch className="text-3xl text-primary" />
                </div>
              </div>
              <p className="font-semibold text-xl lg:text-2xl">
                Customer Onboarding
              </p>
            </li>
            <li className="flex items-center gap-7">
              <div className="bg-customGray rounded-lg addShadow">
                <div className="w-16 h-16 grid place-items-center">
                  <GoChecklist className="text-3xl text-primary" />
                </div>
              </div>
              <p className="font-semibold text-xl lg:text-2xl">
                Order Processing & Fulfillment
              </p>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default VaResearchServiceList;
