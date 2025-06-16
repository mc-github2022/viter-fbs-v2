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
import AdministrativeBanner from "./administrative-banner/AdministrativeBanner";
import ModalUpdateAdministrativeBanner from "./administrative-banner/ModalUpdateAdministrativeBanner";
import AdministrativeOverview from "./administrative-overview/AdministrativeOverview";
import ModalUpdateAdministrativeOverview from "./administrative-overview/ModalUpdateAdministrativeOverview";
import ModalUpdateAdministrativeOverviewList from "./administrative-overview/ModalUpdateAdministrativeOverviewList";
import AdministrativeServices from "./administrative-services/AdministrativeServices";
import ModalUpdateAdministrativeServicesList from "./administrative-services/ModalUpdateAdministrativeServicesList";
import ModalUpdateAdministrativeServicesTitle from "./administrative-services/ModalUpdateAdministrativeServicesTitle";
import AdministrativePricing from "./administrative-pricing/AdministrativePricing";
import AdministrativePartners from "./administrative-partners/AdministrativePartners";
import AdministrativePartnerSays from "./administrative-partnersays/AdministrativePartnerSays";
import ModalUpdateAdministrativePackagesTitle from "./administrative-titles/ModalUpdateAdministrativePackagesTitle";
import ModalUpdateAdministrativePartnersTitle from "./administrative-titles/ModalUpdateAdministrativePartnersTitle";
import ModalUpdateAdministrativePartnerSaysTitle from "./administrative-titles/ModalUpdateAdministrativePartnerSaysTitle";

