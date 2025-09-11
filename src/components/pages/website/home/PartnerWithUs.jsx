import React from "react";
import {
  apiVersion,
  devBaseImgUrl,
  getConvertStringToJSONparseData,
  googleHDViewLink,
} from "../../../helpers/functions-general";
import ModalContact from "../../../partials/ModalContact";
import { StoreContext } from "../../../store/StoreContext";
import useQueryData from "../../../custom-hooks/useQueryData";
import LoadImages from "../../../partials/LoadImages";

const PartnerWithUs = ({ pageName }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [modalContact, setModalContact] = React.useState(false);
  const handleModalContact = () => {
    setModalContact(!modalContact);
  };

  const [contactForm, setContactForm] = React.useState(false);
  const handleForm = () => {
    setContactForm(!contactForm);
  };

  const { data: partnerWithUsData } = useQueryData(
    `${apiVersion}/partnerWithUs`, // endpoint
    "get", // method
    "partnerWithUs" // key
  );

  const partnerWithUsImage = getConvertStringToJSONparseData(
    partnerWithUsData?.data?.[0]?.partner_with_us_img
  );

  return (
    <>
      <section className="partnerWithUs pt-[50%] pb-40 md:pt-20 md:pb-20 relative overflow-hidden">
        <div className="customContainer">
          <div className="wrapper grid grid-cols-1 lg:grid-cols-[_1.5fr_1fr] ">
            <div className="bg-customGray md:bg-opacity-70 py-10 md:py-20 px-10 z-10 rounded-lg addShadow">
              <p>
                {partnerWithUsData?.data?.length > 0 &&
                partnerWithUsData.data[0]?.partner_with_us_subtitle
                  ? partnerWithUsData?.data[0].partner_with_us_subtitle
                  : ""}
              </p>
              <h2 className="lg:text-[45px] font-semibold text-primary leading-[1.1] mb-8 text-[clamp(20px,4vw,45px)]">
                {partnerWithUsData?.data?.length > 0 &&
                partnerWithUsData.data[0]?.partner_with_us_title
                  ? partnerWithUsData?.data[0].partner_with_us_title
                  : ""}
              </h2>
              <p className="mb-8">
                {partnerWithUsData?.data?.length > 0 &&
                partnerWithUsData.data[0]?.partner_with_us_description
                  ? partnerWithUsData?.data[0].partner_with_us_description
                  : ""}
              </p>
              <button
                onClick={handleForm}
                className="btn bg-primary text-light my-5  font-semibold inline-block rounded-full uppercase"
              >
                {partnerWithUsData?.data?.length > 0 &&
                partnerWithUsData.data[0]?.partner_with_us_button_text
                  ? partnerWithUsData?.data[0].partner_with_us_button_text
                  : ""}
              </button>
            </div>
            <div className="bgImage w-full absolute top-0 left-0 md:left-auto md:w-[68%] md:right-0 md:h-full ">
              {partnerWithUsImage.map((image, index) => (
                <LoadImages
                  url={`${googleHDViewLink}${image?.id}`}
                  loading="lazy"
                  className="w-full h-full object-cover object-top"
                  alt="Reliable, Cost-effective, and Expertly Managed Solutions."
                  key={index}
                />
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
          page={"Home"}
          notification_purpose={"default-receiver"}
          emailSubject={"PARTNER WITH US - "}
        />
      )}
    </>
  );
};

export default PartnerWithUs;
