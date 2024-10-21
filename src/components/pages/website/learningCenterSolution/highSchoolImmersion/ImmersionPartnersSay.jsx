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
        top: "50%",
        transform: "translateY(-50%)",
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
        top: "50%",
        transform: "translateY(-50%)",
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

const ImmersionPartnersSay = () => {
  var partnerSaysSettings = {
    dots: false,
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
          bottom: "-40px",
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
          background: "#ac1f72",
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
          dots: true,
        },
      },
    ],
  };

  return (
    <>
      <section className="ImmersionPartnersSay py-10 pb-20 md:py-20">
        <div className="customContainer">
          <div className="">
            <p>What our school and university</p>
            <h2 className="text-[clamp(20px,7vw,35px)] font-semibold text-primary leading-[1.1] mb-8">
              partners say
            </h2>
          </div>
          <div className="wrapper ">
            <Slider {...partnerSaysSettings}>
              <div className="md:h-[450px]">
                <div className="testimonialItem bg-customGray lg:grid lg:grid-cols-[_2fr_1fr] items-center md:top-[50%] md:translate-y-[-50%] py-10 px-10 md:px-20 md:pt-16 pb-9 mb-5 rounded-xl md:w-[80%] mx-auto relative">
                  <div className="theMessage  relative">
                    <div className="absolute top-[-30px] left-[-40px]">
                      <img
                        // src={`${devBaseImgUrl}/quote-white.png`}
                        src={`../../public/img//quote-white.png`}
                        className="w-[80px]"
                        alt=""
                      />
                    </div>
                    <p className="relative z-10 italic mb-4 min-h-[260px] md:min-h-0">
                      We extend our deepest gratitude to Frontline Business
                      Solutions for being an outstanding partner in our Work
                      Immersion program. Your organization provided our students
                      with valuable, real-world experiences that greatly
                      enhanced their skills and understanding of their chosen
                      fields. The support and mentorship offered by your team
                      created an ideal learning environment, fostering both
                      professional and personal growth. Your commitment to
                      nurturing young talent and your willingness to involve
                      them in meaningful projects have had a profound impact on
                      their future careers. We truly appreciate the
                      collaboration and look forward to more successful
                      partnerships in the years to come.
                    </p>
                    <div className="logoAndName flex items-center gap-3">
                      <img
                        // src={`${devBaseImgUrl}/sti.png`}
                        className="w-[80px]"
                        src={`../../public/img/stms.png`}
                        alt=""
                      />
                      <div className="leading-[1] italic">
                        <p>Ms. Lara Jane P. Yedra</p>
                        <p className="text-sm">Work Immersion Teacher</p>
                        <p className="text-sm">St. Therese Montessori School</p>
                      </div>
                    </div>
                  </div>
                  <div className="hidden lg:block">
                    <img
                      // src={`${devBaseImgUrl}/Client_IMG_1.png`}
                      src={`../../public/img/lara-yedra.png`}
                      className="absolute bottom-0 w-[300px] right-8"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="md:h-[425px]">
                <div className="testimonialItem bg-customGray lg:grid lg:grid-cols-[_2fr_1fr] items-center md:top-[50%] md:translate-y-[-50%] py-10 px-10 md:px-20 md:pt-16 pb-9 mb-5 rounded-xl md:w-[80%] mx-auto relative">
                  <div className="theMessage  relative">
                    <div className="absolute top-[-30px] left-[-40px]">
                      <img
                        // src={`${devBaseImgUrl}/quote-white.png`}
                        src={`../../public/img//quote-white.png`}
                        className="w-[80px]"
                        alt=""
                      />
                    </div>
                    <p className="relative z-10 italic mb-4 min-h-[260px] md:min-h-0">
                      Frontline Business Solutions helped my students grow in
                      every aspect. They were trained as part of the company and
                      were really excited to tell me their stories. I saw how
                      the company changed my students in facing problems, way of
                      learning, discipline and understanding. I would recommend
                      Frontline Business Solutions if you want exceptional
                      training and experience.
                    </p>
                    <div className="logoAndName flex items-center gap-3">
                      <img
                        // src={`${devBaseImgUrl}/sti.png`}
                        className="w-[80px]"
                        src={`../../public/img/spc.png`}
                        alt=""
                      />
                      <div className="leading-[1] italic">
                        <p>Ms. Chelsea Lim</p>
                        <p className="text-sm">
                          Senior High School ICT Faculty <br />
                          San Pablo Colleges
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="hidden lg:block">
                    <img
                      // src={`${devBaseImgUrl}/ariel-ferrer.png`}
                      src={`../../public/img/chelsea-lim.png`}
                      className="absolute bottom-0 w-[300px] right-8"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default ImmersionPartnersSay;
