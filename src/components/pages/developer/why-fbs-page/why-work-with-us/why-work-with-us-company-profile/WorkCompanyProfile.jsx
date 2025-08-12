import React from "react";
import {
  devBaseImgUrl,
  getConvertStringToJSONparseData,
  googleHDViewLink,
  googleViewLink,
} from "../../../../../helpers/functions-general";
import ContactFormDefault from "../../../contact-form-default/ContactFormDefault";
import { FaFileDownload, FaRegImages } from "react-icons/fa";
import { HiPencil } from "react-icons/hi";
import LoadImages from "../../../../../partials/LoadImages";

const WorkCompanyProfile = ({
  workCompanyProfileData,
  handleUpdateWorkCompanyProfileDesc,
  handleUpdateWorkCompanyProfile,
  handleUpdateWorkCompanyProfileList,
}) => {
  const [isContactDefaultOpen, setIsContactDefaultOpen] = React.useState(false);
  const handleOpen = () => {
    setIsContactDefaultOpen(true);
  };

  const workCompanyProfileImage = getConvertStringToJSONparseData(
    workCompanyProfileData?.data?.[0]?.work_profile_img
  );

  const workCompanyProfileFile = getConvertStringToJSONparseData(
    workCompanyProfileData?.data?.[0]?.work_profile_file
  );

  return (
    <>
      <div className="whyUsIntro py-16 md:pt-20 md:pb-0">
        <div className="customContainer relative">
          <a
            className="absolute cursor-pointer tooltip-btn right-6 -top-9 "
            data-tooltip="Edit contents"
            onClick={handleUpdateWorkCompanyProfileDesc}
          >
            <HiPencil className=" bg-[#C7AC27] rounded-full  w-[25px] h-[25px] p-[5px] border-[1px] text-black" />
          </a>
          <h2 className="text-[clamp(16px,5vw,20px)] text-center">
            {workCompanyProfileData?.data?.[0]?.work_profile_desc ||
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam accusamus aperiam rem neque ab, impedit doloremque eveniet incidunt quasi ipsa!"}
          </h2>
        </div>
      </div>

      <section className="partnersWithUs pb-20 md:py-20 ">
        <div className="customContainer relative">
          <a
            className="absolute cursor-pointer tooltip-btn left-[35rem] top-0"
            data-tooltip="Edit contents"
            onClick={handleUpdateWorkCompanyProfile}
          >
            <FaRegImages className=" bg-[#C7AC27] rounded-full  w-[25px] h-[25px] p-[5px] border-[1px] text-black" />
          </a>
          <p>
            {workCompanyProfileData?.data?.[0]?.work_profile_subtitle ||
              "Subtitle"}
          </p>
          <h2 className="text-[clamp(20px,7vw,35px)] leading-[1.1] mb-12 text-light">
            <span className="font-semibold text-primary">
              {workCompanyProfileData?.data?.[0]?.work_profile_title || "Title"}
            </span>
          </h2>
          <div className="wrapper lg:grid lg:grid-cols-2 gap-12">
            <div className="relative">
              {workCompanyProfileData?.data?.length > 0 &&
              workCompanyProfileImage?.length > 0 ? (
                <>
                  {workCompanyProfileImage.map((img, index) => (
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
                  {workCompanyProfileData?.data?.[0]
                    ?.work_profile_button_text || "Button"}
                </button>

                {workCompanyProfileFile.map((file, index) => (
                  <a
                    href={`${googleViewLink}${file?.id}`}
                    className="flex items-center gap-2 font-bold text-primary"
                    target="_blank"
                    key={index}
                  >
                    Company Profile <FaFileDownload />
                  </a>
                ))}
              </div>
            </div>
            <div className="mt-14 lg:mt-0">
              <a
                className="absolute cursor-pointer tooltip-btn right-6 top-16 "
                data-tooltip="Edit contents"
                onClick={handleUpdateWorkCompanyProfileList}
              >
                <HiPencil className=" bg-[#C7AC27] rounded-full  w-[25px] h-[25px] p-[5px] border-[1px] text-black" />
              </a>
              <ul>
                <li className="flex items-start gap-4 text-dark mb-8">
                  <div className="flex gap-4 items-start">
                    <div>
                      <h3 className="textGradient text-[clamp(16px,5vw,24px)] mb-1">
                        <span className="font-bold">
                          {workCompanyProfileData?.data?.[0]
                            ?.work_profile_list_title_bold_a || "Title"}
                        </span>{" "}
                        {workCompanyProfileData?.data?.[0]
                          ?.work_profile_list_title_a || "Title"}
                      </h3>
                      <p>
                        {workCompanyProfileData?.data?.[0]
                          ?.work_profile_list_description_a ||
                          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis, numquam aut unde dolorum nulla praesentium sint eum mollitia nam alias."}
                      </p>
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-4 text-dark mb-8">
                  <div className="flex gap-4 items-start">
                    <div>
                      <h3 className="textGradient text-[clamp(16px,5vw,24px)] mb-1">
                        <span className="font-bold">
                          {workCompanyProfileData?.data?.[0]
                            ?.work_profile_list_title_bold_b || "Title"}
                        </span>{" "}
                        {workCompanyProfileData?.data?.[0]
                          ?.work_profile_list_title_b || "Title"}
                      </h3>
                      <p>
                        {workCompanyProfileData?.data?.[0]
                          ?.work_profile_list_description_b ||
                          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis, numquam aut unde dolorum nulla praesentium sint eum mollitia nam alias."}
                      </p>
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-4 text-dark mb-8">
                  <div className="flex gap-4 items-start">
                    <div>
                      <h3 className="textGradient text-[clamp(16px,5vw,24px)] mb-1">
                        <span className="font-bold">
                          {workCompanyProfileData?.data?.[0]
                            ?.work_profile_list_title_bold_c || "Title"}
                        </span>{" "}
                        {workCompanyProfileData?.data?.[0]
                          ?.work_profile_list_title_c || "Title"}
                      </h3>
                      <p>
                        {workCompanyProfileData?.data?.[0]
                          ?.work_profile_list_description_c ||
                          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis, numquam aut unde dolorum nulla praesentium sint eum mollitia nam alias."}
                      </p>
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-4 text-dark">
                  <div className="flex gap-4 items-start">
                    <div>
                      <h3 className="textGradient text-[clamp(16px,5vw,24px)] mb-1">
                        <span className="font-bold">
                          {workCompanyProfileData?.data?.[0]
                            ?.work_profile_list_title_bold_d || "Title"}
                        </span>{" "}
                        {workCompanyProfileData?.data?.[0]
                          ?.work_profile_list_title_d || "Title"}
                      </h3>
                      <p>
                        {workCompanyProfileData?.data?.[0]
                          ?.work_profile_list_description_d ||
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
          setIsContactDefaultOpen={setIsContactDefaultOpen}
          services={"default"}
          page={"Home"}
        />
      )}
    </>
  );
};

export default WorkCompanyProfile;
