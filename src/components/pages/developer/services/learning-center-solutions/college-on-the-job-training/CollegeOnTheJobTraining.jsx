import React from "react";
import useQueryData from "../../../../../custom-hooks/useQueryData";
import { apiVersion } from "../../../../../helpers/functions-general";
import BreadCrumbs from "../../../../../partials/BreadCrumbs";
import Dashboard from "../../../../../partials/dashboard/Dashboard";
import Navigation from "../../../../../partials/dashboard/Navigation";
import ModalError from "../../../../../partials/modals/ModalError";
import ModalSuccess from "../../../../../partials/modals/ModalSuccess";
import { setIsUpdateHome } from "../../../../../store/StoreAction";
import { StoreContext } from "../../../../../store/StoreContext";
import Footer from "../../../footer/Footer";
import ModalUpdateCopyright from "../../../footer/ModalUpdateCopyright";
import ModalUpdateLogoImg from "../../../footer/ModalUpdateLogoImg";
import ModalUpdateQuickLinks from "../../../footer/ModalUpdateQuickLinks";
import Header from "../../../header/Header";
import ModalUpdateHeader from "../../../header/ModalUpdateHeader";
import LcssTeams from "../lcss-team/LcssTeams";
import ModalUpdateLcssTeams from "../lcss-team/ModalUpdateLcssTeams";
import ModalUpdateLcssTeamsTitle from "../lcss-team/ModalUpdateLcssTeamsTitle";
import ModalUpdateApplyNow from "./ojt-apply-now/ModalUpdateApplyNow";
import OjtApplyNow from "./ojt-apply-now/OjtApplyNow";
import ModalUpdateOjtBanner from "./ojt-banner/ModalUpdateOjtBanner";
import OjtBanner from "./ojt-banner/OjtBanner";
import OjtBatches from "./ojt-batches/OjtBatches";
import ModalUpdateOjtOverview from "./ojt-overview/ModalUpdateOjtOverview";
import ModalUpdateOjtOverviewList from "./ojt-overview/ModalUpdateOjtOverviewList";
import OjtOverview from "./ojt-overview/OjtOverview";
import OjtPartners from "./ojt-partners/OjtPartners";
import OjtPartnerSays from "./ojt-partnersays/OjtPartnerSays";
import ModalUpdateOjtServices from "./ojt-services/ModalUpdateOjtServices";
import OjtServices from "./ojt-services/OjtServices";
import ModalUpdateOjtBatchesTitle from "./ojt-titles/ModalUpdateOjtBatchesTitle";
import ModalUpdateOjtPartnerSaysTitle from "./ojt-titles/ModalUpdateOjtPartnerSaysTitle";
import ModalUpdateOjtPartnersTitle from "./ojt-titles/ModalUpdateOjtPartnersTitle";
import ModalUpdateOjtVidTestimonialTitle from "./ojt-titles/ModalUpdateOjtVidTestimonialTitle";
import OjtVidTestimonial from "./ojt-vid-testimonial/OjtVidTestimonial";

