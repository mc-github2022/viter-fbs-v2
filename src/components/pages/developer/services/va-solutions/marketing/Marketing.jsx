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
import MarketingBanner from "./marketing-banner/MarketingBanner";
import ModalUpdateMarketingBanner from "./marketing-banner/ModalUpdateMarketingBanner";
import MarketingOverview from "./marketing-overview/MarketingOverview";
import ModalUpdateMarketingOverview from "./marketing-overview/ModalUpdateMarketingOverview";
import ModalUpdateMarketingOverviewList from "./marketing-overview/ModalUpdateMarketingOverviewList";
import MarketingPartners from "./marketing-partners/MarketingPartners";
import MarketingPartnerSays from "./marketing-partnersays/MarketingPartnerSays";
import MarketingPricing from "./marketing-pricing/MarketingPricing";
import MarketingServices from "./marketing-services/MarketingServices";
import ModalUpdateMarketingServicesList from "./marketing-services/ModalUpdateMarketingServicesList";
import ModalUpdateMarketingServicesTitle from "./marketing-services/ModalUpdateMarketingServicesTitle";
import ModalUpdateMarketingPackagesTitle from "./marketing-titles/ModalUpdateMarketingPackagesTitle";
import ModalUpdateMarketingPartnerSaysTitle from "./marketing-titles/ModalUpdateMarketingPartnerSaysTitle";
import ModalUpdateMarketingPartnersTitle from "./marketing-titles/ModalUpdateMarketingPartnersTitle";

const Marketing = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [itemEdit, setItemEdit] = React.useState(null);
  const [pageName, setPageName] = React.useState("va-marketing");

  const { data: marketingData } = useQueryData(
    `${apiVersion}/marketing`, // endpoint
    "get", // method
    "marketing" // key
  );

  const { data: marketingOverviewData } = useQueryData(
    `${apiVersion}/marketing-overview`, // endpoint
    "get", // method
    "marketing-overview" // key
  );

  const {
    isFetchingServices,
    isLoadingServices,
    error,
    data: marketingServicesData,
  } = useQueryData(
    `${apiVersion}/marketing-services-list`, // endpoint
    "get", // method
    "marketing-services-list" // key
  );

  const { data: marketingServicesTitleData } = useQueryData(
    `${apiVersion}/marketing-services-title`, // endpoint
    "get", // method
    "marketing-services-title" // key
  );

  const { data: marketingTitlesData } = useQueryData(
    `${apiVersion}/marketing-titles`, // endpoint
    "get", // method
    "marketing-titles" // key
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

  const handleUpdateMarketingBanner = () => {
    dispatch(setIsUpdateHome({ modal: true, modalCode: "marketing-banner" }));
    setItemEdit("marketingBannerUpdate");
  };

  const handleUpdateMarketingOverview = () => {
    dispatch(setIsUpdateHome({ modal: true, modalCode: "marketing-overview" }));
    setItemEdit("marketingOverviewUpdateImg");
  };

  const handleUpdateMarketingOverviewList = () => {
    dispatch(
      setIsUpdateHome({
        modal: true,
        modalCode: "marketing-overview-list",
      })
    );
    setItemEdit("marketingOverviewListUpdate");
  };

  const handleUpdateMarketingServicesTitle = () => {
    dispatch(
      setIsUpdateHome({
        modal: true,
        modalCode: "marketing-services-title",
      })
    );
    setItemEdit("marketingServicesUpdateTitle");
  };

  const handleUpdateMarketingServicesList = () => {
    dispatch(
      setIsUpdateHome({
        modal: true,
        modalCode: "marketing-services-list",
      })
    );
    setItemEdit(null);
  };

  const handleUpdateMarketingPackagesTitles = () => {
    dispatch(
      setIsUpdateHome({
        modal: true,
        modalCode: "marketing-packages-title",
      })
    );
    setItemEdit("packagesTitleUpdate");
  };

  const handleUpdateMarketingPartnersTitles = () => {
    dispatch(
      setIsUpdateHome({
        modal: true,
        modalCode: "marketing-partners-title",
      })
    );
    setItemEdit("partnersTitleUpdate");
  };

  const handleUpdateMarketingTestimonialTitles = () => {
    dispatch(
      setIsUpdateHome({
        modal: true,
        modalCode: "marketing-testimonial-title",
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
        <Navigation menu="services" submenu="virtual-assistant-solutions" />
        <Dashboard>
          <div className="mx-5 pt-2">
            <div className="py-5 flex  ">
              <BreadCrumbs param={location.search} />
              <div className="text-sm text-[black] font-semibold">
                <h2>Marketing</h2>
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
              <MarketingBanner
                marketingData={marketingData}
                handleUpdateMarketingBanner={handleUpdateMarketingBanner}
              />
              <MarketingOverview
                handleUpdateMarketingOverview={handleUpdateMarketingOverview}
                handleUpdateMarketingOverviewList={
                  handleUpdateMarketingOverviewList
                }
                marketingOverviewData={marketingOverviewData}
                pageName={pageName}
              />
              <MarketingServices
                pageName={pageName}
                handleUpdateMarketingServicesTitle={
                  handleUpdateMarketingServicesTitle
                }
                handleUpdateMarketingServicesList={
                  handleUpdateMarketingServicesList
                }
                marketingServicesData={marketingServicesData}
                marketingServicesTitleData={marketingServicesTitleData}
                isFetchingServices={isFetchingServices}
                isLoadingServices={isLoadingServices}
                error={error}
                setItemEdit={setItemEdit}
              />
              <MarketingPricing
                handleUpdateMarketingPackagesTitles={
                  handleUpdateMarketingPackagesTitles
                }
                marketingTitlesData={marketingTitlesData}
              />
              <MarketingPartners
                handleUpdateMarketingPartnersTitles={
                  handleUpdateMarketingPartnersTitles
                }
                marketingTitlesData={marketingTitlesData}
              />
              <MarketingPartnerSays
                handleUpdateMarketingTestimonialTitles={
                  handleUpdateMarketingTestimonialTitles
                }
                marketingTitlesData={marketingTitlesData}
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
        store.isUpdateHome?.modalCode === "marketing-banner" && (
          <ModalUpdateMarketingBanner
            itemEdit={itemEdit}
            marketingData={marketingData}
          />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "marketing-overview" && (
          <ModalUpdateMarketingOverview
            itemEdit={itemEdit}
            marketingOverviewData={marketingOverviewData}
          />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "marketing-overview-list" && (
          <ModalUpdateMarketingOverviewList
            itemEdit={itemEdit}
            marketingOverviewData={marketingOverviewData}
          />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "marketing-services-title" && (
          <ModalUpdateMarketingServicesTitle
            itemEdit={itemEdit}
            marketingServicesTitleData={marketingServicesTitleData}
          />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "marketing-services-list" && (
          <ModalUpdateMarketingServicesList itemEdit={itemEdit} />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "marketing-packages-title" && (
          <ModalUpdateMarketingPackagesTitle
            itemEdit={itemEdit}
            marketingTitlesData={marketingTitlesData}
          />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "marketing-partners-title" && (
          <ModalUpdateMarketingPartnersTitle
            itemEdit={itemEdit}
            marketingTitlesData={marketingTitlesData}
          />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "marketing-testimonial-title" && (
          <ModalUpdateMarketingPartnerSaysTitle
            itemEdit={itemEdit}
            marketingTitlesData={marketingTitlesData}
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

export default Marketing;
