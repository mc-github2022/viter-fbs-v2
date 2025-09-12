import React from "react";
import {
  apiVersion,
  devBaseImgUrl,
  getConvertStringToJSONparseData,
  googleHDViewLink,
  googleViewLink,
} from "../../../helpers/functions-general";
import { FaFileDownload } from "react-icons/fa";
import { FaRegCircleCheck } from "react-icons/fa6";
import ModalContact from "../../../partials/ModalContact";
import useQueryData from "../../../custom-hooks/useQueryData";
import LoadImages from "../../../partials/LoadImages";

const WhyUsCompanyProfile = ({ pageName }) => {
  const [modalContact, setModalContact] = React.useState(false);
  const [contactForm, setContactForm] = React.useState(false);

  const { data: workCompanyProfileData } = useQueryData(
    `${apiVersion}/work-company-profile`, // endpoint
    "get", // method
    "work-company-profile" // key
  );

  const handleForm = () => {
    setContactForm(!contactForm);
  };

  const workCompanyProfileImage = getConvertStringToJSONparseData(
    workCompanyProfileData?.data?.[0]?.work_profile_img
  );

  const workCompanyProfileFile = getConvertStringToJSONparseData(
    workCompanyProfileData?.data?.[0]?.work_profile_file
  );

  React.useEffect(() => {
    const handleHashChange = () => {
      const id = window.location.hash.substring(1);
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <>
      <div className="whyUsIntro py-16 md:pt-20 md:pb-0" id="whychooseus">
        <div className="customContainer">
          <h2 className="text-[clamp(16px,5vw,20px)] text-center">
            {workCompanyProfileData?.data?.[0]?.work_profile_desc || ""}
          </h2>
        </div>
      </div>

      <section className="partnersWithUs pb-20 md:py-20 " id="whychooseus">
        <div className="customContainer">
          <p>
            {workCompanyProfileData?.data?.[0]?.work_profile_subtitle || ""}
          </p>
          <h2 className="text-[clamp(20px,7vw,35px)] leading-[1.1] mb-12 text-light">
            <span className="font-semibold text-primary">
              {workCompanyProfileData?.data?.[0]?.work_profile_title || ""}
            </span>
          </h2>
          <div className="wrapper lg:grid lg:grid-cols-2 gap-12">
            <div>
              {workCompanyProfileImage.map((img, index) => (
                <LoadImages
                  url={`${googleHDViewLink}${img?.id}`}
                  className="mb-12 w-fit mx-auto"
                  alt={`Our Web Application ${index + 1}`}
                  key={index}
                />
              ))}

              <ul className="flex flex-col md:flex md:flex-row items-center gap-12">
                <li>
                  <button
                    onClick={handleForm}
                    className="btn bg-primary text-light font-semibold uppercase"
                  >
                    {workCompanyProfileData?.data?.[0]
                      ?.work_profile_button_text || ""}
                  </button>
                </li>
                <li>
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
                </li>
              </ul>
            </div>
            <div className="mt-14 lg:mt-0">
              <ul>
                <li className="flex items-start gap-4 text-dark mb-8">
                  <div className="flex gap-4 items-start">
                    <div>
                      <h3 className="textGradient text-[clamp(16px,5vw,24px)] mb-1">
                        <span className="font-bold">
                          {workCompanyProfileData?.data?.[0]
                            ?.work_profile_list_title_bold_a || ""}
                        </span>{" "}
                        {workCompanyProfileData?.data?.[0]
                          ?.work_profile_list_title_a || ""}
                      </h3>
                      <p>
                        {workCompanyProfileData?.data?.[0]
                          ?.work_profile_list_description_a || ""}
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
                            ?.work_profile_list_title_bold_b || ""}
                        </span>{" "}
                        {workCompanyProfileData?.data?.[0]
                          ?.work_profile_list_title_b || ""}
                      </h3>
                      <p>
                        {workCompanyProfileData?.data?.[0]
                          ?.work_profile_list_description_b || ""}
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
                            ?.work_profile_list_title_bold_c || ""}
                        </span>{" "}
                        {workCompanyProfileData?.data?.[0]
                          ?.work_profile_list_title_c || ""}
                      </h3>
                      <p>
                        {workCompanyProfileData?.data?.[0]
                          ?.work_profile_list_description_c || ""}
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
                            ?.work_profile_list_title_bold_d || ""}
                        </span>{" "}
                        {workCompanyProfileData?.data?.[0]
                          ?.work_profile_list_title_d || ""}
                      </h3>
                      <p>
                        {workCompanyProfileData?.data?.[0]
                          ?.work_profile_list_description_d || ""}
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {contactForm && (
        <ModalContact
          setModalContact={setModalContact}
          thePageName={pageName}
          contactForm={contactForm}
          setContactForm={setContactForm}
          modalContact={modalContact}
          contactSubject={""}
          services={"default"}
          notification_purpose={"default-receiver"}
          emailSubject={`PARTNER WITH US / Why Work With Us - `}
        />
      )}
    </>
  );
};

export default WhyUsCompanyProfile;
