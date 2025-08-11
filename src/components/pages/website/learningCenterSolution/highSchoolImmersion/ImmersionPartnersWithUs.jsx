import React from "react";
import { FaFileDownload } from "react-icons/fa";
import { FaRegCircleCheck } from "react-icons/fa6";
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

const ImmersionPartnersWithUs = ({ pageName }) => {
  const [contactForm, setContactForm] = React.useState(false);

  const { data: immersionOverviewData } = useQueryData(
    `${apiVersion}/immersion-overview`, // endpoint
    "get", // method
    "immersion-overview", // key
    {},
    null,
    true
  );

  const handleForm = () => {
    setContactForm(!contactForm);
  };

  const immersionOverviewImage = getConvertStringToJSONparseData(
    immersionOverviewData?.data?.[0]?.immersion_overview_img
  );

  const contactUsDefaultimmersionFile = getConvertStringToJSONparseData(
    immersionOverviewData?.data?.[0]?.immersion_overview_file
  );

  return (
    <>
      <section className="ImmersionPartnersWithUs py-20 bg-customGray">
        <div className="customContainer">
          <p>
            {immersionOverviewData?.data?.[0]?.immersion_overview_subtitle ||
              ""}
          </p>
          <h2 className="text-[clamp(20px,7vw,35px)] leading-[1.1] mb-12 text-light">
            <span className="font-semibold text-primary">
              {immersionOverviewData?.data?.[0]?.immersion_overview_title || ""}
            </span>
          </h2>
          <div className="wrapper lg:grid lg:grid-cols-2 gap-12">
            <div>
              {immersionOverviewImage.map((img, index) => (
                <LoadImages
                  url={`${googleHDViewLink}${img?.id}`}
                  className="mb-12 w-fit mx-auto"
                  alt="Actual Work-Related Experience."
                  key={index}
                />
              ))}

              <ul className="flex flex-col md:flex md:flex-row items-center gap-12">
                <li>
                  <button
                    onClick={handleForm}
                    className="btn bg-primary text-light font-semibold uppercase"
                  >
                    {immersionOverviewData?.data?.[0]
                      ?.immersion_overview_button_text || "Button"}
                  </button>
                </li>
                <li>
                  {contactUsDefaultimmersionFile.map((file, index) => (
                    <a
                      href={`${googleViewLink}${file?.id}`}
                      className="flex items-center gap-2 font-bold text-primary"
                      target="_blank"
                      key={index}
                    >
                      Download Proposal <FaFileDownload />
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
                        {immersionOverviewData?.data?.[0]
                          ?.immersion_overview_list_title_a || ""}
                      </h3>
                      <p className="text-justify">
                        {immersionOverviewData?.data?.[0]
                          ?.immersion_overview_list_description_a || ""}
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
                        {immersionOverviewData?.data?.[0]
                          ?.immersion_overview_list_title_b || ""}
                      </h3>
                      <p className="text-justify">
                        {immersionOverviewData?.data?.[0]
                          ?.immersion_overview_list_description_b || ""}
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
                        {immersionOverviewData?.data?.[0]
                          ?.immersion_overview_list_title_c || ""}
                      </h3>
                      <p className="text-justify">
                        {immersionOverviewData?.data?.[0]
                          ?.immersion_overview_list_description_c || ""}
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
          emailSubject={"PARTNER WITH US / High School Work Immersion - "}
        />
      )}
    </>
  );
};

export default ImmersionPartnersWithUs;
