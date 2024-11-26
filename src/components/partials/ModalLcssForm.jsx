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
import { IoCloseCircle } from "react-icons/io5";
import { MdOutlinePhoneIphone } from "react-icons/md";

import { Form, Formik } from "formik";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import * as Yup from "yup";
import useUploadFiles from "../custom-hooks/useUploadFiles";
import {
  InputFileUpload,
  InputText,
  InputTextArea,
} from "../helpers/FormInputs";
import { apiVersion, devBaseImgUrl } from "../helpers/functions-general";
import { queryData } from "../helpers/queryData";
import { setMessage, setSuccess, setValidate } from "../store/StoreAction";
import { StoreContext } from "../store/StoreContext";
import ButtonSpinner from "./spinners/ButtonSpinner";

const ModalLcssForm = ({ thePageName, setLcssForm }) => {
  const { store, dispatch } = React.useContext(StoreContext);

  const handleClose = () => {
    setLcssForm(false);
  };
  const { uploadFiles, handleChangeFiles, newfile } = useUploadFiles(
    `${apiVersion}/upload-files`,
    dispatch
  );

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (values) => queryData(`/v1/sending-email`, "post", values),
    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["sending-email"] });
      if (data.success) {
        setLcssForm(false);
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
    client_message_subject: "",
    client_message: "",
    client_file: "",
    notification_purpose: "apply-now-lcs",
    email_subject: `Apply no - ${thePageName} Application`,
  };

  const yupSchema = Yup.object({
    client_name: Yup.string().required("Required"),
    client_email: Yup.string().required("Required"),
    client_phone: Yup.string().required("Required"),
    // client_message_subject: Yup.string().required("Required"),
    client_message: Yup.string().required("Required"),
    client_file: Yup.string().required("Required"),
  });
  return (
    <>
      <div
        onClick={handleClose}
        className="ModalContact fixed w-full px-4 h-screen top-0 bg-dark bg-opacity-70 z-[9999] grid place-items-center backdrop-blur-sm overflow-auto py-6 md:py-0"
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="theModal bg-customGray px-6 lg:pl-10 pt-10 pb-10 lg:pr-[150px] md:grid md:grid-cols-2 gap-10 rounded-lg relative addShadow"
        >
          <button
            className="closeBtn absolute right-[-14px] top-[-14px] z-[1] cursor-pointer disabled:cursor-not-allowed"
            disabled={mutation.isPending}
          >
            <IoCloseCircle
              className="text-3xl text-light"
              onClick={() => {
                setLcssForm(false);
              }}
            />
          </button>
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
              <ul className="[&>li]:flex [&>li]:items-center [&>li]:gap-2 [&>li]:mb-4 mb-6 md:mb-12 leading-[1.2] text-[12px]">
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
              </ul>

              <ul className="[&>li]:flex [&>li]:items-center [&>li]:gap-2 [&>li]:mb-4 mb-6 md:mb-12 leading-[1.2] text-sm">
                <li>
                  <div className="text-xs md:text-sm">
                    <div className="mb-4">
                      <h3 className="font-semibold">Computer-Related Course</h3>
                      <p>Ms. Herlyn Mae Torres</p>
                      <p>herlyn.torres@frontlinebusiness.com.ph</p>
                    </div>
                    <div className="mb-8">
                      <h3 className="font-semibold">
                        Accounting-Related Courses
                      </h3>
                      <p>Ms. Thea Lyzette Consignado</p>
                      <p>thea.consignado@frontlinebusiness.com.ph</p>
                    </div>
                  </div>
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

          <div className="theForm  p-4 addShadow rounded-lg bg-light relative z-[1] w-full xl:w-[428px]">
            <p className="mb-2 text-sm md:text-lg">
              <b className="uppercase">{thePageName}</b> Application
            </p>
            <Formik
              initialValues={initVal}
              validationSchema={yupSchema}
              onSubmit={async (values, { setSubmitting, resetForm }) => {
                // mutate data
                const data = {
                  ...values,
                  client_file: newfile.name,
                };
                if (newfile) {
                  await uploadFiles(); // to save the photo when submit
                }

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
                        <span htmlFor="" className="text-xs">
                          Upload Resume (PDF Only (8mb))
                        </span>
                        <InputFileUpload
                          type="file"
                          name="client_file"
                          accept="application/pdf"
                          id="myFile"
                          disabled={mutation.isPending}
                          onChange={(e) => handleChangeFiles(e)}
                        />
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

export default ModalLcssForm;
