import React from "react";
import { FaRegImages } from "react-icons/fa";
import {
  getConvertStringToJSONparseData,
  googleHDViewLink,
} from "../../../../helpers/functions-general";
import LoadImages from "../../../../partials/LoadImages";
import ContactFormDefault from "../../contact-form-default/ContactFormDefault";

const PartnerWithUs = ({
  partnerWithUsData,
  handleUpdatePartnerWithUs,
}) => {
  const [isContactDefaultOpen, setIsContactDefaultOpen] = React.useState(false);
  const partnerWithUsImage = getConvertStringToJSONparseData(
    partnerWithUsData?.data?.[0]?.partner_with_us_img
  );

  const handleOpen = () => {
    setIsContactDefaultOpen(true);
  };

  return (
    <>
      <section className="partnerWithUs pt-[50%] pb-40 md:pt-20 md:pb-20 relative overflow-hidden">
        <div className="customContainer">
          <div className="wrapper grid grid-cols-1 lg:grid-cols-[_1.5fr_1fr] ">
            <div className="bg-customGray md:bg-opacity-70 py-10 md:py-20 px-10 z-10 rounded-lg addShadow relative">
              <p>
                {partnerWithUsData?.data?.length > 0 &&
                partnerWithUsData.data[0]?.partner_with_us_subtitle
                  ? partnerWithUsData?.data[0].partner_with_us_subtitle
                  : "Subtitle"}
              </p>
              <h2 className="lg:text-[45px] font-semibold text-primary leading-[1.1] mb-8 text-[clamp(20px,4vw,45px)]">
                {partnerWithUsData?.data?.length > 0 &&
                partnerWithUsData.data[0]?.partner_with_us_title
                  ? partnerWithUsData?.data[0].partner_with_us_title
                  : "Title"}
              </h2>

              <p className="mb-8">
                {partnerWithUsData?.data?.length > 0 &&
                partnerWithUsData.data[0]?.partner_with_us_description
                  ? partnerWithUsData?.data[0].partner_with_us_description
                  : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nam saepe sunt commodi beatae! Reiciendis!"}
              </p>
              <button
                className="btn bg-primary text-light my-5  font-semibold inline-block rounded-full uppercase "
                onClick={handleOpen}
              >
                {partnerWithUsData?.data?.length > 0 &&
                partnerWithUsData.data[0]?.partner_with_us_button_text
                  ? partnerWithUsData?.data[0].partner_with_us_button_text
                  : "Button"}
              </button>
            </div>
            <div className="bgImage w-full absolute top-0 left-0 md:left-auto md:w-[68%] md:right-0 md:h-full ">
              <a
                className="absolute cursor-pointer tooltip-btn right-1 top-2"
                data-tooltip="Edit contents"
                onClick={handleUpdatePartnerWithUs}
              >
                <FaRegImages className=" bg-[#C7AC27] rounded-full  w-[25px] h-[25px] p-[5px] border-[1px] text-black" />
              </a>
              {partnerWithUsData?.data?.length > 0 &&
              partnerWithUsImage?.length > 0 ? (
                <>
                  {partnerWithUsImage.map((img, index) => (
                    <div key={index} className="">
                      <LoadImages
                        url={`${googleHDViewLink}${img?.id}`}
                        alt={`Partner With Us ${index + 1}`}
                        className="w-full h-full object-cover object-top z-10"
                      />
                    </div>
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

      {isContactDefaultOpen && (
        <ContactFormDefault services={"default"} page={"Home"} setIsContactDefaultOpen={setIsContactDefaultOpen} />
      )}
    </>
  );
};

export default PartnerWithUs;
