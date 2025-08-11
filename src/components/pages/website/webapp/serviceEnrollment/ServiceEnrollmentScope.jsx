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
import TableLoading from "../../../../partials/spinners/TableLoading";
import LoadImages from "../../../../partials/LoadImages";
import useQueryData from "../../../../custom-hooks/useQueryData";

const ServiceEnrollmentScope = ({ pageName, enrollmentTitlesData }) => {
  const [accordionItem, setAccordionItem] = React.useState("");

  const [modalContact, setModalContact] = React.useState(false);
  const [contactForm, setContactForm] = React.useState(false);
  const handleForm = () => {
    setContactForm(!contactForm);
  };

  const {
    isLoading: isLoadingScope,
    isFetching: isFetchingScope,
    data: enrollmentScopeData,
  } = useQueryData(
    `${apiVersion}/enrollment-scope`, // endpoint
    "get", // method
    "enrollment-scope", // key
    {},
    null,
    true
  );

  const currentScope = enrollmentScopeData?.data?.find(
    (item) => item.enrollment_scope_aid === accordionItem
  );

  const EnrollmentScopeImage = getConvertStringToJSONparseData(
    currentScope?.enrollment_scope_img
  );

  React.useEffect(() => {
    if (enrollmentScopeData?.data?.length > 0) {
      setAccordionItem(enrollmentScopeData.data[0].enrollment_scope_aid);
    }
  }, [enrollmentScopeData]);

  const handleAccordion = (item) => {
    setAccordionItem(item);
  };

  return (
    <>
      <section className="ServiceCrmScope py-20">
        <div className="customContainer">
          <div>
            <p>
              {enrollmentTitlesData?.data?.length > 0 &&
              enrollmentTitlesData.data[0]?.enrollment_titles_overview_subtitle
                ? enrollmentTitlesData?.data[0]
                    .enrollment_titles_overview_subtitle
                : ""}
            </p>
            <h2 className="text-[clamp(20px,7vw,35px)] font-semibold text-primary leading-[1.1] mb-8">
              {enrollmentTitlesData?.data?.length > 0 &&
              enrollmentTitlesData.data[0]?.enrollment_titles_overview_title
                ? enrollmentTitlesData?.data[0].enrollment_titles_overview_title
                : ""}
            </h2>
          </div>
          <div className="warpper md:grid md:grid-cols-2 gap-5">
            <ul>
              {isLoadingScope || isFetchingScope ? (
                <TableLoading cols={1} count={15} />
              ) : (
                enrollmentScopeData?.data.map((scopeList, key) => {
                  return (
                    <li
                      key={key}
                      className="overflow-hidden border-b border-[#e9e9e9]"
                    >
                      <div
                        className={`${
                          accordionItem === scopeList.enrollment_scope_aid
                            ? "bg-customGray"
                            : ""
                        } grid grid-cols-[_3.5fr,_.5fr] justify-between items-center px-2 group hover:bg-[#f1f1f1] cursor-pointer py-2`}
                        onClick={() =>
                          handleAccordion(scopeList.enrollment_scope_aid)
                        }
                      >
                        <div className="grid grid-cols-[_2rem,_1fr] items-center gap-4">
                          <div>
                            <MdOutlineDashboard className="text-3xl text-primary" />
                          </div>
                          <p
                            className={`${
                              accordionItem === scopeList.enrollment_scope_aid
                                ? "bg-gradient-to-r from-primary to-secondary bg-clip-text text-[transparent]"
                                : "text-dark"
                            } text-[clamp(18px,4vw,20px)] font-semibold cursor-pointer `}
                          >
                            {scopeList.enrollment_scope_title}
                          </p>
                        </div>
                        <IoChevronDown
                          className={`${
                            accordionItem === scopeList.enrollment_scope_aid
                              ? "rotate-180"
                              : ""
                          }`}
                        />
                      </div>
                      <div
                        className={`${
                          accordionItem === scopeList.enrollment_scope_aid
                            ? "px-4 pt-4 pb-4"
                            : "h-0 py-0"
                        } accordionContent `}
                      >
                        <p>{scopeList.enrollment_scope_desc}</p>
                        {/* <a href="#" className="btn bg-primary text-light">
                           Schedule a Demo
                         </a> */}
                        <p className="md:hidden py-6">
                          <button
                            onClick={handleForm}
                            className="btn bg-primary text-light font-semibold uppercase"
                          >
                            {scopeList.enrollment_scope_button_text || "Button"}
                          </button>
                        </p>
                      </div>
                    </li>
                  );
                })
              )}
            </ul>
            {enrollmentScopeData?.data.map((scopedata, key) => {
              return (
                <div
                  key={key}
                  className={`${
                    accordionItem === scopedata.enrollment_scope_aid
                      ? "block"
                      : "hidden"
                  } relative`}
                >
                  {EnrollmentScopeImage.map((img, index) => (
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
                      {scopedata.enrollment_scope_button_text || "Button"}
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
          services={"default"}
          notification_purpose={"default-receiver"}
          emailSubject={`LEARN MORE / School Enrollment System (${accordionItem}) - `}
        />
      )}
    </>
  );
};

export default ServiceEnrollmentScope;
