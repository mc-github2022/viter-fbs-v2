import React from "react";
import { AiFillTikTok } from "react-icons/ai";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaPhone,
  FaYoutubeSquare,
} from "react-icons/fa";
import { IoMdPin } from "react-icons/io";
import { IoCloseCircle, IoMailSharp } from "react-icons/io5";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { apiVersion, devBaseImgUrl } from "../../../helpers/functions-general";
import { Form, Formik } from "formik";

import { queryData } from "../../../helpers/queryData";
import {
  setIsAdd,
  setMessage,
  setSuccess,
  setValidate,
} from "../../../store/StoreAction";
import * as Yup from "yup";
import {
  InputFileUpload,
  InputText,
  InputTextArea,
} from "../../../helpers/FormInputs";
import useUploadFiles from "../../../custom-hooks/useUploadFiles";
import { StoreContext } from "../../../store/StoreContext";
import ButtonSpinner from "../../../partials/spinners/ButtonSpinner";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const ModalJobApplication = ({ setModalJob, jobTitle }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const queryClient = useQueryClient();

  const handleClose = () => {
    setModalJob(false);
  };
  const { uploadFiles, handleChangeFiles, newfile } = useUploadFiles(
    `${apiVersion}/upload-files`,
    dispatch
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
        dispatch(setValidate(true));
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
    formTitle: `Job Application: ${jobTitle}`,
  };

  const yupSchema = Yup.object({
    client_name: Yup.string().required("Required"),
    client_email: Yup.string().required("Required"),
    client_phone: Yup.string().required("Required"),
    // client_message_subject: Yup.string().required("Required"),
    client_message: Yup.string().required("Required"),
  });
  return (
    <>
      <div
        onClick={handleClose}
        className="ModalContact fixed w-full h-screen top-0 bg-dark bg-opacity-70 z-[9999] grid place-items-center backdrop-blur-sm overflow-auto py-6 md:py-0"
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="theModal bg-customGray px-10 lg:pl-10 pt-10 pb-10 lg:pr-[150px] md:grid md:grid-cols-2 gap-10 rounded-lg relative addShadow"
        >
          <div className="closeBtn absolute right-[-14px] top-[-14px] z-[1] cursor-pointer ">
            <IoCloseCircle
              className="text-3xl text-light"
              onClick={() => {
                setModalJob(false);
              }}
            />
          </div>
          <div className="absolute right-0 w-[30%] h-full hidden lg:block">
            <img
              src={`${devBaseImgUrl}/lets-talk.jpg`}
              className="h-full object-cover rounded-tr-lg rounded-br-lg object-center"
              alt=""
            />
          </div>
          <div className="flex flex-col justify-between">
            <div>
              <div className="mb-12">
                <p>Discover your potential with us.</p>
                <h3 className="text-[clamp(20px,7vw,30px)] font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-[transparent] group-hover:text-light">
                  Join our Team!
                </h3>
              </div>
              <ul className="[&>li]:flex [&>li]:items-center [&>li]:gap-2 [&>li]:mb-4 mb-6 md:mb-12 leading-[1.2]">
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
                  <IoMailSharp />
                  <p>mktg@frontlinebusiness.com.ph</p>
                </li>
              </ul>
              <div className="mb-4">
                <p>Follow Us:</p>
                <ul className="flex gap-2 text-2xl">
                  <li>
                    <a
                      href="https://www.facebook.com/frontline.business"
                      target="_blank"
                    >
                      <FaFacebookSquare />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/company/frontline-business-solutions-inc"
                      target="_blank"
                    >
                      <FaLinkedin />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/@frontlinebusinesssolutions6578"
                      target="_blank"
                    >
                      <FaYoutubeSquare />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/frontline.business"
                      target="_blank"
                    >
                      <FaInstagramSquare />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.tiktok.com/@frontlinebusinessinc"
                      target="_blank"
                    >
                      <AiFillTikTok />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="theForm  p-4 addShadow rounded-lg bg-light relative z-[1] w-full xl:w-[428px] ">
            <p className="mb-2 text-lg">
              Job Application: <b>{jobTitle}</b>
            </p>
            <Formik
              initialValues={initVal}
              validationSchema={yupSchema}
              onSubmit={async (values, { setSubmitting, resetForm }) => {
                // mutate data
                console.log("values", values, newfile);
                const data = {
                  ...values,
                  client_file: newfile.name,
                };
                if (newfile) {
                  await uploadFiles(); // to save the photo when submit
                }

                console.log("values", data, newfile);
                mutation.mutate(data);
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
                        />
                      </div>
                      <div className="input-wrapper">
                        <InputText
                          label="Mobile Number"
                          type="text"
                          name="client_phone"
                          disabled={mutation.isPending}
                        />
                      </div>

                      <div className="input-wrapper">
                        <span htmlFor="">Upload Resume (Optional)</span>
                        <InputFileUpload
                          type="file"
                          name="client_file"
                          accept="application/pdf"
                          id="myFile"
                          disabled={mutation.isPending}
                          onChange={(e) => handleChangeFiles(e)}
                        />
                        <p className="text-xs italic my-1">PDF Only (8mb)</p>
                      </div>

                      <div className="input-wrapper">
                        <InputTextArea
                          label="Message"
                          type="text"
                          name="client_message"
                          className="h-[200px]"
                          disabled={mutation.isPending}
                        />
                      </div>
                      <div className="modal__action flex justify-end mt-6 gap-2">
                        <button
                          className="btn bg-primary text-light hover:text-light"
                          type="submit"
                          disabled={mutation.isLoading || !props.dirty}
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
