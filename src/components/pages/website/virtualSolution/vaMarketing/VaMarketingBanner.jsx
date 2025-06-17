import React from "react";
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

const VaMarketingBanner = ({ pageName }) => {
  const [modalContact, setModalContact] = React.useState(false);
  const [contactForm, setContactForm] = React.useState(false);

  const { data: marketingData } = useQueryData(
    `${apiVersion}/marketing`, // endpoint
    "get", // method
    "marketing", // key
    {},
    null,
    true
  );

  const handleForm = () => {
    setContactForm(!contactForm);
  };

  const marketingBannerImage = getConvertStringToJSONparseData(
    marketingData?.data?.[0]?.marketing_banner_img
  );
  return (
    <>
      <section
        id="VaMarketingBanner"
        className={`banner pt-[59px] md:pt-[95px] min-h-[100vh] md:min-h-[90vh] relative flex items-center`}
      >
        {marketingBannerImage.map((img, index) => (
          <LoadImages
            url={`${googleHDViewLink}${img?.id}`}
            alt="Boost your Online Presence Through Our Marketing Support"
            className="absolute inset-0 w-full h-full object-cover z-0"
            key={index}
          />
        ))}

        <div className="customContainer relative z-10 h-full">
          <div className="wrapper flex flex-col justify-center lg:grid lg:grid-cols-2 place-items-center transition-all w-full py-10">
            <div className="text-center py-10 lg:text-left">
              <h2 className="text-[clamp(30px,3vw,45px)] leading-[1.1] mb-8 text-light font-light">
                <span className="">
                  {marketingData?.data[0]?.marketing_banner_title
                    .split("\n") // Split by new lines
                    .filter((content_a) => content_a.trim() !== "") // Remove empty lines
                    .map((content_a, index) => (
                      <p key={index}>{content_a}</p>
                    ))}
                </span>
                <span className="text-light font-semibold">
                  {marketingData?.data?.[0]?.marketing_banner_title_bold || ""}
                </span>
              </h2>
              <p className="text-light font-light mb-10">
                {marketingData?.data?.[0]?.marketing_banner_description || ""}
              </p>
              <button
                onClick={handleForm}
                className="btn bg-transparent text-light border-2 uppercase"
              >
                {marketingData?.data?.[0]?.marketing_banner_button_text || ""}
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
          notification_purpose={"default-receiver"}
          emailSubject={`${banner[0]?.bannerBtnText} / Marketing - `}
        />
      )}
    </>
  );
};

export default VaMarketingBanner;
