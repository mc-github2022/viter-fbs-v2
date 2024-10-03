import React from "react";
import { FaRegCircleCheck } from "react-icons/fa6";
import { webAppOverview } from "./data";

const VaMarketingOverview = () => {
  return (
    <>
      <section className="VaMarketingOverview py-20 ">
        <div className="customContainer">
          <p>{webAppOverview[0].subtitle}</p>
          <h2 className="text-[35px] leading-[1.1] mb-12 text-light">
            <span className="font-semibold text-primary">
              {webAppOverview[0].mainTitle}
            </span>
          </h2>
          <div className="wrapper grid grid-cols-2 gap-12 items-center">
            <div>
              <img
                // src={`${devBaseImgUrl}/vaOverviewImage.jpg`}
                src={`../../public/img/${webAppOverview[0].webAppImage}`}
                className="mb-12 md:mb-0 h-full object-cover"
                alt=""
              />
            </div>
            <div>
              <ul>
                <li className="flex items-start gap-4 text-dark mb-6">
                  <div className="flex gap-4 items-start">
                    <div>
                      <FaRegCircleCheck className="circleCheck text-primary text-[30px] bg-gradient-to-r from-primary to-secondary bg-clip-text text-[transparent]" />
                    </div>
                    <div>
                      <h3 className="text-primary bg-gradient-to-r from-primary to-secondary bg-clip-text text-[transparent] text-2xl mb-3">
                        {webAppOverview[0].overviewAtitle}
                      </h3>
                      <p>{webAppOverview[0].overviewAtext}</p>
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-4 text-dark mb-6">
                  <div className="flex gap-4 items-start">
                    <div>
                      <FaRegCircleCheck className="circleCheck text-primary text-[30px] bg-gradient-to-r from-primary to-secondary bg-clip-text text-[transparent]" />
                    </div>
                    <div>
                      <h3 className="text-primary bg-gradient-to-r from-primary to-secondary bg-clip-text text-[transparent] text-2xl mb-3">
                        {webAppOverview[0].overviewBtitle}
                      </h3>
                      <p>{webAppOverview[0].overviewBtext}</p>
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-4 text-dark">
                  <div className="flex gap-4 items-start">
                    <div>
                      <FaRegCircleCheck className="circleCheck text-primary text-[30px] bg-gradient-to-r from-primary to-secondary bg-clip-text text-[transparent]" />
                    </div>
                    <div>
                      <h3 className="text-primary bg-gradient-to-r from-primary to-secondary bg-clip-text text-[transparent] text-2xl mb-3">
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

export default VaMarketingOverview;
