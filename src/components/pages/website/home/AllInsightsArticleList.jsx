import { useInfiniteQuery } from "@tanstack/react-query";
import React from "react";
import { BiSolidRightArrow } from "react-icons/bi";
import { Link, useParams } from "react-router-dom";
import {
  apiVersion,
  devNavUrl,
  formatDate,
  getConvertStringToJSONparseData,
  googleHDViewLink,
} from "../../../helpers/functions-general";
import { queryDataInfinite } from "../../../helpers/queryDataInfinite";
import Footer from "../../../partials/Footer";
import Header from "../../../partials/Header";
import LoadImages from "../../../partials/LoadImages";
import ButtonSpinner from "../../../partials/spinners/ButtonSpinner";
import BannerSliderLoader from "./bannerSliderLoader";

const AllInsightsArticleList = () => {
  const [page, setPage] = React.useState(1);
  const {
    data: result,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ["insights"],
    queryFn: async ({ pageParam = 1 }) =>
      await queryDataInfinite(
        `${apiVersion}/insights/search`, // search endpoint
        `${apiVersion}/insights/page/${pageParam}` // list endpoint
      ),
    getNextPageParam: (lastPage) => {
      const nextOffset = lastPage.page + lastPage.count;
      return nextOffset < lastPage.total ? nextOffset : undefined;
    },
    refetchOnWindowFocus: false,
  });

  const allInsights = result?.pages?.flatMap((page) => page.data) ?? [];

  React.useEffect(() => {
    if (allInsights.length > 0) {
      setHtml(allInsights[0].home_insights_paragraph_a);
    }
  }, [allInsights]);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { slug } = useParams();

  const [html, setHtml] = React.useState("");

  // Update html based on slug and result
  React.useEffect(() => {
    const matchingInsight = allInsights.find(
      (item) =>
        item.home_insights_slug?.trim().toLowerCase() ===
        slug?.trim().toLowerCase()
    );
    setHtml(matchingInsight ? matchingInsight.home_insights_paragraph_a : "");
  }, [slug, allInsights]);

  const post = allInsights.find(
    (item) =>
      item.home_insights_slug?.trim().toLowerCase() ===
      slug?.trim().toLowerCase()
  );

  return (
    <>
      <Header services={"default"} page={"Home"} />
      <div className="customContainer pt-20 md:pt-40 mb-20">
        {isFetching ? (
          <div className=" relative ">
            <div className="flex flex-col md:flex-row md:justify-between">
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
                  className={"h-4 min-w-[300px] lg:min-w-[500px] rounded-xl "}
                />
              </div>
              <div>
                <BannerSliderLoader
                  cols={1}
                  count={1}
                  className={"h-7 min-w-[200px] lg:min-w-[400px] rounded-xl "}
                />
                <BannerSliderLoader
                  cols={1}
                  count={6}
                  classNameGrid={"gap-3"}
                  className={"h-3 min-w-[200px] lg:max-w-[300px] rounded-xl"}
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <BannerSliderLoader
                cols={1}
                count={1}
                classNameGrid={"gap-6"}
                className={
                  "h-[190px] rounded-xl min-w-[200px] lg:min-w-[350px] gap-6"
                }
              />
              <div className="flex flex-col gap-2">
                <BannerSliderLoader
                  cols={1}
                  count={1}
                  classNameGrid={"gap-6"}
                  className={"h-6 rounded-xl min-w-[200px] lg:min-w-[400px] "}
                />
                <BannerSliderLoader
                  cols={1}
                  count={1}
                  classNameGrid={"gap-6"}
                  className={"h-6 rounded-xl min-w-[200px] lg:max-w-[200px] "}
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <BannerSliderLoader
                cols={1}
                count={1}
                classNameGrid={"gap-6"}
                className={
                  "h-[190px] rounded-xl min-w-[200px] lg:min-w-[350px] gap-6"
                }
              />
              <div className="flex flex-col gap-2">
                <BannerSliderLoader
                  cols={1}
                  count={1}
                  classNameGrid={"gap-6"}
                  className={"h-6 rounded-xl min-w-[200px] lg:min-w-[400px] "}
                />
                <BannerSliderLoader
                  cols={1}
                  count={1}
                  classNameGrid={"gap-6"}
                  className={"h-6 rounded-xl min-w-[200px] lg:max-w-[200px] "}
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <BannerSliderLoader
                cols={1}
                count={1}
                classNameGrid={"gap-6"}
                className={
                  "h-[190px] rounded-xl min-w-[200px] lg:min-w-[350px] gap-6"
                }
              />
              <div className="flex flex-col gap-2">
                <BannerSliderLoader
                  cols={1}
                  count={1}
                  classNameGrid={"gap-6"}
                  className={"h-6 rounded-xl min-w-[200px] lg:min-w-[400px] "}
                />
                <BannerSliderLoader
                  cols={1}
                  count={1}
                  classNameGrid={"gap-6"}
                  className={"h-6 rounded-xl min-w-[200px] lg:max-w-[200px] "}
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <BannerSliderLoader
                cols={1}
                count={1}
                classNameGrid={"gap-6"}
                className={
                  "h-[190px] rounded-xl min-w-[200px] lg:min-w-[350px] gap-6"
                }
              />
              <div className="flex flex-col gap-2">
                <BannerSliderLoader
                  cols={1}
                  count={1}
                  classNameGrid={"gap-6"}
                  className={"h-6 rounded-xl min-w-[200px] lg:min-w-[400px] "}
                />
                <BannerSliderLoader
                  cols={1}
                  count={1}
                  classNameGrid={"gap-6"}
                  className={"h-6 rounded-xl min-w-[200px] lg:max-w-[200px] "}
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row justify-between">
            <div className="mb-12">
              <div className="theTitle mb-20">
                <p>When share valuable tips and expect advice in our</p>
                <h2 className="text-[clamp(20px,7vw,30px)] font-semibold text-primary">
                  Industry Insights
                </h2>
                <p>section to help you grow your business and stay ahead.</p>
              </div>
              <div className="popularPostLinks ">
                <ul className="[&>li]:my-8">
                  {result?.pages.map((page, key) => (
                    <React.Fragment key={key}>
                      {page?.data
                        .filter(
                          (popPost) =>
                            popPost &&
                            popPost.home_insights_slug &&
                            popPost.home_insights_is_active === 1 &&
                            popPost.home_insights_slug !==
                              post?.home_insights_slug
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
                                  <div className="flex flex-col md:flex-row gap-4">
                                    <div className="min-w-[300px] max-w-[300px] md:min-w-[350px] md:max-w-[350px] h-[190px] relative">
                                      {insightsImages.map((image, index) => (
                                        <LoadImages
                                          url={`${googleHDViewLink}${image?.id}`}
                                          alt={`${popPost.home_insights_title}`}
                                          className="min-w-[300px] max-w-[300px] md:min-w-[350px] md:max-w-[350px] h-[190px] rounded-lg object-cover"
                                          key={index}
                                        />
                                      ))}
                                    </div>
                                    <div className="flex flex-col gap-2">
                                      <p className="line-clamp-3 font-bold">
                                        {popPost.home_insights_title}
                                      </p>
                                      <p>
                                        {formatDate(popPost.home_insights_date)}
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
              <div className="my-10 block lg:hidden">
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
                    {isFetchingNextPage ? (
                      <ButtonSpinner />
                    ) : (
                      <span>Load more</span>
                    )}
                  </button>
                ) : (
                  <p className="text-sm uppercase font-poppins text-gray-500">
                    No More Insights
                  </p>
                )}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-10 text-dark">
                Categories
              </h3>
              <ul className="lg:w-[200px] ">
                {allInsights
                  .map((cat) => cat.home_insights_category)
                  .filter((value, index, self) => self.indexOf(value) === index) // unique values
                  .map((uniqueCategory, key) => (
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
                  ))}
              </ul>
            </div>
          </div>
        )}
        <div className="mb-10 hidden lg:block">
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
              No More Insights
            </p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AllInsightsArticleList;
