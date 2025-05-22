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
import ServiceHrPartners from "../../../../website/webapp/serviceHr/ServiceHrPartners";
import ServiceHrPartnersSay from "../../../../website/webapp/serviceHr/ServiceHrPartnersSay";
import Footer from "../../../footer/Footer";
import ModalUpdateCopyright from "../../../footer/ModalUpdateCopyright";
import ModalUpdateQuickLinks from "../../../footer/ModalUpdateQuickLinks";
import HrisBanner from "./hris-banner/HrisBanner";
import ModalUpdateHrisBanner from "./hris-banner/ModalUpdateHrisBanner";
import HrisOverview from "./hris-overview/HrisOverview";
import ModalUpdateHrisOverview from "./hris-overview/ModalUpdateHrisOverview";
import ModalUpdateHrisOverviewList from "./hris-overview/ModalUpdateHrisOverviewList";
import HrisPricing from "./hris-pricing/HrisPricing";
import HrisScope from "./hris-scope/HrisScope";
import ModalUpdateHrisScopeTitle from "./hris-titles/ModalUpdateHrisScopeTitle";
import ModalUpdateHrisPackagesTitle from "./hris-titles/ModalUpdateHrisPackagesTitle";
import ModalUpdateContactUs from "../../../footer/ModalUpdateContactUs";
import ModalUpdateLogoImg from "../../../footer/ModalUpdateLogoImg";
import HrisPartners from "./hris-partners/HrisPartners";
import ModalUpdateHrisPartnersTitle from "./hris-titles/ModalUpdateHrisPartnersTitle";
import HrisPartnerSays from "./hris-partnersays/HrisPartnerSays";
import ModalUpdateHrisPartnerSaysTitle from "./hris-titles/ModalUpdateHrisPartnerSaysTitle";
import Header from "../../../header/Header";
import ModalUpdateHeader from "../../../header/ModalUpdateHeader";
import ModalUpdateHrisScope from "./hris-scope/ModalUpdateHrisScope";

