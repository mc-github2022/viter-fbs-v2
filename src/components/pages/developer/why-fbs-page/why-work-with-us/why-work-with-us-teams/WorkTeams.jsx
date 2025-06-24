import React from "react";
import {
  devBaseImgUrl,
  getConvertStringToJSONparseData,
  googleHDViewLink,
} from "../../../../../helpers/functions-general";
import { HiPencil } from "react-icons/hi";
import { FaRegImages } from "react-icons/fa";
import LoadImages from "../../../../../partials/LoadImages";

const WorkTeams = ({
  workTeamsData,
  workTitlesData,
  handleUpdateWorkTeamsTitle,
  handleUpdateWorkTeamsCeo,
  handleUpdateWorkTeamsOm,
  handleUpdateWorkTeamsHr,
  handleUpdateWorkTeamsFinance,
  handleUpdateWorkTeamsLcs,
  handleUpdateWorkTeamsWeb,
  handleUpdateWorkTeamsMarketing,
  handleUpdateWorkTeamsVa,
}) => {
  const ceoImage = getConvertStringToJSONparseData(
    workTeamsData?.data?.[0]?.work_teams_ceo_img
  );
  const omImage = getConvertStringToJSONparseData(
    workTeamsData?.data?.[0]?.work_teams_om_img
  );
  const hrImage = getConvertStringToJSONparseData(
    workTeamsData?.data?.[0]?.work_teams_hr_img
  );
  const financeImage = getConvertStringToJSONparseData(
    workTeamsData?.data?.[0]?.work_teams_finance_img
  );
  const lcsImage = getConvertStringToJSONparseData(
    workTeamsData?.data?.[0]?.work_teams_lcs_img
  );
  const webImage = getConvertStringToJSONparseData(
    workTeamsData?.data?.[0]?.work_teams_web_img
  );
  const marketingImage = getConvertStringToJSONparseData(
    workTeamsData?.data?.[0]?.work_teams_marketing_img
  );
  const vaImage = getConvertStringToJSONparseData(
    workTeamsData?.data?.[0]?.work_teams_va_img
  );

  return (
    <>
      <section className="whyUsTheTeam py-20 bg-[#000]">
        <div className="customContainer px-7">
          <div className="wrapper grid grid-cols-1 xl:grid-cols-[_270px_2fr] gap-16">
            <div className="flex items-center">
              <div className="relative">
                <a
                  className="absolute cursor-pointer tooltip-btn right-6 -top-9 "
                  data-tooltip="Edit contents"
                  onClick={handleUpdateWorkTeamsTitle}
                >
                  <HiPencil className=" bg-[#C7AC27] rounded-full  w-[25px] h-[25px] p-[5px] border-[1px] text-black" />
                </a>
                <p className="text-light">
                  {workTitlesData?.data?.[0]?.work_titles_teams_subtitle ||
                    "Subtitle"}
                </p>
                <h2 className="text-[clamp(20px,7vw,35px)] font-semibold text-primary leading-[1.1] mb-8">
                  {workTitlesData?.data?.[0]?.work_titles_teams_title ||
                    "Title"}
                </h2>
              </div>
            </div>
            <div className="flex flex-wrap gap-y-0 gap-20 place-content-center xl:grid xl:grid-cols-4 xl:gap-20">
              <div className="theTeamItem relative">
                <a
                  className="absolute cursor-pointer tooltip-btn -right-8"
                  data-tooltip="Edit contents"
                  onClick={handleUpdateWorkTeamsCeo}
                >
                  <FaRegImages className=" bg-[#C7AC27] rounded-full  w-[25px] h-[25px] p-[5px] border-[1px] text-black" />
                </a>
                <div className="thePill h-[230px] lg:h-[300px] w-[130px] rounded-full bg-gradient-to-b from-[#bd0565] to-blue-[transparent] rotate-[50deg] overflow-hidden relative">
                  <div className="absolute top-2 rotate-[-50deg] w-[220px] ml-2">
                    {workTeamsData?.data?.length > 0 && ceoImage?.length > 0 ? (
                      <>
                        {ceoImage.map((img, index) => (
                          <LoadImages
                            url={`${googleHDViewLink}${img?.id}`}
                            className="grayscale"
                            alt="effrey Pessina"
                            key={index}
                          />
                        ))}
                      </>
                    ) : (
                      <div className="mb-12 w-fit object-cover object-top place-content-center place-items-center  ">
                        <FaRegImages className="text-[100px] text-gray-400" />
                      </div>
                    )}
                  </div>
                  <div className="nameAndPos text-light text-center rotate-[-50deg] text-xs ml-3 absolute bottom-[50px] left-3">
                    <p className="">
                      {workTeamsData?.data?.[0]?.work_teams_ceo_name || "Name"}
                    </p>
                    <p>
                      {workTeamsData?.data?.[0]?.work_teams_ceo_position ||
                        "Position"}
                    </p>
                  </div>
                </div>
              </div>
              <div className="theTeamItem relative">
                <a
                  className="absolute cursor-pointer tooltip-btn -right-8"
                  data-tooltip="Edit contents"
                  onClick={handleUpdateWorkTeamsOm}
                >
                  <FaRegImages className=" bg-[#C7AC27] rounded-full  w-[25px] h-[25px] p-[5px] border-[1px] text-black" />
                </a>
                <div className="thePill h-[230px] lg:h-[300px] w-[130px] rounded-full bg-gradient-to-b from-[#bd0565] to-blue-[transparent] rotate-[50deg] overflow-hidden relative">
                  <div className="absolute top-[-10px] rotate-[-50deg] w-[230px] ml-4">
                    {workTeamsData?.data?.length > 0 && omImage?.length > 0 ? (
                      <>
                        {omImage.map((img, index) => (
                          <LoadImages
                            url={`${googleHDViewLink}${img?.id}`}
                            className="grayscale"
                            alt="effrey Pessina"
                            key={index}
                          />
                        ))}
                      </>
                    ) : (
                      <div className="mb-12 w-fit object-cover object-top place-content-center place-items-center  ">
                        <FaRegImages className="text-[100px] text-gray-400" />
                      </div>
                    )}
                  </div>
                  <div className="nameAndPos text-light text-center rotate-[-50deg] text-xs ml-3 absolute bottom-[50px] left-3">
                    <p className="">
                      {workTeamsData?.data?.[0]?.work_teams_om_name || "Name"}
                    </p>
                    <p>
                      {workTeamsData?.data?.[0]?.work_teams_om_position ||
                        "Position"}
                    </p>
                  </div>
                </div>
              </div>
              <div className="theTeamItem relative">
                <a
                  className="absolute cursor-pointer tooltip-btn -right-8"
                  data-tooltip="Edit contents"
                  onClick={handleUpdateWorkTeamsHr}
                >
                  <FaRegImages className=" bg-[#C7AC27] rounded-full  w-[25px] h-[25px] p-[5px] border-[1px] text-black" />
                </a>
                <div className="thePill h-[230px] lg:h-[300px] w-[130px] rounded-full bg-gradient-to-b from-[#bd0565] to-blue-[transparent] rotate-[50deg] overflow-hidden relative">
                  <div className="absolute top-[-30px] left-[45px] rotate-[-50deg] w-[180px] ml-2">
                    {workTeamsData?.data?.length > 0 && hrImage?.length > 0 ? (
                      <>
                        {hrImage.map((img, index) => (
                          <LoadImages
                            url={`${googleHDViewLink}${img?.id}`}
                            className="grayscale"
                            alt="effrey Pessina"
                            key={index}
                          />
                        ))}
                      </>
                    ) : (
                      <div className="mb-12 w-fit object-cover object-top place-content-center place-items-center  ">
                        <FaRegImages className="text-[100px] text-gray-400" />
                      </div>
                    )}
                  </div>
                  <div className="nameAndPos text-light text-center rotate-[-50deg] text-xs ml-3 absolute bottom-[50px] left-3">
                    <p className="">
                      {workTeamsData?.data?.[0]?.work_teams_hr_name || "Name"}
                    </p>
                    <p>
                      {workTeamsData?.data?.[0]?.work_teams_hr_position ||
                        "Position"}
                    </p>
                  </div>
                </div>
              </div>
              <div className="theTeamItem relative">
                <a
                  className="absolute cursor-pointer tooltip-btn -right-4"
                  data-tooltip="Edit contents"
                  onClick={handleUpdateWorkTeamsFinance}
                >
                  <FaRegImages className=" bg-[#C7AC27] rounded-full  w-[25px] h-[25px] p-[5px] border-[1px] text-black" />
                </a>
                <div className="thePill h-[230px] lg:h-[300px] w-[130px] rounded-full bg-gradient-to-b from-[#bd0565] to-blue-[transparent] rotate-[50deg] overflow-hidden relative">
                  <div className="absolute top-2 left-[10px] rotate-[-50deg] w-[180px] ml-2">
                    {workTeamsData?.data?.length > 0 &&
                    financeImage?.length > 0 ? (
                      <>
                        {financeImage.map((img, index) => (
                          <LoadImages
                            url={`${googleHDViewLink}${img?.id}`}
                            className="grayscale"
                            alt="effrey Pessina"
                            key={index}
                          />
                        ))}
                      </>
                    ) : (
                      <div className="mb-12 w-fit object-cover object-top place-content-center place-items-center  ">
                        <FaRegImages className="text-[100px] text-gray-400" />
                      </div>
                    )}
                  </div>
                  <div className="nameAndPos text-light text-center rotate-[-50deg] text-xs ml-3 absolute bottom-[50px] left-3">
                    <p className="">
                      {workTeamsData?.data?.[0]?.work_teams_finance_name ||
                        "Name"}
                    </p>
                    <p>
                      {workTeamsData?.data?.[0]?.work_teams_finance_position ||
                        "Position"}
                    </p>
                  </div>
                </div>
              </div>
              <div className="theTeamItem relative">
                <a
                  className="absolute cursor-pointer tooltip-btn -right-8"
                  data-tooltip="Edit contents"
                  onClick={handleUpdateWorkTeamsLcs}
                >
                  <FaRegImages className=" bg-[#C7AC27] rounded-full  w-[25px] h-[25px] p-[5px] border-[1px] text-black" />
                </a>
                <div className="thePill h-[230px] lg:h-[300px] w-[130px] rounded-full bg-gradient-to-b from-[#bd0565] to-blue-[transparent] rotate-[50deg] overflow-hidden relative">
                  <div className="absolute top-[-30px] rotate-[-50deg] w-[220px] ml-[50px]">
                    {workTeamsData?.data?.length > 0 && lcsImage?.length > 0 ? (
                      <>
                        {lcsImage.map((img, index) => (
                          <LoadImages
                            url={`${googleHDViewLink}${img?.id}`}
                            className="grayscale"
                            alt="effrey Pessina"
                            key={index}
                          />
                        ))}
                      </>
                    ) : (
                      <div className="mb-12 w-fit object-cover object-top place-content-center place-items-center  ">
                        <FaRegImages className="text-[100px] text-gray-400" />
                      </div>
                    )}
                  </div>
                  <div className="nameAndPos text-light text-center rotate-[-50deg] text-xs ml-3 absolute bottom-[50px] left-3">
                    <p className="">
                      {workTeamsData?.data?.[0]?.work_teams_lcs_name || "Name"}
                    </p>
                    <p>
                      {workTeamsData?.data?.[0]?.work_teams_lcs_position ||
                        "Position"}
                    </p>
                  </div>
                </div>
              </div>
              <div className="theTeamItem relative">
                <a
                  className="absolute cursor-pointer tooltip-btn -right-8"
                  data-tooltip="Edit contents"
                  onClick={handleUpdateWorkTeamsWeb}
                >
                  <FaRegImages className=" bg-[#C7AC27] rounded-full  w-[25px] h-[25px] p-[5px] border-[1px] text-black" />
                </a>
                <div className="thePill h-[230px] lg:h-[300px] w-[130px] rounded-full bg-gradient-to-b from-[#bd0565] to-blue-[transparent] rotate-[50deg] overflow-hidden relative">
                  <div className="absolute top-[-20px] rotate-[-50deg] w-[200px] ml-[50px]">
                    {workTeamsData?.data?.length > 0 && webImage?.length > 0 ? (
                      <>
                        {webImage.map((img, index) => (
                          <LoadImages
                            url={`${googleHDViewLink}${img?.id}`}
                            className="grayscale"
                            alt="effrey Pessina"
                            key={index}
                          />
                        ))}
                      </>
                    ) : (
                      <div className="mb-12 w-fit object-cover object-top place-content-center place-items-center  ">
                        <FaRegImages className="text-[100px] text-gray-400" />
                      </div>
                    )}
                  </div>
                  <div className="nameAndPos text-light text-center rotate-[-50deg] text-xs ml-3 absolute bottom-[50px] left-3">
                    <p className="">
                      {workTeamsData?.data?.[0]?.work_teams_web_name || "Name"}
                    </p>
                    <p>
                      {workTeamsData?.data?.[0]?.work_teams_web_position ||
                        "Position"}
                    </p>
                  </div>
                </div>
              </div>
              <div className="theTeamItem relative">
                <a
                  className="absolute cursor-pointer tooltip-btn -right-8"
                  data-tooltip="Edit contents"
                  onClick={handleUpdateWorkTeamsMarketing}
                >
                  <FaRegImages className=" bg-[#C7AC27] rounded-full  w-[25px] h-[25px] p-[5px] border-[1px] text-black" />
                </a>
                <div className="thePill h-[230px] lg:h-[300px] w-[130px] rounded-full bg-gradient-to-b from-[#bd0565] to-blue-[transparent] rotate-[50deg] overflow-hidden relative">
                  <div className="absolute top-[-20px] rotate-[-50deg] w-[200px] ml-2">
                    {workTeamsData?.data?.length > 0 &&
                    marketingImage?.length > 0 ? (
                      <>
                        {marketingImage.map((img, index) => (
                          <LoadImages
                            url={`${googleHDViewLink}${img?.id}`}
                            className="grayscale"
                            alt="effrey Pessina"
                            key={index}
                          />
                        ))}
                      </>
                    ) : (
                      <div className="mb-12 w-fit object-cover object-top place-content-center place-items-center  ">
                        <FaRegImages className="text-[100px] text-gray-400" />
                      </div>
                    )}
                  </div>
                  <div className="nameAndPos text-light text-center rotate-[-50deg] text-xs ml-3 absolute bottom-[50px] left-3">
                    <p className="">
                      {workTeamsData?.data?.[0]?.work_teams_marketing_name ||
                        "Name"}
                    </p>
                    <p>
                      {workTeamsData?.data?.[0]
                        ?.work_teams_marketing_position || "Position"}
                    </p>
                  </div>
                </div>
              </div>
              <div className="theTeamItem relative">
                <a
                  className="absolute cursor-pointer tooltip-btn -right-4"
                  data-tooltip="Edit contents"
                  onClick={handleUpdateWorkTeamsVa}
                >
                  <FaRegImages className=" bg-[#C7AC27] rounded-full  w-[25px] h-[25px] p-[5px] border-[1px] text-black" />
                </a>
                <div className="thePill h-[230px] lg:h-[300px] w-[130px] rounded-full bg-gradient-to-b from-[#bd0565] to-blue-[transparent] rotate-[50deg] overflow-hidden relative">
                  <div className="absolute top-[-20px] rotate-[-50deg] w-[200px] ml-12">
                    {workTeamsData?.data?.length > 0 && vaImage?.length > 0 ? (
                      <>
                        {vaImage.map((img, index) => (
                          <LoadImages
                            url={`${googleHDViewLink}${img?.id}`}
                            className="grayscale"
                            alt="effrey Pessina"
                            key={index}
                          />
                        ))}
                      </>
                    ) : (
                      <div className="mb-12 w-fit object-cover object-top place-content-center place-items-center  ">
                        <FaRegImages className="text-[100px] text-gray-400" />
                      </div>
                    )}
                  </div>
                  <div className="nameAndPos text-light text-center rotate-[-50deg] text-xs ml-3 absolute bottom-[50px] left-3">
                    <p className="">
                      {workTeamsData?.data?.[0]?.work_teams_va_name || "Name"}
                    </p>
                    <p>
                      {workTeamsData?.data?.[0]?.work_teams_va_position ||
                        "Position"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkTeams;
