import React from "react";
import { RiExternalLinkLine } from "react-icons/ri";

const WordPressPortfolio = () => {
  return (
    <>
      <section className="profolioWebsite md:py-40">
        <div className="customContainer">
          <div className="">
            <p>Seamless performance and stunning design</p>
            <h2 className="text-[clamp(20px,7vw,35px)] font-semibold text-primary leading-[1.1] mb-8">
              custom-built website
            </h2>
          </div>
          <div className="wrapper grid grid-rows-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div className="imageItem row-span-4 h-[180] relative overflow-hidden addShadow rounded-2xl group bg-transparent">
              <a href="https://www.gomissiontrip.com/">
                <img
                  src={`../../public/img/portfolio-gomission.png`}
                  className="w-full h-full object-cover rounded-2xl group-hover:brightness-50 transition-all"
                  alt=""
                />
                <div className="theLink flex items-center gap-2 hover:text-primary absolute bottom-4 left-4 bg-light rounded-full px-2 opacity-0 group-hover:opacity-[100] transition-all">
                  <RiExternalLinkLine />
                  <p>gomissiontrip.com</p>
                </div>
              </a>
            </div>
            <div className="imageItem  row-span-3 h-[180] relative overflow-hidden addShadow rounded-2xl group">
              <a href="https://tazamiacoffee.com/">
                <img
                  src={`../../public/img/portfolio-tazamia.png`}
                  className="w-full h-full object-cover rounded-2xl  group-hover:brightness-50"
                  alt=""
                />
                <div className="theLink flex items-center gap-2 hover:text-primary absolute bottom-4 left-4 bg-light rounded-full px-2 opacity-0 group-hover:opacity-[100] transition-all">
                  <RiExternalLinkLine />
                  <p>tazamiacoffee.com</p>
                </div>
              </a>
            </div>
            <div className="imageItem row-span-6 h-[180] relative overflow-hidden addShadow rounded-2xl group">
              <a href="https://www.overthetop.com/">
                <img
                  src={`../../public/img/portfolio-ottm.png`}
                  className="w-full h-full object-cover rounded-2xl group-hover:brightness-50"
                  alt=""
                />
                <div className="theLink flex items-center gap-2 hover:text-primary absolute bottom-4 left-4 bg-light rounded-full px-2 opacity-0 group-hover:opacity-[100] transition-all">
                  <RiExternalLinkLine />
                  <p>overthetop.com</p>
                </div>
              </a>
            </div>
            <div className="imageItem row-span-2 h-[180] relative overflow-hidden addShadow rounded-2xl group">
              <a href="https://facethechildren.org/">
                <img
                  src={`../../public/img/portfolio-ftc.png`}
                  className="w-full h-full object-cover rounded-2xl group-hover:brightness-50"
                  alt=""
                />
                <div className="theLink flex items-center gap-2 hover:text-primary absolute bottom-4 left-4 bg-light rounded-full px-2 opacity-0 group-hover:opacity-[100] transition-all">
                  <RiExternalLinkLine />
                  <p>facethechildren.org</p>
                </div>
              </a>
            </div>
            <div className="imageItem row-span-2 h-[180] relative overflow-hidden addShadow rounded-2xl group">
              <a href="https://www.worldfocusinc.com/">
                <img
                  src={`../../public/img/portfolio-worldfocus.png`}
                  className="w-full h-full object-cover rounded-2xl group-hover:brightness-50"
                  alt=""
                />
                <div className="theLink flex items-center gap-2 hover:text-primary absolute bottom-4 left-4 bg-light rounded-full px-2 opacity-0 group-hover:opacity-[100] transition-all">
                  <RiExternalLinkLine />
                  <p>worldfocusinc.com</p>
                </div>
              </a>
            </div>
            <div className="imageItem row-span-3 h-[180] relative overflow-hidden addShadow rounded-2xl group">
              <a href="https://fca.edu.ph/">
                <img
                  src={`../../public/img/portfolio-fca.png`}
                  className="w-full h-full object-cover rounded-2xl group-hover:brightness-50"
                  alt=""
                />
                <div className="theLink flex items-center gap-2 hover:text-primary absolute bottom-4 left-4 bg-light rounded-full px-2 opacity-0 group-hover:opacity-[100] transition-all">
                  <RiExternalLinkLine />
                  <p>fca.edu.ph</p>
                </div>
              </a>
            </div>
            <div className="imageItem row-span-2 h-[180] relative overflow-hidden addShadow rounded-2xl group">
              <a href="https://phixgenomics.com/">
                <img
                  src={`../../public/img/portfolio-phixgenomics.png`}
                  className="w-full h-full object-cover rounded-2xl group-hover:brightness-50"
                  alt=""
                />
                <div className="theLink flex items-center gap-2 hover:text-primary absolute bottom-4 left-4 bg-light rounded-full px-2 opacity-0 group-hover:opacity-[100] transition-all">
                  <RiExternalLinkLine />
                  <p>phixgenomics.com</p>
                </div>
              </a>
            </div>
            <div className="imageItem row-span-2 h-[180] relative overflow-hidden addShadow rounded-2xl group">
              <a href="https://frontlineworshipcenter.org/">
                <img
                  src={`../../public/img/portfolio-fwc.png`}
                  className="w-full h-full object-cover rounded-2xl group-hover:brightness-50"
                  alt=""
                />
                <div className="theLink flex items-center gap-2 hover:text-primary absolute bottom-4 left-4 bg-light rounded-full px-2 opacity-0 group-hover:opacity-[100] transition-all">
                  <RiExternalLinkLine />
                  <p>frontlineworshipcenter.org</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WordPressPortfolio;
