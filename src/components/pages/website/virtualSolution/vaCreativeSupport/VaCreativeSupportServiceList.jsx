import React from "react";
import { FaHeadset, FaRegHandshake } from "react-icons/fa6";
import { GoChecklist } from "react-icons/go";
import {
  MdInfoOutline,
  MdOutlineRocketLaunch,
  MdOutlineSupportAgent,
} from "react-icons/md";

const VaCreativeSupportServiceList = () => {
  return (
    <>
      <section className="VaCreativeSupportServiceList pt-20 pb-40">
        <div className="customContainer">
          <div className="sectionDesc text-center md:w-[70%] mx-auto mb-14">
            <h2 className="text-[clamp(20px,6vw,60px)] leading-[1.1] font-semibold mb-10">
              What <span className="text-primary">Creative Supports </span>{" "}
              <br />
              Can We Perform?
            </h2>
            <p className="subDesc mb-10">
              Our VA for Administrative Assistance offers comprehensive support
              to streamline your business operations.
            </p>
            <a
              href="#"
              className="btn bg-primary text-light font-light hover:bg-secondary transition-all"
            >
              GET STARTED
            </a>
          </div>
          <ul className="serviceInclusion w-[400px] mx-auto">
            <li className="flex items-center gap-7 mb-7 ">
              <div className="bg-customGray rounded-lg addShadow">
                <div className="w-16 h-16 grid place-items-center">
                  <FaHeadset className="text-3xl text-primary" />
                </div>
              </div>
              <p className="font-semibold text-xl lg:text-2xl">Canva Design</p>
            </li>
            <li className="flex items-center gap-7 mb-7 ">
              <div className="bg-customGray rounded-lg addShadow">
                <div className="w-16 h-16 grid place-items-center">
                  <MdInfoOutline className="text-3xl text-primary" />
                </div>
              </div>
              <p className="font-semibold text-xl lg:text-2xl">Video Editing</p>
            </li>
            <li className="flex items-center gap-7  ">
              <div className="bg-customGray rounded-lg addShadow">
                <div className="w-16 h-16 grid place-items-center">
                  <MdOutlineSupportAgent className="text-3xl text-primary" />
                </div>
              </div>
              <p className="font-semibold text-xl lg:text-2xl">
                Podcast Management
              </p>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default VaCreativeSupportServiceList;
