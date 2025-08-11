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

const GraphicDesignOverview = ({ pageName }) => {
  const [modalContact, setModalContact] = React.useState(false);
  const [contactForm, setContactForm] = React.useState(false);

  const { data: graphicOverviewData } = useQueryData(
    `${apiVersion}/graphic-overview`, // endpoint
    "get", // method
    "graphic-overview", // key
    {},
    null,
    true
  );

  const GraphicOverviewImage = getConvertStringToJSONparseData(
    graphicOverviewData?.data?.[0]?.graphic_overview_img
  );

  const handleForm = () => {
    setContactForm(!contactForm);
  };

  return (
    <>
      <section className="GraphicDesignOverview py-20 bg-customGray">
        <div className="customContainer">
          {graphicOverviewData?.data?.[0]?.graphic_overview_subtitle_a || ""}
          <h2 className="text-[clamp(20px,7vw,35px)] leading-[1.1]  text-light">
            <span className="font-semibold text-primary">
              {graphicOverviewData?.data?.[0]?.graphic_overview_title || ""}
            </span>
          </h2>
          <p className="mb-12">
            {graphicOverviewData?.data?.[0]?.graphic_overview_subtitle_b || ""}
          </p>
          <div className="wrapper lg:grid lg:grid-cols-2 gap-12">
            <div>
              {GraphicOverviewImage.map((img, index) => (
                <LoadImages
                  url={`${googleHDViewLink}${img?.id}`}
                  className="mb-12 w-fit mx-auto"
                  alt="Web Development Team"
                  key={index}
                />
              ))}
              <ul className="flex flex-col mb-10 md:flex md:flex-row items-center gap-12">
                <li>
                  <button
                    onClick={handleForm}
                    className="btn bg-primary text-light font-semibold uppercase"
                  >
                    {graphicOverviewData?.data?.[0]
                      ?.graphic_overview_button_text || ""}
                  </button>
                </li>
                <li>
                  {/* <a
                    href="#"
                    className="flex items-center gap-2 font-bold text-primary"
                  >
                    {webAppOverview[0].btnDownloadText} <FaFileDownload />
                  </a> */}
                </li>
              </ul>
            </div>
            <div className="lg:mt-0">
              <ul>
                <li className="flex items-start gap-4 text-dark mb-6">
                  <div className="flex gap-4 items-start">
                    <div>
                      <FaRegCircleCheck className="circleCheck text-primary text-[clamp(25px,5vw,30px)] bg-gradient-to-r from-primary to-secondary bg-clip-text text-[transparent]" />
                    </div>
                    <div>
                      <h3 className="text-primary bg-gradient-to-r from-primary to-secondary bg-clip-text text-[transparent] text-[clamp(16px,5vw,24px)] mb-3">
                        {graphicOverviewData?.data?.[0]
                          ?.graphic_overview_list_title_a || ""}
                      </h3>
                      <p className="text-justify">
                        {graphicOverviewData?.data?.[0]
                          ?.graphic_overview_list_description_a || ""}
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
                        {graphicOverviewData?.data?.[0]
                          ?.graphic_overview_list_title_b || ""}
                      </h3>
                      <p>
                        {graphicOverviewData?.data?.[0]
                          ?.graphic_overview_list_description_b || ""}
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
                        {graphicOverviewData?.data?.[0]
                          ?.graphic_overview_list_title_c || ""}
                      </h3>
                      <p>
                        {graphicOverviewData?.data?.[0]
                          ?.graphic_overview_list_description_c || ""}
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
          emailSubject={`${webAppOverview[0]?.btnText} / Graphic Design - `}
        />
      )}
    </>
  );
};

export default GraphicDesignOverview;
