import React from "react";
import ReCAPTCHA from "react-google-recaptcha";
import {
  getConvertStringToJSONparseData,
  googleHDViewLink,
  siteKey,
} from "../../../helpers/functions-general";
import {
  InputFileUpload,
  InputText,
  InputTextArea,
} from "../../../helpers/FormInputs";
import { AiFillTikTok } from "react-icons/ai";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaPhone,
  FaRegImages,
  FaYoutubeSquare,
} from "react-icons/fa";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { IoMdPin } from "react-icons/io";
import { IoCloseCircle } from "react-icons/io5";
import LoadImages from "../../../partials/LoadImages";
import { Form, Formik } from "formik";
import { HiPencil } from "react-icons/hi";

const ContactFormLcss = ({
  thePageName,
  contactFormDefaultData,
  handleUpdateContactFormLcss,
  contactFormLcssData,
  setLcssForm,
}) => {
  const recaptchaRef = React.useRef();

  const contactUsDefaultImage = getConvertStringToJSONparseData(
    contactFormDefaultData?.data?.[0]?.form_default_img
  );

  const handleClose = () => {
    setLcssForm(false);
  };

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
          className="theModal bg-customGray px-4 lg:pl-10 pt-10 pb-10 lg:pr-[150px] md:grid md:grid-cols-2 gap-10 rounded-lg relative addShadow"
        >
          <button className="closeBtn absolute right-[-14px] top-[-14px] z-[1] cursor-pointer disabled:cursor-not-allowed">
            <IoCloseCircle
              className="text-3xl text-light"
              onClick={() => {
                setLcssForm(false);
              }}
            />
          </button>
          <a
            className="absolute cursor-pointer tooltip-btn left-[320px] top-8 "
            data-tooltip="Edit contents"
            onClick={handleUpdateContactFormLcss}
          >
            <HiPencil className=" bg-[#C7AC27] rounded-full  w-[25px] h-[25px] p-[5px] border-[1px] text-black" />
          </a>
          <div className="absolute right-0 w-[30%] h-full hidden lg:block">
            {/* <img
              src={`${devBaseImgUrl}/lets-talk.jpg`}
              className="h-full object-cover rounded-tr-lg rounded-br-lg object-center"
              alt=""
            /> */}
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
                  {contactFormLcssData?.data?.length > 0 &&
                  contactFormLcssData.data[0]?.form_lcss_subtitle
                    ? contactFormLcssData?.data[0].form_lcss_subtitle
                    : "Subtitle"}
                </p>
                <h3 className="text-[clamp(20px,7vw,30px)] font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-[transparent] group-hover:text-light">
                  {contactFormLcssData?.data?.length > 0 &&
                  contactFormLcssData.data[0]?.form_lcss_title
                    ? contactFormLcssData?.data[0].form_lcss_title
                    : "Title"}
                </h3>
              </div>
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
                        contactFormLcssData.data[0]?.form_lcss_computer_title
                          ? contactFormLcssData?.data[0]
                              .form_lcss_computer_title
                          : "Computer Title"}
                      </h3>
                      <p>
                        {contactFormLcssData?.data?.length > 0 &&
                        contactFormLcssData.data[0]?.form_lcss_computer_name
                          ? contactFormLcssData?.data[0].form_lcss_computer_name
                          : "Name"}
                      </p>
                      <p>
                        {contactFormLcssData?.data?.length > 0 &&
                        contactFormLcssData.data[0]?.form_lcss_computer_email
                          ? contactFormLcssData?.data[0]
                              .form_lcss_computer_email
                          : "Email"}
                      </p>
                    </div>
                    <div className="mb-8">
                      <h3 className="font-semibold">
                        {contactFormLcssData?.data?.length > 0 &&
                        contactFormLcssData.data[0]?.form_lcss_accounting_title
                          ? contactFormLcssData?.data[0]
                              .form_lcss_accounting_title
                          : "Accounting Title"}
                      </h3>
                      <p>
                        {contactFormLcssData?.data?.length > 0 &&
                        contactFormLcssData.data[0]?.form_lcss_accounting_name
                          ? contactFormLcssData?.data[0]
                              .form_lcss_accounting_name
                          : "Name"}
                      </p>
                      <p>
                        {contactFormLcssData?.data?.length > 0 &&
                        contactFormLcssData.data[0]?.form_lcss_accounting_email
                          ? contactFormLcssData?.data[0]
                              .form_lcss_accounting_email
                          : "Email"}
                      </p>
                    </div>
                  </div>
                </li>
              </ul>

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
          </div>

          <div className="theForm  p-4 addShadow rounded-lg bg-light relative z-[1] w-full xl:w-[428px]">
            <p className="mb-2 text-sm md:text-lg">
              <b className="uppercase">{thePageName}</b> Application
            </p>
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
                          label="Mobile Number"
                          type="text"
                          number="number"
                          name="client_phone"
                        />
                      </div>

                      <div className="input-wrapper">
                        <span htmlFor="" className="text-xs">
                          Upload Resume (PDF Only (8mb))
                        </span>
                        <InputFileUpload
                          type="file"
                          name="client_file"
                          accept="application/pdf"
                          id="myFile"
                          onChange={(e) => handleChangeFiles(e)}
                        />
                      </div>

                      <div className="input-wrapper textAreaWrapper">
                        <InputTextArea
                          label="Message"
                          type="text"
                          name="client_message"
                          className="max-h-[200px]"
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
    </>
  );
};

export default ContactFormLcss;
