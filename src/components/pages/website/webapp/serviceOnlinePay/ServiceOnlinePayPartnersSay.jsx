import React from "react";
import { RiDoubleQuotesL } from "react-icons/ri";
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { clientSays, clientSaysTitle } from "./data";
import useQueryData from "../../../../custom-hooks/useQueryData";
import { devBaseImgUrl } from "../../../../helpers/functions-general";

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

const ServiceOnlinePayPartnersSay = () => {
  const {
    isFetching,
    error,
    isLoading,
    status,
    data: IndtestimonialData,
  } = useQueryData(
    "/v1/indTestimonial", // endpoint
    "get", // method
    "indTestimonial" // key
  );

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
          background: "gray",
          borderRadius: "50%",
          opacity: "50%",
        }}
      ></div>
    ),
  };

  return (
    <>
      <section className="ServiceOnlinePayPartnersSay py-20 md:pb-20">
        <div className="customContainer">
          {IndtestimonialData?.data.length > 1 && (
            <div className="">
              <p>What Our</p>
              <h2 className="text-[clamp(20px,7vw,35px)] font-semibold text-primary leading-[1.1] mb-8">
                Clients Say
              </h2>
            </div>
          )}
          <div className="wrapper ">
            {IndtestimonialData?.data.filter(
              (item) =>
                item.industry_testimonial_category ===
                "Online Payment Integration"
            ).length > 1 ? (
              <Slider {...partnerSaysSettings}>
                {IndtestimonialData?.data.map((item, key) => {
                  if (
                    item.industry_testimonial_category ===
                    "Online Payment Integration"
                  ) {
                    return (
                      <div key={key} className="md:h-[425px]">
                        <div className="testimonialItem bg-customGray lg:grid lg:grid-cols-[_2fr_1fr] items-center md:top-[50%] md:translate-y-[-50%] py-10 px-10 md:px-20 md:pt-16 pb-9 mb-5 rounded-xl md:w-[80%] mx-auto relative">
                          <div className="theMessage  relative">
                            <div className="absolute top-[-30px] left-[-40px]">
                              <img
                                // src={`${devBaseImgUrl}/quote-white.png`}
                                src={`${devBaseImgUrl}/quote-white.png`}
                                className="w-[80px]"
                                alt=""
                              />
                            </div>
                            <p className="relative z-10 italic mb-8  md:min-h-0">
                              {item.industry_testimonial_message}
                            </p>
                            <div
                              className="logoAndName flex flex-col text-center items-center gap-3
                            md:flex-row md:text-left"
                            >
                              <img
                                // src={`${devBaseImgUrl}/sti.png`}
                                className="w-[80px]"
                                src={`${devBaseImgUrl}/${item.industry_testimonial_logo}`}
                                alt=""
                              />
                              <div className="leading-[1] italic">
                                <p>{item.industry_testimonial_name}</p>
                                <p className="text-sm">
                                  {item.industry_testimonial_position}
                                </p>
                                <p className="text-sm">
                                  {item.industry_testimonial_company
                                    ? item.industry_testimonial_company
                                    : ""}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="hidden lg:block">
                            <img
                              // src={`${devBaseImgUrl}/Client_IMG_1.png`}
                              src={`${devBaseImgUrl}/${item.industry_testimonial_img}`}
                              className="absolute bottom-0 w-[300px] right-0"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    );
                  }
                })}
              </Slider>
            ) : (
              <div>
                {IndtestimonialData?.data.map((item, key) => {
                  if (
                    item.industry_testimonial_category ===
                    "Online Payment Integration"
                  ) {
                    return (
                      <div className="md:h-[425px]">
                        <div
                          className="testimonialItem bg-customGray lg:grid lg:grid-cols-[_2fr_1fr] items-center md:top-[50%] md:translate-y-[-50%] py-10 px-10 md:px-20 md:pt-16 pb-9 mb-5 rounded-xl md:w-[80%] mx-auto relative"
                          key={key}
                        >
                          <div className="theMessage  relative">
                            <div className="absolute top-[-30px] left-[-40px]">
                              <img
                                src={`${devBaseImgUrl}/quote-white.png`}
                                className="w-[80px]"
                                alt="quote"
                              />
                            </div>
                            <p className="relative z-10 italic mb-8  md:min-h-0">
                              {item.industry_testimonial_message}
                            </p>
                            <div
                              className="logoAndName flex flex-col text-center items-center gap-3
                            md:flex-row md:text-left"
                            >
                              <img
                                className="w-[80px]"
                                src={`${devBaseImgUrl}/${item.industry_testimonial_logo}`}
                                alt="client logo"
                              />
                              <div className="leading-[1] italic">
                                <p>{item.industry_testimonial_name}</p>
                                <p className="text-sm">
                                  {item.industry_testimonial_position}
                                </p>
                                <p className="text-sm">
                                  {item.industry_testimonial_company
                                    ? item.industry_testimonial_company
                                    : ""}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="hidden lg:block">
                            <img
                              src={`${devBaseImgUrl}/${item.industry_testimonial_img}`}
                              className="absolute bottom-0 w-[300px] right-0"
                              alt="client image"
                            />
                          </div>
                        </div>
                      </div>
                    );
                  }
                  return null;
                })}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceOnlinePayPartnersSay;
