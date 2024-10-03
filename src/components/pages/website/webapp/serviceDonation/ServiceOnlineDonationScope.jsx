import React, { useEffect } from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { FaBuildingUser } from "react-icons/fa6";
import { HiOutlineMegaphone } from "react-icons/hi2";
import { IoChevronDown } from "react-icons/io5";
import { LuCalendarClock, LuClock } from "react-icons/lu";
import { MdOutlineCalendarToday, MdOutlineDashboard } from "react-icons/md";
import { scope } from "./data";

const ServiceOnlineDonationScope = () => {
  const [accordionItem, setAccordionItem] = React.useState("");

  window.onload = function () {
    setAccordion(true);
    setAccordionItem("dassboard");
  };

  const [accordion, setAccordion] = React.useState(false);
  const handleAccordion = (item) => {
    setAccordion(true);
    setAccordionItem(item);
  };

  return (
    <>
      <section className="ServiceOnlineDonationScope py-20">
        <div className="customContainer">
          <div>
            <p>What makes this web app</p>
            <h2 className="text-[35px] font-semibold text-primary leading-[1.1] mb-8">
              a lifesaver?
            </h2>
          </div>
          <div className="warpper grid grid-cols-2 gap-5">
            <ul>
              {scope.map((scopeList, key) => {
                return (
                  <li
                    key={key}
                    className="overflow-hidden  border-b border-[#e9e9e9]"
                  >
                    <div
                      className={`${
                        accordion && accordionItem === scopeList.scopeId
                          ? "bg-customGray"
                          : ""
                      } flex justify-between items-center px-2 group hover:bg-[#f1f1f1] cursor-pointer py-2`}
                      onClick={() => handleAccordion(scopeList.scopeId)}
                    >
                      <div className="flex items-center gap-4">
                        {scopeList.scopeIcon}
                        <p
                          className={`${
                            accordion && accordionItem === scopeList.scopeId
                              ? "bg-gradient-to-r from-primary to-secondary bg-clip-text text-[transparent]"
                              : "text-dark"
                          } text-xl font-semibold cursor-pointer `}
                        >
                          {scopeList.scopeTitle}
                        </p>
                      </div>
                      <IoChevronDown className="" />
                    </div>
                    <div
                      className={`${
                        accordion && accordionItem === scopeList.scopeId
                          ? "min-h-[170px] px-4 pt-4 pb-8"
                          : "h-0 py-0"
                      } accordionContent `}
                    >
                      <p className="mb-4">{scopeList.scopeDesc}</p>
                      <a href="#" className="btn bg-primary text-light">
                        Schedule a Demo
                      </a>
                    </div>
                  </li>
                );
              })}
            </ul>
            {scope.map((scopedata, key) => {
              return (
                <div
                  key={key}
                  className={`${
                    accordionItem === scopedata.scopeId ? "block" : "hidden"
                  }`}
                >
                  <img
                    className="w-full object-contain"
                    // src={`${devBaseImgUrl}/hrScopdeSS_overview.jpg`}
                    src={`../../public/img/${scopedata.scopeImage}`}
                    alt=""
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceOnlineDonationScope;
