import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
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
    <Slider {...settings}>
      <div>
        <section
          id="banner"
          className={`banner  bg-cover bg-center`}
          style={{
            // backgroundImage: `url(${devBaseImgUrl}/home-bg-new.jpg)`,
            backgroundImage: `url(../../public/img/home-bg-new.jpg)`,
          }}
        >
          <div className="customContainer">
            <div className="wrapper flex place-items-center min-h-[90vh] md:h-[90vh] transition-all w-full">
              <div className="mx-auto w-full md:w-[865px] text-center">
                <p className="text-light lg:text-[28px] italic">
                  In business for good.
                </p>
                <h1 className="text-light leading-[1.2] md:leading-[1.2] text-center text-[clamp(30px,7vw,56px)] font-bold w-full mb-10 md:mb-10  lg:text-[55px] drop-shadow-2xl">
                  Your Trusted Christian Partner in{" "}
                  <span className="bg-sky-500/50">Managed Services</span>
                </h1>
                <p className="text-light text-center mb-10">
                  We deliver end-to-end solutions and professional expertise in
                  web applications, websites, virtual assistants, and skills
                  development. Rooted in Christian values, we are committed to
                  integrity and excellence in helping you elevate your digital
                  presence, streamline operations, and build a more skilled
                  workforce. Our comprehensive services are designed to drive
                  your success with a mission to serve with purpose and care.
                </p>
                <a href="#" className="btn bg-transparent text-light border-2">
                  Get Started
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
            backgroundImage: `url(../../public/img/home-bg-webapp.jpg)`,
          }}
        >
          <div className="customContainer">
            <div className="wrapper flex place-items-center h-[90vh] md:h-[90vh] transition-all w-full">
              <div className="mx-auto w-full md:w-[865px] text-center">
                <p className="text-light lg:text-[28px] italic">
                  Custom Solutions, Lasting Growth
                </p>
                <h1 className="text-light leading-[1.2] md:leading-[1.2] text-center text-[clamp(30px,7vw,56px)] font-bold w-full mb-10 md:mb-10  lg:text-[55px]  ">
                  Empower your business with Custom Web Applications
                </h1>
                <p className="text-light text-center mb-10">
                  We provide custom web application development services
                  tailored to meet your business needs, combining robust
                  functionality with user-friendly design. Our solutions aim to
                  improve business efficiency and automate processes, helping
                  you achieve your goals with modern, scalable technology.
                </p>
                <a href="#" className="btn bg-transparent text-light border-2">
                  Get Started
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
            backgroundImage: `url(../../public/img/home-bg-website.jpg)`,
          }}
        >
          <div className="customContainer">
            <div className="wrapper flex place-items-center h-[90vh] md:h-[90vh] transition-all w-full">
              <div className="mx-auto w-full md:w-[865px] text-center">
                <p className="text-light lg:text-[28px] italic">
                  Digital Design, Meaningful Engagement
                </p>
                <h1 className="text-light leading-[1.2] md:leading-[1.2] text-center text-[clamp(30px,7vw,56px)] font-bold w-full mb-10 md:mb-10  lg:text-[55px]">
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
                <a href="#" className="btn bg-transparent text-light border-2">
                  Get Started
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
            backgroundImage: `url(../../public/img/home-bg-va.jpg)`,
          }}
        >
          <div className="customContainer">
            <div className="wrapper flex place-items-center h-[90vh] md:h-[90vh] transition-all w-full">
              <div className="mx-auto w-full md:w-[865px] text-center">
                <p className="text-light lg:text-[28px] italic">
                  Virtual Support, Real Results
                </p>
                <h1 className="text-light leading-[1.2] md:leading-[1.2] text-center text-[clamp(30px,7vw,56px)] font-bold w-full mb-10 md:mb-10  lg:text-[55px]">
                  Streamline your operations with skilled Virtual Assistants.
                </h1>
                <p className="text-light text-center mb-10">
                  Our skilled virtual assistants offer comprehensive support to
                  help you manage tasks and optimize daily operations. From
                  administrative duties to customer service, we provide reliable
                  and efficient assistance, allowing you to focus on growing
                  your business.
                </p>
                <a href="#" className="btn bg-transparent text-light border-2">
                  Get Started
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
            backgroundImage: `url(../../public/img/home-bg-lcs.jpg)`,
          }}
        >
          <div className="customContainer">
            <div className="wrapper flex place-items-center h-[90vh] md:h-[90vh] transition-all w-full">
              <div className="mx-auto w-full md:w-[865px] text-center">
                <p className="text-light lg:text-[28px] italic">
                  Work-Related Training, Career Success
                </p>
                <h1 className="text-light leading-[1.2] md:leading-[1.2] text-center text-[clamp(30px,7vw,56px)] font-bold w-full mb-10 md:mb-10  lg:text-[55px]">
                  Hands-on training with actual industry experience.
                </h1>
                <p className="text-light text-center mb-10">
                  We offer structured skills development programs that equip
                  individuals with the technical and soft skills needed in
                  today’s workforce. Our On-the-job training and work immersion
                  program covers web development, IT, and accounting, bridging
                  the gap between education and employment, and empowering
                  participants for career success.
                </p>
                <a href="#" className="btn bg-transparent text-light border-2">
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Slider>
  );
};

export default BannerSlider;
