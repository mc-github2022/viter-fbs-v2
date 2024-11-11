import React from "react";
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { conStudBatch } from "./data";
import ConStudBatchSliderPage from "./ConStudBatchSliderPage";
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
        top: "35%",
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

const ConStudBatches = () => {
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
          bottom: "-60px",
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
          slidesToShow: 2,
          slidesToScroll: 1,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
          // dots: true,
        },
      },
      {
        breakpoint: 786,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
          // dots: true,
        },
      },
    ],
  };

  const [modalBatch, setModalBatch] = React.useState(false);
  const [itemEdit, setItemEdit] = React.useState(null);
  const [selectedBatchId, setSelectedBatchId] = React.useState(null);
  const handleModalBatch = (item) => {
    setModalBatch(!modalBatch);
    setItemEdit(item);
    setSelectedBatchId(item.lcss_batch_aid);
    document.body.classList.toggle("overflow-hidden");
  };

  return (
    <>
      <section className="ConStudBatches pt-20 md:pt-0 md:pb-40">
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
            (item) => item.lcss_batch_category === "Continuing Studies"
          ).length > 3 ? (
            <Slider {...settings}>
              {lcssBatchesData?.data.map((item, key) => {
                if (item.lcss_batch_category === "Continuing Studies") {
                  const firstImage = item.lcss_batch_img.split(",")[0]?.trim();

                  return (
                    <div className="flex flex-wrap gap-2 place-content-center">
                      <div className="grid place-content-center">
                        <div key={key} className="mb-[3rem]">
                          <a onClick={() => handleModalBatch(item)}>
                            <div
                              className="blogItem addShadow mx-3 bg-center bg-cover h-[350px] max-w-[405px] md:w-[300px] flex items-end relative rounded-xl grayscale hover:grayscale-0 transition-all group cursor-pointer"
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
                if (item.lcss_batch_category === "Continuing Studies") {
                  const firstImage = item.lcss_batch_img.split(",")[0]?.trim();

                  return (
                    <div className="flex flex-wrap gap-2 place-content-center">
                      <div className="grid place-content-center">
                        <div key={key} className="mb-[3rem]">
                          <a onClick={() => handleModalBatch(item)}>
                            <div
                              className="blogItem addShadow mx-3 bg-center bg-cover h-[350px] max-w-[405px] lg:min-w-[405px] flex items-end relative rounded-xl grayscale hover:grayscale-0 transition-all group cursor-pointer"
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
        <ConStudBatchSliderPage
          setModalBatch={setModalBatch}
          itemEdit={itemEdit}
          selectedBatchId={selectedBatchId}
        />
      )}
    </>
  );
};

export default ConStudBatches;
