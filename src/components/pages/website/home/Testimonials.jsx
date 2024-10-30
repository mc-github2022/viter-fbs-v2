import React from "react";
import { devBaseImgUrl } from "../../../helpers/functions-general";
import useQueryData from "../../../custom-hooks/useQueryData";

const Testimonials = () => {
  const [testimonialItem, setTestimonialItem] = React.useState();

  const [displayTestimonial, setDisplayTestimonial] = React.useState(false);

  const {
    isFetching,
    error,
    isLoading,
    status,
    data: testimonialData,
  } = useQueryData(
    "/v1/testimonials", // endpoint
    "get", // method
    "testimonials" // key
  );

  const handleTestimonial = (item) => {
    setDisplayTestimonial(true);
    setTestimonialItem(item);
    console.log(testimonialItem);
  };

  React.useEffect(() => {
    if (testimonialData?.data?.length > 0) {
      setDisplayTestimonial(true);
      setTestimonialItem(
        `slider-index-${testimonialData.data[0].home_testimonial_aid}`
      );
    }
  }, [testimonialData]);

  return (
    <>
      <section className="testimonials relative py-24 md:mt-40 lg:mt-0 lg:overflow-hidden bg-[#000] lg:bg-[transparent] min-h-[500px]">
        <div className="customContainer">
          <div className="radialGradient absolute -left-[200px] lg:left-0 w-[500px] h-[500px] bottom-0 lg:hidden"></div>
          <div className="wrapper grid lg:grid-cols-[_1fr_3fr] lg:h-[700px]">
            <div className="grid place-items-center relative">
              <div className="z-50 text-light mb-20 lg:mb-0">
                <h3 className="text-[clamp(30px,6vw,45px)] font-semibold  leading-[1.1] mb-8">
                  Our Clients' <span className="text-primary">Experience</span>
                </h3>
                <p>
                  See what our clients say about our services and how we've
                  helped them achieve their goals.
                </p>
              </div>
              <div className="testimonialQoute absolute left-0 top-[-150px] w-[100px] lg:top-0 lg:w-[150px] lg:h-[150px] z-[1]">
                <div>
                  <img
                    // src={`${devBaseImgUrl}/quote.png`}
                    src={`${devBaseImgUrl}/quote.png`}
                    className="w-full h-full object-cover object-top block"
                    alt="quote"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="w-full lg:w-[439px] relative z-[14] text-light text-right">
                {testimonialData?.data.map((item, key) => (
                  <div
                    key={key}
                    className={`${
                      displayTestimonial &&
                      testimonialItem ==
                        `slider-index-${item.home_testimonial_aid}`
                        ? "addEntrance block"
                        : "hidden"
                    }`}
                  >
                    <p className=" lg:mt-[130px] mb-3 relative italic lg:max-w-[339px] xl:max-w-[439px] ml-auto ">
                      {item.home_testimonial_message}
                    </p>
                    <h3 className="text-[24px] font-semibold mb-2">
                      {item.home_testimonial_name},{" "}
                      {item.home_testimonial_position}
                    </h3>
                    <div className="justify-end flex lg:hidden">
                      <img
                        src={`${devBaseImgUrl}/${item.home_testimonial_logo_img}`}
                        className="w-[100px]"
                        alt="company logo"
                      />
                    </div>
                  </div>
                ))}

                <div className="sliderNavTestimonials flex gap-2 absolute right-[2%] py-3 lg:bottom-[20%] lg:py-0">
                  {testimonialData?.data.map((item, key) => (
                    <button
                      key={key}
                      className={`${
                        displayTestimonial &&
                        testimonialItem ==
                          `slider-index-${item.home_testimonial_aid}`
                          ? "bg-secondary"
                          : "bg-light"
                      } h-5 w-5 block  rounded-full`}
                      onClick={() =>
                        handleTestimonial(
                          `slider-index-${item.home_testimonial_aid}`
                        )
                      }
                    ></button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="testimonialPhoto hidden lg:block absolute z-[1] left-[50%] translate-x-[-40%] top-[250px] lg:top-[130px] w-[250px] lg:w-[358px]">
          {testimonialData?.data.map((item, key) => (
            <div
              key={key}
              className={`${
                displayTestimonial &&
                testimonialItem == `slider-index-${item.home_testimonial_aid}`
                  ? "addEntrance block"
                  : "hidden"
              }`}
            >
              <img
                // src={`${devBaseImgUrl}/Rober_han.png`}
                src={`${devBaseImgUrl}/${item.home_testimonial_client_img}`}
                alt="company logo"
                className="max-w-[430px] object-cover"
              />
            </div>
          ))}
        </div>

        <div className="hidden lg:block">
          <div className="smPill w-[72%] h-[100px] 2xl:top-[55%] bg-primary lg:top-[60%] z-[5] rounded-tl-full rounded-bl-full absolute -right-[5%] -rotate-[15deg]">
            {testimonialData?.data.map((item, key) => (
              <div
                key={key}
                className={`${
                  displayTestimonial &&
                  testimonialItem == `slider-index-${item.home_testimonial_aid}`
                    ? "addEntrance block"
                    : "hidden"
                }`}
              >
                <img
                  // src={`${devBaseImgUrl}/tm_logo.png`}
                  src={`${devBaseImgUrl}/${item.home_testimonial_logo_img}`}
                  className="w-[200px] mt-[30px] ml-[15%]"
                  alt="client image"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="z-0 hidden lg:block overflow-hidden">
          <div className="radial w-full h-[510px] bgGradientBlack absolute left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%] overflow-hidden">
            <div className="bigPill w-[72%] h-[300px] 2xl:-top-[10%] bg-primary lg:top-0 z-[5] rounded-tl-full rounded-bl-full absolute -right-[5%] -rotate-[15deg] "></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
