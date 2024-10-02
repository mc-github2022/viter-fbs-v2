import React from "react";
import { headers } from "./data";

const ServiceHrPartners = () => {
  return (
    <>
      <section className="ServiceHrPartners py-20">
        <div className="customContainer">
          {headers.map((header, key) => (
            <React.Fragment key={key}>
              {header.section_name === "partners" && (
                <>
                  <p>{header.subheader}</p>
                  <h2 className="text-[35px] font-semibold text-primary leading-[1.1] mb-8">
                    {header.header}
                  </h2>
                </>
              )}
            </React.Fragment>
          ))}

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

export default ServiceHrPartners;
