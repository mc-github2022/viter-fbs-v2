import React from "react";
import { FaRegImages } from "react-icons/fa";
import {
  getConvertStringToJSONparseData,
  googleHDViewLink,
} from "../../../../../../helpers/functions-general";
import LoadImages from "../../../../../../partials/LoadImages";

const OjtBanner = ({ ojtData, handleUpdateOjtBanner }) => {
  const ojtBannerImage = getConvertStringToJSONparseData(
    ojtData?.data?.[0]?.ojt_banner_img
  );

  return (
    <>
      <section
        id="ServiceHrBanner"
        className="banner pt-[59px] md:pt-[95px] min-h-[100vh] md:min-h-[90vh] relative flex items-center"
      >
        {ojtData?.data?.length > 0 && ojtBannerImage?.length > 0 ? (
          <>
            {ojtBannerImage.map((img, index) => (
              <LoadImages
                url={`${googleHDViewLink}${img?.id}`}
                alt={`ojt banner ${index + 1}`}
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
        {/* <img
          src={`${devBaseImgUrl}/${banner[0].bannerImage}`}
          alt="Smarter, Faster, and More Efficient HR Information System"
          className="absolute inset-0 w-full h-full object-cover z-0"
        /> */}

        <div className="customContainer relative z-10 h-full">
          <div className="wrapper flex flex-col justify-center items-center h-full text-center lg:grid lg:grid-cols-2">
            <div className="text-center py-10 lg:text-left">
              <h2 className="text-[clamp(30px,3vw,45px)] leading-[1.1] mb-8 text-light font-light">
                <span className="">
                  {ojtData?.data[0].ojt_banner_title
                    .split("\n") // Split by new lines
                    .filter((content_a) => content_a.trim() !== "") // Remove empty lines
                    .map((content_a, index) => (
                      <p key={index}>{content_a}</p>
                    ))}
                </span>
                <span className="text-light font-semibold">
                  {ojtData?.data?.length > 0 &&
                  ojtData.data[0]?.ojt_banner_title_bold
                    ? ojtData?.data[0].ojt_banner_title_bold
                    : "Title"}
                  {/* <h1 class="text-4xl font-bold bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent">
                    Gradient Text
                  </h1> */}
                </span>
              </h2>

              <p className="text-light mb-10">
                {ojtData?.data?.length > 0 &&
                ojtData.data[0]?.ojt_banner_description
                  ? ojtData?.data[0].ojt_banner_description
                  : "Description"}
              </p>
              {ojtData?.data.map((item, key) => (
                <a
                  href={`${item.ojt_banner_button_link}`}
                  target="_blank"
                  className="btn bg-transparent text-light border-2 uppercase "
                  key={key}
                >
                  {item.ojt_banner_button_text}
                </a>
              ))}
              <a
                className="absolute cursor-pointer tooltip-btn left-[28rem] top-2"
                data-tooltip="Edit contents"
                onClick={handleUpdateOjtBanner}
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

export default OjtBanner;
