import { default as React, useEffect } from "react";
import { BiSolidRightArrow } from "react-icons/bi";
import { LuTag } from "react-icons/lu";
import { MdOutlineCalendarToday } from "react-icons/md";
import { useParams } from "react-router-dom";
import Footer from "../../../partials/Footer";
import Header from "../../../partials/Header";
import { insight } from "../home/data";

const SingplePage = () => {
  const { slug } = useParams();

  const getInsights = () => {
    return insight.filter((item) => item.postSlug === slug)[0];
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <section className="singlePost pt-40 mb-20">
        <div className="customContainer">
          <div className="theTitle mb-">
            <h2 className="text-dark text-[40px] lg:w-[70%] leading-[1.3] mb-4 font-semibold">
              {getInsights().postTitle}
            </h2>
          </div>
          <ul className="postInfo">
            <li className="flex items-center gap-2">
              <LuTag className="text-primary" />
              <p>{getInsights().postCategory}</p>
            </li>
            <li className="flex items-center gap-2">
              <MdOutlineCalendarToday className="text-primary" />
              <p>{getInsights().postDate}</p>
            </li>
          </ul>
          <div className="wrapper grid grid-cols-[_3fr_1fr] gap-8 mt-12">
            <div className="postContent">
              <img
                src={`../../public/img/${getInsights().postImage}`}
                alt=""
                className="rounded-lg object-cover mb-8 w-full h-[700px] object-center"
              />
              <p className="mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et sit
                voluptatibus voluptatum provident, explicabo maxime officia odio
                nihil tempora vero quod esse mollitia architecto quam officiis
                quia a modi minima ullam corporis deserunt. Explicabo, ut est!
                Minima quia autem blanditiis vel consequuntur amet in
                voluptatibus nemo quas non esse vero ipsum repellat sed ea nobis
                nulla est corrupti animi vitae, repudiandae ut. Harum explicabo
                totam quia in, voluptatibus deserunt sit quod quis aliquam
                commodi, quas architecto cupiditate atque quae nisi! Eum,
                doloremque. Beatae repellat magni praesentium omnis. Non quis
                esse dolores soluta deserunt, voluptatibus necessitatibus, odit
                incidunt, impedit eligendi quia.
              </p>
              <p className="mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt tempora voluptate animi hic, reprehenderit quam
                voluptatem sed labore ullam corporis laudantium illum quibusdam
                vitae nihil temporibus? Optio dignissimos quis praesentium
                deserunt tempora quas excepturi! Dicta, suscipit laborum? Quas
                animi architecto vel dignissimos atque consequuntur omnis veniam
                dolorum, sequi recusandae rem sapiente aspernatur optio
                voluptatum! Inventore, animi? Magnam unde quod officia!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque itaque eos ducimus necessitatibus odit minus aliquid
                iste quae, ab fugiat nobis sed amet! Nesciunt numquam, nihil
                rerum natus accusamus officiis. Dolorem, amet, omnis vero, et ad
                unde ut eligendi a dicta in aperiam repudiandae facilis ipsa quo
                repellendus similique alias!
              </p>
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
      <Footer />
    </>
  );
};

export default SingplePage;
