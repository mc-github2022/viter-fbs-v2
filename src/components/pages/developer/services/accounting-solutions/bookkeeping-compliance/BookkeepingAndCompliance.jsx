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
import BookkeepingBanner from "./bookkeeping-banner/BookkeepingBanner";
import ModalUpdateBookkeepingBanner from "./bookkeeping-banner/ModalUpdateBookkeepingBanner";
import BookkeepingOverview from "./bookkeeping-overview/BookkeepingOverview";
import ModalUpdateBookkeepingOverview from "./bookkeeping-overview/ModalUpdateBookkeepingOverview";
import ModalUpdateBookkeepingOverviewList from "./bookkeeping-overview/ModalUpdateBookkeepingOverviewList";
import BookkeepingPricing from "./bookkeeping-pricing/BookkeepingPricing";
import ModalUpdateBookkeepingPackagesList from "./bookkeeping-pricing/ModalUpdateBookkeepingPackagesList";
import ModalUpdateBookkeepingPackagesTitle from "./bookkeeping-pricing/ModalUpdateBookkeepingPackagesTitle";

const BookkeepingAndCompliance = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [itemEdit, setItemEdit] = React.useState(null);

  const { data: bookkeepingData } = useQueryData(
    `${apiVersion}/bookkeeping`, // endpoint
    "get", // method
    "bookkeeping" // key
  );

  const { data: bookkeepingOverviewData } = useQueryData(
    `${apiVersion}/bookkeeping-overview`, // endpoint
    "get", // method
    "bookkeeping-overview" // key
  );

  const { data: bookkeepingPackagesTitleData } = useQueryData(
    `${apiVersion}/bookkeeping-packages-title`, // endpoint
    "get", // method
    "bookkeeping-packages-title" // key
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

  const handleUpdateBookkeepingBanner = () => {
    dispatch(setIsUpdateHome({ modal: true, modalCode: "bookkeeping-banner" }));
    setItemEdit("bookkeepingBannerUpdate");
  };

  const handleUpdateBookkeepingOverview = () => {
    dispatch(
      setIsUpdateHome({ modal: true, modalCode: "bookkeeping-overview" })
    );
    setItemEdit("bookkeepingOverviewUpdateImg");
  };

  const handleUpdateBookkeepingOverviewList = () => {
    dispatch(
      setIsUpdateHome({ modal: true, modalCode: "bookkeeping-overview-list" })
    );
    setItemEdit("bookkeepingOverviewListUpdate");
  };

  const handleUpdateBookkeepingPackagesTitle = () => {
    dispatch(
      setIsUpdateHome({ modal: true, modalCode: "bookkeeping-packages-title" })
    );
    setItemEdit("packagesTitleUpdate");
  };

  const handleUpdateBookkeepingPackagesList = () => {
    dispatch(
      setIsUpdateHome({ modal: true, modalCode: "bookkeeping-packages-list" })
    );
    setItemEdit("packagesListUpdate");
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
        <Navigation menu="services" submenu="accounting-solutions" />
        <Dashboard>
          <div className="mx-5 pt-2">
            <div className="py-5 flex  ">
              <BreadCrumbs param={location.search} />
              <div className="text-sm text-[black] font-semibold">
                <h2>Bookkeeping / Compliance</h2>
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
              <BookkeepingBanner
                bookkeepingData={bookkeepingData}
                handleUpdateBookkeepingBanner={handleUpdateBookkeepingBanner}
              />
              <BookkeepingOverview
                handleUpdateBookkeepingOverview={
                  handleUpdateBookkeepingOverview
                }
                handleUpdateBookkeepingOverviewList={
                  handleUpdateBookkeepingOverviewList
                }
                bookkeepingOverviewData={bookkeepingOverviewData}
              />

              <BookkeepingPricing
                handleUpdateBookkeepingPackagesTitle={
                  handleUpdateBookkeepingPackagesTitle
                }
                handleUpdateBookkeepingPackagesList={
                  handleUpdateBookkeepingPackagesList
                }
                bookkeepingPackagesTitleData={bookkeepingPackagesTitleData}
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
        store.isUpdateHome?.modalCode === "bookkeeping-banner" && (
          <ModalUpdateBookkeepingBanner
            itemEdit={itemEdit}
            bookkeepingData={bookkeepingData}
          />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "bookkeeping-overview" && (
          <ModalUpdateBookkeepingOverview
            itemEdit={itemEdit}
            bookkeepingOverviewData={bookkeepingOverviewData}
          />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "bookkeeping-overview-list" && (
          <ModalUpdateBookkeepingOverviewList
            itemEdit={itemEdit}
            bookkeepingOverviewData={bookkeepingOverviewData}
          />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "bookkeeping-packages-title" && (
          <ModalUpdateBookkeepingPackagesTitle
            itemEdit={itemEdit}
            bookkeepingPackagesTitleData={bookkeepingPackagesTitleData}
          />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "bookkeeping-packages-list" && (
          <ModalUpdateBookkeepingPackagesList
            itemEdit={itemEdit}
            bookkeepingPackagesTitleData={bookkeepingPackagesTitleData}
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

export default BookkeepingAndCompliance;
