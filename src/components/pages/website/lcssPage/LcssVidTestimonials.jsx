import React from "react";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import { devBaseImgUrl } from "../../../helpers/functions-general";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      style={{
        background: "#ac1e72",
        position: "absolute",
        color: "white",
        top: "50%",
        right: "-6%",
        fontSize: "3rem",
        cursor: "pointer",
        borderRadius: "100%",
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
        background: "#ac1e72",
        color: "white",
        top: "50%",
        left: "-6%",
        fontSize: "3rem",
        zIndex: "1",
        cursor: "pointer",
        borderRadius: "100%",
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

const LcssVidTestimonials = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    dotsClass: "slickNav slick-dots",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    appendDots: (dots) => (
      <div
        style={{
          borderRadius: "10px",
          padding: "10px",
          bottom: "-60px",
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
          background: "gray",
          borderRadius: "50%",
          opacity: "50%",
        }}
      ></div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          nextArrow: "",
          prevArrow: "",
          dots: false,
        },
      },
      {
        breakpoint: 786,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: "",
          prevArrow: "",
          dots: false,
        },
      },
    ],
  };

  return (
    <>
      <section className="lcssVidTestimonials py-20 bg-[#000000] relative overflow-hidden">
        <div className="footerGradientBlack absolute h-[1000px] w-full bottom-[-30%] right-[-30%]"></div>
        <div className="absolute bg-light h-[180px] w-full bottom-0"></div>
        <div className="customContainer">
          <div className="mb-20 text-center relative z-[3]">
            <p className="text-light">Here are our</p>
            <h3 className="text-[clamp(20px,7vw,35px)] font-semibold leading-[1.1] text-light">
              Trainees Work Experience
            </h3>
          </div>
          <Slider {...settings}>
            {/* <div className="wrapper flex flex-wrap place-content-center lg:grid lg:grid-cols-3 gap-6"> */}
            <div className="vidItem addShadow rounded-xl z-[99999999] max-w-[413px] bg-customGray relative">
              <iframe
                id="player"
                className="w-full h-[223px] rounded-tl-xl rounded-tr-xl"
                src="https://www.youtube.com/embed/w6_k-pnlaE0?si=Qhu_Hvw8HZcRgVVr"
                title="Marks story"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
              ></iframe>
              <div className="testimonialMessage p-5  rounded-bl-xl rounded-br-xl relative">
                <p className="italic mb-24 min-h-[120px]">
                  <RiDoubleQuotesL className="inline-block text-2xl mr-3" /> I
                  have learned a lot, and my overall experience will be very
                  helpful not only in my future career, but also in building and
                  shaping myself.
                  <RiDoubleQuotesR className="inline-block text-2xl ml-3" />
                </p>
              </div>
              <div className="absolute bottom-0 p-5 nameAndSchool flex items-center">
                <img
                  // src={`${devBaseImgUrl}/DLSL_Official_logo.png`}
                  src={`../../public/img/DLSL_Official_logo.png`}
                  className="w-[60px]  mr-4"
                  alt=""
                />
                <div className="italic">
                  <p className="font-semibold">Thea Lyzette Consignado</p>
                  <p>De La Salle Lipa Trainee</p>
                </div>
              </div>
            </div>
            <div className="vidItem addShadow rounded-xl z-[99999999] max-w-[413px] bg-customGray relative">
              <iframe
                id="player"
                className="w-full h-[223px] rounded-tl-xl rounded-tr-xl"
                src="https://www.youtube.com/embed/w6_k-pnlaE0?si=Qhu_Hvw8HZcRgVVr"
                title="Marks story"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
              ></iframe>
              <div className="testimonialMessage p-5  rounded-bl-xl rounded-br-xl relative">
                <p className="italic mb-24 min-h-[120px]">
                  <RiDoubleQuotesL className="inline-block text-2xl mr-3" /> I
                  have learned a lot, and my overall experience will be very
                  helpful not only in my future career, but also in building and
                  shaping myself.
                  <RiDoubleQuotesR className="inline-block text-2xl ml-3" />
                </p>
              </div>
              <div className="absolute bottom-0 p-5 nameAndSchool flex items-center">
                <img
                  // src={`${devBaseImgUrl}/DLSL_Official_logo.png`}
                  src={`../../public/img/DLSL_Official_logo.png`}
                  className="w-[60px]  mr-4"
                  alt=""
                />
                <div className="italic">
                  <p className="font-semibold">Thea Lyzette Consignado</p>
                  <p>De La Salle Lipa Trainee</p>
                </div>
              </div>
            </div>
            {/* </div> */}
          </Slider>
          {/* <div className="wrapper flex flex-wrap place-content-center lg:grid lg:grid-cols-3 gap-6">
            <div className="vidItem addShadow rounded-xl z-[2] max-w-[413px] bg-customGray relative">
              <iframe
                id="player"
                className="w-full h-[223px] rounded-tl-xl rounded-tr-xl"
                src="https://www.youtube.com/embed/w6_k-pnlaE0?si=Qhu_Hvw8HZcRgVVr"
                title="Marks story"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
              ></iframe>
              <div className="testimonialMessage p-5  rounded-bl-xl rounded-br-xl relative">
                <p className="italic mb-24 min-h-[120px]">
                  <RiDoubleQuotesL className="inline-block text-2xl mr-3" /> I
                  have learned a lot, and my overall experience will be very
                  helpful not only in my future career, but also in building and
                  shaping myself.
                  <RiDoubleQuotesR className="inline-block text-2xl ml-3" />
                </p>
              </div>
              <div className="absolute bottom-0 p-5 nameAndSchool flex items-center">
                <img
                  // src={`${devBaseImgUrl}/DLSL_Official_logo.png`}
                  src={`../../public/img/DLSL_Official_logo.png`}
                  className="w-[60px]  mr-4"
                  alt=""
                />
                <div className="italic">
                  <p className="font-semibold">Thea Lyzette Consignado</p>
                  <p>De La Salle Lipa Trainee</p>
                </div>
              </div>
            </div>

            <div className="vidItem addShadow rounded-xl z-[2] max-w-[413px] bg-customGray relative">
              <iframe
                id="player"
                className="w-full h-[223px] rounded-tl-xl rounded-tr-xl"
                src="https://www.youtube.com/embed/rGtLB1x58ts?si=GDWftGxNTKDHpyZI"
                title="Marks story"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
              ></iframe>
              <div className="testimonialMessage p-5 rounded-bl-xl rounded-br-xl ">
                <p className="italic mb-24 min-h-[120px]">
                  <RiDoubleQuotesL className="inline-block text-2xl mr-3" /> I
                  am grateful to Frontline Business Solutions for providing me
                  with a training and the support I needed to become what I am
                  today. Their programs are designed to help people like me to
                  gain the skills and knowledge that is neccesary to success in
                  this field.
                  <RiDoubleQuotesR className="inline-block text-2xl ml-3" />
                </p>
              </div>
              <div className="absolute bottom-0 p-5 nameAndSchool flex items-center">
                <img
                  // src={`${devBaseImgUrl}/DLSL_Official_logo.png`}
                  src={`../../public/img/LSPU.png`}
                  className="w-[60px]  mr-4"
                  alt=""
                />
                <div className="italic">
                  <p className="font-semibold">Mark Ryan Merin</p>
                  <p>
                    Laguna State Polytechnic Univ. <br /> SPC Campus
                  </p>
                </div>
              </div>
            </div>
            <div className="vidItem addShadow rounded-xl z-[2] max-w-[413px] bg-customGray relative">
              <iframe
                id="player"
                className="w-full h-[223px] rounded-tl-xl rounded-tr-xl"
                src="https://www.youtube.com/embed/7fGYHbtnCQk?si=-97GqozGwXnv3Z9q"
                title="Marks story"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
              ></iframe>
              <div className="testimonialMessage p-5  rounded-bl-xl rounded-br-xl">
                <p className="italic mb-24 min-h-[120px]">
                  <RiDoubleQuotesL className="inline-block text-2xl mr-3" />{" "}
                  They did not just help me improve my web designing skills, but
                  they also gave me strength and advises regarding personality
                  and values that I can adopt from them to the IT industry.
                  <RiDoubleQuotesR className="inline-block text-2xl ml-3" />
                </p>
              </div>
              <div className=" absolute bottom-0 p-5 nameAndSchool flex items-center">
                <img
                  // src={`${devBaseImgUrl}/DLSL_Official_logo.png`}
                  src={`../../public/img/lc.png`}
                  className="w-[60px] mr-4"
                  alt=""
                />
                <div className="italic">
                  <p className="font-semibold">Aileah Marie Lozada</p>
                  <p>Laguna College Trainee</p>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default LcssVidTestimonials;
