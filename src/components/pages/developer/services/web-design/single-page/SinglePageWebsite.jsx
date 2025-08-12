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
import ModalUpdateSinglepageBanner from "./single-banner/ModalUpdateSinglepageBanner";
import SinglepageBanner from "./single-banner/SinglepageBanner";
import ModalUpdateSinglepageOverview from "./single-overview/ModalUpdateSinglepageOverview";
import ModalUpdateSinglepageOverviewList from "./single-overview/ModalUpdateSinglepageOverviewList";
import SinglepageOverview from "./single-overview/SinglepageOverview";
import SinglepagePartners from "./single-partners/SinglepagePartners";
import SinglepagePricing from "./single-pricing/SinglepagePricing";
import ModalUpdateSinglepageScope from "./single-scope/ModalUpdateSinglepageScope";
import SinglepageScope from "./single-scope/SinglepageScope";
import ModalUpdateSinglepagePackagesTitle from "./single-titles/ModalUpdateSinglepagePackagesTitle";
import ModalUpdateSinglepagePartnersTitle from "./single-titles/ModalUpdateSinglepagePartnersTitle";
import ModalUpdateSinglepageScopeTitle from "./single-titles/ModalUpdateSinglepageScopeTitle";

const SinglePageWebsite = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [itemEdit, setItemEdit] = React.useState(null);

  const { data: singlepageData } = useQueryData(
    `${apiVersion}/singlepage`, // endpoint
    "get", // method
    "singlepage" // key
  );

  const { data: singlepageOverviewData } = useQueryData(
    `${apiVersion}/singlepage-overview`, // endpoint
    "get", // method
    "singlepage-overview" // key
  );

  const {
    isLoading: isLoadingScope,
    isFetching: isFetchingScope,
    error: errorScope,
    data: singlepageScopeData,
  } = useQueryData(
    `${apiVersion}/singlepage-scope`, // endpoint
    "get", // method
    "singlepage-scope" // key
  );

  const { data: singlepageTitlesData } = useQueryData(
    `${apiVersion}/singlepage-titles`, // endpoint
    "get", // method
    "singlepage-titles" // key
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

  const handleUpdateSinglepageBanner = () => {
    dispatch(setIsUpdateHome({ modal: true, modalCode: "singlepage-banner" }));
    setItemEdit("singlepageBannerUpdate");
  };

  const handleUpdateSinglepageOverview = () => {
    dispatch(
      setIsUpdateHome({ modal: true, modalCode: "singlepage-overview" })
    );
    setItemEdit("singlepageOverviewUpdateImg");
  };

  const handleUpdateSinglepageOverviewList = () => {
    dispatch(
      setIsUpdateHome({ modal: true, modalCode: "singlepage-overview-list" })
    );
    setItemEdit("singlepageOverviewListUpdate");
  };

  const handleUpdateSinglepageScope = () => {
    dispatch(setIsUpdateHome({ modal: true, modalCode: "singlepage-scope" }));
    setItemEdit(null);
  };

  const handleUpdateSinglepageScopeTitles = () => {
    dispatch(
      setIsUpdateHome({ modal: true, modalCode: "singlepage-scope-title" })
    );
    setItemEdit("scopeTitleUpdate");
  };

  const handleUpdateSinglepagePackagesTitles = () => {
    dispatch(
      setIsUpdateHome({ modal: true, modalCode: "singlepage-packages-title" })
    );
    setItemEdit("packagesTitleUpdate");
  };

  const handleUpdateSinglepagePartnersTitles = () => {
    dispatch(
      setIsUpdateHome({ modal: true, modalCode: "singlepage-partners-title" })
    );
    setItemEdit("partnersTitleUpdate");
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
                <h2>Single Page Website</h2>
              </div>
            </div>
            <div className=" pb-4 bg-light shadow-xl">
              <Header
                headerData={headerData}
                handleUpdateHeader={handleUpdateHeader}
                isLoading={isLoading}
                services={"web services"}
                page={"Single Page Website"}
              />
              <SinglepageBanner
                singlepageData={singlepageData}
                handleUpdateSinglepageBanner={handleUpdateSinglepageBanner}
              />
              <SinglepageOverview
                handleUpdateSinglepageOverview={handleUpdateSinglepageOverview}
                handleUpdateSinglepageOverviewList={
                  handleUpdateSinglepageOverviewList
                }
                singlepageOverviewData={singlepageOverviewData}
              />
              <SinglepageScope
                handleUpdateSinglepageScopeTitles={
                  handleUpdateSinglepageScopeTitles
                }
                handleUpdateSinglepageScope={handleUpdateSinglepageScope}
                setItemEdit={setItemEdit}
                isLoadingScope={isLoadingScope}
                isFetchingScope={isFetchingScope}
                errorScope={errorScope}
                singlepageTitlesData={singlepageTitlesData}
                singlepageScopeData={singlepageScopeData}
              />
              <SinglepagePricing
                handleUpdateSinglepagePackagesTitles={
                  handleUpdateSinglepagePackagesTitles
                }
                singlepageTitlesData={singlepageTitlesData}
              />
              <SinglepagePartners
                handleUpdateSinglepagePartnersTitles={
                  handleUpdateSinglepagePartnersTitles
                }
                singlepageTitlesData={singlepageTitlesData}
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
        store.isUpdateHome?.modalCode === "singlepage-banner" && (
          <ModalUpdateSinglepageBanner
            itemEdit={itemEdit}
            singlepageData={singlepageData}
          />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "singlepage-overview" && (
          <ModalUpdateSinglepageOverview
            itemEdit={itemEdit}
            singlepageOverviewData={singlepageOverviewData}
          />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "singlepage-overview-list" && (
          <ModalUpdateSinglepageOverviewList
            itemEdit={itemEdit}
            singlepageOverviewData={singlepageOverviewData}
          />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "singlepage-scope" && (
          <ModalUpdateSinglepageScope itemEdit={itemEdit} />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "singlepage-scope-title" && (
          <ModalUpdateSinglepageScopeTitle
            itemEdit={itemEdit}
            singlepageTitlesData={singlepageTitlesData}
          />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "singlepage-packages-title" && (
          <ModalUpdateSinglepagePackagesTitle
            itemEdit={itemEdit}
            singlepageTitlesData={singlepageTitlesData}
          />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "singlepage-partners-title" && (
          <ModalUpdateSinglepagePartnersTitle
            itemEdit={itemEdit}
            singlepageTitlesData={singlepageTitlesData}
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

export default SinglePageWebsite;
