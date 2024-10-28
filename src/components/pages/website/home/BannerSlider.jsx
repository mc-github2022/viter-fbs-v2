import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import ModalContactGetStarted from "./ModalContactGetStarted";
import useQueryData from "../../../custom-hooks/useQueryData";
import { devBaseImgUrl } from "../../../helpers/functions-general";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      style={{
        display: "block",
        position: "absolute",
        color: "white",
        top: "50%",
        right: "5%",
        fontSize: "3rem",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      <IoIosArrowForward />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      style={{
        display: "block",
        position: "absolute",
        color: "white",
        top: "50%",
        left: "5%",
        fontSize: "3rem",
        zIndex: "1",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      <IoIosArrowBack />
    </div>
  );
}

const BannerSlider = () => {
  const [modalContact, setModalContact] = React.useState(false);
  const handleModalContact = () => {
    setModalContact(!modalContact);
    console.log("open");
  };

  const {
    isFetching,
    error,
    isLoading,
    status,
    data: bannerData,
  } = useQueryData(
    "/v1/banner", // endpoint
    "get", // method
    "banner" // key
  );

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: "slickNavHome slick-dots",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    appendDots: (dots) => (
      <div
        style={{
          borderRadius: "10px",
          padding: "10px",
          bottom: "30px",
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
      {modalContact && (
        <ModalContactGetStarted setModalContact={setModalContact} />
      )}
      <Slider {...settings}>
        {bannerData?.data.map((item, key) => (
          <div>
            <section
              id="banner"
              className={`banner  bg-cover bg-center`}
              style={{
                // backgroundImage: `url(${devBaseImgUrl}/home-bg-new.jpg)`,
                backgroundImage: `url(${devBaseImgUrl}/${item.home_banner_img}`,
              }}
              key={key}
            >
              <div className="customContainer">
                <div className="wrapper flex place-items-center min-h-[90vh] md:h-[90vh] transition-all w-full">
                  <div className="mx-auto w-full md:w-[865px] text-center">
                    <p className="text-light lg:text-[28px] italic">
                      {item.home_banner_sub_title}
                    </p>
                    <h1 className="text-light leading-[1.2] md:leading-[1.2] text-center text-[clamp(30px,4vw,56px)] font-bold w-full mb-10 md:mb-10  lg:text-[55px] drop-shadow-2xl">
                      {item.home_banner_title}
                    </h1>
                    <p className="text-light text-center mb-10">
                      {item.home_banner_description}
                    </p>
                    <a
                      href="#"
                      className="btn bg-transparent text-light font-semibold border-2"
                      onClick={handleModalContact}
                    >
                      {item.home_banner_button_text}
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </div>
        ))}
        {/* <div>
          <section
            id="banner"
            className={`banner bg-cover bg-center`}
            style={{
              // backgroundImage: `url(${devBaseImgUrl}/home-bg-new.jpg)`,
              backgroundImage: `url(../../public/img/home-bg-webapp.webp)`,
            }}
          >
            <div className="customContainer">
              <div className="wrapper flex place-items-center h-[90vh] md:h-[90vh] transition-all w-full">
                <div className="mx-auto w-full md:w-[865px] text-center">
                  <p className="text-light lg:text-[28px] italic">
                    Custom Solutions, Lasting Growth
                  </p>
                  <h1 className="text-light leading-[1.2] md:leading-[1.2] text-center text-[clamp(30px,4vw,56px)] font-bold w-full mb-10 md:mb-10  lg:text-[55px]  ">
                    Empower your business with Custom Web Applications
                  </h1>
                  <p className="text-light text-center mb-10">
                    We provide custom web application development services
                    tailored to meet your business needs, combining robust
                    functionality with user-friendly design. Our solutions aim
                    to improve business efficiency and automate processes,
                    helping you achieve your goals with modern, scalable
                    technology.
                  </p>
                  <a
                    href="#"
                    className="btn bg-transparent text-light font-semibold border-2"
                    onClick={handleModalContact}
                  >
                    GET STARTED
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div>
          <section
            id="banner"
            className={`banner bg-cover bg-center`}
            style={{
              // backgroundImage: `url(${devBaseImgUrl}/home-bg-new.jpg)`,
              backgroundImage: `url(../../public/img/home-bg-website.webp)`,
            }}
          >
            <div className="customContainer">
              <div className="wrapper flex place-items-center h-[90vh] md:h-[90vh] transition-all w-full">
                <div className="mx-auto w-full md:w-[865px] text-center">
                  <p className="text-light lg:text-[28px] italic">
                    Digital Design, Meaningful Engagement
                  </p>
                  <h1 className="text-light leading-[1.2] md:leading-[1.2] text-center text-[clamp(30px,4vw,56px)] font-bold w-full mb-10 md:mb-10  lg:text-[55px]">
                    Elevate your digital presence with responsive, user-friendly
                    Websites
                  </h1>
                  <p className="text-light text-center mb-10">
                    Our website services include design, development, and
                    maintenance to ensure your digital presence is impactful and
                    aligned with your brand. We create responsive, visually
                    appealing, and SEO-friendly websites that enhance user
                    experience and drive customer engagement.
                  </p>
                  <a
                    href="#"
                    className="btn bg-transparent text-light font-semibold border-2"
                    onClick={handleModalContact}
                  >
                    GET STARTED
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div>
          <section
            id="banner"
            className={`banner bg-cover bg-center`}
            style={{
              // backgroundImage: `url(${devBaseImgUrl}/home-bg-new.jpg)`,
              backgroundImage: `url(../../public/img/home-bg-va.webp)`,
            }}
          >
            <div className="customContainer">
              <div className="wrapper flex place-items-center h-[90vh] md:h-[90vh] transition-all w-full">
                <div className="mx-auto w-full md:w-[865px] text-center">
                  <p className="text-light lg:text-[28px] italic">
                    Virtual Support, Real Results
                  </p>
                  <h1 className="text-light leading-[1.2] md:leading-[1.2] text-center text-[clamp(30px,4vw,56px)] font-bold w-full mb-10 md:mb-10  lg:text-[55px]">
                    Streamline your operations with skilled Virtual Assistants.
                  </h1>
                  <p className="text-light text-center mb-10">
                    Our skilled virtual assistants offer comprehensive support
                    to help you manage tasks and optimize daily operations. From
                    administrative duties to customer service, we provide
                    reliable and efficient assistance, allowing you to focus on
                    growing your business.
                  </p>
                  <a
                    href="#"
                    className="btn bg-transparent text-light font-semibold border-2"
                    onClick={handleModalContact}
                  >
                    GET STARTED
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div>
          <section
            id="banner"
            className={`banner bg-cover bg-center`}
            style={{
              // backgroundImage: `url(${devBaseImgUrl}/home-bg-new.jpg)`,
              backgroundImage: `url(../../public/img/home-bg-lcs.webp)`,
            }}
          >
            <div className="customContainer">
              <div className="wrapper flex place-items-center h-[90vh] md:h-[90vh] transition-all w-full">
                <div className="mx-auto w-full md:w-[865px] text-center">
                  <p className="text-light lg:text-[28px] italic">
                    Work-Related Training, Career Success
                  </p>
                  <h1 className="text-light leading-[1.2] md:leading-[1.2] text-center text-[clamp(30px,4vw,56px)] font-bold w-full mb-10 md:mb-10  lg:text-[55px]">
                    Hands-on training with actual industry experience.
                  </h1>
                  <p className="text-light text-center mb-10">
                    We offer structured skills development programs that equip
                    individuals with the technical and soft skills needed in
                    today’s workforce. Our On-the-job training and work
                    immersion program covers web development, IT, and
                    accounting, bridging the gap between education and
                    employment, and empowering participants for career success.
                  </p>
                  <a
                    href="#"
                    className="btn bg-transparent text-light font-semibold border-2"
                    onClick={handleModalContact}
                  >
                    GET STARTED
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div> */}
      </Slider>
    </>
  );
};

export default BannerSlider;