const HrInformationSystem = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [itemEdit, setItemEdit] = React.useState(null);

  const { data: hrisData } = useQueryData(
    `${apiVersion}/hris`, // endpoint
    "get", // method
    "hris" // key
  );

  const { data: hrisOverviewData } = useQueryData(
    `${apiVersion}/hris-overview`, // endpoint
    "get", // method
    "hris-overview" // key
  );

  const {
    isLoading: isLoadingScope,
    isFetching: isFetchingScope,
    data: hrisScopeData,
  } = useQueryData(
    `${apiVersion}/hris-scope`, // endpoint
    "get", // method
    "hris-scope" // key
  );

  const { data: hrisTitlesData } = useQueryData(
    `${apiVersion}/hris-titles`, // endpoint
    "get", // method
    "hris-titles" // key
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

  const handleUpdateHrisBanner = () => {
    dispatch(setIsUpdateHome({ modal: true, modalCode: "hris-banner" }));
    setItemEdit("hrisBannerUpdate");
  };

  const handleUpdateHrisOverview = () => {
    dispatch(setIsUpdateHome({ modal: true, modalCode: "hris-overview" }));
    setItemEdit("hrisOverviewUpdateImg");
  };

  const handleUpdateHrisOverviewList = () => {
    dispatch(setIsUpdateHome({ modal: true, modalCode: "hris-overview-list" }));
    setItemEdit("hrisOverviewListUpdate");
  };

  const handleUpdateHrisScope = () => {
    dispatch(setIsUpdateHome({ modal: true, modalCode: "hris-scope" }));
    setItemEdit(null);
  };

  const handleUpdateHrisScopeTitles = () => {
    dispatch(setIsUpdateHome({ modal: true, modalCode: "hris-scope-title" }));
    setItemEdit("scopeTitleUpdate");
  };

  const handleUpdateHrisPackagesTitles = () => {
    dispatch(
      setIsUpdateHome({ modal: true, modalCode: "hris-packages-title" })
    );
    setItemEdit("packagesTitleUpdate");
  };

  const handleUpdateHrisPartnersTitles = () => {
    dispatch(
      setIsUpdateHome({ modal: true, modalCode: "hris-partners-title" })
    );
    setItemEdit("partnersTitleUpdate");
  };

  const handleUpdateHrisTestimonialTitles = () => {
    dispatch(
      setIsUpdateHome({ modal: true, modalCode: "hris-testimonial-title" })
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
        <Navigation menu="services" submenu="web-application" />
        <Dashboard>
          <div className="mx-5 pt-2">
            <div className="py-5 flex  ">
              <BreadCrumbs param={location.search} />
              <div className="text-sm text-[black] font-semibold">
                <h2>HR Information System</h2>
              </div>
            </div>
            <div className=" pb-4 bg-light shadow-xl">
              <Header
                headerData={headerData}
                handleUpdateHeader={handleUpdateHeader}
                isLoading={isLoading}
              />
              <HrisBanner
                hrisData={hrisData}
                handleUpdateHrisBanner={handleUpdateHrisBanner}
              />
              <HrisOverview
                handleUpdateHrisOverview={handleUpdateHrisOverview}
                handleUpdateHrisOverviewList={handleUpdateHrisOverviewList}
                hrisOverviewData={hrisOverviewData}
                hrisData={hrisData}
              />
              <HrisScope
                handleUpdateHrisScopeTitles={handleUpdateHrisScopeTitles}
                handleUpdateHrisScope={handleUpdateHrisScope}
                setItemEdit={setItemEdit}
                isLoadingScope={isLoadingScope}
                isFetchingScope={isFetchingScope}
                hrisTitlesData={hrisTitlesData}
                hrisScopeData={hrisScopeData}
                hrisData={hrisData}
              />
              <HrisPricing
                handleUpdateHrisPackagesTitles={handleUpdateHrisPackagesTitles}
                hrisTitlesData={hrisTitlesData}
              />
              <HrisPartners
                handleUpdateHrisPartnersTitles={handleUpdateHrisPartnersTitles}
                hrisTitlesData={hrisTitlesData}
              />
              <HrisPartnerSays
                handleUpdateHrisTestimonialTitles={
                  handleUpdateHrisTestimonialTitles
                }
                hrisTitlesData={hrisTitlesData}
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
        store.isUpdateHome?.modalCode === "hris-banner" && (
          <ModalUpdateHrisBanner itemEdit={itemEdit} hrisData={hrisData} />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "hris-overview" && (
          <ModalUpdateHrisOverview
            itemEdit={itemEdit}
            hrisOverviewData={hrisOverviewData}
          />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "hris-overview-list" && (
          <ModalUpdateHrisOverviewList
            itemEdit={itemEdit}
            hrisOverviewData={hrisOverviewData}
          />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "hris-scope" && (
          <ModalUpdateHrisScope itemEdit={itemEdit} />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "hris-scope-title" && (
          <ModalUpdateHrisScopeTitle
            itemEdit={itemEdit}
            hrisTitlesData={hrisTitlesData}
          />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "hris-packages-title" && (
          <ModalUpdateHrisPackagesTitle
            itemEdit={itemEdit}
            hrisTitlesData={hrisTitlesData}
          />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "hris-partners-title" && (
          <ModalUpdateHrisPartnersTitle
            itemEdit={itemEdit}
            hrisTitlesData={hrisTitlesData}
          />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "hris-testimonial-title" && (
          <ModalUpdateHrisPartnerSaysTitle
            itemEdit={itemEdit}
            hrisTitlesData={hrisTitlesData}
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
        store.isUpdateHome?.modalCode === "footer-contactus" && (
          <ModalUpdateContactUs itemEdit={itemEdit} footerData={footerData} />
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

export default HrInformationSystem;
