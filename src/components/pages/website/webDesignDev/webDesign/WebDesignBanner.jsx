import React from "react";
import { FaRegCircleCheck } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { banner } from "./data";
import {
  apiVersion,
  devBaseImgUrl,
  getConvertStringToJSONparseData,
  googleHDViewLink,
} from "../../../../helpers/functions-general";
import ModalContact from "../../../../partials/ModalContact";
import useQueryData from "../../../../custom-hooks/useQueryData";
import LoadImages from "../../../../partials/LoadImages";

const WebDesignBanner = ({ pageName }) => {
  const [modalContact, setModalContact] = React.useState(false);
  const [contactForm, setContactForm] = React.useState(false);

  const { data: websiteData } = useQueryData(
    `${apiVersion}/website`, // endpoint
    "get", // method
    "website", // key
    {},
    null,
    true
  );

  const handleForm = () => {
    setContactForm(!contactForm);
  };

  const websiteBannerImage = getConvertStringToJSONparseData(
    websiteData?.data?.[0]?.website_banner_img
  );

  return (
    <>
      <section
        id="WebDesignBanner"
        className={`banner pt-[59px] md:pt-[95px] min-h-[100vh] md:min-h-[90vh] relative flex items-center`}
      >
        {websiteBannerImage.map((img, index) => (
          <LoadImages
            url={`${googleHDViewLink}${img?.id}`}
            alt="Visually Stunning and User-Friendly Website Design"
            className="absolute inset-0 w-full h-full object-cover z-0"
            key={index}
          />
        ))}

        <div className="customContainer relative z-10 h-full">
          <div className="wrapper flex flex-col justify-center lg:grid lg:grid-cols-2 place-items-center transition-all w-full py-10">
            <div className="text-center lg:text-left">
              <h2 className="text-[clamp(30px,3vw,45px)] leading-[1.1] mb-8 text-light font-light">
                <span className="">
                  {websiteData?.data[0]?.website_banner_title
                    .split("\n") // Split by new lines
                    .filter((content_a) => content_a.trim() !== "") // Remove empty lines
                    .map((content_a, index) => (
                      <p key={index}>{content_a}</p>
                    ))}
                </span>
                <span className="text-light font-semibold">
                  {websiteData?.data?.[0]?.website_banner_title_bold || ""}
                </span>
              </h2>
              <p className="text-light mb-10">
                {websiteData?.data?.[0]?.website_banner_description || ""}
              </p>
              <button
                onClick={handleForm}
                className="btn bg-transparent text-light border-2 uppercase"
              >
                {websiteData?.data?.[0]?.website_banner_button_text || ""}
              </button>
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
          emailSubject={`${banner[0]?.bannerBtnText} / Web Design - `}
        />
      )}
    </>
  );
};

export default WebDesignBanner;
