import React from "react";
import useQueryData from "../../../../custom-hooks/useQueryData";
import {
  apiVersion,
  getConvertStringToJSONparseData,
  googleHDViewLink,
} from "../../../../helpers/functions-general";
import LoadImages from "../../../../partials/LoadImages";
import ModalContact from "../../../../partials/ModalContact";

const ServiceBookingBanner = ({ pageName }) => {
  const [modalContact, setModalContact] = React.useState(false);
  const [contactForm, setContactForm] = React.useState(false);

  const { data: bookingData } = useQueryData(
    `${apiVersion}/booking`, // endpoint
    "get", // method
    "booking", // key
    {},
    null,
    true,
  );

  const bookingBannerImage = getConvertStringToJSONparseData(
    bookingData?.data?.[0]?.booking_banner_img,
  );

  const handleForm = () => {
    setContactForm(!contactForm);
  };

  return (
    <>
      <section
        id="ServiceBookingBanner"
        className={`banner pt-[59px] md:pt-[95px] min-h-[100vh] md:min-h-[90vh] relative flex items-center`}
      >
        {bookingBannerImage.map((img, index) => (
          <LoadImages
            url={`${googleHDViewLink}${img?.id}`}
            alt={`booking banner ${index + 1}`}
            className="absolute inset-0 w-full h-full object-cover z-0"
            key={index}
          />
        ))}
        <div className="customContainer relative z-10 h-full">
          <div className="wrapper flex flex-col justify-center lg:grid lg:grid-cols-2 place-items-center transition-all w-full py-10">
            <div className="text-center py-10 lg:text-left">
              <h2 className="text-[clamp(30px,3vw,45px)] leading-[1.1] mb-8 text-light font-light">
                {bookingData?.data[0].booking_banner_title
                  .split("\n") // Split by new lines
                  .filter((content_a) => content_a.trim() !== "") // Remove empty lines
                  .map((content_a, index) => (
                    <p key={index}>{content_a}</p>
                  ))}
                <span className="text-light font-semibold">
                  {bookingData?.data?.length > 0 &&
                  bookingData.data[0]?.booking_banner_title_bold
                    ? bookingData?.data[0].booking_banner_title_bold
                    : ""}
                </span>
                <br />
              </h2>
              <p className="text-light mb-10">
                {bookingData?.data?.length > 0 &&
                bookingData.data[0]?.booking_banner_description
                  ? bookingData?.data[0].booking_banner_description
                  : ""}
              </p>
              {bookingData?.data.map((item, key) => (
                <button
                  onClick={handleForm}
                  className="btn bg-transparent text-light border-2 uppercase "
                  key={key}
                >
                  {item.booking_banner_button_text}
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
          services={"web services"}
          page={"Online Booking System"}
          notification_purpose={"learn-more-web-design-and-development"}
          emailSubject={`${bookingData?.data[0]?.booking_banner_button_text} / Online Booking System - `}
        />
      )}
    </>
  );
};

export default ServiceBookingBanner;
