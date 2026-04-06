import { default as React, useEffect } from "react";
import { Helmet } from "react-helmet";
import { BiSolidRightArrow } from "react-icons/bi";
import { LuTag } from "react-icons/lu";
import { MdOutlineCalendarToday } from "react-icons/md";
import { Link, useNavigate, useParams } from "react-router-dom";
import useQueryData from "../../../custom-hooks/useQueryData";
import {
  devBaseImgUrl,
  devNavUrl,
  formatDate,
  getConvertStringToJSONparseData,
  getUrlParam,
  googleHDViewLink,
} from "../../../helpers/functions-general";
import Footer from "../../../partials/Footer";
import Header from "../../../partials/Header";
import LoadImages from "../../../partials/LoadImages";
import ModalContact from "../../../partials/ModalContact";
import ModalLcssForm from "../../../partials/ModalLcssForm";
import Subscribe from "../../../partials/Subscribe";
import { StoreContext } from "../../../store/StoreContext";
import ModalJobApplication from "../career/ModalJobApplication";
import BannerSliderLoader from "../home/bannerSliderLoader";
import TableLoading from "../../../partials/spinners/TableLoading";
import MetaInsights from "../home/MetaInsights";
import InsightsSliderPage from "./InsightsSliderPage";
import Slider from "react-slick/lib/slider";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      style={{
        background: "#ac1e72",
        position: "absolute",
        color: "white",
        top: "50%",
        right: "-6%",
        fontSize: "3rem",
        cursor: "pointer",
        borderRadius: "100%",
        width: "48px",
        height: "48px",
        display: "grid",
        placeItems: "center",
      }}
      onClick={onClick}
    >
      <IoIosArrowForward className="text-3xl" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      style={{
        position: "absolute",
        background: "#ac1e72",
        color: "white",
        top: "50%",
        left: "-6%",
        fontSize: "3rem",
        zIndex: "1",
        cursor: "pointer",
        borderRadius: "100%",
        width: "48px",
        height: "48px",
        display: "grid",
        placeItems: "center",
      }}
      onClick={onClick}
    >
      <IoIosArrowBack className="text-3xl" />
    </div>
  );
}

