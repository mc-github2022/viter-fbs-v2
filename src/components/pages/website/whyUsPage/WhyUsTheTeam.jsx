import React from "react";
import {
  apiVersion,
  devBaseImgUrl,
  getConvertStringToJSONparseData,
  googleHDViewLink,
} from "../../../helpers/functions-general";
import useQueryData from "../../../custom-hooks/useQueryData";
import LoadImages from "../../../partials/LoadImages";

const WhyUsTheTeam = ({ workTitlesData }) => {
  const { data: workTeamsData } = useQueryData(
    `${apiVersion}/work-teams`, // endpoint
    "get", // method
    "work-teams" // key
  );

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
              <div>
                <p className="text-light">
                  {workTitlesData?.data?.[0]?.work_titles_teams_subtitle || ""}
                </p>
                <h2 className="text-[clamp(20px,7vw,35px)] font-semibold text-primary leading-[1.1] mb-8">
                  {workTitlesData?.data?.[0]?.work_titles_teams_title || ""}
                </h2>
              </div>
            </div>
            <div className="flex flex-wrap gap-y-0 gap-20 place-content-center xl:grid xl:grid-cols-4 xl:gap-20">
              <div className="theTeamItem relative">
                <div className="thePill h-[230px] lg:h-[300px] w-[130px] rounded-full bg-gradient-to-b from-[#bd0565] to-blue-[transparent] rotate-[50deg] overflow-hidden relative">
                  <div className="absolute top-2 rotate-[-50deg] w-[220px] ml-2">
                    {ceoImage.map((img, index) => (
                      <LoadImages
                        url={`${googleHDViewLink}${img?.id}`}
                        className="grayscale"
                        alt="Jeffrey Pessina"
                        key={index}
                      />
                    ))}
                  </div>
                  <div className="nameAndPos text-light text-center rotate-[-50deg] text-xs ml-3 absolute bottom-[50px] left-3">
                    <p className="">
                      {workTeamsData?.data?.[0]?.work_teams_ceo_name || ""}
                    </p>
                    <p>
                      {workTeamsData?.data?.[0]?.work_teams_ceo_position || ""}
                    </p>
                  </div>
                </div>
              </div>
              <div className="theTeamItem relative">
                <div className="thePill h-[230px] lg:h-[300px] w-[130px] rounded-full bg-gradient-to-b from-[#bd0565] to-blue-[transparent] rotate-[50deg] overflow-hidden relative">
                  <div className="absolute top-[-10px] rotate-[-50deg] w-[230px] ml-4">
                    {omImage.map((img, index) => (
                      <LoadImages
                        url={`${googleHDViewLink}${img?.id}`}
                        className="grayscale"
                        alt="Ralph Acoba"
                        key={index}
                      />
                    ))}
                  </div>
                  <div className="nameAndPos text-light text-center rotate-[-50deg] text-xs ml-3 absolute bottom-[50px] left-3">
                    <p className="">
                      {" "}
                      {workTeamsData?.data?.[0]?.work_teams_om_name || ""}
                    </p>
                    <p>
                      {workTeamsData?.data?.[0]?.work_teams_om_position || ""}
                    </p>
                  </div>
                </div>
              </div>
              <div className="theTeamItem relative">
                <div className="thePill h-[230px] lg:h-[300px] w-[130px] rounded-full bg-gradient-to-b from-[#bd0565] to-blue-[transparent] rotate-[50deg] overflow-hidden relative">
                  <div className="absolute top-[-30px] left-[45px] rotate-[-50deg] w-[180px] ml-2">
                    {hrImage.map((img, index) => (
                      <LoadImages
                        url={`${googleHDViewLink}${img?.id}`}
                        className="grayscale"
                        alt="Rhoda Beloso"
                        key={index}
                      />
                    ))}
                  </div>
                  <div className="nameAndPos text-light text-center rotate-[-50deg] text-xs ml-3 absolute bottom-[50px] left-3">
                    <p className="">
                      {workTeamsData?.data?.[0]?.work_teams_hr_name || ""}
                    </p>
                    <p>
                      {workTeamsData?.data?.[0]?.work_teams_hr_position || ""}
                    </p>
                  </div>
                </div>
              </div>
              <div className="theTeamItem relative">
                <div className="thePill h-[230px] lg:h-[300px] w-[130px] rounded-full bg-gradient-to-b from-[#bd0565] to-blue-[transparent] rotate-[50deg] overflow-hidden relative">
                  <div className="absolute top-2 left-[10px] rotate-[-50deg] w-[180px] ml-2">
                    {financeImage.map((img, index) => (
                      <LoadImages
                        url={`${googleHDViewLink}${img?.id}`}
                        className="grayscale"
                        alt="Bhea Del Monte"
                        key={index}
                      />
                    ))}
                  </div>
                  <div className="nameAndPos text-light text-center rotate-[-50deg] text-xs ml-3 absolute bottom-[50px] left-3">
                    <p className="">
                      {workTeamsData?.data?.[0]?.work_teams_finance_name || ""}
                    </p>
                    <p>
                      {workTeamsData?.data?.[0]?.work_teams_finance_position ||
                        ""}
                    </p>
                  </div>
                </div>
              </div>
              <div className="theTeamItem relative">
                <div className="thePill h-[230px] lg:h-[300px] w-[130px] rounded-full bg-gradient-to-b from-[#bd0565] to-blue-[transparent] rotate-[50deg] overflow-hidden relative">
                  <div className="absolute top-[-30px] rotate-[-50deg] w-[220px] ml-[50px]">
                    {lcsImage.map((img, index) => (
                      <LoadImages
                        url={`${googleHDViewLink}${img?.id}`}
                        className="grayscale"
                        alt="Jhonny Dichoso"
                        key={index}
                      />
                    ))}
                  </div>
                  <div className="nameAndPos text-light text-center rotate-[-50deg] text-xs ml-3 absolute bottom-[50px] left-3">
                    <p className="">
                      {workTeamsData?.data?.[0]?.work_teams_lcs_name || ""}
                    </p>
                    <p>
                      {workTeamsData?.data?.[0]?.work_teams_lcs_position || ""}
                    </p>
                  </div>
                </div>
              </div>
              <div className="theTeamItem relative">
                <div className="thePill h-[230px] lg:h-[300px] w-[130px] rounded-full bg-gradient-to-b from-[#bd0565] to-blue-[transparent] rotate-[50deg] overflow-hidden relative">
                  <div className="absolute top-[-20px] rotate-[-50deg] w-[200px] ml-[50px]">
                    {webImage.map((img, index) => (
                      <LoadImages
                        url={`${googleHDViewLink}${img?.id}`}
                        className="grayscale"
                        alt="Patrick Reyes"
                        key={index}
                      />
                    ))}
                  </div>
                  <div className="nameAndPos text-light text-center rotate-[-50deg] text-xs ml-3 absolute bottom-[50px] left-3">
                    <p className="">
                      {workTeamsData?.data?.[0]?.work_teams_web_name || ""}
                    </p>
                    <p>
                      {workTeamsData?.data?.[0]?.work_teams_web_position || ""}
                    </p>
                  </div>
                </div>
              </div>
              <div className="theTeamItem relative">
                <div className="thePill h-[230px] lg:h-[300px] w-[130px] rounded-full bg-gradient-to-b from-[#bd0565] to-blue-[transparent] rotate-[50deg] overflow-hidden relative">
                  <div className="absolute top-[-20px] rotate-[-50deg] w-[200px] ml-2">
                    {marketingImage.map((img, index) => (
                      <LoadImages
                        url={`${googleHDViewLink}${img?.id}`}
                        className="grayscale"
                        alt="Carlo Del Monte"
                        key={index}
                      />
                    ))}
                  </div>
                  <div className="nameAndPos text-light text-center rotate-[-50deg] text-xs ml-3 absolute bottom-[50px] left-3">
                    <p className="">
                      {workTeamsData?.data?.[0]?.work_teams_marketing_name ||
                        ""}
                    </p>
                    <p>
                      {workTeamsData?.data?.[0]
                        ?.work_teams_marketing_position || ""}
                    </p>
                  </div>
                </div>
              </div>
              <div className="theTeamItem relative">
                <div className="thePill h-[230px] lg:h-[300px] w-[130px] rounded-full bg-gradient-to-b from-[#bd0565] to-blue-[transparent] rotate-[50deg] overflow-hidden relative">
                  <div className="absolute top-[-20px] rotate-[-50deg] w-[200px] ml-12">
                    {vaImage.map((img, index) => (
                      <LoadImages
                        url={`${googleHDViewLink}${img?.id}`}
                        className="grayscale"
                        alt="Michael De Jesus"
                        key={index}
                      />
                    ))}
                  </div>
                  <div className="nameAndPos text-light text-center rotate-[-50deg] text-xs ml-3 absolute bottom-[50px] left-3">
                    <p className="">
                      {workTeamsData?.data?.[0]?.work_teams_va_name || ""}
                    </p>
                    <p>
                      {workTeamsData?.data?.[0]?.work_teams_va_position || ""}
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

export default WhyUsTheTeam;
