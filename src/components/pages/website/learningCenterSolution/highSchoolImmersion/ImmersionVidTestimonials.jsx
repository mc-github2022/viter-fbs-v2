import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import useQueryData from "../../../../custom-hooks/useQueryData";
import Slider from "react-slick";
import { devBaseImgUrl } from "../../../../helpers/functions-general";

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

const ImmersionVidTestimonials = () => {
  const {
    isFetching,
    error,
    isLoading,
    status,
    data: vidTestimonialData,
  } = useQueryData(
    "/v1/vid-testimonial", // endpoint
    "get", // method
    "vid-testimonial" // key
  );

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

  // to extract the youtube link
  const getYoutubeEmbedUrl = (url) => {
    if (!url || !url.includes("v=")) {
      return null;
    }

    const videoId = url.split("v=")[1]?.split("&")[0];

    if (!videoId) {
      return null;
    }

    // Set autoplay to 0, and remove or adjust other parameters as needed
    return `https://www.youtube.com/embed/${videoId}?playlist=${videoId}&controls=1&showinfo=0&rel=0&loop=1&autoplay=0&mute=1`;
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
          {vidTestimonialData?.data.filter(
            (item) =>
              item.vid_testimonial_category === "High School Work Immersion"
          ).length > 3 ? (
            <Slider {...settings}>
              {vidTestimonialData?.data.map((item, key) => {
                if (
                  item.vid_testimonial_category === "High School Work Immersion"
                ) {
                  return (
                    <div
                      className="vidItem addShadow rounded-xl z-[2] max-w-[413px] bg-customGray relative"
                      key={key}
                    >
                      <iframe
                        className="w-full h-[223px] rounded-tl-xl rounded-tr-xl"
                        src={
                          getYoutubeEmbedUrl(item.vid_testimonial_vid_link) +
                          "?autoplay=0"
                        }
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        loading="lazy"
                      ></iframe>

                      <div className="testimonialMessage p-5  rounded-bl-xl rounded-br-xl relative">
                        <p className="italic mb-24 min-h-[120px]">
                          <RiDoubleQuotesL className="inline-block text-2xl mr-3" />{" "}
                          {item.vid_testimonial_message}
                          <RiDoubleQuotesR className="inline-block text-2xl ml-3" />
                        </p>
                      </div>
                      <div className="absolute bottom-0 p-5 nameAndSchool flex items-center">
                        <img
                          // src={`${devBaseImgUrl}/DLSL_Official_logo.png`}
                          src={`${devBaseImgUrl}/${item.vid_testimonial_logo_img}`}
                          className="w-[60px]  mr-4"
                          alt="Trainees Work Experience"
                        />
                        <div className="italic">
                          <p className="font-semibold">
                            {item.vid_testimonial_name}
                          </p>
                          <p>
                            {item.vid_testimonial_course
                              ? item.vid_testimonial_course
                              : ""}
                          </p>
                          <p>
                            {item.vid_testimonial_school
                              ? item.vid_testimonial_school
                              : ""}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                }
                return null;
              })}
            </Slider>
          ) : (
            <div className="wrapper flex flex-wrap place-content-center lg:grid lg:grid-cols-3 gap-6">
              {vidTestimonialData?.data.map((item, key) => {
                if (
                  item.vid_testimonial_category === "High School Work Immersion"
                ) {
                  return (
                    <div
                      className="vidItem addShadow rounded-xl z-[2] max-w-[413px] bg-customGray relative"
                      key={key}
                    >
                      <iframe
                        className="w-full h-[223px] rounded-tl-xl rounded-tr-xl"
                        src={getYoutubeEmbedUrl(item.vid_testimonial_vid_link)}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        loading="lazy"
                      ></iframe>
                      <div className="testimonialMessage p-5  rounded-bl-xl rounded-br-xl relative">
                        <p className="italic mb-24 min-h-[250px] md:min-h-[120px]">
                          <RiDoubleQuotesL className="inline-block text-2xl mr-3" />{" "}
                          {item.vid_testimonial_message}
                          <RiDoubleQuotesR className="inline-block text-2xl ml-3" />
                        </p>
                      </div>
                      <div className="absolute bottom-0 p-5 nameAndSchool flex items-center">
                        <img
                          // src={`${devBaseImgUrl}/DLSL_Official_logo.png`}
                          src={`${devBaseImgUrl}/${item.vid_testimonial_logo_img}`}
                          className="w-[60px]  mr-4"
                          alt="Trainees Work Experience"
                        />
                        <div className="italic">
                          <p className="font-semibold">
                            {item.vid_testimonial_name}
                          </p>
                          <p>
                            {item.vid_testimonial_course
                              ? item.vid_testimonial_course
                              : ""}
                          </p>
                          <p>
                            {item.vid_testimonial_school
                              ? item.vid_testimonial_school
                              : ""}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default ImmersionVidTestimonials;
