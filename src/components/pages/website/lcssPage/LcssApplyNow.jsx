import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { devBaseImgUrl } from "../../../helpers/functions-general";
import ModalLcssForm from "../../../partials/ModalLcssForm";
import ModalSuccess from "../../../partials/modals/ModalSuccess";
import ModalError from "../../../partials/modals/ModalError";
import { StoreContext } from "../../../store/StoreContext";

const LcssApplyNow = ({ pageName }) => {
  const [modalContact, setModalContact] = React.useState(false);
  const handleModalContact = () => {
    setModalContact(!modalContact);
  };

  const [contactForm, setContactForm] = React.useState(false);
  const handleForm = () => {
    setContactForm(!contactForm);
  };

  const [lcssForm, setLcssForm] = React.useState(false);
  const handleLcssForm = () => {
    setLcssForm(!lcssForm);
  };

  return (
    <>
      <section className="lcssApplyNow pt-[40%] pb-40 md:pt-20 md:pb-20 relative overflow-hidden">
        <div className="customContainer">
          <div className="wrapper grid grid-cols-1 lg:grid-cols-[_1.5fr_1fr] ">
            <div className="bg-customGray md:bg-opacity-70 py-8 lg:py-20 px-10 z-10 rounded-lg addShadow">
              <p>Join and experience the fun and learning with our team!</p>
              <h2 className="text-[clamp(20px,4vw,45px)] font-semibold text-primary leading-[1.1] mb-8">
                Join our team now!
              </h2>
              <p className="mb-4">Requirements:</p>
              <ul className="[&>li]:flex [&>li]:items-center [&>li]:gap-2">
                <li>
                  <div>
                    <FaCheckCircle className="text-primary" />
                  </div>
                  Resume
                </li>
                <li>
                  <div>
                    <FaCheckCircle className="text-primary" />
                  </div>
                  School Memorandum of Agreement
                </li>
                <li>
                  <div>
                    <FaCheckCircle className="text-primary" />
                  </div>{" "}
                  Endorsement Letter
                </li>
                <li>
                  <div>
                    <FaCheckCircle className="text-primary" />
                  </div>{" "}
                  Training Waiver
                </li>
                <li>
                  <div>
                    <FaCheckCircle className="text-primary" />
                  </div>
                  School Evaluation Form
                </li>
              </ul>
              <button
                onClick={handleLcssForm}
                className="btn px-6 bg-primary text-light my-5  inline-block rounded-full font-bold"
              >
                APPLY NOW
              </button>
            </div>
            <div className="bgImage w-full absolute top-0 left-0 md:left-auto md:w-[68%] md:right-0 md:h-full">
              <img
                // src={`${devBaseImgUrl}/ojt-accepted.jpg`}
                src={`${devBaseImgUrl}/ojt-accepted.webp`}
                className="w-full h-full object-cover object-top"
                alt="Join and experience the fun and learning with our team!"
              />
            </div>
          </div>
        </div>
      </section>
      {lcssForm && (
        <ModalLcssForm thePageName={pageName} setLcssForm={setLcssForm} />
      )}
    </>
  );
};

export default LcssApplyNow;
