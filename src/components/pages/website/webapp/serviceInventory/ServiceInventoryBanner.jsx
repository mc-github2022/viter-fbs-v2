import React from "react";
import { FaRegCircleCheck } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { banner } from "./data";
import {
  apiVersion,
  devBaseImgUrl,
  getConvertStringToJSONparseData,
  googleHDViewLink,
} from "../../../../helpers/functions-general";
import ModalContact from "../../../../partials/ModalContact";
import useQueryData from "../../../../custom-hooks/useQueryData";
import LoadImages from "../../../../partials/LoadImages";

const ServiceInventoryBanner = ({ pageName }) => {
  const { data: assetData } = useQueryData(
    `${apiVersion}/asset`, // endpoint
    "get", // method
    "asset", // key
    {},
    null,
    true
  );

  const assetBannerImage = getConvertStringToJSONparseData(
    assetData?.data?.[0]?.asset_banner_img
  );

  return (
    <>
      <section
        id="ServiceInventoryBanner"
        className={`banner pt-[59px] md:pt-[95px] min-h-[100vh] md:min-h-[90vh] relative flex items-center`}
      >
        {assetBannerImage.map((img, index) => (
          <LoadImages
            url={`${googleHDViewLink}${img?.id}`}
            alt={`asset banner ${index + 1}`}
            className="absolute inset-0 w-full h-full object-cover z-0"
            key={index}
          />
        ))}
        <div className="customContainer relative z-10 h-full">
          <div className="wrapper flex flex-col justify-center lg:grid lg:grid-cols-2 place-items-center transition-all w-full py-10">
            <div className="text-center py-10 lg:text-left">
              <h2 className="text-[clamp(30px,3vw,45px)] leading-[1.1] mb-8 text-light font-light">
                {assetData?.data[0].asset_banner_title
                  .split("\n") // Split by new lines
                  .filter((content_a) => content_a.trim() !== "") // Remove empty lines
                  .map((content_a, index) => (
                    <p key={index}>{content_a}</p>
                  ))}
                <span className="text-light font-semibold">
                  {assetData?.data?.length > 0 &&
                  assetData.data[0]?.asset_banner_title_bold
                    ? assetData?.data[0].asset_banner_title_bold
                    : ""}
                </span>
                <br />
              </h2>
              <p className="text-light mb-10">
                {assetData?.data?.length > 0 &&
                assetData.data[0]?.asset_banner_description
                  ? assetData?.data[0].asset_banner_description
                  : ""}
              </p>
              {assetData?.data.map((item, key) => (
                <a
                  href={`${item.asset_banner_button_link}`}
                  target="_blank"
                  className="btn bg-transparent text-light border-2 uppercase "
                  key={key}
                >
                  {item.asset_banner_button_text}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceInventoryBanner;
