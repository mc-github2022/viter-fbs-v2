import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import {
  apiVersion,
  devBaseImgUrl,
  getConvertStringToJSONparseData,
  googleHDViewLink,
} from "../../../../helpers/functions-general";
import ModalLcssForm from "../../../../partials/ModalLcssForm";
import useQueryData from "../../../../custom-hooks/useQueryData";
import LoadImages from "../../../../partials/LoadImages";

const LcssApplyNow = ({ pageName }) => {
  const [contactForm, setContactForm] = React.useState(false);

  const [lcssForm, setLcssForm] = React.useState(false);

  const { data: immersionApplyNowData } = useQueryData(
    `${apiVersion}/immersion-apply-now`, // endpoint
    "get", // method
    "immersion-apply-now", // key
    {},
    null,
    true
  );

  const handleLcssForm = () => {
    setLcssForm(!lcssForm);
  };

  const partnerWithUsImage = getConvertStringToJSONparseData(
    immersionApplyNowData?.data?.[0]?.immersion_apply_img
  );

  return (
    <>
      <section className="lcssApplyNow pt-[40%] pb-40 md:pt-20 md:pb-20 relative overflow-hidden">
        <div className="customContainer">
          <div className="wrapper grid grid-cols-1 lg:grid-cols-[_1.5fr_1fr] ">
            <div className="bg-customGray md:bg-opacity-70 py-8 lg:py-20 px-10 z-10 rounded-lg addShadow">
              <p>
                {immersionApplyNowData?.data?.[0]?.immersion_apply_subtitle ||
                  ""}
              </p>
              <h2 className="text-[clamp(20px,4vw,45px)] font-semibold text-primary leading-[1.1] mb-8">
                {immersionApplyNowData?.data?.[0]?.immersion_apply_title || ""}
              </h2>
              <p className="mb-4">Requirements:</p>
              <ul className="[&>li]:flex [&>li]:flex-col [&>li]:gap-1">
                {immersionApplyNowData?.data.map((item, index) => (
                  <li key={index}>
                    {item.immersion_apply_requirement_list
                      .split("\n") // Split by new lines
                      .filter((list) => list.trim() !== "") // Remove empty lines
                      .map((list, index) => (
                        <div
                          key={index}
                          className="text-base flex items-center gap-2 "
                        >
                          <div>
                            <FaCheckCircle className="text-primary" />
                          </div>
                          {list}
                        </div>
                      ))}
                  </li>
                ))}
              </ul>
              <button
                onClick={handleLcssForm}
                className="btn px-6 bg-primary text-light my-5  inline-block rounded-full font-bold uppercase"
              >
                {immersionApplyNowData?.data?.[0]
                  ?.immersion_apply_button_text || ""}
              </button>
            </div>
            <div className="bgImage w-full absolute top-0 left-0 md:left-auto md:w-[68%] md:right-0 md:h-full">
              {partnerWithUsImage.map((img, index) => (
                <LoadImages
                  url={`${googleHDViewLink}${img?.id}`}
                  alt="Join and experience the fun and learning with our team!"
                  className="w-full h-full object-cover object-top z-10"
                  key={index}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      {lcssForm && (
        <ModalLcssForm thePageName={pageName} setLcssForm={setLcssForm} />
      )}
    </>
  );
};

export default LcssApplyNow;
