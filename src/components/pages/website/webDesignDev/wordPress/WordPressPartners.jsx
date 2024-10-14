import React from "react";
import { sectionPartnersLogos, sectionPartnersTitle } from "./data";

const WordPressPartners = () => {
  return (
    <>
      <section className="WordPressPartners py-20">
        <div className="customContainer">
          <p>{sectionPartnersTitle[0].subTitle}</p>
          <h2 className="text-[clamp(20px,7vw,35px)] font-semibold text-primary leading-[1.1] mb-20">
            {sectionPartnersTitle[0].mainTitle}
          </h2>

          <ul className="flex flex-wrap justify-center gap-y-8 gap-x-44 items-center">
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

export default WordPressPartners;
