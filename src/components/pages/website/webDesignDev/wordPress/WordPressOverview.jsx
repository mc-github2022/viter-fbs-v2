import React from "react";
import { FaFileDownload } from "react-icons/fa";
import { FaRegCircleCheck } from "react-icons/fa6";
import { webAppOverview } from "./data";

const WordPressOverview = () => {
  return (
    <>
      <section className="WordPressOverview py-20 bg-customGray">
        <div className="customContainer">
          <p>{webAppOverview[0].subtitle}</p>
          <h2 className="text-[clamp(20px,7vw,35px)] leading-[1.1] mb-12 text-light">
            <span className="font-semibold text-primary">
              {webAppOverview[0].mainTitle}
            </span>
          </h2>
          <div className="wrapper lg:grid lg:grid-cols-2 gap-12">
            <div>
              <img
                // src={`${devBaseImgUrl}/HRISscreenShot.png`}
                src={`../../public/img/${webAppOverview[0].webAppImage}`}
                className="mb-12"
                alt=""
              />
              <ul className="flex flex-col md:flex md:flex-row items-center gap-12">
                <li>
                  <a
                    href="#"
                    className="btn bg-primary text-light font-semibold"
                  >
                    {webAppOverview[0].btnText}
                  </a>
                </li>
                <li>
                  {/* <a
                    href="#"
                    className="flex items-center gap-2 font-bold text-primary"
                  >
                    {webAppOverview[0].btnDownloadText} <FaFileDownload />
                  </a> */}
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li className="flex items-start gap-4 text-dark mb-6">
                  <div className="flex gap-4 items-start">
                    <div>
                      <FaRegCircleCheck className="circleCheck text-primary text-[clamp(25px,5vw,30px)] bg-gradient-to-r from-primary to-secondary bg-clip-text text-[transparent]" />
                    </div>
                    <div>
                      <h3 className="text-primary bg-gradient-to-r from-primary to-secondary bg-clip-text text-[transparent] text-[clamp(16px,5vw,24px)] mb-3">
                        {webAppOverview[0].overviewAtitle}
                      </h3>
                      <p>{webAppOverview[0].overviewAtext}</p>
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-4 text-dark mb-6">
                  <div className="flex gap-4 items-start">
                    <div>
                      <FaRegCircleCheck className="circleCheck text-primary text-[clamp(25px,5vw,30px)] bg-gradient-to-r from-primary to-secondary bg-clip-text text-[transparent]" />
                    </div>
                    <div>
                      <h3 className="text-primary bg-gradient-to-r from-primary to-secondary bg-clip-text text-[transparent] text-[clamp(16px,5vw,24px)] mb-3">
                        {webAppOverview[0].overviewBtitle}
                      </h3>
                      <p>{webAppOverview[0].overviewBtext}</p>
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-4 text-dark">
                  <div className="flex gap-4 items-start">
                    <div>
                      <FaRegCircleCheck className="circleCheck text-primary text-[clamp(25px,5vw,30px)] bg-gradient-to-r from-primary to-secondary bg-clip-text text-[transparent]" />
                    </div>
                    <div>
                      <h3 className="text-primary bg-gradient-to-r from-primary to-secondary bg-clip-text text-[transparent] text-[clamp(16px,5vw,24px)] mb-3">
                        {webAppOverview[0].overviewCtitle}
                      </h3>
                      <p>{webAppOverview[0].overviewCtext}</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WordPressOverview;
