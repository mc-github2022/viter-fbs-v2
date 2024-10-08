import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      style={{
        position: "absolute",
        color: "white",
        top: "57%",
        right: "8%",
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
      <IoIosArrowForward className="text-3xl" />
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
        top: "57%",
        left: "8%",
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
      <IoIosArrowBack className="text-3xl" />
    </div>
  );
}

const ServiceHrPartnersSay = () => {
  var partnerSaysSettings = {
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: "slickNav slick-dots",
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
  };

  return (
    <>
      <section className="ServiceHrPartnersSay py-20">
        <div className="customContainer">
          <div className="">
            <p>What our</p>
            <h2 className="text-[35px] font-semibold text-primary leading-[1.1] mb-8">
              clients say
            </h2>
          </div>
          <div className="wrapper ">
            <Slider {...partnerSaysSettings}>
              <div>
                <div className="testimonialItem bg-customGray grid grid-cols-[_2fr_1fr] items-center mt-20 px-20 pt-16 pb-9 rounded-xl w-[80%] mx-auto relative">
                  <div className="theMessage  relative">
                    <div className="absolute top-[-30px] left-[-40px]">
                      <img
                        // src={`${devBaseImgUrl}/quote-white.png`}
                        src={`../../public/img//quote-white.png`}
                        className="w-[80px]"
                        alt=""
                      />
                    </div>
                    <p className="relative z-10 italic mb-4">
                      Frontline Business Solution has been one of STI San
                      Pablo's most trusted partners for several years. We at STI
                      are truly grateful for the exceptional knowledge and
                      experience FBS has provided to our On-the-Job trainee
                      students in IT and Engineering, as well as for the
                      kindness and support shown coming from the people of FBS.
                    </p>
                    <div className="logoAndName flex items-center gap-3">
                      <img
                        // src={`${devBaseImgUrl}/sti.png`}
                        className="w-[80px]"
                        src={`../../public/img/sti.png`}
                        alt=""
                      />
                      <div className="leading-[1] italic">
                        <p>Ms. Olivia Almarez</p>
                        <p className="text-sm">OJT Coordinator</p>
                      </div>
                    </div>
                  </div>
                  <img
                    // src={`${devBaseImgUrl}/Client_IMG_1.png`}
                    src={`../../public/img/olivia-almarez.png`}
                    className="absolute bottom-0 w-[300px] right-8"
                    alt=""
                  />
                </div>
              </div>
              <div>
                <div className="testimonialItem bg-customGray grid grid-cols-[_2fr_1fr] items-center mt-20 px-20 pt-16 pb-9 rounded-xl w-[80%] mx-auto relative">
                  <div className="theMessage  relative">
                    <div className="absolute top-[-30px] left-[-40px]">
                      <img
                        // src={`${devBaseImgUrl}/quote-white.png`}
                        src={`../../public/img//quote-white.png`}
                        className="w-[80px]"
                        alt=""
                      />
                    </div>
                    <p className="relative z-10 italic mb-4">
                      My experience at Frontline Business Solution has truly
                      been a great journey. I gained a wealth of knowledge in
                      front-end web design, equipping me with essential skills
                      in HTML, CSS, and JavaScript. Most importantly, the people
                      there are truly amazing and passionate about their work.
                      To sum it up, my experience at FBS was fun!
                    </p>
                    <div className="logoAndName flex items-center gap-3">
                      <img
                        // src={`${devBaseImgUrl}/sti.png`}
                        className="w-[80px]"
                        src={`../../public/img/lspu.png`}
                        alt=""
                      />
                      <div className="leading-[1] italic">
                        <p>Ms. Ariel Angeni Ferrer</p>
                        <p className="text-sm">
                          BS Computer Engineering Graduate
                        </p>
                      </div>
                    </div>
                  </div>
                  <img
                    // src={`${devBaseImgUrl}/ariel-ferrer.png`}
                    src={`../../public/img/ariel-ferrer.png`}
                    className="absolute bottom-0 w-[300px] right-8"
                    alt=""
                  />
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceHrPartnersSay;
