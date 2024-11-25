import React from "react";
import { devBaseImgUrl } from "../../../helpers/functions-general";
import { FaFileDownload } from "react-icons/fa";
import { FaRegCircleCheck } from "react-icons/fa6";
import ModalContact from "../../../partials/ModalContact";

const LcssPartnersWithUs = ({ pageName }) => {
  const [contactForm, setContactForm] = React.useState(false);
  const handleForm = () => {
    setContactForm(!contactForm);
  };

  return (
    <>
      <section className="partnersWithUs py-20 bg-customGray">
        <div className="customContainer">
          <p> We Offer On-the-job Training for</p>
          <h2 className="text-[clamp(20px,7vw,35px)] leading-[1.1] mb-12 text-light">
            <span className="font-semibold text-primary">
              Effective Skills Acquisitions.
            </span>
          </h2>
          <div className="wrapper lg:grid lg:grid-cols-2 gap-12">
            <div>
              <img
                // src={`${devBaseImgUrl}/lcssBannerImg.jpg`}
                src={`${devBaseImgUrl}/lcssBannerImg.jpg`}
                className="mb-12 w-full mx-auto"
                alt="Effective Skills Acquisitions."
              />
              <ul className="flex flex-col md:flex md:flex-row items-center gap-12">
                <li>
                  <button
                    onClick={handleForm}
                    className="btn bg-primary text-light font-semibold"
                  >
                    PARTNER WITH US
                  </button>
                </li>
                <li>
                  <a
                    href="https://drive.google.com/uc?export=download&amp;id=1kSl-0-BtMdzMtsTdPw-N2SqI6jlDUJOE"
                    download
                    className="flex items-center gap-2 font-bold text-primary"
                  >
                    Download Proposal <FaFileDownload />
                  </a>
                </li>
              </ul>
            </div>
            <div className="mt-14 lg:mt-0">
              <ul>
                <li className="flex items-start gap-4 text-dark mb-6">
                  <div className="flex gap-4 items-start">
                    <div>
                      <FaRegCircleCheck className="circleCheck text-primary text-[clamp(25px,5vw,30px)] bg-gradient-to-r from-primary to-secondary bg-clip-text text-[transparent]" />
                    </div>
                    <div>
                      <h3 className="text-primary bg-gradient-to-r from-primary to-secondary bg-clip-text text-[transparent] text-[clamp(16px,5vw,24px)] mb-3">
                        Work-Related Experience
                      </h3>
                      <p className="text-justify">
                        Students get hands-on, real-world experience, allowing
                        them to apply knowledge in practical settings, preparing
                        them for the demands of their future careers.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-4 text-dark mb-6">
                  <div className="flex gap-4 items-start">
                    <div>
                      <FaRegCircleCheck className="circleCheck text-primary text-[clamp(25px,5vw,30px)] bg-gradient-to-r from-primary to-secondary bg-clip-text text-[transparent]" />
                    </div>
                    <div>
                      <h3 className="text-primary bg-gradient-to-r from-primary to-secondary bg-clip-text text-[transparent] text-[clamp(16px,5vw,24px)] mb-3">
                        Expert-Led Training
                      </h3>
                      <p className="text-justify">
                        Receive guidance and mentorship from industry experts
                        who provide valuable insights, technical skills, and
                        personalized support to help you excel in your chosen
                        field.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-4 text-dark">
                  <div className="flex gap-4 items-start">
                    <div>
                      <FaRegCircleCheck className="circleCheck text-primary text-[clamp(25px,5vw,30px)] bg-gradient-to-r from-primary to-secondary bg-clip-text text-[transparent]" />
                    </div>
                    <div>
                      <h3 className="text-primary bg-gradient-to-r from-primary to-secondary bg-clip-text text-[transparent] text-[clamp(16px,5vw,24px)] mb-3">
                        Higher Employability
                      </h3>
                      <p className="text-justify">
                        By gaining industry-aligned experience and expert
                        training, students enhance their employability, making
                        them more competitive in the job market and ready for
                        career opportunities.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {contactForm && (
        <ModalContact
          setModalContact={setContactForm}
          thePageName={pageName}
          contactForm={contactForm}
          setContactForm={setContactForm}
          modalContact={contactForm}
          contactSubject={""}
          notification_purpose={"partner-with-us-lcs"}
          emailSubject={"Parner with us - "}
        />
      )}
    </>
  );
};

export default LcssPartnersWithUs;
