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
  getConvertStringToJSONparseData,
  googleHDViewLink,
} from "../../../helpers/functions-general";
import LoadImages from "../../../partials/LoadImages";

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
    "insights", // key
    {},
    null,
    true
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
    return "";
  }

  function TruncatedHtml({ content, maxLength }) {
    const truncatedContent = content.substring(0, 250) + "...";
    return (
      <div
        className="mb-4"
        dangerouslySetInnerHTML={{ __html: truncatedContent }}
      />
    );
  }

  return (
    <>
      <Header services={"default"}
                page={"Home"}/>
      <section className="singlePost pt-20 md:pt-40 mb-20">
        <div className="customContainer">
          <h4 className="text-lg mb-8">
            Category &gt; {posts[0].home_insights_category}
          </h4>
          <div className="wrapper grid lg:grid-cols-[_2.5fr_1fr] gap-20">
            <div>
              {posts.map((post, index) => (
                <div key={index} className="mb-8">
                  <div className="theTitle">
                    <h2 className="text-dark text-[clamp(30px,5vw,32px)] lg:w-[70%] leading-[1.3] mb-4 font-semibold">
                      {post.home_insights_title}
                    </h2>
                  </div>
                  <div>
                    <TruncatedHtml content={post.home_insights_paragraph_a} />
                    <Link
                      className="text-primary"
                      to={`${devNavUrl}/insight/${post.home_insights_slug}`}
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <div className="order-1 mt-6 md:mt-0">
              <div className="mb-12">
                <h3 className="text-2xl font-semibold mb-10 text-dark">
                  Recent Posts
                </h3>
                <div className="popularPostLinks">
                  <ul className="[&>li]:my-8">
                    {insightData?.data
                      .filter(
                        (popPost) =>
                          popPost.home_insights_slug !==
                            posts.home_insights_slug &&
                          popPost.home_insights_is_active === 1
                      )
                      .slice(0, 5)
                      .map((popPost, key) => {
                        const insightsImages =
                          getConvertStringToJSONparseData(
                            popPost.home_insights_img
                          ) || [];
                        return (
                          <div key={key}>
                            <li className="my-5">
                              <Link
                                to={`${devNavUrl}/insight/${popPost.home_insights_slug}`}
                              >
                                <div className="flex items-center gap-4">
                                  <div className="min-w-[100px] max-w-[100px] h-[80px]">
                                    {insightsImages.map((image, index) => (
                                      <LoadImages
                                        url={`${googleHDViewLink}${image?.id}`}
                                        alt={`${popPost.home_insights_title}`}
                                        className="min-w-[100px] max-w-[100px] h-[80px] rounded-lg object-cover"
                                        key={index}
                                      />
                                    ))}
                                  </div>
                                  <div>
                                    <p className="line-clamp-3">
                                      {popPost.home_insights_title}
                                    </p>
                                  </div>
                                </div>
                              </Link>
                            </li>
                          </div>
                        );
                      })}
                  </ul>
                  <hr />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-10 text-dark">
                  Categories
                </h3>
                <ul>
                  {insightData?.data
                    .map((cat) => cat.home_insights_category)
                    .filter(
                      (value, index, self) => self.indexOf(value) === index
                    )
                    .map((uniqueCategory, key) => {
                      return (
                        <div key={key}>
                          <Link
                            to={`${devNavUrl}/post-by-category/${uniqueCategory}`}
                          >
                            <li className="flex items-center gap-2 mb-3">
                              <BiSolidRightArrow className="text-primary" />
                              {uniqueCategory}
                            </li>
                          </Link>
                        </div>
                      );
                    })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default PostByCategory;
