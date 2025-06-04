import React from "react";
import {
  devBaseImgUrl,
  getConvertStringToJSONparseData,
  googleHDViewLink,
} from "../../../helpers/functions-general";
import useQueryData from "../../../custom-hooks/useQueryData";
import LoadImages from "../../../partials/LoadImages";

const LcssPartners = ({ ojtTitlesData }) => {
  const {
    isFetching,
    error,
    isLoading,
    status,
    data: partnersData,
  } = useQueryData(
    "/v1/partners", // endpoint
    "get", // method
    "partners", // key
    {},
    null,
    true
  );
  return (
    <>
      <section className="partners py-20">
        <div className="customContainer">
          <p>
            {ojtTitlesData?.data?.length > 0 &&
            ojtTitlesData.data[0]?.ojt_titles_partners_subtitle
              ? ojtTitlesData?.data[0].ojt_titles_partners_subtitle
              : ""}
          </p>
          <h2 className="text-[clamp(20px,7vw,35px)] font-semibold text-primary leading-[1.1] mb-8">
            {ojtTitlesData?.data?.length > 0 &&
            ojtTitlesData.data[0]?.ojt_titles_partners_title
              ? ojtTitlesData?.data[0].ojt_titles_partners_title
              : ""}
          </h2>
          <ul className="flex flex-wrap justify-center gap-14 items-center">
            {partnersData?.data
              ?.filter(
                (item) => item.partners_page === "College On-the-job- Training"
              )
              ?.map((item) => {
                const partnersImages =
                  getConvertStringToJSONparseData(item.partners_img) || [];

                return (
                  <li key={item.id || item.partners_name} className="relative">
                    {partnersImages.map((img, index) => (
                      <LoadImages
                        className="w-[120px] h-[120px] object-contain"
                        url={`${googleHDViewLink}${img?.id}`}
                        alt={item.partners_name}
                        key={index}
                      />
                    ))}
                  </li>
                );
              })}
          </ul>
        </div>
      </section>
    </>
  );
};

export default LcssPartners;
