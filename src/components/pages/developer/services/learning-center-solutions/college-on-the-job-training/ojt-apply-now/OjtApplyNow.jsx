import React from "react";
import { FaCheckCircle, FaRegImages } from "react-icons/fa";
import {
  getConvertStringToJSONparseData,
  googleHDViewLink,
} from "../../../../../../helpers/functions-general";
import LoadImages from "../../../../../../partials/LoadImages";
import ContactFormLcss from "../../../../contact-form-lcss/ContactFormLcss";

const OjtApplyNow = ({
  ojtApplyNowData,
  handleUpdateOjtApplyNow,
  handleUpdateContactFormLcss,
  contactFormDefaultData,
  contactFormLcssData,
  pageName,
}) => {
  const [lcssForm, setLcssForm] = React.useState(false);

  const handleFormLcss = () => {
    setLcssForm(true);
  };

  const partnerWithUsImage = getConvertStringToJSONparseData(
    ojtApplyNowData?.data?.[0]?.ojt_apply_img
  );

  return (
    <>
      <section className="lcssApplyNow pt-[40%] pb-40 md:pt-20 md:pb-20 relative overflow-hidden">
        <div className="customContainer">
          <div className="wrapper grid grid-cols-1 lg:grid-cols-[_1.5fr_1fr] ">
            <div className="bg-customGray md:bg-opacity-70 py-8 lg:py-20 px-10 z-10 rounded-lg addShadow">
              <p>
                {ojtApplyNowData?.data?.[0]?.ojt_apply_subtitle || "Subtitle"}
              </p>
              <h2 className="text-[clamp(20px,4vw,45px)] font-semibold text-primary leading-[1.1] mb-8">
                {ojtApplyNowData?.data?.[0]?.ojt_apply_title || "Title"}
              </h2>
              <p className="mb-4">Requirements:</p>
              <ul className="[&>li]:flex [&>li]:flex-col [&>li]:gap-1">
                {ojtApplyNowData?.data.map((item, index) => (
                  <li key={index}>
                    {item.ojt_apply_requirement_list
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
                onClick={handleFormLcss}
                className="btn px-6 bg-primary text-light my-5  inline-block rounded-full font-bold uppercase"
              >
                {ojtApplyNowData?.data?.[0]?.ojt_apply_button_text || "Button"}
              </button>
            </div>
            <div className="bgImage w-full absolute top-0 left-0 md:left-auto md:w-[68%] md:right-0 md:h-full">
              <a
                className="absolute cursor-pointer tooltip-btn right-1 top-2"
                data-tooltip="Edit contents"
                onClick={handleUpdateOjtApplyNow}
              >
                <FaRegImages className=" bg-[#C7AC27] rounded-full  w-[25px] h-[25px] p-[5px] border-[1px] text-black" />
              </a>
              {ojtApplyNowData?.data?.length > 0 &&
              partnerWithUsImage?.length > 0 ? (
                <>
                  {partnerWithUsImage.map((img, index) => (
                    <LoadImages
                      url={`${googleHDViewLink}${img?.id}`}
                      alt={`Partner With Us ${index + 1}`}
                      className="w-full h-full object-cover object-top z-10"
                      key={index}
                    />
                  ))}
                </>
              ) : (
                <div className="w-full h-full object-cover object-top place-content-center place-items-center bg-gray-300 ">
                  <FaRegImages className="text-[200px] text-gray-400" />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      {lcssForm && (
        <ContactFormLcss
          thePageName={pageName}
          setLcssForm={setLcssForm}
          contactFormDefaultData={contactFormDefaultData}
          handleUpdateContactFormLcss={handleUpdateContactFormLcss}
          contactFormLcssData={contactFormLcssData}
        />
      )}
    </>
  );
};

export default OjtApplyNow;
