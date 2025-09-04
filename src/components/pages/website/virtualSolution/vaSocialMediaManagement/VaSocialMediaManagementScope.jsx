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
import ModalContact from "../../../../partials/ModalContact";
import TableLoading from "../../../../partials/spinners/TableLoading";

const VaSocialMediaManagementScope = ({ pageName, socialTitlesData }) => {
  const [modalContact, setModalContact] = React.useState(false);
  const [contactForm, setContactForm] = React.useState(false);

  const {
    isLoading: isLoadingScope,
    isFetching: isFetchingScope,
    data: socialScopeData,
  } = useQueryData(
    `${apiVersion}/social-scope`, // endpoint
    "get", // method
    "social-scope", // key
    {},
    null,
    true
  );

  const handleForm = () => {
    setContactForm(!contactForm);
  };
  const [accordionItem, setAccordionItem] = React.useState("");

  const currentScope = socialScopeData?.data?.find(
    (item) => item.social_scope_aid === accordionItem
  );

  const socialScopeImage = getConvertStringToJSONparseData(
    currentScope?.social_scope_img
  );

  React.useEffect(() => {
    if (socialScopeData?.data?.length > 0) {
      setAccordionItem(socialScopeData.data[0].social_scope_aid);
    }
  }, [socialScopeData]);

  const handleAccordion = (item) => {
    setAccordionItem(item);
  };

  return (
    <>
      <section className=" py-20" id="VaSocialMediaManagementScope">
        <div className="customContainer">
          <div>
            <p>
              {socialTitlesData?.data?.length > 0 &&
              socialTitlesData.data[0]?.social_titles_overview_subtitle
                ? socialTitlesData?.data[0].social_titles_overview_subtitle
                : ""}
            </p>
            <h2 className="text-[clamp(20px,7vw,35px)] font-semibold text-primary leading-[1.1] mb-8">
              {socialTitlesData?.data?.length > 0 &&
              socialTitlesData.data[0]?.social_titles_overview_title
                ? socialTitlesData?.data[0].social_titles_overview_title
                : ""}
            </h2>
          </div>
          <div className="warpper md:grid md:grid-cols-2 gap-5">
            <ul>
              {isLoadingScope || isFetchingScope ? (
                <TableLoading cols={1} count={15} />
              ) : (
                socialScopeData?.data.map((scopeList, key) => {
                  return (
                    <li
                      key={key}
                      className="overflow-hidden border-b border-[#e9e9e9]"
                    >
                      <div
                        className={`${
                          accordionItem === scopeList.social_scope_aid
                            ? "bg-customGray"
                            : ""
                        } grid grid-cols-[_3.5fr,_.5fr] justify-between items-center px-2 group hover:bg-[#f1f1f1] cursor-pointer py-2`}
                        onClick={() =>
                          handleAccordion(scopeList.social_scope_aid)
                        }
                      >
                        <div className="grid grid-cols-[_2rem,_1fr] items-center gap-4">
                          <div>
                            <MdOutlineDashboard className="text-3xl text-primary" />
                          </div>
                          <p
                            className={`${
                              accordionItem === scopeList.social_scope_aid
                                ? "bg-gradient-to-r from-primary to-secondary bg-clip-text text-[transparent]"
                                : "text-dark"
                            } text-[clamp(18px,4vw,20px)] font-semibold cursor-pointer `}
                          >
                            {scopeList.social_scope_title}
                          </p>
                        </div>
                        <IoChevronDown
                          className={`${
                            accordionItem === scopeList.social_scope_aid
                              ? "rotate-180"
                              : ""
                          }`}
                        />
                      </div>
                      <div
                        className={`${
                          accordionItem === scopeList.social_scope_aid
                            ? "px-4 pt-4 pb-4"
                            : "h-0 py-0"
                        } accordionContent `}
                      >
                        <p>{scopeList.social_scope_desc}</p>
                        {/* <a href="#" className="btn bg-primary text-light">
                           Schedule a Demo
                         </a> */}
                        <p className="md:hidden py-6">
                          <button
                            onClick={handleForm}
                            className="btn bg-primary text-light font-semibold uppercase"
                          >
                            {scopeList.social_scope_button_text || "Button"}
                          </button>
                        </p>
                      </div>
                    </li>
                  );
                })
              )}
            </ul>
            {socialScopeData?.data.map((scopedata, key) => {
              return (
                <div
                  key={key}
                  className={`${
                    accordionItem === scopedata.social_scope_aid
                      ? "block"
                      : "hidden"
                  } relative`}
                >
                  {socialScopeImage.map((img, index) => (
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
                      {scopedata.social_scope_button_text || "Button"}
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
          page={"Home"}
          notification_purpose={"default-receiver"}
          emailSubject={`LEARN MORE / Social Media Management (${accordionItem}) - `}
        />
      )}
    </>
  );
};

export default VaSocialMediaManagementScope;
