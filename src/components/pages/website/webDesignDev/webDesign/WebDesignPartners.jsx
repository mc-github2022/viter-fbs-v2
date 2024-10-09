import React from "react";
import { sectionPartnersLogos, sectionPartnersTitle } from "./data";

const WebDesignPartners = () => {
  return (
    <>
      <section className="WebDesignPartners py-20">
        <div className="customContainer">
          <p>{sectionPartnersTitle[0].subTitle}</p>
          <h2 className="text-[35px] font-semibold text-primary leading-[1.1] mb-8">
            {sectionPartnersTitle[0].mainTitle}
          </h2>

          <ul className="flex flex-wrap justify-center gap-y-10 gap-x-20 items-center">
            {sectionPartnersLogos.map((logo, key) => {
              return (
                <li key={key}>
                  <img
                    className="w-[200px] object-contain"
                    // src={`${devBaseImgUrl}/web-obich.png`}
                    src={`../../public/img/${logo.imageName}`}
                    alt=""
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
};

export default WebDesignPartners;
