import React from "react";
import { FaFileDownload, FaRegImages } from "react-icons/fa";
import { FaRegCircleCheck } from "react-icons/fa6";
import { HiPencil } from "react-icons/hi";
import {
  getConvertStringToJSONparseData,
  googleHDViewLink,
  googleViewLink,
} from "../../../../../../helpers/functions-general";
import LoadImages from "../../../../../../partials/LoadImages";
import ContactFormDefault from "../../../../contact-form-default/ContactFormDefault";

const OjtOverview = ({
  pageName,
  handleUpdateOjtOverview,
  handleUpdateOjtOverviewList,
  ojtOverviewData,
  contactFormDefaultData,
  handleUpdateContactFormDefault,
  handleUpdateContactFormLcss,
  contactFormLcssData,
}) => {
  const [isContactDefaultOpen, setIsContactDefaultOpen] = React.useState(false);

  const OjtOverviewImage = getConvertStringToJSONparseData(
    ojtOverviewData?.data?.[0]?.ojt_overview_img
  );

  const contactUsDefaultOJTFile = getConvertStringToJSONparseData(
    ojtOverviewData?.data?.[0]?.ojt_overview_file
  );

  const handleOpen = () => {
    setIsContactDefaultOpen(true);
  };

  return (
    <>
      <section className="ServiceHrOverview py-20 bg-customGray">
        <div className="customContainer relative">
          <a
            className="absolute cursor-pointer tooltip-btn left-[35rem] top-0"
            data-tooltip="Edit contents"
            onClick={handleUpdateOjtOverview}
          >
            <FaRegImages className=" bg-[#C7AC27] rounded-full  w-[25px] h-[25px] p-[5px] border-[1px] text-black" />
          </a>

          <p>
            {ojtOverviewData?.data?.[0]?.ojt_overview_subtitle || "Subtitle"}
          </p>
          <h2 className="text-[clamp(20px,7vw,35px)] leading-[1.1] mb-12 text-light">
            <span className="font-semibold text-primary">
              {ojtOverviewData?.data?.[0]?.ojt_overview_title || "Title"}
            </span>
          </h2>

          <div className="wrapper lg:grid lg:grid-cols-2 gap-12">
            <div className="relative">
              {ojtOverviewData?.data?.length > 0 &&
              OjtOverviewImage?.length > 0 ? (
                <>
                  {OjtOverviewImage.map((img, index) => (
                    <LoadImages
                      url={`${googleHDViewLink}${img?.id}`}
                      className="mb-12 w-fit mx-auto"
                      alt={`Our Web Application ${index + 1}`}
                      key={index}
                    />
                  ))}
                </>
              ) : (
                <div className="  w-[592px] h-[324px] mb-12 object-cover object-top place-content-center place-items-center bg-gray-300 ">
                  <FaRegImages className="text-[200px] text-gray-400" />
                </div>
              )}
              <div className="flex flex-col md:flex md:flex-row items-center gap-12">
                <button
                  onClick={handleOpen}
                  className="btn bg-primary text-light font-semibold uppercase"
                >
                  {ojtOverviewData?.data?.[0]?.ojt_overview_button_text ||
                    "Button"}
                </button>

                {contactUsDefaultOJTFile.map((file, index) => (
                  <a
                    href={`${googleViewLink}${file?.id}`}
                    className="flex items-center gap-2 font-bold text-primary"
                    target="_blank"
                    key={index}
                  >
                    Download Proposal <FaFileDownload />
                  </a>
                ))}
              </div>
            </div>
            <div className="mt-14 lg:mt-0">
              <a
                className="absolute cursor-pointer tooltip-btn right-6 top-16 "
                data-tooltip="Edit contents"
                onClick={handleUpdateOjtOverviewList}
              >
                <HiPencil className=" bg-[#C7AC27] rounded-full  w-[25px] h-[25px] p-[5px] border-[1px] text-black" />
              </a>
              <ul>
                <li className="flex items-start gap-4 text-dark mb-6">
                  <div className="flex gap-4 items-start">
                    <div>
                      <FaRegCircleCheck className="circleCheck text-primary text-[clamp(25px,5vw,30px)] bg-gradient-to-r from-primary to-secondary bg-clip-text text-[transparent]" />
                    </div>
                    <div>
                      <h3 className="text-primary bg-gradient-to-r from-primary to-secondary bg-clip-text text-[transparent] text-[clamp(16px,5vw,24px)] mb-3">
                        {ojtOverviewData?.data?.[0]
                          ?.ojt_overview_list_title_a || "Title A"}
                      </h3>
                      <p className="text-justify">
                        {ojtOverviewData?.data?.[0]
                          ?.ojt_overview_list_description_a ||
                          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis, numquam aut unde dolorum nulla praesentium sint eum mollitia nam alias."}
                      </p>
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-4 text-dark mb-6">
                  <div className="flex gap-4 items-start">
                    <div>
                      <FaRegCircleCheck className="circleCheck text-primary text-[clamp(25px,5vw,30px)] bg-gradient-to-r from-primary to-secondary bg-clip-text text-[transparent]" />
                    </div>
                    <div>
                      <h3 className="text-primary bg-gradient-to-r from-primary to-secondary bg-clip-text text-[transparent] text-[clamp(16px,5vw,24px)] mb-3">
                        {ojtOverviewData?.data?.[0]
                          ?.ojt_overview_list_title_b || "Title B"}
                      </h3>
                      <p className="text-justify">
                        {ojtOverviewData?.data?.[0]
                          ?.ojt_overview_list_description_b ||
                          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis, numquam aut unde dolorum nulla praesentium sint eum mollitia nam alias."}
                      </p>
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-4 text-dark">
                  <div className="flex gap-4 items-start">
                    <div>
                      <FaRegCircleCheck className="circleCheck text-primary text-[clamp(25px,5vw,30px)] bg-gradient-to-r from-primary to-secondary bg-clip-text text-[transparent]" />
                    </div>
                    <div>
                      <h3 className="text-primary bg-gradient-to-r from-primary to-secondary bg-clip-text text-[transparent] text-[clamp(16px,5vw,24px)] mb-3">
                        {ojtOverviewData?.data?.[0]
                          ?.ojt_overview_list_title_c || "Title C"}
                      </h3>
                      <p className="text-justify">
                        {ojtOverviewData?.data?.[0]
                          ?.ojt_overview_list_description_c ||
                          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis, numquam aut unde dolorum nulla praesentium sint eum mollitia nam alias."}
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {isContactDefaultOpen && (
        <ContactFormDefault
          thePageName={pageName}
          setIsContactDefaultOpen={setIsContactDefaultOpen}
          handleUpdateContactFormDefault={handleUpdateContactFormDefault}
          contactFormDefaultData={contactFormDefaultData}
          handleUpdateContactFormLcss={handleUpdateContactFormLcss}
          contactFormLcssData={contactFormLcssData}
        />
      )}
    </>
  );
};

export default OjtOverview;
