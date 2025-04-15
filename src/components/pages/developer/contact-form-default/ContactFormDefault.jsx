import React from "react";
import { IoCloseCircle, IoMailSharp } from "react-icons/io5";
import { devBaseImgUrl, siteKey } from "../../../helpers/functions-general";
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

const ContactFormDefault = ({
  setIsContactDefaultOpen,
  handleUpdateContactFormDefault,
  contactFormDefaultData
}) => {
  const handleClose = () => {
    setIsContactDefaultOpen(false);
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
          className="theModal bg-customGray px-4 md:px-10 lg:my-5 lg:pl-10 py-10 lg:pr-[150px] md:grid md:grid-cols-2 gap-10 rounded-lg relative addShadow max-h-[700px] "
        >
          <button className="closeBtn absolute right-[-14px] top-[-14px] z-[1] cursor-pointer disabled:cursor-not-allowed">
            <IoCloseCircle
              className="text-3xl text-light"
              onClick={handleClose}
            />
          </button>
          <a
            className="absolute cursor-pointer tooltip-btn left-[320px] top-8"
            data-tooltip="Edit contents"
            onClick={handleUpdateContactFormDefault}
          >
            <FaRegImages className=" bg-[#C7AC27] rounded-full  w-[25px] h-[25px] p-[5px] border-[1px] text-black" />
          </a>
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
              <>
                <ul className="[&>li]:flex [&>li]:items-center [&>li]:gap-2 [&>li]:mb-4 mb-6 md:mb-12 leading-[1.2] text-xs md:text-sm">
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
                    <p>marketing@frontlinebusiness.com.ph</p>
                  </li>
                </ul>
              </>

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
              <p className="text-sm">Learn more about our program</p>
              <a
                href="https://drive.google.com/uc?export=download&amp;id=1NP2OjlbB34H1KVXRSnV1i_p9OgbJY-ND"
                className="flex gap-2 items-center font-bold text-primary pointer"
              >
                Download Company Profile <FaFileDownload />
              </a>
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
