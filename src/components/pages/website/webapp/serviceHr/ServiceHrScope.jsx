import React from "react";
import { IoChevronDown } from "react-icons/io5";
import { MdOutlineDashboard } from "react-icons/md";
import useQueryData from "../../../../custom-hooks/useQueryData";
import {
  apiVersion,
  getConvertStringToJSONparseData,
  googleHDViewLink,
} from "../../../../helpers/functions-general";
import LoadImages from "../../../../partials/LoadImages";
import TableLoading from "../../../../partials/spinners/TableLoading";
import ModalContact from "../../../../partials/ModalContact";

const ServiceHrScope = ({ hrisData, hrisTitlesData, pageName }) => {
  const [accordionItem, setAccordionItem] = React.useState("");
  const [modalContact, setModalContact] = React.useState(false);
  const [contactForm, setContactForm] = React.useState(false);

  const {
    isLoading: isLoadingScope,
    isFetching: isFetchingScope,
    data: hrisScopeData,
  } = useQueryData(
    `${apiVersion}/hris-scope`, // endpoint
    "get", // method
    "hris-scope", // key
    {},
    null,
    true,
  );

  const currentScope = hrisScopeData?.data?.find(
    (item) => item.hris_scope_aid === accordionItem,
  );

  const hrisScopeImage = getConvertStringToJSONparseData(
    currentScope?.hris_scope_img,
  );

  React.useEffect(() => {
    if (hrisScopeData?.data?.length > 0) {
      setAccordionItem(hrisScopeData.data[0].hris_scope_aid);
    }
  }, [hrisScopeData]);

  const handleAccordion = (item) => {
    setAccordionItem(item);
  };

  const handleForm = () => {
    setContactForm(!contactForm);
  };

  return (
    <>
      <section className="ServiceHrScope py-20">
        <div className="customContainer">
          <div>
            <p>
              {hrisTitlesData?.data?.length > 0 &&
              hrisTitlesData.data[0]?.hris_titles_overview_subtitle
                ? hrisTitlesData?.data[0].hris_titles_overview_subtitle
                : ""}
            </p>
            <h2 className="text-[clamp(20px,7vw,35px)] font-semibold text-primary leading-[1.1] mb-8">
              {hrisTitlesData?.data?.length > 0 &&
              hrisTitlesData.data[0]?.hris_titles_overview_title
                ? hrisTitlesData?.data[0].hris_titles_overview_title
                : ""}
            </h2>
          </div>
          <div className="warpper md:grid md:grid-cols-2 gap-5">
            <ul>
              {isLoadingScope || isFetchingScope ? (
                <TableLoading cols={1} count={15} />
              ) : (
                hrisScopeData?.data.map((scopeList, key) => {
                  return (
                    <li
                      key={key}
                      className="overflow-hidden border-b border-[#e9e9e9]"
                    >
                      <div
                        className={`${
                          accordionItem === scopeList.hris_scope_aid
                            ? "bg-customGray"
                            : ""
                        } grid grid-cols-[_3.5fr,_.5fr] justify-between items-center px-2 group hover:bg-[#f1f1f1] cursor-pointer py-2`}
                        onClick={() =>
                          handleAccordion(scopeList.hris_scope_aid)
                        }
                      >
                        <div className="grid grid-cols-[_2rem,_1fr] items-center gap-4">
                          <div>
                            <MdOutlineDashboard className="text-3xl text-primary" />
                          </div>
                          <p
                            className={`${
                              accordionItem === scopeList.hris_scope_aid
                                ? "bg-gradient-to-r from-primary to-secondary bg-clip-text text-[transparent]"
                                : "text-dark"
                            } text-[clamp(18px,4vw,20px)] font-semibold cursor-pointer `}
                          >
                            {scopeList.hris_scope_title}
                          </p>
                        </div>
                        <IoChevronDown
                          className={`${
                            accordionItem === scopeList.hris_scope_aid
                              ? "rotate-180"
                              : ""
                          }`}
                        />
                      </div>
                      <div
                        className={`${
                          accordionItem === scopeList.hris_scope_aid
                            ? "px-4 pt-4 pb-4"
                            : "h-0 py-0"
                        } accordionContent `}
                      >
                        <p>{scopeList.hris_scope_desc}</p>

                        <p className="md:hidden py-6">
                          {hrisData?.data.map((item, key) => (
                            <button
                              onClick={handleForm}
                              className="btn bg-primary text-light font-semibold uppercase"
                              key={key}
                            >
                              {item.hris_banner_button_text}
                            </button>
                          ))}
                        </p>
                      </div>
                    </li>
                  );
                })
              )}
            </ul>

            {hrisScopeData?.data.map((scopedata, key) => {
              return (
                <div
                  key={key}
                  className={`${
                    accordionItem === scopedata.hris_scope_aid
                      ? "block"
                      : "hidden"
                  } relative`}
                >
                  {hrisScopeImage.map((img, index) => (
                    <LoadImages
                      className="hidden h-[364px] md:w-full md:object-contain md:block z-10"
                      url={`${googleHDViewLink}${img?.id}`}
                      alt="What Makes This Web App"
                      key={index}
                    />
                  ))}

                  <p className="hidden md:block mb-4 text-center pt-8 pb-8">
                    {hrisData?.data.map((item, key) => (
                      <button
                        onClick={handleForm}
                        className="btn bg-primary text-light font-semibold uppercase"
                        key={key}
                      >
                        {item.hris_banner_button_text}
                      </button>
                    ))}
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
          services={"web services"}
          page={"HR Information System"}
          notification_purpose={"learn-more-web-design-and-development"}
          emailSubject={`${hrisData?.data[0]?.hris_banner_button_text} / HR Information System - `}
        />
      )}
    </>
  );
};

export default ServiceHrScope;
