import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import Slider from "react-slick/lib/slider";
import useQueryData from "../../../custom-hooks/useQueryData";
import {
  apiVersion,
  devNavUrl,
  formatDate,
  getConvertStringToJSONparseData,
  googleHDViewLink,
} from "../../../helpers/functions-general";
import Footer from "../../../partials/Footer";
import Header from "../../../partials/Header";
import BannerSliderLoader from "../home/bannerSliderLoader";
import LoadImages from "../../../partials/LoadImages";
import { useInfiniteQuery } from "@tanstack/react-query";
import { queryDataInfinite } from "../../../helpers/queryDataInfinite";
import ButtonSpinner from "../../../partials/spinners/ButtonSpinner";

// function SampleNextArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       style={{
//         background: "#ac1e72",
//         position: "absolute",
//         color: "white",
//         top: "50%",
//         right: "-6%",
//         fontSize: "3rem",
//         cursor: "pointer",
//         borderRadius: "100%",
//         width: "48px",
//         height: "48px",
//         display: "grid",
//         placeItems: "center",
//       }}
//       onClick={onClick}
//     >
//       <IoIosArrowForward className="text-3xl" />
//     </div>
//   );
// }

// function SamplePrevArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       style={{
//         position: "absolute",
//         background: "#ac1e72",
//         color: "white",
//         top: "50%",
//         left: "-6%",
//         fontSize: "3rem",
//         zIndex: "1",
//         cursor: "pointer",
//         borderRadius: "100%",
//         width: "48px",
//         height: "48px",
//         display: "grid",
//         placeItems: "center",
//       }}
//       onClick={onClick}
//     >
//       <IoIosArrowBack className="text-3xl" />
//     </div>
//   );
// }

