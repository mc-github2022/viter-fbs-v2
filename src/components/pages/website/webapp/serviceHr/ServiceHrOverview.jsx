import React from "react";
import { FaFileDownload } from "react-icons/fa";
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

const ServiceHrOverview = () => {
  const { data: hrisOverviewData } = useQueryData(
    `${apiVersion}/hris-overview`, // endpoint
    "get", // method
    "hris-overview" // key
  );

  const { data: hrisData } = useQueryData(
    `${apiVersion}/hris`, // endpoint
    "get", // method
    "hris" // key
  );

  const hrisOverviewImage = getConvertStringToJSONparseData(
    hrisOverviewData?.data?.[0]?.hris_overview_img
  );

  return (
    <>
      <section className="ServiceHrOverview py-20 bg-customGray">
        <div className="customContainer">
          <p>
            {hrisOverviewData?.data?.length > 0 &&
            hrisOverviewData.data[0]?.hris_overview_subtitle
              ? hrisOverviewData?.data[0].hris_overview_subtitle
              : ""}
          </p>
          <h2 className="text-[clamp(20px,7vw,35px)] leading-[1.1] mb-12 text-light">
            <span className="font-semibold text-primary">
              {hrisOverviewData?.data?.length > 0 &&
              hrisOverviewData.data[0]?.hris_overview_title
                ? hrisOverviewData?.data[0].hris_overview_title
                : ""}
            </span>
          </h2>
          <div className="wrapper lg:grid lg:grid-cols-2 gap-12">
            <div>
              {hrisOverviewImage.map((img, index) => (
                <LoadImages
                  url={`${googleHDViewLink}${img?.id}`}
                  className="mb-12 w-fit mx-auto"
                  alt={`Our Web Application ${index + 1}`}
                  key={index}
                />
              ))}
              <ul className="flex flex-col md:flex md:flex-row items-center gap-12">
                <li>
                  {hrisData?.data.map((item, key) => (
                    <a
                      href={`${item.hris_banner_button_link}`}
                      target="_blank"
                      className="btn bg-primary text-light font-semibold uppercase"
                      key={key}
                    >
                      {item.hris_banner_button_text}
                    </a>
                  ))}
                </li>
                {/* <li>
                  <a
                    href="#"
                    className="flex items-center gap-2 font-bold text-primary"
                  >
                    {webAppOverview[0].btnDownloadText} <FaFileDownload />
                  </a>
                </li> */}
              </ul>
            </div>
            <div className="mt-14 lg:mt-0">
              <ul>
                <li className="flex items-start gap-4 text-dark mb-6">
                  <div className="flex gap-4 items-start">
                    <div>
                      <FaRegCircleCheck className="circleCheck text-primary text-[clamp(25px,5vw,30px)] bg-gradient-to-r from-primary to-secondary bg-clip-text text-[transparent]" />
                    </div>
                    <div>
                      <h3 className="text-primary bg-gradient-to-r from-primary to-secondary bg-clip-text text-[transparent] text-[clamp(16px,5vw,24px)] mb-3">
                        {hrisOverviewData?.data?.length > 0 &&
                        hrisOverviewData.data[0]?.hris_overview_list_title_a
                          ? hrisOverviewData?.data[0].hris_overview_list_title_a
                          : ""}
                      </h3>
                      <p className="text-justify">
                        {hrisOverviewData?.data?.length > 0 &&
                        hrisOverviewData.data[0]
                          ?.hris_overview_list_description_a
                          ? hrisOverviewData?.data[0]
                              .hris_overview_list_description_a
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
                        {hrisOverviewData?.data?.length > 0 &&
                        hrisOverviewData.data[0]?.hris_overview_list_title_b
                          ? hrisOverviewData?.data[0].hris_overview_list_title_b
                          : ""}
                      </h3>
                      <p>
                        {hrisOverviewData?.data?.length > 0 &&
                        hrisOverviewData.data[0]
                          ?.hris_overview_list_description_b
                          ? hrisOverviewData?.data[0]
                              .hris_overview_list_description_b
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
                        {hrisOverviewData?.data?.length > 0 &&
                        hrisOverviewData.data[0]?.hris_overview_list_title_c
                          ? hrisOverviewData?.data[0].hris_overview_list_title_c
                          : ""}
                      </h3>
                      <p className="text-justify">
                        {hrisOverviewData?.data?.length > 0 &&
                        hrisOverviewData.data[0]
                          ?.hris_overview_list_description_c
                          ? hrisOverviewData?.data[0]
                              .hris_overview_list_description_c
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

export default ServiceHrOverview;