const CollegeOnTheJobTraining = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [itemEdit, setItemEdit] = React.useState(null);
  const [pageName, setPageName] = React.useState("College OJT");

  const { data: ojtData } = useQueryData(
    `${apiVersion}/ojt`, // endpoint
    "get", // method
    "ojt" // key
  );

  const { data: ojtOverviewData } = useQueryData(
    `${apiVersion}/ojt-overview`, // endpoint
    "get", // method
    "ojt-overview" // key
  );

  const { data: ojtTitlesData } = useQueryData(
    `${apiVersion}/ojt-titles`, // endpoint
    "get", // method
    "ojt-titles" // key
  );

  const {
    isFetching: isFetchingServices,
    isLoading: isLoadingServices,
    error,
    data: ojtServicesData,
  } = useQueryData(
    `${apiVersion}/ojt-services`, // endpoint
    "get", // method
    "ojt-services" // key
  );

  const { data: ojtApplyNowData } = useQueryData(
    `${apiVersion}/ojt-apply-now`, // endpoint
    "get", // method
    "ojt-apply-now" // key
  );

  const {
    isFetching: isFetchingLcssTeams,
    isLoading: isLoadingLcssTeams,
    error: errorLcssTeams,
    data: lcssTeamsData,
  } = useQueryData(
    `${apiVersion}/lcss-teams`, // endpoint
    "get", // method
    "lcss-teams" // key
  );

  const { data: lcssTeamTitleData } = useQueryData(
    `${apiVersion}/lcss-teams-title`, // endpoint
    "get", // method
    "lcss-teams-title" // key
  );

  const { isLoading, data: headerData } = useQueryData(
    `${apiVersion}/header`, // endpoint
    "get", // method
    "header" // key
  );

  const { data: footerData } = useQueryData(
    `${apiVersion}/footer`, // endpoint
    "get", // method
    "footer" // key
  );

  const handleUpdateOjtBanner = () => {
    dispatch(setIsUpdateHome({ modal: true, modalCode: "ojt-banner" }));
    setItemEdit("ojtBannerUpdate");
  };

  const handleUpdateOjtOverview = () => {
    dispatch(setIsUpdateHome({ modal: true, modalCode: "ojt-overview" }));
    setItemEdit("ojtOverviewUpdateImg");
  };

  const handleUpdateOjtOverviewList = () => {
    dispatch(setIsUpdateHome({ modal: true, modalCode: "ojt-overview-list" }));
    setItemEdit("ojtOverviewListUpdate");
  };

  const handleUpdateOjtServices = () => {
    dispatch(setIsUpdateHome({ modal: true, modalCode: "ojt-services" }));
    setItemEdit(null);
  };

  const handleUpdateOjtApplyNow = () => {
    dispatch(setIsUpdateHome({ modal: true, modalCode: "ojt-apply-now" }));
    setItemEdit("ojtApplyNowUpdate");
  };

  const handleUpdateLcssTeams = () => {
    dispatch(setIsUpdateHome({ modal: true, modalCode: "lcss-teams" }));
    setItemEdit(null);
  };

  const handleUpdateLcssTeamsTitle = () => {
    dispatch(setIsUpdateHome({ modal: true, modalCode: "lcss-teams-title" }));
    setItemEdit("lcssTeamsTitleUpdate");
  };

  const handleUpdateOjtPartnersTitle = () => {
    dispatch(setIsUpdateHome({ modal: true, modalCode: "ojt-partners-title" }));
    setItemEdit("partnersTitleUpdate");
  };

  const handleUpdateOjtBatchesTitle = () => {
    dispatch(setIsUpdateHome({ modal: true, modalCode: "ojt-batches-title" }));
    setItemEdit("batchesTitleUpdate");
  };

  const handleUpdateOjtVidTestimonialTitle = () => {
    dispatch(
      setIsUpdateHome({ modal: true, modalCode: "ojt-vidtestimonial-title" })
    );
    setItemEdit("vidTestimonialTitleUpdate");
  };

  const handleUpdateOjtPartnerSaysTitle = () => {
    dispatch(
      setIsUpdateHome({ modal: true, modalCode: "ojt-partnerSays-title" })
    );
    setItemEdit("partnerSaysTitleUpdate");
  };

  const handleUpdateHeader = () => {
    dispatch(setIsUpdateHome({ modal: true, modalCode: "header" }));
    setItemEdit("headerUpdate");
  };
  const handleUpdateFooterLogoImg = () => {
    dispatch(setIsUpdateHome({ modal: true, modalCode: "footer-logoimg" }));
    setItemEdit("footerLogoImgUpdate");
  };

  const handleUpdateFooterQuicklinks = () => {
    dispatch(setIsUpdateHome({ modal: true, modalCode: "footer-quicklinks" }));
    setItemEdit("footerQuicklinksUpdate");
  };

  const handleUpdateFooterCopyright = () => {
    dispatch(setIsUpdateHome({ modal: true, modalCode: "footer-copyright" }));
    setItemEdit("footerCopyrightUpdate");
  };

  return (
    <>
      <section id="" className="bg-light">
        <Navigation menu="services" submenu="lcss" />
        <Dashboard>
          <div className="mx-5 pt-2">
            <div className="py-5 flex  ">
              <BreadCrumbs param={location.search} />
              <div className="text-sm text-[black] font-semibold">
                <h2>College On-The-Job Training</h2>
              </div>
            </div>
            <div className=" pb-4 bg-light shadow-xl">
              <Header
                headerData={headerData}
                handleUpdateHeader={handleUpdateHeader}
                isLoading={isLoading}
                services={"lcss services"}
                page={"College On-The-Job Training"}
              />
              <OjtBanner
                ojtData={ojtData}
                handleUpdateOjtBanner={handleUpdateOjtBanner}
              />
              <OjtPartners
                ojtTitlesData={ojtTitlesData}
                handleUpdateOjtPartnersTitle={handleUpdateOjtPartnersTitle}
              />

              <OjtOverview
                handleUpdateOjtOverview={handleUpdateOjtOverview}
                handleUpdateOjtOverviewList={handleUpdateOjtOverviewList}
                ojtOverviewData={ojtOverviewData}
                pageName={pageName}
              />

              <OjtServices
                ojtServicesData={ojtServicesData}
                handleUpdateOjtServices={handleUpdateOjtServices}
                isFetchingServices={isFetchingServices}
                isLoadingServices={isLoadingServices}
                error={error}
                setItemEdit={setItemEdit}
              />

              <OjtApplyNow
                ojtApplyNowData={ojtApplyNowData}
                handleUpdateOjtApplyNow={handleUpdateOjtApplyNow}
                pageName={pageName}
              />

              <LcssTeams
                lcssTeamsData={lcssTeamsData}
                handleUpdateLcssTeams={handleUpdateLcssTeams}
                isFetchingLcssTeams={isFetchingLcssTeams}
                isLoadingLcssTeams={isLoadingLcssTeams}
                errorLcssTeams={errorLcssTeams}
                setItemEdit={setItemEdit}
                lcssTeamTitleData={lcssTeamTitleData}
                handleUpdateLcssTeamsTitle={handleUpdateLcssTeamsTitle}
              />

              <OjtBatches
                ojtTitlesData={ojtTitlesData}
                handleUpdateOjtBatchesTitle={handleUpdateOjtBatchesTitle}
              />
              <OjtVidTestimonial
                ojtTitlesData={ojtTitlesData}
                handleUpdateOjtVidTestimonialTitle={
                  handleUpdateOjtVidTestimonialTitle
                }
              />
              <OjtPartnerSays
                ojtTitlesData={ojtTitlesData}
                handleUpdateOjtPartnerSaysTitle={
                  handleUpdateOjtPartnerSaysTitle
                }
              />

              <Footer
                handleUpdateFooterQuicklinks={handleUpdateFooterQuicklinks}
                handleUpdateFooterCopyright={handleUpdateFooterCopyright}
                handleUpdateFooterLogoImg={handleUpdateFooterLogoImg}
                footerData={footerData}
              />
            </div>
          </div>
        </Dashboard>
      </section>

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "ojt-banner" && (
          <ModalUpdateOjtBanner itemEdit={itemEdit} ojtData={ojtData} />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "ojt-overview" && (
          <ModalUpdateOjtOverview
            itemEdit={itemEdit}
            ojtOverviewData={ojtOverviewData}
          />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "ojt-overview-list" && (
          <ModalUpdateOjtOverviewList
            itemEdit={itemEdit}
            ojtOverviewData={ojtOverviewData}
          />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "ojt-services" && (
          <ModalUpdateOjtServices itemEdit={itemEdit} />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "ojt-apply-now" && (
          <ModalUpdateApplyNow
            itemEdit={itemEdit}
            ojtApplyNowData={ojtApplyNowData}
          />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "lcss-teams" && (
          <ModalUpdateLcssTeams itemEdit={itemEdit} />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "lcss-teams-title" && (
          <ModalUpdateLcssTeamsTitle
            itemEdit={itemEdit}
            lcssTeamTitleData={lcssTeamTitleData}
          />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "ojt-partners-title" && (
          <ModalUpdateOjtPartnersTitle
            itemEdit={itemEdit}
            ojtTitlesData={ojtTitlesData}
          />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "ojt-batches-title" && (
          <ModalUpdateOjtBatchesTitle
            itemEdit={itemEdit}
            ojtTitlesData={ojtTitlesData}
          />
        )}
      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "ojt-vidtestimonial-title" && (
          <ModalUpdateOjtVidTestimonialTitle
            itemEdit={itemEdit}
            ojtTitlesData={ojtTitlesData}
          />
        )}
      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "ojt-partnerSays-title" && (
          <ModalUpdateOjtPartnerSaysTitle
            itemEdit={itemEdit}
            ojtTitlesData={ojtTitlesData}
          />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "header" && (
          <ModalUpdateHeader itemEdit={itemEdit} headerData={headerData} />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "footer-logoimg" && (
          <ModalUpdateLogoImg itemEdit={itemEdit} footerData={footerData} />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "footer-quicklinks" && (
          <ModalUpdateQuickLinks itemEdit={itemEdit} footerData={footerData} />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "footer-copyright" && (
          <ModalUpdateCopyright itemEdit={itemEdit} footerData={footerData} />
        )}

      {store.success && <ModalSuccess />}
      {store.error && <ModalError />}
    </>
  );
};

export default CollegeOnTheJobTraining;
