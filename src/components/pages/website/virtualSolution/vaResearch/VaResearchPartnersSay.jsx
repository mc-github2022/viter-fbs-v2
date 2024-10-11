import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Slider from "react-slick";
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

const VaResearchPartnersSay = () => {
  var partnerSaysSettings = {
    dots: false,
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
          bottom: "-40px",
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
        breakpoint: 1086,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: "",
          prevArrow: "",
          dots: true,
        },
      },
    ],
  };

  return (
    <>
      <section className="VaResearchPartnersSay pb-10 md:py-20">
        <div className="customContainer">
          <div className="">
            <p>{clientSaysTitle[0].subTitle}</p>
            <h2 className="text-[clamp(20px,7vw,35px)] font-semibold text-primary leading-[1.1] mb-8">
              {clientSaysTitle[0].mainTitle}
            </h2>
          </div>
          <div className="wrapper ">
            <Slider {...partnerSaysSettings}>
              {clientSays.map((testimonial, key) => {
                return (
                  <div key={key} className="md:h-[425px]">
                    <div className="testimonialItem bg-customGray lg:grid lg:grid-cols-[_2fr_1fr] items-center md:top-[50%] md:translate-y-[-50%] py-10 px-10 md:px-20 md:pt-16 pb-9 rounded-xl md:w-[80%] mx-auto relative mb-5">
                      <div className="theMessage  relative">
                        <div className="absolute top-[-30px] left-[-40px]">
                          <img
                            // src={`${devBaseImgUrl}/quote-white.png`}
                            src={`../../public/img//quote-white.png`}
                            className="w-[80px]"
                            alt=""
                          />
                        </div>
                        <p className="relative z-10 italic mb-4 min-h-[260px] md:min-h-0">
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
                      <div className="hidden lg:block">
                        <img
                          // src={`${devBaseImgUrl}/Client_IMG_1.png`}
                          src={`../../public/img/${testimonial.clientProfilePic}`}
                          className="absolute bottom-0 w-[300px] right-8"
                          alt=""
                        />
                      </div>
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

export default VaResearchPartnersSay;
