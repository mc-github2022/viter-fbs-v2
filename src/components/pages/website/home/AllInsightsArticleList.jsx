import React from "react";
import { BiSolidRightArrow } from "react-icons/bi";
import { Link, useParams } from "react-router-dom";
import useQueryData from "../../../custom-hooks/useQueryData";
import {
  devNavUrl,
  getConvertStringToJSONparseData,
  googleHDViewLink,
} from "../../../helpers/functions-general";
import Footer from "../../../partials/Footer";
import Header from "../../../partials/Header";
import LoadImages from "../../../partials/LoadImages";
import BannerSliderLoader from "./bannerSliderLoader";

const AllInsightsArticleList = () => {
  const {
    isFetching,
    error,
    isLoading,
    status,
    data: insightData,
  } = useQueryData(`/v1/insights`, "get", "insights", {}, null, false);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { slug } = useParams();

  const [html, setHtml] = React.useState("");
  // Initial useEffect to set default html if insightData is available
  React.useEffect(() => {
    if (insightData?.data.length > 0) {
      setHtml(insightData?.data[0].home_insights_paragraph_a);
    }
  }, [insightData]);

  // Update html based on slug and insightData
  React.useEffect(() => {
    if (!insightData) return; // Early return if insightData is not yet available

    const matchingInsight = insightData.data.find(
      (item) =>
        item.home_insights_slug?.trim().toLowerCase() ===
        slug?.trim().toLowerCase()
    );

    if (matchingInsight) {
      setHtml(matchingInsight.home_insights_paragraph_a);
    } else {
      setHtml(""); // Clear HTML if no match is found
    }
  }, [slug, insightData]);

  // Function to get the post based on slug
  const getInsights = () => {
    if (!insightData || !Array.isArray(insightData.data)) {
      return undefined;
    }
    return insightData.data.find(
      (item) =>
        item.home_insights_slug?.trim().toLowerCase() ===
        slug?.trim().toLowerCase()
    );
  };

  const post = insightData?.data?.find(
    (item) =>
      item.home_insights_slug?.trim().toLowerCase() ===
      slug?.trim().toLowerCase()
  );

  return (
    <>
      <Header services={"default"} page={"Home"} />
      <div className="customContainer pt-20 md:pt-40 mb-20">
        {isLoading || isFetching ? (
          <div className="w-full relative ">
            <div className="pb-5 flex flex-col gap-5 ">
              <BannerSliderLoader
                cols={2}
                count={1}
                className={"h-7 max-w-96 rounded-xl "}
              />

              <BannerSliderLoader
                cols={2}
                count={20}
                classNameGrid={"gap-6"}
                className={"h-10 rounded-xl w-[100px] gap-6"}
              />
            </div>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row justify-between">
            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-10 text-dark">
                All Insight Posts
              </h3>
              <div className="popularPostLinks lg:w-[80%]">
                <ul className="[&>li]:my-8">
                  {insightData?.data
                    .filter(
                      (popPost) =>
                        popPost &&
                        popPost.home_insights_slug &&
                        popPost.home_insights_is_active === 1 &&
                        popPost.home_insights_slug !== post?.home_insights_slug
                    )
                    .map((popPost, key) => {
                      const insightsImages =
                        getConvertStringToJSONparseData(
                          popPost.home_insights_img
                        ) || [];
                      return (
                        <div key={key}>
                          <li className="my-5">
                            <Link
                              to={`${devNavUrl}/insight/${popPost.home_insights_slug}?id=${popPost.home_insights_aid}`}
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
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-10 text-dark">
                Categories
              </h3>
              <ul className="lg:w-[300px] ">
                {insightData?.data
                  .map((cat) => cat.home_insights_category)
                  .filter((value, index, self) => self.indexOf(value) === index)
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
        )}
      </div>
      <Footer />
    </>
  );
};

export default AllInsightsArticleList;
