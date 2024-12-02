import React, { useEffect } from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { FaBuildingUser } from "react-icons/fa6";
import { HiOutlineMegaphone } from "react-icons/hi2";
import { IoChevronDown } from "react-icons/io5";
import { LuCalendarClock, LuClock } from "react-icons/lu";
import { MdOutlineCalendarToday, MdOutlineDashboard } from "react-icons/md";
import { scope } from "./data";
import { devBaseImgUrl } from "../../../../helpers/functions-general";
import ModalContact from "../../../../partials/ModalContact";

const SinglePageScope = ({ pageName }) => {
  const [modalContact, setModalContact] = React.useState(false);
  const [contactForm, setContactForm] = React.useState(false);
  const handleForm = () => {
    setContactForm(!contactForm);
  };

  const [accordionItem, setAccordionItem] = React.useState("");

  useEffect(() => {
    setAccordion(true);
    setAccordionItem("Quick Deployment");
  }, []);

  const [accordion, setAccordion] = React.useState(false);
  const handleAccordion = (item) => {
    setAccordion(true);
    setAccordionItem(item);
  };

  return (
    <>
      <section className="SinglePageScope py-20">
        <div className="customContainer">
          <div>
            <p>What Makes This Web App</p>
            <h2 className="text-[clamp(20px,7vw,35px)] font-semibold text-primary leading-[1.1] mb-8">
              a Lifesaver?
            </h2>
          </div>
          <div className="warpper md:grid md:grid-cols-2 gap-5">
            <ul>
              {scope.map((scopeList, key) => {
                return (
                  <li
                    key={key}
                    className={"overflow-hidden  border-b border-[#e9e9e9]"}
                  >
                    <div
                      className={`${
                        accordion && accordionItem === scopeList.scopeId
                          ? "bg-customGray"
                          : ""
                      } grid grid-cols-[_3.5fr,_.5fr] justify-between items-center px-2 group hover:bg-[#f1f1f1] cursor-pointer py-2`}
                      onClick={() => handleAccordion(scopeList.scopeId)}
                    >
                      <div className="grid grid-cols-[_2rem,_1fr] items-center gap-4">
                        {scopeList.scopeIcon}
                        <p
                          className={`${
                            accordion && accordionItem === scopeList.scopeId
                              ? "bg-gradient-to-r from-primary to-secondary bg-clip-text text-[transparent]"
                              : "text-dark"
                          } text-[clamp(18px,4vw,20px)] font-semibold cursor-pointer `}
                        >
                          {scopeList.scopeTitle}
                        </p>
                      </div>
                      <IoChevronDown
                        className={`${
                          accordion && accordionItem === scopeList.scopeId
                            ? "rotate-180"
                            : ""
                        }`}
                      />
                    </div>
                    <div
                      className={`${
                        accordion && accordionItem === scopeList.scopeId
                          ? "px-4 pt-4 pb-4"
                          : "h-0 py-0"
                      } accordionContent `}
                    >
                      <p className="">{scopeList.scopeDesc}</p>
                      {/* <a href="#" className="btn bg-primary text-light">
                        Schedule a Demo
                      </a> */}
                      <p className="md:hidden py-6">
                        <button
                          onClick={handleForm}
                          className="btn px-5 bg-primary text-light font-semibold"
                        >
                          CONTACT US
                        </button>
                      </p>
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
                    className="hidden md:w-full md:object-contain md:block"
                    // src={`${devBaseImgUrl}/hrScopdeSS_overview.jpg`}
                    src={`${devBaseImgUrl}/${scopedata.scopeImage}`}
                    alt="What Makes This Web App"
                  />

                  <p className="hidden md:block mb-4 text-center pt-8 pb-8">
                    <button
                      onClick={handleForm}
                      className="btn bg-primary text-light font-semibold"
                    >
                      CONTACT US
                    </button>
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {contactForm && (
        <ModalContact
          setModalContact={setModalContact}
          thePageName={pageName}
          contactForm={contactForm}
          setContactForm={setContactForm}
          modalContact={modalContact}
          contactSubject={""}
          notification_purpose={"default-receiver"}
          emailSubject={`CONTACT US / Single Page Website (${accordionItem}) - `}
        />
      )}
    </>
  );
};

export default SinglePageScope;
