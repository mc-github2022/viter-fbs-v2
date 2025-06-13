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
import ModalUpdateContactFormDefault from "../../../contact-form-default/ModalUpdateContactFormDefault";
import ModalUpdateContactFormDefaultLcss from "../../../contact-form-default/ModalUpdateContactFormDefaultLcss";
import Footer from "../../../footer/Footer";
import ModalUpdateCopyright from "../../../footer/ModalUpdateCopyright";
import ModalUpdateLogoImg from "../../../footer/ModalUpdateLogoImg";
import ModalUpdateQuickLinks from "../../../footer/ModalUpdateQuickLinks";
import Header from "../../../header/Header";
import ModalUpdateHeader from "../../../header/ModalUpdateHeader";
import LcssTeams from "../lcss-team/LcssTeams";
import ModalUpdateLcssTeams from "../lcss-team/ModalUpdateLcssTeams";
import ModalUpdateLcssTeamsTitle from "../lcss-team/ModalUpdateLcssTeamsTitle";
import ContinuingBanner from "./continuing-banner/ContinuingBanner";
import ModalUpdateContinuingBanner from "./continuing-banner/ModalUpdateContinuingBanner";
import ContinuingOverview from "./continuing-overview/ContinuingOverview";
import ModalUpdateContinuingOverview from "./continuing-overview/ModalUpdateContinuingOverview";
import ModalUpdateContinuingOverviewList from "./continuing-overview/ModalUpdateContinuingOverviewList";
import ContinuingServices from "./continuing-services/ContinuingServices";
import ModalUpdateContinuingServices from "./continuing-services/ModalUpdateContinuingServices";
import ContinuingApplyNow from "./continuing-apply-now/ContinuingApplyNow";
import ModalUpdateContinuingApplyNow from "./continuing-apply-now/ModalUpdateContinuingApplyNow";
import ContinuingBatches from "./continuing-batches/ContinuingBatches";
import ContinuingVidTestimonial from "./continuing-vid-testimonial/ContinuingVidTestimonial";
import ContinuingPartnerSays from "./continuing-partnersays/ContinuingPartnerSays";
import ModalUpdateContinuingBatchesTitle from "./continuing-titles/ModalUpdateContinuingBatchesTitle";
import ModalUpdateContinuingVidTestimonialTitle from "./continuing-titles/ModalUpdateContinuingVidTestimonialTitle";
import ModalUpdateContinuingPartnerSaysTitle from "./continuing-titles/ModalUpdateContinuingPartnerSaysTitle";

