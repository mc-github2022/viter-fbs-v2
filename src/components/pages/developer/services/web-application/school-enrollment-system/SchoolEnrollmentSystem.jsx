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
import EnrollmentBanner from "./enrollment-banner/EnrollmentBanner";
import ModalUpdateEnrollmentBanner from "./enrollment-banner/ModalUpdateEnrollmentBanner";
import EnrollmentOverview from "./enrollment-overview/EnrollmentOverview";
import ModalUpdateEnrollmentOverview from "./enrollment-overview/ModalUpdateEnrollmentOverview";
import ModalUpdateEnrollmentOverviewList from "./enrollment-overview/ModalUpdateEnrollmentOverviewList";
import EnrollmentPartnerSays from "./enrollment-partnersays/EnrollmentPartnerSays";
import EnrollmentPricing from "./enrollment-pricing/EnrollmentPricing";
import EnrollmentScope from "./enrollment-scope/EnrollmentScope";
import ModalUpdateEnrollmentScope from "./enrollment-scope/ModalUpdateEnrollmentScope";
import ModalUpdateEnrollmentPackagesTitle from "./enrollment-titles/ModalUpdateEnrollmentPackagesTitle";
import ModalUpdateEnrollmentPartnerSaysTitle from "./enrollment-titles/ModalUpdateEnrollmentPartnerSaysTitle";
import ModalUpdateEnrollmentScopeTitle from "./enrollment-titles/ModalUpdateEnrollmentScopeTitle";

const SchoolEnrollmentSystem = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [itemEdit, setItemEdit] = React.useState(null);
  const [pageName, setPageName] = React.useState("enrollment");

  const { data: enrollmentData } = useQueryData(
    `${apiVersion}/enrollment`, // endpoint
    "get", // method
    "enrollment" // key
  );

  const { data: enrollmentOverviewData } = useQueryData(
    `${apiVersion}/enrollment-overview`, // endpoint
    "get", // method
    "enrollment-overview" // key
  );

  const {
    isLoading: isLoadingScope,
    isFetching: isFetchingScope,
    data: enrollmentScopeData,
  } = useQueryData(
    `${apiVersion}/enrollment-scope`, // endpoint
    "get", // method
    "enrollment-scope" // key
  );

  const { data: enrollmentTitlesData } = useQueryData(
    `${apiVersion}/enrollment-titles`, // endpoint
    "get", // method
    "enrollment-titles" // key
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

  const handleUpdateEnrollmentBanner = () => {
    dispatch(setIsUpdateHome({ modal: true, modalCode: "enrollment-banner" }));
    setItemEdit("enrollmentBannerUpdate");
  };

  const handleUpdateEnrollmentOverview = () => {
    dispatch(
      setIsUpdateHome({ modal: true, modalCode: "enrollment-overview" })
    );
    setItemEdit("enrollmentOverviewUpdateImg");
  };

  const handleUpdateEnrollmentOverviewList = () => {
    dispatch(
      setIsUpdateHome({ modal: true, modalCode: "enrollment-overview-list" })
    );
    setItemEdit("enrollmentOverviewListUpdate");
  };

  const handleUpdateEnrollmentScope = () => {
    dispatch(setIsUpdateHome({ modal: true, modalCode: "enrollment-scope" }));
    setItemEdit(null);
  };

  const handleUpdateEnrollmentScopeTitles = () => {
    dispatch(
      setIsUpdateHome({ modal: true, modalCode: "enrollment-scope-title" })
    );
    setItemEdit("scopeTitleUpdate");
  };

  const handleUpdateEnrollmentPackagesTitles = () => {
    dispatch(
      setIsUpdateHome({ modal: true, modalCode: "enrollment-packages-title" })
    );
    setItemEdit("packagesTitleUpdate");
  };

  const handleUpdateEnrollmentPartnersTitles = () => {
    dispatch(
      setIsUpdateHome({ modal: true, modalCode: "enrollment-partners-title" })
    );
    setItemEdit("partnersTitleUpdate");
  };

  const handleUpdateEnrollmentTestimonialTitles = () => {
    dispatch(
      setIsUpdateHome({
        modal: true,
        modalCode: "enrollment-testimonial-title",
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
        <Navigation menu="services" submenu="web-application" />
        <Dashboard>
          <div className="mx-5 pt-2">
            <div className="py-5 flex  ">
              <BreadCrumbs param={location.search} />
              <div className="text-sm text-[black] font-semibold">
                <h2>School Enrollment System</h2>
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
              <EnrollmentBanner
                enrollmentData={enrollmentData}
                handleUpdateEnrollmentBanner={handleUpdateEnrollmentBanner}
              />
              <EnrollmentOverview
                handleUpdateEnrollmentOverview={handleUpdateEnrollmentOverview}
                handleUpdateEnrollmentOverviewList={
                  handleUpdateEnrollmentOverviewList
                }
                enrollmentOverviewData={enrollmentOverviewData}
                pageName={pageName}
              />
              <EnrollmentScope
                handleUpdateEnrollmentScopeTitles={
                  handleUpdateEnrollmentScopeTitles
                }
                handleUpdateEnrollmentScope={handleUpdateEnrollmentScope}
                setItemEdit={setItemEdit}
                isLoadingScope={isLoadingScope}
                isFetchingScope={isFetchingScope}
                enrollmentTitlesData={enrollmentTitlesData}
                enrollmentScopeData={enrollmentScopeData}
              />
              <EnrollmentPricing
                handleUpdateEnrollmentPackagesTitles={
                  handleUpdateEnrollmentPackagesTitles
                }
                enrollmentTitlesData={enrollmentTitlesData}
              />
              {/* <EnrollmentPartners
                handleUpdateEnrollmentPartnersTitles={
                  handleUpdateEnrollmentPartnersTitles
                }
                enrollmentTitlesData={enrollmentTitlesData}
              /> */}
              <EnrollmentPartnerSays
                handleUpdateEnrollmentTestimonialTitles={
                  handleUpdateEnrollmentTestimonialTitles
                }
                enrollmentTitlesData={enrollmentTitlesData}
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
        store.isUpdateHome?.modalCode === "enrollment-banner" && (
          <ModalUpdateEnrollmentBanner
            itemEdit={itemEdit}
            enrollmentData={enrollmentData}
          />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "enrollment-overview" && (
          <ModalUpdateEnrollmentOverview
            itemEdit={itemEdit}
            enrollmentOverviewData={enrollmentOverviewData}
          />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "enrollment-overview-list" && (
          <ModalUpdateEnrollmentOverviewList
            itemEdit={itemEdit}
            enrollmentOverviewData={enrollmentOverviewData}
          />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "enrollment-scope" && (
          <ModalUpdateEnrollmentScope itemEdit={itemEdit} />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "enrollment-scope-title" && (
          <ModalUpdateEnrollmentScopeTitle
            itemEdit={itemEdit}
            enrollmentTitlesData={enrollmentTitlesData}
          />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "enrollment-packages-title" && (
          <ModalUpdateEnrollmentPackagesTitle
            itemEdit={itemEdit}
            enrollmentTitlesData={enrollmentTitlesData}
          />
        )}

      {/* {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "enrollment-partners-title" && (
          <ModalUpdateEnrollmentPartnersTitle
            itemEdit={itemEdit}
            enrollmentTitlesData={enrollmentTitlesData}
          />
        )} */}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "enrollment-testimonial-title" && (
          <ModalUpdateEnrollmentPartnerSaysTitle
            itemEdit={itemEdit}
            enrollmentTitlesData={enrollmentTitlesData}
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

export default SchoolEnrollmentSystem;
