import React from "react";
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      style={{
        display: "block",
        background: "#ac1e72",
        position: "absolute",
        color: "white",
        top: "50%",
        right: "-6%",
        fontSize: "3rem",
        cursor: "pointer",
        borderRadius: "100%",
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
        background: "#ac1e72",
        color: "white",
        top: "50%",
        left: "-6%",
        fontSize: "3rem",
        zIndex: "1",
        cursor: "pointer",
        borderRadius: "100%",
      }}
      onClick={onClick}
    >
      <IoIosArrowBack />
    </div>
  );
}

const LcssBatches = () => {
  var settings = {
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
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 786,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <section className="batches pt-20 pb-40">
        <div className="customContainer">
          <div
            className="mb-12
          "
          >
            <p>Professional journey of our</p>
            <h3 className="text-[35px] font-semibold text-primary leading-[1.1]">
              successful, industry-ready Batches
            </h3>
          </div>
          <Slider {...settings}>
            <div>
              <div className="blogItem addShadow mx-3 bg-[url('../../public/img/partnerWithUs.jpg')] bg-cover h-[350px] flex items-end relative  rounded-xl grayscale hover:grayscale-0 transition-all group cursor-pointer">
                <div>
                  <div className="blogTitle relative z-[1]">
                    <h4 className="bg-[#cccccc] group-hover:bg-primary group-hover:text-light p-2 px-10 w-[250px] rounded-tr-full rounded-br-full text-dark grayscale-0 transition-all">
                      Batch 3
                    </h4>
                  </div>
                  <div className="blogExcerpt p-10 relative z-[1]">
                    <p className="text-light font-bold text-lg">
                      5 Reasons Your Business Needs a Custom Web Application
                    </p>
                  </div>
                </div>
                <div className="bottomGradient bg-gradient-to-t from-dark to-blue-500 h-[200px] w-full absolute bottom-0 block rounded-bl-xl rounded-br-xl"></div>
              </div>
            </div>
            <div>
              <div className="blogItem addShadow mx-3  bg-[url('../../public/img/partnerWithUs.jpg')] bg-cover h-[350px] flex items-end relative  rounded-xl grayscale hover:grayscale-0 transition-all group cursor-pointer">
                <div>
                  <div className="blogTitle relative z-[1]">
                    <h4 className="bg-[#cccccc] group-hover:bg-primary group-hover:text-light p-2 px-10 w-[250px] rounded-tr-full rounded-br-full text-dark grayscale-0 transition-all">
                      Batch 4
                    </h4>
                  </div>
                  <div className="blogExcerpt p-10 relative z-[1]">
                    <p className="text-light font-bold text-lg">
                      5 Reasons Your Business Needs a Custom Web Application
                    </p>
                  </div>
                </div>
                <div className="bottomGradient bg-gradient-to-t from-dark to-blue-500 h-[200px] w-full absolute bottom-0 block rounded-bl-xl rounded-br-xl"></div>
              </div>
            </div>
            <div>
              <div className="blogItem addShadow mx-3 bg-[url('../../public/img/partnerWithUs.jpg')] bg-cover h-[350px] flex items-end relative  rounded-xl grayscale hover:grayscale-0 transition-all group cursor-pointer">
                <div>
                  <div className="blogTitle relative z-[1]">
                    <h4 className="bg-[#cccccc] group-hover:bg-primary group-hover:text-light p-2 px-10 w-[250px] rounded-tr-full rounded-br-full text-dark grayscale-0 transition-all">
                      Batch 5
                    </h4>
                  </div>
                  <div className="blogExcerpt p-10 relative z-[1]">
                    <p className="text-light font-bold text-lg">
                      5 Reasons Your Business Needs a Custom Web Application
                    </p>
                  </div>
                </div>
                <div className="bottomGradient bg-gradient-to-t from-dark to-blue-500 h-[200px] w-full absolute bottom-0 block rounded-bl-xl rounded-br-xl"></div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
    </>
  );
};

export default LcssBatches;
