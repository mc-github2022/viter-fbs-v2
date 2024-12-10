import React, { useRef } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Slider from "react-slick";
import useQueryData from "../../../../custom-hooks/useQueryData";
import { devBaseImgUrl } from "../../../../helpers/functions-general";
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

const ImmersionBatchSliderPage = ({
  setModalBatch,
  itemEdit,
  selectedBatchId,
}) => {
  const {
    isFetching,
    error,
    isLoading,
    status,
    data: lcssBatchesData,
  } = useQueryData(
    "/v1/lcssBatches", // endpoint
    "get", // method
    "lcssBatches" // key
  );

  const sliderRef = useRef(null);

  var settings = {
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
          background: "gray",
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
          dots: false,
          arrows: true,
        },
      },
    ],
  };

  // This is for keyboard navigation of slider
  React.useEffect(() => {
    const handleKeyDown = (event) => {
      if (sliderRef.current) {
        // Check if the ref is defined
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

  const handleClose = () => {
    setModalBatch(false);
    console.log("clicked");
    document.body.classList.remove("overflow-hidden");
  };

  const selectedItem = lcssBatchesData?.data.find(
    (item) => item.lcss_batch_aid === selectedBatchId
  );
  const images =
    selectedItem?.lcss_batch_img
      .split(",")
      .map((img) => img.trim())
      .filter(Boolean) || [];

  return (
    <ModalWrapper
      className={`transition-all ease-linear transform duration-200 w-[80%] lg:w-[42%] md:w-[60%] place-self-center`}
      handleClose={handleClose}
    >
      <div className="bg-transparent h-fit place-items-center place-content-center">
        {images.length > 1 ? (
          <Slider ref={sliderRef} {...settings}>
            {images.map((image, index) => (
              <div
                key={index}
                className="justify-items-center"
                // className="my-[10vh] lg:my-[20vh] md:mt-[20vh] md:mb-[10vh]"
              >
                <div className="z-[1] max-w-[700px] h-[60vh] place-self-center mx-1">
                  <img
                    src={`${devBaseImgUrl}/${image}`} // Use the current image
                    alt={`Batch image ${image} - ${index + 1}`}
                    className="object-contain w-[700px] h-[60vh] "
                  />
                </div>
              </div>
            ))}
          </Slider>
        ) : images.length === 1 ? (
          <div
          // className="my-[10vh] lg:my-[20vh] md:mt-[20vh] md:mb-[10vh]"
          >
            <div className="z-[1] max-w-[700px] h-[60vh] place-self-center">
              <img
                src={`${devBaseImgUrl}/${images[0]}`}
                alt="Successful, Industry-ready Batches"
                className="object-contain w-[700px] h-[60vh]"
              />
            </div>
          </div>
        ) : null}
      </div>
    </ModalWrapper>
  );
};

export default ImmersionBatchSliderPage;
