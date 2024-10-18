import React from "react";
import { devBaseImgUrl } from "../../../helpers/functions-general";

const Testimonials = () => {
  const [testimonialItem, setTestimonialItem] = React.useState();

  const [displayTestimonial, setDisplayTestimonial] = React.useState(false);
  const handleTestimonial = (item) => {
    setDisplayTestimonial(true);
    setTestimonialItem(item);
    console.log(testimonialItem);
  };

  React.useEffect(() => {
    setDisplayTestimonial(true);
    setTestimonialItem("slider-index-1");
  }, []);

  return (
    <>
      <section className="testimonials relative py-24 md:mt-40 lg:mt-0 lg:overflow-hidden bg-[#000] lg:bg-[transparent] min-h-[500px]">
        <div className="customContainer">
          <div className="radialGradient absolute -left-[200px] lg:left-0 w-[500px] h-[500px] bottom-0 lg:hidden"></div>
          <div className="wrapper grid lg:grid-cols-[_1fr_3fr] lg:h-[700px]">
            <div className="grid place-items-center relative">
              <div className="z-50 text-light mb-20 lg:mb-0">
                <h3 className="text-[clamp(30px,6vw,45px)] font-semibold  leading-[1.1] mb-8">
                  Our clients' <span className="text-primary">experience</span>
                </h3>
                <p>
                  See what our clients say about our services and how we've
                  helped them achieve their goals.
                </p>
              </div>
              <div className="testimonialQoute absolute left-0 top-[-150px] w-[100px] lg:top-0 lg:w-[150px] lg:h-[150px] z-[1]">
                <img
                  // src={`${devBaseImgUrl}/quote.png`}
                  src={`../../public/img/quote.png`}
                  className="w-full h-full object-cover object-top block"
                  alt=""
                />
              </div>
            </div>
            <div className="flex justify-end">
              <div className="w-full lg:w-[439px] relative z-[14] text-light text-right">
                <div
                  className={`${
                    displayTestimonial && testimonialItem == "slider-index-1"
                      ? "addEntrance block"
                      : "hidden"
                  }`}
                >
                  <p className=" lg:mt-[130px] mb-3 relative italic lg:max-w-[339px] xl:max-w-[439px] lg:float-right">
                    FBS is a true partner to our firm. They have help form our
                    vision and trajectory. We are immnensely gratefull our
                    partnership. Our expectation is to FBS to grow with us. They
                    are an important part of our success. And beyond the
                    business perpective, they are fantastic people. We are bless
                    to work with them.
                  </p>
                  <h3 className="text-[24px] font-semibold mb-2">
                    Robert Han, COO
                  </h3>
                  <div className="justify-end flex lg:hidden">
                    <img
                      src={`${devBaseImgUrl}/tm_logo.png`}
                      className="w-[100px]"
                      alt=""
                    />
                  </div>
                </div>
                <div
                  className={`${
                    displayTestimonial && testimonialItem == "slider-index-2"
                      ? "addEntrance block"
                      : "hidden"
                  }`}
                >
                  <p className=" lg:mt-[130px] mb-3 relative italic lg:max-w-[339px] xl:max-w-[439px] lg:float-right">
                    FBS is a true partner to our firm. They have help form our
                    vision and trajectory. We are immnensely gratefull our
                    partnership. Our expectation is to FBS to grow with us. They
                    are an important part of our success. And beyond the
                    business perpective, they are fantastic people. We are bless
                    to work with them.
                  </p>
                  <h3 className="text-[24px] font-semibold mb-2">
                    Hiro Isugawa, CEO
                  </h3>
                  <div className="justify-end flex lg:hidden">
                    <img
                      src={`${devBaseImgUrl}/tm_logo.png`}
                      className="w-[100px]"
                      alt=""
                    />
                  </div>
                </div>

                <div className="sliderNavTestimonials flex gap-2 absolute right-[2%] lg:bottom-[20%]">
                  <button
                    className={`${
                      displayTestimonial && testimonialItem == "slider-index-1"
                        ? "bg-secondary"
                        : "bg-light"
                    } h-5 w-5 block  rounded-full`}
                    onClick={() => handleTestimonial("slider-index-1")}
                  ></button>
                  <button
                    className={`${
                      displayTestimonial && testimonialItem == "slider-index-2"
                        ? "bg-secondary"
                        : "bg-light"
                    } h-5 w-5 block  rounded-full`}
                    onClick={() => handleTestimonial("slider-index-2")}
                  ></button>
                  <button
                    className={`${
                      displayTestimonial && testimonialItem == "slider-index-3"
                        ? "bg-secondary"
                        : "bg-light"
                    } h-5 w-5 block  rounded-full`}
                    onClick={() => handleTestimonial("slider-index-3")}
                  ></button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="testimonialPhoto hidden  lg:block absolute z-[1] left-[50%] translate-x-[-40%] top-[250px] lg:top-[130px] w-[250px] lg:w-[358px]">
          <div
            className={`${
              displayTestimonial && testimonialItem == "slider-index-1"
                ? "addEntrance block"
                : "hidden"
            }`}
          >
            <img
              // src={`${devBaseImgUrl}/Rober_han.png`}
              src={`../../public/img/Rober_han.png`}
              alt=""
              className="rotate-[5deg]"
            />
          </div>
          <div
            className={`${
              displayTestimonial && testimonialItem == "slider-index-2"
                ? "addEntrance block w-[450px]"
                : "hidden"
            }`}
          >
            <img
              // src={`${devBaseImgUrl}/Rober_han.png`}
              src={`../../public/img/hiro_sm.png`}
              alt=""
              className=""
            />
          </div>
        </div>
        <div className="hidden lg:block">
          <div className="smPill w-[70%] h-[100px] bg-primary top-[60%] z-[5] rounded-tl-full rounded-bl-full absolute -right-[5%] -rotate-[15deg]">
            <div
              className={`${
                displayTestimonial && testimonialItem == "slider-index-1"
                  ? "addEntrance block"
                  : "hidden"
              }`}
            >
              <img
                // src={`${devBaseImgUrl}/tm_logo.png`}
                src={`../../public/img/tm_logo.png`}
                className="w-[200px] mt-[30px] ml-[15%]"
                alt=""
              />
            </div>
            <div
              className={`${
                displayTestimonial && testimonialItem == "slider-index-2"
                  ? "addEntrance block"
                  : "hidden"
              }`}
            >
              <img
                // src={`${devBaseImgUrl}/tm_logo.png`}
                src={`../../public/img/tm_logo.png`}
                className="w-[200px] mt-[30px] ml-[15%]"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="z-0 hidden lg:block overflow-hidden">
          <div className="radial w-full h-[510px] bgGradientBlack absolute left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%] overflow-hidden">
            <div className="bigPill w-[70%] h-[300px] bg-primary top-0 z-[5] rounded-tl-full rounded-bl-full absolute -right-[5%] -rotate-[15deg] "></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
