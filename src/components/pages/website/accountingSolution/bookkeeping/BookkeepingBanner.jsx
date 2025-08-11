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

const BookkeepingBanner = ({ pageName }) => {
  const [modalContact, setModalContact] = React.useState(false);
  const [contactForm, setContactForm] = React.useState(false);

  const { data: bookkeepingData } = useQueryData(
    `${apiVersion}/bookkeeping`, // endpoint
    "get", // method
    "bookkeeping", // key
    {},
    null,
    true
  );

  const handleForm = () => {
    setContactForm(!contactForm);
  };

  const bookkeepingBannerImage = getConvertStringToJSONparseData(
    bookkeepingData?.data?.[0]?.bookkeeping_banner_img
  );

  return (
    <>
      <section
        id="BookkeepingBanner"
        className={`banner pt-[59px] md:pt-[95px] min-h-[100vh] md:min-h-[90vh] relative flex items-center`}
      >
        {bookkeepingBannerImage.map((img, index) => (
          <LoadImages
            url={`${googleHDViewLink}${img?.id}`}
            alt="Keep Your Business Compliant and Financially Organized"
            className="absolute inset-0 w-full h-full object-cover z-0"
            key={index}
          />
        ))}

        <div className="customContainer relative z-10 h-full">
          <div className="wrapper flex flex-col justify-center lg:grid lg:grid-cols-2 place-items-center transition-all w-full py-10">
            <div className="text-center py-10 lg:text-left">
              <h2 className="text-[clamp(30px,3vw,45px)] leading-[1.1] mb-8 text-light">
                {bookkeepingData?.data[0].bookkeeping_banner_title
                  .split("\n") // Split by new lines
                  .filter((content_a) => content_a.trim() !== "") // Remove empty lines
                  .map((content_a, index) => (
                    <p key={index}>{content_a}</p>
                  ))}

                <span className="text-light font-semibold">
                  {bookkeepingData?.data?.length > 0 &&
                  bookkeepingData.data[0]?.bookkeeping_banner_title_bold
                    ? bookkeepingData?.data[0].bookkeeping_banner_title_bold
                    : ""}
                </span>
              </h2>
              <p className="text-light font-light mb-10">
                {bookkeepingData?.data?.length > 0 &&
                bookkeepingData.data[0]?.bookkeeping_banner_description
                  ? bookkeepingData?.data[0].bookkeeping_banner_description
                  : ""}
              </p>
              <button
                onClick={handleForm}
                className="btn bg-transparent text-light border-2 uppercase"
              >
                {bookkeepingData?.data?.length > 0 &&
                bookkeepingData.data[0]?.bookkeeping_banner_button_text
                  ? bookkeepingData?.data[0].bookkeeping_banner_button_text
                  : ""}
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
          services={"default"}
          notification_purpose={"default-receiver"}
          emailSubject={`${banner[0]?.bannerBtnText} / Bookkeeping / Compliance - `}
        />
      )}
    </>
  );
};

export default BookkeepingBanner;
