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

const ModalContact = ({
  setModalContact,
  setToggleMenu = null,
  thePageName,
}) => {
  const handleClose = () => {
    setModalContact(false);
    console.log("clicked");
  };

  return (
    <>
      <div
        onClick={handleClose}
        className="ModalContact fixed w-full h-screen bg-dark bg-opacity-90 z-[9999] grid place-items-center backdrop-blur-lg overflow-auto py-6 md:py-0"
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
                setModalContact(false);
              }}
            />
          </div>
          <div className="absolute right-0 w-[30%] h-full hidden lg:block">
            <img
              src="../../public/img/lets-talk.jpg"
              className="h-full object-cover rounded-tr-lg rounded-br-lg object-center"
              alt=""
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
                      <div>
                        <div className="mb-4">
                          <h3 className="font-semibold">
                            Computer-Related Course
                          </h3>
                          <p>Ms. Herlyn Mae Torres</p>
                          <p>Herlyn.torres@frontlinebusiness.com.ph</p>
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
          <div className="theForm  p-4 addShadow rounded-lg bg-light relative z-[1] ">
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
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalContact;
