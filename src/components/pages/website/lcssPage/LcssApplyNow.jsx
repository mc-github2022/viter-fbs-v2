import React from "react";
import { devBaseImgUrl } from "../../../helpers/functions-general";
import { FaCheckCircle } from "react-icons/fa";
import ModalContact from "../../../partials/ModalContact";

const LcssApplyNow = ({ pageName }) => {
  const [modalContact, setModalContact] = React.useState(false);
  const handleModalContact = () => {
    setModalContact(!modalContact);
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
              <a
                href=""
                className="btn bg-primary text-light my-5 text-[12px] md:text-md  inline-block rounded-full font-bold"
              >
                PARTNER WITH US TODAY
              </a>
            </div>
            <div className="bgImage w-full absolute top-0 left-0 md:left-auto md:w-[68%] md:right-0 md:h-full">
              <img
                // src={`${devBaseImgUrl}/ojt-accepted.jpg`}
                src="../../public/img/ojt-accepted.webp"
                className="w-full h-full object-cover object-top"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
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

export default LcssApplyNow;
