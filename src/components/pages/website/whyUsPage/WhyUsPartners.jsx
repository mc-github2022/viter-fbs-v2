import React from "react";
import {
  devBaseImgUrl,
  getConvertStringToJSONparseData,
  googleHDViewLink,
} from "../../../helpers/functions-general";
import LoadImages from "../../../partials/LoadImages";
import useQueryData from "../../../custom-hooks/useQueryData";

const WhyUsPartners = () => {
  const {
    isFetching,
    error,
    isLoading,
    status,
    data: partnersData,
  } = useQueryData(
    "/v1/partners", // endpoint
    "get", // method
    "partners" // key
  );
  return (
    <>
      <section className="partners py-20">
        <div className="customContainer">
          <p>Our Ministry Partners</p>
          <h2 className="text-[clamp(20px,7vw,35px)] font-semibold text-primary leading-[1.1] mb-8">
            Who Help Support <br />
            in Our Mission.
          </h2>
          <ul className="flex flex-wrap justify-center gap-14 items-center">
            {partnersData?.data
              ?.filter((item) => item.partners_page === "Why Work With Us")
              ?.map((item) => {
                const partnersImages =
                  getConvertStringToJSONparseData(item.partners_img) || [];

                return (
                  <li key={item.id || item.partners_name} className="relative">
                    {partnersImages.map((img, index) => (
                      <LoadImages
                        className="w-[150px] h-[130px] object-contain"
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

export default WhyUsPartners;
