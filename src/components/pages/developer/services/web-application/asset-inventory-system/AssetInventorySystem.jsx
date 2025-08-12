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
import AssetBanner from "./asset-banner/AssetBanner";
import ModalUpdateAssetBanner from "./asset-banner/ModalUpdateAssetBanner";
import AssetOverview from "./asset-overview/AssetOverview";
import ModalUpdateAssetOverview from "./asset-overview/ModalUpdateAssetOverview";
import ModalUpdateAssetOverviewList from "./asset-overview/ModalUpdateAssetOverviewList";
import AssetPricing from "./asset-pricing/AssetPricing";
import AssetScope from "./asset-scope/AssetScope";
import ModalUpdateAssetScope from "./asset-scope/ModalUpdateAssetScope";
import ModalUpdateAssetPackagesTitle from "./asset-titles/ModalUpdateAssetPackagesTitle";
import ModalUpdateAssetScopeTitle from "./asset-titles/ModalUpdateAssetScopeTitle";

const AssetInventorySystem = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [itemEdit, setItemEdit] = React.useState(null);

  const { data: assetData } = useQueryData(
    `${apiVersion}/asset`, // endpoint
    "get", // method
    "asset" // key
  );

  const { data: assetOverviewData } = useQueryData(
    `${apiVersion}/asset-overview`, // endpoint
    "get", // method
    "asset-overview" // key
  );

  const {
    isLoading: isLoadingScope,
    isFetching: isFetchingScope,
    data: assetScopeData,
  } = useQueryData(
    `${apiVersion}/asset-scope`, // endpoint
    "get", // method
    "asset-scope" // key
  );

  const { data: assetTitlesData } = useQueryData(
    `${apiVersion}/asset-titles`, // endpoint
    "get", // method
    "asset-titles" // key
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

  const handleUpdateAssetBanner = () => {
    dispatch(setIsUpdateHome({ modal: true, modalCode: "asset-banner" }));
    setItemEdit("assetBannerUpdate");
  };

  const handleUpdateAssetOverview = () => {
    dispatch(setIsUpdateHome({ modal: true, modalCode: "asset-overview" }));
    setItemEdit("assetOverviewUpdateImg");
  };

  const handleUpdateAssetOverviewList = () => {
    dispatch(
      setIsUpdateHome({ modal: true, modalCode: "asset-overview-list" })
    );
    setItemEdit("assetOverviewListUpdate");
  };

  const handleUpdateAssetScope = () => {
    dispatch(setIsUpdateHome({ modal: true, modalCode: "asset-scope" }));
    setItemEdit(null);
  };

  const handleUpdateAssetScopeTitles = () => {
    dispatch(setIsUpdateHome({ modal: true, modalCode: "asset-scope-title" }));
    setItemEdit("scopeTitleUpdate");
  };

  const handleUpdateAssetPackagesTitles = () => {
    dispatch(
      setIsUpdateHome({ modal: true, modalCode: "asset-packages-title" })
    );
    setItemEdit("packagesTitleUpdate");
  };

  // const handleUpdateAssetPartnersTitles = () => {
  //   dispatch(
  //     setIsUpdateHome({ modal: true, modalCode: "asset-partners-title" })
  //   );
  //   setItemEdit("partnersTitleUpdate");
  // };

  // const handleUpdateAssetTestimonialTitles = () => {
  //   dispatch(
  //     setIsUpdateHome({
  //       modal: true,
  //       modalCode: "asset-testimonial-title",
  //     })
  //   );
  //   setItemEdit("testimonialTitleUpdate");
  // };

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
        <Navigation menu="services" submenu="web-application" />
        <Dashboard>
          <div className="mx-5 pt-2">
            <div className="py-5 flex  ">
              <BreadCrumbs param={location.search} />
              <div className="text-sm text-[black] font-semibold">
                <h2>Asset Inventory System</h2>
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
              <AssetBanner
                assetData={assetData}
                handleUpdateAssetBanner={handleUpdateAssetBanner}
              />
              <AssetOverview
                handleUpdateAssetOverview={handleUpdateAssetOverview}
                handleUpdateAssetOverviewList={handleUpdateAssetOverviewList}
                assetOverviewData={assetOverviewData}
              />
              <AssetScope
                handleUpdateAssetScopeTitles={handleUpdateAssetScopeTitles}
                handleUpdateAssetScope={handleUpdateAssetScope}
                setItemEdit={setItemEdit}
                isLoadingScope={isLoadingScope}
                isFetchingScope={isFetchingScope}
                assetTitlesData={assetTitlesData}
                assetScopeData={assetScopeData}
              />
              <AssetPricing
                handleUpdateAssetPackagesTitles={
                  handleUpdateAssetPackagesTitles
                }
                assetTitlesData={assetTitlesData}
              />
              {/* <AssetPartners
                handleUpdateAssetPartnersTitles={
                  handleUpdateAssetPartnersTitles
                }
                enrollmentTitlesData={enrollmentTitlesData}
              /> */}
              {/* <AssetPartnerSays
                handleUpdateAssetTestimonialTitles={
                  handleUpdateAssetTestimonialTitles
                }
                enrollmentTitlesData={enrollmentTitlesData}
              /> */}
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
        store.isUpdateHome?.modalCode === "asset-banner" && (
          <ModalUpdateAssetBanner itemEdit={itemEdit} assetData={assetData} />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "asset-overview" && (
          <ModalUpdateAssetOverview
            itemEdit={itemEdit}
            assetOverviewData={assetOverviewData}
          />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "asset-overview-list" && (
          <ModalUpdateAssetOverviewList
            itemEdit={itemEdit}
            assetOverviewData={assetOverviewData}
          />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "asset-scope" && (
          <ModalUpdateAssetScope itemEdit={itemEdit} />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "asset-scope-title" && (
          <ModalUpdateAssetScopeTitle
            itemEdit={itemEdit}
            assetTitlesData={assetTitlesData}
          />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "asset-packages-title" && (
          <ModalUpdateAssetPackagesTitle
            itemEdit={itemEdit}
            assetTitlesData={assetTitlesData}
          />
        )}

      {/* {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "asset-partners-title" && (
          <ModalUpdateAssetPartnersTitle
            itemEdit={itemEdit}
            assetTitlesData={assetTitlesData}
          />
        )} */}

      {/* {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "asset-testimonial-title" && (
          <ModalUpdateAssetPartnerSaysTitle
            itemEdit={itemEdit}
            assetTitlesData={assetTitlesData}
          />
        )} */}

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

export default AssetInventorySystem;