const ContinuingStudies = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [itemEdit, setItemEdit] = React.useState(null);
  const [pageName, setPageName] = React.useState("Continuing Study");

  const { data: continuingData } = useQueryData(
    `${apiVersion}/continuing`, // endpoint
    "get", // method
    "continuing" // key
  );

  const { data: continuingOverviewData } = useQueryData(
    `${apiVersion}/continuing-overview`, // endpoint
    "get", // method
    "continuing-overview" // key
  );

  const { data: continuingTitlesData } = useQueryData(
    `${apiVersion}/continuing-titles`, // endpoint
    "get", // method
    "continuing-titles" // key
  );

  const {
    isFetching: isFetchingServices,
    isLoading: isLoadingServices,
    error,
    data: continuingServicesData,
  } = useQueryData(
    `${apiVersion}/continuing-services`, // endpoint
    "get", // method
    "continuing-services" // key
  );

  const { data: continuingApplyNowData } = useQueryData(
    `${apiVersion}/continuing-apply-now`, // endpoint
    "get", // method
    "continuing-apply-now" // key
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

  const { data: contactFormDefaultData } = useQueryData(
    `${apiVersion}/contactDefault`, // endpoint
    "get", // method
    "contactDefault" // key
  );

  const { data: contactFormLcssData } = useQueryData(
    `${apiVersion}/contactLcss`, // endpoint
    "get", // method
    "contactLcss" // key
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

  const handleUpdateContinuingBanner = () => {
    dispatch(setIsUpdateHome({ modal: true, modalCode: "continuing-banner" }));
    setItemEdit("continuingBannerUpdate");
  };

  const handleUpdateContinuingOverview = () => {
    dispatch(
      setIsUpdateHome({ modal: true, modalCode: "continuing-overview" })
    );
    setItemEdit("continuingOverviewUpdateImg");
  };

  const handleUpdateContinuingOverviewList = () => {
    dispatch(
      setIsUpdateHome({ modal: true, modalCode: "continuing-overview-list" })
    );
    setItemEdit("continuingOverviewListUpdate");
  };

  const handleUpdateContinuingServices = () => {
    dispatch(
      setIsUpdateHome({ modal: true, modalCode: "continuing-services" })
    );
    setItemEdit(null);
  };

  const handleUpdateContinuingApplyNow = () => {
    dispatch(
      setIsUpdateHome({ modal: true, modalCode: "continuing-apply-now" })
    );
    setItemEdit("continuingApplyNowUpdate");
  };

  const handleUpdateLcssTeams = () => {
    dispatch(setIsUpdateHome({ modal: true, modalCode: "lcss-teams" }));
    setItemEdit(null);
  };

  const handleUpdateLcssTeamsTitle = () => {
    dispatch(setIsUpdateHome({ modal: true, modalCode: "lcss-teams-title" }));
    setItemEdit("lcssTeamsTitleUpdate");
  };

  const handleUpdateContinuingPartnersTitle = () => {
    dispatch(
      setIsUpdateHome({ modal: true, modalCode: "continuing-partners-title" })
    );
    setItemEdit("partnersTitleUpdate");
  };

  const handleUpdateContinuingBatchesTitle = () => {
    dispatch(
      setIsUpdateHome({ modal: true, modalCode: "continuing-batches-title" })
    );
    setItemEdit("batchesTitleUpdate");
  };

  const handleUpdateContinuingVidTestimonialTitle = () => {
    dispatch(
      setIsUpdateHome({
        modal: true,
        modalCode: "continuing-vidtestimonial-title",
      })
    );
    setItemEdit("vidTestimonialTitleUpdate");
  };

  const handleUpdateContinuingPartnerSaysTitle = () => {
    dispatch(
      setIsUpdateHome({
        modal: true,
        modalCode: "continuing-partnerSays-title",
      })
    );
    setItemEdit("partnerSaysTitleUpdate");
  };

  const handleUpdateHeader = () => {
    dispatch(setIsUpdateHome({ modal: true, modalCode: "header" }));
    setItemEdit("headerUpdate");
  };

  const handleUpdateContactFormDefault = () => {
    dispatch(
      setIsUpdateHome({ modal: true, modalCode: "contact-form-default" })
    );
    setItemEdit("contactFormDefaultUpdate");
  };

  const handleUpdateContactFormLcss = () => {
    dispatch(setIsUpdateHome({ modal: true, modalCode: "contact-form-lcss" }));
    setItemEdit("contactFormLcssUpdate");
  };

  const handleUpdateFooterLogoImg = () => {
    dispatch(setIsUpdateHome({ modal: true, modalCode: "footer-logoimg" }));
    setItemEdit("footerLogoImgUpdate");
  };

  const handleUpdateFooterContactUs = () => {
    dispatch(setIsUpdateHome({ modal: true, modalCode: "footer-contactus" }));
    setItemEdit("footerContactUsUpdate");
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
                <h2>Continuing Studies</h2>
              </div>
            </div>
            <div className=" pb-4 bg-light shadow-xl">
              <Header
                headerData={headerData}
                handleUpdateHeader={handleUpdateHeader}
                isLoading={isLoading}
              />
              <ContinuingBanner
                continuingData={continuingData}
                handleUpdateContinuingBanner={handleUpdateContinuingBanner}
              />

              <ContinuingOverview
                handleUpdateContinuingOverview={handleUpdateContinuingOverview}
                handleUpdateContinuingOverviewList={
                  handleUpdateContinuingOverviewList
                }
                continuingOverviewData={continuingOverviewData}
                contactFormDefaultData={contactFormDefaultData}
                contactFormLcssData={contactFormLcssData}
                handleUpdateContactFormDefault={handleUpdateContactFormDefault}
                handleUpdateContactFormLcss={handleUpdateContactFormLcss}
                pageName={pageName}
              />

              <ContinuingServices
                continuingServicesData={continuingServicesData}
                handleUpdateContinuingServices={handleUpdateContinuingServices}
                isFetchingServices={isFetchingServices}
                isLoadingServices={isLoadingServices}
                error={error}
                setItemEdit={setItemEdit}
              />

              <ContinuingApplyNow
                continuingApplyNowData={continuingApplyNowData}
                handleUpdateContinuingApplyNow={handleUpdateContinuingApplyNow}
                handleUpdateContactFormLcss={handleUpdateContactFormLcss}
                contactFormDefaultData={contactFormDefaultData}
                contactFormLcssData={contactFormLcssData}
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

              <ContinuingBatches
                continuingTitlesData={continuingTitlesData}
                handleUpdateContinuingBatchesTitle={
                  handleUpdateContinuingBatchesTitle
                }
              />
              <ContinuingVidTestimonial
                continuingTitlesData={continuingTitlesData}
                handleUpdateContinuingVidTestimonialTitle={
                  handleUpdateContinuingVidTestimonialTitle
                }
              />
              <ContinuingPartnerSays
                continuingTitlesData={continuingTitlesData}
                handleUpdateContinuingPartnerSaysTitle={
                  handleUpdateContinuingPartnerSaysTitle
                }
              />

              <Footer
                handleUpdateFooterQuicklinks={handleUpdateFooterQuicklinks}
                handleUpdateFooterCopyright={handleUpdateFooterCopyright}
                handleUpdateFooterLogoImg={handleUpdateFooterLogoImg}
                handleUpdateFooterContactUs={handleUpdateFooterContactUs}
                footerData={footerData}
                contactFormDefaultData={contactFormDefaultData}
              />
            </div>
          </div>
        </Dashboard>
      </section>

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "continuing-banner" && (
          <ModalUpdateContinuingBanner
            itemEdit={itemEdit}
            continuingData={continuingData}
          />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "continuing-overview" && (
          <ModalUpdateContinuingOverview
            itemEdit={itemEdit}
            continuingOverviewData={continuingOverviewData}
          />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "continuing-overview-list" && (
          <ModalUpdateContinuingOverviewList
            itemEdit={itemEdit}
            continuingOverviewData={continuingOverviewData}
          />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "continuing-services" && (
          <ModalUpdateContinuingServices itemEdit={itemEdit} />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "continuing-apply-now" && (
          <ModalUpdateContinuingApplyNow
            itemEdit={itemEdit}
            continuingApplyNowData={continuingApplyNowData}
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
        store.isUpdateHome?.modalCode === "continuing-batches-title" && (
          <ModalUpdateContinuingBatchesTitle
            itemEdit={itemEdit}
            continuingTitlesData={continuingTitlesData}
          />
        )}
      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "continuing-vidtestimonial-title" && (
          <ModalUpdateContinuingVidTestimonialTitle
            itemEdit={itemEdit}
            continuingTitlesData={continuingTitlesData}
          />
        )}
      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "continuing-partnerSays-title" && (
          <ModalUpdateContinuingPartnerSaysTitle
            itemEdit={itemEdit}
            continuingTitlesData={continuingTitlesData}
          />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "header" && (
          <ModalUpdateHeader itemEdit={itemEdit} headerData={headerData} />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "contact-form-default" && (
          <ModalUpdateContactFormDefault
            itemEdit={itemEdit}
            contactFormDefaultData={contactFormDefaultData}
          />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "contact-form-lcss" && (
          <ModalUpdateContactFormDefaultLcss
            itemEdit={itemEdit}
            contactFormLcssData={contactFormLcssData}
          />
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

export default ContinuingStudies;
