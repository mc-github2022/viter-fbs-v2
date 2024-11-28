import React from "react";
import { devBaseImgUrl } from "../../../helpers/functions-general";
import ModalContact from "../../../partials/ModalContact";

const WhyUsBanner = ({ pageName }) => {
  const [modalContact, setModalContact] = React.useState(false);
  const [contactForm, setContactForm] = React.useState(false);
  const handleForm = () => {
    setContactForm(!contactForm);
  };

  return (
    <>
      <div>
        <section
          id="WhyUsBanner"
          className={`banner bg-cover bg-center pt-[59px] md:pt-[95px] min-h-[100vh] md:min-h-[90vh] place-content-center`}
          style={{
            backgroundImage: `url(${devBaseImgUrl}/whyfbsbanner.webp)`,
          }}
        >
          <div className="customContainer">
            <div className="wrapper flex flex-col justify-center lg:grid lg:grid-cols-2 place-items-center transition-all w-full">
              <div className="text-center py-10 lg:text-left">
                <h2 className="text-[clamp(30px,3vw,45px)] leading-[1.1] mb-8 text-light font-light">
                  We Are
                  <span className="text-light font-semibold inline-block ml-3 mr-3">
                    More Than
                  </span>
                  Just A
                  <span className="text-light font-semibold inline-block mr-3">
                    Managed Services Provider
                  </span>
                </h2>
                <p className="text-light mb-10">
                  As a Christian company with faith-driven leadership and a
                  commitment to purposeful service, we aim to be your trusted
                  partner in driving growth, efficiency, and innovation.
                </p>
                <button
                  onClick={handleForm}
                  className="btn bg-transparent text-light font-semibold border-2"
                >
                  GET STARTED
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      {contactForm && (
        <ModalContact
          setModalContact={setModalContact}
          thePageName={pageName}
          contactForm={contactForm}
          setContactForm={setContactForm}
          modalContact={modalContact}
          contactSubject={""}
          notification_purpose={"default-receiver"}
          emailSubject={`Get started - `}
        />
      )}
    </>
  );
};

export default WhyUsBanner;
