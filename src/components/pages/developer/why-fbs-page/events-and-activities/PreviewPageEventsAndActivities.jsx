import { default as React, useEffect } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { LuTag } from "react-icons/lu";
import { MdOutlineCalendarToday } from "react-icons/md";
import { Link, useParams } from "react-router-dom";
import Slider from "react-slick/lib/slider";
import useQueryData from "../../../../custom-hooks/useQueryData";
import {
  devBaseImgUrl,
  devNavUrl,
  formatDate,
  getConvertStringToJSONparseData,
  googleHDViewLink,
} from "../../../../helpers/functions-general";
import Footer from "../../../../partials/Footer";

import Header from "../../../../partials/Header";
import EventsSliderPage from "../../../website/events/EventsSliderPage";
import LoadImages from "../../../../partials/LoadImages";

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

const PreviewPageEventsAndActivities = () => {
  const [isEventsImg, setIsEventsImg] = React.useState(false);
  const [selectedImage, setSelectedImage] = React.useState(null);

  const handleEventImg = (post, index) => {
    setIsEventsImg(true);
    setSelectedImage({ id: post.events_activities_aid, index });
    document.body.classList.toggle("overflow-hidden");
  };

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
        breakpoint: 1300,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        },
      },
    ],
  };

  const { slug } = useParams();

  const [html, setHtml] = React.useState("");
  // Initial useEffect to set default html if eventsAndActivitiesData is available
  const [images, setImages] = React.useState([]);

  useEffect(() => {
    if (eventsAndActivitiesData?.data.length > 0) {
      const matchingInsight = eventsAndActivitiesData.data.find(
        (item) =>
          item.events_activities_slug?.trim().toLowerCase() ===
          slug?.trim().toLowerCase()
      );
      setHtml(matchingInsight?.home_insights_paragraph_a || "");
    }
  }, [slug, eventsAndActivitiesData]);

  useEffect(() => {
    if (!eventsAndActivitiesData) return;

    const matchingInsight = eventsAndActivitiesData.data.find(
      (item) =>
        item.events_activities_slug?.trim().toLowerCase() ===
        slug?.trim().toLowerCase()
    );

    if (matchingInsight) {
      setHtml(matchingInsight.events_activities_description);

      //   // Extract and split the images list into an array
      //   const imgList = matchingInsight.events_activities_img_list
      //     ?.split(",")
      //     .map((img) => img.trim())
      //     .filter(Boolean); // Remove empty strings
      //   setImages(imgList || []);
      // } else {
      //   setHtml("");
      //   setImages([]);
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

  const eventImageList = post?.events_activities_img_list
    ? getConvertStringToJSONparseData(post.events_activities_img_list)
    : [];

  const eventImage = post?.events_activities_img
    ? getConvertStringToJSONparseData(post.events_activities_img)
    : [];

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
            <div className="postContent lg:min-w-[700px] lg:max-w-[890px] xl:max-w-[940px] relative">
              {eventImage.map((image, index) => (
                <LoadImages
                  url={`${googleHDViewLink}${image?.id}`}
                  alt=""
                  key={index}
                  className="rounded-lg object-cover mb-8 w-full max-h-[500px] object-center"
                />
              ))}
              <div dangerouslySetInnerHTML={{ __html: html }}></div>
              <div className="mx-auto my-4 max-w-[90%]">
                {eventImageList.length > 1 ? (
                  <Slider {...SinglePageSettings}>
                    {eventImageList.map((image, index) => (
                      <div key={index}>
                        <a onClick={() => handleEventImg(post, index)}>
                          <div
                            style={{
                              backgroundImage: `url(${googleHDViewLink}${image?.id})`,
                            }}
                            className="blogItem bg-center bg-cover h-[400px] w-[270px] md:w-[500px] sm:w-[320px] flex items-end relative rounded-xl 
               hover:grayscale-0 transition-all group cursor-pointer place-self-center"
                          >
                            {/* <div className="bottomGradient bg-gradient-to-t from-[#000] !to-[transparent] h-[200px] md:h-[300px] w-full absolute bottom-0 block rounded-bl-xl rounded-br-xl"></div> */}
                          </div>
                        </a>
                      </div>
                    ))}
                  </Slider>
                ) : eventImageList.length === 1 ? (
                  <a onClick={() => handleEventImg(post, 0)}>
                    <div
                      className=" h-[330px] w-[450px]
              grayscale hover:grayscale-0 transition-all group cursor-pointer place-self-center relative rounded-xl"
                    >
                      <LoadImages
                        url={`${googleHDViewLink}${eventImageList[0].id}`}
                        alt="Successful, Industry-Ready Batches."
                      />
                    </div>
                  </a>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="order-1 mt-6 lg:mt-0">
              <div className="mb-12">
                <h3 className="text-2xl font-semibold md:my-10 lg:mb-10 lg:my-0 text-dark">
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
                      .map((popPost, key) => {
                        const eventImageRecent =
                          getConvertStringToJSONparseData(
                            popPost.events_activities_img
                          ) || [];
                        return (
                          <div key={key}>
                            <li className="my-5">
                              <Link
                                to={`${devNavUrl}/events-and-activities/${popPost.events_activities_slug}`}
                              >
                                <div className="flex items-center gap-4">
                                  <div className="min-w-[100px] max-w-[100px] h-[80px]">
                                    {eventImageRecent.map((image, index) => (
                                      <img
                                        src={`${googleHDViewLink}${image?.id}`}
                                        key={index}
                                        alt=""
                                        className="min-w-[100px] max-w-[100px] h-[80px] rounded-lg object-cover"
                                      />
                                    ))}
                                  </div>
                                  <div>
                                    <p>{popPost.events_activities_title}</p>
                                  </div>
                                </div>
                              </Link>
                            </li>
                          </div>
                        );
                      })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {isEventsImg && (
        <EventsSliderPage
          setIsEventsImg={setIsEventsImg}
          selectedImage={selectedImage}
        />
      )}
      <Footer />
    </>
  );
};

export default PreviewPageEventsAndActivities;
