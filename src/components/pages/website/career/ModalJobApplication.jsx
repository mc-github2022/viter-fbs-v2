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
import { devBaseImgUrl } from "../../../helpers/functions-general";

const ModalJobApplication = ({ setModalJob, jobTitle }) => {
  const handleClose = () => {
    setModalJob(false);
  };

  return (
    <>
      <div
        onClick={handleClose}
        className="ModalContact fixed w-full top-0 h-screen bg-dark bg-opacity-90 z-[9999] grid place-items-center backdrop-blur-lg"
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="theModal bg-customGray pl-10 pt-10 pb-10 pr-[150px] grid grid-cols-2 gap-10 rounded-lg relative addShadow"
        >
          <div className="closeBtn absolute right-[-14px] top-[-14px] z-[1] cursor-pointer ">
            <IoCloseCircle
              className="text-3xl text-light"
              onClick={() => {
                setModalJob(false);
              }}
            />
          </div>
          <div className="absolute right-0 w-[30%] h-full ">
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
                <h3 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-[transparent] group-hover:text-light">
                  Join our Team!
                </h3>
              </div>
              <ul className="[&>li]:flex [&>li]:items-center [&>li]:gap-2 [&>li]:mb-4 mb-12 leading-[1.2]">
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
          <div className="theForm  p-4 addShadow rounded-lg bg-light relative z-[1] ">
            <p className="mb-2 text-lg">
              Job Application: <b>{jobTitle}</b>
            </p>
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
                value="Submit"
                className="btn bg-primary text-light cursor-pointer py-2 h-[50px]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalJobApplication;
