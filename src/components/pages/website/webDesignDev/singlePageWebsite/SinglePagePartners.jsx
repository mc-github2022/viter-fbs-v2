import React from "react";
import { sectionPartnersLogos, sectionPartnersTitle } from "./data";
import { devBaseImgUrl } from "../../../../helpers/functions-general";

const SinglePagePartners = () => {
  return (
    <>
      <section className="SinglePagePartners -translate-y-1 bg-light pb-16 md:py-20">
        <div className="customContainer">
          <p>{sectionPartnersTitle[0].subTitle}</p>
          <h2 className="text-[clamp(20px,7vw,35px)] font-semibold text-primary leading-[1.1] mb-8">
            {sectionPartnersTitle[0].mainTitle}
          </h2>

          <ul className="flex flex-wrap justify-center gap-y-10 gap-x-24 items-center">
            {sectionPartnersLogos.map((logo, key) => {
              return (
                <li key={key}>
                  <img
                    className="w-[150px] h-[150px] object-contain"
                    src={`${devBaseImgUrl}/${logo.imageName}`}
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

export default SinglePagePartners;
