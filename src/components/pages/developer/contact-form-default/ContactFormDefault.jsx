import React from "react";
import { IoCloseCircle, IoMailSharp } from "react-icons/io5";
import {
  devBaseImgUrl,
  getConvertStringToJSONparseData,
  googleHDViewLink,
  googleViewLink,
  siteKey,
} from "../../../helpers/functions-general";
import { IoMdPin } from "react-icons/io";
import {
  FaFacebookSquare,
  FaFileDownload,
  FaInstagramSquare,
  FaLinkedin,
  FaPhone,
  FaRegImages,
  FaYoutubeSquare,
} from "react-icons/fa";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { AiFillTikTok } from "react-icons/ai";
import { Form, Formik } from "formik";
import ReCAPTCHA from "react-google-recaptcha";
import { InputText, InputTextArea } from "../../../helpers/FormInputs";
import LoadImages from "../../../partials/LoadImages";
import { HiPencil } from "react-icons/hi";

const ContactFormDefault = ({
  thePageName,
  setIsContactDefaultOpen,
  handleUpdateContactFormDefault,
  contactFormDefaultData,
  contactFormLcssData,
  handleUpdateContactFormLcss,
  contactUsDefaultimmersionFile,
  contactFormWordpressData,
  handleUpdateContactFormWordpress,
}) => {
  const handleClose = () => {
    setIsContactDefaultOpen(false);
  };

  const contactUsDefaultImage = getConvertStringToJSONparseData(
    contactFormDefaultData?.data?.[0]?.form_default_img
  );

  const contactUsDefaultFile = getConvertStringToJSONparseData(
    contactFormDefaultData?.data?.[0]?.form_default_file
  );

  const contactUsLcssFile = getConvertStringToJSONparseData(
    contactFormLcssData?.data?.[0]?.form_lcss_file
  );

  const contactUsWordpressFile = getConvertStringToJSONparseData(
    contactFormWordpressData?.data?.[0]?.form_wordpress_file
  );

  return (
    <>
      <div
        onClick={handleClose}
        className="ModalContact fixed  w-[calc(100%_-_280px)] h-screen px-4 top-0 bg-dark bg-opacity-70 z-[80] sm:grid sm:place-items-center backdrop-blur-sm overflow-auto py-6 md:py-0 mt-8 mr-6"
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="theModal bg-customGray px-4 md:px-10 lg:my-5 lg:pl-10 py-10 lg:pr-[150px] md:grid md:grid-cols-2 gap-10 rounded-lg relative addShadow max-h-[700px] "
        >
          <button className="closeBtn absolute right-[-14px] top-[-14px] z-[1] cursor-pointer disabled:cursor-not-allowed">
            <IoCloseCircle
              className="text-3xl text-light"
              onClick={handleClose}
            />
          </button>

          {thePageName !== "cms" ? (
            thePageName !== "College OJT" &&
            thePageName !== "Work Immersion" &&
            thePageName !== "Continuing Study" ? (
              <a
                className="absolute cursor-pointer tooltip-btn left-[320px] top-8"
                data-tooltip="Edit contents"
                onClick={handleUpdateContactFormDefault}
              >
                <FaRegImages className="bg-[#C7AC27] rounded-full w-[25px] h-[25px] p-[5px] border-[1px] text-black" />
              </a>
            ) : (
              <a
                className="absolute cursor-pointer tooltip-btn left-[320px] top-8"
                data-tooltip="Edit contents"
                onClick={handleUpdateContactFormLcss}
              >
                <HiPencil className="bg-[#C7AC27] rounded-full w-[25px] h-[25px] p-[5px] border-[1px] text-black" />
              </a>
            )
          ) : (
            <a
              className="absolute cursor-pointer tooltip-btn left-[320px] top-8"
              data-tooltip="Edit contents"
              onClick={handleUpdateContactFormWordpress}
            >
              <HiPencil className="bg-[#C7AC27] rounded-full w-[25px] h-[25px] p-[5px] border-[1px] text-black" />
            </a>
          )}

          <div className="absolute right-0 w-[30%] h-full hidden lg:block">
            {contactFormDefaultData?.data?.length > 0 &&
            contactUsDefaultImage?.length > 0 ? (
              <>
                {contactUsDefaultImage.map((img, index) => (
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
                <p>
                  {contactFormDefaultData?.data?.length > 0 &&
                  contactFormDefaultData.data[0]?.form_default_subtitle
                    ? contactFormDefaultData?.data[0].form_default_subtitle
                    : "Subtitle"}
                </p>
                <h3 className="text-[clamp(20px,7vw,30px)] font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-[transparent] group-hover:text-light">
                  {contactFormDefaultData?.data?.length > 0 &&
                  contactFormDefaultData.data[0]?.form_default_title
                    ? contactFormDefaultData?.data[0].form_default_title
                    : "Title"}
                </h3>
              </div>

              {thePageName === "College OJT" ||
              thePageName === "Work Immersion" ||
              thePageName === "Continuing Study" ? (
                <>
                  <ul className="[&>li]:flex [&>li]:items-center [&>li]:gap-2 [&>li]:mb-4 mb-6 md:mb-12 leading-[1.2] text-[12px]">
                    <li className="!items-start">
                      <IoMdPin />
                      <p className="md:w-[50%]">
                        {contactFormDefaultData?.data?.length > 0 &&
                        contactFormDefaultData.data[0]?.form_default_address
                          ? contactFormDefaultData?.data[0].form_default_address
                          : "Address"}
                      </p>
                    </li>
                    <li>
                      <FaPhone />
                      <p>
                        {contactFormLcssData?.data?.length > 0 &&
                        contactFormLcssData.data[0]?.form_lcss_telephone
                          ? contactFormLcssData?.data[0].form_lcss_telephone
                          : "Telephone No."}
                      </p>
                    </li>
                    <li>
                      <MdOutlinePhoneIphone />
                      <p>
                        {contactFormLcssData?.data?.length > 0 &&
                        contactFormLcssData.data[0]?.form_lcss_phone
                          ? contactFormLcssData?.data[0].form_lcss_phone
                          : "Phone No."}
                      </p>
                    </li>
                  </ul>

                  <ul className="[&>li]:flex [&>li]:items-center [&>li]:gap-2 [&>li]:mb-4 mb-6 md:mb-12 leading-[1.2] text-sm">
                    <li>
                      <div className="text-xs md:text-sm">
                        <div className="mb-4">
                          <h3 className="font-semibold">
                            {contactFormLcssData?.data?.length > 0 &&
                            contactFormLcssData.data[0]
                              ?.form_lcss_computer_title
                              ? contactFormLcssData?.data[0]
                                  .form_lcss_computer_title
                              : "Computer Title"}
                          </h3>
                          <p>
                            {contactFormLcssData?.data?.length > 0 &&
                            contactFormLcssData.data[0]?.form_lcss_computer_name
                              ? contactFormLcssData?.data[0]
                                  .form_lcss_computer_name
                              : "Name"}
                          </p>
                          <p>
                            {contactFormLcssData?.data?.length > 0 &&
                            contactFormLcssData.data[0]
                              ?.form_lcss_computer_email
                              ? contactFormLcssData?.data[0]
                                  .form_lcss_computer_email
                              : "Email"}
                          </p>
                        </div>
                        <div className="mb-8">
                          <h3 className="font-semibold">
                            {contactFormLcssData?.data?.length > 0 &&
                            contactFormLcssData.data[0]
                              ?.form_lcss_accounting_title
                              ? contactFormLcssData?.data[0]
                                  .form_lcss_accounting_title
                              : "Accounting Title"}
                          </h3>
                          <p>
                            {contactFormLcssData?.data?.length > 0 &&
                            contactFormLcssData.data[0]
                              ?.form_lcss_accounting_name
                              ? contactFormLcssData?.data[0]
                                  .form_lcss_accounting_name
                              : "Name"}
                          </p>
                          <p>
                            {contactFormLcssData?.data?.length > 0 &&
                            contactFormLcssData.data[0]
                              ?.form_lcss_accounting_email
                              ? contactFormLcssData?.data[0]
                                  .form_lcss_accounting_email
                              : "Email"}
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </>
              ) : thePageName === "career" ? (
                <ul className="[&>li]:flex [&>li]:items-center [&>li]:gap-2 [&>li]:mb-4 mb-6 md:mb-12 leading-[1.2] text-sm md:text-sm">
                  <li className="!items-start">
                    <IoMdPin />
                    <p>
                      Baloc road, Brgy. San Ignacio, <br /> San Pablo City,
                      Laguna, 4000
                    </p>
                  </li>
                  <li>
                    <FaPhone />
                    <p>(049) 501 3592</p>
                  </li>
                  <li>
                    <MdOutlinePhoneIphone />
                    <p>(+63) 927 168 6810</p>
                  </li>
                  <li>
                    <div className="text-xs md:text-sm">
                      <div className="mb-4">
                        <h3 className="font-semibold">
                          Human Resource Manager
                        </h3>
                        <p>Mrs. Rhoda Beloso</p>
                        <p>rhoda.beloso@frontlinebusiness.com.ph</p>
                      </div>
                      <div className="mb-8">
                        <h3 className="font-semibold">Human Resource Staff</h3>
                        <p>Mrs. Kennie Deriquito</p>
                        <p>kennie.deriquito@frontlinebusiness.com.ph</p>
                      </div>
                    </div>
                  </li>
                </ul>
              ) : (
                <>
                  <ul className="[&>li]:flex [&>li]:items-center [&>li]:gap-2 [&>li]:mb-4 mb-6 md:mb-12 leading-[1.2] text-xs md:text-sm">
                    <li className="!items-start">
                      <IoMdPin />
                      <p className="md:w-[50%]">
                        {contactFormDefaultData?.data?.length > 0 &&
                        contactFormDefaultData.data[0]?.form_default_address
                          ? contactFormDefaultData?.data[0].form_default_address
                          : "Address"}
                      </p>
                    </li>
                    <li>
                      <FaPhone />
                      <p>
                        {contactFormDefaultData?.data?.length > 0 &&
                        contactFormDefaultData.data[0]?.form_default_telephone
                          ? contactFormDefaultData?.data[0]
                              .form_default_telephone
                          : "Telephone No."}
                      </p>
                    </li>
                    <li>
                      <MdOutlinePhoneIphone />
                      <p>
                        {contactFormDefaultData?.data?.length > 0 &&
                        contactFormDefaultData.data[0]?.form_default_phone
                          ? contactFormDefaultData?.data[0].form_default_phone
                          : "Phone No."}
                      </p>
                    </li>
                    <li>
                      <IoMailSharp />
                      <p>
                        {contactFormDefaultData?.data?.length > 0 &&
                        contactFormDefaultData.data[0]?.form_default_email
                          ? contactFormDefaultData?.data[0].form_default_email
                          : "Email"}
                      </p>
                    </li>
                  </ul>
                </>
              )}

              <div className="mb-4">
                <p>Follow Us:</p>
                {contactFormDefaultData?.data?.length > 0 &&
                  (() => {
                    const item = contactFormDefaultData.data[0];

                    return (
                      <ul className="flex gap-2 text-2xl">
                        {item.form_default_facebook_link && (
                          <li>
                            <a
                              href={item.form_default_facebook_link || "#"}
                              target="_blank"
                            >
                              <FaFacebookSquare />
                            </a>
                          </li>
                        )}
                        {item.form_default_linkedin_link && (
                          <li>
                            <a
                              href={item.form_default_linkedin_link || "#"}
                              target="_blank"
                            >
                              <FaLinkedin />
                            </a>
                          </li>
                        )}
                        {item.form_default_youtube_link && (
                          <li>
                            <a
                              href={item.form_default_youtube_link || "#"}
                              target="_blank"
                            >
                              <FaYoutubeSquare />
                            </a>
                          </li>
                        )}
                        {item.form_default_instagram_link && (
                          <li>
                            <a
                              href={item.form_default_instagram_link || "#"}
                              target="_blank"
                            >
                              <FaInstagramSquare />
                            </a>
                          </li>
                        )}
                        {item.form_default_tiktok_link && (
                          <li>
                            <a
                              href={item.form_default_tiktok_link || "#"}
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
              {thePageName === "College OJT" ? (
                <>
                  <p className="text-sm">Learn more about our OJT program</p>
                  {contactUsLcssFile.map((file, index) => (
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
              ) : thePageName === "Work Immersion" ? (
                <>
                  <p className="text-sm">
                    Learn more about our immersion program
                  </p>
                  {contactUsDefaultimmersionFile.map((file, index) => (
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
              ) : thePageName === "Continuing Study" ? (
                <></>
              ) : thePageName === "cms" ? (
                <>
                  <p className="text-sm">Learn more about our CMS program</p>
                  {contactUsWordpressFile.map((file, index) => (
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
                  <p className="text-sm">Learn more about our program</p>
                  {contactUsDefaultFile.map((file, index) => (
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
                      <div className="input-wrapper textAreaWrapper">
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
    </>
  );
};

export default ContactFormDefault;
