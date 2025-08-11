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
import LoadImages from "../../../../partials/LoadImages";
import useQueryData from "../../../../custom-hooks/useQueryData";

const GraphicDesignBanner = ({ pageName }) => {
  const [modalContact, setModalContact] = React.useState(false);
  const [contactForm, setContactForm] = React.useState(false);

  const { data: graphicData } = useQueryData(
    `${apiVersion}/graphic`, // endpoint
    "get", // method
    "graphic", // key
    {},
    null,
    true
  );

  const graphicBannerImage = getConvertStringToJSONparseData(
    graphicData?.data?.[0]?.graphic_banner_img
  );

  const handleForm = () => {
    setContactForm(!contactForm);
  };

  return (
    <>
      <section
        id="GraphicDesignBanner"
        className={`banner pt-[59px] md:pt-[95px] min-h-[100vh] md:min-h-[90vh] relative flex items-center`}
      >
        {graphicBannerImage.map((img, index) => (
          <LoadImages
            url={`${googleHDViewLink}${img?.id}`}
            alt="Website to elevate your business brand through our WordPress Website"
            className="absolute inset-0 w-full h-full object-cover z-0"
            key={index}
          />
        ))}
        <div className="customContainer relative z-10 h-full">
          <div className="wrapper flex flex-col justify-center lg:grid lg:grid-cols-2 place-items-center transition-all w-full py-10">
            <div className="text-center py-10 lg:text-left">
              <h2 className="text-[clamp(30px,3vw,45px)] leading-[1.1] mb-8 text-light font-light">
                <span className="">
                  {graphicData?.data[0]?.graphic_banner_title
                    .split("\n") // Split by new lines
                    .filter((content_a) => content_a.trim() !== "") // Remove empty lines
                    .map((content_a, index) => (
                      <p key={index}>{content_a}</p>
                    ))}
                </span>
                <span className="text-light font-semibold">
                  {graphicData?.data?.[0]?.graphic_banner_title_bold || ""}
                </span>
              </h2>
              <p className="text-light mb-10">
                {graphicData?.data?.[0]?.graphic_banner_description || ""}
              </p>
              <button
                onClick={handleForm}
                className="btn bg-transparent text-light border-2 uppercase"
              >
                {graphicData?.data?.[0]?.graphic_banner_button_text || ""}
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
          page={"WordPress CMS Website"}
          notification_purpose={"default-receiver"}
          emailSubject={`${banner[0]?.bannerBtnText} / WordPress CMS Website - `}
        />
      )}
    </>
  );
};

export default GraphicDesignBanner;
