import React from "react";
import { HiPencil } from "react-icons/hi";
import { LuEye, LuHeartHandshake } from "react-icons/lu";
import { TbTargetArrow } from "react-icons/tb";

const WorkVisionMission = ({
  workVisionMissionData,
  handleUpdateWorkVisionMissionTitle,
  handleUpdateWorkVision,
  handleUpdateWorkMission,
  handleUpdateWorkCoreValues,
}) => {
  return (
    <>
      <section className="missionVission py-20 bg-customGray">
        <div className="customContainer relative">
          <a
            className="absolute cursor-pointer tooltip-btn left-[45rem] -top-9 "
            data-tooltip="Edit contents"
            onClick={handleUpdateWorkVisionMissionTitle}
          >
            <HiPencil className=" bg-[#C7AC27] rounded-full  w-[25px] h-[25px] p-[5px] border-[1px] text-black" />
          </a>
          <div className="lg:w-[50%] mb-4">
            <p>
              {workVisionMissionData?.data?.[0]?.work_vision_subtitle ||
                "Subtitle"}
            </p>
            <h2 className="text-[clamp(20px,7vw,35px)] leading-[1.1] mb-12 text-light">
              <span className="font-semibold text-primary">
                {workVisionMissionData?.data?.[0]?.work_vision_title || "Title"}
              </span>
            </h2>
          </div>
          <div className="wrapper flex flex-wrap gap-5 place-content-center">
            <div className="gridItem grid bg-light p-10 w-[400px] relative">
              <a
                className="absolute cursor-pointer tooltip-btn right-0 top-2"
                data-tooltip="Edit contents"
                onClick={handleUpdateWorkVision}
              >
                <HiPencil className=" bg-[#C7AC27] rounded-full  w-[25px] h-[25px] p-[5px] border-[1px] text-black" />
              </a>
              <div className="text-center">
                <LuEye className="text-[50px] mx-auto text-secondary mb-2" />
                <h2 className="text-2xl font-bold mb-10 textGradient">
                  {workVisionMissionData?.data?.[0]?.work_vision_vision_title ||
                    "Title"}
                </h2>
                <p>
                  {workVisionMissionData?.data?.[0]?.work_vision_vision_desc ||
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta explicabo quas doloremque, temporibus nulla iste minus saepe alias illum, nihil molestias error perferendis! Autem eligendi blanditiis magnam, dignissimos alias officiis."}
                </p>
              </div>
            </div>
            <div className="gridItem grid bg-light p-10 w-[400px] relative">
              <a
                className="absolute cursor-pointer tooltip-btn right-0 top-2"
                data-tooltip="Edit contents"
                onClick={handleUpdateWorkMission}
              >
                <HiPencil className=" bg-[#C7AC27] rounded-full  w-[25px] h-[25px] p-[5px] border-[1px] text-black" />
              </a>
              <div className="text-center">
                <TbTargetArrow className="text-[50px] mx-auto text-secondary mb-2" />
                <h2 className="text-2xl font-bold mb-10 textGradient">
                  {workVisionMissionData?.data?.[0]
                    ?.work_vision_mission_title || "Title"}
                </h2>
                <p>
                  {workVisionMissionData?.data?.[0]?.work_vision_mission_desc ||
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta explicabo quas doloremque, temporibus nulla iste minus saepe alias illum, nihil molestias error perferendis! Autem eligendi blanditiis magnam, dignissimos alias officiis."}
                </p>
              </div>
            </div>
            <div className="gridItem grid bg-light p-10 w-[400px] relative">
              <a
                className="absolute cursor-pointer tooltip-btn right-0 top-2"
                data-tooltip="Edit contents"
                onClick={handleUpdateWorkCoreValues}
              >
                <HiPencil className=" bg-[#C7AC27] rounded-full  w-[25px] h-[25px] p-[5px] border-[1px] text-black" />
              </a>
              <div className="text-center">
                <LuHeartHandshake className="text-[50px] mx-auto text-secondary mb-2" />
                <h2 className="text-2xl font-bold mb-10 textGradient">
                  {workVisionMissionData?.data?.[0]?.work_vision_core_title ||
                    "Title"}
                </h2>
                <p>
                  <ul>
                    {workVisionMissionData?.data?.[0]?.work_vision_core_list
                      .split("\n") // Split by new lines
                      .filter((list) => list.trim() !== "") // Remove empty lines
                      .map((list, index) => <li key={index}>{list}</li>) ||
                      "List"}
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkVisionMission;
