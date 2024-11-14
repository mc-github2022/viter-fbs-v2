import React from "react";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import { FaCheckCircle, FaRegThumbsUp } from "react-icons/fa";
import { pricing } from "./data";
import ModalContact from "../../../../partials/ModalContact";

const SinglePagePricing = ({ pageName }) => {
  const [contactSubject, setContactSubject] = React.useState("");
  const [modalContact, setModalContact] = React.useState(false);
  const [contactForm, setContactForm] = React.useState(false);
  const handleForm = (item) => {
    setContactForm(!contactForm);
    setContactSubject(item);
  };
  return (
    <>
      <section className="SinglePagePricing py-20 bg-[#000000] relative overflow-hidden">
        <div className="footerGradientBlack absolute h-[1000px] w-full bottom-[-30%] right-[-30%]"></div>
        <div className="absolute bg-light h-[180px] w-full bottom-0 z-[1]"></div>
        <div className="customContainer">
          <div className="mb-20 text-center relative z-[3]">
            <p className="text-light">
              Single page website development for your online branding
            </p>
            <h3 className="text-[clamp(20px,7vw,35px)] font-semibold leading-[1.1] text-light">
              Affordable Pricing Plan
            </h3>
          </div>
          <div className="grid place-items-center">
            <div className="wrapper md:grid md:grid-cols-2 gap-8 items-center">
              {pricing.map((price, key) => {
                return (
                  <div
                    key={key}
                    className={`priceItem mb-5 md:mb-0 relative z-[1] text-light text-center p-10 md:min-h-[700px] lg:min-h-[unset] rounded-lg addShadow ${
                      price.isActive
                        ? "bg-primary "
                        : "bg-customGray !text-dark"
                    } grid place-items-center min-h-[600px]`}>
                    <div>
                      <div className="title mb-4 ">
                        {price.icon}
                        <h3
                          className={`${price.customCss} text-2xl font-bold  text-light mb-6`}>
                          {price.title}
                        </h3>
                        <p
                          className={`${price.customCss} text-2xl  font-bold text-light`}>
                          {price.rate}
                        </p>

                        {price.note !== "" && (
                          <p
                            className={`${price.customCss} text-light text-lg italic`}>
                            {price.note}
                          </p>
                        )}
                      </div>
                      {/* <ul className="[&>li]:flex [&>li]:items-center [&>li]:gap-2 mb-8">
                        {price.info.map((info, key) => (
                          <li key={key}>
                            <FaCheckCircle
                              className={`${price.customCss} text-light`}
                            />
                            {info}
                          </li>
                        ))}
                      </ul> */}
                      <table className="prices my-5">
                        {price.info.map((info, key) => (
                          <tr key={key} className="border-0 flex items-start">
                            <td>
                              <FaCheckCircle
                                className={`${price.customCss} text-light translate-y-1`}
                              />
                            </td>
                            <td className="text-[16px]">{info}</td>
                          </tr>
                        ))}
                      </table>
                      <button
                        onClick={() => handleForm(price.title)}
                        className="btn mt-10 px-5 bg-primary text-light border-light border-2 font-bold w-[190px]">
                        CONTACT US
                      </button>
                    </div>
                  </div>
                );
              })}
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
          contactSubject={contactSubject}
        />
      )}
    </>
  );
};

export default SinglePagePricing;
