import React from "react";
import {
  devBaseImgUrl,
  getConvertStringToJSONparseData,
  googleHDViewLink,
} from "../../../helpers/functions-general";
import LoadImages from "../../../partials/LoadImages";
import useQueryData from "../../../custom-hooks/useQueryData";

const Partners = () => {
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
      <section className="partners py-24 lg:pb-24 lg:pt-0">
        <div className="customContainer">
          <div className="wrapper grid grid-cols-1 lg:grid-cols-[_1fr_1fr]">
            <div className="order-2 lg:order-1">
              <ul className="grid grid-cols-2 [&>li>img]:mx-auto gap-8 items-center">
                {partnersData?.data
                  ?.filter((item) => item.partners_page === "Home Page")
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
                            className="w-[170px] h-[170px] object-contain"
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
            <div className="text-right flex items-center justify-end order-1 lg:order-2">
              <div className="mb-20">
                <h3 className="text-[clamp(30px,6vw,45px)] font-semibold  leading-[1.1] mb-8  text-dark">
                  They Love <br />
                  <span className="text-primary">Working With Us.</span>
                </h3>
                <div className="flex justify-end">
                  <p className="lg:w-[400px]">
                    Explore the diverse range of clients and partners who trust
                    us to deliver exceptional solution and services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Partners;
