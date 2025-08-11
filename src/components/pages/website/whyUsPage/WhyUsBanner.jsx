import React from "react";
import {
  apiVersion,
  devBaseImgUrl,
  getConvertStringToJSONparseData,
  googleHDViewLink,
} from "../../../helpers/functions-general";
import ModalContact from "../../../partials/ModalContact";
import useQueryData from "../../../custom-hooks/useQueryData";
import LoadImages from "../../../partials/LoadImages";

const WhyUsBanner = ({ pageName }) => {
  const [modalContact, setModalContact] = React.useState(false);
  const [contactForm, setContactForm] = React.useState(false);

  const { data: workData } = useQueryData(
    `${apiVersion}/work`, // endpoint
    "get", // method
    "work", // key
    {},
    null,
    true
  );

  const handleForm = () => {
    setContactForm(!contactForm);
  };

  const workBannerImage = getConvertStringToJSONparseData(
    workData?.data?.[0]?.work_banner_img
  );

  return (
    <>
      <section
        id="ServiceHrBanner"
        className="banner pt-[59px] md:pt-[95px] min-h-[100vh] md:min-h-[90vh] relative flex items-center"
      >
        {workBannerImage.map((img, index) => (
          <LoadImages
            url={`${googleHDViewLink}${img?.id}`}
            alt={`work banner ${index + 1}`}
            className="absolute inset-0 w-full h-full object-cover z-0"
            key={index}
          />
        ))}

        <div className="customContainer relative z-10 h-full">
          <div className="wrapper flex flex-col justify-center items-center h-full text-center lg:grid lg:grid-cols-2">
            <div className="text-center py-10 lg:text-left">
              <h2 className="text-[clamp(30px,3vw,45px)] leading-[1.1] mb-8 text-light font-light">
                <span className="">
                  {workData?.data[0]?.work_banner_title
                    .split("\n") // Split by new lines
                    .filter((content_a) => content_a.trim() !== "") // Remove empty lines
                    .map((content_a, index) => (
                      <p key={index}>{content_a}</p>
                    ))}
                </span>
                <span className="text-light font-semibold">
                  {workData?.data?.[0]?.work_banner_title_bold || ""}
                </span>
              </h2>

              <p className="text-light mb-10">
                {workData?.data?.[0]?.work_banner_description || ""}
              </p>
              {workData?.data.map((item, key) => (
                <button
                  onClick={handleForm}
                  className="btn bg-transparent text-light border-2 uppercase "
                  key={key}
                >
                  {item.work_banner_button_text}
                </button>
              ))}
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
          services={"default"}
          notification_purpose={"default-receiver"}
          emailSubject={`GET STARTED / Why Work With Us - `}
        />
      )}
    </>
  );
};

export default WhyUsBanner;
