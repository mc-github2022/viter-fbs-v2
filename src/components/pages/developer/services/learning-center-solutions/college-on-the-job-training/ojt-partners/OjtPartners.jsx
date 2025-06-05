import React from "react";
import useQueryData from "../../../../../../custom-hooks/useQueryData";
import {
  getConvertStringToJSONparseData,
  googleHDViewLink,
} from "../../../../../../helpers/functions-general";
import LoadImages from "../../../../../../partials/LoadImages";
import { HiPencil } from "react-icons/hi";

const OjtPartners = ({ ojtTitlesData, handleUpdateOjtPartnersTitle }) => {
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
      <>
        <section className="partners py-20">
          <div className="customContainer relative">
            <p>
              {ojtTitlesData?.data?.[0]?.ojt_titles_partners_subtitle ||
                "Subtitle"}
            </p>
            <h2 className="text-[clamp(20px,7vw,35px)] font-semibold text-primary leading-[1.1] mb-8">
              {ojtTitlesData?.data?.[0]?.ojt_titles_partners_title || "Title"}
            </h2>
            <a
              className="absolute cursor-pointer tooltip-btn top-0 left-[30rem] "
              data-tooltip="Edit contents"
              onClick={handleUpdateOjtPartnersTitle}
            >
              <HiPencil className=" bg-[#C7AC27] rounded-full  w-[25px] h-[25px] p-[5px] border-[1px] text-black" />
            </a>
            <ul className="flex flex-wrap justify-center gap-14 items-center">
              {partnersData?.data
                ?.filter(
                  (item) =>
                    item.partners_page === "College On-the-job- Training"
                )
                ?.map((item) => {
                  const partnersImages =
                    getConvertStringToJSONparseData(item.partners_img) || [];

                  return (
                    <li
                      key={item.id || item.partners_name}
                      className="relative"
                    >
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
    </>
  );
};

export default OjtPartners;
