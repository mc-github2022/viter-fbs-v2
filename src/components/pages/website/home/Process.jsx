import React from "react";
import { devBaseImgUrl } from "../../../helpers/functions-general";
import useQueryData from "../../../custom-hooks/useQueryData";

const Process = () => {
  const { data: processData } = useQueryData(
    "/v1/process", // endpoint
    "get", // method
    "process", // key
    {},
    null,
    true
  );
  return (
    <>
      <section className="process pt-20 pb-10">
        <div className="customContainer">
          <div className="theTitle leading-1 mb-12">
            <p>
              {processData?.data?.length > 0 &&
              processData.data[0]?.process_subtitle
                ? processData?.data[0].process_subtitle
                : ""}
            </p>
            <h2 className="text-[clamp(30px,7vw,45px)] font-semibold text-primary leading-[1.1]">
              {processData?.data?.length > 0 &&
              processData.data[0]?.process_title
                ? processData?.data[0].process_title
                : ""}
            </h2>
          </div>
          <img
            src={`${devBaseImgUrl}/our-process.png`}
            loading="lazy"
            className="hidden md:block h-full object-contain object-top w-[78%] mx-auto mb-2"
            alt="Our Process"
          />
          <div>
            <div className="grid place-items-center text-justify">
              <div className="md:grid grid-cols-4">
                <div className="processItem md:text-center md:translate-y-[-50px] lg:translate-y-[-100px] mb-6">
                  <div>
                    <img
                      src={`${devBaseImgUrl}/wecollaborate.png`}
                      className="We Collaborate"
                      alt=""
                    />
                  </div>
                  <div>
                    <p className="text-primary font-bold text-lg">
                      {processData?.data?.length > 0 &&
                      processData.data[0]?.process_title_a
                        ? processData?.data[0].process_title_a
                        : ""}
                    </p>
                    <p>
                      {processData?.data?.length > 0 &&
                      processData.data[0]?.process_description_a
                        ? processData?.data[0].process_description_a
                        : ""}
                    </p>
                  </div>
                </div>
                <div className="processItem md:text-center mb-6">
                  <div>
                    <p className="text-primary font-bold text-lg">
                      {processData?.data?.length > 0 &&
                      processData.data[0]?.process_title_b
                        ? processData?.data[0].process_title_b
                        : ""}
                    </p>
                    <p>
                      {processData?.data?.length > 0 &&
                      processData.data[0]?.process_description_b
                        ? processData?.data[0].process_description_b
                        : ""}
                    </p>
                  </div>
                </div>
                <div className="processItem md:text-center md:translate-y-[-50px] lg:translate-y-[-100px] mb-6">
                  <div>
                    <p className="text-primary font-bold text-lg">
                      {" "}
                      {processData?.data?.length > 0 &&
                      processData.data[0]?.process_title_c
                        ? processData?.data[0].process_title_c
                        : ""}
                    </p>
                    <p>
                      {processData?.data?.length > 0 &&
                      processData.data[0]?.process_description_c
                        ? processData?.data[0].process_description_c
                        : ""}
                    </p>
                  </div>
                </div>
                <div className="processItem md:text-center">
                  <div>
                    <p className="text-primary font-bold text-lg">
                      {processData?.data?.length > 0 &&
                      processData.data[0]?.process_title_d
                        ? processData?.data[0].process_title_d
                        : ""}
                    </p>
                    <p>
                      {processData?.data?.length > 0 &&
                      processData.data[0]?.process_description_d
                        ? processData?.data[0].process_description_d
                        : ""}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Process;
