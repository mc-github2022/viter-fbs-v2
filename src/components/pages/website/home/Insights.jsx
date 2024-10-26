import React from "react";
import { BiSolidRightArrow } from "react-icons/bi";
import { insight } from "./data";
import { Link } from "react-router-dom";
import useQueryData from "../../../custom-hooks/useQueryData";
import { devBaseImgUrl } from "../../../helpers/functions-general";

const Insights = () => {
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

  return (
    <>
      <section className="insights py-24 bg-customGray">
        <div className="customContainer p-0 md:px-10">
          <h3 className="text-[clamp(30px,4vw,45px)] font-semibold  leading-[1.1] mb-24 text-dark text-center">
            Industry Insights
          </h3>
          <div className="wrapper  gap-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 order-2 mb-12 lg:mb-0">
              {insightData?.data.map((post, key) => {
                if (key > 2) {
                  return;
                }
                return (
                  <div key={key} className="px-4 md:px-0 ">
                    <Link to={`/insight/${post.home_insights_slug}`}>
                      <div
                        style={{
                          // backgroundImage: `url(${devBaseImgUrl}/home-bg-new.jpg)`,
                          backgroundImage: `url(${devBaseImgUrl}/${post.home_insights_img})`,
                        }}
                        className={`blogItem bg-center bg-cover h-[350px] flex items-end relative rounded-xl grayscale hover:grayscale-0 transition-all group cursor-pointer`}
                      >
                        <div>
                          <div className="blogTitle relative z-[1]">
                            <h4 className="bg-[#cccccc] group-hover:bg-primary group-hover:text-light p-2 px-10 w-[250px] rounded-tr-full rounded-br-full text-dark grayscale-0 transition-all">
                              {post.home_insights_category}
                            </h4>
                          </div>
                          <div className="blogExcerpt p-10 relative z-[1]">
                            <p className="text-light font-bold text-lg">
                              {post.home_insights_title}
                            </p>
                          </div>
                        </div>
                        <div className="bottomGradient bg-gradient-to-t from-dark to-blue-500 h-[200px] w-full absolute bottom-0 block rounded-bl-xl rounded-br-xl"></div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Insights;
