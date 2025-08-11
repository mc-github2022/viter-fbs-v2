import React from "react";
import { FaFileDownload } from "react-icons/fa";
import { FaRegCircleCheck } from "react-icons/fa6";
import { webAppOverview } from "./data";
import {
  apiVersion,
  devBaseImgUrl,
  getConvertStringToJSONparseData,
  googleHDViewLink,
  googleViewLink,
} from "../../../../helpers/functions-general";
import ModalContact from "../../../../partials/ModalContact";
import useQueryData from "../../../../custom-hooks/useQueryData";
import LoadImages from "../../../../partials/LoadImages";

const WebDesignOverview = ({ pageName }) => {
  const [modalContact, setModalContact] = React.useState(false);
  const [contactForm, setContactForm] = React.useState(false);

  const { data: websiteOverviewData } = useQueryData(
    `${apiVersion}/website-overview`, // endpoint
    "get", // method
    "website-overview", // key
    {},
    null,
    true
  );

  const handleForm = () => {
    setContactForm(!contactForm);
  };

  const websiteOverviewImage = getConvertStringToJSONparseData(
    websiteOverviewData?.data?.[0]?.website_overview_img
  );

  const WebsiteOverviewFile = getConvertStringToJSONparseData(
    websiteOverviewData?.data?.[0]?.website_overview_file
  );

  return (
    <>
      <section className="WebDesignOverview py-20 bg-customGray">
        <div className="customContainer">
          <p>
            {websiteOverviewData?.data?.[0]?.website_overview_subtitle || ""}
          </p>
          <h2 className="text-[clamp(20px,7vw,35px)] leading-[1.1] mb-12 text-light">
            <span className="font-semibold text-primary">
              {websiteOverviewData?.data?.[0]?.website_overview_title || ""}
            </span>
          </h2>
          <div className="wrapper lg:grid lg:grid-cols-2 gap-12">
            <div>
              {websiteOverviewImage.map((img, index) => (
                <LoadImages
                  url={`${googleHDViewLink}${img?.id}`}
                  className="mb-12 w-full mx-auto"
                  alt="Web Development Team"
                  key={index}
                />
              ))}

              <ul className="flex flex-col md:flex md:flex-row items-center gap-12">
                <li>
                  <button
                    onClick={handleForm}
                    className="btn bg-primary text-light font-semibold uppercase"
                  >
                    {websiteOverviewData?.data?.[0]
                      ?.website_overview_button_text || ""}
                  </button>
                </li>
                <li>
                  {WebsiteOverviewFile.map((file, index) => (
                    <a
                      href={`${googleViewLink}${file?.id}`}
                      className="flex items-center gap-2 font-bold text-primary"
                      target="_blank"
                      key={index}
                    >
                      Download Portfolio <FaFileDownload />
                    </a>
                  ))}
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
                        {websiteOverviewData?.data?.[0]
                          ?.website_overview_list_title_a || ""}
                      </h3>
                      <p className="text-justify">
                        {websiteOverviewData?.data?.[0]
                          ?.website_overview_list_description_a || ""}
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
                        {websiteOverviewData?.data?.[0]
                          ?.website_overview_list_title_b || ""}
                      </h3>
                      <p className="text-justify">
                        {websiteOverviewData?.data?.[0]
                          ?.website_overview_list_description_b || ""}
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
                        {websiteOverviewData?.data?.[0]
                          ?.website_overview_list_title_c || ""}
                      </h3>
                      <p className="text-justify">
                        {websiteOverviewData?.data?.[0]
                          ?.website_overview_list_description_c || ""}
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
          notification_purpose={"default-receiver"}
          emailSubject={`${webAppOverview[0]?.btnText} / Web Design - `}
        />
      )}
    </>
  );
};

export default WebDesignOverview;
