import { Form, Formik } from "formik";
import { default as React } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { AiFillTikTok } from "react-icons/ai";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaPhone,
  FaRegImages,
  FaYoutubeSquare,
} from "react-icons/fa";
import { IoMdPin } from "react-icons/io";
import { IoCloseCircle } from "react-icons/io5";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { InputText, InputTextArea } from "../../../../helpers/FormInputs";
import {
  getConvertStringToJSONparseData,
  googleHDViewLink,
  siteKey,
} from "../../../../helpers/functions-general";
import LoadImages from "../../../../partials/LoadImages";

const FormTable = ({ contactFormData, handleUpdateContactForm }) => {
  const [html, setHtml] = React.useState("");

  const contactUsDefaultImage = getConvertStringToJSONparseData(
    contactFormData?.data?.[0]?.form_img
  );

  React.useEffect(() => {
    if (contactFormData?.data.length > 0) {
      setHtml(contactFormData?.data[0].form_contacts);
    }
  }, [contactFormData]);

  return (
    <>
      <div className="ModalContact h-screen px-4  sm:grid sm:place-items-center backdrop-blur-sm overflow-auto py-6 md:py-0 ">
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="theModal bg-customGray px-4 md:px-10 lg:pl-10 py-10 lg:pr-[150px] md:grid md:grid-cols-2 gap-10 rounded-lg relative addShadow max-h-[700px] "
        >
          <button className="closeBtn absolute right-[-14px] top-[-14px] z-[1] cursor-pointer disabled:cursor-not-allowed">
            <IoCloseCircle className="text-3xl text-light" />
          </button>

          <a
            className="absolute cursor-pointer tooltip-btn left-[380px] top-8"
            data-tooltip="Edit contents"
            onClick={handleUpdateContactForm}
          >
            <FaRegImages className="bg-[#C7AC27] rounded-full w-[25px] h-[25px] p-[5px] border-[1px] text-black" />
          </a>

          <div className="absolute right-0 w-[30%] h-full hidden lg:block">
            {contactFormData?.data?.length > 0 &&
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
            <div className="my-16 flex flex-col gap-2 text-sm">
              <div className="flex gap-2">
                <IoMdPin />
                <p className="md:w-[50%]">
                  {contactFormData?.data?.[0]?.form_address || "Address"}
                </p>
              </div>
              <div dangerouslySetInnerHTML={{ __html: html }}></div>
            </div>

            <div className="mb-4">
              <p>Follow Us:</p>
              {contactFormData?.data?.length > 0 &&
                (() => {
                  const item = contactFormData.data[0];

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
                          className="h-[100px]"
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

export default FormTable;
