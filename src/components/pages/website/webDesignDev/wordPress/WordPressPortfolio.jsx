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

const WordPressPortfolio = () => {
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
    true
  );

  const wordpressListAImage = getConvertStringToJSONparseData(
    wordpressPortfolioData?.data?.[0]?.wordpress_portfolio_img_a
  );
  const wordpressListBImage = getConvertStringToJSONparseData(
    wordpressPortfolioData?.data?.[0]?.wordpress_portfolio_img_b
  );
  const wordpressListCImage = getConvertStringToJSONparseData(
    wordpressPortfolioData?.data?.[0]?.wordpress_portfolio_img_c
  );
  const wordpressListDImage = getConvertStringToJSONparseData(
    wordpressPortfolioData?.data?.[0]?.wordpress_portfolio_img_d
  );
  const wordpressListEImage = getConvertStringToJSONparseData(
    wordpressPortfolioData?.data?.[0]?.wordpress_portfolio_img_e
  );
  const wordpressListFImage = getConvertStringToJSONparseData(
    wordpressPortfolioData?.data?.[0]?.wordpress_portfolio_img_f
  );
  const wordpressListGImage = getConvertStringToJSONparseData(
    wordpressPortfolioData?.data?.[0]?.wordpress_portfolio_img_g
  );
  const wordpressListHImage = getConvertStringToJSONparseData(
    wordpressPortfolioData?.data?.[0]?.wordpress_portfolio_img_h
  );

  return (
    <>
      <section className="profolioWebsite -translate-y-1 bg-light md:pb-40 md:pt-20">
        <div className="customContainer">
          <div className="">
            <p>
              {wordpressPortfolioData?.data?.[0]
                ?.wordpress_portfolio_subtitle || ""}
            </p>
            <h2 className="text-[clamp(20px,7vw,35px)] font-semibold text-primary leading-[1.1] mb-8">
              {wordpressPortfolioData?.data?.[0]?.wordpress_portfolio_title ||
                ""}
            </h2>
          </div>
          {isFetchingPortfolio && !isLoadingPortfolio && <FetchingSpinner />}
          <div className="wrapper grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div className="imageItem row-span-4 sm:h-auto h-[240px] relative overflow-hidden addShadow rounded-2xl group bg-transparent">
              <a
                href={
                  wordpressPortfolioData?.data?.[0]
                    ?.wordpress_portfolio_url_a || "#"
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                {wordpressListAImage.map((img, index) => (
                  <LoadImages
                    url={`${googleHDViewLink}${img?.id}`}
                    className="w-full h-full object-cover object-top rounded-2xl group-hover:brightness-50 transition-all"
                    alt="gomission"
                    key={index}
                  />
                ))}

                <div className="theLink flex items-center gap-2 group-hover:text-light absolute bottom-4 left-4 group-hover:bg-primary rounded-full px-2 opacity-0 group-hover:opacity-[100] transition-all">
                  <RiExternalLinkLine />
                  <p>
                    {wordpressPortfolioData?.data?.[0]
                      ?.wordpress_portfolio_website_a || ""}
                  </p>
                </div>
              </a>
            </div>
            <div className="imageItem  row-span-3 sm:h-auto h-[240px] relative overflow-hidden addShadow rounded-2xl group">
              <a
                href={
                  wordpressPortfolioData?.data?.[0]
                    ?.wordpress_portfolio_url_b || "#"
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                {wordpressListBImage.map((img, index) => (
                  <LoadImages
                    url={`${googleHDViewLink}${img?.id}`}
                    className="w-full h-full object-cover object-top rounded-2xl  group-hover:brightness-50"
                    alt="tazamia"
                    key={index}
                  />
                ))}
                <div className="theLink flex items-center gap-2 group-hover:text-light absolute bottom-4 left-4 group-hover:bg-primary rounded-full px-2 opacity-0 group-hover:opacity-[100] transition-all">
                  <RiExternalLinkLine />
                  <p>
                    {" "}
                    {wordpressPortfolioData?.data?.[0]
                      ?.wordpress_portfolio_website_b || ""}
                  </p>
                </div>
              </a>
            </div>
            <div className="imageItem row-span-6 sm:h-auto h-[240px] relative overflow-hidden addShadow rounded-2xl group">
              <a
                href={
                  wordpressPortfolioData?.data?.[0]
                    ?.wordpress_portfolio_url_c || "#"
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                {wordpressListCImage.map((img, index) => (
                  <LoadImages
                    url={`${googleHDViewLink}${img?.id}`}
                    className="w-full h-full object-cover object-top rounded-2xl group-hover:brightness-50"
                    alt="OTTM"
                    key={index}
                  />
                ))}
                <div className="theLink flex items-center gap-2 group-hover:text-light absolute bottom-4 left-4 group-hover:bg-primary rounded-full px-2 opacity-0 group-hover:opacity-[100] transition-all">
                  <RiExternalLinkLine />
                  <p>
                    {wordpressPortfolioData?.data?.[0]
                      ?.wordpress_portfolio_website_c || ""}
                  </p>
                </div>
              </a>
            </div>
            <div className="imageItem row-span-2 sm:h-auto h-[240px] relative overflow-hidden addShadow rounded-2xl group">
              <a
                href={
                  wordpressPortfolioData?.data?.[0]
                    ?.wordpress_portfolio_url_d || "#"
                }
                target="_blank"
                e
                rel="noopener noreferrer"
              >
                {wordpressListDImage.map((img, index) => (
                  <LoadImages
                    url={`${googleHDViewLink}${img?.id}`}
                    className="w-full h-full object-cover rounded-2xl group-hover:brightness-50"
                    alt="Face the Children"
                    key={index}
                  />
                ))}
                <div className="theLink flex items-center gap-2 group-hover:text-light absolute bottom-4 left-4 group-hover:bg-primary rounded-full px-2 opacity-0 group-hover:opacity-[100] transition-all">
                  <RiExternalLinkLine />
                  <p>
                    {wordpressPortfolioData?.data?.[0]
                      ?.wordpress_portfolio_website_d || ""}
                  </p>
                </div>
              </a>
            </div>
            <div className="imageItem row-span-2 sm:h-auto h-[240px] relative overflow-hidden addShadow rounded-2xl group">
              <a
                href={
                  wordpressPortfolioData?.data?.[0]
                    ?.wordpress_portfolio_url_e || "#"
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                {wordpressListEImage.map((img, index) => (
                  <LoadImages
                    url={`${googleHDViewLink}${img?.id}`}
                    className="w-full h-full object-cover rounded-2xl group-hover:brightness-50"
                    alt="World Focus"
                    key={index}
                  />
                ))}
                <div className="theLink flex items-center gap-2 group-hover:text-light absolute bottom-4 left-4 group-hover:bg-primary rounded-full px-2 opacity-0 group-hover:opacity-[100] transition-all">
                  <RiExternalLinkLine />
                  <p>
                    {wordpressPortfolioData?.data?.[0]
                      ?.wordpress_portfolio_website_e || ""}
                  </p>
                </div>
              </a>
            </div>
            <div className="imageItem row-span-3 sm:h-auto h-[240px] relative overflow-hidden addShadow rounded-2xl group">
              <a
                href={
                  wordpressPortfolioData?.data?.[0]
                    ?.wordpress_portfolio_url_f || "#"
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                {wordpressListFImage.map((img, index) => (
                  <LoadImages
                    url={`${googleHDViewLink}${img?.id}`}
                    className="w-full h-full object-cover rounded-2xl group-hover:brightness-50"
                    alt="FCA"
                    key={index}
                  />
                ))}
                <div className="theLink flex items-center gap-2 group-hover:text-light absolute bottom-4 left-4 group-hover:bg-primary rounded-full px-2 opacity-0 group-hover:opacity-[100] transition-all">
                  <RiExternalLinkLine />
                  <p>
                    {wordpressPortfolioData?.data?.[0]
                      ?.wordpress_portfolio_website_f || ""}
                  </p>
                </div>
              </a>
            </div>
            <div className="imageItem row-span-2 sm:h-auto h-[240px] relative overflow-hidden addShadow rounded-2xl group">
              <a
                href={
                  wordpressPortfolioData?.data?.[0]
                    ?.wordpress_portfolio_url_g || "#"
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                {wordpressListGImage.map((img, index) => (
                  <LoadImages
                    url={`${googleHDViewLink}${img?.id}`}
                    className="w-full h-full object-cover rounded-2xl group-hover:brightness-50"
                    alt="Hiro Isogawa"
                    key={index}
                  />
                ))}
                <div className="theLink flex items-center gap-2 group-hover:text-light absolute bottom-4 left-4 group-hover:bg-primary rounded-full px-2 opacity-0 group-hover:opacity-[100] transition-all">
                  <RiExternalLinkLine />
                  <p>
                    {wordpressPortfolioData?.data?.[0]
                      ?.wordpress_portfolio_website_g || ""}
                  </p>
                </div>
              </a>
            </div>
            <div className="imageItem row-span-2 sm:h-auto h-[240px] relative overflow-hidden addShadow rounded-2xl group">
              <a
                href={
                  wordpressPortfolioData?.data?.[0]
                    ?.wordpress_portfolio_url_h || "#"
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                {wordpressListHImage.map((img, index) => (
                  <LoadImages
                    url={`${googleHDViewLink}${img?.id}`}
                    className="w-full h-full object-cover rounded-2xl group-hover:brightness-50"
                    alt="Frontline Worship Center"
                    key={index}
                  />
                ))}
                <div className="theLink flex items-center gap-2 group-hover:text-light absolute bottom-4 left-4 group-hover:bg-primary rounded-full px-2 opacity-0 group-hover:opacity-[100] transition-all">
                  <RiExternalLinkLine />
                  <p>
                    {wordpressPortfolioData?.data?.[0]
                      ?.wordpress_portfolio_website_h || ""}
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WordPressPortfolio;
