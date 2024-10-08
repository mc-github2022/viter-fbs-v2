import React from "react";
import { devBaseImgUrl } from "../../../helpers/functions-general";
import { FaFileDownload } from "react-icons/fa";
import { FaRegCircleCheck } from "react-icons/fa6";

const WhyUsCompanyProfile = () => {
  return (
    <>
      <div className="whyUsIntro py-20">
        <div className="customContainer">
          <h2 className="text-3xl text-center">
            By Choosing Frontline Bussiness Solutions, you align your business
            with a purpose-driven organization that combines business excellence
            with Christian values.
          </h2>
        </div>
      </div>

      <section className="partnersWithUs py-20 ">
        <div className="customContainer">
          <p> Here are the</p>
          <h2 className="text-[35px] leading-[1.1] mb-12 text-light">
            <span className="font-semibold text-primary">
              major areas of our impact
            </span>
          </h2>
          <div className="wrapper grid grid-cols-2 gap-12">
            <div>
              <img
                // src={`${devBaseImgUrl}/lcssBannerImg.jpg`}
                src={`../../public/img//asian-children.jpg`}
                className="mb-12"
                alt=""
              />
              <ul className="flex items-center gap-12">
                <li>
                  <a
                    href="#"
                    className="btn bg-primary text-light font-semibold"
                  >
                    PARTNER WITH US
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center gap-2 font-bold text-primary text-xl"
                  >
                    Company Profile <FaFileDownload />
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li className="flex items-start gap-4 text-dark mb-8">
                  <div className="flex gap-4 items-start">
                    <div>
                      <h3 className="textGradient text-2xl mb-1">
                        <span className="font-bold">CARING</span> for Abandonded
                        Children
                      </h3>
                      <p>
                        In partnership with Face the Children, we provide love,
                        care and hope for vulnerable children at the Frontline
                        orphanage.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-4 text-dark mb-8">
                  <div className="flex gap-4 items-start">
                    <div>
                      <h3 className="textGradient text-2xl mb-1">
                        <span className="font-bold">CREATING</span> Jobs and
                        Supoprting Local Families
                      </h3>
                      <p>
                        We generate new employment opportunities yearly,
                        empowering families and supporting thriving local
                        communities.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-4 text-dark mb-8">
                  <div className="flex gap-4 items-start">
                    <div>
                      <h3 className="textGradient text-2xl mb-1">
                        <span className="font-bold">PROVIDING</span> Christian
                        Education
                      </h3>
                      <p>
                        Through Frontline Christian Academy, we support the
                        development of future leaders grounded in academic
                        excellence and Christian values.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-4 text-dark">
                  <div className="flex gap-4 items-start">
                    <div>
                      <h3 className="textGradient text-2xl mb-1">
                        <span className="font-bold">SUPPORTING</span> Ministry
                        Work
                      </h3>
                      <p>
                        We partner with Frontline Worship Center to plant
                        churches and spread faith, helping build strong
                        spiritual communities
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

export default WhyUsCompanyProfile;
