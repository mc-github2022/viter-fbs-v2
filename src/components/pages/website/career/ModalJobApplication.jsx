import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import React from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { AiFillTikTok } from "react-icons/ai";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaPhone,
  FaYoutubeSquare,
} from "react-icons/fa";
import { IoMdPin } from "react-icons/io";
import { IoCloseCircle } from "react-icons/io5";
import { MdOutlinePhoneIphone } from "react-icons/md";
import * as Yup from "yup";
import useUploadFiles from "../../../custom-hooks/useUploadFiles";
import {
  InputFileUpload,
  InputText,
  InputTextArea,
} from "../../../helpers/FormInputs";
import {
  apiVersion,
  devBaseImgUrl,
  getConvertStringToJSONparseData,
  googleHDViewLink,
  siteKey,
} from "../../../helpers/functions-general";
import { queryData } from "../../../helpers/queryData";
import ButtonSpinner from "../../../partials/spinners/ButtonSpinner";
import { setError, setMessage, setSuccess } from "../../../store/StoreAction";
import { StoreContext } from "../../../store/StoreContext";
import useQueryData from "../../../custom-hooks/useQueryData";
import LoadImages from "../../../partials/LoadImages";

const ModalJobApplication = ({ setModalJob, jobTitle, modalJob }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const queryClient = useQueryClient();
  const recaptchaRef = React.useRef();

  const handleClose = () => {
    setModalJob(false);
  };
  const { uploadFiles, handleChangeFiles, newfile } = useUploadFiles(
    `${apiVersion}/upload-files`,
    dispatch
  );

  const { data: contactFormDefaultData } = useQueryData(
    `${apiVersion}/contactDefault`, // endpoint
    "get", // method
    "contactDefault", // key
    {},
    null,
    true
  );

  const { data: contactFormCareersData } = useQueryData(
    `${apiVersion}/contactCareers`, // endpoint
    "get", // method
    "contactCareers", // key
    {},
    null,
    true
  );

  const contactUsDefaultImage = getConvertStringToJSONparseData(
    contactFormDefaultData?.data?.[0]?.form_default_img
  );

  const mutation = useMutation({
    mutationFn: (values) => queryData(`/v1/sending-email`, "post", values),
    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["sending-email"] });
      if (data.success) {
        setModalJob(false);
        dispatch(setSuccess(true));
        dispatch(setMessage(`Message Sent Successfully!`));
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
    client_message: "",
    client_file: "",
    client_message_subject: "",
    notification_purpose: "apply-now-careers",
    email_subject: `APPLY NOW - ${jobTitle}`,
  };

  const yupSchema = Yup.object({
    client_name: Yup.string().required("Required"),
    client_email: Yup.string().required("Required").email("Invalid email"),
    client_phone: Yup.string().required("Required"),
    // client_message_subject: Yup.string().required("Required"),
    client_message: Yup.string().required("Required"),
    // client_file: Yup.string().required("Required"),
  });

  const handleChange = (value) => {
    console.log(value);
    // setCaptcha(value);
  };

  return (
    <>
      <div
        onClick={handleClose}
        className="ModalContact fixed px-4 w-full h-screen top-0 bg-dark bg-opacity-70 z-[9999] sm:grid sm:place-items-center backdrop-blur-sm overflow-auto py-6 md:py-0"
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="theModal bg-customGray px-4 lg:my-5 lg:pl-10 pt-10 pb-10 lg:pr-[150px] md:grid md:grid-cols-2 gap-10 rounded-lg relative addShadow"
        >
          <button
            className="closeBtn absolute right-[-14px] top-[-14px] z-[1] cursor-pointer disabled:cursor-not-allowed"
            disabled={mutation.isPending}
          >
            <IoCloseCircle
              className="text-3xl text-light"
              onClick={() => {
                setModalJob(false);
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
              <div className="mb-12">
                <p>
                  {contactFormCareersData?.data?.[0]?.form_careers_subtitle ||
                    ""}
                </p>
                <h3 className="text-[clamp(20px,7vw,30px)] font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-[transparent] group-hover:text-light">
                  {contactFormCareersData?.data?.[0]?.form_careers_title || ""}
                </h3>
              </div>
              <ul className=" text-sm [&>li]:flex [&>li]:items-center [&>li]:gap-2 [&>li]:mb-4 mb-6 md:mb-12 leading-[1.2]">
                <li className="!items-start">
                  <IoMdPin />
                  <p className="md:w-[50%]">
                    {contactFormDefaultData?.data?.[0]?.form_default_address ||
                      ""}
                  </p>
                </li>
                <li>
                  <FaPhone />
                  <p>
                    {contactFormCareersData?.data?.[0]
                      ?.form_careers_telephone || ""}
                  </p>
                </li>
                <li>
                  <MdOutlinePhoneIphone />
                  <p>
                    {contactFormCareersData?.data?.[0]?.form_careers_phone ||
                      ""}
                  </p>
                </li>
                <li>
                  <div className="text-xs md:text-sm  ">
                    <div className="mb-4">
                      <h3 className="font-semibold">
                        {contactFormCareersData?.data?.[0]
                          ?.form_careers_position_a || ""}
                      </h3>
                      <p>
                        {contactFormCareersData?.data?.[0]
                          ?.form_careers_name_a || ""}
                      </p>
                      <p className="">
                        {contactFormCareersData?.data?.[0]
                          ?.form_careers_email_a || ""}
                      </p>
                    </div>
                    <div className="mb-8">
                      <h3 className="font-semibold">
                        {contactFormCareersData?.data?.[0]
                          ?.form_careers_position_b || ""}
                      </h3>
                      <p>
                        {contactFormCareersData?.data?.[0]
                          ?.form_careers_name_b || ""}
                      </p>
                      <p className="">
                        {contactFormCareersData?.data?.[0]
                          ?.form_careers_email_b || ""}
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

          <div className="theForm  p-4 addShadow rounded-lg bg-light relative z-[1] w-full xl:w-[428px] ">
            {jobTitle === "insight" ? (
              ""
            ) : (
              <p className="mb-2 text-sm md:text-lg">
                Job Application: <b>{jobTitle}</b>
              </p>
            )}
            <Formik
              initialValues={initVal}
              validationSchema={yupSchema}
              onSubmit={async (values, { setSubmitting, resetForm }) => {
                const captchaValue = recaptchaRef.current.getValue();
                if (captchaValue === "") {
                  dispatch(setError(true));
                  dispatch(
                    setMessage(
                      "Please verify that you are not a robot by completing the reCAPTCHA below."
                    )
                  );
                  return;
                }

                recaptchaRef.current?.reset();

                // mutate data
                const data = {
                  ...values,
                  client_file: newfile.name,
                };
                if (newfile) {
                  await uploadFiles(); // to save the photo when submit
                }

                mutation.mutate({ ...data, captchaValue });
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
                          label="Mobile Number"
                          type="text"
                          number="number"
                          name="client_phone"
                          disabled={mutation.isPending}
                        />
                      </div>

                      <div className="input-wrapper">
                        <span htmlFor="" className="text-xs">
                          Upload Resume (PDF Only (8mb)){" "}
                        </span>
                        <input
                          type="file"
                          name="client_file"
                          accept="application/pdf"
                          id="myFile"
                          disabled={mutation.isPending}
                          onChange={(e) => handleChangeFiles(e)}
                        />
                      </div>

                      <div className="input-wrapper ">
                        <InputTextArea
                          label="Message"
                          type="text"
                          name="client_message"
                          className="h-[140px]"
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

export default ModalJobApplication;
