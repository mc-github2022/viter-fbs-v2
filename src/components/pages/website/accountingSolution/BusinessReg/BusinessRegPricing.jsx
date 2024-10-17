import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { pricing, pricingCardCount } from "./data";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      style={{
        position: "absolute",
        color: "white",
        top: "50%",
        transform: "translateY(-50%)",
        right: "-20px",
        fontSize: "3rem",
        cursor: "pointer",
        background: "#ac1f72",
        borderRadius: "50%",
        width: "48px",
        height: "48px",
        display: "grid",
        placeItems: "center",
      }}
      onClick={onClick}
    >
      <IoIosArrowForward className="text-[2rem]" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      style={{
        position: "absolute",
        color: "white",
        top: "50%",
        transform: "translateY(-50%)",
        left: "-20px",
        fontSize: "3rem",
        zIndex: "1",
        cursor: "pointer",
        background: "#ac1f72",
        borderRadius: "50%",
        width: "48px",
        height: "48px",
        display: "grid",
        placeItems: "center",
      }}
      onClick={onClick}
    >
      <IoIosArrowBack className="text-[2rem]" />
    </div>
  );
}

const BusinessRegPricing = () => {
  var eventsSliderSettings = {
    dots: false,
    infinite: false,
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
          background: "#ac1f72",
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
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 886,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
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
          <div className="mb-20 text-center relative z-[3]">
            <p className="text-light">Choose what's best for your needs</p>
            <h3 className="text-[clamp(20px,7vw,35px)] font-semibold leading-[1.1] text-light">
              Suitable Pricing Plans
            </h3>
          </div>
          <div className="">
            <div className="wrapper">
              <Slider {...eventsSliderSettings}>
                {pricing.map((price, key) => {
                  return (
                    <div className="!grid place-items-center">
                      <div
                        key={key}
                        className={`priceItem md:mb-0 relative z-[1] text-light text-center p-10 rounded-lg min-h-[684px] md:min-h-[654px] md:!w-[400px] ${
                          price.isActive
                            ? "!bg-primary text-light "
                            : "!bg-customGray !text-dark"
                        }`}
                      >
                        {/* priceItem mb-5 md:mb-0 relative z-[1] text-center p-10 rounded-lg min-h-[654px] !max-w-[400px] !ml-[3%] grid place-items-center items-center */}
                        <div className="z-10 ">
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
                            <div className="grid">
                              <ul className="[&>li]:flex [&>li]:items-start [&>li]:gap-2 my-4">
                                {price.info.map((info, key) => (
                                  <li key={key} className="mb-1">
                                    <FaCheckCircle
                                      className={`${price.customCss} text-light mt-1`}
                                    />
                                    {info}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="absolute bottom-0 my-12 left-0 right-0">
                          <a
                            href={price.link}
                            className="btn bg-light text-primary font-bold  "
                          >
                            {price.btnText}
                          </a>
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
    </>
  );
};

export default BusinessRegPricing;
