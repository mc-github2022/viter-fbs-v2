import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IoCloseCircle } from "react-icons/io5";
import Slider from "react-slick/lib/slider";
import ModalWrapper from "../../../../partials/ModalWrapper";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      style={{
        background: "#ac1e72",
        position: "absolute",
        color: "white",
        top: "50%",
        right: "-6%",
        fontSize: "3rem",
        cursor: "pointer",
        borderRadius: "100%",
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
        background: "#ac1e72",
        color: "white",
        top: "50%",
        left: "-6%",
        fontSize: "3rem",
        zIndex: "1",
        cursor: "pointer",
        borderRadius: "100%",
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

const ConStudBatchSliderPage = ({ setModalBatch, itemEdit }) => {
  var settings = {
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
          bottom: "10px",
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
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: "",
          prevArrow: "",
          dots: true,
          arrows: false,
        },
      },
    ],
  };

  const handleClose = () => {
    setModalBatch(false);
    console.log("clicked");
    // document.body.classList.remove("overflow-hidden");
  };

  return (
    <ModalWrapper
      className={`transition-all ease-linear transform duration-200 w-[80%] lg:w-[40%] md:w-[60%] `}
      handleClose={handleClose}
    >
      <div className="bg-transparent h-screen place-items-center">
        <div className="closeBtn absolute top-[150px] right-0 z-[1] cursor-pointer ">
          <IoCloseCircle
            className="text-3xl text-light"
            onClick={handleClose}
          />
        </div>
        <Slider {...settings}>
          {itemEdit.batchImageList.map((image, index) => (
            <div
              key={index}
              className="my-[10vh] lg:my-[20vh] md:mt-[20vh] md:mb-[10vh]"
            >
              <div className="z-[1] mx-3">
                <img
                  src={`/img/${image}`}
                  alt={`Batch image ${index + 1}`}
                  className="object-contain w-[600px] h-[70vh] "
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </ModalWrapper>
  );
};

export default ConStudBatchSliderPage;
