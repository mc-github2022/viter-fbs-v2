import { default as React, useEffect } from "react";
import { Helmet } from "react-helmet";
import { BiSolidRightArrow } from "react-icons/bi";
import { LuTag } from "react-icons/lu";
import { MdOutlineCalendarToday } from "react-icons/md";
import { Link, useParams } from "react-router-dom";
import useQueryData from "../../../custom-hooks/useQueryData";
import {
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

const SingplePage = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const insightId = getUrlParam().get("id");
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
    !!slug && !subscribe // enabled
  );

  const [pageName, setPageName] = React.useState("home");
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

  const insightsImages =
    getConvertStringToJSONparseData(post.home_insights_img) || [];

  const insightImgId = insightsImages.map((img) => img.id)[0];

  const ogImage = `${googleHDViewLink}${insightImgId}`;
  console.log(ogImage);

  return (
    <>
      <Header services={"default"} page={"Home"} />
      <div>
        {post && (
          <Helmet>
            <title>{post.home_insights_title}</title>
            <meta property="og:title" content={post.home_insights_title} />
            <meta property="og:description" content={post.meta_description} />
            <meta property="og:image" content={ogImage} />
            <meta property="og:image:secure_url" content={ogImage} />
            <meta property="og:image:type" content="image/jpeg" />
            <meta property="og:image:width" content="1080" />
            <meta property="og:image:height" content="630" />
            <meta
              property="og:url"
              content={`https://frontlinebusiness.com.ph/insight/${post.slug}`}
            />
            <meta property="og:type" content="article" />
          </Helmet>
        )}
      </div>
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
                className="btn bg-gradient-to-r uppercase hover:duration-500 hover:bg-gradient-to-r text-light my-5 rounded-full  from-secondary to-secondary hover:to-primary "
                to={`${devNavUrl}/all-insights`}
              >
                Show All Insights
              </Link>
            </>
          )}
        </div>
      </section>
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
    </>
  );
};

export default SingplePage;
