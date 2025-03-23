import React from "react";
import {
  devBaseImgUrl,
  getConvertStringToJSONparseData,
  googleHDViewLink,
} from "../../../helpers/functions-general";
import useQueryData from "../../../custom-hooks/useQueryData";
import LoadImages from "../../../partials/LoadImages";

const LcssPartners = () => {
  const {
    isFetching,
    error,
    isLoading,
    status,
    data: partnersData,
  } = useQueryData(
    "/v1/partners", // endpoint
    "get", // method
    "partners" // key
  );
  return (
    <>
      <section className="partners py-20">
        <div className="customContainer">
          <p>Our Partner</p>
          <h2 className="text-[clamp(20px,7vw,35px)] font-semibold text-primary leading-[1.1] mb-8">
            Schools and Universities.
          </h2>
          <ul className="flex flex-wrap justify-center gap-14 items-center">
            {partnersData?.data.map((item, key) => {
              const partnersImages =
                getConvertStringToJSONparseData(item.partners_img) || [];
              return (
                <li key={key} className="relative">
                  {partnersImages.map((img, index) => (
                    <LoadImages
                      className="w-[120px] h-[120px] object-contain"
                      url={`${googleHDViewLink}${img?.id}`}
                      alt={item.partners_name}
                      key={index}
                    />
                  ))}
                </li>
              );
            })}
            {/* <li>
              <img
                className="w-[120px] h-[120px] object-contain"
                // src={`${devBaseImgUrl}/dlsl_official_logo.png`}
                src={`${devBaseImgUrl}/dlsl_official_logo.png`}
                alt="DLSL"
              />
            </li>
            <li>
              <img
                className="w-[120px] h-[120px] object-contain"
                // src={`${devBaseImgUrl}/csu.png`}
                src={`${devBaseImgUrl}/csu.png`}
                alt="CSU"
              />
            </li>
            <li>
              <img
                className="w-[120px] h-[120px] object-contain"
                // src={`${devBaseImgUrl}/bsu.png`}
                src={`${devBaseImgUrl}/bsu.png`}
                alt="BSU"
              />
            </li>
            <li>
              <img
                className="w-[120px] h-[120px] object-contain"
                // src={`${devBaseImgUrl}/letran.png`}
                src={`${devBaseImgUrl}/Letran.png`}
                alt="Letran"
              />
            </li>
            <li>
              <img
                className="w-[120px] h-[120px] object-contain"
                // src={`${devBaseImgUrl}/lpu.png`}
                src={`${devBaseImgUrl}/lpu.png`}
                alt="LPU"
              />
            </li>
            <li>
              <img
                className="w-[120px] h-[120px] object-contain"
                // src={`${devBaseImgUrl}/Bicol-Univ.png`}
                src={`${devBaseImgUrl}/bicol-univ.png`}
                alt="Bicol University"
              />
            </li>
            <li>
              <img
                className="w-[120px] h-[120px] object-contain"
                // src={`${devBaseImgUrl}/lspu.png`}
                src={`${devBaseImgUrl}/lspu.png`}
                alt="LSPU"
              />
            </li>
            <li>
              <img
                className="w-[120px] h-[120px] object-contain"
                // src={`${devBaseImgUrl}/pup.png`}
                src={`${devBaseImgUrl}/pup.png`}
                alt="PUP"
              />
            </li>
            <li>
              <img
                className="w-[120px] h-[120px] object-contain"
                // src={`${devBaseImgUrl}/spc.png`}
                src={`${devBaseImgUrl}/spc.png`}
                alt="SPC"
              />
            </li>
            <li>
              <img
                className="w-[120px] h-[120px] object-contain"
                // src={`${devBaseImgUrl}/sti.png`}
                src={`${devBaseImgUrl}/sti.png`}
                alt="STI"
              />
            </li>
            <li>
              <img
                className="w-[120px] h-[120px] object-contain"
                // src={`${devBaseImgUrl}/tip.png`}
                src={`${devBaseImgUrl}/tip.png`}
                alt="TIP"
              />
            </li>
            <li>
              <img
                className="w-[120px] h-[120px] object-contain"
                // src={`${devBaseImgUrl}/tmlc.png`}
                src={`${devBaseImgUrl}/tmlc.png`}
                alt="TMLC"
              />
            </li>
            <li>
              <img
                className="w-[120px] h-[120px] object-contain"
                // src={`${devBaseImgUrl}/ub.png`}
                src={`${devBaseImgUrl}/ub.png`}
                alt="UB"
              />
            </li> */}
          </ul>
        </div>
      </section>
    </>
  );
};

export default LcssPartners;
