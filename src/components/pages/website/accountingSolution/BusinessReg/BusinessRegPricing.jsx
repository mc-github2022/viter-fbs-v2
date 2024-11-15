import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { pricing, pricingCardCount } from "./data";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Slider from "react-slick";
import ModalContact from "../../../../partials/ModalContact";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      // style={{
      //   position: "absolute",
      //   color: "white",
      //   top: "50%",
      //   transform: "translateY(-50%)",
      //   right: "5px",
      //   fontSize: "3rem",
      //   cursor: "pointer",
      //   background: "#ac1f72",
      //   borderRadius: "50%",
      //   width: "48px",
      //   height: "48px",
      //   display: "grid",
      //   placeItems: "center",
      // }}
      onClick={onClick}
      className="absolute text-light top-[20%] -translate-y-[50%] right-[0px] text-[3rem] cursor-pointer bg-primary rounded-full w-[48px] h-[48px] grid place-items-center
      md:top-[50%]"
    >
      <IoIosArrowForward className="text-[2rem]" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      // style={{
      //   position: "absolute",
      //   color: "white",
      //   top: "50%",
      //   transform: "translateY(-50%)",
      //   left: "5px",
      //   fontSize: "3rem",
      //   zIndex: "1",
      //   cursor: "pointer",
      //   background: "#ac1f72",
      //   borderRadius: "50%",
      //   width: "48px",
      //   height: "48px",
      //   display: "grid",
      //   placeItems: "center",
      // }}
      onClick={onClick}
      className="absolute text-light top-[20%] -translate-y-[50%] left-[0px] text-[3rem] cursor-pointer bg-primary rounded-full w-[48px] h-[48px] grid place-items-center z-10
      md:top-[50%]"
    >
      <IoIosArrowBack className="text-[2rem]" />
    </div>
  );
}

const BusinessRegPricing = ({ pageName }) => {
  const [contactSubject, setContactSubject] = React.useState("");
  const [modalContact, setModalContact] = React.useState(false);
  const [contactForm, setContactForm] = React.useState(false);
  const handleForm = (item) => {
    setContactForm(!contactForm);
    setContactSubject(item);
  };
  var eventsSliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    dotsClass: "slickNav slick-dots",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    appendDots: (dots) => (
      <div
        style={{
          borderRadius: "10px",
          padding: "10px",
          bottom: "-60px",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: "20px",
          height: "20px",
          color: "blue",
          background: "gray",
          borderRadius: "50%",
          opacity: "50%",
        }}
      ></div>
    ),
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          dots: false,
        },
      },
    ],
  };
  return (
    <>
      <section className="BusinessRegPricing py-20 bg-[#000000] relative overflow-hidden">
        <div className="footerGradientBlack absolute h-[1000px] w-full bottom-[-30%] right-[-30%]"></div>
        <div className="absolute bg-light h-[180px] w-full bottom-0 z-[0]"></div>
        <div className="customContainer">
          <div className="mb-10 lg:mb-20 text-center relative z-[3]">
            <p className="text-light">Choose what's best for your needs</p>
            <h3 className="text-[clamp(20px,7vw,35px)] font-semibold leading-[1.1] text-light">
              Suitable Pricing Plans
            </h3>
          </div>
          <div className="">
            <div className="wrapper ">
              <Slider {...eventsSliderSettings}>
                {pricing.map((price, key) => {
                  return (
                    <div className="grid place-items-center">
                      <div
                        key={key}
                        className={`${
                          price.isActive
                            ? "!bg-primary text-light"
                            : "!bg-customGray"
                        } 
                      priceItem mb-5 relative z-[1] text-center p-10 md:h-[750px]
                      rounded-lg h-[720px] max-w-[400px] md:w-[400px] `}
                      >
                        <div className="z-10">
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
                            <div className="md:absolute md:left-0 md:right-0 md:bottom-0 md:my-12">
                              <button
                                onClick={() => handleForm(price.title)}
                                className="btn mt-5 px-5 bg-primary text-light font-bold border-light border-2 hover:bg-light hover:text-primary hover:border-primary  "
                              >
                                {price.btnText}
                              </button>
                            </div>
                            <div className="grid">
                              {/* <ul className="[&>li]:flex [&>li]:items-start [&>li]:gap-2 my-4">
                              {price.info.map((info, key) => (
                                <li key={key} className="mb-1">
                                  {info}
                                </li>
                              ))}
                            </ul> */}
                              <table className="prices my-5">
                                {price.info.map((info, key) => (
                                  <tr key={key} className="border-0">
                                    <td className="text-[16px]">{info}</td>
                                  </tr>
                                ))}
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </Slider>
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

export default BusinessRegPricing;
