import React, { useRef } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import useQueryData from "../../../custom-hooks/useQueryData";
import {
  devBaseImgUrl,
  googleHDViewLink,
} from "../../../helpers/functions-general";
import ModalWrapper from "../../../partials/ModalWrapper";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      style={{
        background: "transparent",
        position: "absolute",
        color: "white",
        top: "45%",
        right: "-10%",
        fontSize: "0.5rem",
        cursor: "pointer",
        borderRadius: "100%",
        width: "28px",
        height: "28px",
        display: "grid",
        placeItems: "center",
      }}
      className="md:!absolute !bg-[#ac1e72] md:!right-[-5%] lg:!right-[-15%]  !h-[48px] !w-[48px]"
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
        background: "",
        color: "white",
        top: "45%",
        left: "-10%",
        fontSize: "3rem",
        zIndex: "1",
        cursor: "pointer",
        borderRadius: "100%",
        width: "28px",
        height: "28px",
        display: "grid",
        placeItems: "center",
      }}
      className="md:!absolute !bg-[#ac1e72] md:!left-[-5%] lg:!left-[-15%] !h-[48px] !w-[48px]"
      onClick={onClick}
    >
      <IoIosArrowBack className="text-3xl" />
    </div>
  );
}

const EventsSliderPage = ({ setIsEventsImg, selectedImage }) => {
  var SinglePageSettings = {
    dots: false,
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
          bottom: "-5rem",
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
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        },
      },
    ],
  };

  const {
    isFetching,
    error,
    isLoading,
    status,
    data: eventsAndActivitiesData,
  } = useQueryData(
    "/v1/eventsAndAct", // endpoint
    "get", // method
    "eventsAndAct" // key
  );

  const handleClose = () => {
    setIsEventsImg(false);
    document.body.classList.remove("overflow-hidden");
  };

  // find the id and its matched index
  const selectedItem = eventsAndActivitiesData?.data.find(
    (item) => item.events_activities_aid === selectedImage?.id
  );

  const images = selectedItem?.events_activities_img_list
    ? JSON.parse(selectedItem.events_activities_img_list)
    : [];

  return (
    <ModalWrapper
      className={`transition-all ease-linear transform duration-200 w-[80%] lg:w-[42%] md:w-[60%] place-self-center`}
      handleClose={handleClose}
    >
      <div className="bg-transparent h-fit place-items-center place-content-center">
        <div className="justify-items-center">
          <div className="z-[1] w-[320px] md:w-[740px] h-[60vh] place-self-center relative mx-1">
            {images.length > 1 ? (
              <Slider
                {...SinglePageSettings}
                initialSlide={selectedImage.index}
              >
                {images.map((image, index) => (
                  <div key={index}>
                    <img
                      src={`${googleHDViewLink}${image?.id}`}
                      alt={`Selected Event Image`}
                      className="object-contain w-full h-[60vh] rounded-lg"
                    />
                  </div>
                ))}
              </Slider>
            ) : images.length === 1 ? ( // Display a single image normally
              <img
                src={`${googleHDViewLink}${images[0]?.id}`}
                alt={`Event Image`}
                className="object-contain w-full h-[60vh] rounded-lg"
              />
            ) : (
              <p>No image available</p>
            )}
          </div>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default EventsSliderPage;
