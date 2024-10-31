import React from "react";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

const ImmersionVidTestimonials = () => {
  return (
    <>
      <section className="ImmersionVidTestimonials py-20 bg-[#000000] relative overflow-hidden">
        <div className="footerGradientBlack absolute h-[1000px] w-full bottom-[-30%] right-[-30%]"></div>
        <div className="absolute bg-light h-[180px] w-full bottom-0 z-[1]"></div>
        <div className="customContainer">
          <div className="mb-20 text-center relative z-[3]">
            <p className="text-light">Here are our</p>
            <h3 className="text-[clamp(20px,7vw,35px)] font-semibold leading-[1.1] text-light">
              Trainees Work Experience
            </h3>
          </div>
          <div className="wrapper flex flex-wrap place-content-center lg:grid lg:grid-cols-3 gap-6">
            <div className="vidItem addShadow rounded-xl z-[2] max-w-[413px] bg-customGray relative">
              <iframe
                id="player"
                class="w-full h-[223px] rounded-tl-xl rounded-tr-xl"
                src="https://www.youtube.com/embed/MlBrBmufpy4?si=tDU-2bcyfzUFNe3T"
                title="Marks story"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
                loading="lazy"
              ></iframe>
              <div className="testimonialMessage p-5 bg-customGray rounded-bl-xl rounded-br-xl relative min-h-[350px] flex flex-col justify-between ">
                <p className="italic ">
                  <RiDoubleQuotesL className="inline-block text-2xl mr-3" /> The
                  program was also very beneficial to me—I learned a lot about
                  potential jobs I could take in the future, and it helped me
                  become a better person thanks to their PLEs after almost every
                  task we completed.
                  <RiDoubleQuotesR className="inline-block text-2xl ml-3" />
                </p>
                <div className="nameAndSchool mt-10 text-center ">
                  <img
                    // src={`${devBaseImgUrl}/DLSL_Official_logo.png`}
                    src={`../../public/img/slis.png`}
                    className="w-[60px] mx-auto -translate-y-5"
                    alt=""
                  />
                  <div className="italic">
                    <p className="font-semibold">Christian Jaekhob Dela Cruz</p>
                    <p>Grade 12 HUMSS</p>
                    <p>South Lakes Integrated School</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="vidItem addShadow rounded-xl z-[2] max-w-[413px] bg-customGray relative">
              <iframe
                id="player"
                class="w-full h-[223px] rounded-tl-xl rounded-tr-xl"
                src="https://www.youtube.com/embed/-OI3L6mWmsA?si=IgdftJp8Ike8Cju-"
                title="Marks story"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
                loading="lazy"
              ></iframe>
              <div className="testimonialMessage p-5 bg-customGray rounded-bl-xl rounded-br-xl min-h-[350px] flex flex-col justify-between ">
                <p className="italic ">
                  <RiDoubleQuotesL className="inline-block text-2xl mr-3" /> I
                  had a very enjoyable experience here at FBS. Everything we did
                  at FBS was truly enjoyable, from web designing using Figma to
                  creating our own websites with HTML and CSS.
                  <RiDoubleQuotesR className="inline-block text-2xl ml-3" />
                </p>
                <div className="nameAndSchool mt-10 text-center ">
                  <img
                    // src={`${devBaseImgUrl}/DLSL_Official_logo.png`}
                    src={`../../public/img/SPC.png`}
                    className="w-[60px] mx-auto -translate-y-5"
                    alt=""
                  />
                  <div className="italic">
                    <p className="font-semibold">Justine Clein Gelindon</p>
                    <p>Grade 12 ICT</p>
                    <p>San Pablo Colleges</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="vidItem addShadow rounded-xl z-[2] max-w-[413px] bg-customGray relative">
              <iframe
                id="player"
                class="w-full h-[223px] rounded-tl-xl rounded-tr-xl"
                src="https://www.youtube.com/embed/GJNpd6naWUI?si=7yrngP6PCULApJBU"
                title="Marks story"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
                loading="lazy"
              ></iframe>
              <div className="testimonialMessage p-5 bg-customGray rounded-bl-xl rounded-br-xl min-h-[350px] flex flex-col justify-between ">
                <p className="italic ">
                  <RiDoubleQuotesL className="inline-block text-2xl mr-3" /> My
                  experience was very fun, and all the trainers were kind and
                  approachable. I highly recommend the FBS work immersion
                  program because you will learn a lot here.
                  <RiDoubleQuotesR className="inline-block text-2xl ml-3" />
                </p>
                <div className="nameAndSchool mt-10 text-center ">
                  <img
                    // src={`${devBaseImgUrl}/DLSL_Official_logo.png`}
                    src={`../../public/img/MFMC.png`}
                    className="w-[60px] mx-auto -translate-y-5"
                    alt=""
                  />
                  <div className="italic">
                    <p className="font-semibold">Althea Mae Lat</p>
                    <p>Grade 12 HUMSS</p>
                    <p>Marcelino Fule Memorial College</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ImmersionVidTestimonials;
