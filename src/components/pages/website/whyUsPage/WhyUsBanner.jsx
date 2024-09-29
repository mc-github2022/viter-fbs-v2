import React from "react";
import { FaRegCircleCheck } from "react-icons/fa6";
import { devBaseImgUrl } from "../../../helpers/functions-general";
import { Link } from "react-router-dom";
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
      onClick={onClick}>
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
      onClick={onClick}>
      <IoIosArrowBack />
    </div>
  );
}

const WhyUsBanner = () => {
  var settings = {
    dots: true,
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
        }}>
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
        }}></div>
    ),
    responsive: [
      {
        breakpoint: 1086,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: "",
          prevArrow: "",
        },
      },
    ],
  };

  return (
    <>
      <Slider {...settings}>
        <div>
          <section
            id="WhyUsBanner"
            className={`banner bg-cover pt-[59px] md:pt-[112px] bg-top`}
            style={{
              // backgroundImage: `url(${devBaseImgUrl}/whyfbsBanner.jpg)`,
              backgroundImage: `url(../../public/img/whyfbsBanner.jpg)`,
            }}>
            <div className="customContainer">
              <div className="wrapper grid grid-cols-2 place-items-center h-[80vh] md:h-[70vh] transition-all w-full">
                <div className="text-left">
                  <h2 className="text-[45px] leading-[1.1] mb-8 text-light font-light">
                    We are
                    <span className="text-light font-semibold">more than</span>
                    just a
                    <span className="text-light font-semibold">
                      managed services provider
                    </span>
                  </h2>
                  <p className="text-light mb-10">
                    As a christian company with faith-driven leadership and
                    purposeful service, we aim to be your trusted partner in
                    driving growth, efficiency, and innovation.
                  </p>
                  <a
                    href="#"
                    className="btn bg-transparent text-light border-2">
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div>
          <section
            id="WhyUsBanner"
            className={`banner bg-cover pt-[59px] md:pt-[112px] bg-top`}
            style={{
              // backgroundImage: `url(${devBaseImgUrl}/whyfbsBanner.jpg)`,
              backgroundImage: `url(../../public/img/whyfbsBanner.jpg)`,
            }}>
            <div className="customContainer">
              <div className="wrapper grid grid-cols-2 place-items-center h-[80vh] md:h-[70vh] transition-all w-full">
                <div className="text-left">
                  <h2 className="text-[45px] leading-[1.1] mb-8 text-light">
                    We are
                    <span className="text-light font-semibold">more than</span>
                    just a
                    <span className="text-light font-semibold">
                      managed services provider
                    </span>
                  </h2>
                  <p className="text-light mb-10">
                    Partner with us for cutting-edge on-the-job training
                    programs that equip aspiring IT and Accounting professionals
                    practical workplace workplace experience.
                  </p>
                  <a
                    href="#"
                    className="btn bg-transparent text-light border-2">
                    SCHEDULE A DEMO
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Slider>
    </>
  );
};

export default WhyUsBanner;
