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
      onClick={onClick}
      className="absolute text-[white] top-[20%] md:top-[50%] -translate-y-[50%] md:right-[8%] text-[3rem] bg-primary -right-[8%] cursor-pointer rounded-[50%] w-[48px] h-[48px] grid place-items-center"
    >
      <IoIosArrowForward className="text-3xl" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      onClick={onClick}
      className="absolute text-[white] top-[20%] md:top-[50%] -translate-y-[50%] md:left-[8%] text-[3rem] bg-primary -left-[8%] cursor-pointer rounded-[50%] w-[48px] h-[48px] grid place-items-center z-[1]"
    >
      <IoIosArrowBack className="text-3xl" />
    </div>
  );
}

const ServiceOnlineDonationPartnersSay = () => {
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
    dots: false,
    infinite: true,
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
          background: "gray",
          borderRadius: "50%",
          opacity: "50%",
        }}
      ></div>
    ),
    responsive: [
      {
        breakpoint: 350,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: "",
          prevArrow: "",
          dots: false,
          arrows: true,
          adaptiveHeight: false,
        },
      },
    ],
  };

  return (
    <>
      <section className="ServiceOnlineDonationPartnersSay pb-10 md:pb-20 bg-light -translate-y-1">
        <div className="customContainer max-w-[90%]">
          {IndtestimonialData?.data.length > 0 && (
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
                item.industry_testimonial_category === "Online Donation System"
            ).length > 1 ? (
              <Slider {...partnerSaysSettings}>
                {IndtestimonialData?.data.map((item, key) => {
                  if (
                    item.industry_testimonial_category ===
                    "Online Donation System"
                  ) {
                    return (
                      <div key={key} className="md:min-h-fit min-h-[70vh]">
                        <div className="testimonialItem bg-customGray lg:grid lg:grid-cols-[_2fr_1fr] items-center md:top-[50%] py-10 px-10 md:px-20 md:pt-[70px] pb-9 mb-5 rounded-xl md:w-[80%] lg:pt-32 mx-auto relative ">
                          <div className="theMessage  relative">
                            <div className="absolute top-[-30px] left-[-40px]">
                              <img
                                // src={`${devBaseImgUrl}/quote-white.png`}
                                src={`${devBaseImgUrl}/quote-white.png`}
                                className="w-[80px]"
                                alt="Testimonial Quote"
                              />
                            </div>
                            <p className="relative z-10 italic mb-8 md:min-h-0 min-h-[100px] max-h-[300px] overflow-auto lg:max-h-full">
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
                                alt="Client's Company Logo"
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
                              className="absolute bottom-0 w-[300px] right-0 rounded-br-xl"
                              alt="Client's Image"
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
                    "Online Donation System"
                  ) {
                    return (
                      <div className="md:min-h-fit min-h-[70vh]">
                        <div
                          className="testimonialItem bg-customGray lg:grid lg:grid-cols-[_2fr_1fr] items-center md:top-[50%] py-10 px-10 md:px-20 md:pt-[70px] pb-9 mb-5 rounded-xl md:w-[80%] lg:pt-32 mx-auto relative"
                          key={key}
                        >
                          <div className="theMessage  relative">
                            <div className="absolute top-[-30px] left-[-40px]">
                              <img
                                // src={`${devBaseImgUrl}/quote-white.png`}
                                src={`${devBaseImgUrl}/quote-white.png`}
                                className="w-[80px]"
                                alt=""
                              />
                            </div>
                            <p className="relative z-10 italic mb-8 md:min-h-0 min-h-[100px] max-h-[300px] overflow-auto lg:max-h-full">
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
                              className="absolute bottom-0 w-[300px] right-0 rounded-br-xl"
                              alt=""
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

export default ServiceOnlineDonationPartnersSay;
