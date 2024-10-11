import React from "react";
import { RiExternalLinkLine } from "react-icons/ri";

const WordPressPortfolio = () => {
  return (
    <>
      <section className="profolioWebsite py-40">
        <div className="customContainer">
          <div className="">
            <p>Seamless performance and stunning design</p>
            <h2 className="text-[35px] font-semibold text-primary leading-[1.1] mb-8">
              custom-built website
            </h2>
          </div>
          <div className="wrapper grid grid-rows-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div className="imageItem row-span-4 h-[180] relative overflow-hidden addShadow rounded-2xl group">
              <img
                src={`../../public/img/portfolio-gomission.png`}
                className="w-full h-full object-cover rounded-2xl group-hover:brightness-50 transition-all"
                alt=""
              />
              <div className="theLink absolute bottom-4 left-4 bg-light rounded-full px-2 opacity-0 group-hover:opacity-[100] transition-all">
                <a
                  href="#"
                  className="flex items-center gap-2 hover:text-primary"
                >
                  <RiExternalLinkLine />
                  <p>gomissiontrip.com</p>
                </a>
              </div>
            </div>
            <div className="imageItem  row-span-3 h-[180] relative overflow-hidden addShadow rounded-2xl group">
              <img
                src={`../../public/img/portfolio-tazamia.png`}
                className="w-full h-full object-cover rounded-2xl  group-hover:brightness-50"
                alt=""
              />
              <div className="theLink absolute bottom-4 left-4 bg-light rounded-full px-2 opacity-0 group-hover:opacity-[100] transition-all">
                <a
                  href="#"
                  className="flex items-center gap-2 hover:text-primary"
                >
                  <RiExternalLinkLine />
                  <p>tazamia.com</p>
                </a>
              </div>
            </div>
            <div className="imageItem row-span-6 h-[180] relative overflow-hidden addShadow rounded-2xl group">
              <img
                src={`../../public/img/portfolio-ottm.png`}
                className="w-full h-full object-cover rounded-2xl group-hover:brightness-50"
                alt=""
              />
              <div className="theLink absolute bottom-4 left-4 bg-light rounded-full px-2 opacity-0 group-hover:opacity-[100] transition-all">
                <a
                  href="#"
                  className="flex items-center gap-2 hover:text-primary"
                >
                  <RiExternalLinkLine />
                  <p>overthetop.com</p>
                </a>
              </div>
            </div>
            <div className="imageItem row-span-2 h-[180] relative overflow-hidden addShadow rounded-2xl group">
              <img
                src={`../../public/img/portfolio-ftc.png`}
                className="w-full h-full object-cover rounded-2xl group-hover:brightness-50"
                alt=""
              />
              <div className="theLink absolute bottom-4 left-4 bg-light rounded-full px-2 opacity-0 group-hover:opacity-[100] transition-all">
                <a
                  href="#"
                  className="flex items-center gap-2 hover:text-primary"
                >
                  <RiExternalLinkLine />
                  <p>facethechildren.com</p>
                </a>
              </div>
            </div>
            <div className="imageItem row-span-2 h-[180] relative overflow-hidden addShadow rounded-2xl group">
              <img
                src={`../../public/img/portfolio-worldfocus.png`}
                className="w-full h-full object-cover rounded-2xl group-hover:brightness-50"
                alt=""
              />
              <div className="theLink absolute bottom-4 left-4 bg-light rounded-full px-2 opacity-0 group-hover:opacity-[100] transition-all">
                <a
                  href="#"
                  className="flex items-center gap-2 hover:text-primary"
                >
                  <RiExternalLinkLine />
                  <p>worldfocus.com</p>
                </a>
              </div>
            </div>
            <div className="imageItem row-span-3 h-[180] relative overflow-hidden addShadow rounded-2xl group">
              <img
                src={`../../public/img/portfolio-fca.png`}
                className="w-full h-full object-cover rounded-2xl group-hover:brightness-50"
                alt=""
              />
              <div className="theLink absolute bottom-4 left-4 bg-light rounded-full px-2 opacity-0 group-hover:opacity-[100] transition-all">
                <a
                  href="#"
                  className="flex items-center gap-2 hover:text-primary"
                >
                  <RiExternalLinkLine />
                  <p>fca.com</p>
                </a>
              </div>
            </div>
            <div className="imageItem row-span-2 h-[180] relative overflow-hidden addShadow rounded-2xl group">
              <img
                src={`../../public/img/portfolio-phixgenomics.png`}
                className="w-full h-full object-cover rounded-2xl group-hover:brightness-50"
                alt=""
              />
              <div className="theLink absolute bottom-4 left-4 bg-light rounded-full px-2 opacity-0 group-hover:opacity-[100] transition-all">
                <a
                  href="#"
                  className="flex items-center gap-2 hover:text-primary"
                >
                  <RiExternalLinkLine />
                  <p>fca.com</p>
                </a>
              </div>
            </div>
            <div className="imageItem row-span-2 h-[180] relative overflow-hidden addShadow rounded-2xl group">
              <img
                src={`../../public/img/portfolio-fwc.png`}
                className="w-full h-full object-cover rounded-2xl group-hover:brightness-50"
                alt=""
              />
              <div className="theLink absolute bottom-4 left-4 bg-light rounded-full px-2 opacity-0 group-hover:opacity-[100] transition-all">
                <a
                  href="#"
                  className="flex items-center gap-2 hover:text-primary"
                >
                  <RiExternalLinkLine />
                  <p>fwc.com</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WordPressPortfolio;
