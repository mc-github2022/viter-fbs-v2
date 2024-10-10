import React from "react";
import { AiFillTikTok } from "react-icons/ai";
import {
  FaFacebookSquare,
  FaFileDownload,
  FaInstagramSquare,
  FaLinkedin,
  FaPhone,
  FaYoutubeSquare,
} from "react-icons/fa";
import { IoMdPin } from "react-icons/io";
import { IoCloseCircle, IoMailSharp } from "react-icons/io5";
import { MdOutlinePhoneIphone } from "react-icons/md";

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
              src="../../public/img/lets-talk.jpg"
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
          </div>
          <div className="theForm  p-4 addShadow rounded-lg bg-light relative z-[1] ">
            <p className="mb-2">Job Application: {jobTitle}</p>
            <div className="inputGroup mb-4">
              <label htmlFor="">Full Name</label> <br />
              <input type="text" name="" id="" className="w-full" />
            </div>
            <div className="inputGroup mb-4">
              <label htmlFor="">Email</label> <br />
              <input type="text" name="" id="" className="w-full" />
            </div>
            <div className="inputGroup mb-4">
              <label htmlFor="">Mobile Number</label> <br />
              <input type="text" name="" id="" className="w-full" />
            </div>
            <div className="inputGroup mb-4">
              <label htmlFor="">Resume</label> <br />
              <input type="file" name="" id="" className="w-full" />
            </div>
            <div className="inputGroup mb-2">
              <label htmlFor="">Message</label> <br />
              <textarea name="" id=""></textarea>
            </div>
            <div className="inputGroup mb-2">
              <input
                type="submit"
                value="Submit"
                className="btn bg-primary text-light cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalJobApplication;
