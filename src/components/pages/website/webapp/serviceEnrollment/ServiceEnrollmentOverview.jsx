import React from "react";
import { FaFileDownload } from "react-icons/fa";
import { FaRegCircleCheck } from "react-icons/fa6";
import { webAppOverview } from "./data";
import {
  apiVersion,
  devBaseImgUrl,
  getConvertStringToJSONparseData,
  googleHDViewLink,
} from "../../../../helpers/functions-general";
import ModalContact from "../../../../partials/ModalContact";
import useQueryData from "../../../../custom-hooks/useQueryData";
import LoadImages from "../../../../partials/LoadImages";

const ServiceEnrollmentOverview = ({ pageName }) => {
  const [modalContact, setModalContact] = React.useState(false);
  const [contactForm, setContactForm] = React.useState(false);
  const handleForm = () => {
    setContactForm(!contactForm);
  };

  const { data: enrollmentOverviewData } = useQueryData(
    `${apiVersion}/enrollment-overview`, // endpoint
    "get", // method
    "enrollment-overview", // key
    {},
    null,
    true,
  );

  const enrollmentOverviewImage = getConvertStringToJSONparseData(
    enrollmentOverviewData?.data?.[0]?.enrollment_overview_img,
  );

  return (
    <>
      <section className="ServiceCrmOverview py-20 bg-customGray">
        <div className="customContainer">
          <p>
            {enrollmentOverviewData?.data?.length > 0 &&
            enrollmentOverviewData.data[0]?.enrollment_overview_subtitle
              ? enrollmentOverviewData?.data[0].enrollment_overview_subtitle
              : ""}
          </p>
          <h2 className="text-[clamp(20px,7vw,35px)] leading-[1.1] mb-12 text-light">
            <span className="font-semibold text-primary">
              {enrollmentOverviewData?.data?.length > 0 &&
              enrollmentOverviewData.data[0]?.enrollment_overview_title
                ? enrollmentOverviewData?.data[0].enrollment_overview_title
                : ""}
            </span>
          </h2>
          <div className="wrapper lg:grid lg:grid-cols-2 gap-12">
            <div className="relative">
              {enrollmentOverviewImage.map((img, index) => (
                <LoadImages
                  url={`${googleHDViewLink}${img?.id}`}
                  className="mb-12 w-fit mx-auto"
                  alt={`School Enrollment System ${index + 1}`}
                  key={index}
                />
              ))}

              <ul className="flex flex-col md:flex md:flex-row items-center gap-12">
                <li>
                  <button
                    onClick={handleForm}
                    className="btn bg-primary text-light font-semibold uppercase"
                  >
                    {enrollmentOverviewData?.data?.length > 0 &&
                    enrollmentOverviewData.data[0]
                      ?.enrollment_overview_button_text
                      ? enrollmentOverviewData?.data[0]
                          .enrollment_overview_button_text
                      : ""}
                  </button>
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
                      <FaRegCircleCheck className="circleCheck text-primary text-[clamp(25px,5vw,30px)] bg-gradient-to-r from-primary to-secondary bg-clip-text text-[transparent]" />
                    </div>
                    <div>
                      <h3 className="text-primary bg-gradient-to-r from-primary to-secondary bg-clip-text text-[transparent] text-[clamp(16px,5vw,24px)] mb-3">
                        {enrollmentOverviewData?.data?.length > 0 &&
                        enrollmentOverviewData.data[0]
                          ?.enrollment_overview_list_title_a
                          ? enrollmentOverviewData?.data[0]
                              .enrollment_overview_list_title_a
                          : ""}
                      </h3>
                      <p className="text-justify">
                        {enrollmentOverviewData?.data?.length > 0 &&
                        enrollmentOverviewData.data[0]
                          ?.enrollment_overview_list_description_a
                          ? enrollmentOverviewData?.data[0]
                              .enrollment_overview_list_description_a
                          : ""}
                      </p>
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-4 text-dark mb-6">
                  <div className="flex gap-4 items-start">
                    <div>
                      <FaRegCircleCheck className="circleCheck text-primary text-[clamp(25px,5vw,30px)] bg-gradient-to-r from-primary to-secondary bg-clip-text text-[transparent]" />
                    </div>
                    <div>
                      <h3 className="text-primary bg-gradient-to-r from-primary to-secondary bg-clip-text text-[transparent] text-[clamp(16px,5vw,24px)] mb-3">
                        {enrollmentOverviewData?.data?.length > 0 &&
                        enrollmentOverviewData.data[0]
                          ?.enrollment_overview_list_title_b
                          ? enrollmentOverviewData?.data[0]
                              .enrollment_overview_list_title_b
                          : ""}
                      </h3>
                      <p className="text-justify">
                        {enrollmentOverviewData?.data?.length > 0 &&
                        enrollmentOverviewData.data[0]
                          ?.enrollment_overview_list_description_b
                          ? enrollmentOverviewData?.data[0]
                              .enrollment_overview_list_description_b
                          : ""}
                      </p>
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-4 text-dark">
                  <div className="flex gap-4 items-start">
                    <div>
                      <FaRegCircleCheck className="circleCheck text-primary text-[clamp(25px,5vw,30px)] bg-gradient-to-r from-primary to-secondary bg-clip-text text-[transparent]" />
                    </div>
                    <div>
                      <h3 className="text-primary bg-gradient-to-r from-primary to-secondary bg-clip-text text-[transparent] text-[clamp(16px,5vw,24px)] mb-3">
                        {enrollmentOverviewData?.data?.length > 0 &&
                        enrollmentOverviewData.data[0]
                          ?.enrollment_overview_list_title_c
                          ? enrollmentOverviewData?.data[0]
                              .enrollment_overview_list_title_c
                          : ""}
                      </h3>
                      <p className="text-justify">
                        {enrollmentOverviewData?.data?.length > 0 &&
                        enrollmentOverviewData.data[0]
                          ?.enrollment_overview_list_description_c
                          ? enrollmentOverviewData?.data[0]
                              .enrollment_overview_list_description_c
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
          page={"School Enrollment System"}
          notification_purpose={"learn-more-web-design-and-development"}
          emailSubject={`${webAppOverview[0]?.btnText} / School Enrollment System - `}
        />
      )}
    </>
  );
};

export default ServiceEnrollmentOverview;
