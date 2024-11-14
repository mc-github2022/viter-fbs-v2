import React from "react";
import { FaRegCircleCheck } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { banner } from "./data";
import { devBaseImgUrl } from "../../../../helpers/functions-general";
import ModalContact from "../../../../partials/ModalContact";

const ServiceOnlineDonationBanner = ({ pageName }) => {
  const [modalContact, setModalContact] = React.useState(false);
  const [contactForm, setContactForm] = React.useState(false);
  const handleForm = () => {
    setContactForm(!contactForm);
  };
  return (
    <>
      <section
        id="ServiceOnlineDonationBanner"
        className={`banner bg-cover bg-center pt-[59px] md:pt-[95px]`}
        style={{
          // backgroundImage: `url(${devBaseImgUrl}/ServicesBanner.jpg)`,
          backgroundImage: `url(${devBaseImgUrl}/${banner[0].bannerImage})`,
        }}>
        <div className="customContainer">
          <div className="wrapper flex flex-col justify-center lg:grid lg:grid-cols-2 place-items-center min-h-[350px] md:min-h-[80vh] transition-all w-full">
            <div className="text-center py-10 lg:text-left">
              <h2 className="text-[clamp(30px,3vw,45px)] leading-[1.1] mb-8 text-light font-light">
                {banner[0].bannerTitle}
                <span className="text-light font-semibold">
                  {" "}
                  {banner[0].bannerTitleBoldText}
                </span>
                <br />
              </h2>
              <p className="text-light mb-10">{banner[0].bannerTextDesc}</p>
              <button
                onClick={handleForm}
                className="btn bg-transparent text-light border-2">
                {banner[0].bannerBtnText}
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
        />
      )}
    </>
  );
};

export default ServiceOnlineDonationBanner;
