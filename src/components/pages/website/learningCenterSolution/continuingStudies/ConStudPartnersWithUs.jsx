import React from "react";
import { FaFileDownload } from "react-icons/fa";
import { FaRegCircleCheck } from "react-icons/fa6";
import {
  apiVersion,
  devBaseImgUrl,
  getConvertStringToJSONparseData,
  googleHDViewLink,
} from "../../../../helpers/functions-general";
import ModalContact from "../../../../partials/ModalContact";
import useQueryData from "../../../../custom-hooks/useQueryData";
import LoadImages from "../../../../partials/LoadImages";

const ConStudPartnersWithUs = ({ pageName }) => {
  const [contactForm, setContactForm] = React.useState(false);

  const { data: continuingOverviewData } = useQueryData(
    `${apiVersion}/continuing-overview`, // endpoint
    "get", // method
    "continuing-overview", // key
    {},
    null,
    true
  );

  const continuingOverviewImage = getConvertStringToJSONparseData(
    continuingOverviewData?.data?.[0]?.continuing_overview_img
  );

  const handleForm = () => {
    setContactForm(!contactForm);
  };

  return (
    <>
      <section className="ConStudPartnersWithUs py-20 bg-customGray">
        <div className="customContainer">
          <p>
            {continuingOverviewData?.data?.[0]?.continuing_overview_subtitle ||
              ""}
          </p>
          <h2 className="text-[clamp(20px,7vw,35px)] leading-[1.1] mb-12 text-light">
            <span className="font-semibold text-primary">
              {continuingOverviewData?.data?.[0]?.continuing_overview_title ||
                ""}
            </span>
          </h2>
          <div className="wrapper lg:grid lg:grid-cols-2 gap-12">
            <div>
              {continuingOverviewImage.map((img, index) => (
                <LoadImages
                  url={`${googleHDViewLink}${img?.id}`}
                  className="mb-12 w-fit mx-auto"
                  alt="Effective Skills Acquisitions."
                  key={index}
                />
              ))}
              <ul className="flex flex-col md:flex md:flex-row items-center gap-12">
                <li>
                  <button
                    onClick={handleForm}
                    className="btn bg-primary text-light font-semibold uppercase"
                  >
                    {continuingOverviewData?.data?.[0]
                      ?.continuing_overview_button_text || ""}
                  </button>
                </li>
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
                        {continuingOverviewData?.data?.[0]
                          ?.continuing_overview_list_title_a || ""}
                      </h3>
                      <p className="text-justify">
                        {continuingOverviewData?.data?.[0]
                          ?.continuing_overview_list_description_a || ""}
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
                        {continuingOverviewData?.data?.[0]
                          ?.continuing_overview_list_title_b || ""}
                      </h3>
                      <p className="text-justify">
                        {continuingOverviewData?.data?.[0]
                          ?.continuing_overview_list_description_b || ""}
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
                        {continuingOverviewData?.data?.[0]
                          ?.continuing_overview_list_title_c || ""}
                      </h3>
                      <p className="text-justify">
                        {continuingOverviewData?.data?.[0]
                          ?.continuing_overview_list_description_c || ""}
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
          setModalContact={setContactForm}
          thePageName={pageName}
          contactForm={contactForm}
          setContactForm={setContactForm}
          modalContact={contactForm}
          contactSubject={""}
          services={"lcss services"}
          notification_purpose={"partner-with-us-lcs"}
          emailSubject={"PARTNER WITH US / Continuing Studies - "}
        />
      )}
    </>
  );
};

export default ConStudPartnersWithUs;
