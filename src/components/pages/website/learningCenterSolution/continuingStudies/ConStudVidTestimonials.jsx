import React from "react";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

const ConStudVidTestimonials = () => {
  return (
    <>
      <section className="ConStudVidTestimonials py-20 bg-[#000000] relative overflow-hidden">
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
            <div className="vidItem addShadow rounded-xl z-[2] max-w-[413px] bg-customGray relative ">
              <iframe
                id="player"
                className="w-full h-[223px] rounded-tl-xl rounded-tr-xl"
                src="https://www.youtube.com/embed/xnHrbjA0WZY?si=1cz7EVt0A5_8bXR4"
                title="Marks story"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
              ></iframe>
              <div className="testimonialMessage p-5 bg-customGray rounded-bl-xl rounded-br-xl relative flex flex-col justify-between">
                <p className="italic mb-24 min-h-[120px]">
                  <RiDoubleQuotesL className="inline-block text-2xl mr-3" /> It
                  is fulfilling, especially learning tools like SASS, Tailwind,
                  WordPress, and Figma. Aside from the technical skills, they
                  taught us how to act professionally in a working environment.
                  <RiDoubleQuotesR className="inline-block text-2xl ml-3" />
                </p>
                <div className=" absolute bottom-0 p-5 nameAndSchool flex items-center">
                  <img
                    // src={`${devBaseImgUrl}/DLSL_Official_logo.png`}
                    src={`../../public/img/lc.png`}
                    className="w-[60px] mr-4"
                    alt=""
                  />
                  <div className="italic">
                    <p className="font-semibold">Paul Reinier Vista</p>
                    <p>Upskill Trainee</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="vidItem addShadow rounded-xl z-[2] max-w-[413px] bg-customGray relative">
              <iframe
                id="player"
                className="w-full h-[223px] rounded-tl-xl rounded-tr-xl"
                src="https://www.youtube.com/embed/PnBWVserVps?si=bj7eBCzlhNWlp9Vm"
                title="Marks story"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
              ></iframe>
              <div className="testimonialMessage p-5 bg-customGray rounded-bl-xl rounded-br-xl flex flex-col justify-between">
                <p className="italic mb-24 min-h-[120px]">
                  <RiDoubleQuotesL className="inline-block text-2xl mr-3" /> To
                  all college graduates, I encourage you to pursue your
                  continuing studies and training here at FBS. This will help
                  you prepare professionally to join the competitive tech
                  industry.
                  <RiDoubleQuotesR className="inline-block text-2xl ml-3" />
                </p>
                <div className=" absolute bottom-0 p-5 nameAndSchool flex items-center">
                  <img
                    // src={`${devBaseImgUrl}/DLSL_Official_logo.png`}
                    src={`../../public/img/lc.png`}
                    className="w-[60px] mr-4"
                    alt=""
                  />
                  <div className="italic">
                    <p className="font-semibold">Jinuel Zymon I. Ramos</p>
                    <p>BSCS Graduate</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="vidItem addShadow rounded-xl z-[2] max-w-[413px] bg-customGray relative">
              <iframe
                id="player"
                className="w-full h-[223px] rounded-tl-xl rounded-tr-xl"
                src="https://www.youtube.com/embed/u-XPdxpKosw?si=uZKIEb3hA3vfm30L"
                title="Marks story"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
              ></iframe>
              <div className="testimonialMessage p-5 bg-customGray rounded-bl-xl rounded-br-xl flex flex-col justify-between">
                <p className="italic mb-24 min-h-[120px]">
                  <RiDoubleQuotesL className="inline-block text-2xl mr-3" /> My
                  training here at FBS has been an invaluable experience that
                  equipped me with essential skills in front-end and back-end
                  development. Beyond that, the environment and professionalism
                  at FBS have empowered me and prepared me to take on future
                  challenges in the tech industry.
                  <RiDoubleQuotesR className="inline-block text-2xl ml-3" />
                </p>
                <div className=" absolute bottom-0 p-5 nameAndSchool flex items-center">
                  <img
                    // src={`${devBaseImgUrl}/DLSL_Official_logo.png`}
                    src={`../../public/img/plsp.png`}
                    className="w-[60px] mr-4"
                    alt=""
                  />
                  <div className="italic">
                    <p className="font-semibold">Kurt Lui Juan Balanial</p>
                    <p>PLSP Graduate</p>
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

export default ConStudVidTestimonials;
