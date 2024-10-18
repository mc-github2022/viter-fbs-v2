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

const ModalContact = ({ setModalContact, setToggleMenu }) => {
  setToggleMenu(false);

  const handleClose = () => {
    setModalContact(false);
    console.log("clicked");
  };

  return (
    <>
      <div
        onClick={handleClose}
        className="ModalContact fixed w-full h-screen bg-dark bg-opacity-90 z-[9999] grid place-items-center backdrop-blur-lg"
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
                <h3 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-[transparent] group-hover:text-light">
                  Let's work together.
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
              <div>
                <p>Follow Us:</p>
                <ul className="flex gap-2 text-2xl">
                  <li>
                    <FaFacebookSquare />
                  </li>
                  <li>
                    <FaLinkedin />
                  </li>
                  <li>
                    <FaYoutubeSquare />
                  </li>
                  <li>
                    <FaInstagramSquare />
                  </li>
                  <li>
                    <AiFillTikTok />
                  </li>
                </ul>
              </div>
            </div>
            <div className="downloadProposal justify-end ">
              <p className="text-sm">Learn more about our program</p>
              <p className="flex gap-2 items-center font-bold text-primary">
                Download Proposal <FaFileDownload />
              </p>
            </div>
          </div>
          <div className="theForm  p-4 addShadow rounded-lg bg-light relative z-[1] ">
            <div className="inputGroup mb-4">
              <label htmlFor="">Name</label> <br />
              <input type="text" name="" id="" className="w-full" />
            </div>
            <div className="inputGroup mb-4">
              <label htmlFor="">Email</label> <br />
              <input type="text" name="" id="" className="w-full" />
            </div>
            <div className="inputGroup mb-4">
              <label htmlFor="">Subject</label> <br />
              <input type="text" name="" id="" className="w-full" />
            </div>
            <div className="inputGroup mb-4">
              <label htmlFor="">Mobile Number</label> <br />
              <input type="text" name="" id="" className="w-full" />
            </div>
            <div className="inputGroup mb-2">
              <label htmlFor="">Message</label> <br />
              <textarea name="" id=""></textarea>
            </div>
            <div className="inputGroup mb-2">
              <input
                type="submit"
                value="Send Message"
                className="btn bg-primary text-light cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalContact;
