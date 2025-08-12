import React from "react";
import ReCAPTCHA from "react-google-recaptcha";
import {
  apiVersion,
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
import useQueryData from "../../../custom-hooks/useQueryData";

const ContactFormLcss = ({
  thePageName,
  services = null,
  page = null,
  setLcssForm,
}) => {
  const recaptchaRef = React.useRef();

  const { data: contentFormData } = useQueryData(
    `${apiVersion}/contactForm`, // endpoint
    "get", // method
    "contactForm", // key
    {},
    null,
    true
  );

  const contactUsDefaultImage = getConvertStringToJSONparseData(
    contentFormData?.data?.[0]?.form_img
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
          <div className="absolute right-0 w-[30%] h-full hidden lg:block">
            {contactUsDefaultImage.map((img, index) => (
              <LoadImages
                url={`${googleHDViewLink}${img?.id}`}
                alt={`Contact Form Default ${index + 1}`}
                className="h-full object-cover rounded-tr-lg rounded-br-lg object-center"
                key={index}
              />
            ))}
          </div>
          <div className="flex flex-col justify-between">
            <div>
              {contentFormData?.data
                ?.filter((item) => item.form_services === services)
                ?.map((item, index) => (
                  <div className="mb-12" key={index}>
                    <p>{item.form_subtitle}</p>
                    <h3 className="text-[clamp(20px,7vw,30px)] font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-[transparent] group-hover:text-light">
                      {item.form_title}
                    </h3>
                  </div>
                ))}

              {services === "lcss services" &&
                contentFormData?.data
                  ?.filter((item) => item.form_services === "lcss services")
                  ?.map((item, index) => (
                    <ul
                      key={index}
                      className="[&>li]:flex [&>li]:items-center [&>li]:gap-2 [&>li]:mb-4 mb-6 md:mb-12 leading-[1.2] text-sm md:text-sm"
                    >
                      <li className="!items-start">
                        <IoMdPin />
                        <p className="md:w-[50%]">{item.form_address || ""}</p>
                      </li>
                      <li>
                        <FaPhone />
                        <p>{item.form_accounting_no || ""}</p>
                      </li>
                      <li>
                        <MdOutlinePhoneIphone />
                        <p>{item.form_company_no || ""}</p>
                      </li>
                      <li>
                        <MdOutlinePhoneIphone />
                        <p>{item.form_web_no || ""}</p>
                      </li>
                      <li>
                        <div className="text-xs md:text-sm">
                          <div className="mb-4">
                            <h3 className="font-semibold">
                              {item.form_computer_role || ""}
                            </h3>
                            <p>{item.form_computer_name || ""}</p>
                            <p>{item.form_computer_email || ""}</p>
                          </div>
                          <div className="mb-8">
                            <h3 className="font-semibold">
                              {item.form_accounting_role || ""}
                            </h3>
                            <p>{item.form_accounting_name || ""}</p>
                            <p>{item.form_accounting_email || ""}</p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  ))}

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
                        <input
                          type="file"
                          name="client_file"
                          accept="application/pdf"
                          id="myFile"
                          onChange={(e) => handleChangeFiles(e)}
                        />
                      </div>

                      <div className="input-wrapper ">
                        <InputTextArea
                          label="Message"
                          type="text"
                          name="client_message"
                          className="h-[100px]"
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
