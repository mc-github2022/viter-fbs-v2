import React from "react";
import { sectionPartnersLogos, sectionPartnersTitle } from "./data";
import {
  devBaseImgUrl,
  getConvertStringToJSONparseData,
  googleHDViewLink,
} from "../../../../helpers/functions-general";
import useQueryData from "../../../../custom-hooks/useQueryData";
import LoadImages from "../../../../partials/LoadImages";

const SinglePagePartners = ({ singlepageTitlesData }) => {
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
      <section className="SinglePagePartners -translate-y-1 bg-light pb-16 md:py-20">
        <div className="customContainer">
          <p>
            {singlepageTitlesData?.data?.[0]
              ?.singlepage_titles_partners_subtitle || ""}
          </p>
          <h2 className="text-[clamp(20px,7vw,35px)] font-semibold text-primary leading-[1.1] mb-8">
            {singlepageTitlesData?.data?.[0]
              ?.singlepage_titles_partners_title || ""}
          </h2>

          <ul className="flex flex-wrap justify-center gap-y-10 gap-x-24 items-center">
            {partnersData?.data
              ?.filter((item) => item.partners_page === "Single Page Website")
              ?.map((item) => {
                const partnersImages =
                  getConvertStringToJSONparseData(item.partners_img) || [];

                return (
                  <li key={item.id || item.partners_name} className="relative">
                    {partnersImages.map((img, index) => (
                      <LoadImages
                        className="w-[200px] object-contain"
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

export default SinglePagePartners;
