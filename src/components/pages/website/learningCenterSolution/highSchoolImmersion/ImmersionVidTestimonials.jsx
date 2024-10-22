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
            <div className="vidItem addShadow rounded-xl z-[2] max-w-[413px]">
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
              <div className="testimonialMessage p-5 bg-customGray rounded-bl-xl rounded-br-xl relative">
                <p className="italic mb-8">
                  <RiDoubleQuotesL className="inline-block text-2xl mr-3" /> The
                  program was also very beneficial to me—I learned a lot about
                  potential jobs I could take in the future, and it helped me
                  become a better person thanks to their PLEs after almost every
                  task we completed.
                  <RiDoubleQuotesR className="inline-block text-2xl ml-3" />
                </p>
                <div className="nameAndSchool flex items-center">
                  <img
                    // src={`${devBaseImgUrl}/DLSL_Official_logo.png`}
                    src={`../../public/img/DLSL_Official_logo.png`}
                    className="w-[60px]"
                    alt=""
                  />
                  <div className="italic">
                    <p className="font-semibold">Thea Lyzette Consignado</p>
                    <p>De La Salle Lipa Trainee</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="vidItem addShadow rounded-xl z-[2] max-w-[413px]">
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
              <div className="testimonialMessage p-5 bg-customGray rounded-bl-xl rounded-br-xl">
                <p className="italic mb-8">
                  <RiDoubleQuotesL className="inline-block text-2xl mr-3" /> I
                  have learned a lot, and my overall experience will be very
                  helpful not only in my future career, but also in building and
                  shaping myself.
                  <RiDoubleQuotesR className="inline-block text-2xl ml-3" />
                </p>
                <div className="nameAndSchool flex items-center">
                  <img
                    // src={`${devBaseImgUrl}/DLSL_Official_logo.png`}
                    src={`../../public/img/DLSL_Official_logo.png`}
                    className="w-[60px]"
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
            <div className="vidItem addShadow rounded-xl z-[2] max-w-[413px]">
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
              <div className="testimonialMessage p-5 bg-customGray rounded-bl-xl rounded-br-xl">
                <p className="italic mb-8">
                  <RiDoubleQuotesL className="inline-block text-2xl mr-3" /> I
                  have learned a lot, and my overall experience will be very
                  helpful not only in my future career, but also in building and
                  shaping myself.
                  <RiDoubleQuotesR className="inline-block text-2xl ml-3" />
                </p>
                <div className="nameAndSchool flex items-center">
                  <img
                    // src={`${devBaseImgUrl}/DLSL_Official_logo.png`}
                    src={`../../public/img/DLSL_Official_logo.png`}
                    className="w-[60px]"
                    alt=""
                  />
                  <div className="italic">
                    <p className="font-semibold">Thea Lyzette Consignado</p>
                    <p>De La Salle Lipa Trainee</p>
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
