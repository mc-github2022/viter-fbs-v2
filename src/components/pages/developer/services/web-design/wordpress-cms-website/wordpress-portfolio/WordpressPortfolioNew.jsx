import React from "react";
import { FaRegImages, FaTrash } from "react-icons/fa";
import { HiPencil } from "react-icons/hi";
import { RiExternalLinkLine } from "react-icons/ri";
import {
  getConvertStringToJSONparseData,
  googleHDViewLink,
} from "../../../../../../helpers/functions-general";
import LoadImages from "../../../../../../partials/LoadImages";
import FetchingSpinner from "../../../../../../partials/spinners/FetchingSpinner";
import { StoreContext } from "../../../../../../store/StoreContext";
import {
  setIsDelete,
  setIsUpdateHome,
} from "../../../../../../store/StoreAction";
import ServerError from "../../../../../../partials/spinners/ServerError";
import ModalDelete from "../../../../../../partials/modals/ModalDelete";

const WordpressPortfolioNew = ({
  wordpressPortfolioData,
  wordpressTitlesData,
  isLoadingPortfolio,
  isFetchingPortfolio,
  errorPortfolio,
  handleUpdateWordpressPortfolioTitle,
  handleUpdateWordpressPortfolio,
  setItemEdit,
}) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [id, setIsId] = React.useState("");
  const [isData, setIsData] = React.useState("");

  const handleEdit = (item) => {
    dispatch(
      setIsUpdateHome({ modal: true, modalCode: "wordpress-portfolio" }),
    );
    setItemEdit(item);
  };

  const handleDelete = (item) => {
    dispatch(setIsDelete(true));
    setIsData(item.wordpress_portfolio_website);
    setIsId(item.wordpress_portfolio_aid);
  };

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
        <div className="customContainer relative">
          <div className="relative">
            <p>
              {wordpressTitlesData?.data?.[0]
                ?.wordpress_titles_portfolio_subtitle || "Subtitle"}
            </p>
            <h2 className="text-[clamp(20px,7vw,35px)] font-semibold text-primary leading-[1.1] mb-8">
              {wordpressTitlesData?.data?.[0]
                ?.wordpress_titles_portfolio_title || "Title"}
            </h2>
            <a
              className="absolute cursor-pointer tooltip-btn left-[400px] -top-6 "
              data-tooltip="Edit contents"
              onClick={handleUpdateWordpressPortfolioTitle}
            >
              <HiPencil className=" bg-[#C7AC27] rounded-full  w-[25px] h-[25px] p-[5px] border-[1px] text-black" />
            </a>
          </div>
          <a
            className="absolute cursor-pointer right-[6rem] top-2"
            onClick={handleUpdateWordpressPortfolio}
          >
            <span className=" bg-[#C7AC27] rounded-lg  w-[25px] h-[20px] px-[8px] border-[1px] text-black hover:underline text-base">
              Add
            </span>
          </a>
          {isFetchingPortfolio && !isLoadingPortfolio && <FetchingSpinner />}
          {errorPortfolio && (
            <div className="text-center ">
              <div colSpan="100%" className="p-10">
                <ServerError />
              </div>
            </div>
          )}

          <div className="wrapper grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {wordpressPortfolioData?.data.map((item, index) => {
              const wordpressImage = getConvertStringToJSONparseData(
                item?.wordpress_portfolio_img,
              );
              return (
                <div
                  key={index}
                  className={`imageItem ${gridStyles[index] || "row-span-2"} sm:h-auto h-[240px] relative overflow-hidden addShadow rounded-2xl group`}
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

                  <button
                    className="absolute cursor-pointer tooltip-btn top-2 right-10"
                    data-tooltip="Edit"
                    onClick={() => handleEdit(item)}
                  >
                    <FaRegImages className="bg-[#C7AC27] rounded-full w-[25px] h-[25px] p-[5px] border text-black" />
                  </button>
                  <button
                    className="absolute cursor-pointer tooltip-btn top-2 right-1"
                    data-tooltip="Delete"
                    onClick={() => handleDelete(item)}
                  >
                    <FaTrash className="bg-[#C7AC27] rounded-full w-[25px] h-[25px] p-[5px] border text-black" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {store.isDelete && (
        <ModalDelete
          setIsDelete={setIsDelete}
          queryKey={"wordpress-portfolio"}
          mysqlEndpoint={`/v1/wordpress-portfolio/${id}`}
          item={isData}
        />
      )}
    </>
  );
};

export default WordpressPortfolioNew;
