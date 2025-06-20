import React from "react";
import useQueryData from "../../../../../../custom-hooks/useQueryData";
import LoadImages from "../../../../../../partials/LoadImages";
import {
  getConvertStringToJSONparseData,
  googleHDViewLink,
} from "../../../../../../helpers/functions-general";
import { HiPencil } from "react-icons/hi";

const WebsitePartners = ({
  handleUpdateWebsitePartnersTitles,
  websiteTitlesData,
}) => {
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
      <section className="ServiceHrPartners pb-16 md:py-20 -translate-y-1 bg-light">
        <div className="customContainer relative">
          <a
            className="absolute cursor-pointer tooltip-btn left-[20rem] -top-2 "
            data-tooltip="Edit contents"
            onClick={handleUpdateWebsitePartnersTitles}
          >
            <HiPencil className=" bg-[#C7AC27] rounded-full  w-[25px] h-[25px] p-[5px] border-[1px] text-black" />
          </a>
          <p>
            {websiteTitlesData?.data?.[0]?.website_titles_partners_subtitle ||
              "Subtitle"}
          </p>
          <h2 className="text-[clamp(20px,7vw,35px)] font-semibold text-primary leading-[1.1] mb-8">
            {websiteTitlesData?.data?.[0]?.website_titles_partners_title ||
              "Title"}
          </h2>

          <ul className="flex flex-wrap justify-center gap-y-10 gap-x-20 items-center">
            {partnersData?.data
              ?.filter((item) => item.partners_page === "Web Design")
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

export default WebsitePartners;
