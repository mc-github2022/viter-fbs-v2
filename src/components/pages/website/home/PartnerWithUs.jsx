import React from "react";
import { devBaseImgUrl } from "../../../helpers/functions-general";
import ModalContact from "../../../partials/ModalContact";
import { StoreContext } from "../../../store/StoreContext";

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
  return (
    <>
      <section className="partnerWithUs pt-[50%] pb-40 md:pt-20 md:pb-20 relative overflow-hidden">
        <div className="customContainer">
          <div className="wrapper grid grid-cols-1 lg:grid-cols-[_1.5fr_1fr] ">
            <div className="bg-customGray md:bg-opacity-70 py-10 md:py-20 px-10 z-10 rounded-lg addShadow">
              <p>Empowering Your Business With</p>
              <h2 className="lg:text-[45px] font-semibold text-primary leading-[1.1] mb-8 text-[clamp(20px,4vw,45px)]">
                Reliable, Cost-effective, and Expertly Managed Solutions.
              </h2>
              <p className="mb-8">
                Our talented professionals are carefully supervised by
                experienced management, ensuring high standards and consistent
                performance. Plus, we are dedicated to empowering local talent,
                and helping you support the community while benefiting from
                skilled expertise.
              </p>
              <button
                onClick={handleForm}
                className="btn bg-primary text-light my-5  font-semibold inline-block rounded-full "
              >
                PARTNER WITH US
              </button>
            </div>
            <div className="bgImage w-full absolute top-0 left-0 md:left-auto md:w-[68%] md:right-0 md:h-full ">
              <img
                src={`${devBaseImgUrl}/partnerWithUs.jpg`}
                loading="lazy"
                className="w-full h-full object-cover object-top"
                alt="Reliable, Cost-effective, and Expertly Managed Solutions."
              />
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
          notification_purpose={"partner-with-us-default"}
          emailSubject={"Partner with us - "}
        />
      )}
    </>
  );
};

export default PartnerWithUs;
