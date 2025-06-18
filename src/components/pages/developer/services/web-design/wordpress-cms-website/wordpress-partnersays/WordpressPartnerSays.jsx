import React, { useRef } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import useQueryData from "../../../../../../custom-hooks/useQueryData";
import LoadImages from "../../../../../../partials/LoadImages";
import {
  devBaseImgUrl,
  getConvertStringToJSONparseData,
  googleHDViewLink,
} from "../../../../../../helpers/functions-general";
import Slider from "react-slick";
import { HiPencil } from "react-icons/hi";

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

const WordpressPartnerSays = ({
  wordpressTitlesData,
  handleUpdateWordpressTestimonialTitles,
}) => {
  const {
    isFetching,
    error,
    isLoading,
    status,
    data: IndtestimonialData,
  } = useQueryData(
    "/v1/indTestimonial", // endpoint
    "get", // method
    "indTestimonial", // key
    {},
    null,
    true
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
          bottom: "10px",
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

  const sliderRef = useRef(null);

  // This is for keyboard navigation of slider
  React.useEffect(() => {
    const handleKeyDown = (event) => {
      if (sliderRef.current) {
        // Check if the ref is defined
        if (event.key === "ArrowRight") {
          sliderRef.current.slickNext();
        } else if (event.key === "ArrowLeft") {
          sliderRef.current.slickPrev();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      <section className="partnersSay py-10 pb-20 md:py-20 -translate-y-1 bg-light">
        <div className="customContainer max-w-[90%]">
          {IndtestimonialData?.data.length > 0 && (
            <div className="relative">
              <p>
                {wordpressTitlesData?.data?.[0]
                  ?.wordpress_titles_testimonial_subtitle || "Subtitle"}
              </p>
              <h2 className="text-[clamp(20px,7vw,35px)] font-semibold text-primary leading-[1.1] mb-8">
                {wordpressTitlesData?.data?.[0]
                  ?.wordpress_titles_testimonial_title || "Title"}
              </h2>
              <a
                className="absolute cursor-pointer tooltip-btn -top-4 left-[20rem] "
                data-tooltip="Edit contents"
                onClick={handleUpdateWordpressTestimonialTitles}
              >
                <HiPencil className=" bg-[#C7AC27] rounded-full  w-[25px] h-[25px] p-[5px] border-[1px] text-black" />
              </a>
            </div>
          )}
          <div className="wrapper ">
            {IndtestimonialData?.data.filter(
              (item) =>
                item.industry_testimonial_category === "WordPress CMS Website"
            ).length > 1 ? (
              <Slider ref={sliderRef} {...partnerSaysSettings}>
                {IndtestimonialData?.data.map((item, key) => {
                  const industryTestimonialsImages =
                    getConvertStringToJSONparseData(
                      item.industry_testimonial_img
                    ) || [];
                  const industryTestimonialsLogo =
                    getConvertStringToJSONparseData(
                      item.industry_testimonial_logo
                    ) || [];
                  if (
                    item.industry_testimonial_category ===
                    "WordPress CMS Website"
                  ) {
                    return (
                      <div key={key} className=" md:min-h-fit min-h-[70vh]">
                        <div className="testimonialItem bg-customGray lg:grid lg:grid-cols-[_2fr_1fr] items-center md:top-[50%] py-10 px-10 md:px-20 md:pt-[70px] pb-9 mb-5 rounded-xl md:w-[80%] lg:pt-32 mx-auto relative ">
                          <div className="theMessage  relative">
                            <div className="absolute top-[-30px] left-[-40px]">
                              <img
                                src={`${devBaseImgUrl}/quote-white.png`}
                                className="w-[80px]"
                                alt="Testimonials quote"
                              />
                            </div>
                            <p className="relative z-10 italic mb-8 md:min-h-0 min-h-[100px] max-h-[300px] overflow-auto lg:max-h-full ">
                              {item.industry_testimonial_message}
                            </p>
                            <div
                              className="logoAndName flex flex-col text-center items-center gap-3
                            md:flex-row md:text-left"
                            >
                              {industryTestimonialsLogo.map((image, index) => (
                                <LoadImages
                                  className="w-[80px]"
                                  url={`${googleHDViewLink}${image?.id}`}
                                  alt={`${item.industry_testimonial_name}`}
                                  key={index}
                                />
                              ))}
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
                            {industryTestimonialsImages.map((image, index) => (
                              <LoadImages
                                url={`${googleHDViewLink}${image?.id}`}
                                className="absolute bottom-0 w-[300px] right-0 rounded-br-xl"
                                alt={`${item.industry_testimonial_name}`}
                                key={index}
                              />
                            ))}
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
                  const industryTestimonialsImages =
                    getConvertStringToJSONparseData(
                      item.industry_testimonial_img
                    ) || [];
                  const industryTestimonialsLogo =
                    getConvertStringToJSONparseData(
                      item.industry_testimonial_logo
                    ) || [];
                  if (
                    item.industry_testimonial_category ===
                    "WordPress CMS Website"
                  ) {
                    return (
                      <div className="md:min-h-fit min-h-[70vh]">
                        <div
                          className="testimonialItem bg-customGray lg:grid lg:grid-cols-[_2fr_1fr] items-center md:top-[50%] py-10 px-10 md:px-20 md:pt-[70px] pb-9 mb-5 rounded-xl md:w-[80%] lg:pt-32 mx-auto relative "
                          key={key}
                        >
                          <div className="theMessage  relative">
                            <div className="absolute top-[-30px] left-[-40px]">
                              <img
                                src={`${devBaseImgUrl}/quote-white.png`}
                                className="w-[80px]"
                                alt="Testimonials quote"
                              />
                            </div>
                            <p className="relative z-10 italic mb-8 md:min-h-0 min-h-[100px] max-h-[300px] overflow-auto lg:max-h-full">
                              {item.industry_testimonial_message}
                            </p>
                            <div
                              className="logoAndName flex flex-col text-center items-center gap-3
                            md:flex-row md:text-left"
                            >
                              {industryTestimonialsLogo.map((image, index) => (
                                <LoadImages
                                  className="w-[80px]"
                                  url={`${googleHDViewLink}${image?.id}`}
                                  alt={`${item.industry_testimonial_name}`}
                                  key={index}
                                />
                              ))}
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
                            {industryTestimonialsImages.map((image, index) => (
                              <LoadImages
                                url={`${googleHDViewLink}${image?.id}`}
                                className="absolute bottom-0 w-[300px] right-0 rounded-br-xl"
                                alt={`${item.industry_testimonial_name}`}
                                key={index}
                              />
                            ))}
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

export default WordpressPartnerSays;
