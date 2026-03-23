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
import BookingBanner from "./booking-banner/BookingBanner";
import ModalUpdateBookingBanner from "./booking-banner/ModalUpdateBookingBanner";
import BookingOverview from "./booking-overview/BookingOverview";
import ModalUpdateBookingOverview from "./booking-overview/ModalUpdateBookingOverview";
import ModalUpdateBookingOverviewList from "./booking-overview/ModalUpdateBookingOverviewList";
import BookingPricing from "./booking-pricing/BookingPricing";
import BookingScope from "./booking-scope/BookingScope";
import ModalUpdateBookingScope from "./booking-scope/ModalUpdateBookingScope";
import ModalUpdateBookingScopeTitle from "./booking-titles/ModalUpdateBookingScopeTitle";
import ModalUpdateBookingPackagesTitle from "./booking-titles/ModalUpdateBookingPackagesTitle";

const OnlineBookingSystem = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [itemEdit, setItemEdit] = React.useState(null);

  const { data: bookingData } = useQueryData(
    `${apiVersion}/booking`, // endpoint
    "get", // method
    "booking", // key
  );

  const { data: bookingOverviewData } = useQueryData(
    `${apiVersion}/booking-overview`, // endpoint
    "get", // method
    "booking-overview", // key
  );

  const {
    isLoading: isLoadingScope,
    isFetching: isFetchingScope,
    data: bookingScopeData,
  } = useQueryData(
    `${apiVersion}/booking-scope`, // endpoint
    "get", // method
    "booking-scope", // key
  );

  const { data: bookingTitlesData } = useQueryData(
    `${apiVersion}/booking-titles`, // endpoint
    "get", // method
    "booking-titles", // key
  );

  const { isLoading, data: headerData } = useQueryData(
    `${apiVersion}/header`, // endpoint
    "get", // method
    "header", // key
  );

  const { data: footerData } = useQueryData(
    `${apiVersion}/footer`, // endpoint
    "get", // method
    "footer", // key
  );

  const handleUpdateBookingBanner = () => {
    dispatch(setIsUpdateHome({ modal: true, modalCode: "booking-banner" }));
    setItemEdit("bookingBannerUpdate");
  };

  const handleUpdateBookingOverview = () => {
    dispatch(setIsUpdateHome({ modal: true, modalCode: "booking-overview" }));
    setItemEdit("bookingOverviewUpdateImg");
  };

  const handleUpdateBookingOverviewList = () => {
    dispatch(
      setIsUpdateHome({ modal: true, modalCode: "booking-overview-list" }),
    );
    setItemEdit("bookingOverviewListUpdate");
  };

  const handleUpdateBookingScope = () => {
    dispatch(setIsUpdateHome({ modal: true, modalCode: "booking-scope" }));
    setItemEdit(null);
  };

  const handleUpdateBookingScopeTitles = () => {
    dispatch(
      setIsUpdateHome({ modal: true, modalCode: "booking-scope-title" }),
    );
    setItemEdit("scopeTitleUpdate");
  };

  const handleUpdateBookingPackagesTitles = () => {
    dispatch(
      setIsUpdateHome({ modal: true, modalCode: "booking-packages-title" }),
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
                <h2>Online Booking System</h2>
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
              <BookingBanner
                bookingData={bookingData}
                handleUpdateBookingBanner={handleUpdateBookingBanner}
              />
              <BookingOverview
                handleUpdateBookingOverview={handleUpdateBookingOverview}
                handleUpdateBookingOverviewList={
                  handleUpdateBookingOverviewList
                }
                bookingOverviewData={bookingOverviewData}
              />
              <BookingScope
                handleUpdateBookingScopeTitles={handleUpdateBookingScopeTitles}
                handleUpdateBookingScope={handleUpdateBookingScope}
                setItemEdit={setItemEdit}
                isLoadingScope={isLoadingScope}
                isFetchingScope={isFetchingScope}
                bookingTitlesData={bookingTitlesData}
                bookingScopeData={bookingScopeData}
              />
              <BookingPricing
                handleUpdateBookingPackagesTitles={
                  handleUpdateBookingPackagesTitles
                }
                bookingTitlesData={bookingTitlesData}
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
        store.isUpdateHome?.modalCode === "booking-banner" && (
          <ModalUpdateBookingBanner
            itemEdit={itemEdit}
            bookingData={bookingData}
          />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "booking-overview" && (
          <ModalUpdateBookingOverview
            itemEdit={itemEdit}
            bookingOverviewData={bookingOverviewData}
          />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "booking-overview-list" && (
          <ModalUpdateBookingOverviewList
            itemEdit={itemEdit}
            bookingOverviewData={bookingOverviewData}
          />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "booking-scope" && (
          <ModalUpdateBookingScope itemEdit={itemEdit} />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "booking-scope-title" && (
          <ModalUpdateBookingScopeTitle
            itemEdit={itemEdit}
            bookingTitlesData={bookingTitlesData}
          />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "booking-packages-title" && (
          <ModalUpdateBookingPackagesTitle
            itemEdit={itemEdit}
            bookingTitlesData={bookingTitlesData}
          />
        )}

      {/* {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "asset-partners-title" && (
          <ModalUpdateAssetPartnersTitle
            itemEdit={itemEdit}
            bookingTitlesData={bookingTitlesData}
          />
        )} */}

      {/* {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "asset-testimonial-title" && (
          <ModalUpdateAssetPartnerSaysTitle
            itemEdit={itemEdit}
            bookingTitlesData={bookingTitlesData}
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

export default OnlineBookingSystem;
