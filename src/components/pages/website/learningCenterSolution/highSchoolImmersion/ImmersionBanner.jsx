import React from "react";
import {
  apiVersion,
  devBaseImgUrl,
  getConvertStringToJSONparseData,
  googleHDViewLink,
} from "../../../../helpers/functions-general";
import useQueryData from "../../../../custom-hooks/useQueryData";
import LoadImages from "../../../../partials/LoadImages";

const ImmersionBanner = () => {
  const { data: immersionData } = useQueryData(
    `${apiVersion}/immersion`, // endpoint
    "get", // method
    "immersion", // key
    {},
    null,
    true
  );

  const immersionBannerImage = getConvertStringToJSONparseData(
    immersionData?.data?.[0]?.immersion_banner_img
  );

  return (
    <>
      <section
        id="ImmersionBanner"
        className={`banner pt-[59px] md:pt-[95px] min-h-[100vh] md:min-h-[90vh] relative flex items-center`}
      >
        {immersionBannerImage.map((img, index) => (
          <LoadImages
            url={`${googleHDViewLink}${img?.id}`}
            alt="Senior High School Work Immersion with industry experience practical, work-related skills"
            className="absolute inset-0 w-full h-full object-cover z-0"
            key={index}
          />
        ))}

        <div className="customContainer relative z-10 h-full">
          <div className="wrapper flex flex-col justify-center lg:grid lg:grid-cols-2 place-items-center transition-all w-full py-10">
            <div className="text-center py-10 lg:text-left">
              <div className="mb-8 text-[clamp(30px,3vw,45px)] leading-[1.1] text-light font-light">
                <h2 className="font-semibold">
                  {immersionData?.data?.[0]?.immersion_banner_title_bold || ""}
                </h2>
                {(immersionData?.data?.[0]?.immersion_banner_title || "Title")
                  .split("\n")
                  .filter((line) => line.trim() !== "")
                  .map((line, index) => (
                    <p key={index}>{line}</p>
                  ))}
              </div>
              <p className="text-light mb-10">
                {immersionData?.data?.[0]?.immersion_banner_description || ""}
              </p>
              {/* {immersionData?.data.map((item, key) => (
                <a
                  href={`${item.immersion_banner_button_link}`}
                  target="_blank"
                  className="btn bg-transparent text-light border-2 uppercase "
                  key={key}
                >
                  {item.immersion_banner_button_text}
                </a>
              ))} */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ImmersionBanner;
