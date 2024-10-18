import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const ConStudApplyNow = () => {
  return (
    <>
      <section className="ConStudApplyNow pt-[40%] pb-40 md:pt-20 md:pb-20 relative overflow-hidden">
        <div className="customContainer">
          <div className="wrapper grid grid-cols-1 lg:grid-cols-[_1.5fr_1fr] ">
            <div className="bg-customGray md:bg-opacity-70 py-20 px-10 z-10 rounded-lg addShadow">
              <p>Join and experience the fun and learning with our team!</p>
              <h2 className="text-[clamp(20px,4vw,45px)] font-semibold text-primary leading-[1.1] mb-8">
                Join our team now!
              </h2>
              <p className="mb-4">Requirements:</p>
              <ul className="[&>li]:flex [&>li]:items-center [&>li]:gap-2">
                <li>
                  <FaCheckCircle className="text-primary" />
                  Resume
                </li>
                <li>
                  <FaCheckCircle className="text-primary" />
                  School Memorandum of Agreement
                </li>
                <li>
                  <FaCheckCircle className="text-primary" /> Endorsement Letter
                </li>
                <li>
                  <FaCheckCircle className="text-primary" /> Training Waiver
                </li>
                <li>
                  <FaCheckCircle className="text-primary" />
                  School's Evaluation Form
                </li>
              </ul>
              <a
                href=""
                className="btn bg-primary text-light my-5  inline-block rounded-full font-bold"
              >
                PARTNER WITH US TODAY
              </a>
            </div>
            <div className="bgImage w-full absolute top-0 left-0 md:left-auto md:w-[68%] md:right-0 md:h-full">
              <img
                // src={`${devBaseImgUrl}/ojt-accepted.jpg`}
                src="../../public/img/ojt-accepted.jpg"
                className="w-full h-full object-cover object-top"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ConStudApplyNow;
