import React from "react";
import { FiTag } from "react-icons/fi";
import { IoCalendarClearOutline } from "react-icons/io5";
import Header from "../../../partials/Header";
import Footer from "../../../partials/Footer";

const EventsAndAct = () => {
  return (
    <>
      <Header />
      <div className="EventsAndAct pb-20 pt-40">
        <div className="customContainer">
          <div className="theTitle mb-20">
            <p>Through our</p>
            <h2 className="text-3xl font-semibold text-primary">
              events and activities
            </h2>
            <p>
              we engage, inspire and empower our patners, clients, and team
              members.
            </p>
          </div>
          <div className="wrapper">
            <div className="grid grid-rows-2 grid-cols-3 grid-flow-col gap-4 order-2 mb-12 lg:mb-0">
              <div className="blogItem md:row-span-2  md:col-span-2 bg-[url('../../public/img/webdevv.jpg')] h-[550px] bg-center bg-cover flex items-end relative  rounded-none md:rounded-xl grayscale hover:grayscale-0 transition-all group cursor-pointer">
                <div>
                  <div className="blogTitle relative z-[1]">
                    <h4 className="bg-[#cccccc] group-hover:bg-primary group-hover:text-light p-2 px-10 w-[250px] rounded-tr-full rounded-br-full text-dark grayscale-0 transition-all">
                      Activities
                    </h4>
                  </div>
                  <div className="blogExcerpt p-10 relative z-[1]">
                    <p className="text-light font-bold text-lg">
                      5 Reasons Your Business Needs a Custom Web Application
                    </p>
                  </div>
                </div>
                <div className="bottomGradient bg-gradient-to-t from-dark to-blue-500 h-[200px] w-full absolute bottom-0 block md:rounded-bl-xl md:rounded-br-xl"></div>
              </div>
              <div className="blogItem  mx-10 md:mx-0 bg-[url('../../public/img/vablog.jpg')] bg-center bg-cover  flex items-end relative  rounded-xl grayscale hover:grayscale-0 transition-all group cursor-pointer">
                <div>
                  <div className="blogTitle relative z-[1]">
                    <h4 className="bg-[#cccccc] group-hover:bg-primary group-hover:text-light p-2 px-10 w-[250px] rounded-tr-full rounded-br-full text-dark grayscale-0 transition-all">
                      Events
                    </h4>
                  </div>
                  <div className="blogExcerpt p-10 relative z-[1]">
                    <p className="text-light font-bold text-lg">
                      How Virtual Assistants Can Boost You Productivity
                    </p>
                  </div>
                </div>
                <div className="bottomGradient bg-gradient-to-t from-dark to-blue-500 h-[200px] w-full absolute bottom-0 block rounded-bl-xl rounded-br-xl"></div>
              </div>
              <div className="blogItem  mx-10 md:mx-0 bg-[url('../../public/img/skilldev.jpg')] bg-center bg-cover  flex items-end relative  rounded-xl grayscale hover:grayscale-0 transition-all group cursor-pointer">
                <div>
                  <div className="blogTitle relative z-[1]">
                    <h4 className="bg-[#cccccc] group-hover:bg-primary group-hover:text-light p-2 px-10 w-[250px] rounded-tr-full rounded-br-full text-dark grayscale-0 transition-all">
                      Activities
                    </h4>
                  </div>
                  <div className="blogExcerpt p-10 relative z-[1]">
                    <p className="text-light font-bold text-lg">
                      Skills Requirement for Fresh Graduates
                    </p>
                  </div>
                </div>
                <div className="bottomGradient bg-gradient-to-t from-dark to-blue-500 h-[200px] w-full absolute bottom-0 block rounded-bl-xl rounded-br-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EventsAndAct;
