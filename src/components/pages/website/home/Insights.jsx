import React from "react";
import { BiSolidRightArrow } from "react-icons/bi";
import { insight } from "./data";
import { Link } from "react-router-dom";
import useQueryData from "../../../custom-hooks/useQueryData";
import { devBaseImgUrl } from "../../../helpers/functions-general";
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

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
    "insights" // key
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
          nextArrow: "",
          prevArrow: "",
          dots: true,
        },
      },
      {
        breakpoint: 786,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: "",
          prevArrow: "",
          dots: true,
        },
      },
    ],
  };

  return (
    <>
      <section className="insights py-16 md:py-24 bg-customGray">
        <div className="customContainer px-10">
          {/* <h3 className="text-[clamp(30px,4vw,45px)] font-semibold  leading-[1.1] mb-24 text-dark text-center">
            Industry Insights
          </h3> */}
          <div className="w-[300px] mb-16 md:w-full md:mb-20">
            <p>When share valuable tips and expect advice in our</p>
            <h2 className="font-semibold text-primary leading-[1.1] text-[clamp(20px,6vw,45px)]">
              Industry Insights
            </h2>
            <p>section to help you grow your business and stay ahead.</p>
          </div>
          <div className="wrapper ">
            <div className=" order-2 mb-12 lg:mb-0 ">
              {insightData?.data.length > 3 ? (
                <Slider {...settings}>
                  {insightData.data.map((post, key) => {
                    return (
                      <div key={key} className="px-4 md:px-0">
                        <Link to={`/insight/${post.home_insights_slug}`}>
                          <div
                            style={{
                              backgroundImage: `url(${devBaseImgUrl}/${post.home_insights_img})`,
                            }}
                            className="blogItem bg-center bg-cover max-w-[418px] min-w-[418px] h-[350px] flex items-end relative rounded-xl grayscale hover:grayscale-0 transition-all group cursor-pointer"
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
                            <div className="bottomGradient bg-gradient-to-t from-[#000] to-blue-500 h-[300px] w-full absolute bottom-0 block rounded-bl-xl rounded-br-xl"></div>
                          </div>
                        </Link>
                      </div>
                    );
                  })}
                </Slider>
              ) : (
                <div className="gap-4 flex flex-col place-self-center md:flex md:flex-wrap lg:flex md:flex-row lg:gap-4 md:place-content-center">
                  {insightData?.data.map((post, key) => (
                    <div key={key} className=" px-4 md:px-0">
                      <Link to={`/insight/${post.home_insights_slug}`}>
                        <div
                          style={{
                            backgroundImage: `url(${devBaseImgUrl}/${post.home_insights_img})`,
                          }}
                          className="blogItem bg-center bg-cover max-w-[418px] min-w-[418px] h-[350px] flex items-end relative rounded-xl grayscale hover:grayscale-0 transition-all group cursor-pointer"
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
                          <div className="bottomGradient bg-gradient-to-t from-[#000] to-blue-500 h-[300px] w-full absolute bottom-0 block rounded-bl-xl rounded-br-xl"></div>
                        </div>
                      </Link>
                    </div>
                  ))}
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
