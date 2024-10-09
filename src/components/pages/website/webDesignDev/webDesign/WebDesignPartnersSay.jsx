import React from "react";
import { RiDoubleQuotesL } from "react-icons/ri";
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { clientSays, clientSaysTitle } from "./data";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      style={{
        position: "absolute",
        color: "white",
        top: "50%",
        transform: "translateY(-50%)",
        right: "8%",
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
      <IoIosArrowForward className="text-3xl" />
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
        left: "8%",
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
      <IoIosArrowBack className="text-3xl" />
    </div>
  );
}

const WebDesignPartnersSay = () => {
  var partnerSaysSettings = {
    infinite: false,
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
    <>
      <section className="WebDesignPartnersSay py-20">
        <div className="customContainer">
          <div className="">
            <p>{clientSaysTitle[0].subTitle}</p>
            <h2 className="text-[35px] font-semibold text-primary leading-[1.1] mb-8">
              {clientSaysTitle[0].mainTitle}
            </h2>
          </div>
          <div className="wrapper ">
            <Slider {...partnerSaysSettings}>
              {clientSays.map((testimonial, key) => {
                return (
                  <div key={key} className="h-[425px]">
                    <div className="testimonialItem bg-customGray grid grid-cols-[_2fr_1fr] items-center top-[50%] translate-y-[-50%] px-20 pt-16 pb-9 rounded-xl w-[80%] mx-auto relative">
                      <div className="theMessage  relative">
                        <div className="absolute top-[-30px] left-[-40px]">
                          <img
                            // src={`${devBaseImgUrl}/quote-white.png`}
                            src={`../../public/img//quote-white.png`}
                            className="w-[80px]"
                            alt=""
                          />
                        </div>
                        <p className="relative z-10 italic mb-4">
                          {testimonial.clientMessage}
                        </p>
                        <div className="logoAndName flex items-center gap-3">
                          <img
                            // src={`${devBaseImgUrl}/sti.png`}
                            className="w-[80px]"
                            src={`../../public/img/${testimonial.clientLogo}`}
                            alt=""
                          />
                          <div className="leading-[1] italic">
                            <p>{testimonial.clientName}</p>
                            <p className="text-sm">{testimonial.clientDesc}</p>
                          </div>
                        </div>
                      </div>
                      <img
                        // src={`${devBaseImgUrl}/Client_IMG_1.png`}
                        src={`../../public/img/${testimonial.clientProfilePic}`}
                        className="absolute bottom-0 w-[295px] right-8"
                        alt=""
                      />
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default WebDesignPartnersSay;
