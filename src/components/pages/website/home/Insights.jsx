import React from "react";
import { BiSolidRightArrow } from "react-icons/bi";
import { insight } from "./data";
import { Link } from "react-router-dom";

const Insights = () => {
  return (
    <>
      <section className="insights py-24 bg-customGray">
        <div className="customContainer p-0 md:px-10">
          <h3 className="text-[clamp(30px,4vw,45px)] font-semibold  leading-[1.1] mb-24  text-dark text-center">
            Industry Insights
          </h3>
          <div className="wrapper  lg:grid lg:grid-cols-[_1fr_3fr] gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 order-2  mb-12 lg:mb-0">
              {insight.map((post, key) => {
                return (
                  <div key={key} className={`${post.customCss}`}>
                    <Link to={`/insight/${post.postSlug}`}>
                      <div
                        style={{
                          // backgroundImage: `url(${devBaseImgUrl}/home-bg-new.jpg)`,
                          backgroundImage: `url(../../public/img/${post.postImage})`,
                        }}
                        className={`blogItem bg-center bg-cover h-[350px] flex items-end relative  rounded-none md:rounded-xl grayscale hover:grayscale-0 transition-all group cursor-pointer`}
                      >
                        <div>
                          <div className="blogTitle relative z-[1]">
                            <h4 className="bg-[#cccccc] group-hover:bg-primary group-hover:text-light p-2 px-10 w-[250px] rounded-tr-full rounded-br-full text-dark grayscale-0 transition-all">
                              {post.postCategory}
                            </h4>
                          </div>
                          <div className="blogExcerpt p-10 relative z-[1]">
                            <p className="text-light font-bold text-lg">
                              {post.postTitle}
                            </p>
                          </div>
                        </div>
                        <div className="bottomGradient bg-gradient-to-t from-dark to-blue-500 h-[200px] w-full absolute bottom-0 block md:rounded-bl-xl md:rounded-br-xl"></div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
            <div className="order-1 px-10 md:px-0">
              <div className="mb-12">
                <h3 className="text-2xl font-semibold mb-10 text-dark">
                  Popular Posts
                </h3>
                <div className="popularPostLinks [&>ul>li]:flex [&>ul>li]:items-center [&>ul>li]:gap-4">
                  <ul className="[&>li]:my-8">
                    <li>
                      <img
                        src="../../public/img/partnerWithUs.jpg"
                        alt=""
                        className="h-[60px] w-[80px] rounded-lg object-cover"
                      />
                      <p>Top 10 Accounting software for Business</p>
                    </li>
                    <li>
                      <img
                        src="../../public/img/partnerWithUs.jpg"
                        alt=""
                        className="h-[60px] w-[80px] rounded-lg object-cover"
                      />
                      <p>Top 10 Accounting software for Business</p>
                    </li>
                    <li>
                      <img
                        src="../../public/img/partnerWithUs.jpg"
                        alt=""
                        className="h-[60px] w-[80px] rounded-lg object-cover"
                      />
                      <p>Top 10 Accounting software for Business</p>
                    </li>
                  </ul>
                  <hr />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-10 text-dark">
                  Categories
                </h3>
                <ul className="[&>li]:flex [&>li]:items-center [&>li]:gap-2 [&>li]:mb-3">
                  <li>
                    <BiSolidRightArrow className="text-primary" /> Web
                    Development
                  </li>
                  <li>
                    <BiSolidRightArrow className="text-primary" />
                    Accounting
                  </li>
                  <li>
                    <BiSolidRightArrow className="text-primary" />
                    Virtual Assistant
                  </li>
                  <li>
                    <BiSolidRightArrow className="text-primary" /> Skill
                    Development
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Insights;
