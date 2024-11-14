import { default as React, useEffect } from "react";
import { BiSolidRightArrow } from "react-icons/bi";
import { LuTag } from "react-icons/lu";
import { MdOutlineCalendarToday } from "react-icons/md";
import { Link, useParams } from "react-router-dom";
import Footer from "../../../partials/Footer";
import Header from "../../../partials/Header";
import { insight } from "../home/data";
import useQueryData from "../../../custom-hooks/useQueryData";
import {
  devBaseImgUrl,
  devNavUrl,
  formatDate,
} from "../../../helpers/functions-general";

const PostByCategory = () => {
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
  console.log(insightData);
  React.useEffect(() => {
    window.scrollTo(0, 0);
  });

  const { slug } = useParams();

  const [html, setHtml] = React.useState("");
  // Initial useEffect to set default html if insightData is available
  useEffect(() => {
    if (insightData?.data.length > 0) {
      setHtml(insightData?.data[0].home_insights_paragraph_a);
    }
  }, [insightData]);

  // Update html based on slug and insightData
  useEffect(() => {
    if (!insightData) return; // Early return if insightData is not yet available

    const matchingInsight = insightData.data.find(
      (item) =>
        item.home_insights_category?.trim().toLowerCase() ===
        slug?.trim().toLowerCase()
    );

    if (matchingInsight) {
      setHtml(matchingInsight.home_insights_paragraph_a);
    } else {
      setHtml(""); // Clear HTML if no match is found
    }
  }, [slug, insightData]);

  // // Function to get the post based on slug
  // const getInsights = () => {
  //   if (!insightData || !Array.isArray(insightData.data)) {
  //     return undefined;
  //   }
  //   return insightData.data.find(
  //     (item) =>
  //       item.home_insights_category?.trim().toLowerCase() ===
  //       slug?.trim().toLowerCase()
  //   );
  // };

  // Function to get the posts based on the category slug
  const getInsights = () => {
    if (!insightData || !Array.isArray(insightData.data)) {
      return [];
    }
    return insightData.data.filter(
      (item) =>
        item.home_insights_category?.trim().toLowerCase() ===
        slug?.trim().toLowerCase()
    );
  };

  const posts = getInsights();

  if (posts.length === 0) {
    return <div>No posts found for this category</div>;
  }

  return (
    <>
      <Header />
      <section className="singlePost pt-20 md:pt-40 mb-20">
        <div className="customContainer">
          <div>
            {posts.map((post, index) => (
              <div key={index}>
                <div className="theTitle">
                  <h2 className="text-dark text-[clamp(30px,5vw,40px)] lg:w-[70%] leading-[1.3] mb-4 font-semibold">
                    {post.home_insights_title}
                  </h2>
                </div>
                <ul className="postInfo">
                  <li className="flex items-center gap-2">
                    <LuTag className="text-primary" />
                    <p>{post.home_insights_category}</p>
                  </li>
                  <li className="flex items-center gap-2">
                    <MdOutlineCalendarToday className="text-primary" />
                    <p>{formatDate(post.home_insights_date)}</p>
                  </li>
                </ul>
                <div className="wrapper lg:grid lg:grid-cols-[_3fr_1fr] gap-8 mt-12">
                  <div className="postContent">
                    <img
                      src={`${devBaseImgUrl}/${post.home_insights_img}`}
                      alt=""
                      className="rounded-lg object-cover mb-8 w-full max-h-[500px] object-center"
                    />
                    <div
                      dangerouslySetInnerHTML={{
                        __html: post.home_insights_paragraph_a,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default PostByCategory;
