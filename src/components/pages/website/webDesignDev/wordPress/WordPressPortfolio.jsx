import React from "react";

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
          <div className="wrapper grid grid-rows-6 grid-cols-4 gap-4">
            <div className="imageItem row-span-4 h-[180]">
              <img
                src={`../../public/img/portfolio-gomission.png`}
                className="w-full h-full object-cover"
                alt=""
              />
            </div>
            <div className="imageItem  row-span-3 h-[180]">
              <img
                src={`../../public/img/portfolio-tazamia.png`}
                className="w-full h-full object-cover"
                alt=""
              />
            </div>
            <div className="imageItem row-span-6 h-[180]">
              <img
                src={`../../public/img/portfolio-ottm.png`}
                className="w-full h-full object-cover"
                alt=""
              />
            </div>
            <div className="imageItem row-span-2 h-[180]">
              <img
                src={`../../public/img/portfolio-ftc.png`}
                className="w-full h-full object-cover"
                alt=""
              />
            </div>
            <div className="imageItem row-span-2 h-[180]">
              <img src="" className="w-full h-full object-cover" alt="" />
            </div>
            <div className="imageItem row-span-3 h-[180]">
              <img
                rc={`../../public/img/portfolio-fca.png`}
                className="w-full h-full object-cover"
                alt=""
              />
            </div>
            <div className="imageItem row-span-2 h-[180]">
              <img
                src={`../../public/img/portfolio-phixgenomics.png`}
                className="w-full h-full object-cover"
                alt=""
              />
            </div>
            <div className="imageItem row-span-2 h-[180]">
              <img src="" className="w-full h-full object-cover" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WordPressPortfolio;