const EventsAndAct = () => {
  const [pageName, setPageName] = React.useState("events&Activities");
  const [page, setPage] = React.useState(1);

  // React.useEffect(() => {
  //   window.scrollTo(0, 0);
  // });

  const {
    data: result,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ["eventsAndAct"],
    queryFn: async ({ pageParam = 1 }) =>
      await queryDataInfinite(
        `${apiVersion}/eventsAndAct/search`, // search endpoint
        `${apiVersion}/eventsAndAct/page/${pageParam}` // list endpoint
      ),
    getNextPageParam: (lastPage) => {
      const nextOffset = lastPage.page + lastPage.count;
      return nextOffset < lastPage.total ? nextOffset : undefined;
    },
    refetchOnWindowFocus: false,
  });

  // const {
  //   isFetching,
  //   error,
  //   isLoading,
  //   status,
  //   data: eventsAndActivitiesData,
  // } = useQueryData(
  //   "/v1/eventsAndAct", // endpoint
  //   "get", // method
  //   "eventsAndAct" // key
  // );

  const { data: eventsTitleData } = useQueryData(
    `${apiVersion}/events-title`, // endpoint
    "get", // method
    "events-title" // key
  );

  // var EventsSliderSettings = {
  //   dots: false,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   dotsClass: "slickNav slick-dots",
  //   nextArrow: <SampleNextArrow />,
  //   prevArrow: <SamplePrevArrow />,
  //   appendDots: (dots) => (
  //     <div
  //       style={{
  //         borderRadius: "10px",
  //         padding: "10px",
  //         bottom: "-5rem",
  //       }}
  //     >
  //       <ul style={{ margin: "0px" }}> {dots} </ul>
  //     </div>
  //   ),
  //   customPaging: (i) => (
  //     <div
  //       style={{
  //         width: "20px",
  //         height: "20px",
  //         color: "blue",
  //         background: "gray",
  //         borderRadius: "50%",
  //         opacity: "50%",
  //       }}
  //     ></div>
  //   ),
  //   responsive: [
  //     {
  //       breakpoint: 1230,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1,
  //         arrows: true,
  //       },
  //     },
  //     {
  //       breakpoint: 850,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //         arrows: true,
  //       },
  //     },
  //   ],
  // };
  return (
    <>
      <Header pageName={pageName} services={"default"} page={"Home"} />
      {/* <div className="EventsAndAct pt-28 pb-16 md:pt-40 md:pb-20">
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
                              className="blogItem lcssAlbums addShadow bg-center bg-cover h-[400px] w-[270px] md:w-[320px] lg:w-[330px] xl:w-[350px] 2xl:w-[390px] flex items-end relative rounded-xl 
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
      </div> */}

      <div className="customContainer pt-20 md:pt-40 mb-20">
        {isFetching ? (
          <div className="w-full relative ">
            <div className="pb-5 flex flex-col gap-5 ">
              <div className="pb-5 flex flex-col ">
                <BannerSliderLoader
                  cols={1}
                  count={1}
                  className={"h-4 min-w-[200px] lg:max-w-96 rounded-xl "}
                />
                <BannerSliderLoader
                  cols={1}
                  count={1}
                  className={"h-7 min-w-[300px] lg:max-w-[350px] rounded-xl "}
                />
                <BannerSliderLoader
                  cols={1}
                  count={1}
                  className={"h-4 min-w-[400px] lg:max-w-[500px] rounded-xl "}
                />
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <BannerSliderLoader
                  cols={1}
                  count={1}
                  classNameGrid={"gap-6"}
                  className={
                    "h-[180px] rounded-xl min-w-[200px] lg:min-w-[300px] gap-6"
                  }
                />
                <div className="flex flex-col gap-2">
                  <BannerSliderLoader
                    cols={1}
                    count={1}
                    classNameGrid={"gap-6"}
                    className={"h-6 rounded-xl min-w-[200px] lg:min-w-[600px] "}
                  />
                  <BannerSliderLoader
                    cols={1}
                    count={1}
                    classNameGrid={"gap-6"}
                    className={"h-6 rounded-xl min-w-[200px] lg:max-w-[300px] "}
                  />
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <BannerSliderLoader
                  cols={1}
                  count={1}
                  classNameGrid={"gap-6"}
                  className={
                    "h-[180px] rounded-xl min-w-[200px] lg:min-w-[300px] gap-6"
                  }
                />
                <div className="flex flex-col gap-2">
                  <BannerSliderLoader
                    cols={1}
                    count={1}
                    classNameGrid={"gap-6"}
                    className={"h-6 rounded-xl min-w-[200px] lg:min-w-[600px] "}
                  />
                  <BannerSliderLoader
                    cols={1}
                    count={1}
                    classNameGrid={"gap-6"}
                    className={"h-6 rounded-xl min-w-[200px] lg:max-w-[300px] "}
                  />
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <BannerSliderLoader
                  cols={1}
                  count={1}
                  classNameGrid={"gap-6"}
                  className={
                    "h-[180px] rounded-xl min-w-[200px] lg:min-w-[300px] gap-6"
                  }
                />
                <div className="flex flex-col gap-2">
                  <BannerSliderLoader
                    cols={1}
                    count={1}
                    classNameGrid={"gap-6"}
                    className={"h-6 rounded-xl min-w-[200px] lg:min-w-[600px] "}
                  />
                  <BannerSliderLoader
                    cols={1}
                    count={1}
                    classNameGrid={"gap-6"}
                    className={"h-6 rounded-xl min-w-[200px] lg:max-w-[300px] "}
                  />
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <BannerSliderLoader
                  cols={1}
                  count={1}
                  classNameGrid={"gap-6"}
                  className={
                    "h-[180px] rounded-xl min-w-[200px] lg:min-w-[300px] gap-6"
                  }
                />
                <div className="flex flex-col gap-2">
                  <BannerSliderLoader
                    cols={1}
                    count={1}
                    classNameGrid={"gap-6"}
                    className={"h-6 rounded-xl min-w-[200px] lg:min-w-[600px] "}
                  />
                  <BannerSliderLoader
                    cols={1}
                    count={1}
                    classNameGrid={"gap-6"}
                    className={"h-6 rounded-xl min-w-[200px] lg:max-w-[300px] "}
                  />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row justify-between">
            <div className="mb-12">
              <div className="theTitle mb-20">
                <p>
                  {eventsTitleData?.data?.[0]?.events_title_subtitle_a || ""}
                </p>
                <h2 className="text-[clamp(20px,7vw,30px)] font-semibold text-primary">
                  {eventsTitleData?.data?.[0]?.events_title_title || ""}
                </h2>
                <p>
                  {eventsTitleData?.data?.[0]?.events_title_subtitle_b || ""}
                </p>
              </div>
              <div className="popularPostLinks lg:w-[80%]">
                <ul className="[&>li]:my-8">
                  {result?.pages.map((page, key) => (
                    <React.Fragment key={key}>
                      {page?.data
                        .filter(
                          (post) => post.events_activities_is_active === 1
                        )
                        .map((post, key) => {
                          const eventImage =
                            getConvertStringToJSONparseData(
                              post.events_activities_img
                            ) || [];
                          return (
                            <div key={key}>
                              <li className="my-5">
                                <Link
                                  to={`${devNavUrl}/events-and-activities/${post.events_activities_slug}?id=${post.events_activities_aid}`}
                                >
                                  <div className="flex flex-col md:flex-row gap-4">
                                    <div className="min-w-[300px] max-w-[300px] h-[180px]">
                                      {eventImage.map((image, index) => (
                                        <LoadImages
                                          url={`${googleHDViewLink}${image?.id}`}
                                          alt={`${post.events_activities_title}`}
                                          className="min-w-[300px] max-w-[300px] h-[180px] rounded-lg object-cover"
                                          key={index}
                                        />
                                      ))}
                                    </div>
                                    <div className="flex flex-col gap-2">
                                      <p className="line-clamp-3 font-bold">
                                        {post.events_activities_title}
                                      </p>
                                      <p>
                                        {formatDate(
                                          post.events_activities_date
                                        )}
                                      </p>
                                    </div>
                                  </div>
                                </Link>
                              </li>
                            </div>
                          );
                        })}
                    </React.Fragment>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
        <div className="mb-10">
          {hasNextPage ? (
            <button
              type="button"
              disabled={isFetchingNextPage}
              onClick={() => {
                setPage((prev) => prev + 1);
                fetchNextPage();
              }}
              className="text-sm uppercase font-poppins underline hover:text-primary"
            >
              {isFetchingNextPage ? <ButtonSpinner /> : <span>Load more</span>}
            </button>
          ) : (
            <p className="text-sm uppercase font-poppins text-gray-500">
              No More Events & Activities
            </p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EventsAndAct;
