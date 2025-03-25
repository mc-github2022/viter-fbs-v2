import React from "react";
import { devBaseImgUrl } from "../../../../helpers/functions-general";

const ConStudTeam = () => {
  return (
    <>
      <div className="ConStudTeam md:py-40">
        <div className="customContainer">
          <div
            className="mb-12
          "
          >
            <p>Here are the</p>
            <h3 className="text-[clamp(20px,7vw,35px)] font-semibold text-primary leading-[1.1]">
              Industry Professional
            </h3>
            <p>who will provide you with real-world experience and insights.</p>
          </div>
          <div className="wrapper flex flex-col gap-10 md:grid md:grid-cols-2 md:gap-10">
            <div className="teamItem flex flex-col text-center lg:flex lg:flex-row lg:text-left items-center gap-4">
              <img
                src={`${devBaseImgUrl}/jhonny.png`}
                className="w-[100px] h-[100px] md:w-[150px] md:h-[150px]"
                alt="Mr. Jhonny Dichoso, MIT"
              />
              <div>
                <p className="font-semibold text-xl">Mr. Jhonny Dichoso, MIT</p>
                <p>Head, Learning Center Solutions</p>
                <p>Supervisor, Web Development</p>
                <p className="text-sm">
                  jhonny.dichoso@frontlinebusiness.com.ph
                </p>
              </div>
            </div>
            <div className="teamItem flex flex-col text-center lg:flex lg:flex-row lg:text-left items-center gap-4">
              <img
                src={`${devBaseImgUrl}/thea.png`}
                className="w-[100px] h-[100px] md:w-[150px] md:h-[150px]"
                alt="Ms. Thea Lyzette Consignado"
              />
              <div>
                <p className="font-semibold text-xl">
                  Ms. Thea Lyzette Consignado
                </p>
                <p>Accounting Trainer</p>
                <p>Accounting Associate</p>
                <p className="text-sm">
                  thea.consignado@frontlinebusiness.com.ph
                </p>
              </div>
            </div>
            <div className="teamItem flex flex-col text-center lg:flex lg:flex-row lg:text-left items-center gap-4">
              <img
                src={`${devBaseImgUrl}/roy.png`}
                className="w-[100px] h-[100px] md:w-[150px] md:h-[150px]"
                alt="Mr. Roy Balaaldia"
              />
              <div>
                <p className="font-semibold text-xl">Mr. Roy Balaaldia</p>
                <p>Graphics and Web Designing Trainer</p>
                <p className="text-sm">
                  roy.balaaldia@frontlinebusiness.com.ph
                </p>
              </div>
            </div>
            <div className="teamItem flex flex-col text-center lg:flex lg:flex-row lg:text-left items-center gap-4">
              <img
                src={`${devBaseImgUrl}/ms.-herlyn.png`}
                className="w-[100px] h-[100px] md:w-[150px] md:h-[150px]"
                alt="Ms. Herlyn Mae Torres"
              />
              <div>
                <p className="font-semibold text-xl">Ms. Herlyn Mae Torres</p>
                <p>Frontend Development Trainer</p>
                <p className="text-sm">
                  herlyn.torres@frontlinebusiness.com.ph
                </p>
              </div>
            </div>
            <div className="teamItem flex flex-col text-center lg:flex lg:flex-row lg:text-left items-center gap-4">
              <img
                src={`${devBaseImgUrl}/sir-mon-1.png`}
                className="w-[100px] h-[100px] md:w-[150px] md:h-[150px]"
                alt="Mr. Ramon Plaza"
              />
              <div>
                <p className="font-semibold text-xl">Mr. Ramon Plaza</p>
                <p>Backend/WordPress Development Trainer</p>
                <p className="text-sm">ramon.plaza@frontlinebusiness.com.ph</p>
              </div>
            </div>
            <div className="teamItem flex flex-col text-center lg:flex lg:flex-row lg:text-left items-center gap-4">
              <img
                src={`${devBaseImgUrl}/emman.png`}
                className="w-[100px] h-[100px] md:w-[150px] md:h-[150px]"
                alt="Mr. Emmanuel Manalo"
              />
              <div>
                <p className="font-semibold text-xl">Mr. Emmanuel Manalo</p>
                <p>Frontend & Backend Development Trainer</p>
                <p className="text-sm">
                  emmanuel.manalo@frontlinebusiness.com.ph
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConStudTeam;
