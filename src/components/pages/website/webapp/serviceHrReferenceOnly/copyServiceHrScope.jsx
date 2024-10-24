import React, { useEffect } from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { FaBuildingUser } from "react-icons/fa6";
import { HiOutlineMegaphone } from "react-icons/hi2";
import { IoChevronDown } from "react-icons/io5";
import { LuCalendarClock, LuClock } from "react-icons/lu";
import { MdOutlineCalendarToday, MdOutlineDashboard } from "react-icons/md";

const ServiceHrScope = () => {
  const [accordionItem, setAccordionItem] = React.useState("");

  useEffect(() => {
    setAccordion(true);
    setAccordionItem("starter");
  }, []);

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
          <div className="warpper grid grid-cols-2 gap-5">
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
                      Intuitive Dashboard
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
                    The system offers a user-friendly dashboard that provides
                    admins and employees with key information at a glance,
                    including leave statuses, announcements, celebrations, team
                    details, and new employee notifications for quick access and
                    improved communication.
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
                    This allows HR teams to manage and maintain comprehensive
                    201 files for all employees, storing personal information,
                    employment history, performance records, and other relevant
                    documents in one secure and accessible location.
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
                    It includes a Leave Application and Approval feature that
                    enables employees to request leaves and managers to approve
                    or reject them through an intuitive and automated platform,
                    streamlining the entire leave process.
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
                    This feature tracks employee overtime hours, allowing for
                    easy submission, approval, and monitoring of overtime
                    requests. It ensures accurate compensation and compliance
                    with company policies.
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
                    It enables employees to track time spent on various tasks
                    and projects within the application, offering a detailed
                    breakdown of work hours for better project management and
                    productivity analysis.
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
                    This feature helps manage and track records of clients,
                    including maintaining client information and ensuring a
                    smooth and organized client relationship process.
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
                    This allows organizations to share important news, updates,
                    and upcoming activities with employees through a centralized
                    platform, ensuring everyone stays informed and connected
                    across the company.
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
              <img
                className="w-full object-contain"
                // src={`${devBaseImgUrl}/hrScopdeSS_overview.jpg`}
                src={`../../public/img/hrScopdeSS_overview.jpg`}
                alt=""
              />
            </div>
            <div
              className={`${accordionItem === "leave" ? "block" : "hidden"}`}
            >
              <img
                className="w-full object-contain"
                // src={`${devBaseImgUrl}/hrScopdeSS_leave-application.jpg`}
                src={`../../public/img/hrScopdeSS_leave-application.jpg`}
                alt=""
              />
            </div>
            <div
              className={`${accordionItem === "overtime" ? "block" : "hidden"}`}
            >
              <img
                className="w-full object-contain"
                // src={`${devBaseImgUrl}/hrScopdeSS_overtime.jpg`}
                src={`../../public/img/hrScopdeSS_overtime.jpg`}
                alt=""
              />
            </div>
            <div className={`${accordionItem === "time" ? "block" : "hidden"}`}>
              <img
                className="w-full object-contain"
                // src={`${devBaseImgUrl}/hrScopdeSS_tasks.jpg`}
                src={`../../public/img/hrScopdeSS_tasks.jpg`}
                alt=""
              />
            </div>
            <div
              className={`${accordionItem === "client" ? "block" : "hidden"}`}
            >
              <img
                className="w-full object-contain"
                // src={`${devBaseImgUrl}/hrScopdeSS_client.jpg`}
                src={`../../public/img/hrScopdeSS_client.jpg`}
                alt=""
              />
            </div>
            <div
              className={`${
                accordionItem === "megaphone" ? "block" : "hidden"
              }`}
            >
              <img
                className="w-full object-contain"
                // src={`${devBaseImgUrl}/hrScopdeSS_announcement.jpg`}
                src={`../../public/img/hrScopdeSS_announcement.jpg`}
                alt=""
              />
            </div>
            <div
              className={`${accordionItem === "201file" ? "block" : "hidden"}`}
            >
              <img
                className="w-full object-contain"
                // src={`${devBaseImgUrl}/hrScopdeSS_employee-list.jpg`}
                src={`../../public/img/hrScopdeSS_employee-list.jpg`}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceHrScope;
