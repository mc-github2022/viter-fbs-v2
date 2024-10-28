import { default as React, useEffect } from "react";
import { BiSolidRightArrow } from "react-icons/bi";
import { LuTag } from "react-icons/lu";
import { MdOutlineCalendarToday } from "react-icons/md";
import { Link, useParams } from "react-router-dom";
import Footer from "../../../partials/Footer";
import Header from "../../../partials/Header";
import { insight } from "../home/data";
import useQueryData from "../../../custom-hooks/useQueryData";
import { devBaseImgUrl, formatDate } from "../../../helpers/functions-general";

const SingplePage = ({ itemEdit }) => {
  const {
    isFetching,
    error,
    isLoading,
    status,
    data: insightData,
  } = useQueryData(
    "/v1/insights", // endpoint
    "get", // method
    "insights" // key
  );

  const { slug } = useParams();

  const [html, setHtml] = React.useState("");
  useEffect(() => {
    if (insightData?.data.length > 0) {
      setHtml(insightData?.data[0].home_insights_paragraph_a);
    }
  }, [insightData]);

  // const [html] = React.useState(
  //   insightData?.data.length > 0
  //     ? insightData?.data[0].home_insights_paragraph_a
  //     : ""
  // );

  useEffect(() => {
    if (!insightData) return; // Early return if insightData is not yet available
  }, [slug, insightData]);

  const getInsights = () => {
    if (!insightData || !Array.isArray(insightData.data)) {
      return undefined;
    }
    return insightData.data.find(
      (item) =>
        item.home_insights_slug?.trim().toLowerCase() ===
        slug?.trim().toLowerCase()
    );
  };

  const post = getInsights();

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <>
      <Header />
      <section className="singlePost pt-40 mb-20">
        <div className="customContainer">
          <div>
            <div className="theTitle ">
              <h2 className="text-dark text-[clamp(30px,5vw,40px)] lg:w-[70%] leading-[1.3] mb-4 font-semibold">
                {post.home_insights_title}
              </h2>
            </div>
            <ul className="postInfo">
              <li className="flex items-center gap-2">
                <LuTag className="text-primary" />
                <p>{post.home_insights_category}</p>
              </li>
              <li className="flex items-center gap-2">
                <MdOutlineCalendarToday className="text-primary" />
                <p>{formatDate(post.home_insights_date)}</p>
              </li>
            </ul>
            <div className="wrapper lg:grid lg:grid-cols-[_3fr_1fr] gap-8 mt-12">
              <div className="postContent">
                <img
                  src={`../../public/img/${post.home_insights_img}`}
                  alt=""
                  className="rounded-lg object-cover mb-8 w-full max-h-[700px] object-center"
                />
                <div dangerouslySetInnerHTML={{ __html: html }}></div>
                {/* <p className="mb-4">{post.home_insights_paragraph_a}</p> */}
                {/* <p className="mb-4">{post.home_insights_paragraph_b}</p>
                <p>{post.home_insights_paragraph_c}</p> */}
              </div>
              <div className="order-1 mt-6 md:mt-0">
                <div className="mb-12">
                  <h3 className="text-2xl font-semibold mb-10 text-dark">
                    Popular Posts
                  </h3>
                  <div className="popularPostLinks">
                    <ul className="[&>li]:my-8">
                      {insightData?.data.map((popPost, key) => {
                        return (
                          <div key={key}>
                            <li className="my-5">
                              <Link
                                to={`/insight/${popPost.home_insights_slug}`}
                              >
                                <div className="flex items-center gap-4">
                                  <div className="min-w-[100px] max-w-[100px] h-[80px]">
                                    <img
                                      src={`${devBaseImgUrl}/${popPost.home_insights_img}`}
                                      alt=""
                                      className="min-w-[100px] max-w-[100px] h-[80px] rounded-lg object-cover"
                                    />
                                  </div>
                                  <div>
                                    <p>{popPost.home_insights_title}</p>
                                  </div>
                                </div>
                              </Link>
                            </li>
                          </div>
                        );
                      })}
                    </ul>
                    <hr />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-10 text-dark">
                    Categories
                  </h3>
                  <ul className="[&>li]:flex [&>li]:items-center [&>li]:gap-2 [&>li]:mb-3">
                    {insightData?.data.map((cat, key) => {
                      return (
                        <li key={key}>
                          <BiSolidRightArrow className="text-primary" />
                          {cat.home_insights_category}
                        </li>
                      );
                    })}
                  </ul>
                </div>
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
