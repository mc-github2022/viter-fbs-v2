import { default as React, useEffect } from "react";
import { LuTag } from "react-icons/lu";
import { MdOutlineCalendarToday } from "react-icons/md";
import { Link, useParams } from "react-router-dom";
import Footer from "../../../partials/Footer";
import Header from "../../../partials/Header";
import { eventsAndAct } from "./data";
import useQueryData from "../../../custom-hooks/useQueryData";
import {
  devBaseImgUrl,
  devNavUrl,
  formatDate,
} from "../../../helpers/functions-general";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Slider from "react-slick/lib/slider";
import EventsSliderPage from "./EventsSliderPage";

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

const EventsSingplePage = () => {
  const [isEventsImg, setIsEventsImg] = React.useState(false);
  const [itemEdit, setItemEdit] = React.useState(null);

  const handleEventImg = (post) => {
    setIsEventsImg(true);
    setItemEdit(post.events_activities_aid);
    document.body.classList.toggle("overflow-hidden");
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

  var SinglePageSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
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
        breakpoint: 1530,
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

  React.useEffect(() => {
    window.scrollTo(0, 0);
  });

  const { slug } = useParams();

  const [html, setHtml] = React.useState("");
  // Initial useEffect to set default html if eventsAndActivitiesData is available
  useEffect(() => {
    if (eventsAndActivitiesData?.data.length > 0) {
      setHtml(eventsAndActivitiesData?.data[0].events_activities_description);
    }
  }, [eventsAndActivitiesData]);

  // Update html based on slug and eventsAndActivitiesData
  useEffect(() => {
    if (!eventsAndActivitiesData) return; // Early return if eventsAndActivitiesData is not yet available

    const matchingInsight = eventsAndActivitiesData.data.find(
      (item) =>
        item.events_activities_slug?.trim().toLowerCase() ===
        slug?.trim().toLowerCase()
    );

    if (matchingInsight) {
      setHtml(matchingInsight.events_activities_description);
    } else {
      setHtml(""); // Clear HTML if no match is found
    }
  }, [slug, eventsAndActivitiesData]);

  // Function to get the post based on slug
  const getEventsAndAct = () => {
    if (
      !eventsAndActivitiesData ||
      !Array.isArray(eventsAndActivitiesData.data)
    ) {
      return undefined;
    }
    return eventsAndActivitiesData.data.find(
      (item) =>
        item.events_activities_slug?.trim().toLowerCase() ===
        slug?.trim().toLowerCase()
    );
  };

  const post = getEventsAndAct();

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />
      <section className="singlePost pt-20 md:pt-40 mb-20">
        <div className="customContainer">
          <div className="theTitle">
            <h2 className="text-dark text-[clamp(30px,5vw,40px)] lg:w-[70%] leading-[1.3] mb-4 font-semibold">
              {post.events_activities_title}
            </h2>
          </div>
          <ul className="postInfo">
            <li className="flex items-center gap-2">
              <LuTag className="text-primary" />
              <p>{post.events_activities_category}</p>
            </li>
            <li className="flex items-center gap-2">
              <MdOutlineCalendarToday className="text-primary" />
              <p>{formatDate(post.events_activities_date)}</p>
            </li>
          </ul>
          <div className="wrapper lg:grid lg:grid-cols-[_3fr_1fr] mt-12 gap-8">
            <div className="postContent lg:max-w-[940px]">
              <img
                src={`${devBaseImgUrl}/${post.events_activities_img}`}
                alt=""
                className="rounded-lg object-cover mb-8 w-full max-h-[500px] object-center"
              />
              <div dangerouslySetInnerHTML={{ __html: html }}></div>
              <div className=" mx-auto my-4 max-w-[90%]">
                {eventsAndActivitiesData?.data.length > 3 ? (
                  <Slider {...SinglePageSettings}>
                    {eventsAndActivitiesData?.data.map((post, key) => {
                      if (key <= 2) return null;
                      return (
                        <div key={key} className="">
                          <a onClick={() => handleEventImg(post)}>
                            <div
                              style={{
                                backgroundImage: `url(${devBaseImgUrl}/${post.events_activities_img})`,
                              }}
                              className="blogItem addShadow bg-center bg-cover h-[400px] w-[270px] md:w-[330px] sm:w-[320px] flex items-end relative rounded-xl 
                            grayscale hover:grayscale-0 transition-all group cursor-pointer place-self-center"
                            >
                              <div className="bottomGradient bg-gradient-to-t from-[#000] !to-[transparent] h-[200px] md:h-[300px] w-full absolute bottom-0 block rounded-bl-xl rounded-br-xl"></div>
                            </div>
                          </a>
                        </div>
                      );
                    })}
                  </Slider>
                ) : (
                  <div className="gap-4 flex flex-col place-self-center md:flex md:flex-wrap lg:flex md:flex-row lg:gap-4 md:place-content-center">
                    {eventsAndActivitiesData?.data.map((post, key) => {
                      if (key <= 2) return null;
                      return (
                        <div key={key} className=" h-[267px] md:h-[350px]">
                          <a onClick={() => handleEventImg(post)}>
                            <div
                              style={{
                                backgroundImage: `url(${devBaseImgUrl}/${post.events_activities_img})`,
                              }}
                              className="blogItem bg-center bg-cover h-[267px] md:max-w-[418px] md:min-w-[418px] md:h-[350px] flex items-end relative rounded-xl grayscale hover:grayscale-0 transition-all group cursor-pointer"
                            >
                              <div className="bottomGradient bg-gradient-to-t from-[#000] !to-[transparent] h-[200px] md:h-[300px] w-full absolute bottom-0 block rounded-bl-xl rounded-br-xl"></div>
                            </div>
                          </a>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
            <div className="order-1 mt-6 lg:mt-0">
              <div className="mb-12">
                <h3 className="text-2xl font-semibold mb-10 text-dark">
                  Recent Activities
                </h3>
                <div className="popularPostLinks [&>ul>li]:flex [&>ul>li]:items-center [&>ul>li]:gap-4">
                  <ul className="[&>li]:my-8">
                    {eventsAndActivitiesData?.data
                      .filter(
                        (popPost) =>
                          popPost.events_activities_slug !==
                          post.events_activities_slug
                      )
                      .slice(0, 5)
                      .map((popPost, key) => (
                        <div key={key}>
                          <li className="my-5">
                            <Link
                              to={`${devNavUrl}/events-and-activities/${popPost.events_activities_slug}`}
                            >
                              <div className="flex items-center gap-4">
                                <div className="min-w-[100px] max-w-[100px] h-[80px]">
                                  <img
                                    src={`${devBaseImgUrl}/${popPost.events_activities_img}`}
                                    alt=""
                                    className="min-w-[100px] max-w-[100px] h-[80px] rounded-lg object-cover"
                                  />
                                </div>
                                <div>
                                  <p>{popPost.events_activities_title}</p>
                                </div>
                              </div>
                            </Link>
                          </li>
                        </div>
                      ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {isEventsImg && (
        <EventsSliderPage setIsEventsImg={setIsEventsImg} itemEdit={itemEdit} />
      )}
      <Footer />
    </>
  );
};

export default EventsSingplePage;
