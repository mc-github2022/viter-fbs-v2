import { Form, Formik } from "formik";
import React from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { AiFillTikTok } from "react-icons/ai";
import {
  FaFacebookSquare,
  FaFileDownload,
  FaInstagramSquare,
  FaLinkedin,
  FaPhone,
  FaRegImages,
  FaYoutubeSquare,
} from "react-icons/fa";
import { IoMdPin } from "react-icons/io";
import { IoCloseCircle, IoMailSharp } from "react-icons/io5";
import { MdOutlinePhoneIphone } from "react-icons/md";
import useQueryData from "../../../custom-hooks/useQueryData";
import { InputText, InputTextArea } from "../../../helpers/FormInputs";
import {
  apiVersion,
  getConvertStringToJSONparseData,
  getUrlParam,
  googleHDViewLink,
  googleViewLink,
  siteKey,
} from "../../../helpers/functions-general";
import LoadImages from "../../../partials/LoadImages";
import { StoreContext } from "../../../store/StoreContext";
import Navigation from "../../../partials/dashboard/Navigation";
import Dashboard from "../../../partials/dashboard/Dashboard";
import BreadCrumbs from "../../../partials/BreadCrumbs";

const ContactFormView = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const recaptchaRef = React.useRef();
  const contactFormId = getUrlParam().get("contactformid");

  const {
    isLoading,
    isFetching,
    error,
    data: contentFormData,
  } = useQueryData(
    `${apiVersion}/contactForm/${contactFormId}`, // endpoint
    "get", // method
    "contactForm", // key
    { contactFormId },
    contactFormId
  );

  const portfolio = getConvertStringToJSONparseData(
    contentFormData?.data?.[0]?.form_portfolio
  );

  const image = getConvertStringToJSONparseData(
    contentFormData?.data?.[0]?.form_img
  );

  const handleChange = (value) => {
    console.log(value);
    // setCaptcha(value);
  };

  return (
    <>
      <section className="bg-[#f5f5f3]">
        <Navigation menu="contact-form" />
        <Dashboard>
          <div className="mx-5 pt-2">
            <div className="py-5 flex  ">
              <BreadCrumbs param={location.search} />
              <h2 className="text-sm text-black font-semibold">
                {contentFormData?.data?.[0]?.form_name || ""}
              </h2>
            </div>
            <div className="pb-4">
              <div className="ModalContact h-screen px-4  z-[9999] sm:grid sm:place-items-center overflow-auto md:py-0">
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                  className="theModal bg-customGray px-4 md:px-10 lg:my-5 lg:pl-10 py-10 lg:pr-[150px] md:grid md:grid-cols-2 gap-10 rounded-lg relative addShadow h-fit "
                >
                  <button className="closeBtn absolute right-[-14px] top-[-14px] z-[1] cursor-pointer disabled:cursor-not-allowed">
                    <IoCloseCircle className="text-3xl text-light" />
                  </button>
                  <div className="absolute right-0 w-[30%] h-full hidden lg:block">
                    {contentFormData?.data?.length > 0 && image?.length > 0 ? (
                      <>
                        {image.map((img, index) => (
                          <LoadImages
                            url={`${googleHDViewLink}${img?.id}`}
                            alt={`Contact Form Default ${index + 1}`}
                            className="h-full object-cover rounded-tr-lg rounded-br-lg object-center"
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
                  <div className="flex flex-col justify-between">
                    <div>
                      <div className="mb-12">
                        <p>{contentFormData?.data?.[0]?.form_subtitle || ""}</p>
                        <h3 className="text-[clamp(20px,7vw,30px)] font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-[transparent] group-hover:text-light">
                          {contentFormData?.data?.[0]?.form_title || ""}
                        </h3>
                      </div>

                      {contentFormData?.data?.[0]?.form_services ===
                      "lcss services" ? (
                        <>
                          <ul className="[&>li]:flex [&>li]:items-center [&>li]:gap-2 [&>li]:mb-4 mb-6 md:mb-12 leading-[1.2] text-sm md:text-sm">
                            <li className="!items-start">
                              <IoMdPin />
                              <p className="md:w-[50%]">
                                {contentFormData?.data?.[0]?.form_address || ""}
                              </p>
                            </li>
                            <li>
                              <FaPhone />
                              <p>
                                {contentFormData?.data?.[0]
                                  ?.form_accounting_no || ""}
                              </p>
                            </li>
                            <li>
                              <MdOutlinePhoneIphone />
                              <p>
                                {contentFormData?.data?.[0]?.form_company_no ||
                                  ""}
                              </p>
                            </li>
                            <li>
                              <MdOutlinePhoneIphone />
                              <p>
                                {contentFormData?.data?.[0]?.form_web_no || ""}
                              </p>
                            </li>
                            <li>
                              <div className="text-xs md:text-sm">
                                <div className="mb-4">
                                  <h3 className="font-semibold">
                                    {contentFormData?.data?.[0]
                                      ?.form_computer_role || ""}
                                  </h3>
                                  <p>
                                    {contentFormData?.data?.[0]
                                      ?.form_computer_name || ""}
                                  </p>
                                  <p>
                                    {contentFormData?.data?.[0]
                                      ?.form_computer_email || ""}
                                  </p>
                                </div>
                                <div className="mb-8">
                                  <h3 className="font-semibold">
                                    {contentFormData?.data?.[0]
                                      ?.form_accounting_role || ""}
                                  </h3>
                                  <p>
                                    {contentFormData?.data?.[0]
                                      ?.form_accounting_name || ""}
                                  </p>
                                  <p>
                                    {contentFormData?.data?.[0]
                                      ?.form_accounting_email || ""}
                                  </p>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </>
                      ) : contentFormData?.data?.[0]?.form_services ===
                        "career" ? (
                        <ul className="[&>li]:flex [&>li]:items-center [&>li]:gap-2 [&>li]:mb-4 mb-6 md:mb-12 leading-[1.2] text-sm md:text-sm">
                          <li className="!items-start">
                            <IoMdPin />
                            <p className="md:w-[50%]">
                              {contentFormData?.data?.[0]?.form_address || ""}
                            </p>
                          </li>
                          <li>
                            <FaPhone />
                            <p>
                              {contentFormData?.data?.[0]?.form_accounting_no ||
                                ""}
                            </p>
                          </li>
                          <li>
                            <MdOutlinePhoneIphone />
                            <p>
                              {contentFormData?.data?.[0]?.form_company_no ||
                                ""}
                            </p>
                          </li>
                          <li>
                            <MdOutlinePhoneIphone />
                            <p>
                              {contentFormData?.data?.[0]?.form_web_no || ""}
                            </p>
                          </li>
                          <li>
                            <div className="text-xs md:text-sm">
                              <div className="mb-4">
                                <h3 className="font-semibold">
                                  {contentFormData?.data?.[0]
                                    ?.form_hr_manager_role || ""}
                                </h3>
                                <p>
                                  {contentFormData?.data?.[0]
                                    ?.form_hr_manager_name || ""}
                                </p>
                                <p>
                                  {contentFormData?.data?.[0]
                                    ?.form_hr_manager_email || ""}
                                </p>
                              </div>
                              <div className="mb-8">
                                <h3 className="font-semibold">
                                  {contentFormData?.data?.[0]
                                    ?.form_hr_staff_role || ""}
                                </h3>
                                <p>
                                  {contentFormData?.data?.[0]
                                    ?.form_hr_staff_name || ""}
                                </p>
                                <p>
                                  {contentFormData?.data?.[0]
                                    ?.form_hr_staff_email || ""}
                                </p>
                              </div>
                            </div>
                          </li>
                        </ul>
                      ) : contentFormData?.data?.[0]?.form_services ===
                        "web services" ? (
                        <>
                          <ul className="[&>li]:flex [&>li]:items-center [&>li]:gap-2 [&>li]:mb-4 mb-6 md:mb-12 leading-[1.2] text-sm">
                            <li className="!items-start">
                              <IoMdPin />
                              <p className="md:w-[50%]">
                                {contentFormData?.data?.[0]?.form_address || ""}
                              </p>
                            </li>
                            <li>
                              <FaPhone />
                              <p>
                                {contentFormData?.data?.[0]
                                  ?.form_accounting_no || ""}
                              </p>
                            </li>
                            <li>
                              <MdOutlinePhoneIphone />
                              <p>
                                {contentFormData?.data?.[0]?.form_company_no ||
                                  ""}
                              </p>
                            </li>
                            <li>
                              <MdOutlinePhoneIphone />
                              <p>
                                {contentFormData?.data?.[0]?.form_web_no || ""}
                              </p>
                            </li>
                          </ul>
                          <ul className="[&>li]:flex [&>li]:items-center [&>li]:gap-2 [&>li]:mb-4 mb-6 md:mb-12 leading-[1.2] text-sm">
                            <li>
                              <div className="text-xs md:text-sm">
                                <div className="mb-4">
                                  <h3 className="font-semibold">
                                    {contentFormData?.data?.[0]
                                      ?.form_web_role || ""}
                                  </h3>
                                  <p>
                                    {contentFormData?.data?.[0]
                                      ?.form_web_name || ""}
                                  </p>
                                  <p>
                                    {contentFormData?.data?.[0]
                                      ?.form_web_email || ""}
                                  </p>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </>
                      ) : (
                        <>
                          <ul className="[&>li]:flex [&>li]:items-center [&>li]:gap-2 [&>li]:mb-4 mb-6 md:mb-12 leading-[1.2] text-xs md:text-sm">
                            <li className="!items-start">
                              <IoMdPin />
                              <p className="md:w-[50%]">
                                {contentFormData?.data?.[0]?.form_address || ""}
                              </p>
                            </li>
                            <li>
                              <FaPhone />
                              <p>
                                {contentFormData?.data?.[0]
                                  ?.form_accounting_no || ""}
                              </p>
                            </li>
                            <li>
                              <MdOutlinePhoneIphone />
                              <p>
                                {contentFormData?.data?.[0]?.form_company_no ||
                                  ""}
                              </p>
                            </li>
                            <li>
                              <MdOutlinePhoneIphone />
                              <p>
                                {contentFormData?.data?.[0]?.form_web_no || ""}
                              </p>
                            </li>
                            <li>
                              <IoMailSharp />
                              <p>
                                {contentFormData?.data?.[0]
                                  ?.form_default_email || ""}
                              </p>
                            </li>
                          </ul>
                        </>
                      )}

                      <div className="mb-4">
                        <p>Follow Us:</p>
                        {contentFormData?.data?.length > 0 &&
                          (() => {
                            const item = contentFormData.data[0];

                            return (
                              <ul className="flex gap-2 text-2xl">
                                {item.form_facebook_link && (
                                  <li>
                                    <a
                                      href={item.form_facebook_link || "#"}
                                      target="_blank"
                                    >
                                      <FaFacebookSquare />
                                    </a>
                                  </li>
                                )}
                                {item.form_linkedin_link && (
                                  <li>
                                    <a
                                      href={item.form_linkedin_link || "#"}
                                      target="_blank"
                                    >
                                      <FaLinkedin />
                                    </a>
                                  </li>
                                )}
                                {item.form_youtube_link && (
                                  <li>
                                    <a
                                      href={item.form_youtube_link || "#"}
                                      target="_blank"
                                    >
                                      <FaYoutubeSquare />
                                    </a>
                                  </li>
                                )}
                                {item.form_instagram_link && (
                                  <li>
                                    <a
                                      href={item.form_instagram_link || "#"}
                                      target="_blank"
                                    >
                                      <FaInstagramSquare />
                                    </a>
                                  </li>
                                )}
                                {item.form_tiktok_link && (
                                  <li>
                                    <a
                                      href={item.form_tiktok_link || "#"}
                                      target="_blank"
                                    >
                                      <AiFillTikTok />
                                    </a>
                                  </li>
                                )}
                              </ul>
                            );
                          })()}
                      </div>
                    </div>
                    <div className="downloadProposal justify-end py-5 md:py-0">
                      {contentFormData?.data?.[0]?.packages_category_name ===
                      "College On-The-Job Training" ? (
                        <>
                          <p className="text-sm">
                            Learn more about our OJT program
                          </p>
                          {portfolio.map((file, index) => (
                            <a
                              href={`${googleViewLink}${file?.id}`}
                              className="flex gap-2 items-center font-bold text-primary pointer"
                              target="_blank"
                              key={index}
                            >
                              Download Proposal <FaFileDownload />
                            </a>
                          ))}
                        </>
                      ) : contentFormData?.data?.[0]?.packages_category_name ===
                        "High School Work Immersion" ? (
                        <>
                          <p className="text-sm">
                            Learn more about our immersion program
                          </p>
                          <a
                            href="https://drive.google.com/uc?export=download&amp;id=1o0xSoctvBb00q81fE_njVJANzVSiEPt_"
                            className="flex gap-2 items-center font-bold text-primary pointer"
                          >
                            Download Proposal <FaFileDownload />
                          </a>
                        </>
                      ) : contentFormData?.data?.[0]?.form_services ===
                        "lcss services" ? (
                        <></>
                      ) : contentFormData?.data?.[0]?.form_services ===
                        "web services" ? (
                        <>
                          <p className="text-sm">
                            Learn more about our WordPress CMS Website program
                          </p>
                          {portfolio.map((file, index) => (
                            <a
                              href={`${googleViewLink}${file?.id}`}
                              className="flex gap-2 items-center font-bold text-primary pointer"
                              target="_blank"
                              key={index}
                            >
                              Download Portfolio <FaFileDownload />
                            </a>
                          ))}
                        </>
                      ) : (
                        <>
                          <p className="text-sm">
                            Learn more about our program
                          </p>
                          {portfolio.map((file, index) => (
                            <a
                              href={`${googleViewLink}${file?.id}`}
                              className="flex gap-2 items-center font-bold text-primary pointer"
                              target="_blank"
                              key={index}
                            >
                              Download Company Profile <FaFileDownload />
                            </a>
                          ))}
                        </>
                      )}
                    </div>
                  </div>

                  <div className="theForm  p-4 addShadow rounded-lg bg-light relative z-[1] w-full xl:w-[428px] ">
                    {/* {contactSubject ? (
              <p className="mb-2 text-sm md:text-lg uppercase">
                {contentFormData?.data?.[0]?.form_services} :{" "}
                <b>{contactSubject}</b>
              </p>
            ) : (
              <></>
            )} */}

                    <Formik>
                      {(props) => {
                        return (
                          <Form>
                            <div className="modal__body">
                              <div className="input-wrapper">
                                <InputText
                                  label="Name"
                                  type="text"
                                  name="client_name"
                                />
                              </div>
                              <div className="input-wrapper">
                                <InputText
                                  label="Email"
                                  type="email"
                                  name="client_email"
                                  onPaste={(e) => e.preventDefault()}
                                  onCut={(e) => e.preventDefault()}
                                  onCopy={(e) => e.preventDefault()}
                                  onDrag={(e) => e.preventDefault()}
                                  onDrop={(e) => e.preventDefault()}
                                  onSelect={(e) => e.preventDefault()}
                                  autoComplete="off"
                                  required
                                />
                              </div>
                              <div className="input-wrapper">
                                <InputText
                                  label="Phone"
                                  type="text"
                                  name="client_phone"
                                  number="number"
                                />
                              </div>
                              <div className="input-wrapper">
                                <InputText
                                  label="Subject"
                                  type="text"
                                  name="client_message_subject"
                                />
                              </div>
                              {contentFormData?.data?.[0]
                                ?.form_is_upload_input === 1 && (
                                <div className="input-wrapper">
                                  <span htmlFor="" className="text-xs">
                                    Upload Resume (PDF Only (8mb))
                                  </span>
                                  <input
                                    type="file"
                                    name="client_file"
                                    accept="application/pdf"
                                    id="myFile"
                                  />
                                </div>
                              )}

                              <div className="input-wrapper ">
                                <InputTextArea
                                  label="Message"
                                  type="text"
                                  name="client_message"
                                  className="h-[200px]"
                                />
                              </div>
                              {siteKey ? (
                                <div className="input-wrapper reCaptcha">
                                  <ReCAPTCHA
                                    ref={recaptchaRef}
                                    sitekey={siteKey}
                                    onChange={(e) => handleChange(e)}
                                  />
                                </div>
                              ) : (
                                <p className="py-4 text-[red] text-xs">
                                  There's a problem in loading reCAPTCHA.
                                </p>
                              )}

                              <div className="modal__action flex justify-end mt-6 gap-2">
                                <button
                                  className="btn bg-primary text-light hover:text-light disabled:opacity-[0.5]"
                                  type="submit"
                                >
                                  Send Message
                                </button>
                              </div>
                            </div>
                          </Form>
                        );
                      }}
                    </Formik>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Dashboard>
      </section>
    </>
  );
};

export default ContactFormView;
