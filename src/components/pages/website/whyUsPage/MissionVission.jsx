import React from "react";
import { IoEyeOutline } from "react-icons/io5";
import { LuEye, LuHeartHandshake } from "react-icons/lu";
import { TbTargetArrow } from "react-icons/tb";
import useQueryData from "../../../custom-hooks/useQueryData";
import { apiVersion } from "../../../helpers/functions-general";

const MissionVission = () => {
  const {
    isLoading: isLoadingVisionMission,
    isFetching: isFetchingVisionMission,
    data: workVisionMissionData,
  } = useQueryData(
    `${apiVersion}/work-vision-mission`, // endpoint
    "get", // method
    "work-vision-mission" // key
  );

  return (
    <>
      <section className="missionVission py-20 bg-customGray">
        <div className="customContainer">
          <div className="lg:w-[50%] mb-4">
            <p>
              {workVisionMissionData?.data?.[0]?.work_vision_subtitle || ""}
            </p>
            <h2 className="text-[clamp(20px,7vw,35px)] leading-[1.1] mb-12 text-light">
              <span className="font-semibold text-primary">
                {workVisionMissionData?.data?.[0]?.work_vision_title || ""}
              </span>
            </h2>
          </div>
          <div className="wrapper flex flex-wrap gap-5 place-content-center">
            <div className="gridItem grid bg-light p-10 w-[400px]">
              <div className="text-center">
                <LuEye className="text-[50px] mx-auto text-secondary mb-2" />
                <h2 className="text-2xl font-bold mb-10 textGradient">
                  {workVisionMissionData?.data?.[0]?.work_vision_vision_title ||
                    ""}
                </h2>
                <p>
                  {workVisionMissionData?.data?.[0]?.work_vision_vision_desc ||
                    ""}
                </p>
              </div>
            </div>
            <div className="gridItem grid bg-light p-10 w-[400px]">
              <div className="text-center">
                <TbTargetArrow className="text-[50px] mx-auto text-secondary mb-2" />
                <h2 className="text-2xl font-bold mb-10 textGradient">
                  {workVisionMissionData?.data?.[0]
                    ?.work_vision_mission_title || ""}
                </h2>
                <p>
                  {workVisionMissionData?.data?.[0]?.work_vision_mission_desc ||
                    ""}
                </p>
              </div>
            </div>
            <div className="gridItem grid bg-light p-10 w-[400px]">
              <div className="text-center">
                <LuHeartHandshake className="text-[50px] mx-auto text-secondary mb-2" />
                <h2 className="text-2xl font-bold mb-10 textGradient">
                  {workVisionMissionData?.data?.[0]?.work_vision_core_title ||
                    ""}
                </h2>
                <ul>
                  {workVisionMissionData?.data?.[0]?.work_vision_core_list
                    .split("\n") // Split by new lines
                    .filter((list) => list.trim() !== "") // Remove empty lines
                    .map((list, index) => <li key={index}>{list}</li>) ||
                    "List"}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MissionVission;
