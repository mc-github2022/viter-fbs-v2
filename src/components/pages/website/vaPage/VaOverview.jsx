import React from "react";
import { devBaseImgUrl } from "../../../helpers/functions-general";
import { FaFileDownload } from "react-icons/fa";
import { FaRegCircleCheck } from "react-icons/fa6";

const VaOverview = () => {
  return (
    <>
      <section className="partnersWithUs py-20 ">
        <div className="customContainer">
          <p> Here's why we're the</p>
          <h2 className="text-[35px] leading-[1.1] mb-12 text-light">
            <span className="font-semibold text-primary">
              right choice for your VA needs.
            </span>
          </h2>
          <div className="wrapper grid grid-cols-2 gap-12 items-center">
            <div>
              <img
                // src={`${devBaseImgUrl}/vaOverviewImage.jpg`}
                src={`../../public/img/vaOverviewImage.jpg`}
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
                        Fast turnaround time
                      </h3>
                      <p>
                        We deliver websites quickly, ensuring your project meets
                        deadlines without compromising quality
                      </p>
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
                        Optimal Viewing and Interaction
                      </h3>
                      <p>
                        Our responsive designs ensure seamless viewing and
                        Interaction across all devices for an engaging user
                        experience.
                      </p>
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
                        High-Quality at Lower Costs
                      </h3>
                      <p>
                        We offer high-quality websitels at competitive prices,
                        delivering excellence results while staying within your
                        budget.
                      </p>
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

export default VaOverview;
