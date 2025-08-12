import { useMutation, useQueryClient } from "@tanstack/react-query";
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
import * as Yup from "yup";
import { InputText, InputTextArea } from "../helpers/FormInputs";
import {
  apiVersion,
  devBaseImgUrl,
  getConvertStringToJSONparseData,
  googleHDViewLink,
  googleViewLink,
  siteKey,
} from "../helpers/functions-general";
import { queryData } from "../helpers/queryData";
import { setError, setMessage, setSuccess } from "../store/StoreAction";
import { StoreContext } from "../store/StoreContext";
import ButtonSpinner from "./spinners/ButtonSpinner";
import useQueryData from "../custom-hooks/useQueryData";
import LoadImages from "./LoadImages";

const ModalContact = ({
  setModalContact = null,
  setToggleMenu = null,
  thePageName = null,
  setContactForm = null,
  contactForm = null,
  contactSubject = "",
  notification_purpose = "default-receiver",
  emailSubject = "",
  services = null,
  page = null,
}) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const recaptchaRef = React.useRef();

  console.log("services title: ", services);
  const handleClose = () => {
    setModalContact(false);
    setContactForm(false);
  };

  const btnClose = () => {
    setModalContact(false);
    setContactForm(false);
  };

  const { data: contentFormData } = useQueryData(
    `${apiVersion}/contactForm`, // endpoint
    "get", // method
    "contactForm", // key
    {},
    null,
    true
  );


  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (values) => queryData(`/v1/sending-email`, "post", values),
    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["sending-email"] });
      if (data.success) {
        setModalContact(false);
        setContactForm(false);
        dispatch(setSuccess(true));
        dispatch(setMessage(`Message Sent Success`));
      }
      // show error box
      if (!data.success) {
        dispatch(setError(true));
        dispatch(setMessage(data.error));
      }
    },
  });

  const initVal = {
    client_name: "",
    client_email: "",
    client_phone: "",
    client_message_subject: "",
    client_message: "",
    client_file: "",
    notification_purpose,
    email_subject: emailSubject,
  };

  const yupSchema = Yup.object({
    client_name: Yup.string().required("Required"),
    client_email: Yup.string().required("Required").email("Invalid email"),
    client_phone: Yup.string().required("Required"),
    client_message_subject: Yup.string().required("Required"),
    client_message: Yup.string().required("Required"),
  });

  const handleChange = (value) => {
    console.log(value);
    // setCaptcha(value);
  };

  return (
    <>
      <div
        onClick={handleClose}
        className="ModalContact fixed w-full h-screen px-4 top-0 bg-dark bg-opacity-70 z-[9999] sm:grid sm:place-items-center backdrop-blur-sm overflow-auto py-6 md:py-0"
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="theModal bg-customGray px-4 md:px-10 lg:my-5 lg:pl-10 py-10 lg:pr-[150px] md:grid md:grid-cols-2 gap-10 rounded-lg relative addShadow h-fit "
        >
          <button
            className="closeBtn absolute right-[-14px] top-[-14px] z-[1] cursor-pointer disabled:cursor-not-allowed"
            disabled={mutation.isPending}
          >
            <IoCloseCircle
              className="text-3xl text-light"
              onClick={() => {
                btnClose();
              }}
            />
          </button>
          <div className="absolute right-0 w-[30%] h-full hidden lg:block">
            {contentFormData?.data
              ?.filter((item) => item.form_services === services)
              ?.map((item, index) => {
                const image = getConvertStringToJSONparseData(item?.form_img);

                return (
                  <React.Fragment key={index}>
                    {contentFormData?.data?.length > 0 && image?.length > 0 ? (
                      <>
                        {image.map((img, imgIndex) => (
                          <LoadImages
                            url={`${googleHDViewLink}${img?.id}`}
                            alt={`${item.form_name} ${imgIndex + 1}`}
                            className="h-full object-cover rounded-tr-lg rounded-br-lg object-center"
                            key={imgIndex}
                          />
                        ))}
                      </>
                    ) : (
                      <div className="w-full h-full object-cover object-top place-content-center place-items-center bg-gray-300">
                        <FaRegImages className="text-[200px] text-gray-400" />
                      </div>
                    )}
                  </React.Fragment>
                );
              })}
          </div>
          <div className="flex flex-col justify-between">
            <div>
              {/* {console.log(contentFormData?.data?.form_services === services)} */}

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

              {/* LCSS SERVICES */}
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

              {/* CAREER */}
              {services === "career" &&
                contentFormData?.data
                  ?.filter((item) => item.form_services === "career")
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
                              {item.form_hr_manager_role || ""}
                            </h3>
                            <p>{item.form_hr_manager_name || ""}</p>
                            <p>{item.form_hr_manager_email || ""}</p>
                          </div>
                          <div className="mb-8">
                            <h3 className="font-semibold">
                              {item.form_hr_staff_role || ""}
                            </h3>
                            <p>{item.form_hr_staff_name || ""}</p>
                            <p>{item.form_hr_staff_email || ""}</p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  ))}

              {/* WEB SERVICES */}
              {services === "web services" &&
                contentFormData?.data
                  ?.filter((item) => item.form_services === "web services")
                  ?.map((item, index) => (
                    <React.Fragment key={index}>
                      <ul className="[&>li]:flex [&>li]:items-center [&>li]:gap-2 [&>li]:mb-4 mb-6 md:mb-12 leading-[1.2] text-sm">
                        <li className="!items-start">
                          <IoMdPin />
                          <p className="md:w-[50%]">
                            {item.form_address || ""}
                          </p>
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
                      </ul>
                      <ul className="[&>li]:flex [&>li]:items-center [&>li]:gap-2 [&>li]:mb-4 mb-6 md:mb-12 leading-[1.2] text-sm">
                        <li>
                          <div className="text-xs md:text-sm">
                            <div className="mb-4">
                              <h3 className="font-semibold">
                                {item.form_web_role || ""}
                              </h3>
                              <p>{item.form_web_name || ""}</p>
                              <p>{item.form_web_email || ""}</p>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </React.Fragment>
                  ))}

              {/* DEFAULT */}
              {services !== "lcss services" &&
                services !== "career" &&
                services !== "web services" &&
                contentFormData?.data
                  ?.filter((item) => item.form_services === "default")
                  ?.map((item, index) => (
                    <ul
                      key={index}
                      className="[&>li]:flex [&>li]:items-center [&>li]:gap-2 [&>li]:mb-4 mb-6 md:mb-12 leading-[1.2] text-xs md:text-sm"
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
                        <IoMailSharp />
                        <p>{item.form_default_email || ""}</p>
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

            <div className="downloadProposal justify-end py-5 md:py-0">
              {/* COLLEGE OJT */}
              {page === "College On-The-Job Training" &&
                (() => {
                  // Find the content item that matches the current page + service
                  const contentItem = contentFormData?.data?.find(
                    (item) => item.form_services === services
                  );
                  const ojtProposal = getConvertStringToJSONparseData(
                    contentItem?.form_ojt_proposal
                  );
                  return (
                    <>
                      <p className="text-sm">
                        Learn more about our OJT program
                      </p>
                      {ojtProposal?.map((file, index) => (
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
                  );
                })()}

              {/* WORK IMMERSION */}
              {page === "High School Work Immersion" &&
                (() => {
                  const contentItem = contentFormData?.data?.find(
                    (item) => item.form_services === services
                  );

                  const workImmersion = getConvertStringToJSONparseData(
                    contentItem?.form_work_immersion
                  );
                  return (
                    <>
                      <p className="text-sm">
                        Learn more about our immersion program
                      </p>
                      {workImmersion?.map((file, index) => (
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
                  );
                })()}

              {/* CONTINUING STUDY */}
              {page === "Continuing Study" && <></>}

              {/* SINGLE PAGE */}
              {page === "Single Page Website" && <></>}

              {/* WORDPRESS */}
              {page === "WordPress CMS Website" &&
                (() => {
                  const contentItem = contentFormData?.data?.find(
                    (item) => item.form_services === services
                  );

                  const webDesign = getConvertStringToJSONparseData(
                    contentItem?.form_website_design
                  );

                  return (
                    <>
                      <p className="text-sm">
                        Learn more about our WordPress CMS Website program
                      </p>
                      {webDesign?.map((file, index) => (
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
                  );
                })()}

              {/* WEB DESIGN */}
              {page === "Web Design" &&
                (() => {
                  const contentItem = contentFormData?.data?.find(
                    (item) => item.form_services === services
                  );

                  const webDesign = getConvertStringToJSONparseData(
                    contentItem?.form_website_design
                  );

                  return (
                    <>
                      <p className="text-sm">
                        Learn more about our Web Design program
                      </p>
                      {webDesign?.map((file, index) => (
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
                  );
                })()}

              {/* GRAPHIC DESIGN */}
              {page === "Graphic Design" &&
                (() => {
                  const contentItem = contentFormData?.data?.find(
                    (item) => item.form_services === services
                  );

                  const graphicDesign = getConvertStringToJSONparseData(
                    contentItem?.form_graphic_design
                  );

                  return (
                    <>
                      <p className="text-sm">
                        Learn more about our Graphic Design program
                      </p>
                      {graphicDesign?.map((file, index) => (
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
                  );
                })()}

              {/* DEFAULT */}
              {page !== "College On-The-Job Training" &&
                page !== "High School Work Immersion" &&
                page !== "Continuing Study" &&
                page !== "WordPress CMS Website" &&
                page !== "Single Page Website" &&
                page !== "Web Design" &&
                page !== "Graphic Design" &&
                page !== "Career" &&
                (() => {
                  const contentItem = contentFormData?.data?.find(
                    (item) => item.form_services === services
                  );

                  const fbsBrochure = getConvertStringToJSONparseData(
                    contentItem?.form_fbs_brochure
                  );

                  return (
                    <>
                      <p className="text-sm">Learn more about our program</p>
                      {fbsBrochure?.map((file, index) => (
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
                  );
                })()}
            </div>
          </div>

          <div className="theForm  p-4 addShadow rounded-lg bg-light relative z-[1] w-full xl:w-[428px] ">
            {contactSubject ? (
              <p className="mb-2 text-sm md:text-lg uppercase">
                {thePageName} : <b>{contactSubject}</b>
              </p>
            ) : (
              <></>
            )}

            <Formik
              initialValues={initVal}
              validationSchema={yupSchema}
              onSubmit={async (values, { setSubmitting, resetForm }) => {
                const captchaValue = recaptchaRef.current.getValue();

                console.log(captchaValue);
                if (captchaValue === "") {
                  dispatch(setError(true));
                  dispatch(
                    setMessage(
                      "Please verify that you are not a robot by completing the reCAPTCHA below."
                    )
                  );
                  return;
                }

                // mutate data
                mutation.mutate({ ...values, captchaValue });
                recaptchaRef.current?.reset();

                // mutate data
                // console.log("values", { ...values, captchaValue });
                // mutation.mutate(values);
              }}
            >
              {(props) => {
                return (
                  <Form>
                    <div className="modal__body">
                      <div className="input-wrapper">
                        <InputText
                          label="Name"
                          type="text"
                          name="client_name"
                          disabled={mutation.isPending}
                        />
                      </div>
                      <div className="input-wrapper">
                        <InputText
                          label="Email"
                          type="email"
                          name="client_email"
                          disabled={mutation.isPending}
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
                          disabled={mutation.isPending}
                        />
                      </div>
                      <div className="input-wrapper">
                        <InputText
                          label="Subject"
                          type="text"
                          name="client_message_subject"
                          disabled={mutation.isPending}
                        />
                      </div>
                      <div className="input-wrapper ">
                        <InputTextArea
                          label="Message"
                          type="text"
                          name="client_message"
                          className="h-[200px]"
                          disabled={mutation.isPending}
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
                          disabled={mutation.isPending || !props.dirty}
                        >
                          {mutation.isPending ? (
                            <div className="flex items-center gap-2">
                              <ButtonSpinner /> Send Message
                            </div>
                          ) : (
                            "Send Message"
                          )}
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

export default ModalContact;
