import React, { useEffect } from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { FaBuildingUser } from "react-icons/fa6";
import { HiOutlineMegaphone } from "react-icons/hi2";
import { IoChevronDown } from "react-icons/io5";
import { LuCalendarClock, LuClock } from "react-icons/lu";
import { MdOutlineCalendarToday, MdOutlineDashboard } from "react-icons/md";
import { scope } from "./data";
import {
  apiVersion,
  devBaseImgUrl,
  getConvertStringToJSONparseData,
  googleHDViewLink,
} from "../../../../helpers/functions-general";
import ModalContact from "../../../../partials/ModalContact";
import useQueryData from "../../../../custom-hooks/useQueryData";
import LoadImages from "../../../../partials/LoadImages";
import TableLoading from "../../../../partials/spinners/TableLoading";

const GraphicDesignScope = ({ pageName, graphicTitlesData }) => {
  const [modalContact, setModalContact] = React.useState(false);
  const [contactForm, setContactForm] = React.useState(false);

  const {
    isLoading: isLoadingScope,
    isFetching: isFetchingScope,
    error: errorScope,
    data: graphicScopeData,
  } = useQueryData(
    `${apiVersion}/graphic-scope`, // endpoint
    "get", // method
    "graphic-scope", // key
    {},
    null,
    true
  );

  const handleForm = () => {
    setContactForm(!contactForm);
  };

  const [accordionItem, setAccordionItem] = React.useState("");

  const currentScope = graphicScopeData?.data?.find(
    (item) => item.graphic_scope_aid === accordionItem
  );

  const GraphicScopeImage = getConvertStringToJSONparseData(
    currentScope?.graphic_scope_img
  );

  React.useEffect(() => {
    if (graphicScopeData?.data?.length > 0) {
      setAccordionItem(graphicScopeData.data[0].graphic_scope_aid);
    }
  }, [graphicScopeData]);

  const handleAccordion = (item) => {
    setAccordionItem(item);
  };

  return (
    <>
      <section className="GraphicDesignScope py-20">
        <div className="customContainer">
          <div>
            <h2 className="text-[clamp(20px,7vw,35px)] font-semibold text-primary leading-[1.1] mb-8">
              {graphicTitlesData?.data?.[0]?.graphic_titles_overview_title ||
                ""}
            </h2>
          </div>
          <div className="warpper md:grid md:grid-cols-2 gap-5">
            <ul>
              {isLoadingScope || isFetchingScope ? (
                <TableLoading cols={1} count={15} />
              ) : (
                graphicScopeData?.data.map((scopeList, key) => {
                  return (
                    <li
                      key={key}
                      className="overflow-hidden border-b border-[#e9e9e9]"
                    >
                      <div
                        className={`${
                          accordionItem === scopeList.graphic_scope_aid
                            ? "bg-customGray"
                            : ""
                        } grid grid-cols-[_3.5fr,_.5fr] justify-between items-center px-2 group hover:bg-[#f1f1f1] cursor-pointer py-2`}
                        onClick={() =>
                          handleAccordion(scopeList.graphic_scope_aid)
                        }
                      >
                        <div className="grid grid-cols-[_2rem,_1fr] items-center gap-4">
                          <div>
                            <MdOutlineDashboard className="text-3xl text-primary" />
                          </div>
                          <p
                            className={`${
                              accordionItem === scopeList.graphic_scope_aid
                                ? "bg-gradient-to-r from-primary to-secondary bg-clip-text text-[transparent]"
                                : "text-dark"
                            } text-[clamp(18px,4vw,20px)] font-semibold cursor-pointer `}
                          >
                            {scopeList.graphic_scope_title}
                          </p>
                        </div>
                        <IoChevronDown
                          className={`${
                            accordionItem === scopeList.graphic_scope_aid
                              ? "rotate-180"
                              : ""
                          } `}
                        />
                      </div>
                      <div
                        className={`${
                          accordionItem === scopeList.graphic_scope_aid
                            ? "px-4 pt-4 pb-4"
                            : "h-0 py-0"
                        } accordionContent `}
                      >
                        <p>{scopeList.graphic_scope_desc}</p>

                        {/* <a href="#" className="btn bg-primary text-light">
                           Schedule a Demo
                         </a> */}
                        <p className="md:hidden py-6">
                          <button
                            onClick={handleForm}
                            className="btn bg-primary text-light font-semibold uppercase"
                          >
                            {scopeList.graphic_scope_button_text || ""}
                          </button>
                        </p>
                      </div>
                    </li>
                  );
                })
              )}
            </ul>
            {graphicScopeData?.data.map((scopedata, key) => {
              return (
                <div
                  key={key}
                  className={`${
                    accordionItem === scopedata.graphic_scope_aid
                      ? "block"
                      : "hidden"
                  } relative`}
                >
                  {GraphicScopeImage.map((img, index) => (
                    <LoadImages
                      className="hidden h-[364px] md:w-full md:object-contain md:block z-10"
                      url={`${googleHDViewLink}${img?.id}`}
                      alt="What Makes This Web App"
                      key={index}
                    />
                  ))}

                  <p className="hidden md:block mb-4 text-center pt-8 pb-8">
                    <button
                      onClick={handleForm}
                      className="btn bg-primary text-light font-semibold uppercase"
                    >
                      {scopedata.graphic_scope_button_text || ""}
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
          emailSubject={`CONTACT US / Graphic Design (${accordionItem}) - `}
        />
      )}
    </>
  );
};

export default GraphicDesignScope;
