import React from "react";
import { FiTag } from "react-icons/fi";
import { IoCalendarClearOutline } from "react-icons/io5";
import Header from "../../../partials/Header";
import Footer from "../../../partials/Footer";

const SinglePage = () => {
  return (
    <>
      <Header />
      <div className="singlePage pb-20 pt-40">
        <div className="customContainer">
          <div className="theTitle">
            <h2 className="text-3xl font-semibold">
              5 Reasons Your Business Needs a Custom Web Application
            </h2>
            <ul>
              <li className="flex items-center gap-2">
                <FiTag />
                <p>Web Development</p>
              </li>
              <li className="flex items-center gap-2">
                <IoCalendarClearOutline />
                <p>July 4, 2024</p>
              </li>
            </ul>
          </div>
          <div className="wrapper"></div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SinglePage;
