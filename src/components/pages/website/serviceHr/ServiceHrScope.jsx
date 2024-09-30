import React, { useEffect } from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { FaBuildingUser } from "react-icons/fa6";
import { HiOutlineMegaphone } from "react-icons/hi2";
import { IoChevronDown } from "react-icons/io5";
import { LuCalendarClock, LuClock } from "react-icons/lu";
import { MdOutlineCalendarToday, MdOutlineDashboard } from "react-icons/md";

const ServiceHrScope = () => {
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
      <section className="ServiceHrScope py-20">
        <div className="customContainer">
          <div>
            <p>What makes this web app</p>
            <h2 className="text-[35px] font-semibold text-primary leading-[1.1] mb-8">
              a lifesaver?
            </h2>
          </div>
          <div className="warpper grid grid-cols-2">
            <ul>
              <li className="overflow-hidden  border-b border-[#e9e9e9]">
                <div
                  className="flex justify-between items-center px-2 group hover:bg-[#f1f1f1] cursor-pointer py-2"
                  onClick={() => handleAccordion("dassboard")}
                >
                  <div className="flex items-center gap-4">
                    <MdOutlineDashboard className="text-3xl text-primary" />
                    <p
                      className={`${
                        accordion && accordionItem === "dassboard"
                          ? "bg-gradient-to-r from-primary to-secondary bg-clip-text text-[transparent]"
                          : "text-dark"
                      } text-xl font-semibold cursor-pointer `}
                    >
                      IntuitiveDashboard
                    </p>
                  </div>
                  <IoChevronDown className="" />
                </div>
                <div
                  className={`${
                    accordion && accordionItem === "dassboard"
                      ? "min-h-[170px] px-4 pt-4 pb-8"
                      : "h-0 py-0"
                  } accordionContent `}
                >
                  <p className="mb-4">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Quaerat reprehenderit est amet quisquam autem tempore
                    pariatur, deleniti dolores cumque corporis mollitia!
                    Commodi, corrupti quaerat! Debitis, repudiandae asperiores.
                    Harum praesentium omnis aliquam nostrum consectetur dolorum
                    eius error molestiae. Sunt aut accusantium eos culpa illum
                    magni, eum velit molestias veritatis cumque. Nemo?
                  </p>
                  <a href="#" className="btn bg-primary text-light">
                    Schedule a Demo
                  </a>
                </div>
              </li>
              <li className="overflow-hidden  border-b border-[#e9e9e9]">
                <div
                  className="flex justify-between items-center px-2 group hover:bg-[#f1f1f1] cursor-pointer py-3"
                  onClick={() => handleAccordion("201file")}
                >
                  <div className="flex items-center gap-4">
                    <FaRegFileAlt className="text-3xl text-primary" />
                    <p
                      className={`${
                        accordion && accordionItem === "201file"
                          ? "bg-gradient-to-r from-primary to-secondary bg-clip-text text-[transparent]"
                          : "text-dark"
                      } text-xl font-semibold cursor-pointer `}
                    >
                      Employee 201 File
                    </p>
                  </div>
                  <IoChevronDown className="" />
                </div>
                <div
                  className={`${
                    accordion && accordionItem === "201file"
                      ? "min-h-[170px] px-4 pt-4 pb-8"
                      : "h-0 py-0"
                  } accordionContent`}
                >
                  <p className="mb-4">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Quaerat reprehenderit est amet quisquam autem tempore
                    pariatur, deleniti dolores cumque corporis mollitia!
                    Commodi, corrupti quaerat! Debitis, repudiandae asperiores.
                    Harum praesentium omnis aliquam nostrum consectetur dolorum
                    eius error molestiae. Sunt aut accusantium eos culpa illum
                    magni, eum velit molestias veritatis cumque. Nemo?
                  </p>
                  <a href="#" className="btn bg-primary text-light">
                    Schedule a Demo
                  </a>
                </div>
              </li>
              <li className="overflow-hidden  border-b border-[#e9e9e9]">
                <div
                  className="flex justify-between items-center px-2 group hover:bg-[#f1f1f1] cursor-pointer py-3"
                  onClick={() => handleAccordion("leave")}
                >
                  <div className="flex items-center gap-4">
                    <MdOutlineCalendarToday className="text-3xl text-primary" />
                    <p
                      className={`${
                        accordion && accordionItem === "leave"
                          ? "bg-gradient-to-r from-primary to-secondary bg-clip-text text-[transparent]"
                          : "text-dark"
                      } text-xl font-semibold cursor-pointer `}
                    >
                      Leave Management
                    </p>
                  </div>
                  <IoChevronDown className="" />
                </div>
                <div
                  className={`${
                    accordion && accordionItem === "leave"
                      ? "min-h-[170px] px-4 pt-4 pb-8"
                      : "h-0 py-0"
                  } accordionContent`}
                >
                  <p className="mb-4">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Quaerat reprehenderit est amet quisquam autem tempore
                    pariatur, deleniti dolores cumque corporis mollitia!
                    Commodi, corrupti quaerat! Debitis, repudiandae asperiores.
                    Harum praesentium omnis aliquam nostrum consectetur dolorum
                    eius error molestiae. Sunt aut accusantium eos culpa illum
                    magni, eum velit molestias veritatis cumque. Nemo?
                  </p>
                  <a href="#" className="btn bg-primary text-light">
                    Schedule a Demo
                  </a>
                </div>
              </li>
              <li className="overflow-hidden  border-b border-[#e9e9e9]">
                <div
                  className="flex justify-between items-center px-2 group hover:bg-[#f1f1f1] cursor-pointer py-3"
                  onClick={() => handleAccordion("overtime")}
                >
                  <div className="flex items-center gap-4">
                    <LuCalendarClock className="text-3xl text-primary" />
                    <p
                      className={`${
                        accordion && accordionItem === "overtime"
                          ? "bg-gradient-to-r from-primary to-secondary bg-clip-text text-[transparent]"
                          : "text-dark"
                      } text-xl font-semibold cursor-pointer `}
                    >
                      Overtime Management
                    </p>
                  </div>
                  <IoChevronDown className="" />
                </div>
                <div
                  className={`${
                    accordion && accordionItem === "overtime"
                      ? "min-h-[170px] px-4 pt-4 pb-8"
                      : "h-0 py-0"
                  } accordionContent`}
                >
                  <p className="mb-4">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Quaerat reprehenderit est amet quisquam autem tempore
                    pariatur, deleniti dolores cumque corporis mollitia!
                    Commodi, corrupti quaerat! Debitis, repudiandae asperiores.
                    Harum praesentium omnis aliquam nostrum consectetur dolorum
                    eius error molestiae. Sunt aut accusantium eos culpa illum
                    magni, eum velit molestias veritatis cumque. Nemo?
                  </p>
                  <a href="#" className="btn bg-primary text-light">
                    Schedule a Demo
                  </a>
                </div>
              </li>
              <li className="overflow-hidden  border-b border-[#e9e9e9]">
                <div
                  className="flex justify-between items-center px-2 group hover:bg-[#f1f1f1] cursor-pointer py-3"
                  onClick={() => handleAccordion("time")}
                >
                  <div className="flex items-center gap-4">
                    <LuClock className="text-3xl text-primary" />
                    <p
                      className={`${
                        accordion && accordionItem === "time"
                          ? "bg-gradient-to-r from-primary to-secondary bg-clip-text text-[transparent]"
                          : "text-dark"
                      } text-xl font-semibold cursor-pointer `}
                    >
                      Task Management with Timer
                    </p>
                  </div>
                  <IoChevronDown className="" />
                </div>
                <div
                  className={`${
                    accordion && accordionItem === "time"
                      ? "min-h-[170px] px-4 pt-4 pb-8"
                      : "h-0 py-0"
                  } accordionContent`}
                >
                  <p className="mb-4">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Quaerat reprehenderit est amet quisquam autem tempore
                    pariatur, deleniti dolores cumque corporis mollitia!
                    Commodi, corrupti quaerat! Debitis, repudiandae asperiores.
                    Harum praesentium omnis aliquam nostrum consectetur dolorum
                    eius error molestiae. Sunt aut accusantium eos culpa illum
                    magni, eum velit molestias veritatis cumque. Nemo?
                  </p>
                  <a href="#" className="btn bg-primary text-light">
                    Schedule a Demo
                  </a>
                </div>
              </li>
              <li className="overflow-hidden  border-b border-[#e9e9e9]">
                <div
                  className="flex justify-between items-center px-2 group hover:bg-[#f1f1f1] cursor-pointer py-3"
                  onClick={() => handleAccordion("client")}
                >
                  <div className="flex items-center gap-4">
                    <FaBuildingUser className="text-3xl text-primary" />
                    <p
                      className={`${
                        accordion && accordionItem === "client"
                          ? "bg-gradient-to-r from-primary to-secondary bg-clip-text text-[transparent]"
                          : "text-dark"
                      } text-xl font-semibold cursor-pointer `}
                    >
                      Client Management
                    </p>
                  </div>
                  <IoChevronDown className="" />
                </div>
                <div
                  className={`${
                    accordion && accordionItem === "client"
                      ? "min-h-[170px] px-4 pt-4 pb-8"
                      : "h-0 py-0"
                  } accordionContent`}
                >
                  <p className="mb-4">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Quaerat reprehenderit est amet quisquam autem tempore
                    pariatur, deleniti dolores cumque corporis mollitia!
                    Commodi, corrupti quaerat! Debitis, repudiandae asperiores.
                    Harum praesentium omnis aliquam nostrum consectetur dolorum
                    eius error molestiae. Sunt aut accusantium eos culpa illum
                    magni, eum velit molestias veritatis cumque. Nemo?
                  </p>
                  <a href="#" className="btn bg-primary text-light">
                    Schedule a Demo
                  </a>
                </div>
              </li>
              <li className="overflow-hidden  border-b border-[#e9e9e9]">
                <div
                  className="flex justify-between items-center px-2 group hover:bg-[#f1f1f1] cursor-pointer py-3"
                  onClick={() => handleAccordion("megaphone")}
                >
                  <div className="flex items-center gap-4">
                    <HiOutlineMegaphone className="text-3xl text-primary" />
                    <p
                      className={`${
                        accordion && accordionItem === "megaphone"
                          ? "bg-gradient-to-r from-primary to-secondary bg-clip-text text-[transparent]"
                          : "text-dark"
                      } text-xl font-semibold cursor-pointer `}
                    >
                      Announcement Management
                    </p>
                  </div>
                  <IoChevronDown className="" />
                </div>
                <div
                  className={`${
                    accordion && accordionItem === "megaphone"
                      ? "min-h-[170px] px-4 pt-4 pb-8"
                      : "h-0 py-0"
                  } accordionContent`}
                >
                  <p className="mb-4">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Quaerat reprehenderit est amet quisquam autem tempore
                    pariatur, deleniti dolores cumque corporis mollitia!
                    Commodi, corrupti quaerat! Debitis, repudiandae asperiores.
                    Harum praesentium omnis aliquam nostrum consectetur dolorum
                    eius error molestiae. Sunt aut accusantium eos culpa illum
                    magni, eum velit molestias veritatis cumque. Nemo?
                  </p>
                  <a href="#" className="btn bg-primary text-light">
                    Schedule a Demo
                  </a>
                </div>
              </li>
            </ul>
            <div
              className={`${
                accordionItem === "dassboard" ? "block" : "hidden"
              }`}
            >
              <p>image 1</p>
            </div>
            <div
              className={`${accordionItem === "201file" ? "block" : "hidden"}`}
            >
              <p>image 2</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceHrScope;
