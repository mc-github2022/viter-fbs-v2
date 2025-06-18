import { FaRegImages } from "react-icons/fa";
import { HiPencil } from "react-icons/hi";
import { RiExternalLinkLine } from "react-icons/ri";
import {
    getConvertStringToJSONparseData,
    googleHDViewLink
} from "../../../../../../helpers/functions-general";
import LoadImages from "../../../../../../partials/LoadImages";
import FetchingSpinner from "../../../../../../partials/spinners/FetchingSpinner";

const WordpressPortfolio = ({
  wordpressPortfolioData,
  isLoadingPortfolio,
  isFetchingPortfolio,
  errorPortfolio,
  handleUpdateWordpressPortfolioTitle,
  handleUpdateWordpressPortfolioListA,
  handleUpdateWordpressPortfolioListB,
  handleUpdateWordpressPortfolioListC,
  handleUpdateWordpressPortfolioListD,
  handleUpdateWordpressPortfolioListE,
  handleUpdateWordpressPortfolioListF,
  handleUpdateWordpressPortfolioListG,
  handleUpdateWordpressPortfolioListH,
}) => {
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
        <div className="customContainer ">
          <div className="relative">
            <p>
              {wordpressPortfolioData?.data?.[0]
                ?.wordpress_portfolio_subtitle || "Subtitle"}
            </p>
            <h2 className="text-[clamp(20px,7vw,35px)] font-semibold text-primary leading-[1.1] mb-8">
              {wordpressPortfolioData?.data?.[0]?.wordpress_portfolio_title ||
                "Title"}
            </h2>
            <a
              className="absolute cursor-pointer tooltip-btn left-[400px] -top-6 "
              data-tooltip="Edit contents"
              onClick={handleUpdateWordpressPortfolioTitle}
            >
              <HiPencil className=" bg-[#C7AC27] rounded-full  w-[25px] h-[25px] p-[5px] border-[1px] text-black" />
            </a>
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
                {wordpressPortfolioData?.data?.length > 0 &&
                wordpressListAImage?.length > 0 ? (
                  <>
                    {wordpressListAImage.map((img, index) => (
                      <LoadImages
                        url={`${googleHDViewLink}${img?.id}`}
                        className="w-full h-full object-cover object-top rounded-2xl group-hover:brightness-50 transition-all"
                        alt="gomission"
                        key={index}
                      />
                    ))}
                  </>
                ) : (
                  <div className="  w-full h-full object-cover object-top place-content-center place-items-center bg-gray-300 ">
                    <FaRegImages className="text-[100px] text-gray-400" />
                  </div>
                )}
                <div className="theLink flex items-center gap-2 group-hover:text-light absolute bottom-4 left-4 group-hover:bg-primary rounded-full px-2 opacity-0 group-hover:opacity-[100] transition-all">
                  <RiExternalLinkLine />
                  <p>
                    {wordpressPortfolioData?.data?.[0]
                      ?.wordpress_portfolio_website_a || "Title"}
                  </p>
                </div>
              </a>
              <a
                className="absolute cursor-pointer tooltip-btn top-2 right-1"
                data-tooltip="Edit contents"
                onClick={handleUpdateWordpressPortfolioListA}
              >
                <FaRegImages className=" bg-[#C7AC27] rounded-full  w-[25px] h-[25px] p-[5px] border-[1px] text-black" />
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
                {wordpressPortfolioData?.data?.length > 0 &&
                wordpressListBImage?.length > 0 ? (
                  <>
                    {wordpressListBImage.map((img, index) => (
                      <LoadImages
                        url={`${googleHDViewLink}${img?.id}`}
                        className="w-full h-full object-cover object-top rounded-2xl  group-hover:brightness-50"
                        alt="tazamia"
                        key={index}
                      />
                    ))}
                  </>
                ) : (
                  <div className="  w-full h-full object-cover object-top place-content-center place-items-center bg-gray-300 ">
                    <FaRegImages className="text-[100px] text-gray-400" />
                  </div>
                )}

                <div className="theLink flex items-center gap-2 group-hover:text-light absolute bottom-4 left-4 group-hover:bg-primary rounded-full px-2 opacity-0 group-hover:opacity-[100] transition-all">
                  <RiExternalLinkLine />
                  <p>
                    {wordpressPortfolioData?.data?.[0]
                      ?.wordpress_portfolio_website_b || "Title"}
                  </p>
                </div>
              </a>
              <a
                className="absolute cursor-pointer tooltip-btn top-2 right-1"
                data-tooltip="Edit contents"
                onClick={handleUpdateWordpressPortfolioListB}
              >
                <FaRegImages className=" bg-[#C7AC27] rounded-full  w-[25px] h-[25px] p-[5px] border-[1px] text-black" />
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
                {wordpressPortfolioData?.data?.length > 0 &&
                wordpressListCImage?.length > 0 ? (
                  <>
                    {wordpressListCImage.map((img, index) => (
                      <LoadImages
                        url={`${googleHDViewLink}${img?.id}`}
                        className="w-full h-full object-cover object-top rounded-2xl group-hover:brightness-50"
                        alt="OTTM"
                        key={index}
                      />
                    ))}
                  </>
                ) : (
                  <div className="  w-full h-full object-cover object-top place-content-center place-items-center bg-gray-300 ">
                    <FaRegImages className="text-[100px] text-gray-400" />
                  </div>
                )}
                <div className="theLink flex items-center gap-2 group-hover:text-light absolute bottom-4 left-4 group-hover:bg-primary rounded-full px-2 opacity-0 group-hover:opacity-[100] transition-all">
                  <RiExternalLinkLine />
                  <p>
                    {wordpressPortfolioData?.data?.[0]
                      ?.wordpress_portfolio_website_c || "Title"}
                  </p>
                </div>
              </a>
              <a
                className="absolute cursor-pointer tooltip-btn top-2 right-1"
                data-tooltip="Edit contents"
                onClick={handleUpdateWordpressPortfolioListC}
              >
                <FaRegImages className=" bg-[#C7AC27] rounded-full  w-[25px] h-[25px] p-[5px] border-[1px] text-black" />
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
                {wordpressPortfolioData?.data?.length > 0 &&
                wordpressListDImage?.length > 0 ? (
                  <>
                    {wordpressListDImage.map((img, index) => (
                      <LoadImages
                        url={`${googleHDViewLink}${img?.id}`}
                        className="w-full h-full object-cover rounded-2xl group-hover:brightness-50"
                        alt="Face the Children"
                        key={index}
                      />
                    ))}
                  </>
                ) : (
                  <div className="  w-full h-[204px] object-cover object-top place-content-center place-items-center bg-gray-300 ">
                    <FaRegImages className="text-[100px] text-gray-400" />
                  </div>
                )}

                <div className="theLink flex items-center gap-2 group-hover:text-light absolute bottom-4 left-4 group-hover:bg-primary rounded-full px-2 opacity-0 group-hover:opacity-[100] transition-all">
                  <RiExternalLinkLine />
                  <p>
                    {wordpressPortfolioData?.data?.[0]
                      ?.wordpress_portfolio_website_d || "Title"}
                  </p>
                </div>
              </a>
              <a
                className="absolute cursor-pointer tooltip-btn top-2 right-1"
                data-tooltip="Edit contents"
                onClick={handleUpdateWordpressPortfolioListD}
              >
                <FaRegImages className=" bg-[#C7AC27] rounded-full  w-[25px] h-[25px] p-[5px] border-[1px] text-black" />
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
                {wordpressPortfolioData?.data?.length > 0 &&
                wordpressListEImage?.length > 0 ? (
                  <>
                    {wordpressListEImage.map((img, index) => (
                      <LoadImages
                        url={`${googleHDViewLink}${img?.id}`}
                        className="w-full h-full object-cover rounded-2xl group-hover:brightness-50"
                        alt="World Focus"
                        key={index}
                      />
                    ))}
                  </>
                ) : (
                  <div className="  w-full h-[197px] object-cover object-top place-content-center place-items-center bg-gray-300 ">
                    <FaRegImages className="text-[100px] text-gray-400" />
                  </div>
                )}

                <div className="theLink flex items-center gap-2 group-hover:text-light absolute bottom-4 left-4 group-hover:bg-primary rounded-full px-2 opacity-0 group-hover:opacity-[100] transition-all">
                  <RiExternalLinkLine />
                  <p>
                    {wordpressPortfolioData?.data?.[0]
                      ?.wordpress_portfolio_website_e || "Title"}
                  </p>
                </div>
              </a>
              <a
                className="absolute cursor-pointer tooltip-btn top-2 right-1"
                data-tooltip="Edit contents"
                onClick={handleUpdateWordpressPortfolioListE}
              >
                <FaRegImages className=" bg-[#C7AC27] rounded-full  w-[25px] h-[25px] p-[5px] border-[1px] text-black" />
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
                {wordpressPortfolioData?.data?.length > 0 &&
                wordpressListFImage?.length > 0 ? (
                  <>
                    {wordpressListFImage.map((img, index) => (
                      <LoadImages
                        url={`${googleHDViewLink}${img?.id}`}
                        className="w-full h-full object-cover rounded-2xl group-hover:brightness-50"
                        alt="FCA"
                        key={index}
                      />
                    ))}
                  </>
                ) : (
                  <div className="  w-full h-full object-cover object-top place-content-center place-items-center bg-gray-300 ">
                    <FaRegImages className="text-[100px] text-gray-400" />
                  </div>
                )}

                <div className="theLink flex items-center gap-2 group-hover:text-light absolute bottom-4 left-4 group-hover:bg-primary rounded-full px-2 opacity-0 group-hover:opacity-[100] transition-all">
                  <RiExternalLinkLine />
                  <p>
                    {wordpressPortfolioData?.data?.[0]
                      ?.wordpress_portfolio_website_f || "Title"}
                  </p>
                </div>
              </a>
              <a
                className="absolute cursor-pointer tooltip-btn top-2 right-1"
                data-tooltip="Edit contents"
                onClick={handleUpdateWordpressPortfolioListF}
              >
                <FaRegImages className=" bg-[#C7AC27] rounded-full  w-[25px] h-[25px] p-[5px] border-[1px] text-black" />
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
                {wordpressPortfolioData?.data?.length > 0 &&
                wordpressListGImage?.length > 0 ? (
                  <>
                    {wordpressListGImage.map((img, index) => (
                      <LoadImages
                        url={`${googleHDViewLink}${img?.id}`}
                        className="w-full h-full object-cover rounded-2xl group-hover:brightness-50"
                        alt="Hiro Isogawa"
                        key={index}
                      />
                    ))}
                  </>
                ) : (
                  <div className="  w-full h-[204px] object-cover object-top place-content-center place-items-center bg-gray-300 ">
                    <FaRegImages className="text-[100px] text-gray-400" />
                  </div>
                )}

                <div className="theLink flex items-center gap-2 group-hover:text-light absolute bottom-4 left-4 group-hover:bg-primary rounded-full px-2 opacity-0 group-hover:opacity-[100] transition-all">
                  <RiExternalLinkLine />
                  <p>
                    {wordpressPortfolioData?.data?.[0]
                      ?.wordpress_portfolio_website_g || "Title"}
                  </p>
                </div>
              </a>
              <a
                className="absolute cursor-pointer tooltip-btn top-2 right-1"
                data-tooltip="Edit contents"
                onClick={handleUpdateWordpressPortfolioListG}
              >
                <FaRegImages className=" bg-[#C7AC27] rounded-full  w-[25px] h-[25px] p-[5px] border-[1px] text-black" />
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
                {wordpressPortfolioData?.data?.length > 0 &&
                wordpressListHImage?.length > 0 ? (
                  <>
                    {wordpressListHImage.map((img, index) => (
                      <LoadImages
                        url={`${googleHDViewLink}${img?.id}`}
                        className="w-full h-full object-cover rounded-2xl group-hover:brightness-50"
                        alt="Frontline Worship Center"
                        key={index}
                      />
                    ))}
                  </>
                ) : (
                  <div className="  w-full h-full object-cover object-top place-content-center place-items-center bg-gray-300 ">
                    <FaRegImages className="text-[100px] text-gray-400" />
                  </div>
                )}

                <div className="theLink flex items-center gap-2 group-hover:text-light absolute bottom-4 left-4 group-hover:bg-primary rounded-full px-2 opacity-0 group-hover:opacity-[100] transition-all">
                  <RiExternalLinkLine />
                  <p>
                    {wordpressPortfolioData?.data?.[0]
                      ?.wordpress_portfolio_website_h || "Title"}
                  </p>
                </div>
              </a>
              <a
                className="absolute cursor-pointer tooltip-btn top-2 right-1"
                data-tooltip="Edit contents"
                onClick={handleUpdateWordpressPortfolioListH}
              >
                <FaRegImages className=" bg-[#C7AC27] rounded-full  w-[25px] h-[25px] p-[5px] border-[1px] text-black" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WordpressPortfolio;
