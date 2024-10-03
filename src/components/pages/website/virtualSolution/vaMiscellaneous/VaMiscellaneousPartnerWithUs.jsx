import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { serviceInclusion } from "./data";

const VaMiscellaneousPartnerWithUs = () => {
  return (
    <>
      <section className="VaMiscellaneousPartnerWithUs py-20 relative overflow-hidden mb-20 ">
        <div className="customContainer relative">
          <div className="wrapper grid grid-cols-[_1fr_1.5fr] p-20">
            <div></div>
            <div className="bg-customGray bg-opacity-70 py-20 px-10 z-10 rounded-lg addShadow">
              <p>{serviceInclusion[0].subtitle}</p>
              <h2 className="text-[45px] font-semibold text-primary leading-[1.1] mb-8">
                {serviceInclusion[0].mainTitle}
              </h2>
              <p className="mb-4">{serviceInclusion[0].taskType}</p>
              <ul className="[&>li]:flex [&>li]:items-center [&>li]:gap-2">
                {serviceInclusion[0].taskTypeList.map((info, key) => (
                  <li key={key}>
                    <FaCheckCircle className={` text-primary`} />
                    {info}
                  </li>
                ))}
              </ul>
              <a
                href={serviceInclusion[0].btnLink}
                className="btn bg-primary text-light my-5  inline-block rounded-full font-bold"
              >
                {serviceInclusion[0].btnText}
              </a>
            </div>
            <div className="bgImage absolute top-0 w-[68%] h-full left-0">
              <img
                // src={`${devBaseImgUrl}/vaPartnerWithUs.jpg`}
                src={`../../public/img/${serviceInclusion[0].sectionImage}`}
                className="w-full h-full object-cover object-center"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VaMiscellaneousPartnerWithUs;
