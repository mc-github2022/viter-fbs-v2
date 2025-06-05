import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import useQueryData from "../../../../../../custom-hooks/useQueryData";
import {
  getConvertStringToJSONparseData,
  googleHDViewLink,
} from "../../../../../../helpers/functions-general";
import Slider from "react-slick";
import { HiPencil } from "react-icons/hi";

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

const OjtBatches = ({ ojtTitlesData, handleUpdateOjtBatchesTitle }) => {
  const {
    isFetching,
    error,
    isLoading,
    status,
    data: lcssBatchesData,
  } = useQueryData(
    "/v1/lcssBatches", // endpoint
    "get", // method
    "lcssBatches", // key
    {},
    null,
    true
  );

  var settings = {
    dots: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
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
        breakpoint: 1230,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
          // dots: true,
        },
      },
      {
        breakpoint: 850,
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

  return (
    <>
      <section className="batches pt-20 pb-0 md:pt-0 md:pb-20">
        <div className="customContainer max-w-[90%]">
          <div className="mb-12 relative ">
            <p>
              {ojtTitlesData?.data?.[0]?.ojt_titles_batches_subtitle ||
                "Subtitle"}
            </p>
            <h3 className="text-[clamp(20px,7vw,35px)] font-semibold text-primary leading-[1.1]">
              {ojtTitlesData?.data?.[0]?.ojt_titles_batches_title || "Title"}
            </h3>
            <a
              className="absolute cursor-pointer tooltip-btn -top-4 left-[40rem] "
              data-tooltip="Edit contents"
              onClick={handleUpdateOjtBatchesTitle}
            >
              <HiPencil className=" bg-[#C7AC27] rounded-full  w-[25px] h-[25px] p-[5px] border-[1px] text-black" />
            </a>
          </div>
          {lcssBatchesData?.data.filter(
            (item) => item.lcss_batch_category === "College On-the-job Training"
          ).length > 3 ? (
            <Slider {...settings}>
              {lcssBatchesData?.data.map((item, key) => {
                if (
                  item.lcss_batch_category === "College On-the-job Training"
                ) {
                  // Split the image string into an array and take the first image
                  const batchImages =
                    getConvertStringToJSONparseData(item.lcss_batch_img) || [];
                  const firstImage =
                    batchImages.length > 0 ? batchImages[0] : null;

                  return (
                    <div
                      className="flex flex-wrap gap-2 place-content-center"
                      key={key}
                    >
                      <div className="grid place-content-center">
                        <div className="mb-[3rem]">
                          <a onClick={() => handleModalBatch(item)}>
                            {firstImage && (
                              <div
                                className="blogItem lcssAlbums addShadow bg-center bg-cover h-[400px] w-[270px] md:w-[340px] lg:w-[360px] flex items-end relative rounded-xl 
                    grayscale hover:grayscale-0 transition-all group cursor-pointer"
                                style={{
                                  backgroundImage: `url(${googleHDViewLink}${firstImage.id})`,
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
                                <div className="bottomGradient bg-gradient-to-t from-[#000] !to-[transparent] h-[100%] w-full absolute bottom-0 block rounded-bl-xl rounded-br-xl"></div>
                              </div>
                            )}
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
            <div className="flex flex-wrap gap-2 place-content-center">
              {lcssBatchesData?.data.map((item, key) => {
                if (
                  item.lcss_batch_category === "College On-the-job Training"
                ) {
                  // Split the image string into an array and take the first image
                  const batchImages =
                    getConvertStringToJSONparseData(item.lcss_batch_img) || [];
                  const firstImage =
                    batchImages.length > 0 ? batchImages[0] : null;

                  return (
                    <div
                      className="flex flex-wrap gap-2 place-content-center"
                      key={key}
                    >
                      <div className="grid place-content-center">
                        <div className="mb-[3rem]">
                          <a onClick={() => handleModalBatch(item)}>
                            {firstImage && (
                              <div
                                className="blogItem addShadow bg-center bg-cover h-[400px] 
                              min-w-[280px] max-w-[280px] md:min-w-[350px] md:max-w-[350px] flex items-end relative rounded-xl 
                              grayscale hover:grayscale-0 transition-all group cursor-pointer "
                                style={{
                                  backgroundImage: `url(${googleHDViewLink}${firstImage.id})`,
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
                                <div className="bottomGradient bg-gradient-to-t from-dark !to-[transparent] h-[200px] w-full absolute bottom-0 block rounded-bl-xl rounded-br-xl"></div>
                              </div>
                            )}
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
    </>
  );
};

export default OjtBatches;
