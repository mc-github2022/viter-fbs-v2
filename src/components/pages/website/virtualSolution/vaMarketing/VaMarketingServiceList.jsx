import React from "react";
import {
  MessageCircleMore,
  Headset,
  BookOpenCheck,
  FileMusic,
  Palette,
} from "lucide-react";
import ModalContact from "../../../../partials/ModalContact";

const VaMarketingServiceList = ({ pageName }) => {
  const [modalContact, setModalContact] = React.useState(false);
  const [contactForm, setContactForm] = React.useState(false);
  const handleForm = () => {
    setContactForm(!contactForm);
  };

  return (
    <>
      <section className="VaMarketingServiceList pt-0 pb-20 lg:pt-10">
        <div className="customContainer">
          <div className="sectionDesc text-center md:w-[70%] mx-auto mb-14">
            <h2 className="text-[clamp(20px,6vw,40px)] leading-[1.1] font-semibold mb-10">
              What <span className="text-primary">Marketing Support </span>{" "}
              <br />
              Can We Perform?
            </h2>
            <p className="subDesc mb-10">
              Our VA for Marketing Support offers comprehensive support to
              streamline your business operations.
            </p>
            <button
              onClick={handleForm}
              className="btn bg-primary text-light font-light hover:bg-secondary transition-all"
            >
              GET STARTED
            </button>
          </div>
          <ul className="serviceInclusion grid md:grid-cols-2 gap-6">
            <li className="flex items-center gap-7">
              <div className="bg-customGray rounded-lg addShadow">
                <div className="w-16 h-16 grid place-items-center">
                  <Headset size={28} className="text-3xl text-primary" />
                </div>
              </div>
              <p className="font-semibold text-xl lg:text-2xl">
                Digital Marketing & Strategy
              </p>
            </li>
            <li className="flex items-center gap-7">
              <div className="bg-customGray rounded-lg addShadow">
                <div className="w-16 h-16 grid place-items-center">
                  <MessageCircleMore
                    size={28}
                    className="text-3xl text-primary"
                  />
                </div>
              </div>
              <p className="font-semibold text-xl lg:text-2xl">
                Content Creation & Management
              </p>
            </li>
            <li className="flex items-center gap-7">
              <div className="bg-customGray rounded-lg addShadow">
                <div className="w-16 h-16 grid place-items-center">
                  <Palette size={28} className="text-base text-primary" />
                </div>
              </div>
              <p className="font-semibold text-xl lg:text-2xl">
                Design & Visual Content
              </p>
            </li>
            <li className="flex items-center gap-7">
              <div className="bg-customGray rounded-lg addShadow">
                <div className="w-16 h-16 grid place-items-center">
                  <FileMusic size={28} className="text-3xl text-primary" />
                </div>
              </div>
              <p className="font-semibold text-xl lg:text-2xl">
                Media Production
              </p>
            </li>
            <li className="flex items-center gap-7">
              <div className="bg-customGray rounded-lg addShadow">
                <div className="w-16 h-16 grid place-items-center">
                  <BookOpenCheck size={28} className="text-3xl text-primary" />
                </div>
              </div>
              <p className="font-semibold text-xl lg:text-2xl">
                Writing, Editing, & Proofing
              </p>
            </li>
          </ul>
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
          emailSubject={`GET STARTED / Marketing - `}
        />
      )}
    </>
  );
};

export default VaMarketingServiceList;
