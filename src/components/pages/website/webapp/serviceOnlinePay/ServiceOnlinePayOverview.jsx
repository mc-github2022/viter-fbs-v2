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

const ServiceOnlinePayOverview = ({ pageName }) => {
  const [modalContact, setModalContact] = React.useState(false);
  const [contactForm, setContactForm] = React.useState(false);
  const handleForm = () => {
    setContactForm(!contactForm);
  };

  const { data: paymentOverviewData } = useQueryData(
    `${apiVersion}/payment-overview`, // endpoint
    "get", // method
    "payment-overview", // key
    {},
    null,
    true
  );

  const PaymentOverviewImage = getConvertStringToJSONparseData(
    paymentOverviewData?.data?.[0]?.payment_overview_img
  );

  return (
    <>
      <section className="ServiceOnlinePayOverview py-20 bg-customGray">
        <div className="customContainer">
          <p>
            {paymentOverviewData?.data?.length > 0 &&
            paymentOverviewData.data[0]?.payment_overview_subtitle
              ? paymentOverviewData?.data[0].payment_overview_subtitle
              : ""}
          </p>
          <h2 className="text-[clamp(20px,7vw,35px)] leading-[1.1] mb-12 text-light">
            <span className="font-semibold text-primary">
              {paymentOverviewData?.data?.length > 0 &&
              paymentOverviewData.data[0]?.payment_overview_title
                ? paymentOverviewData?.data[0].payment_overview_title
                : ""}
            </span>
          </h2>
          <div className="wrapper lg:grid lg:grid-cols-2 gap-12">
            <div>
              {PaymentOverviewImage.map((img, index) => (
                <LoadImages
                  url={`${googleHDViewLink}${img?.id}`}
                  className="mb-12 w-fit mx-auto"
                  alt={`Our Web Application ${index + 1}`}
                  key={index}
                />
              ))}
              <ul className="flex flex-col md:flex md:flex-row items-center gap-12">
                <li>
                  <button
                    onClick={handleForm}
                    className="btn bg-primary text-light font-semibold uppercase"
                  >
                    {paymentOverviewData?.data?.length > 0 &&
                    paymentOverviewData.data[0]?.payment_overview_button_text
                      ? paymentOverviewData?.data[0]
                          .payment_overview_button_text
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
                        {paymentOverviewData?.data?.length > 0 &&
                        paymentOverviewData.data[0]
                          ?.payment_overview_list_title_a
                          ? paymentOverviewData?.data[0]
                              .payment_overview_list_title_a
                          : ""}
                      </h3>
                      <p className="text-justify">
                        {paymentOverviewData?.data?.length > 0 &&
                        paymentOverviewData.data[0]
                          ?.payment_overview_list_description_a
                          ? paymentOverviewData?.data[0]
                              .payment_overview_list_description_a
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
                        {paymentOverviewData?.data?.length > 0 &&
                        paymentOverviewData.data[0]
                          ?.payment_overview_list_title_b
                          ? paymentOverviewData?.data[0]
                              .payment_overview_list_title_b
                          : ""}
                      </h3>
                      <p className="text-justify">
                        {paymentOverviewData?.data?.length > 0 &&
                        paymentOverviewData.data[0]
                          ?.payment_overview_list_description_b
                          ? paymentOverviewData?.data[0]
                              .payment_overview_list_description_b
                          : ""}
                      </p>
                    </div>
                  </div>
                </li>
                {paymentOverviewData?.data[0]
                  ?.payment_overview_list_title_c && (
                  <li className="flex items-start gap-4 text-dark">
                    <div className="flex gap-4 items-start">
                      <div>
                        <FaRegCircleCheck className="circleCheck text-primary text-[clamp(25px,5vw,30px)] bg-gradient-to-r from-primary to-secondary bg-clip-text text-[transparent]" />
                      </div>
                      <div>
                        <h3 className="text-primary bg-gradient-to-r from-primary to-secondary bg-clip-text text-[transparent] text-[clamp(16px,5vw,24px)] mb-3">
                          {paymentOverviewData?.data?.length > 0 &&
                          paymentOverviewData.data[0]
                            ?.payment_overview_list_title_c
                            ? paymentOverviewData?.data[0]
                                .payment_overview_list_title_c
                            : ""}
                        </h3>
                        <p className="text-justify">
                          {paymentOverviewData?.data?.length > 0 &&
                          paymentOverviewData.data[0]
                            ?.payment_overview_list_description_c
                            ? paymentOverviewData?.data[0]
                                .payment_overview_list_description_c
                            : ""}
                        </p>
                      </div>
                    </div>
                  </li>
                )}
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
          page={"Online Payment Integration"}
          notification_purpose={"learn-more-web-design-and-development"}
          emailSubject={`${webAppOverview[0]?.btnText} / Online Payment Integration - `}
        />
      )}
    </>
  );
};

export default ServiceOnlinePayOverview;
