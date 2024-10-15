import React from "react";
import { FiTag } from "react-icons/fi";
import { IoCalendarClearOutline } from "react-icons/io5";
import Header from "../../../partials/Header";
import Footer from "../../../partials/Footer";
import { eventsAndAct } from "./data";
import { Link } from "react-router-dom";
import Slider from "react-slick/lib/slider";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      style={{
        position: "absolute",
        color: "white",
        top: "50%",
        transform: "translateY(-50%)",
        right: "-5%",
        fontSize: "3rem",
        cursor: "pointer",
        background: "#ac1f72",
        borderRadius: "50%",
        width: "48px",
        height: "48px",
        display: "grid",
        placeItems: "center",
      }}
      onClick={onClick}
    >
      <IoIosArrowForward className="text-[2rem]" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      style={{
        position: "absolute",
        color: "white",
        top: "50%",
        transform: "translateY(-50%)",
        left: "-5%",
        fontSize: "3rem",
        zIndex: "1",
        cursor: "pointer",
        background: "#ac1f72",
        borderRadius: "50%",
        width: "48px",
        height: "48px",
        display: "grid",
        placeItems: "center",
      }}
      onClick={onClick}
    >
      <IoIosArrowBack className="text-[2rem]" />
    </div>
  );
}

const EventsAndAct = () => {
  var EventsSliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    centerPadding: "50px",
    slidesToScroll: 1,
    dotsClass: "slickNav slick-dots",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    appendDots: (dots) => (
      <div
        style={{
          borderRadius: "10px",
          padding: "10px",
          bottom: "-5rem",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: "20px",
          height: "20px",
          color: "blue",
          background: "#F5F5F5",
          borderRadius: "50%",
          opacity: "50%",
        }}
      ></div>
    ),
    responsive: [
      {
        breakpoint: 1086,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: "",
          prevArrow: "",
        },
      },
    ],
  };
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
          <div className="wrapper mb-24">
            <div className="grid grid-cols-1 md:grid-cols-[_2fr_1fr] md:grid-rows-2 gap-4 order-2  mb-12 lg:mb-0">
              {eventsAndAct.map((post, key) => {
                if (key > 2) {
                  return;
                }
                return (
                  <div key={key} className={`${post.customCss}`}>
                    <Link to={`/events-and-activities/${post.postSlug}`}>
                      <div
                        style={{
                          // backgroundImage: `url(${devBaseImgUrl}/home-bg-new.jpg)`,
                          backgroundImage: `url(../../public/img/${post.postImage})`,
                        }}
                        className={`blogItem bg-center bg-cover ${post.customCss2} flex items-end relative  rounded-none md:rounded-xl grayscale hover:grayscale-0 transition-all group cursor-pointer`}
                      >
                        <div>
                          <div className="blogTitle relative z-[1]">
                            <h4 className="bg-[#cccccc] group-hover:bg-primary group-hover:text-light p-2 px-10 w-[250px] rounded-tr-full rounded-br-full text-dark grayscale-0 transition-all">
                              {post.postCategory}
                            </h4>
                          </div>
                          <div className="blogExcerpt p-10 relative z-[1]">
                            <p className="text-light font-bold text-lg">
                              {post.postTitle}
                            </p>
                          </div>
                        </div>
                        <div className="bottomGradient bg-gradient-to-t from-dark to-blue-500 h-[200px] w-full absolute bottom-0 block md:rounded-bl-xl md:rounded-br-xl"></div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="moreEvents my-4">
            <h2 className="text-3xl font-semibold text-primary mb-8">
              See More
            </h2>
            <Slider {...EventsSliderSettings}>
              {eventsAndAct.map((post, key) => {
                if (key < 3) {
                  return;
                }
                return (
                  <div key={key} className={`${post.customCss}`}>
                    <Link to={`/events-and-activities/${post.postSlug}`}>
                      <div
                        style={{
                          // backgroundImage: `url(${devBaseImgUrl}/home-bg-new.jpg)`,
                          backgroundImage: `url(../../public/img/${post.postImage})`,
                        }}
                        className={`blogItem mx-2 bg-center bg-cover ${post.customCss2} flex items-end relative  rounded-none md:rounded-xl grayscale hover:grayscale-0 transition-all group cursor-pointer`}
                      >
                        <div>
                          <div className="blogTitle relative z-[1]">
                            <h4 className="bg-[#cccccc] group-hover:bg-primary group-hover:text-light p-2 px-10 w-[250px] rounded-tr-full rounded-br-full text-dark grayscale-0 transition-all">
                              {post.postCategory}
                            </h4>
                          </div>
                          <div className="blogExcerpt p-10 relative z-[1]">
                            <p className="text-light font-bold text-lg">
                              {post.postTitle}
                            </p>
                          </div>
                        </div>
                        <div className="bottomGradient bg-gradient-to-t from-dark to-blue-500 h-[200px] w-full absolute bottom-0 block md:rounded-bl-xl md:rounded-br-xl"></div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EventsAndAct;
