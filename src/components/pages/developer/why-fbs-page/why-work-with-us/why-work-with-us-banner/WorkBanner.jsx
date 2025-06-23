import React from "react";
import { FaRegImages } from "react-icons/fa";
import {
  getConvertStringToJSONparseData,
  googleHDViewLink,
} from "../../../../../helpers/functions-general";
import LoadImages from "../../../../../partials/LoadImages";
import ContactFormDefault from "../../../contact-form-default/ContactFormDefault";

const WorkBanner = ({
  workData,
  handleUpdateWorkBanner,
  handleUpdateContactFormDefault,
  contactFormDefaultData,
}) => {
  const [isContactDefaultOpen, setIsContactDefaultOpen] = React.useState(false);
  const workBannerImage = getConvertStringToJSONparseData(
    workData?.data?.[0]?.work_banner_img
  );

  const handleOpen = () => {
    setIsContactDefaultOpen(true);
  };

  return (
    <>
      <section
        id="ServiceHrBanner"
        className="banner pt-[59px] md:pt-[95px] min-h-[100vh] md:min-h-[90vh] relative flex items-center"
      >
        {workData?.data?.length > 0 && workBannerImage?.length > 0 ? (
          <>
            {workBannerImage.map((img, index) => (
              <LoadImages
                url={`${googleHDViewLink}${img?.id}`}
                alt={`work banner ${index + 1}`}
                className="absolute inset-0 w-full h-full object-cover z-0"
                key={index}
              />
            ))}
          </>
        ) : (
          <div className=" absolute inset-0 w-full h-full object-cover object-top place-content-center place-items-center bg-gray-300 ">
            <FaRegImages className="text-[200px] text-gray-400" />
          </div>
        )}

        <div className="customContainer relative z-10 h-full">
          <div className="wrapper flex flex-col justify-center items-center h-full text-center lg:grid lg:grid-cols-2">
            <div className="text-center py-10 lg:text-left">
              <h2 className="text-[clamp(30px,3vw,45px)] leading-[1.1] mb-8 text-light font-light">
                <span className="">
                  {workData?.data[0]?.work_banner_title
                    .split("\n") // Split by new lines
                    .filter((content_a) => content_a.trim() !== "") // Remove empty lines
                    .map((content_a, index) => (
                      <p key={index}>{content_a}</p>
                    ))}
                </span>
                <span className="text-light font-semibold">
                  {workData?.data?.[0]?.work_banner_title_bold || "Title"}
                </span>
              </h2>

              <p className="text-light mb-10">
                {workData?.data?.[0]?.work_banner_description || "Description"}
              </p>
              {workData?.data.map((item, key) => (
                <button
                  onClick={handleOpen}
                  className="btn bg-transparent text-light border-2 uppercase "
                  key={key}
                >
                  {item.work_banner_button_text}
                </button>
              ))}
              <a
                className="absolute cursor-pointer tooltip-btn left-[42rem] top-2"
                data-tooltip="Edit contents"
                onClick={handleUpdateWorkBanner}
              >
                <FaRegImages className=" bg-[#C7AC27] rounded-full  w-[25px] h-[25px] p-[5px] border-[1px] text-black" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {isContactDefaultOpen && (
        <ContactFormDefault
          setIsContactDefaultOpen={setIsContactDefaultOpen}
          handleUpdateContactFormDefault={handleUpdateContactFormDefault}
          contactFormDefaultData={contactFormDefaultData}
        />
      )}
    </>
  );
};

export default WorkBanner;