const SingplePage = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [pageName, setPageName] = React.useState("home");
  const [jobTitle, setJobTitle] = React.useState("insight");
  const [isInsightsImg, setIsInsightsImg] = React.useState(false);
  const [selectedImage, setSelectedImage] = React.useState(null);

  const [lcssForm, setLcssForm] = React.useState(false);
  const [modalJob, setModalJob] = React.useState(false);
  const [contactForm, setContactForm] = React.useState(false);

  const [modalContact, setModalContact] = React.useState(false);
  const insightId = getUrlParam().get("id");
  const navigate = useNavigate();

  const [subscribe, setSubscribe] = React.useState(() => {
    return !window.sessionStorage.getItem("subscribed"); // true if not subscribed
  });

  React.useEffect(() => {
    window.scrollTo(0, 0);
    if (window.sessionStorage.getItem("subscribed")) {
      setSubscribe(false);
    } else {
      setSubscribe(true);
    }
  }, []);

  const handleInsightsImg = (post, index) => {
    setIsInsightsImg(true);
    setSelectedImage({ id: post.home_insights_aid, index });
    document.body.classList.toggle("overflow-hidden");
  };

  const { slug } = useParams();

  const {
    isFetching,
    error,
    isLoading,
    status,
    data: insightData,
  } = useQueryData(
    `/v1/insights/${insightId}`,
    "get",
    ["insight", insightId],
    {},
    null,
    false,
    !!slug && !subscribe, // enabled
  );

  // if slug exists but no id, redirect to all-insights
  React.useEffect(() => {
    if (slug && !insightId) {
      navigate("/all-insights", { replace: true });
    }
  }, [slug, insightId, navigate]);

  var SinglePageSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: "slickNav slick-dots",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    appendDots: (dots) => (
      <div
        style={{
          borderRadius: "10px",
          padding: "10px",
          bottom: "-5rem",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: "20px",
          height: "20px",
          color: "blue",
          background: "gray",
          borderRadius: "50%",
          opacity: "50%",
        }}
      ></div>
    ),
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        },
      },
    ],
  };

  const handleModalContact = () => {
    setModalContact(!modalContact);
  };

  const handleLcssForm = () => {
    setLcssForm(true);
  };

  const handleModalJob = () => {
    setModalJob(true);
  };

  const handleContactForm = () => {
    setContactForm(true);
  };

  const [html, setHtml] = React.useState("");
  // Initial useEffect to set default html if insightData is available
  useEffect(() => {
    if (insightData?.data.length > 0) {
      setHtml(insightData?.data[0].home_insights_paragraph_a);
    }
  }, [insightData]);

  // Update html based on slug and insightData
  useEffect(() => {
    if (!insightData) return; // Early return if insightData is not yet available

    const matchingInsight = insightData.data.find(
      (item) =>
        item.home_insights_slug?.trim().toLowerCase() ===
        slug?.trim().toLowerCase(),
    );

    if (matchingInsight) {
      setHtml(matchingInsight.home_insights_paragraph_a);
    } else {
      setHtml(""); // Clear HTML if no match is found
    }
  }, [slug, insightData]);

  // Function to get the post based on slug
  const getInsights = () => {
    if (!insightData || !Array.isArray(insightData.data)) {
      return undefined;
    }
    return insightData.data.find(
      (item) =>
        item.home_insights_slug?.trim().toLowerCase() ===
        slug?.trim().toLowerCase(),
    );
  };

  const post = getInsights();

  // ignore `insightData` if subscribe is true
  if (subscribe) {
    return (
      <Subscribe
        setSubscribe={setSubscribe}
        notification_purpose="subscribers"
      />
    );
  }

  if (!post) {
    return "";
  }

  const insightsSliderImages = post?.home_insights_img_list
    ? getConvertStringToJSONparseData(post.home_insights_img_list)
    : [];

  return (
    <>
      <Header services={"default"} page={"Home"} />
      <section className="singlePost pt-20 md:pt-40 mb-20">
        <div className="customContainer">
          {isLoading || isFetching ? (
            <div className="w-full relative ">
              <div className="pb-5 flex flex-col gap-2 ">
                <BannerSliderLoader
                  cols={1}
                  count={1}
                  className={"h-10 rounded-xl "}
                />
                <BannerSliderLoader
                  cols={1}
                  count={1}
                  className={"h-10 rounded-xl max-w-[650px]"}
                />
                <BannerSliderLoader
                  cols={1}
                  count={1}
                  className={"h-[500px] rounded-xl  mb-8 "}
                />
                <TableLoading cols={1} count={10} classNameGrid={"gap-6"} />

                <BannerSliderLoader
                  cols={1}
                  count={1}
                  className="h-10 max-w-36 pt-5"
                />
              </div>
            </div>
          ) : (
            <>
              <div>
                <div className="theTitle ">
                  <h2 className="text-dark text-[clamp(30px,5vw,40px)] leading-[1.3] mb-4 font-semibold">
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
                <div className="wrapper gap-8 mt-12">
                  <div className="postContent">
                    <div className="relative w-full min-h-[200px] md:max-h-[500px]">
                      {/* {insightsImages.map((image, index) => (
                        <LoadImages
                          url={`${googleHDViewLink}${image?.id}`}
                          alt={`${post.home_insights_title}`}
                          className="rounded-lg object-cover mb-8 w-full min-h-[200px] md:max-h-[500px] object-center"
                          key={index}
                        />
                      ))} */}
                      <img
                        src={`${devBaseImgUrl}/${post.home_insights_img}`}
                        alt={`${post.home_insights_title}`}
                        className="rounded-lg object-cover mb-8 w-full min-h-[200px] md:max-h-[500px] object-center"
                      />
                    </div>
                    <div
                      dangerouslySetInnerHTML={{ __html: html }}
                      className="mt-8"
                    ></div>
                    <div className="mx-auto mt-10 mb-16 max-w-[90%]">
                      {insightsSliderImages.length > 1 ? (
                        <Slider {...SinglePageSettings}>
                          {insightsSliderImages.map((image, index) => (
                            <div key={index}>
                              <a onClick={() => handleInsightsImg(post, index)}>
                                <div
                                  style={{
                                    backgroundImage: `url(${googleHDViewLink}${image?.id})`,
                                  }}
                                  className="blogItem bg-center bg-cover h-[400px] w-[270px] md:w-[500px] sm:w-[320px] flex items-end relative rounded-xl 
                 hover:grayscale-0 transition-all group cursor-pointer place-self-center"
                                >
                                  {/* <div className="bottomGradient bg-gradient-to-t from-[#000] !to-[transparent] h-[200px] md:h-[300px] w-full absolute bottom-0 block rounded-bl-xl rounded-br-xl"></div> */}
                                </div>
                              </a>
                            </div>
                          ))}
                        </Slider>
                      ) : insightsSliderImages.length === 1 ? (
                        <a onClick={() => handleInsightsImg(post, 0)}>
                          <div
                            className=" h-[330px] w-[450px]
                grayscale hover:grayscale-0 transition-all group cursor-pointer place-self-center relative rounded-xl"
                          >
                            <LoadImages
                              url={`${googleHDViewLink}${insightsSliderImages[0].id}`}
                              alt="Successful, Industry-Ready Batches."
                            />
                          </div>
                        </a>
                      ) : (
                        ""
                      )}
                    </div>
                    {post.home_insights_cta_is_active ? (
                      post.home_insights_form_selected ===
                      "default-receiver" ? (
                        <button
                          onClick={handleContactForm}
                          className="btn bg-gradient-to-r uppercase hover:duration-500 hover:bg-gradient-to-r text-light my-5  lg:block rounded-full  from-secondary to-secondary hover:to-primary"
                        >
                          {post.home_insights_cta_text
                            ? post.home_insights_cta_text
                            : "CONTACT US"}
                        </button>
                      ) : // <p>default</p>
                      "" ||
                        post.home_insights_form_selected === "apply-now-lcs" ? (
                        <button
                          onClick={handleLcssForm}
                          className="btn bg-gradient-to-r uppercase hover:duration-500 hover:bg-gradient-to-r text-light my-5  lg:block rounded-full  from-secondary to-secondary hover:to-primary"
                        >
                          {post.home_insights_cta_text
                            ? post.home_insights_cta_text
                            : "CONTACT US"}
                        </button>
                      ) : // <p>lcss</p>
                      "" ||
                        post.home_insights_form_selected ===
                          "apply-now-careers" ? (
                        <button
                          onClick={handleModalJob}
                          className="btn bg-gradient-to-r uppercase hover:duration-500 hover:bg-gradient-to-r text-light my-5  lg:block rounded-full  from-secondary to-secondary hover:to-primary"
                        >
                          {post.home_insights_cta_text
                            ? post.home_insights_cta_text
                            : "CONTACT US"}
                        </button>
                      ) : (
                        // <p>careers</p>
                        ""
                      )
                    ) : (
                      <p></p>
                    )}
                  </div>
                </div>
              </div>
              <Link
                className=" uppercase hover:duration-500 hover:text-primary underline "
                to={`${devNavUrl}/all-insights`}
              >
                View All Insights
              </Link>
            </>
          )}
        </div>
      </section>
      {isInsightsImg && (
        <InsightsSliderPage
          setIsInsightsImg={setIsInsightsImg}
          selectedImage={selectedImage}
        />
      )}
      <Footer />
      {contactForm && (
        <ModalContact
          thePageName={pageName}
          setContactForm={setContactForm}
          setModalContact={setModalContact}
        />
      )}
      {lcssForm && (
        <ModalLcssForm thePageName={pageName} setLcssForm={setLcssForm} />
      )}
      {modalJob && (
        <ModalJobApplication
          setModalJob={setModalJob}
          jobTitle={jobTitle}
          modalJob={modalJob}
        />
      )}

      {insightData && <MetaInsights insightId={insightId} />}
    </>
  );
};

export default SingplePage;
