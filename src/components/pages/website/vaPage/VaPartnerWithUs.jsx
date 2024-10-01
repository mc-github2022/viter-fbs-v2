import React from "react";
import { devBaseImgUrl } from "../../../helpers/functions-general";
import { FaCheckCircle } from "react-icons/fa";

const VaPartnerWithUs = () => {
  return (
    <>
      <section className="lcssApplyNow py-20 relative overflow-hidden mb-20 ">
        <div className="customContainer relative">
          <div className="wrapper grid grid-cols-[_1fr_1.5fr] p-20">
            <div></div>
            <div className="bg-customGray bg-opacity-70 py-20 px-10 z-10 rounded-lg addShadow">
              <p>
                Our VA for Administrative Assisatance offers comprehensive
                support to
              </p>
              <h2 className="text-[45px] font-semibold text-primary leading-[1.1] mb-8">
                streamline your business operations.
              </h2>
              <p className="mb-4">Administrative Tasks:</p>
              <ul className="[&>li]:flex [&>li]:items-center [&>li]:gap-2">
                <li>
                  <FaCheckCircle className="text-primary" />
                  Email Management
                </li>
                <li>
                  <FaCheckCircle className="text-primary" />
                  Data Entry
                </li>
                <li>
                  <FaCheckCircle className="text-primary" /> Database Management
                </li>
                <li>
                  <FaCheckCircle className="text-primary" /> Document
                  Preparation
                </li>
                <li>
                  <FaCheckCircle className="text-primary" />
                  File Management
                </li>
              </ul>
              <a
                href=""
                className="btn bg-primary text-light my-5  inline-block rounded-full font-bold"
              >
                PARTNER WITH US TODAY
              </a>
            </div>
            <div className="bgImage absolute top-0 w-[68%] h-full left-0">
              <img
                // src={`${devBaseImgUrl}/vaPartnerWithUs.jpg`}
                src="../../public/img/vaPartnerWithUs.jpg"
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

export default VaPartnerWithUs;
