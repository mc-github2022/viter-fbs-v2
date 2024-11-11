import React from "react";
import { FaRegCircleCheck } from "react-icons/fa6";
import { devBaseImgUrl } from "../../../helpers/functions-general";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const WhyUsBanner = () => {
  return (
    <>
      <div>
        <section
          id="WhyUsBanner"
          className={`banner bg-cover pt-[59px] md:pt-[95px] bg-top`}
          style={{
            backgroundImage: `url(${devBaseImgUrl}/whyfbsBanner.webp)`,
          }}
        >
          <div className="customContainer">
            <div className="wrapper flex flex-col justify-center lg:grid lg:grid-cols-2 place-items-center max-h-[80vh] min-h-[80vh] transition-all w-full">
              <div className="text-center py-10 lg:text-left">
                <h2 className="text-[clamp(30px,3vw,45px)] leading-[1.1] mb-8 text-light font-light">
                  We Are
                  <span className="text-light font-semibold inline-block ml-3 mr-3">
                    More Than
                  </span>
                  Just A
                  <span className="text-light font-semibold inline-block mr-3">
                    Managed Services Provider
                  </span>
                </h2>
                <p className="text-light mb-10">
                  As a Christian company with faith-driven leadership and a
                  commitment to purposeful service, we aim to be your trusted
                  partner in driving growth, efficiency, and innovation.
                </p>
                <a
                  href="#"
                  className="btn bg-transparent text-light font-semibold border-2"
                >
                  GET STARTED
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default WhyUsBanner;
