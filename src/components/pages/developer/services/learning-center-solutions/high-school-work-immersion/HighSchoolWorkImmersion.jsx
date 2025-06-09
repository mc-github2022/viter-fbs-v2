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
import ImmersionApplyNow from "./immersion-apply-now/ImmersionApplyNow";
import ModalUpdateImmersionApplyNow from "./immersion-apply-now/ModalUpdateImmersionApplyNow";
import ImmersionBanner from "./immersion-banner/ImmersionBanner";
import ModalUpdateImmersionBanner from "./immersion-banner/ModalUpdateImmersionBanner";
import ImmersionOverview from "./immersion-overview/ImmersionOverview";
import ModalUpdateImmersionOverview from "./immersion-overview/ModalUpdateImmersionOverview";
import ModalUpdateImmersionOverviewList from "./immersion-overview/ModalUpdateImmersionOverviewList";
import ImmersionPartners from "./immersion-partners/ImmersionPartners";
import ImmersionServices from "./immersion-services/ImmersionServices";
import ModalUpdateImmersionServices from "./immersion-services/ModalUpdateImmersionServices";
import ImmersionBatches from "./immersion-batches/ImmersionBatches";
import ImmersionVidTestimonial from "./immersion-vid-testimonial/ImmersionVidTestimonial";
import ImmersionPartnerSays from "./immersion-partnersays/ImmersionPartnerSays";
import ModalUpdateImmersionPartnersTitle from "./immersion-titles/ModalUpdateImmersionPartnersTitle";
import ModalUpdateImmersionBatchesTitle from "./immersion-titles/ModalUpdateImmersionBatchesTitle";
import ModalUpdateImmersionVidTestimonialTitle from "./immersion-titles/ModalUpdateImmersionVidTestimonialTitle";
import ModalUpdateImmersionPartnerSaysTitle from "./immersion-titles/ModalUpdateImmersionPartnerSaysTitle";

