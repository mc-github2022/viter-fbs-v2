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
          className={`banner bg-cover pt-[59px] md:pt-[112px] bg-top`}
          style={{
            // backgroundImage: `url(${devBaseImgUrl}/whyfbsBanner.jpg)`,
            backgroundImage: `url(../../public/img/whyfbsBanner.jpg)`,
          }}
        >
          <div className="customContainer">
            <div className="wrapper grid grid-cols-2 place-items-center h-[80vh] md:h-[70vh] transition-all w-full">
              <div className="text-left">
                <h2 className="text-[45px] leading-[1.1] mb-8 text-light font-light">
                  We are
                  <span className="text-light font-semibold inline-block ml-3 mr-3">
                    more than
                  </span>
                  just a
                  <span className="text-light font-semibold inline-block ml-3 mr-3">
                    managed services provider
                  </span>
                </h2>
                <p className="text-light mb-10">
                  As a christian company with faith-driven leadership and
                  purposeful service, we aim to be your trusted partner in
                  driving growth, efficiency, and innovation.
                </p>
                <a href="#" className="btn bg-transparent text-light border-2">
                  Get Started
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
