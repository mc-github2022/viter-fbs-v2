import React from "react";
import { FaRegCircleCheck } from "react-icons/fa6";
import { webAppOverview } from "./data";
import {
  apiVersion,
  devBaseImgUrl,
  getConvertStringToJSONparseData,
  googleHDViewLink,
} from "../../../../helpers/functions-general";
import useQueryData from "../../../../custom-hooks/useQueryData";
import LoadImages from "../../../../partials/LoadImages";

const VaAdminSolutionOverview = () => {
  const { data: administrativeOverviewData } = useQueryData(
    `${apiVersion}/administrative-overview`, // endpoint
    "get", // method
    "administrative-overview", // key
    {},
    null,
    true
  );

  const AdministrativeOverviewImage = getConvertStringToJSONparseData(
    administrativeOverviewData?.data?.[0]?.administrative_overview_img
  );

  return (
    <>
      <section className="VaAdminSolutionOverview py-20 ">
        <div className="customContainer">
          <p>
            {administrativeOverviewData?.data?.[0]
              ?.administrative_overview_subtitle || "Subtitle"}
          </p>
          <h2 className="text-[clamp(20px,7vw,35px)] leading-[1.1] mb-12 text-light">
            <span className="font-semibold text-primary">
              {administrativeOverviewData?.data?.[0]
                ?.administrative_overview_title || "Title"}
            </span>
          </h2>
          <div className="wrapper lg:grid lg:grid-cols-2 gap-12">
            <div>
              {AdministrativeOverviewImage.map((img, index) => (
                <LoadImages
                  url={`${googleHDViewLink}${img?.id}`}
                  className="mb-12 md:mb-12 lg:mb-0 h-full object-cover"
                  alt="Right Choice for Your VA Needs."
                  key={index}
                />
              ))}
            </div>
            <div>
              <ul>
                <li className="flex items-start gap-4 text-dark mb-6">
                  <div className="flex gap-4 items-start">
                    <div>
                      <FaRegCircleCheck className="circleCheck text-primary text-[clamp(25px,5vw,30px)] bg-gradient-to-r from-primary to-secondary bg-clip-text text-[transparent]" />
                    </div>
                    <div>
                      <h3 className="text-primary bg-gradient-to-r from-primary to-secondary bg-clip-text text-[transparent] text-[clamp(16px,5vw,24px)] mb-3">
                        {administrativeOverviewData?.data?.[0]
                          ?.administrative_overview_list_title_a || ""}
                      </h3>
                      <p>
                        {administrativeOverviewData?.data?.[0]
                          ?.administrative_overview_list_description_a || ""}
                      </p>
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-4 text-dark mb-6">
                  <div className="flex gap-4 items-start">
                    <div>
                      <FaRegCircleCheck className="circleCheck text-primary text-[clamp(25px,5vw,30px)] bg-gradient-to-r from-primary to-secondary bg-clip-text text-[transparent]" />
                    </div>
                    <div>
                      <h3 className="text-primary bg-gradient-to-r from-primary to-secondary bg-clip-text text-[transparent] text-[clamp(16px,5vw,24px)] mb-3">
                        {administrativeOverviewData?.data?.[0]
                          ?.administrative_overview_list_title_b || ""}
                      </h3>
                      <p>
                        {administrativeOverviewData?.data?.[0]
                          ?.administrative_overview_list_description_b || ""}
                      </p>
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-4 text-dark">
                  <div className="flex gap-4 items-start">
                    <div>
                      <FaRegCircleCheck className="circleCheck text-primary text-[clamp(25px,5vw,30px)] bg-gradient-to-r from-primary to-secondary bg-clip-text text-[transparent]" />
                    </div>
                    <div>
                      <h3 className="text-primary bg-gradient-to-r from-primary to-secondary bg-clip-text text-[transparent] text-[clamp(16px,5vw,24px)] mb-3">
                        {administrativeOverviewData?.data?.[0]
                          ?.administrative_overview_list_title_c || "T"}
                      </h3>
                      <p>
                        {administrativeOverviewData?.data?.[0]
                          ?.administrative_overview_list_description_c || ""}
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VaAdminSolutionOverview;
