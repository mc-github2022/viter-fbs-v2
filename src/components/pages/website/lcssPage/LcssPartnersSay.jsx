import React from "react";
import { RiDoubleQuotesL } from "react-icons/ri";
import { devBaseImgUrl } from "../../../helpers/functions-general";
import Slider from "react-slick";
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

const LcssPartnersSay = () => {
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
      <section className="partnersSay py-20">
        <div className="customContainer">
          <div className="">
            <p>What our school and university</p>
            <h2 className="text-[35px] font-semibold text-primary leading-[1.1] mb-8">
              partners say
            </h2>
          </div>
          <div className="wrapper ">
            <Slider {...partnerSaysSettings}>
              <div className="h-[425px]">
                <div className="testimonialItem bg-customGray grid grid-cols-[_2fr_1fr] top-[50%] translate-y-[-50%] items-center px-20 pt-16 pb-9 rounded-xl w-[80%] mx-auto relative">
                  <div className="theMessage  relative">
                    <div className="absolute top-[-30px] left-[-40px]">
                      <img
                        // src={`${devBaseImgUrl}/quote-white.png`}
                        src={`../../public/img//quote-white.png`}
                        className="w-[80px]"
                        alt=""
                      />
                    </div>
                    <p className="text-sm relative z-10 italic mb-4">
                      A successful internship may be defined as one that
                      provides the following: meaningful and relevant work,
                      formal and informal training, social opportunities to
                      build personal skills and relationships, and continuous
                      connections even after the internship has ended. The
                      Information Technology program of De La Salle Lipa is
                      fortunate to have found all these with the internship
                      program of Frontline Business Solutions. Our student
                      interns had fulfilling internships with FBS, with their
                      holistic approach in honing both their technical.
                      leadership, and personal skills, and making them more
                      ready to face the exciting world of IT. We look forward to
                      partnering with FBS to develop and nurture future-ready IT
                      professionals.
                    </p>
                    <div className="logoAndName flex items-center gap-3">
                      <img
                        // src={`${devBaseImgUrl}/sti.png`}
                        className="w-[80px]"
                        src={`../../public/img/DLSL_Official_logo.png`}
                        alt=""
                      />
                      <div className="leading-[1] italic">
                        <p>Mr. Emilio Manuel Macaso</p>
                        <p className="text-sm">IT Faculty, La Salle Lipa</p>
                      </div>
                    </div>
                  </div>
                  <img
                    // src={`${devBaseImgUrl}/ariel-ferrer.png`}
                    src={`../../public/img/emilio-macaso.png`}
                    className="absolute bottom-0 w-[300px] right-8"
                    alt=""
                  />
                </div>
              </div>

              <div className="h-[425px]">
                <div className="testimonialItem bg-customGray grid grid-cols-[_2fr_1fr] top-[50%] translate-y-[-50%] items-center px-20 pt-16 pb-9 rounded-xl w-[80%] mx-auto relative ">
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
              <div className="h-[425px]">
                <div className="testimonialItem bg-customGray grid grid-cols-[_2fr_1fr] top-[50%] translate-y-[-50%] items-center px-20 pt-16 pb-9 rounded-xl w-[80%] mx-auto relative">
                  <div className="theMessage  relative">
                    <div className="absolute top-[-30px] left-[-40px]">
                      <img
                        // src={`${devBaseImgUrl}/quote-white.png`}
                        src={`../../public/img//quote-white.png`}
                        className="w-[80px]"
                        alt=""
                      />
                    </div>
                    <p className="text-sm relative z-10 italic mb-4">
                      Frontline Business Solutions has demonstrated a
                      commendable commitment to fostering the professional
                      growth of our students through their intensive Internship
                      programs. The hands-on experience provided during the
                      training is invaluable, allowing students to apply
                      theoretical knowledge in real-world settings. Moreover,
                      Frontline offers high-end facilities equipped with the
                      latest technology, ensuring that interns are well-prepared
                      to meet industry standards. We appreciate Frontline
                      Business Solutions for their partnership and commitment to
                      the development of our students.
                    </p>
                    <div className="logoAndName flex items-center gap-3">
                      <img
                        // src={`${devBaseImgUrl}/sti.png`}
                        className="w-[80px]"
                        src={`../../public/img/lspu.png`}
                        alt=""
                      />
                      <div className="leading-[1] italic">
                        <p>Mr. Joesua R. Manzanero</p>
                        <p className="text-sm">
                          Faculty, LSPU- San Pablo City Campus Program
                          Coordinator, BS in Information Technology OJT
                          Coordinator, College of Computer Studies
                        </p>
                      </div>
                    </div>
                  </div>
                  <img
                    // src={`${devBaseImgUrl}/ariel-ferrer.png`}
                    src={`../../public/img/joesua-manzanero.png`}
                    className="absolute bottom-0 w-[300px] right-8"
                    alt=""
                  />
                </div>
              </div>
              <div className="h-[425px]">
                <div className="testimonialItem bg-customGray grid grid-cols-[_2fr_1fr] top-[50%] translate-y-[-50%] items-center px-20 pt-16 pb-9 rounded-xl w-[80%] mx-auto relative ">
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
                      FBS' internship program provided great opportunity for
                      students to experience actual industry-related tasks which
                      greatly honed their skills. This also enhanced their
                      professional capabilities and served as a valuable
                      foundation for their future career.
                    </p>
                    <div className="logoAndName flex items-center gap-3">
                      <img
                        // src={`${devBaseImgUrl}/sti.png`}
                        className="w-[80px]"
                        src={`../../public/img/sti.png`}
                        alt=""
                      />
                      <div className="leading-[1] italic">
                        <p>Mrs. Angelou Almare-Medina</p>
                        <p className="text-sm">
                          Program Head, Information Technology
                        </p>
                      </div>
                    </div>
                  </div>
                  <img
                    // src={`${devBaseImgUrl}/Client_IMG_1.png`}
                    src={`../../public/img/angelou-almare-medina.png`}
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

export default LcssPartnersSay;
