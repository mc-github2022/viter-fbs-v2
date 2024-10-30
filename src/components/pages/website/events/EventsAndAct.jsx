import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import Slider from "react-slick/lib/slider";
import Footer from "../../../partials/Footer";
import Header from "../../../partials/Header";
import { eventsAndAct } from "./data";
import useQueryData from "../../../custom-hooks/useQueryData";
import { devBaseImgUrl } from "../../../helpers/functions-general";

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

const EventsAndAct = () => {
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

  var EventsSliderSettings = {
    dots: false,
    infinite: false,
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
        breakpoint: 1086,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          nextArrow: "",
          prevArrow: "",
          dots: true,
        },
      },
      {
        breakpoint: 760,
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
      <Header />
      <div className="EventsAndAct pb-20 pt-40">
        <div className="customContainer">
          <div className="theTitle mb-20">
            <p>Through Our</p>
            <h2 className="text-[clamp(20px,7vw,30px)] font-semibold text-primary">
              Events and Activities
            </h2>
            <p>
              We Engage, Inspire, and Empower Our Partners, Clients, and Team
              Members.
            </p>
          </div>
          <div className="wrapper mb-24">
            <div className="grid grid-cols-1 md:grid-cols-[_2fr_1fr] md:grid-rows-2 gap-4 order-2  mb-12 lg:mb-0">
              {eventsAndActivitiesData?.data.map((post, key) => {
                if (key > 2) {
                  return;
                }
                return (
                  <div key={key} className="postItem">
                    <Link
                      to={`/events-and-activities/${post.events_activities_slug}`}
                    >
                      <div
                        style={{
                          // backgroundImage: `url(${devBaseImgUrl}/home-bg-new.jpg)`,
                          backgroundImage: `url(${devBaseImgUrl}/${post.events_activities_img})`,
                        }}
                        className={`blogItem bg-center bg-cover md:h-full flex items-end relative rounded-xl grayscale hover:grayscale-0 transition-all group cursor-pointer`}
                      >
                        <div>
                          <div className="blogExcerpt p-10 pb-6 relative z-[1]">
                            <p className="text-light font-bold text-lg">
                              {post.events_activities_title}
                            </p>
                          </div>
                          <div className="blogTitle pb-10 relative z-[1]">
                            <h4 className="bg-[#cccccc] group-hover:bg-primary group-hover:text-light p-2 px-10 w-[250px] rounded-tr-full rounded-br-full text-dark grayscale-0 transition-all">
                              {post.events_activities_category}
                            </h4>
                          </div>
                        </div>
                        <div className="bottomGradient bg-gradient-to-t from-[#000] to-blue-500 h-[300px] md:h-[200px] w-full absolute bottom-0 block rounded-bl-xl rounded-br-xl"></div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="moreEvents my-4">
            <h2 className="text-3xl font-semibold text-primary mb-8">
              See More
            </h2>
            {eventsAndActivitiesData?.data.length > 6 ? (
              <Slider {...EventsSliderSettings}>
                {eventsAndActivitiesData?.data.map((post, key) => {
                  if (key <= 2) return null;
                  return (
                    <div key={key} className="h-[350px]">
                      <Link
                        to={`/events-and-activities/${post.events_activities_slug}`}
                      >
                        <div
                          style={{
                            backgroundImage: `url(${devBaseImgUrl}/${post.events_activities_img})`,
                          }}
                          className="blogItem bg-center bg-cover max-w-[418px] min-w-[418px] h-[350px] flex items-end relative rounded-xl grayscale hover:grayscale-0 transition-all group cursor-pointer"
                        >
                          <div>
                            <div className="blogExcerpt p-10 pb-6 relative z-[1]">
                              <p className="text-light font-bold text-lg">
                                {post.events_activities_title}
                              </p>
                            </div>
                            <div className="blogTitle  pb-10 relative z-[1]">
                              <h4 className="bg-[#cccccc] group-hover:bg-primary group-hover:text-light p-2 px-10 w-[250px] rounded-tr-full rounded-br-full text-dark grayscale-0 transition-all">
                                {post.events_activities_category}
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
              <div className="gap-4 flex flex-col place-self-center lg:flex lg:flex-row lg:gap-4 md:place-content-center">
                {eventsAndActivitiesData?.data.map((post, key) => {
                  if (key <= 2) return null;
                  return (
                    <div key={key} className="h-[350px]">
                      <Link
                        to={`/events-and-activities/${post.events_activities_slug}`}
                      >
                        <div
                          style={{
                            backgroundImage: `url(${devBaseImgUrl}/${post.events_activities_img})`,
                          }}
                          className="blogItem mx-2 bg-center bg-cover h-[350px] w-[410px] flex items-end relative rounded-xl grayscale hover:grayscale-0 transition-all group cursor-pointer"
                        >
                          <div>
                            <div className="blogTitle relative z-[1]">
                              <h4 className="bg-[#cccccc] group-hover:bg-primary group-hover:text-light p-2 px-10 w-[250px] rounded-tr-full rounded-br-full text-dark grayscale-0 transition-all">
                                {post.events_activities_category}
                              </h4>
                            </div>
                            <div className="blogExcerpt p-10 relative z-[1]">
                              <p className="text-light font-bold text-lg">
                                {post.events_activities_title}
                              </p>
                            </div>
                          </div>
                          <div className="bottomGradient bg-gradient-to-t from-[#000] to-blue-500 h-[300px] w-full absolute bottom-0 block rounded-bl-xl rounded-br-xl"></div>
                        </div>
                      </Link>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EventsAndAct;
