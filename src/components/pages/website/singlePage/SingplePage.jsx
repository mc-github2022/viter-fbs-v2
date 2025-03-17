import { default as React, useEffect } from "react";
import { BiSolidRightArrow } from "react-icons/bi";
import { LuTag } from "react-icons/lu";
import { MdOutlineCalendarToday } from "react-icons/md";
import { Link, useParams } from "react-router-dom";
import Footer from "../../../partials/Footer";
import Header from "../../../partials/Header";
import { insight } from "../home/data";
import useQueryData from "../../../custom-hooks/useQueryData";
import {
  devBaseImgUrl,
  devNavUrl,
  formatDate,
  getConvertStringToJSONparseData,
  googleHDViewLink,
} from "../../../helpers/functions-general";
import Subscribe from "../../../partials/Subscribe";
import { StoreContext } from "../../../store/StoreContext";
import ModalSuccess from "../../../partials/modals/ModalSuccess";
import ModalError from "../../../partials/modals/ModalError";
import LoadImages from "../../../partials/LoadImages";
import ModalContact from "../../../partials/ModalContact";
import ModalLcssForm from "../../../partials/ModalLcssForm";
import ModalJobApplication from "../career/ModalJobApplication";
import { Helmet } from "react-helmet";

const SingplePage = () => {
  const { store, dispatch } = React.useContext(StoreContext);
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
  const [pageName, setPageName] = React.useState("home");
  const [subscribe, setSubscribe] = React.useState(false);
  const [jobTitle, setJobTitle] = React.useState("insight");

  const [lcssForm, setLcssForm] = React.useState(false);
  const [modalJob, setModalJob] = React.useState(false);
  const [contactForm, setContactForm] = React.useState(false);

  const [modalContact, setModalContact] = React.useState(false);
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

  React.useEffect(() => {
    window.scrollTo(0, 0);
    if (window.sessionStorage.getItem("subscribed")) {
      setSubscribe(subscribe);
    } else {
      setSubscribe(!subscribe);
    }
  }, []);

  const { slug } = useParams();

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
        slug?.trim().toLowerCase()
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
        slug?.trim().toLowerCase()
    );
  };

  const post = getInsights();

  if (!post) {
    return "";
  }

  const insightsImages =
    getConvertStringToJSONparseData(post.home_insights_img) || [];

  const insightImgId = insightsImages.map((img) => img.id);

  return (
    <>
      <Header />
      <div>
        <Helmet>
          <title>{post.home_insights_title}</title>
          <meta property="og:title" content={post.home_insights_title} />
          <meta
            property="og:image"
            content={`${googleHDViewLink}${insightImgId}`}
          />
          <meta property="og:type" content="article" />
        </Helmet>
      </div>
      <section className="singlePost pt-20 md:pt-40 mb-20">
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
                {insightsImages.map((image, index) => (
                  <LoadImages
                    url={`${googleHDViewLink}${image?.id}`}
                    alt={`${post.home_insights_title}`}
                    className="rounded-lg object-cover mb-8 w-full max-h-[500px] object-center"
                    key={index}
                  />
                ))}
                <div dangerouslySetInnerHTML={{ __html: html }}></div>
                {post.home_insights_cta_is_active ? (
                  post.home_insights_form_selected === "default-receiver" ? (
                    <button
                      onClick={handleContactForm}
                      className="btn bg-gradient-to-r uppercase hover:duration-500 hover:bg-gradient-to-r text-light my-5  lg:block rounded-full  from-secondary to-secondary hover:to-primary"
                    >
                      {post.home_insights_cta_text
                        ? post.home_insights_cta_text
                        : "CONTACT US"}
                    </button>
                  ) : // <p>default</p>
                  "" || post.home_insights_form_selected === "apply-now-lcs" ? (
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
                    post.home_insights_form_selected === "apply-now-careers" ? (
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
              <div className="order-1 mt-6 md:mt-0">
                <div className="mb-12">
                  <h3 className="text-2xl font-semibold mb-10 text-dark">
                    Recent Posts
                  </h3>
                  <div className="popularPostLinks">
                    <ul className="[&>li]:my-8">
                      {insightData?.data
                        .filter(
                          (popPost) =>
                            popPost.home_insights_slug !==
                              post.home_insights_slug &&
                            popPost.home_insights_is_active === 1
                        )
                        .slice(0, 5)
                        .map((popPost, key) => {
                          const insightsImages =
                            getConvertStringToJSONparseData(
                              popPost.home_insights_img
                            ) || [];
                          return (
                            <div key={key}>
                              <li className="my-5">
                                <Link
                                  to={`${devNavUrl}/insight/${popPost.home_insights_slug}`}
                                >
                                  <div className="flex items-center gap-4">
                                    <div className="min-w-[100px] max-w-[100px] h-[80px]">
                                      {insightsImages.map((image, index) => (
                                        <LoadImages
                                          url={`${googleHDViewLink}${image?.id}`}
                                          alt={`${popPost.home_insights_title}`}
                                          className="min-w-[100px] max-w-[100px] h-[80px] rounded-lg object-cover"
                                          key={index}
                                        />
                                      ))}
                                    </div>
                                    <div>
                                      <p className="line-clamp-3">
                                        {popPost.home_insights_title}
                                      </p>
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
                  <ul>
                    {insightData?.data
                      .map((cat) => cat.home_insights_category)
                      .filter(
                        (value, index, self) => self.indexOf(value) === index
                      )
                      .map((uniqueCategory, key) => {
                        return (
                          <div key={key}>
                            <Link
                              to={`${devNavUrl}/post-by-category/${uniqueCategory}`}
                            >
                              <li className="flex items-center gap-2 mb-3">
                                <BiSolidRightArrow className="text-primary" />
                                {uniqueCategory}
                              </li>
                            </Link>
                          </div>
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
      {subscribe && (
        <Subscribe
          setSubscribe={setSubscribe}
          notification_purpose={"subscribers"}
        />
      )}
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
    </>
  );
};

export default SingplePage;
