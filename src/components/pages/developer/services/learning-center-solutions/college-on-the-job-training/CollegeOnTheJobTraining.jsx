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
import Footer from "../../../footer/Footer";
import ModalUpdateCopyright from "../../../footer/ModalUpdateCopyright";
import ModalUpdateLogoImg from "../../../footer/ModalUpdateLogoImg";
import ModalUpdateQuickLinks from "../../../footer/ModalUpdateQuickLinks";
import Header from "../../../header/Header";
import ModalUpdateHeader from "../../../header/ModalUpdateHeader";
import OjtBanner from "./ojt-banner/OjtBanner";
import ModalUpdateOjtBanner from "./ojt-banner/ModalUpdateOjtBanner";
import OjtPartners from "./ojt-partners/OjtPartners";
import ModalUpdateOjtPartnersTitle from "./ojt-partners/ModalUpdateOjtPartnersTitle";
import OjtOverview from "./ojt-overview/OjtOverview";
import ModalUpdateOjtOverview from "./ojt-overview/ModalUpdateOjtOverview";
import ModalUpdateOjtOverviewList from "./ojt-overview/ModalUpdateOjtOverviewList";
import OjtServices from "./ojt-services/OjtServices";
import ModalUpdateOjtServices from "./ojt-services/ModalUpdateOjtServices";
import OjtApplyNow from "./ojt-apply-now/OjtApplyNow";
import ModalUpdateApplyNow from "./ojt-apply-now/ModalUpdateApplyNow";
import ModalUpdateContactFormDefaultLcss from "../../../contact-form-default/ModalUpdateContactFormDefaultLcss";
import LcssTeams from "../lcss-team/LcssTeams";
import ModalUpdateLcssTeams from "../lcss-team/ModalUpdateLcssTeams";

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
    `${apiVersion}/ojt-title`, // endpoint
    "get", // method
    "ojt-title" // key
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

  const { data: lcssTeamsData } = useQueryData(
    `${apiVersion}/lcss-teams`, // endpoint
    "get", // method
    "lcss-teams" // key
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

  const handleUpdateOjtBanner = () => {
    dispatch(setIsUpdateHome({ modal: true, modalCode: "ojt-banner" }));
    setItemEdit("ojtBannerUpdate");
  };

  const handleUpdateOjtPartnersTitle = () => {
    dispatch(setIsUpdateHome({ modal: true, modalCode: "ojt-partners-title" }));
    setItemEdit("partnersTitleUpdate");
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
    setItemEdit("lcssTeamsUpdate");
  };

  const handleUpdateOjtPackagesTitle = () => {
    dispatch(setIsUpdateHome({ modal: true, modalCode: "ojt-packages-title" }));
    setItemEdit("packagesTitleUpdate");
  };

  const handleUpdateOjtPackagesList = () => {
    dispatch(setIsUpdateHome({ modal: true, modalCode: "ojt-packages-list" }));
    setItemEdit("packagesListUpdate");
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
        <Navigation menu="services" submenu="college-on-the-job-training" />
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
                contactFormDefaultData={contactFormDefaultData}
                handleUpdateContactFormDefault={handleUpdateContactFormDefault}
                handleUpdateContactFormLcss={handleUpdateContactFormLcss}
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
                handleUpdateContactFormLcss={handleUpdateContactFormLcss}
                contactFormDefaultData={contactFormDefaultData}
                pageName={pageName}
              />

              <LcssTeams
                lcssTeamsData={lcssTeamsData}
                handleUpdateLcssTeams={handleUpdateLcssTeams}
              />

              {/* <BookkeepingPricing
                handleUpdateOjtPackagesTitle={
                  handleUpdateOjtPackagesTitle
                }
                handleUpdateOjtPackagesList={
                  handleUpdateOjtPackagesList
                }
                bookkeepingPackagesTitleData={bookkeepingPackagesTitleData}
              /> */}

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
        store.isUpdateHome?.modalCode === "ojt-banner" && (
          <ModalUpdateOjtBanner itemEdit={itemEdit} ojtData={ojtData} />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "ojt-partners-title" && (
          <ModalUpdateOjtPartnersTitle
            itemEdit={itemEdit}
            ojtTitlesData={ojtTitlesData}
          />
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
          <ModalUpdateLcssTeams
            itemEdit={itemEdit}
            lcssTeamsData={lcssTeamsData}
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

export default CollegeOnTheJobTraining;
