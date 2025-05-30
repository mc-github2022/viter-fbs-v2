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

const BusinessRegOverview = () => {
  const { data: registrationOverviewData } = useQueryData(
    `${apiVersion}/registration-overview`, // endpoint
    "get", // method
    "registration-overview", // key
    {},
    null,
    true
  );

  const registrationOverviewImage = getConvertStringToJSONparseData(
    registrationOverviewData?.data?.[0]?.registration_overview_img
  );

  return (
    <>
      <section className="BusinessRegOverview py-20 ">
        <div className="customContainer">
          <p>
            {registrationOverviewData?.data?.length > 0 &&
            registrationOverviewData.data[0]?.registration_overview_subtitle
              ? registrationOverviewData?.data[0].registration_overview_subtitle
              : ""}
          </p>
          <h2 className="text-[clamp(20px,7vw,35px)] leading-[1.1] mb-12 text-light">
            <span className="font-semibold text-primary">
              {registrationOverviewData?.data?.length > 0 &&
              registrationOverviewData.data[0]?.registration_overview_title
                ? registrationOverviewData?.data[0].registration_overview_title
                : ""}
            </span>
          </h2>
          <div className="wrapper lg:grid lg:grid-cols-2 gap-12">
            <div>
              {registrationOverviewImage.map((img, index) => (
                <LoadImages
                  url={`${googleHDViewLink}${img?.id}`}
                  className="mb-12 md:mb-12 lg:mb-0 h-full object-cover w-full mx-auto"
                  alt="Right Choice for Your Business Registration Needs."
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
                        {registrationOverviewData?.data?.length > 0 &&
                        registrationOverviewData.data[0]
                          ?.registration_overview_list_title_a
                          ? registrationOverviewData?.data[0]
                              .registration_overview_list_title_a
                          : ""}
                      </h3>
                      <p className="text-justify">
                        {registrationOverviewData?.data?.length > 0 &&
                        registrationOverviewData.data[0]
                          ?.registration_overview_list_description_a
                          ? registrationOverviewData?.data[0]
                              .registration_overview_list_description_a
                          : ""}
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
                        {registrationOverviewData?.data?.length > 0 &&
                        registrationOverviewData.data[0]
                          ?.registration_overview_list_title_b
                          ? registrationOverviewData?.data[0]
                              .registration_overview_list_title_b
                          : ""}
                      </h3>
                      <p className="text-justify">
                        {registrationOverviewData?.data?.length > 0 &&
                        registrationOverviewData.data[0]
                          ?.registration_overview_list_description_b
                          ? registrationOverviewData?.data[0]
                              .registration_overview_list_description_b
                          : ""}
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
                        {registrationOverviewData?.data?.length > 0 &&
                        registrationOverviewData.data[0]
                          ?.registration_overview_list_title_c
                          ? registrationOverviewData?.data[0]
                              .registration_overview_list_title_c
                          : ""}
                      </h3>
                      <p className="text-justify">
                        {registrationOverviewData?.data?.length > 0 &&
                        registrationOverviewData.data[0]
                          ?.registration_overview_list_description_c
                          ? registrationOverviewData?.data[0]
                              .registration_overview_list_description_c
                          : ""}
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

export default BusinessRegOverview;
