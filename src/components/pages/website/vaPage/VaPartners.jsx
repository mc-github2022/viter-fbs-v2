import React from "react";
import { devBaseImgUrl } from "../../../helpers/functions-general";
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const VaPartners = () => {
  return (
    <>
      <section className="ServiceHrPartners py-20">
        <div className="customContainer">
          <p>What our</p>
          <h2 className="text-[35px] font-semibold text-primary leading-[1.1] mb-8">
            clients say
          </h2>

          <ul className="flex flex-wrap justify-center gap-10 items-center">
            <li>
              <img
                className="w-[150px] h-[150px] object-contain"
                // src={`${devBaseImgUrl}/web-obich.png`}
                src={`../../public/img/web-obich.png`}
                alt=""
              />
            </li>
            <li>
              <img
                className="w-[150px] h-[150px] object-contain"
                // src={`${devBaseImgUrl}/AKA-Global.png`}
                src={`../../public/img/AKA-Global.png`}
                alt=""
              />
            </li>
            <li>
              <img
                className="w-[150px] h-[150px] object-contain"
                // src={`${devBaseImgUrl}/DTOD-BPO.png`}
                src={`../../public/img/DTOD-BPO.png`}
                alt=""
              />
            </li>
            <li>
              <img
                className="w-[150px] h-[150px] object-contain"
                // src={`${devBaseImgUrl}/web-victorious-Virtual-Hub.png`}
                src={`../../public/img/web-victorious-Virtual-Hub.png`}
                alt=""
              />
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default VaPartners;