const HighSchoolWorkImmersion = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [itemEdit, setItemEdit] = React.useState(null);
  const [pageName, setPageName] = React.useState("Work Immersion");

  const { data: immersionData } = useQueryData(
    `${apiVersion}/immersion`, // endpoint
    "get", // method
    "immersion" // key
  );

  const { data: immersionOverviewData } = useQueryData(
    `${apiVersion}/immersion-overview`, // endpoint
    "get", // method
    "immersion-overview" // key
  );

  const { data: immersionTitlesData } = useQueryData(
    `${apiVersion}/immersion-titles`, // endpoint
    "get", // method
    "immersion-titles" // key
  );

  const {
    isFetching: isFetchingServices,
    isLoading: isLoadingServices,
    error,
    data: immersionServicesData,
  } = useQueryData(
    `${apiVersion}/immersion-services`, // endpoint
    "get", // method
    "immersion-services" // key
  );

  const { data: immersionApplyNowData } = useQueryData(
    `${apiVersion}/immersion-apply-now`, // endpoint
    "get", // method
    "immersion-apply-now" // key
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

  const handleUpdateImmersionBanner = () => {
    dispatch(setIsUpdateHome({ modal: true, modalCode: "immersion-banner" }));
    setItemEdit("immersionBannerUpdate");
  };

  const handleUpdateImmersionOverview = () => {
    dispatch(setIsUpdateHome({ modal: true, modalCode: "immersion-overview" }));
    setItemEdit("immersionOverviewUpdateImg");
  };

  const handleUpdateImmersionOverviewList = () => {
    dispatch(
      setIsUpdateHome({ modal: true, modalCode: "immersion-overview-list" })
    );
    setItemEdit("immersionOverviewListUpdate");
  };

  const handleUpdateImmersionServices = () => {
    dispatch(setIsUpdateHome({ modal: true, modalCode: "immersion-services" }));
    setItemEdit(null);
  };

  const handleUpdateImmersionApplyNow = () => {
    dispatch(
      setIsUpdateHome({ modal: true, modalCode: "immersion-apply-now" })
    );
    setItemEdit("immersionApplyNowUpdate");
  };

  const handleUpdateLcssTeams = () => {
    dispatch(setIsUpdateHome({ modal: true, modalCode: "lcss-teams" }));
    setItemEdit(null);
  };

  const handleUpdateLcssTeamsTitle = () => {
    dispatch(setIsUpdateHome({ modal: true, modalCode: "lcss-teams-title" }));
    setItemEdit("lcssTeamsTitleUpdate");
  };

  const handleUpdateImmersionPartnersTitle = () => {
    dispatch(
      setIsUpdateHome({ modal: true, modalCode: "immersion-partners-title" })
    );
    setItemEdit("partnersTitleUpdate");
  };

  const handleUpdateImmersionBatchesTitle = () => {
    dispatch(
      setIsUpdateHome({ modal: true, modalCode: "immersion-batches-title" })
    );
    setItemEdit("batchesTitleUpdate");
  };

  const handleUpdateImmersionVidTestimonialTitle = () => {
    dispatch(
      setIsUpdateHome({
        modal: true,
        modalCode: "immersion-vidtestimonial-title",
      })
    );
    setItemEdit("vidTestimonialTitleUpdate");
  };

  const handleUpdateImmersionPartnerSaysTitle = () => {
    dispatch(
      setIsUpdateHome({ modal: true, modalCode: "immersion-partnerSays-title" })
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
                <h2>High School Work Immersion</h2>
              </div>
            </div>
            <div className=" pb-4 bg-light shadow-xl">
              <Header
                headerData={headerData}
                handleUpdateHeader={handleUpdateHeader}
                isLoading={isLoading}
              />
              <ImmersionBanner
                immersionData={immersionData}
                handleUpdateImmersionBanner={handleUpdateImmersionBanner}
              />
              <ImmersionPartners
                immersionTitlesData={immersionTitlesData}
                handleUpdateImmersionPartnersTitle={
                  handleUpdateImmersionPartnersTitle
                }
              />

              <ImmersionOverview
                handleUpdateImmersionOverview={handleUpdateImmersionOverview}
                handleUpdateImmersionOverviewList={
                  handleUpdateImmersionOverviewList
                }
                immersionOverviewData={immersionOverviewData}
                contactFormDefaultData={contactFormDefaultData}
                contactFormLcssData={contactFormLcssData}
                handleUpdateContactFormDefault={handleUpdateContactFormDefault}
                handleUpdateContactFormLcss={handleUpdateContactFormLcss}
                pageName={pageName}
              />

              <ImmersionServices
                immersionServicesData={immersionServicesData}
                handleUpdateImmersionServices={handleUpdateImmersionServices}
                isFetchingServices={isFetchingServices}
                isLoadingServices={isLoadingServices}
                error={error}
                setItemEdit={setItemEdit}
              />

              <ImmersionApplyNow
                immersionApplyNowData={immersionApplyNowData}
                handleUpdateImmersionApplyNow={handleUpdateImmersionApplyNow}
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

              <ImmersionBatches
                immersionTitlesData={immersionTitlesData}
                handleUpdateImmersionBatchesTitle={
                  handleUpdateImmersionBatchesTitle
                }
              />
              <ImmersionVidTestimonial
                immersionTitlesData={immersionTitlesData}
                handleUpdateImmersionVidTestimonialTitle={
                  handleUpdateImmersionVidTestimonialTitle
                }
              />
              <ImmersionPartnerSays
                immersionTitlesData={immersionTitlesData}
                handleUpdateImmersionPartnerSaysTitle={
                  handleUpdateImmersionPartnerSaysTitle
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
        store.isUpdateHome?.modalCode === "immersion-banner" && (
          <ModalUpdateImmersionBanner
            itemEdit={itemEdit}
            immersionData={immersionData}
          />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "immersion-overview" && (
          <ModalUpdateImmersionOverview
            itemEdit={itemEdit}
            immersionOverviewData={immersionOverviewData}
          />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "immersion-overview-list" && (
          <ModalUpdateImmersionOverviewList
            itemEdit={itemEdit}
            immersionOverviewData={immersionOverviewData}
          />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "immersion-services" && (
          <ModalUpdateImmersionServices itemEdit={itemEdit} />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "immersion-apply-now" && (
          <ModalUpdateImmersionApplyNow
            itemEdit={itemEdit}
            immersionApplyNowData={immersionApplyNowData}
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
        store.isUpdateHome?.modalCode === "immersion-partners-title" && (
          <ModalUpdateImmersionPartnersTitle
            itemEdit={itemEdit}
            immersionTitlesData={immersionTitlesData}
          />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "immersion-batches-title" && (
          <ModalUpdateImmersionBatchesTitle
            itemEdit={itemEdit}
            immersionTitlesData={immersionTitlesData}
          />
        )}
      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "immersion-vidtestimonial-title" && (
          <ModalUpdateImmersionVidTestimonialTitle
            itemEdit={itemEdit}
            immersionTitlesData={immersionTitlesData}
          />
        )}
      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "immersion-partnerSays-title" && (
          <ModalUpdateImmersionPartnerSaysTitle
            itemEdit={itemEdit}
            immersionTitlesData={immersionTitlesData}
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

export default HighSchoolWorkImmersion;