const Administrative = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [itemEdit, setItemEdit] = React.useState(null);
  const [pageName, setPageName] = React.useState("va-administrative");

  const { data: administrativeData } = useQueryData(
    `${apiVersion}/administrative`, // endpoint
    "get", // method
    "administrative" // key
  );

  const { data: administrativeOverviewData } = useQueryData(
    `${apiVersion}/administrative-overview`, // endpoint
    "get", // method
    "administrative-overview" // key
  );

  const {
    isFetchingServices,
    isLoadingServices,
    error,
    data: administrativeServicesData,
  } = useQueryData(
    `${apiVersion}/administrative-services-list`, // endpoint
    "get", // method
    "administrative-services-list" // key
  );

  const { data: administrativeServicesTitleData } = useQueryData(
    `${apiVersion}/administrative-services-title`, // endpoint
    "get", // method
    "administrative-services-title" // key
  );

  const { data: administrativeTitlesData } = useQueryData(
    `${apiVersion}/administrative-titles`, // endpoint
    "get", // method
    "administrative-titles" // key
  );

  const { data: contactFormDefaultData } = useQueryData(
    `${apiVersion}/contactDefault`, // endpoint
    "get", // method
    "contactDefault" // key
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

  const handleUpdateAdministrativeBanner = () => {
    dispatch(
      setIsUpdateHome({ modal: true, modalCode: "administrative-banner" })
    );
    setItemEdit("administrativeBannerUpdate");
  };

  const handleUpdateAdministrativeOverview = () => {
    dispatch(
      setIsUpdateHome({ modal: true, modalCode: "administrative-overview" })
    );
    setItemEdit("administrativeOverviewUpdateImg");
  };

  const handleUpdateAdministrativeOverviewList = () => {
    dispatch(
      setIsUpdateHome({
        modal: true,
        modalCode: "administrative-overview-list",
      })
    );
    setItemEdit("administrativeOverviewListUpdate");
  };

  const handleUpdateAdministrativeServicesTitle = () => {
    dispatch(
      setIsUpdateHome({
        modal: true,
        modalCode: "administrative-services-title",
      })
    );
    setItemEdit("administrativeServicesUpdateTitle");
  };

  const handleUpdateAdministrativeServicesList = () => {
    dispatch(
      setIsUpdateHome({
        modal: true,
        modalCode: "administrative-services-list",
      })
    );
    setItemEdit(null);
  };

  const handleUpdateAdministrativePackagesTitles = () => {
    dispatch(
      setIsUpdateHome({
        modal: true,
        modalCode: "administrative-packages-title",
      })
    );
    setItemEdit("packagesTitleUpdate");
  };

  const handleUpdateAdministrativePartnersTitles = () => {
    dispatch(
      setIsUpdateHome({
        modal: true,
        modalCode: "administrative-partners-title",
      })
    );
    setItemEdit("partnersTitleUpdate");
  };

  const handleUpdateAdministrativeTestimonialTitles = () => {
    dispatch(
      setIsUpdateHome({
        modal: true,
        modalCode: "administrative-testimonial-title",
      })
    );
    setItemEdit("testimonialTitleUpdate");
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
                <h2>Administrative</h2>
              </div>
            </div>
            <div className=" pb-4 bg-light shadow-xl">
              <Header
                headerData={headerData}
                handleUpdateHeader={handleUpdateHeader}
                isLoading={isLoading}
              />
              <AdministrativeBanner
                administrativeData={administrativeData}
                handleUpdateAdministrativeBanner={
                  handleUpdateAdministrativeBanner
                }
                handleUpdateContactFormDefault={handleUpdateContactFormDefault}
                contactFormDefaultData={contactFormDefaultData}
              />
              <AdministrativeOverview
                handleUpdateAdministrativeOverview={
                  handleUpdateAdministrativeOverview
                }
                handleUpdateAdministrativeOverviewList={
                  handleUpdateAdministrativeOverviewList
                }
                administrativeOverviewData={administrativeOverviewData}
                contactFormDefaultData={contactFormDefaultData}
                handleUpdateContactFormDefault={handleUpdateContactFormDefault}
                pageName={pageName}
              />
              <AdministrativeServices
                pageName={pageName}
                contactFormDefaultData={contactFormDefaultData}
                handleUpdateContactFormDefault={handleUpdateContactFormDefault}
                handleUpdateAdministrativeServicesTitle={
                  handleUpdateAdministrativeServicesTitle
                }
                handleUpdateAdministrativeServicesList={
                  handleUpdateAdministrativeServicesList
                }
                administrativeServicesData={administrativeServicesData}
                administrativeServicesTitleData={
                  administrativeServicesTitleData
                }
                isFetchingServices={isFetchingServices}
                isLoadingServices={isLoadingServices}
                error={error}
                setItemEdit={setItemEdit}
              />
              <AdministrativePricing
                handleUpdateAdministrativePackagesTitles={
                  handleUpdateAdministrativePackagesTitles
                }
                administrativeTitlesData={administrativeTitlesData}
              />
              <AdministrativePartners
                handleUpdateAdministrativePartnersTitles={
                  handleUpdateAdministrativePartnersTitles
                }
                administrativeTitlesData={administrativeTitlesData}
              />
              <AdministrativePartnerSays
                handleUpdateAdministrativeTestimonialTitles={
                  handleUpdateAdministrativeTestimonialTitles
                }
                administrativeTitlesData={administrativeTitlesData}
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
        store.isUpdateHome?.modalCode === "administrative-banner" && (
          <ModalUpdateAdministrativeBanner
            itemEdit={itemEdit}
            administrativeData={administrativeData}
          />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "administrative-overview" && (
          <ModalUpdateAdministrativeOverview
            itemEdit={itemEdit}
            administrativeOverviewData={administrativeOverviewData}
          />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "administrative-overview-list" && (
          <ModalUpdateAdministrativeOverviewList
            itemEdit={itemEdit}
            administrativeOverviewData={administrativeOverviewData}
          />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "administrative-services-title" && (
          <ModalUpdateAdministrativeServicesTitle
            itemEdit={itemEdit}
            administrativeServicesTitleData={administrativeServicesTitleData}
          />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "administrative-services-list" && (
          <ModalUpdateAdministrativeServicesList itemEdit={itemEdit} />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "administrative-packages-title" && (
          <ModalUpdateAdministrativePackagesTitle
            itemEdit={itemEdit}
            administrativeTitlesData={administrativeTitlesData}
          />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "administrative-partners-title" && (
          <ModalUpdateAdministrativePartnersTitle
            itemEdit={itemEdit}
            administrativeTitlesData={administrativeTitlesData}
          />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode ===
          "administrative-testimonial-title" && (
          <ModalUpdateAdministrativePartnerSaysTitle
            itemEdit={itemEdit}
            administrativeTitlesData={administrativeTitlesData}
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

export default Administrative;
