import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { pricing, pricingCardCount } from "./data";
import ModalContact from "../../../../partials/ModalContact";

const VaAdminSolutionPricing = ({ pageName }) => {
  const [contactSubject, setContactSubject] = React.useState("");
  const [modalContact, setModalContact] = React.useState(false);
  const [contactForm, setContactForm] = React.useState(false);
  const handleForm = (item) => {
    setContactForm(!contactForm);
    setContactSubject(item);
  };
  return (
    <>
      <section className="ServiceHrPricing py-20 bg-[#000000] relative overflow-hidden">
        <div className="footerGradientBlack absolute h-[1000px] w-full bottom-[-30%] right-[-30%]"></div>
        <div className="absolute bg-light h-[180px] w-full bottom-0 z-[1]"></div>
        <div className="customContainer">
          <div className="mb-10 text-center relative z-[3]">
            <p className="text-light">Choose what's best for your needs</p>
            <h3 className="text-[clamp(20px,7vw,35px)] font-semibold leading-[1.1] text-light">
              Suitable Pricing Plans
            </h3>
          </div>
          <div className="md:grid md:place-items-center">
            <div
              className={`wrapper md:grid md:grid-cols-${pricingCardCount[0].columnNumber} gap-6 md:items-center`}
            >
              {pricing.map((price, key) => {
                return (
                  <div
                    key={key}
                    className={`${
                      price.isActive
                        ? "!bg-primary text-light"
                        : "!bg-customGray"
                    } priceItem mb-5 md:mb-0 relative z-[1]  text-center p-10 rounded-lg addShadow max-w-[400px] lg:min-h-[670px] `}
                  >
                    <div className="">
                      <div className="title mb-4">
                        {price.icon}
                        <h3
                          className={`${price.customCss} text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-[transparent] mb-6`}
                        >
                          {price.title}
                        </h3>
                        <p
                          className={`${price.customCss} text-2xl text-dark font-bold`}
                        >
                          {price.rate}
                        </p>
                        <p
                          className={`${price.customCss} text-xl text-dark font-bold`}
                        >
                          {price.duration}
                        </p>
                        <div className="grid place-items-center">
                          {/* <ul className="[&>li]:flex [&>li]:items-center [&>li]:gap-2 my-4">
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
                            <tbody>
                              {price.info.map((info, key) => (
                                <tr
                                  key={key}
                                  className="border-0 flex items-start"
                                >
                                  <td>
                                    <FaCheckCircle
                                      className={`${price.customCss} text-light translate-y-1`}
                                    />
                                  </td>
                                  <td className="text-[16px]">{info}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <p className="mb-8 hidden lg:block">{price.priceDesc}</p>
                      <div className="md:absolute md:left-0 md:right-0 md:bottom-0 md:my-12">
                        <button
                          onClick={() => handleForm(price.title)}
                          className="btn px-5 mt-10 bg-primary text-light border-light border-2 font-bold w-[190px] hover:bg-light hover:text-primary hover:border-primary"
                        >
                          {price.btnText}
                        </button>
                      </div>
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

export default VaAdminSolutionPricing;
