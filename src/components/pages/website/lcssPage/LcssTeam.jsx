import React from "react";
import { devBaseImgUrl } from "../../../helpers/functions-general";

const LcssTeam = () => {
  return (
    <>
      <div className="theTeam py-40">
        <div className="customContainer">
          <div
            className="mb-12
          "
          >
            <p>Here are the</p>
            <h3 className="text-[35px] font-semibold text-primary leading-[1.1]">
              industry professional
            </h3>
            <p>who will provide you with real-world experience and insights.</p>
          </div>
          <div className="wrapper grid grid-cols-2 gap-10">
            <div className="teamItem flex items-center gap-4">
              <img
                // src={`${devBaseImgUrl}/jhonny.png`}
                src={`../../public/img/jhonny.png`}
                className="w-[150px] h-[150px]"
                alt=""
              />
              <div>
                <p className="font-semibold text-xl">
                  Mr. Jhonny Dischoso, MIT
                </p>
                <p>Head, Learning Center Solutions</p>
                <p>Supervisor, Web Development</p>
                <p className="text-sm">
                  jhonny.dischoso@frontlinebusiness.com.ph
                </p>
              </div>
            </div>
            <div className="teamItem flex items-center gap-4">
              <img
                // src={`${devBaseImgUrl}/Thea.png`}
                src={`../../public/img//Thea.png`}
                className="w-[150px] h-[150px]"
                alt=""
              />
              <div>
                <p className="font-semibold text-xl">
                  Ms. Thea Lyzette Consignado
                </p>
                <p>Accoutiung Trainer</p>
                <p>Accounting Associate</p>
                <p className="text-sm">
                  thea.consignado@frontlinebusiness.com.ph
                </p>
              </div>
            </div>
            <div className="teamItem flex items-center gap-4">
              <img
                // src={`${devBaseImgUrl}/roy.png`}
                src={`../../public/img/roy.png`}
                className="w-[150px] h-[150px]"
                alt=""
              />
              <div>
                <p className="font-semibold text-xl">Mr. Roy Balaaldia</p>
                <p>Graphics and Web Designing Trainer</p>
                <p className="text-sm">
                  roy.balaaldia@frontlinebusiness.com.ph
                </p>
              </div>
            </div>
            <div className="teamItem flex items-center gap-4">
              <img
                // src={`${devBaseImgUrl}/ms.-herlyn.png`}
                src={`../../public/img/ms.-herlyn.png`}
                className="w-[150px] h-[150px]"
                alt=""
              />
              <div>
                <p className="font-semibold text-xl">Ms. Herlyn Mae Torres</p>
                <p>Frontend Development Trainer</p>
                <p className="text-sm">
                  roy.balaaldia@frontlinebusiness.com.ph
                </p>
              </div>
            </div>
            <div className="teamItem flex items-center gap-4">
              <img
                // src={`${devBaseImgUrl}/sir-mon-1.png`}
                src={`../../public/img/sir-mon-1.png`}
                className="w-[150px] h-[150px]"
                alt=""
              />
              <div>
                <p className="font-semibold text-xl">Mr. Ramon Plaza</p>
                <p>Backend/WordPress Development Trainer</p>
                <p className="text-sm">ramon.plaza@frontlinebusiness.com.ph</p>
              </div>
            </div>
            <div className="teamItem flex items-center gap-4">
              <img
                // src={`${devBaseImgUrl}/mc.png`}
                src={`../../public/img/mc.png`}
                className="w-[150px] h-[150px]"
                alt=""
              />
              <div>
                <p className="font-semibold text-xl">
                  Mr. Mark Christopher Bumagat
                </p>
                <p>WordPress Development Trainer</p>
                <p className="text-sm">mark.bumagat@frontinebusiness.com.ph</p>
              </div>
            </div>
            <div className="teamItem flex items-center gap-4">
              <img
                // src={`${devBaseImgUrl}/ansbert.png`}
                src={`../../public/img/ansbert.png`}
                className="w-[150px] h-[150px]"
                alt=""
              />
              <div>
                <p className="font-semibold text-xl">Mr. Ansbert Gregana</p>
                <p>Frontend Development Trainer</p>
                <p className="text-sm">
                  ansbert.gregana@frontlinebusines.com.ph
                </p>
              </div>
            </div>
            <div className="teamItem flex items-center gap-4">
              <img
                // src={`${devBaseImgUrl}/emman.png`}
                src={`../../public/img/emman.png`}
                className="w-[150px] h-[150px]"
                alt=""
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

export default LcssTeam;
