import React from "react";
import { AiFillTikTok } from "react-icons/ai";
import { CiMail } from "react-icons/ci";
import {
  FaFacebookSquare,
  FaFileDownload,
  FaInstagramSquare,
  FaLinkedin,
  FaPhone,
  FaYoutubeSquare,
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { IoMdPin } from "react-icons/io";
import {
  IoCloseCircle,
  IoCloseCircleOutline,
  IoMailSharp,
} from "react-icons/io5";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { devBaseImgUrl } from "../helpers/functions-general";
import { Form, Formik } from "formik";
import ButtonSpinner from "./spinners/ButtonSpinner";
import { InputText, InputTextArea } from "../helpers/FormInputs";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import * as Yup from "yup";
import { queryData } from "../helpers/queryData";
import {
  setIsAdd,
  setMessage,
  setSuccess,
  setValidate,
} from "../store/StoreAction";
import { StoreContext } from "../store/StoreContext";

const ModalContact = ({
  setModalContact = null,
  setToggleMenu = null,
  thePageName = null,
  setContactForm = null,
  contactForm = null,
  contactSubject = "",
}) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const queryClient = useQueryClient();

  const handleClose = () => {
    setModalContact(false);
    setContactForm(false);
  };

  const btnClose = () => {
    setModalContact(false);
    setContactForm(false);
  };

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
    formTitle: `${thePageName} ${contactSubject}`,
    client_file: "",
  };

  const yupSchema = Yup.object({
    client_name: Yup.string().required("Required"),
    client_email: Yup.string().required("Required"),
    client_phone: Yup.string().required("Required"),
    client_message_subject: Yup.string().required("Required"),
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
          className="theModal bg-customGray px-8 md:px-10  lg:pl-10 pt-10 pb-10 lg:pr-[150px] md:grid md:grid-cols-2 gap-10 rounded-lg relative addShadow"
        >
          <div className="closeBtn absolute right-[-14px] top-[-14px] z-[1] cursor-pointer ">
            <IoCloseCircle
              className="text-3xl text-light"
              onClick={() => {
                btnClose();
              }}
            />
          </div>
          <div className="absolute right-0 w-[30%] h-full hidden lg:block">
            <img
              src={`${devBaseImgUrl}/lets-talk.jpg`}
              className="h-full object-cover rounded-tr-lg rounded-br-lg object-center"
              alt="Frontline Business Solutions Contact Form"
            />
          </div>
          <div className="flex flex-col justify-between">
            <div>
              <div className="mb-12">
                <p>How can we help you?</p>
                <h3 className="text-[clamp(20px,7vw,30px)] font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-[transparent] group-hover:text-light">
                  Let's work together.
                </h3>
              </div>

              {thePageName === "lcss" ||
              thePageName === "conStud" ||
              thePageName === "immersion" ? (
                <>
                  <ul className="[&>li]:flex [&>li]:items-center [&>li]:gap-2 [&>li]:mb-4 mb-6 md:mb-12 leading-[1.2] text-sm">
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
                            Computer-Related Course
                          </h3>
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
                </>
              ) : (
                <>
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
                      <IoMailSharp />
                      <p>mktg@frontlinebusiness.com.ph</p>
                    </li>
                  </ul>
                </>
              )}

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
            <div className="downloadProposal justify-end py-5 md:py-0">
              {thePageName === "lcss" ? (
                <>
                  <p className="text-sm">Learn more about our OJT program</p>
                  <a
                    href="https://drive.google.com/uc?export=download&amp;id=1kSl-0-BtMdzMtsTdPw-N2SqI6jlDUJOE"
                    className="flex gap-2 items-center font-bold text-primary pointer"
                  >
                    Download Proposal <FaFileDownload />
                  </a>
                </>
              ) : thePageName === "immersion" ? (
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
              ) : thePageName === "conStud" ? (
                <></>
              ) : thePageName === "cms" ? (
                <>
                  <p className="text-sm">Learn more about our CMS program</p>
                  <a
                    href="https://drive.google.com/uc?export=download&amp;id=1KCT6R_LE1PCl_RrCaCQRZYLLNixF73cU"
                    className="flex gap-2 items-center font-bold text-primary pointer"
                  >
                    Download Portfolio <FaFileDownload />
                  </a>
                </>
              ) : (
                <>
                  <p className="text-sm">Learn more about our program</p>
                  <a
                    href="https://drive.google.com/uc?export=download&amp;id=1NP2OjlbB34H1KVXRSnV1i_p9OgbJY-ND"
                    className="flex gap-2 items-center font-bold text-primary pointer"
                  >
                    Download Company Profile <FaFileDownload />
                  </a>
                </>
              )}
            </div>
          </div>
          {/* <div className="theForm  p-4 addShadow rounded-lg bg-light relative z-[1] md:w-[428px] ">
            {contactSubject ? (
              <p className="mb-2 text-lg uppercase">
                {thePageName} : <b>{contactSubject}</b>
              </p>
            ) : (
              <></>
            )}
            <div className="inputGroup mb-4">
              <span htmlFor="">Name</span> <br />
              <input type="text" name="" id="" className="w-full" />
            </div>
            <div className="inputGroup mb-4">
              <span htmlFor="">Email</span> <br />
              <input type="text" name="" id="" className="w-full" />
            </div>
            <div className="inputGroup mb-4">
              <span htmlFor="">Subject</span> <br />
              <input type="text" name="" id="" className="w-full" />
            </div>
            <div className="inputGroup mb-4">
              <span htmlFor="">Mobile Number</span> <br />
              <input type="text" name="" id="" className="w-full" />
            </div>
            <div className="inputGroup mb-2">
              <span htmlFor="">Message</span> <br />
              <textarea name="" id="" className="resize-none"></textarea>
            </div>
            <div className="inputGroup mb-2">
              <input
                type="submit"
                value="Send Message"
                className="btn bg-primary text-light cursor-pointer py-2 h-[50px]"
              />
            </div>
          </div> */}
          <div className="theForm  p-4 addShadow rounded-lg bg-light relative z-[1] w-full xl:w-[428px] ">
            {/* <div
              className={`${
                thePageName === "lcss" ||
                thePageName === "conStud" ||
                thePageName === "immersion"
                  ? "block"
                  : "invisible"
              }`}
            > */}
            {contactSubject ? (
              <p className="mb-2 text-lg uppercase">
                {thePageName} : <b>{contactSubject}</b>
              </p>
            ) : (
              <></>
            )}
            {/* </div> */}

            <Formik
              initialValues={initVal}
              validationSchema={yupSchema}
              onSubmit={async (values, { setSubmitting, resetForm }) => {
                // mutate data
                console.log("values", values);
                mutation.mutate(values);
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
                          label="Phone"
                          type="text"
                          name="client_phone"
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

export default ModalContact;
