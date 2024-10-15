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

const ConStudPartnersSay = () => {
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
      <section className="ConStudPartnersSay py-10 pb-20 md:py-20">
        <div className="customContainer">
          <div className="">
            <p>What our school and university</p>
            <h2 className="text-[clamp(20px,7vw,35px)] font-semibold text-primary leading-[1.1] mb-8">
              partners say
            </h2>
          </div>
          <div className="wrapper ">
            <Slider {...partnerSaysSettings}>
<<<<<<< HEAD
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
                        src={`../../public/img/plsp.png`}
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
              <div className="h-[425px]">
                <div className="testimonialItem bg-customGray grid grid-cols-[_2fr_1fr] top-[50%] translate-y-[-50%] items-center px-20 pt-16 pb-9 rounded-xl w-[80%] mx-auto relative ">
=======
              <div className="md:h-[425px]">
                <div className="testimonialItem bg-customGray lg:grid lg:grid-cols-[_2fr_1fr] items-center md:top-[50%] md:translate-y-[-50%] py-10 px-10 md:px-20 md:pt-16 pb-9 mb-5 rounded-xl md:w-[80%] mx-auto relative ">
>>>>>>> b4d1b37b660cea883c58b8f88d41e6cd39452047
                  <div className="theMessage  relative">
                    <div className="absolute top-[-30px] left-[-40px]">
                      <img
                        // src={`${devBaseImgUrl}/quote-white.png`}
                        src={`../../public/img//quote-white.png`}
                        className="w-[80px]"
                        alt=""
                      />
                    </div>
<<<<<<< HEAD
                    <p className="relative z-10 italic mb-4">
                      After graduating 5 years ago, I didn't have the chance to
                      apply my programming skills in my career. So, I decided to
                      further my studies at FBS. Through FBS, I was able to
                      refresh my existing knowledge and acquire new skills in
                      web development, including HTML/CSS, SASS, Tailwind,
                      Figma, WordPress, and JavaScript, which I have already
                      been using in my freelancing career.
=======
                    <p className="relative z-10 italic mb-4 min-h-[260px] md:min-h-0">
                      Frontline Business Solution has been one of STI San
                      Pablo's most trusted partners for several years. We at STI
                      are truly grateful for the exceptional knowledge and
                      experience FBS has provided to our On-the-Job trainee
                      students in IT and Engineering, as well as for the
                      kindness and support shown coming from the people of FBS.
>>>>>>> b4d1b37b660cea883c58b8f88d41e6cd39452047
                    </p>
                    <div className="logoAndName flex items-center gap-3">
                      <img
                        // src={`${devBaseImgUrl}/sti.png`}
                        className="w-[80px]"
                        src={`../../public/img/aclc.png`}
                        alt=""
                      />
                      <div className="leading-[1] italic">
                        <p>Mr. Kevin Roy N. Oreña</p>
                        <p className="text-sm">Freelancer</p>
                      </div>
                    </div>
                  </div>
<<<<<<< HEAD
                  <img
                    // src={`${devBaseImgUrl}/Client_IMG_1.png`}
                    src={`../../public/img/kevinroy-nativo.png`}
                    className="absolute bottom-0 w-[300px] right-8"
                    alt=""
                  />
                </div>
              </div>
              <div className="h-[425px]">
                <div className="testimonialItem bg-customGray grid grid-cols-[_2fr_1fr] top-[50%] translate-y-[-50%] items-center px-20 pt-16 pb-9 rounded-xl w-[80%] mx-auto relative ">
=======
                  <div className="hidden lg:block">
                    <img
                      // src={`${devBaseImgUrl}/Client_IMG_1.png`}
                      src={`../../public/img/olivia-almarez.png`}
                      className="absolute bottom-0 w-[300px] right-8"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="md:h-[425px]">
                <div className="testimonialItem bg-customGray lg:grid lg:grid-cols-[_2fr_1fr] items-center md:top-[50%] md:translate-y-[-50%] py-10 px-10 md:px-20 md:pt-16 pb-9 mb-5 rounded-xl md:w-[80%] mx-auto relative">
>>>>>>> b4d1b37b660cea883c58b8f88d41e6cd39452047
                  <div className="theMessage  relative">
                    <div className="absolute top-[-30px] left-[-40px]">
                      <img
                        // src={`${devBaseImgUrl}/quote-white.png`}
                        src={`../../public/img//quote-white.png`}
                        className="w-[80px]"
                        alt=""
                      />
                    </div>
<<<<<<< HEAD
                    <p className="relative z-10 italic mb-4">
                      The immersion program was incredibly beneficial for me. I
                      loved diving into front-end web development, learning
                      tools like Figma for prototyping and web designing, and
                      exploring CSS with SASS and Tailwind. Getting hands-on
                      experience with WordPress really boosted my confidence.
                      I’m thankful for the supportive instructors and the skills
                      I gained for my career!
=======
                    <p className="relative z-10 italic mb-4 min-h-[260px] md:min-h-0">
                      My experience at Frontline Business Solution has truly
                      been a great journey. I gained a wealth of knowledge in
                      front-end web design, equipping me with essential skills
                      in HTML, CSS, and JavaScript. Most importantly, the people
                      there are truly amazing and passionate about their work.
                      To sum it up, my experience at FBS was fun!
>>>>>>> b4d1b37b660cea883c58b8f88d41e6cd39452047
                    </p>
                    <div className="logoAndName flex items-center gap-3">
                      <img
                        // src={`${devBaseImgUrl}/sti.png`}
                        className="w-[80px]"
                        src={`../../public/img/lspu.png`}
                        alt=""
                      />
                      <div className="leading-[1] italic">
                        <p>Mr. Jake Ansel Gamaro</p>
                        <p className="text-sm">Freelancer</p>
                      </div>
                    </div>
                  </div>
<<<<<<< HEAD
                  <img
                    // src={`${devBaseImgUrl}/Client_IMG_1.png`}
                    src={`../../public/img/jake-gamaro.png`}
                    className="absolute bottom-0 w-[300px] right-8"
                    alt=""
                  />
=======
                  <div className="hidden lg:block">
                    <img
                      // src={`${devBaseImgUrl}/ariel-ferrer.png`}
                      src={`../../public/img/ariel-ferrer.png`}
                      className="absolute bottom-0 w-[300px] right-8"
                      alt=""
                    />
                  </div>
>>>>>>> b4d1b37b660cea883c58b8f88d41e6cd39452047
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default ConStudPartnersSay;
