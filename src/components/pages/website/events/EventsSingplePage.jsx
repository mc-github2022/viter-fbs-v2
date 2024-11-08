import { default as React, useEffect } from "react";
import { LuTag } from "react-icons/lu";
import { MdOutlineCalendarToday } from "react-icons/md";
import { Link, useParams } from "react-router-dom";
import Footer from "../../../partials/Footer";
import Header from "../../../partials/Header";
import { eventsAndAct } from "./data";
import useQueryData from "../../../custom-hooks/useQueryData";
import { devBaseImgUrl, formatDate } from "../../../helpers/functions-general";

const EventsSingplePage = () => {
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
    return <div>Post not found</div>;
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
            <div className="postContent">
              <img
                src={`${devBaseImgUrl}/${post.events_activities_img}`}
                alt=""
                className="rounded-lg object-cover mb-8 w-full max-h-[500px] object-center"
              />
              <div dangerouslySetInnerHTML={{ __html: html }}></div>
            </div>
            <div className="order-1 mt-6 lg:mt-0">
              <div className="mb-12">
                <h3 className="text-2xl font-semibold mb-10 text-dark">
                  Recent Activities
                </h3>
                <div className="popularPostLinks [&>ul>li]:flex [&>ul>li]:items-center [&>ul>li]:gap-4">
                  <ul className="[&>li]:my-8">
                    {eventsAndActivitiesData?.data.map((popPost, key) => {
                      return (
                        <div key={key}>
                          <li className="my-5">
                            <Link
                              to={`/events-and-activities/${popPost.events_activities_slug}`}
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
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default EventsSingplePage;
