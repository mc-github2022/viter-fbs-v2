import React from "react";
import { FaRegImages } from "react-icons/fa";
import {
  getConvertStringToJSONparseData,
  googleHDViewLink,
} from "../../../../../../helpers/functions-general";
import LoadImages from "../../../../../../partials/LoadImages";

const ContinuingBanner = ({ continuingData, handleUpdateContinuingBanner }) => {
  const continuingBannerImage = getConvertStringToJSONparseData(
    continuingData?.data?.[0]?.continuing_banner_img
  );

  return (
    <>
      <section
        id="ServiceHrBanner"
        className="banner pt-[59px] md:pt-[95px] min-h-[100vh] md:min-h-[90vh] relative flex items-center"
      >
        {continuingData?.data?.length > 0 &&
        continuingBannerImage?.length > 0 ? (
          <>
            {continuingBannerImage.map((img, index) => (
              <LoadImages
                url={`${googleHDViewLink}${img?.id}`}
                alt={`continuing banner ${index + 1}`}
                className="absolute inset-0 w-full h-full object-cover z-0"
                key={index}
              />
            ))}
          </>
        ) : (
          <div className=" absolute inset-0 w-full h-full object-cover object-top place-content-center place-items-center bg-gray-300 ">
            <FaRegImages className="text-[200px] text-gray-400" />
          </div>
        )}

        <div className="customContainer relative z-10 h-full">
          <div className="wrapper flex flex-col justify-center items-center h-full text-center lg:grid lg:grid-cols-2">
            <div className="text-center py-10 lg:text-left">
              <div className="mb-8 text-[clamp(30px,3vw,45px)] leading-[1.1] text-light font-light">
                {(continuingData?.data?.[0]?.continuing_banner_title || "Title")
                  .split("\n")
                  .filter((line) => line.trim() !== "")
                  .map((line, index) => (
                    <p key={index}>{line}</p>
                  ))}
                <h2 className="font-semibold">
                  {continuingData?.data?.[0]?.continuing_banner_title_bold ||
                    "Title"}
                </h2>
              </div>

              <p className="text-light mb-10">
                {continuingData?.data?.[0]?.continuing_banner_description ||
                  "Description"}
              </p>
              {continuingData?.data.map((item, key) => (
                <a
                  href={`${item.continuing_banner_button_link}`}
                  target="_blank"
                  className="btn bg-transparent text-light border-2 uppercase "
                  key={key}
                >
                  {item.continuing_banner_button_text}
                </a>
              ))}
              <a
                className="absolute cursor-pointer tooltip-btn left-[38rem] top-2"
                data-tooltip="Edit contents"
                onClick={handleUpdateContinuingBanner}
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

export default ContinuingBanner;
