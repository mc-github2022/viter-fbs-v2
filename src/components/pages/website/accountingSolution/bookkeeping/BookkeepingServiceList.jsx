import React from "react";
import {
  BriefcaseBusiness,
  Headset,
  FolderSearch,
  HandCoins,
} from "lucide-react";

import {
  MdInfoOutline,
  MdOutlineRocketLaunch,
  MdOutlineSupportAgent,
  MdOutlineMarkEmailRead,
} from "react-icons/md";
import { BsDatabaseCheck, BsClipboard2Data } from "react-icons/bs";
import { IoFileTrayStackedOutline } from "react-icons/io5";
const BookkeepingServiceList = () => {
  return (
    <>
      <section className="BookkeepingServiceList pt-20 pb-40">
        <div className="customContainer">
          <div className="sectionDesc text-center md:w-[70%] mx-auto mb-14">
            <h2 className="text-[clamp(20px,6vw,60px)] leading-[1.1] font-semibold mb-10">
              What <span className="text-primary">Administrative Tasks </span>{" "}
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
          <ul className="serviceInclusion grid md:grid-cols-2 gap-6">
            <li className="flex items-center gap-7">
              <div className="bg-customGray rounded-lg addShadow">
                <div className="w-16 h-16 grid place-items-center">
                  <BriefcaseBusiness
                    size={28}
                    className="text-3xl text-primary"
                  />
                </div>
              </div>
              <p className="font-semibold text-xl lg:text-2xl">
                Administrative Support
              </p>
            </li>
            <li className="flex items-center gap-7">
              <div className="bg-customGray rounded-lg addShadow">
                <div className="w-16 h-16 grid place-items-center">
                  <BsDatabaseCheck className="text-3xl text-primary" />
                </div>
              </div>
              <p className="font-semibold text-xl lg:text-2xl">
                Data Management and Organization
              </p>
            </li>
            <li className="flex items-center gap-7">
              <div className="bg-customGray rounded-lg addShadow">
                <div className="w-16 h-16 grid place-items-center">
                  <Headset size={28} className="text-3xl text-primary" />
                </div>
              </div>
              <p className="font-semibold text-xl lg:text-2xl">
                Communication and Coordination
              </p>
            </li>
            <li className="flex items-center gap-7">
              <div className="bg-customGray rounded-lg addShadow">
                <div className="w-16 h-16 grid place-items-center">
                  <HandCoins size={28} className="text-3xl text-primary" />
                </div>
              </div>
              <p className="font-semibold text-xl lg:text-2xl">
                Financial and Billing Tasks
              </p>
            </li>
            <li className="flex items-center gap-7">
              <div className="bg-customGray rounded-lg addShadow">
                <div className="w-16 h-16 grid place-items-center">
                  <FolderSearch size={28} className="text-3xl text-primary" />
                </div>
              </div>
              <p className="font-semibold text-xl lg:text-2xl">
                Project and Research Support
              </p>
            </li>
            <li className="flex items-center gap-7">
              <div className="bg-customGray rounded-lg addShadow">
                <div className="w-16 h-16 grid place-items-center">
                  <IoFileTrayStackedOutline className="text-3xl text-primary" />
                </div>
              </div>
              <p className="font-semibold text-xl lg:text-2xl">
                Specialized Document Handling
              </p>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default BookkeepingServiceList;
