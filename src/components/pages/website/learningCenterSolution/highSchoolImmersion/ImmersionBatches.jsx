import React, { useRef } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Slider from "react-slick";
import { immersionBatch } from "./data";
import ImmersionBatchSliderPage from "./ImmersionBatchSliderPage";
import useQueryData from "../../../../custom-hooks/useQueryData";
import { devBaseImgUrl } from "../../../../helpers/functions-general";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      style={{
        background: "#ac1e72",
        position: "absolute",
        color: "white",
        top: "35%",
        right: "-3%",
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
        top: "35%",
        left: "-3%",
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

const ImmersionBatches = () => {
  const [modalBatch, setModalBatch] = React.useState(false);
  const [itemEdit, setItemEdit] = React.useState(null);
  const [selectedBatchId, setSelectedBatchId] = React.useState(null);
  const [currentSlide, setCurrentSlide] = React.useState(0);

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

  var settings = {
    dots: false,
    infinite: !modalBatch,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    dotsClass: "slickNav slick-dots",
    nextArrow: modalBatch ? null : <SampleNextArrow />,
    prevArrow: modalBatch ? null : <SamplePrevArrow />,
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
    initialSlide: currentSlide, // Set initial slide to the current one
    afterChange: (index) => setCurrentSlide(index),
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
        breakpoint: 1230,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          nextArrow: modalBatch ? null : <SampleNextArrow />,
          prevArrow: modalBatch ? null : <SamplePrevArrow />,
          // dots: true,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: modalBatch ? null : <SampleNextArrow />,
          prevArrow: modalBatch ? null : <SamplePrevArrow />,
          // dots: true,
        },
      },
    ],
  };

  const handleModalBatch = (item) => {
    setModalBatch(!modalBatch);
    setItemEdit(item);
    setSelectedBatchId(item.lcss_batch_aid); // Set the selected batch ID
    document.body.classList.toggle("overflow-hidden");
  };

  return (
    <>
      <section className="ImmersionBatches pt-20 pb-0 md:pt-0 md:pb-20">
        <div className="customContainer max-w-[90%]">
          <div
            className="mb-12
          "
          >
            <p>Professional Journey of Our</p>
            <h3 className="text-[clamp(20px,7vw,35px)] font-semibold text-primary leading-[1.1]">
              Successful, Industry-ready Batches
            </h3>
          </div>
          {lcssBatchesData?.data.filter(
            (item) => item.lcss_batch_category === "High School Work Immersion"
          ).length > 3 ? (
            <Slider
              {...settings}
              key={modalBatch ? "modalOpen" : "modalClosed"}
            >
              {lcssBatchesData?.data.map((item, key) => {
                if (item.lcss_batch_category === "High School Work Immersion") {
                  const firstImage = item.lcss_batch_img.split(",")[0]?.trim();

                  return (
                    <div
                      className="flex flex-wrap gap-2 place-content-center"
                      key={key}
                    >
                      <div className="grid place-content-center">
                        <div className="mb-[3rem]">
                          <a onClick={() => handleModalBatch(item)}>
                            <div
                              className="blogItem addShadow bg-center bg-cover h-[400px] min-w-[280px] max-w-[413px] md:min-w-[413px] flex items-end relative rounded-xl 
                            grayscale hover:grayscale-0 transition-all group cursor-pointer "
                              style={{
                                backgroundImage: `url(${devBaseImgUrl}/${firstImage})`,
                              }}
                            >
                              <div>
                                <div className="blogExcerpt p-10 relative z-[1]">
                                  <p className="text-light font-bold text-lg">
                                    {item.lcss_batch_school}
                                  </p>
                                  <p className="text-light">
                                    {item.lcss_batch_course}
                                  </p>
                                </div>
                                <div className="blogTitle relative z-[1] pb-10">
                                  <h4 className="bg-[#cccccc] group-hover:bg-primary group-hover:text-light p-2 px-10 w-[180px] md:w-[250px] rounded-tr-full rounded-br-full text-dark grayscale-0 transition-all">
                                    {item.lcss_batch_name}
                                  </h4>
                                </div>
                              </div>

                              <div className="bottomGradient bg-gradient-to-t from-[#000] to-blue-500 h-[100%] w-full absolute bottom-0 block rounded-bl-xl rounded-br-xl"></div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                }
                return null;
              })}
            </Slider>
          ) : (
            <div className="flex flex-row gap-2">
              {lcssBatchesData?.data.map((item, key) => {
                if (item.lcss_batch_category === "High School Work Immersion") {
                  const firstImage = item.lcss_batch_img.split(",")[0]?.trim();

                  return (
                    <div
                      className="flex flex-wrap gap-2 place-content-center"
                      key={key}
                    >
                      <div className="grid place-content-center">
                        <div className="mb-[3rem]">
                          <a onClick={() => handleModalBatch(item)}>
                            <div
                              className="blogItem addShadow bg-center bg-cover h-[400px] 
                                      min-w-[280px] max-w-[280px] md:min-w-[350px] md:max-w-[350px] flex items-end relative rounded-xl 
                                     grayscale hover:grayscale-0 transition-all group cursor-pointer"
                              style={{
                                backgroundImage: `url(${devBaseImgUrl}/${firstImage})`,
                              }}
                            >
                              <div>
                                <div className="blogExcerpt p-10 relative z-[1]">
                                  <p className="text-light font-bold text-lg">
                                    {item.lcss_batch_school}
                                  </p>
                                  <p className="text-light">
                                    {item.lcss_batch_course}
                                  </p>
                                </div>
                                <div className="blogTitle relative z-[1] pb-10">
                                  <h4 className="bg-[#cccccc] group-hover:bg-primary group-hover:text-light p-2 px-10 w-[180px] md:w-[250px] rounded-tr-full rounded-br-full text-dark grayscale-0 transition-all">
                                    {item.lcss_batch_name}
                                  </h4>
                                </div>
                              </div>
                              <div className="bottomGradient bg-gradient-to-t from-dark to-blue-500 h-[200px] w-full absolute bottom-0 block rounded-bl-xl rounded-br-xl"></div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                }
                return null;
              })}
            </div>
          )}
        </div>
      </section>

      {modalBatch && (
        <ImmersionBatchSliderPage
          setModalBatch={setModalBatch}
          itemEdit={itemEdit}
          selectedBatchId={selectedBatchId}
        />
      )}
    </>
  );
};

export default ImmersionBatches;
