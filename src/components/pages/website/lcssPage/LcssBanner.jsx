import React from "react";
import {
  apiVersion,
  devBaseImgUrl,
  getConvertStringToJSONparseData,
  googleHDViewLink,
} from "../../../helpers/functions-general";
import useQueryData from "../../../custom-hooks/useQueryData";
import LoadImages from "../../../partials/LoadImages";

const LcssBanner = ({ pageName }) => {
  const { data: ojtData } = useQueryData(
    `${apiVersion}/ojt`, // endpoint
    "get", // method
    "ojt", // key
    {},
    null,
    true
  );

  const ojtBannerImage = getConvertStringToJSONparseData(
    ojtData?.data?.[0]?.ojt_banner_img
  );

  return (
    <>
      <section
        id="lcssBanner"
        className={`banner pt-[59px] md:pt-[95px] min-h-[100vh] md:min-h-[90vh] relative flex items-center`}
      >
        {ojtBannerImage.map((img, index) => (
          <LoadImages
            url={`${googleHDViewLink}${img?.id}`}
            alt="College On-the-job with industry experience practical, work-related skills"
            className="absolute inset-0 w-full h-full object-cover z-0"
            key={index}
          />
        ))}
        <div className="customContainer relative z-10 h-full">
          <div className="wrapper flex flex-col justify-center lg:grid lg:grid-cols-2 place-items-center transition-all w-full py-10">
            <div className="text-center py-10 lg:text-left">
              <h2 className="text-[clamp(30px,3vw,45px)] leading-[1.1] mb-8 text-light font-light">
                <span className="text-light font-semibold">
                  {ojtData?.data?.length > 0 &&
                  ojtData.data[0]?.ojt_banner_title_bold
                    ? ojtData?.data[0].ojt_banner_title_bold
                    : ""}
                </span>
                <br />
                {ojtData?.data[0].ojt_banner_title
                  .split("\n") // Split by new lines
                  .filter((content_a) => content_a.trim() !== "") // Remove empty lines
                  .map((content_a, index) => (
                    <p key={index}>{content_a}</p>
                  ))}
              </h2>
              <p className="text-light mb-10">
                {ojtData?.data?.length > 0 &&
                ojtData.data[0]?.ojt_banner_description
                  ? ojtData?.data[0].ojt_banner_description
                  : ""}
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LcssBanner;
