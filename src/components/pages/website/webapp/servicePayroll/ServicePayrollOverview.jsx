import React from "react";
import { FaRegCircleCheck } from "react-icons/fa6";
import useQueryData from "../../../../custom-hooks/useQueryData";
import {
  apiVersion,
  getConvertStringToJSONparseData,
  googleHDViewLink,
} from "../../../../helpers/functions-general";
import LoadImages from "../../../../partials/LoadImages";
import ModalContact from "../../../../partials/ModalContact";

const ServicePayrollOverview = ({ payrollData, pageName }) => {
  const [modalContact, setModalContact] = React.useState(false);
  const [contactForm, setContactForm] = React.useState(false);

  const { data: payrollOverviewData } = useQueryData(
    `${apiVersion}/payroll-overview`, // endpoint
    "get", // method
    "payroll-overview", // key
  );

  const payrollOverviewImage = getConvertStringToJSONparseData(
    payrollOverviewData?.data?.[0]?.payroll_overview_img,
  );

  const handleForm = () => {
    setContactForm(!contactForm);
  };

  return (
    <>
      <section className="ServicePayrollOverview py-20 bg-customGray">
        <div className="customContainer">
          <p>
            {payrollOverviewData?.data?.length > 0 &&
            payrollOverviewData.data[0]?.payroll_overview_subtitle
              ? payrollOverviewData?.data[0].payroll_overview_subtitle
              : ""}
          </p>
          <h2 className="text-[clamp(20px,7vw,35px)] leading-[1.1] mb-12 text-light">
            <span className="font-semibold text-primary">
              {payrollOverviewData?.data?.length > 0 &&
              payrollOverviewData.data[0]?.payroll_overview_title
                ? payrollOverviewData?.data[0].payroll_overview_title
                : ""}
            </span>
          </h2>
          <div className="wrapper lg:grid lg:grid-cols-2 gap-12">
            <div className="relative">
              {payrollOverviewImage.map((img, index) => (
                <LoadImages
                  url={`${googleHDViewLink}${img?.id}`}
                  className="mb-12 w-full mx-auto"
                  alt="Online Payroll System"
                  key={index}
                />
              ))}
              <ul className="flex flex-col md:flex md:flex-row items-center gap-12">
                <li>
                  {payrollData?.data.map((item, key) => (
                    <button
                      onClick={handleForm}
                      className="btn bg-primary text-light font-semibold uppercase"
                      key={key}
                    >
                      {item.payroll_banner_button_text}
                    </button>
                  ))}
                </li>
                {/* <li>
                  <a
                    href="#"
                    className="flex items-center gap-2 font-bold text-primary"
                  >
                    {webAppOverview[0].btnDownloadText} <FaFileDownload />
                  </a>
                </li> */}
              </ul>
            </div>
            <div className="mt-14 lg:mt-0">
              <ul>
                <li className="flex items-start gap-4 text-dark mb-6">
                  <div className="flex gap-4 items-start">
                    <div>
                      <FaRegCircleCheck className="circleCheck text-primary text-[clamp(25px,5vw,30px)]  bg-gradient-to-r from-primary to-secondary bg-clip-text text-[transparent]" />
                    </div>
                    <div>
                      <h3 className="text-primary bg-gradient-to-r from-primary to-secondary bg-clip-text text-[transparent] text-[clamp(16px,5vw,24px)] mb-3">
                        {payrollOverviewData?.data?.length > 0 &&
                        payrollOverviewData.data[0]
                          ?.payroll_overview_list_title_a
                          ? payrollOverviewData?.data[0]
                              .payroll_overview_list_title_a
                          : ""}
                      </h3>
                      <p className="text-justify">
                        {payrollOverviewData?.data?.length > 0 &&
                        payrollOverviewData.data[0]
                          ?.payroll_overview_list_description_a
                          ? payrollOverviewData?.data[0]
                              .payroll_overview_list_description_a
                          : ""}
                      </p>
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-4 text-dark mb-6">
                  <div className="flex gap-4 items-start">
                    <div>
                      <FaRegCircleCheck className="circleCheck text-primary text-[clamp(25px,5vw,30px)]  bg-gradient-to-r from-primary to-secondary bg-clip-text text-[transparent]" />
                    </div>
                    <div>
                      <h3 className="text-primary bg-gradient-to-r from-primary to-secondary bg-clip-text text-[transparent] text-[clamp(16px,5vw,24px)] mb-3">
                        {payrollOverviewData?.data?.length > 0 &&
                        payrollOverviewData.data[0]
                          ?.payroll_overview_list_title_b
                          ? payrollOverviewData?.data[0]
                              .payroll_overview_list_title_b
                          : ""}
                      </h3>
                      <p className="text-justify">
                        {payrollOverviewData?.data?.length > 0 &&
                        payrollOverviewData.data[0]
                          ?.payroll_overview_list_description_b
                          ? payrollOverviewData?.data[0]
                              .payroll_overview_list_description_b
                          : ""}
                      </p>
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-4 text-dark">
                  <div className="flex gap-4 items-start">
                    <div>
                      <FaRegCircleCheck className="circleCheck text-primary text-[clamp(25px,5vw,30px)]  bg-gradient-to-r from-primary to-secondary bg-clip-text text-[transparent]" />
                    </div>
                    <div>
                      <h3 className="text-primary bg-gradient-to-r from-primary to-secondary bg-clip-text text-[transparent] text-[clamp(16px,5vw,24px)] mb-3">
                        {payrollOverviewData?.data?.length > 0 &&
                        payrollOverviewData.data[0]
                          ?.payroll_overview_list_title_c
                          ? payrollOverviewData?.data[0]
                              .payroll_overview_list_title_c
                          : ""}
                      </h3>
                      <p className="text-justify">
                        {payrollOverviewData?.data?.length > 0 &&
                        payrollOverviewData.data[0]
                          ?.payroll_overview_list_description_c
                          ? payrollOverviewData?.data[0]
                              .payroll_overview_list_description_c
                          : ""}
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
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
          emailSubject={`${payrollData?.data[0]?.payroll_banner_button_text} / HR Information System - `}
        />
      )}
    </>
  );
};

export default ServicePayrollOverview;
