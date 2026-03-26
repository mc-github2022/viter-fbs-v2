import React from "react";
import { RiExternalLinkLine } from "react-icons/ri";
import {
  apiVersion,
  devBaseImgUrl,
  getConvertStringToJSONparseData,
  googleHDViewLink,
} from "../../../../helpers/functions-general";
import useQueryData from "../../../../custom-hooks/useQueryData";
import FetchingSpinner from "../../../../partials/spinners/FetchingSpinner";
import LoadImages from "../../../../partials/LoadImages";
import { FaRegImages } from "react-icons/fa";

const WordPressPortfolio = ({ wordpressTitlesData }) => {
  const {
    isLoading: isLoadingPortfolio,
    isFetching: isFetchingPortfolio,
    error: errorPortfolio,
    data: wordpressPortfolioData,
  } = useQueryData(
    `${apiVersion}/wordpress-portfolio`, // endpoint
    "get", // method
    "wordpress-portfolio", // key
    {},
    null,
    true,
  );

  const gridStyles = [
    "row-span-4",
    "row-span-3",
    "row-span-6",
    "row-span-2",
    "row-span-2",
    "row-span-3",
    "row-span-2",
    "row-span-2",
  ];

  return (
    <>
      <section className="profolioWebsite -translate-y-1 bg-light md:pb-40 md:pt-20">
        <div className="customContainer">
          <div className="">
            <p>
              {wordpressTitlesData?.data?.[0]
                ?.wordpress_titles_portfolio_subtitle || ""}
            </p>
            <h2 className="text-[clamp(20px,7vw,35px)] font-semibold text-primary leading-[1.1] mb-8">
              {wordpressTitlesData?.data?.[0]
                ?.wordpress_titles_portfolio_title || ""}
            </h2>
          </div>
          {isFetchingPortfolio && !isLoadingPortfolio && <FetchingSpinner />}
          <div className="wrapper grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {wordpressPortfolioData?.data.map((item, index) => {
              const wordpressImage = getConvertStringToJSONparseData(
                item?.wordpress_portfolio_img,
              );
              return (
                <div
                  key={index}
                  className={`imageItem ${gridStyles[index] || "row-span-2"} sm:h-auto h-[240px] relative overflow-hidden addShadow rounded-2xl group`} // or like this for more good UI: gridStyles[index % gridStyles.length]
                >
                  <a
                    href={item?.wordpress_portfolio_url || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {wordpressImage?.length > 0 ? (
                      <>
                        {wordpressImage.map((img, i) => (
                          <LoadImages
                            key={i}
                            url={`${googleHDViewLink}${img?.id}`}
                            className="w-full h-full object-cover object-top rounded-2xl group-hover:brightness-50 transition-all"
                            alt={item?.wordpress_portfolio_website}
                          />
                        ))}
                      </>
                    ) : (
                      <div className="w-full h-full grid place-items-center bg-gray-300">
                        <FaRegImages className="text-[100px] text-gray-400" />
                      </div>
                    )}

                    <div className="theLink flex items-center gap-2 group-hover:text-light absolute bottom-4 left-4 group-hover:bg-primary rounded-full px-2 opacity-0 group-hover:opacity-100 transition-all">
                      <RiExternalLinkLine />
                      <p>{item?.wordpress_portfolio_website || "Title"}</p>
                    </div>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default WordPressPortfolio;
