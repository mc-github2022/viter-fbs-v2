import { default as React, useEffect } from "react";
import { BiSolidRightArrow } from "react-icons/bi";
import { LuTag } from "react-icons/lu";
import { MdOutlineCalendarToday } from "react-icons/md";
import { Link, useParams } from "react-router-dom";

import Footer from "../../../../partials/Footer";
import Header from "../../../../partials/Header";

import {
  devBaseImgUrl,
  devNavUrl,
  formatDate,
  getConvertStringToJSONparseData,
  googleHDViewLink,
} from "../../../../helpers/functions-general";
import { StoreContext } from "../../../../store/StoreContext";
import useQueryData from "../../../../custom-hooks/useQueryData";
import LoadImages from "../../../../partials/LoadImages";
import ModalJobApplication from "../../../website/career/ModalJobApplication";
import ModalLcssForm from "../../../../partials/ModalLcssForm";
import ModalContact from "../../../../partials/ModalContact";
import BannerSliderLoader from "../../../website/home/bannerSliderLoader";

const PreviewPage = () => {
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

  const { slug } = useParams();

  const [modalContact, setModalContact] = React.useState(false);
  const [html, setHtml] = React.useState("");
  const [lcssForm, setLcssForm] = React.useState(false);
  const [modalJob, setModalJob] = React.useState(false);
  const [contactForm, setContactForm] = React.useState(false);
  const [jobTitle, setJobTitle] = React.useState("insight");
  const [pageName, setPageName] = React.useState("home");

  const handleLcssForm = () => {
    setLcssForm(true);
  };

  const handleModalJob = () => {
    setModalJob(true);
  };

  const handleContactForm = () => {
    setContactForm(true);
  };

  useEffect(() => {
    if (insightData?.data.length > 0) {
      const matchingInsight = insightData.data.find(
        (item) =>
          item.home_insights_slug?.trim().toLowerCase() ===
          slug?.trim().toLowerCase()
      );
      setHtml(matchingInsight?.home_insights_paragraph_a || "");
    }
  }, [slug, insightData]);

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

  // const insightsImages =
  //   getConvertStringToJSONparseData(post.home_insights_img) || [];

  return (
    <>
      <Header />
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

export default PreviewPage;
