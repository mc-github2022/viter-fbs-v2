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
import BusinessBanner from "./business-banner/BusinessBanner";
import ModalUpdateBusinessBanner from "./business-banner/ModalUpdateBusinessBanner";
import BusinessOverview from "./business-overview/BusinessOverview";
import ModalUpdateBusinessOverview from "./business-overview/ModalUpdateBusinessOverview";
import ModalUpdateBusinessOverviewList from "./business-overview/ModalUpdateBusinessOverviewList";
import BusinessPartners from "./business-partners/BusinessPartners";
import BusinessPartnerSays from "./business-partnersays/BusinessPartnerSays";
import BusinessPricing from "./business-pricing/BusinessPricing";
import BusinessServices from "./business-services/BusinessServices";
import ModalUpdateBusinessServicesList from "./business-services/ModalUpdateBusinessServicesList";
import ModalUpdateBusinessServicesTitle from "./business-services/ModalUpdateBusinessServicesTitle";
import ModalUpdateBusinessPackagesTitle from "./business-titles/ModalUpdateBusinessPackagesTitle";
import ModalUpdateBusinessPartnerSaysTitle from "./business-titles/ModalUpdateBusinessPartnerSaysTitle";
import ModalUpdateBusinessPartnersTitle from "./business-titles/ModalUpdateBusinessPartnersTitle";

const BusinessSupport = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [itemEdit, setItemEdit] = React.useState(null);
  const [pageName, setPageName] = React.useState("va-business-support");

  const { data: businessData } = useQueryData(
    `${apiVersion}/business`, // endpoint
    "get", // method
    "business" // key
  );

  const { data: businessOverviewData } = useQueryData(
    `${apiVersion}/business-overview`, // endpoint
    "get", // method
    "business-overview" // key
  );

  const {
    isFetchingServices,
    isLoadingServices,
    error,
    data: businessServicesData,
  } = useQueryData(
    `${apiVersion}/business-services-list`, // endpoint
    "get", // method
    "business-services-list" // key
  );

  const { data: businessServicesTitleData } = useQueryData(
    `${apiVersion}/business-services-title`, // endpoint
    "get", // method
    "business-services-title" // key
  );

  const { data: businessTitlesData } = useQueryData(
    `${apiVersion}/business-titles`, // endpoint
    "get", // method
    "business-titles" // key
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

  const handleUpdateBusinessBanner = () => {
    dispatch(setIsUpdateHome({ modal: true, modalCode: "business-banner" }));
    setItemEdit("businessBannerUpdate");
  };

  const handleUpdateBusinessOverview = () => {
    dispatch(setIsUpdateHome({ modal: true, modalCode: "business-overview" }));
    setItemEdit("businessOverviewUpdateImg");
  };

  const handleUpdateBusinessOverviewList = () => {
    dispatch(
      setIsUpdateHome({
        modal: true,
        modalCode: "business-overview-list",
      })
    );
    setItemEdit("businessOverviewListUpdate");
  };

  const handleUpdateBusinessServicesTitle = () => {
    dispatch(
      setIsUpdateHome({
        modal: true,
        modalCode: "business-services-title",
      })
    );
    setItemEdit("businessServicesUpdateTitle");
  };

  const handleUpdateBusinessServicesList = () => {
    dispatch(
      setIsUpdateHome({
        modal: true,
        modalCode: "business-services-list",
      })
    );
    setItemEdit(null);
  };

  const handleUpdateBusinessPackagesTitles = () => {
    dispatch(
      setIsUpdateHome({
        modal: true,
        modalCode: "business-packages-title",
      })
    );
    setItemEdit("packagesTitleUpdate");
  };

  const handleUpdateBusinessPartnersTitles = () => {
    dispatch(
      setIsUpdateHome({
        modal: true,
        modalCode: "business-partners-title",
      })
    );
    setItemEdit("partnersTitleUpdate");
  };

  const handleUpdateBusinessTestimonialTitles = () => {
    dispatch(
      setIsUpdateHome({
        modal: true,
        modalCode: "business-testimonial-title",
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
                <h2>Business Support</h2>
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
              <BusinessBanner
                businessData={businessData}
                handleUpdateBusinessBanner={handleUpdateBusinessBanner}
              />
              <BusinessOverview
                handleUpdateBusinessOverview={handleUpdateBusinessOverview}
                handleUpdateBusinessOverviewList={
                  handleUpdateBusinessOverviewList
                }
                businessOverviewData={businessOverviewData}
                pageName={pageName}
              />
              <BusinessServices
                pageName={pageName}
                handleUpdateBusinessServicesTitle={
                  handleUpdateBusinessServicesTitle
                }
                handleUpdateBusinessServicesList={
                  handleUpdateBusinessServicesList
                }
                businessServicesData={businessServicesData}
                businessServicesTitleData={businessServicesTitleData}
                isFetchingServices={isFetchingServices}
                isLoadingServices={isLoadingServices}
                error={error}
                setItemEdit={setItemEdit}
              />
              <BusinessPricing
                handleUpdateBusinessPackagesTitles={
                  handleUpdateBusinessPackagesTitles
                }
                businessTitlesData={businessTitlesData}
              />
              <BusinessPartners
                handleUpdateBusinessPartnersTitles={
                  handleUpdateBusinessPartnersTitles
                }
                businessTitlesData={businessTitlesData}
              />
              <BusinessPartnerSays
                handleUpdateBusinessTestimonialTitles={
                  handleUpdateBusinessTestimonialTitles
                }
                businessTitlesData={businessTitlesData}
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
        store.isUpdateHome?.modalCode === "business-banner" && (
          <ModalUpdateBusinessBanner
            itemEdit={itemEdit}
            businessData={businessData}
          />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "business-overview" && (
          <ModalUpdateBusinessOverview
            itemEdit={itemEdit}
            businessOverviewData={businessOverviewData}
          />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "business-overview-list" && (
          <ModalUpdateBusinessOverviewList
            itemEdit={itemEdit}
            businessOverviewData={businessOverviewData}
          />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "business-services-title" && (
          <ModalUpdateBusinessServicesTitle
            itemEdit={itemEdit}
            businessServicesTitleData={businessServicesTitleData}
          />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "business-services-list" && (
          <ModalUpdateBusinessServicesList itemEdit={itemEdit} />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "business-packages-title" && (
          <ModalUpdateBusinessPackagesTitle
            itemEdit={itemEdit}
            businessTitlesData={businessTitlesData}
          />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "business-partners-title" && (
          <ModalUpdateBusinessPartnersTitle
            itemEdit={itemEdit}
            businessTitlesData={businessTitlesData}
          />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "business-testimonial-title" && (
          <ModalUpdateBusinessPartnerSaysTitle
            itemEdit={itemEdit}
            businessTitlesData={businessTitlesData}
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

export default BusinessSupport;
