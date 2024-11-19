import React from "react";
import {
  FileUser,
  Headset,
  TextSearch,
  NotebookPen,
  WalletCards,
  Presentation,
  Handshake,
} from "lucide-react";
import ModalContact from "../../../../partials/ModalContact";

const VaResearchServiceList = ({ pageName }) => {
  const [modalContact, setModalContact] = React.useState(false);
  const [contactForm, setContactForm] = React.useState(false);
  const handleForm = () => {
    setContactForm(!contactForm);
  };

  return (
    <>
      <section className="VaResearchServiceList pt-0 pb-20 lg:pt-10">
        <div className="customContainer">
          <div className="sectionDesc text-center md:w-[70%] mx-auto mb-14">
            <h2 className="text-[clamp(20px,6vw,40px)] leading-[1.1] font-semibold mb-10">
              What <span className="text-primary">Business Support </span>
              <br /> Can We Perform?
            </h2>
            <p className="subDesc mb-10">
              Our VA for Business Support offers comprehensive support to
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
                  <TextSearch size={28} className="text-3xl text-primary" />
                </div>
              </div>
              <p className="font-semibold text-xl lg:text-2xl">
                Lead Management
              </p>
            </li>
            <li className="flex items-center gap-7">
              <div className="bg-customGray rounded-lg addShadow">
                <div className="w-16 h-16 grid place-items-center">
                  <Headset size={28} className="text-3xl text-primary" />
                </div>
              </div>
              <p className="font-semibold text-xl lg:text-2xl">
                Customer Support & Communication
              </p>
            </li>
            <li className="flex items-center gap-7">
              <div className="bg-customGray rounded-lg addShadow">
                <div className="w-16 h-16 grid place-items-center">
                  <WalletCards size={28} className="text-3xl text-primary" />
                </div>
              </div>
              <p className="font-semibold text-xl lg:text-2xl">
                Administrative & Financial Management
              </p>
            </li>
            <li className="flex items-center gap-7">
              <div className="bg-customGray rounded-lg addShadow">
                <div className="w-16 h-16 grid place-items-center">
                  <Presentation size={28} className="text-3xl text-primary" />
                </div>
              </div>
              <p className="font-semibold text-xl lg:text-2xl">
                Data & Reporting
              </p>
            </li>
            <li className="flex items-center gap-7">
              <div className="bg-customGray rounded-lg addShadow">
                <div className="w-16 h-16 grid place-items-center">
                  <NotebookPen size={28} className="text-3xl text-primary" />
                </div>
              </div>
              <p className="font-semibold text-xl lg:text-2xl">
                Operations & Project Management
              </p>
            </li>
            <li className="flex items-center gap-7">
              <div className="bg-customGray rounded-lg addShadow">
                <div className="w-16 h-16 grid place-items-center">
                  <FileUser size={28} className="text-3xl text-primary" />
                </div>
              </div>
              <p className="font-semibold text-xl lg:text-2xl">
                Document & Communication Management
              </p>
            </li>
            <li className="flex items-center gap-7">
              <div className="bg-customGray rounded-lg addShadow">
                <div className="w-16 h-16 grid place-items-center">
                  <Handshake size={28} className="text-3xl text-primary" />
                </div>
              </div>
              <p className="font-semibold text-xl lg:text-2xl">
                Customer Engagement & Relationship Building
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
        />
      )}
    </>
  );
};

export default VaResearchServiceList;
