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
import ModalUpdateWebsiteBanner from "./website-banner/ModalUpdateWebsiteBanner";
import WebsiteBanner from "./website-banner/WebsiteBanner";
import ModalUpdateWebsiteOverview from "./website-overview/ModalUpdateWebsiteOverview";
import ModalUpdateWebsiteOverviewList from "./website-overview/ModalUpdateWebsiteOverviewList";
import WebsiteOverview from "./website-overview/WebsiteOverview";
import WebsitePartners from "./website-partners/WebsitePartners";
import WebsitePartnerSays from "./website-partnersays/WebsitePartnerSays";
import WebsitePricing from "./website-pricing/WebsitePricing";
import ModalUpdateWebsiteScope from "./website-scope/ModalUpdateWebsiteScope";
import WebsiteScope from "./website-scope/WebsiteScope";
import ModalUpdateWebsitePackagesTitle from "./website-titles/ModalUpdateWebsitePackagesTitle";
import ModalUpdateWebsitePartnerSaysTitle from "./website-titles/ModalUpdateWebsitePartnerSaysTitle";
import ModalUpdateWebsitePartnersTitle from "./website-titles/ModalUpdateWebsitePartnersTitle";
import ModalUpdateWebsiteScopeTitle from "./website-titles/ModalUpdateWebsiteScopeTitle";

const WebsiteDesign = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [itemEdit, setItemEdit] = React.useState(null);

  const { data: websiteData } = useQueryData(
    `${apiVersion}/website`, // endpoint
    "get", // method
    "website" // key
  );

  const { data: websiteOverviewData } = useQueryData(
    `${apiVersion}/website-overview`, // endpoint
    "get", // method
    "website-overview" // key
  );

  const {
    isLoading: isLoadingScope,
    isFetching: isFetchingScope,
    error: errorScope,
    data: websiteScopeData,
  } = useQueryData(
    `${apiVersion}/website-scope`, // endpoint
    "get", // method
    "website-scope" // key
  );

  const { data: websiteTitlesData } = useQueryData(
    `${apiVersion}/website-titles`, // endpoint
    "get", // method
    "website-titles" // key
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

  const handleUpdateWebsiteBanner = () => {
    dispatch(setIsUpdateHome({ modal: true, modalCode: "website-banner" }));
    setItemEdit("websiteBannerUpdate");
  };

  const handleUpdateWebsiteOverview = () => {
    dispatch(setIsUpdateHome({ modal: true, modalCode: "website-overview" }));
    setItemEdit("websiteOverviewUpdateImg");
  };

  const handleUpdateWebsiteOverviewList = () => {
    dispatch(
      setIsUpdateHome({ modal: true, modalCode: "website-overview-list" })
    );
    setItemEdit("websiteOverviewListUpdate");
  };

  const handleUpdateWebsiteScope = () => {
    dispatch(setIsUpdateHome({ modal: true, modalCode: "website-scope" }));
    setItemEdit(null);
  };

  const handleUpdateWebsiteScopeTitles = () => {
    dispatch(
      setIsUpdateHome({ modal: true, modalCode: "website-scope-title" })
    );
    setItemEdit("scopeTitleUpdate");
  };

  const handleUpdateWebsitePackagesTitles = () => {
    dispatch(
      setIsUpdateHome({ modal: true, modalCode: "website-packages-title" })
    );
    setItemEdit("packagesTitleUpdate");
  };

  const handleUpdateWebsitePartnersTitles = () => {
    dispatch(
      setIsUpdateHome({ modal: true, modalCode: "website-partners-title" })
    );
    setItemEdit("partnersTitleUpdate");
  };

  const handleUpdateWebsiteTestimonialTitles = () => {
    dispatch(
      setIsUpdateHome({
        modal: true,
        modalCode: "website-testimonial-title",
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
        <Navigation menu="services" submenu="web-design-and-development" />
        <Dashboard>
          <div className="mx-5 pt-2">
            <div className="py-5 flex  ">
              <BreadCrumbs param={location.search} />
              <div className="text-sm text-[black] font-semibold">
                <h2>Website Design</h2>
              </div>
            </div>
            <div className=" pb-4 bg-light shadow-xl">
              <Header
                headerData={headerData}
                handleUpdateHeader={handleUpdateHeader}
                isLoading={isLoading}
                services={"web services"}
                page={"Web Design"}
              />
              <WebsiteBanner
                websiteData={websiteData}
                handleUpdateWebsiteBanner={handleUpdateWebsiteBanner}
              />
              <WebsiteOverview
                handleUpdateWebsiteOverview={handleUpdateWebsiteOverview}
                handleUpdateWebsiteOverviewList={
                  handleUpdateWebsiteOverviewList
                }
                websiteOverviewData={websiteOverviewData}
              />
              <WebsiteScope
                handleUpdateWebsiteScopeTitles={handleUpdateWebsiteScopeTitles}
                handleUpdateWebsiteScope={handleUpdateWebsiteScope}
                setItemEdit={setItemEdit}
                isLoadingScope={isLoadingScope}
                isFetchingScope={isFetchingScope}
                errorScope={errorScope}
                websiteTitlesData={websiteTitlesData}
                websiteScopeData={websiteScopeData}
              />
              <WebsitePricing
                handleUpdateWebsitePackagesTitles={
                  handleUpdateWebsitePackagesTitles
                }
                websiteTitlesData={websiteTitlesData}
              />
              <WebsitePartners
                handleUpdateWebsitePartnersTitles={
                  handleUpdateWebsitePartnersTitles
                }
                websiteTitlesData={websiteTitlesData}
              />
              <WebsitePartnerSays
                handleUpdateWebsiteTestimonialTitles={
                  handleUpdateWebsiteTestimonialTitles
                }
                websiteTitlesData={websiteTitlesData}
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
        store.isUpdateHome?.modalCode === "website-banner" && (
          <ModalUpdateWebsiteBanner
            itemEdit={itemEdit}
            websiteData={websiteData}
          />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "website-overview" && (
          <ModalUpdateWebsiteOverview
            itemEdit={itemEdit}
            websiteOverviewData={websiteOverviewData}
          />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "website-overview-list" && (
          <ModalUpdateWebsiteOverviewList
            itemEdit={itemEdit}
            websiteOverviewData={websiteOverviewData}
          />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "website-scope" && (
          <ModalUpdateWebsiteScope itemEdit={itemEdit} />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "website-scope-title" && (
          <ModalUpdateWebsiteScopeTitle
            itemEdit={itemEdit}
            websiteTitlesData={websiteTitlesData}
          />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "website-packages-title" && (
          <ModalUpdateWebsitePackagesTitle
            itemEdit={itemEdit}
            websiteTitlesData={websiteTitlesData}
          />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "website-partners-title" && (
          <ModalUpdateWebsitePartnersTitle
            itemEdit={itemEdit}
            websiteTitlesData={websiteTitlesData}
          />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "website-testimonial-title" && (
          <ModalUpdateWebsitePartnerSaysTitle
            itemEdit={itemEdit}
            websiteTitlesData={websiteTitlesData}
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

export default WebsiteDesign;
