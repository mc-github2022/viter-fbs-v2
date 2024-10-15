import React from "react";
import { IoEyeOutline } from "react-icons/io5";
import { LuEye, LuHeartHandshake } from "react-icons/lu";
import { TbTargetArrow } from "react-icons/tb";

const MissionVission = () => {
  return (
    <>
      <section className="missionVission py-20 bg-customGray">
        <div className="customContainer">
          <div className="lg:w-[50%] mb-4">
            <p>
              Our mission, vission, and core values are the driving forces
              behind the
            </p>
            <h2 className="text-[clamp(20px,7vw,35px)] leading-[1.1] mb-12 text-light">
              <span className="font-semibold text-primary">
                exceptional web, virtual, and learning solutions
              </span>
            </h2>
          </div>
          <div className="wrapper flex flex-col lg:grid lg:grid-cols-3 gap-5">
            <div className="gridItem grid place-items-start bg-light p-10">
              <div className="text-center">
                <LuEye className="text-[50px] mx-auto text-secondary mb-2" />
                <h2 className="text-2xl font-bold mb-10 textGradient">
                  Vision
                </h2>
                <p>
                  To be a globally competitive, premier provider of excellent
                  business solutions, while sustaining a business model that
                  will create positive social impact and make the Philippines an
                  outstanding place to live and work.
                </p>
              </div>
            </div>
            <div className="gridItem grid place-items-start bg-light p-10">
              <div className="text-center">
                <TbTargetArrow className="text-[50px] mx-auto text-secondary mb-2" />
                <h2 className="text-2xl font-bold mb-10 textGradient">
                  Mission
                </h2>
                <p>
                  To be a globally competitive, premier provider of excellent
                  business solutions, while sustaining a business model that
                  will create positive social impact and make the Philippines an
                  outstanding place to live and work.
                </p>
              </div>
            </div>
            <div className="gridItem grid bg-light p-10">
              <div className="text-center">
                <LuHeartHandshake className="text-[50px] mx-auto text-secondary mb-2" />
                <h2 className="text-2xl font-bold mb-10 textGradient">
                  Core Values
                </h2>
                <p>
                  <ul>
                    <li>Godly Stewardship</li>
                    <li>Excellence</li>
                    <li>Professionalism</li>
                    <li>Integrity</li>
                    <li>Generosity</li>
                    <li>Teamwork</li>
                    <li>Loving People</li>
                    <li>Fun</li>
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

export default MissionVission;
