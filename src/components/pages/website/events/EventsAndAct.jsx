import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import Slider from "react-slick/lib/slider";
import Footer from "../../../partials/Footer";
import Header from "../../../partials/Header";
import { eventsAndAct } from "./data";
import useQueryData from "../../../custom-hooks/useQueryData";
import {
  apiVersion,
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

const EventsAndAct = () => {
  const [pageName, setPageName] = React.useState("events&Activities");
  React.useEffect(() => {
    window.scrollTo(0, 0);
  });

  const {
    isFetching,
    error,
    isLoading,
    status,
    data: eventsAndActivitiesData,
  } = useQueryData(
    "/v1/eventsAndAct", // endpoint
    "get", // method
    "eventsAndAct", // key
    {},
    null,
    true
  );

  const { data: eventsTitleData } = useQueryData(
    `${apiVersion}/events-title`, // endpoint
    "get", // method
    "events-title", // key
    {},
    null,
    true
  );

  var EventsSliderSettings = {
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
        breakpoint: 1230,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        },
      },
    ],
  };
  return (
    <>
      <Header pageName={pageName} services={"default"}
                page={"Home"}/>
      <div className="EventsAndAct pt-28 pb-16 md:pt-40 md:pb-20">
        <div className="customContainer">
          <div className="theTitle mb-20">
            <p>{eventsTitleData?.data?.[0]?.events_title_subtitle_a || ""}</p>
            <h2 className="text-[clamp(20px,7vw,30px)] font-semibold text-primary">
              {eventsTitleData?.data?.[0]?.events_title_title || ""}
            </h2>
            <p>{eventsTitleData?.data?.[0]?.events_title_subtitle_b || ""}</p>
          </div>
          <div className="wrapper mb-24">
            <div className="grid grid-cols-1 md:grid-cols-[_2fr_1fr] md:grid-rows-2 gap-4 order-2  mb-12 lg:mb-0">
              {eventsAndActivitiesData?.data
                .filter((post) => post.events_activities_is_active === 1)
                .slice(0, 3)
                .map((post, key) => {
                  const eventImage =
                    getConvertStringToJSONparseData(
                      post.events_activities_img
                    ) || [];
                  const firstImage =
                    eventImage.length > 0 ? eventImage[0] : null;
                  return (
                    <div key={key} className="postItem">
                      <Link
                        to={`${devNavUrl}/events-and-activities/${post.events_activities_slug}`}
                      >
                        {firstImage && (
                          <div
                            style={{
                              // backgroundImage: `url(${devBaseImgUrl}/home-bg-new.jpg)`,
                              backgroundImage: `url(${googleHDViewLink}${firstImage.id})`,
                            }}
                            className={`blogItem bg-center bg-cover md:h-full flex items-end relative rounded-xl grayscale hover:grayscale-0 transition-all group cursor-pointer h-[267px]`}
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
                            <div className="bottomGradient bg-gradient-to-t from-[#000] !to-[transparent] h-[200px] md:h-[200px] w-full absolute bottom-0 block rounded-bl-xl rounded-br-xl"></div>
                          </div>
                        )}
                      </Link>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
        <div className="customContainer my-4 max-w-[90%]">
          {eventsAndActivitiesData?.data.filter(
            (post) => post.events_activities_is_active === 1
          ).length > 3 && (
            <h2 className="text-3xl font-semibold text-primary mb-8">
              See More
            </h2>
          )}
          {eventsAndActivitiesData?.data.filter(
            (post) => post.events_activities_is_active === 1
          ).length > 6 ? (
            <Slider {...EventsSliderSettings}>
              {eventsAndActivitiesData?.data
                .filter((post) => post.events_activities_is_active === 1)
                .map((post, key) => {
                  if (key <= 2) return null;

                  const eventImage =
                    getConvertStringToJSONparseData(
                      post.events_activities_img
                    ) || [];
                  const firstImage =
                    eventImage.length > 0 ? eventImage[0] : null;

                  return (
                    <div
                      key={key}
                      className="flex flex-wrap gap-2 place-content-center"
                    >
                      <div className="grid place-content-center">
                        <Link
                          to={`${devNavUrl}/events-and-activities/${post.events_activities_slug}`}
                        >
                          {firstImage && (
                            <div
                              style={{
                                backgroundImage: `url(${googleHDViewLink}${firstImage.id})`,
                              }}
                              className="blogItem lcssAlbums addShadow bg-center bg-cover h-[400px] w-[270px] md:w-[340px] lg:w-[390px] flex items-end relative rounded-xl 
                    grayscale hover:grayscale-0 transition-all group cursor-pointer"
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
                              <div className="bottomGradient bg-gradient-to-t from-[#000] !to-[transparent] h-[200px] md:h-[300px] w-full absolute bottom-0 block rounded-bl-xl rounded-br-xl"></div>
                            </div>
                          )}
                        </Link>
                      </div>
                    </div>
                  );
                })}
            </Slider>
          ) : (
            <div className="gap-4 flex flex-col place-self-center md:flex md:flex-wrap lg:flex md:flex-row lg:gap-4 md:place-content-center">
              {eventsAndActivitiesData?.data
                .filter((post) => post.events_activities_is_active === 1)
                .slice(3)
                .map((post, key) => {
                  const eventImage =
                    getConvertStringToJSONparseData(
                      post.events_activities_img
                    ) || [];
                  const firstImage =
                    eventImage.length > 0 ? eventImage[0] : null;
                  return (
                    <div key={key} className=" h-[267px] md:h-[350px]">
                      <Link
                        to={`${devNavUrl}/events-and-activities/${post.events_activities_slug}`}
                      >
                        {firstImage && (
                          <div
                            style={{
                              backgroundImage: `url(${googleHDViewLink}${firstImage.id})`,
                            }}
                            className="blogItem addShadow bg-center bg-cover h-[400px] 
                              min-w-[280px] max-w-[280px] md:min-w-[350px] md:max-w-[350px] flex items-end relative rounded-xl 
                              grayscale hover:grayscale-0 transition-all group cursor-pointer "
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
                            <div className="bottomGradient bg-gradient-to-t from-[#000] !to-[transparent] h-[200px] md:h-[300px] w-full absolute bottom-0 block rounded-bl-xl rounded-br-xl"></div>
                          </div>
                        )}
                      </Link>
                    </div>
                  );
                })}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EventsAndAct;
