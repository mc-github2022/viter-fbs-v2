import React, { useRef } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import useQueryData from "../../../custom-hooks/useQueryData";
import {
  devBaseImgUrl,
  getConvertStringToJSONparseData,
  googleHDViewLink,
} from "../../../helpers/functions-general";
import ModalContact from "../../../partials/ModalContact";
import BannerSliderLoader from "./bannerSliderLoader";
import LoadImages from "../../../partials/LoadImages";

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

const BannerSlider = ({ pageName }) => {
  // const [modalContact, setModalContact] = React.useState(false);
  // const handleModalContact = () => {
  //   setModalContact(!modalContact);
  //   console.log("open");
  // };

  const [modalContact, setModalContact] = React.useState(false);
  const handleModalContact = () => {
    setModalContact(!modalContact);
  };

  const [contactForm, setContactForm] = React.useState(false);
  const handleForm = () => {
    setContactForm(!contactForm);
  };

  // const [imageLoaded, setImageLoaded] = React.useState(false);

  // const handleImageLoad = () => {
  //   setImageLoaded(true);
  // };

  const {
    isFetching,
    error,
    isLoading,
    status,
    data: bannerData,
  } = useQueryData(
    "/v1/banner", // endpoint
    "get", // method
    "banner" // key
  );

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: "slickNavHome slick-dots",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    appendDots: (dots) => (
      <div
        style={{
          borderRadius: "10px",
          padding: "10px",
          bottom: "0px",
        }}
      >
        <ul className="mb-[10px] md:mb-[5px]"> {dots} </ul>
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
        breakpoint: 1086,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: "",
          prevArrow: "",
          arrows: false,
        },
      },
    ],
  };

  const sliderRef = useRef(null);
  // This is for keyboard navigation of slider
  React.useEffect(() => {
    const handleKeyDown = (event) => {
      if (sliderRef.current) {
        if (event.key === "ArrowRight") {
          sliderRef.current.slickNext();
        } else if (event.key === "ArrowLeft") {
          sliderRef.current.slickPrev();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

 

  return (
    <>
      {isLoading ? (
        <BannerSliderLoader />
      ) : (
        <Slider ref={sliderRef} {...settings}>
          {bannerData?.data.map((item, key) => {
            // Parse images for the specific banner item
            const bannerImages =
              getConvertStringToJSONparseData(item.home_banner_img) || [];

            return (
              <div key={key}>
                <div
                  id="banner"
                  className={`banner bg-cover bg-center py-[30px] h-svh place-content-center md:h-fit relative`}
                >
                  {bannerImages.map((image, index) => (
                    <LoadImages
                      url={`${googleHDViewLink}${image?.id}`}
                      className={`absolute top-0 w-full h-full object-cover`}
                      alt={`${item.home_banner_title}`}
                      loading="lazy"
                      // onLoad={handleImageLoad}
                      style={{ transition: "opacity 0.1s ease-in" }}
                      key={index}
                    />
                  ))}
                  <div className={`customContainer h-fit `}>
                    <div className="wrapper flex place-items-center min-h-[350px] md:min-h-[80vh] transition-all w-full">
                      <div className="mx-auto w-full md:w-[865px] text-center place-content-center z-1 relative">
                        <p className="text-light lg:text-[28px] italic">
                          {item.home_banner_sub_title}
                        </p>
                        <h1 className="text-light leading-[1.2] md:leading-[1.2] text-center text-[clamp(30px,4vw,50px)] font-bold w-full mb-10 md:mb-10 drop-shadow-2xl">
                          {item.home_banner_title}
                        </h1>
                        <p className="text-light text-center mb-10 relative z-1">
                          {item.home_banner_description}
                        </p>
                        <a
                          href="#"
                          className="btn bg-transparent text-light font-semibold border-2 mb-6 md:mb-7 lg:mb-0 "
                          onClick={handleForm}
                        >
                          {item.home_banner_button_text}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      )}

      {contactForm && (
        <ModalContact
          setModalContact={setModalContact}
          thePageName={pageName}
          contactForm={contactForm}
          setContactForm={setContactForm}
          modalContact={modalContact}
          contactSubject={""}
          notification_purpose={"default-receiver"}
          emailSubject={"GET STARTED / HOME - "}
        />
      )}
    </>
  );
};

export default BannerSlider;
