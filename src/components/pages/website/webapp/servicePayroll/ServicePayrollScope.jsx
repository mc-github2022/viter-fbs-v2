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
import useQueryData from "../../../../custom-hooks/useQueryData";
import FetchingSpinner from "../../../../partials/spinners/FetchingSpinner";
import NoData from "../../../../partials/spinners/NoData";
import TableLoading from "../../../../partials/spinners/TableLoading";
import LoadImages from "../../../../partials/LoadImages";

const ServicePayrollScope = ({ payrollTitlesData, payrollData }) => {
  const [accordionItem, setAccordionItem] = React.useState("");

  const {
    isLoading: isLoadingScope,
    isFetching: isFetchingScope,
    data: payrollScopeData,
  } = useQueryData(
    `${apiVersion}/payroll-scope`, // endpoint
    "get", // method
    "payroll-scope" // key
  );

  const currentScope = payrollScopeData?.data?.find(
    (item) => item.payroll_scope_aid === accordionItem
  );

  const PayrollScopeImage = getConvertStringToJSONparseData(
    currentScope?.payroll_scope_img
  );

  React.useEffect(() => {
    if (payrollScopeData?.data?.length > 0) {
      setAccordionItem(payrollScopeData.data[0].payroll_scope_aid);
    }
  }, [payrollScopeData]);

  const handleAccordion = (item) => {
    setAccordionItem(item);
  };

  return (
    <>
      <section className="ServicePayrollScope py-20">
        <div className="customContainer">
          <div>
            <p>
              {payrollTitlesData?.data?.length > 0 &&
              payrollTitlesData.data[0]?.payroll_titles_overview_subtitle
                ? payrollTitlesData?.data[0].payroll_titles_overview_subtitle
                : ""}
            </p>
            <h2 className="text-[clamp(20px,7vw,35px)] font-semibold text-primary leading-[1.1] mb-8">
              {payrollTitlesData?.data?.length > 0 &&
              payrollTitlesData.data[0]?.payroll_titles_overview_title
                ? payrollTitlesData?.data[0].payroll_titles_overview_title
                : ""}
            </h2>
          </div>
          {isFetchingScope && !isLoadingScope && <FetchingSpinner />}
          {(isLoadingScope || payrollScopeData?.data?.length === 0) && (
            <div className="text-center">
              <div className="p-36">
                <NoData />
              </div>
            </div>
          )}
          <div className="warpper md:grid md:grid-cols-2 gap-5">
            <ul>
              {isLoadingScope || isFetchingScope ? (
                <TableLoading cols={1} count={15} />
              ) : (
                payrollScopeData?.data.map((scopeList, key) => {
                  return (
                    <li
                      key={key}
                      className="overflow-hidden border-b border-[#e9e9e9]"
                    >
                      <div
                        className={`${
                          accordionItem === scopeList.payroll_scope_aid
                            ? "bg-customGray"
                            : ""
                        } grid grid-cols-[_3.5fr,_.5fr] justify-between items-center px-2 group hover:bg-[#f1f1f1] cursor-pointer py-2`}
                        onClick={() =>
                          handleAccordion(scopeList.payroll_scope_aid)
                        }
                      >
                        <div className="grid grid-cols-[_2rem,_1fr] items-center gap-4">
                          <div>
                            <MdOutlineDashboard className="text-3xl text-primary" />
                          </div>
                          <p
                            className={`${
                              accordionItem === scopeList.payroll_scope_aid
                                ? "bg-gradient-to-r from-primary to-secondary bg-clip-text text-[transparent]"
                                : "text-dark"
                            } text-[clamp(18px,4vw,20px)] font-semibold cursor-pointer `}
                          >
                            {scopeList.payroll_scope_title}
                          </p>
                        </div>
                        <IoChevronDown
                          className={`${
                            accordionItem === scopeList.payroll_scope_aid
                              ? "rotate-180"
                              : ""
                          }`}
                        />
                      </div>
                      <div
                        className={`${
                          accordionItem === scopeList.payroll_scope_aid
                            ? "px-4 pt-4 pb-4"
                            : "h-0 py-0"
                        } accordionContent `}
                      >
                        <p>{scopeList.payroll_scope_desc}</p>

                        {/* <a href="#" className="btn bg-primary text-light">
                           Schedule a Demo
                         </a> */}
                        <p className="md:hidden py-6">
                          {payrollData?.data.map((item, key) => (
                            <a
                              href={`${item.payroll_banner_button_link}`}
                              target="_blank"
                              className="btn bg-primary text-light font-semibold uppercase"
                              key={key}
                            >
                              {item.payroll_banner_button_text}
                            </a>
                          ))}
                        </p>
                      </div>
                    </li>
                  );
                })
              )}
            </ul>
            {payrollScopeData?.data.map((scopedata, key) => {
              return (
                <div
                  key={key}
                  className={`${
                    accordionItem === scopedata.payroll_scope_aid
                      ? "block"
                      : "hidden"
                  } relative`}
                >
                  {PayrollScopeImage.map((img, index) => (
                    <LoadImages
                      className="hidden h-[364px] md:w-full md:object-contain md:block z-10"
                      url={`${googleHDViewLink}${img?.id}`}
                      alt="What Makes This Web App"
                      key={index}
                    />
                  ))}

                  <p className="hidden md:block mb-4 text-center pt-8 pb-8">
                    {payrollData?.data.map((item, key) => (
                      <a
                        href={`${item.payroll_banner_button_link}`}
                        target="_blank"
                        className="btn bg-primary text-light font-semibold uppercase"
                        key={key}
                      >
                        {item.payroll_banner_button_text}
                      </a>
                    ))}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicePayrollScope;
