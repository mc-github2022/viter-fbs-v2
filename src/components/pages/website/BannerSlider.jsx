import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      style={{
        display: "block",
        position: "absolute",
        color: "white",
        top: "50%",
        right: "5%",
        fontSize: "3rem",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      <IoIosArrowForward />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      style={{
        display: "block",
        position: "absolute",
        color: "white",
        top: "50%",
        left: "5%",
        fontSize: "3rem",
        zIndex: "1",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      <IoIosArrowBack />
    </div>
  );
}

const BannerSlider = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: "slickNav slick-dots",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    appendDots: (dots) => (
      <div
        style={{
          borderRadius: "10px",
          padding: "10px",
          bottom: "30px",
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
          background: "#F5F5F5",
          borderRadius: "50%",
          opacity: "50%",
        }}
      ></div>
    ),
  };

  return (
    <Slider {...settings}>
      <div>
        <section
          id="banner"
          className="banner bg-[#00185a] bg-[url('../../public/img/main-banner-image.png')] bg-cover bg-center"
        >
          <div className="customContainer">
            <div className="wrapper flex place-items-center h-[60vh] md:h-[90vh] transition-all w-full">
              <div className="mx-auto md:w-[820px] text-center">
                <h1 className="text-light leading-[1.2] md:leading-[1.2] text-center text-[clamp(30px,7vw,56px)] font-bold w-full mb-10 md:mb-10  md:text-[75px]">
                  Your Trusted Partner in Managed Services
                </h1>
                <p className="text-light text-center mb-10">
                  We Deliver end-to-end solutions and professional expertise in
                  web applications, websites, virtual assistants, and skills
                  development. Whether you're looking to elevate your digital
                  presence, streamline operations, or build a more skilled
                  workforcem our comprehensive services are designed to drive
                  your success.
                </p>
                <a href="#" className="btn bg-transparent text-light border-2">
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div>
        <section
          id="banner"
          className="banner bg-[#00185a] bg-[url('../../public/img/main-banner-image.jpg')] bg-cover bg-center"
        >
          <div className="customContainer">
            <div className="wrapper flex place-items-center h-[60vh] md:h-[90vh] transition-all w-full">
              <div className="mx-auto md:w-[820px] text-center">
                <h1 className="text-light leading-[1.2] md:leading-[1.2] text-center text-[clamp(30px,7vw,56px)] font-bold w-full mb-10 md:mb-10  md:text-[75px]">
                  Your Trusted Partner in Managed Services
                </h1>
                <p className="text-light text-center mb-10">
                  We Deliver end-to-end solutions and professional expertise in
                  web applications, websites, virtual assistants, and skills
                  development. Whether you're looking to elevate your digital
                  presence, streamline operations, or build a more skilled
                  workforcem our comprehensive services are designed to drive
                  your success.
                </p>
                <a href="#" className="btn bg-transparent text-light border-2">
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div>
        <section
          id="banner"
          className="banner bg-[#00185a] bg-[url('../../public/img/main-banner-image.jpg')] bg-cover bg-center"
        >
          <div className="customContainer">
            <div className="wrapper flex place-items-center h-[60vh] md:h-[90vh] transition-all w-full">
              <div className="mx-auto md:w-[820px] text-center">
                <h1 className="text-light leading-[1.2] md:leading-[1.2] text-center text-[clamp(30px,7vw,56px)] font-bold w-full mb-10 md:mb-10  md:text-[75px]">
                  Your Trusted Partner in Managed Services
                </h1>
                <p className="text-light text-center mb-10">
                  We Deliver end-to-end solutions and professional expertise in
                  web applications, websites, virtual assistants, and skills
                  development. Whether you're looking to elevate your digital
                  presence, streamline operations, or build a more skilled
                  workforcem our comprehensive services are designed to drive
                  your success.
                </p>
                <a href="#" className="btn bg-transparent text-light border-2">
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Slider>
  );
};

export default BannerSlider;
