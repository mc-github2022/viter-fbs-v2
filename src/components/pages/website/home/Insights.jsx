import React, { useRef } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import useQueryData from "../../../custom-hooks/useQueryData";
import {
  devBaseImgUrl,
  devNavUrl,
  getConvertStringToJSONparseData,
  googleHDViewLink,
} from "../../../helpers/functions-general";

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

const Insights = () => {
  const {
    isFetching,
    error,
    isLoading,
    status,
    data: insightData,
  } = useQueryData(
    "/v1/insights", // endpoint
    "get", // method
    "insights", // key
    {},
    null,
    true
  );

  const { data: homeTitlesData } = useQueryData(
    "/v1/homeTitles", // endpoint
    "get", // method
    "homeTitles", // key
    {},
    null,
    true
  );

  const sliderRef = useRef(null);

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
        breakpoint: 1330,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 786,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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

  return (
    <>
      <section className="insights py-16 md:py-24 bg-customGray">
        <div className="customContainer max-w-[90%]">
          <div className="w-[300px] mb-16 md:w-full md:mb-20">
            <p>
              {homeTitlesData?.data?.length > 0 &&
              homeTitlesData.data[0]?.title_subtitle_insights_a
                ? homeTitlesData?.data[0].title_subtitle_insights_a
                : "Subtitle A"}
            </p>
            <h2 className="font-semibold text-primary leading-[1.1] text-[clamp(20px,6vw,45px)]">
              {homeTitlesData?.data?.length > 0 &&
              homeTitlesData.data[0]?.title_insights
                ? homeTitlesData?.data[0].title_insights
                : "Title"}
            </h2>
            <p>
              {homeTitlesData?.data?.length > 0 &&
              homeTitlesData.data[0]?.title_subtitle_insights_b
                ? homeTitlesData?.data[0].title_subtitle_insights_b
                : "Subtitle B"}
            </p>
          </div>
          <div className="wrapper">
            <div className=" order-2 mb-12 lg:mb-0 ">
              {insightData?.data.filter(
                (post) => post.home_insights_is_active === 1
              ).length > 3 ? (
                <Slider ref={sliderRef} {...settings}>
                  {insightData.data
                    .filter((post) => post.home_insights_is_active === 1)
                    .map((post, key) => {
                      const insightsImages =
                        getConvertStringToJSONparseData(
                          post.home_insights_img
                        ) || [];

                      return (
                        <div key={key} className="md:px-0">
                          <Link
                            to={`${devNavUrl}/insight/${post.home_insights_slug}`}
                          >
                            {insightsImages.map((image, index) => (
                              <div
                                style={{
                                  backgroundImage: `url(${googleHDViewLink}${image?.id})`,
                                }}
                                className="blogItem bg-center bg-cover md:w-[365px] h-[350px] flex items-end relative rounded-xl grayscale hover:grayscale-0 transition-all group cursor-pointer place-self-center"
                                key={index}
                              >
                                <div>
                                  <div className="blogExcerpt p-10 pb-6 relative z-[1]">
                                    <p className="text-light font-bold text-lg">
                                      {post.home_insights_title}
                                    </p>
                                  </div>
                                  <div className="blogTitle  pb-10  relative z-[1]">
                                    <h4 className="bg-[#cccccc] group-hover:bg-primary group-hover:text-light p-2 px-10 w-[250px] rounded-tr-full rounded-br-full text-dark grayscale-0 transition-all">
                                      {post.home_insights_category}
                                    </h4>
                                  </div>
                                </div>
                                <div className="bottomGradient bg-gradient-to-t from-[#000] !to-[transparent] h-[300px] w-full absolute bottom-0 block rounded-bl-xl rounded-br-xl"></div>
                              </div>
                            ))}
                          </Link>
                        </div>
                      );
                    })}
                </Slider>
              ) : (
                <div className="gap-4 flex flex-col place-self-center md:flex md:flex-wrap lg:flex md:flex-row lg:gap-4 md:place-content-center">
                  {insightData?.data
                    .filter((post) => post.home_insights_is_active === 1)
                    .map((post, key) => {
                      const insightsImages =
                        getConvertStringToJSONparseData(
                          post.home_insights_img
                        ) || [];

                      return (
                        <div key={key} className="md:px-0">
                          <Link
                            to={`${devNavUrl}/insight/${post.home_insights_slug}`}
                          >
                            {insightsImages.map((image, index) => (
                              <div
                                style={{
                                  backgroundImage: `url(${googleHDViewLink}${image?.id})`,
                                }}
                                className="blogItem bg-center bg-cover md:w-[365px] h-[350px] flex items-end relative rounded-xl grayscale hover:grayscale-0 transition-all group cursor-pointer"
                              >
                                <div>
                                  <div className="blogExcerpt p-10 pb-6 relative z-[1]">
                                    <p className="text-light font-bold text-lg">
                                      {post.home_insights_title}
                                    </p>
                                  </div>
                                  <div className="blogTitle pb-10 relative z-[1]">
                                    <h4 className="bg-[#cccccc] group-hover:bg-primary group-hover:text-light p-2 px-10 w-[250px] rounded-tr-full rounded-br-full text-dark grayscale-0 transition-all">
                                      {post.home_insights_category}
                                    </h4>
                                  </div>
                                </div>
                                <div className="bottomGradient bg-gradient-to-t from-[#000] !to-[transparent] h-[300px] w-full absolute bottom-0 block rounded-bl-xl rounded-br-xl"></div>
                              </div>
                            ))}
                          </Link>
                        </div>
                      );
                    })}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Insights;
