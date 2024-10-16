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
              <div className="md:h-[425px]">
                <div className="testimonialItem bg-customGray lg:grid lg:grid-cols-[_2fr_1fr] items-center md:top-[50%] md:translate-y-[-50%] py-10 px-10 md:px-20 md:pt-16 pb-9 rounded-xl md:w-[80%] mx-auto relative mb-5">
                  <div className="theMessage  relative">
                    <div className="absolute top-[-30px] left-[-40px]">
                      <img
                        // src={`${devBaseImgUrl}/quote-white.png`}
                        src={`../../public/img//quote-white.png`}
                        className="w-[80px]"
                        alt=""
                      />
                    </div>
                    <p className="relative z-10 italic mb-4 min-h-[260px]">
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
                          BS Computer Engineering Graduate <br />
                          Pamantasan ng Lungsod ng San Pablo
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="hidden lg:block">
                    <img
                      // src={`${devBaseImgUrl}/ariel-ferrer.png`}
                      src={`../../public/img/ariel-ferrer.png`}
                      className="absolute bottom-0 w-[300px] right-8"
                      alt=""
                    />
                  </div>
                </div>
              </div>

              <div className="md:h-[425px]">
                <div className="testimonialItem bg-customGray lg:grid lg:grid-cols-[_2fr_1fr] items-center md:top-[50%] md:translate-y-[-50%] py-10 px-10 md:px-20 md:pt-16 pb-9 rounded-xl md:w-[80%] mx-auto relative mb-5 ">
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
                      After graduating 5 years ago, I didn't have the chance to
                      apply my programming skills in my career. So, I decided to
                      further my studies at FBS. Through FBS, I was able to
                      refresh my existing knowledge and acquire new skills in
                      web development, including HTML/CSS, SASS, Tailwind,
                      Figma, WordPress, and JavaScript, which I have already
                      been using in my freelancing career.
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
                  <div className="hidden lg:block">
                    <img
                      // src={`${devBaseImgUrl}/Client_IMG_1.png`}
                      src={`../../public/img/kevinroy-nativo.png`}
                      className="absolute bottom-0 w-[300px] right-8"
                      alt=""
                    />
                  </div>
                </div>
              </div>

              <div className="md:h-[425px]">
                <div className="testimonialItem bg-customGray lg:grid lg:grid-cols-[_2fr_1fr] items-center md:top-[50%] md:translate-y-[-50%] py-10 px-10 md:px-20 md:pt-16 pb-9 rounded-xl md:w-[80%] mx-auto relative mb-5">
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
                      The immersion program was incredibly beneficial for me. I
                      loved diving into front-end web development, learning
                      tools like Figma for prototyping and web designing, and
                      exploring CSS with SASS and Tailwind. Getting hands-on
                      experience with WordPress really boosted my confidence.
                      I’m thankful for the supportive instructors and the skills
                      I gained for my career!
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

                  <div className="hidden lg:block">
                    <img
                      // src={`${devBaseImgUrl}/ariel-ferrer.png`}
                      src={`../../public/img/jake-gamaro.png`}
                      className="absolute bottom-0 w-[300px] right-8"
                      alt=""
                    />
                  </div>
                </div>
              </div>

              <div className="md:h-[425px]">
                <div className="testimonialItem bg-customGray lg:grid lg:grid-cols-[_2fr_1fr] items-center md:top-[50%] md:translate-y-[-50%] py-10 px-10 md:px-20 md:pt-16 pb-9 mb-5 rounded-xl md:w-[80%] mx-auto relative">
                  <div className="theMessage  relative text-sm">
                    <div className="absolute top-[-30px] left-[-40px]">
                      <img
                        // src={`${devBaseImgUrl}/quote-white.png`}
                        src={`../../public/img//quote-white.png`}
                        className="w-[80px]"
                        alt=""
                      />
                    </div>

                    <p className="relative z-10 italic mb-4 min-h-[260px] md:min-h-0">
                      My training at Frontline Business Solutions was an
                      invaluable experience that equipped me with essential
                      skills in HTML, CSS, and Javascript. The supportive and
                      professional environment made me feel empowered and ready
                      to take on future challenges in the industry. This
                      experience has truly prepared me for my career endeavors,
                      leaving me more confident in my abilities.
                    </p>
                    <div className="logoAndName flex items-center gap-3">
                      <img
                        // src={`${devBaseImgUrl}/sti.png`}
                        className="w-[80px]"
                        src={`../../public/img/plsp.png`}
                        alt=""
                      />
                      <div className="leading-[1] italic">
                        <p>Mr. Kurt Lui Balanial</p>
                        <p className="text-sm">
                          BSCpE Batch 2024 <br />
                          Pamantasan ng Lungsod ng San Pablo
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="hidden lg:block">
                    <img
                      // src={`${devBaseImgUrl}/ariel-ferrer.png`}
                      src={`../../public/img/kurt-balanial.png`}
                      className="absolute bottom-0 w-[300px] right-8"
                      alt=""
                    />
                  </div>
                </div>
              </div>

              <div className="md:h-[425px]">
                <div className="testimonialItem bg-customGray lg:grid lg:grid-cols-[_2fr_1fr] items-center md:top-[50%] md:translate-y-[-50%] py-10 px-10 md:px-20 md:pt-16 pb-9 mb-5 rounded-xl md:w-[80%] mx-auto relative">
                  <div className="theMessage  relative text-sm">
                    <div className="absolute top-[-30px] left-[-40px]">
                      <img
                        // src={`${devBaseImgUrl}/quote-white.png`}
                        src={`../../public/img//quote-white.png`}
                        className="w-[80px]"
                        alt=""
                      />
                    </div>

                    <p className="relative z-10 italic mb-4 min-h-[260px] md:min-h-0">
                      As a lifelong learner, the continuing study program at
                      Frontline Business Solutions was truly beneficial for my
                      own personal and professional growth. The Front-End
                      development training was exceptional, covering HTML, CSS,
                      and other frameworks, while also focusing on coding
                      efficiency and dynamic web design. Grateful for the
                      excellent trainers and well-structured training
                      program—truly worth it.
                    </p>
                    <div className="logoAndName flex items-center gap-3">
                      <img
                        // src={`${devBaseImgUrl}/sti.png`}
                        className="w-[80px]"
                        src={`../../public/img/lc.png`}
                        alt=""
                      />
                      <div className="leading-[1] italic">
                        <p>Mr. Jinuel Zymon Ramos</p>
                        <p className="text-sm">
                          BSCS Magna Cum Laude, Batch 2023 <br />
                          Laguna College
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="hidden lg:block">
                    <img
                      // src={`${devBaseImgUrl}/ariel-ferrer.png`}
                      src={`../../public/img/zymon-ramos.png`}
                      className="absolute bottom-0 w-[300px] right-8"
                      alt=""
                    />
                  </div>
                </div>
              </div>

              <div className="md:h-[425px]">
                <div className="testimonialItem bg-customGray lg:grid lg:grid-cols-[_2fr_1fr] items-center md:top-[50%] md:translate-y-[-50%] py-10 px-10 md:px-20 md:pt-16 pb-9 mb-5 rounded-xl md:w-[80%] mx-auto relative">
                  <div className="theMessage  relative text-sm">
                    <div className="absolute top-[-30px] left-[-40px]">
                      <img
                        // src={`${devBaseImgUrl}/quote-white.png`}
                        src={`../../public/img//quote-white.png`}
                        className="w-[80px]"
                        alt=""
                      />
                    </div>

                    <p className="relative z-10 italic mb-4 min-h-[260px] md:min-h-0">
                      I've gained a wealth of knowledge in web development
                      through my experience at Frontline Business Solutions,
                      especially their Continuing Study Program. The program’s
                      hands-on approach and structured tutorials deepened my
                      understanding of both front-end and back-end development.
                      This practical learning environment encouraged continuous
                      improvement and allowed me to confidently apply my skills
                      to real-world projects, significantly enhancing my
                      technical abilities. Thanks to this program, I am more
                      confident and better equipped to handle complex web
                      development challenges.
                    </p>
                    <div className="logoAndName flex items-center gap-3">
                      <img
                        // src={`${devBaseImgUrl}/sti.png`}
                        className="w-[80px]"
                        src={`../../public/img/plsp.png`}
                        alt=""
                      />
                      <div className="leading-[1] italic">
                        <p>Mr. Andrey Ilagan</p>
                        <p className="text-sm">
                          BSCpE Batch 2024 <br />
                          Pamantasan ng Lungsod ng San Pablo
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="hidden lg:block">
                    <img
                      // src={`${devBaseImgUrl}/ariel-ferrer.png`}
                      src={`../../public/img/andrey-ilagan.png`}
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

export default ConStudPartnersSay;
