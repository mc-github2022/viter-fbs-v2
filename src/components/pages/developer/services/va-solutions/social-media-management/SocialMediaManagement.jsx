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
import ModalUpdateSocialMediaBanner from "./social-banner/ModalUpdateSocialMediaBanner";
import SocialMediaBanner from "./social-banner/SocialMediaBanner";
import ModalUpdateSocialMediaOverview from "./social-overview/ModalUpdateSocialMediaOverview";
import ModalUpdateSocialMediaOverviewList from "./social-overview/ModalUpdateSocialMediaOverviewList";
import SocialMediaOverview from "./social-overview/SocialMediaOverview";
import SocialMediaPartners from "./social-partners/SocialMediaPartners";
import SocialMediaPartnerSays from "./social-partnersays/SocialMediaPartnerSays";
import SocialMediaPricing from "./social-pricing/SocialMediaPricing";
import ModalUpdateSocialMediaScope from "./social-scope/ModalUpdateSocialMediaScope";
import SocialMediaScope from "./social-scope/SocialMediaScope";
import ModalUpdateSocialMediaPackagesTitle from "./social-titles/ModalUpdateSocialMediaPackagesTitle";
import ModalUpdateSocialMediaPartnerSaysTitle from "./social-titles/ModalUpdateSocialMediaPartnerSaysTitle";
import ModalUpdateSocialMediaPartnersTitle from "./social-titles/ModalUpdateSocialMediaPartnersTitle";
import ModalUpdateSocialMediaScopeTitle from "./social-titles/ModalUpdateSocialMediaScopeTitle";

const SocialMediaManagement = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [itemEdit, setItemEdit] = React.useState(null);
  const [pageName, setPageName] = React.useState("social-media-management");

  const { data: socialData } = useQueryData(
    `${apiVersion}/social`, // endpoint
    "get", // method
    "social" // key
  );

  const { data: socialOverviewData } = useQueryData(
    `${apiVersion}/social-overview`, // endpoint
    "get", // method
    "social-overview" // key
  );

  const {
    isLoading: isLoadingScope,
    isFetching: isFetchingScope,
    data: socialScopeData,
  } = useQueryData(
    `${apiVersion}/social-scope`, // endpoint
    "get", // method
    "social-scope" // key
  );

  const { data: socialTitlesData } = useQueryData(
    `${apiVersion}/social-titles`, // endpoint
    "get", // method
    "social-titles" // key
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

  const handleUpdateSocialBanner = () => {
    dispatch(setIsUpdateHome({ modal: true, modalCode: "social-banner" }));
    setItemEdit("socialBannerUpdate");
  };

  const handleUpdateSocialOverview = () => {
    dispatch(setIsUpdateHome({ modal: true, modalCode: "social-overview" }));
    setItemEdit("socialOverviewUpdateImg");
  };

  const handleUpdateSocialOverviewList = () => {
    dispatch(
      setIsUpdateHome({
        modal: true,
        modalCode: "social-overview-list",
      })
    );
    setItemEdit("socialOverviewListUpdate");
  };

  const handleUpdateSocialScope = () => {
    dispatch(setIsUpdateHome({ modal: true, modalCode: "social-scope" }));
    setItemEdit(null);
  };

  const handleUpdateSocialScopeTitles = () => {
    dispatch(setIsUpdateHome({ modal: true, modalCode: "social-scope-title" }));
    setItemEdit("scopeTitleUpdate");
  };

  const handleUpdateSocialPackagesTitles = () => {
    dispatch(
      setIsUpdateHome({
        modal: true,
        modalCode: "social-packages-title",
      })
    );
    setItemEdit("packagesTitleUpdate");
  };

  const handleUpdateSocialPartnersTitles = () => {
    dispatch(
      setIsUpdateHome({
        modal: true,
        modalCode: "social-partners-title",
      })
    );
    setItemEdit("partnersTitleUpdate");
  };

  const handleUpdateSocialTestimonialTitles = () => {
    dispatch(
      setIsUpdateHome({
        modal: true,
        modalCode: "social-testimonial-title",
      })
    );
    setItemEdit("testimonialTitleUpdate");
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
        <Navigation menu="services" submenu="virtual-assistant-solutions" />
        <Dashboard>
          <div className="mx-5 pt-2">
            <div className="py-5 flex  ">
              <BreadCrumbs param={location.search} />
              <div className="text-sm text-[black] font-semibold">
                <h2>Social Media Management</h2>
              </div>
            </div>
            <div className=" pb-4 bg-light shadow-xl">
              <Header
                headerData={headerData}
                handleUpdateHeader={handleUpdateHeader}
                isLoading={isLoading}
                services={"default"}
                page={"Home"}
              />
              <SocialMediaBanner
                socialData={socialData}
                handleUpdateSocialBanner={handleUpdateSocialBanner}
              />
              <SocialMediaOverview
                handleUpdateSocialOverview={handleUpdateSocialOverview}
                handleUpdateSocialOverviewList={handleUpdateSocialOverviewList}
                socialOverviewData={socialOverviewData}
              />
              <SocialMediaScope
                handleUpdateSocialScopeTitles={handleUpdateSocialScopeTitles}
                handleUpdateSocialScope={handleUpdateSocialScope}
                setItemEdit={setItemEdit}
                isLoadingScope={isLoadingScope}
                isFetchingScope={isFetchingScope}
                socialTitlesData={socialTitlesData}
                socialScopeData={socialScopeData}
              />
              <SocialMediaPricing
                handleUpdateSocialPackagesTitles={
                  handleUpdateSocialPackagesTitles
                }
                socialTitlesData={socialTitlesData}
              />
              <SocialMediaPartners
                handleUpdateSocialPartnersTitles={
                  handleUpdateSocialPartnersTitles
                }
                socialTitlesData={socialTitlesData}
              />
              <SocialMediaPartnerSays
                handleUpdateSocialTestimonialTitles={
                  handleUpdateSocialTestimonialTitles
                }
                socialTitlesData={socialTitlesData}
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
        store.isUpdateHome?.modalCode === "social-banner" && (
          <ModalUpdateSocialMediaBanner
            itemEdit={itemEdit}
            socialData={socialData}
          />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "social-overview" && (
          <ModalUpdateSocialMediaOverview
            itemEdit={itemEdit}
            socialOverviewData={socialOverviewData}
          />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "social-overview-list" && (
          <ModalUpdateSocialMediaOverviewList
            itemEdit={itemEdit}
            socialOverviewData={socialOverviewData}
          />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "social-scope" && (
          <ModalUpdateSocialMediaScope itemEdit={itemEdit} />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "social-scope-title" && (
          <ModalUpdateSocialMediaScopeTitle
            itemEdit={itemEdit}
            socialTitlesData={socialTitlesData}
          />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "social-packages-title" && (
          <ModalUpdateSocialMediaPackagesTitle
            itemEdit={itemEdit}
            socialTitlesData={socialTitlesData}
          />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "social-partners-title" && (
          <ModalUpdateSocialMediaPartnersTitle
            itemEdit={itemEdit}
            socialTitlesData={socialTitlesData}
          />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "social-testimonial-title" && (
          <ModalUpdateSocialMediaPartnerSaysTitle
            itemEdit={itemEdit}
            socialTitlesData={socialTitlesData}
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

export default SocialMediaManagement;
