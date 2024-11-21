import React from "react";
import { FaRegCircleCheck } from "react-icons/fa6";
import { devBaseImgUrl } from "../../../helpers/functions-general";
import { Link } from "react-router-dom";
import ModalContact from "../../../partials/ModalContact";

const LcssBanner = ({ pageName }) => {
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
      <section
        id="lcssBanner"
        className={`banner pt-[59px] md:pt-[95px] min-h-[100vh] md:min-h-[90vh] relative flex items-center`}
      >
        <img
          src={`${devBaseImgUrl}/college-ojt-bg.webp`}
          alt=""
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="customContainer relative z-10 h-full">
          <div className="wrapper flex flex-col justify-center lg:grid lg:grid-cols-2 place-items-center transition-all w-full py-10">
            <div className="text-center py-10 lg:text-left">
              <h2 className="text-[clamp(30px,3vw,45px)] leading-[1.1] mb-8 text-light font-light">
                <span className="text-light font-semibold">
                  College On-the-job
                </span>
                <br />
                with industry experience practical, work-related skills
              </h2>
              <p className="text-light mb-10">
                Partner with us for cutting-edge on-the-job training programs
                that equip aspiring IT and Accounting professionals with
                real-world skills, bridging academic learning with practical
                workplace experience. Our program can accommodate students with
                required internship hours ranging from 150 to 600, ensuring
                flexibility and comprehensive skills development.
              </p>
              <a
                href="https://calendly.com/herlyn-torres-frontlinebusiness/30min"
                target="_blank"
                className="btn bg-transparent text-light border-2"
              >
                SCHEDULE A MEETING
              </a>
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
        />
      )}

      {modalContact && (
        <ModalContact
          thePageName={pageName}
          setModalContact={setModalContact}
          modalContact={modalContact}
          setToggleMenu={setToggleMenu}
        />
      )}
    </>
  );
};

export default LcssBanner;
