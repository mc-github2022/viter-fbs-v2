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
import ModalUpdatePaymentBanner from "./payment-banner/ModalUpdatePaymentBanner";
import PaymentBanner from "./payment-banner/PaymentBanner";
import ModalUpdatePaymentOverview from "./payment-overview/ModalUpdatePaymentOverview";
import ModalUpdatePaymentOverviewList from "./payment-overview/ModalUpdatePaymentOverviewList";
import PaymentOverview from "./payment-overview/PaymentOverview";
import PaymentPricing from "./payment-pricing/PaymentPricing";
import ModalUpdatePaymentScope from "./payment-scope/ModalUpdatePaymentScope";
import PaymentScope from "./payment-scope/PaymentScope";
import ModalUpdatePaymentPackagesTitle from "./payment-titles/ModalUpdatePaymentPackagesTitle";
import ModalUpdatePaymentScopeTitle from "./payment-titles/ModalUpdatePaymentScopeTitle";

const OnlinePaymentIntegration = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [itemEdit, setItemEdit] = React.useState(null);

  const { data: paymentData } = useQueryData(
    `${apiVersion}/payment`, // endpoint
    "get", // method
    "payment" // key
  );

  const { data: paymentOverviewData } = useQueryData(
    `${apiVersion}/payment-overview`, // endpoint
    "get", // method
    "payment-overview" // key
  );

  const {
    isLoading: isLoadingScope,
    isFetching: isFetchingScope,
    data: paymentScopeData,
  } = useQueryData(
    `${apiVersion}/payment-scope`, // endpoint
    "get", // method
    "payment-scope" // key
  );

  const { data: paymentTitlesData } = useQueryData(
    `${apiVersion}/payment-titles`, // endpoint
    "get", // method
    "payment-titles" // key
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

  const handleUpdatePaymentBanner = () => {
    dispatch(setIsUpdateHome({ modal: true, modalCode: "payment-banner" }));
    setItemEdit("paymentBannerUpdate");
  };

  const handleUpdatePaymentOverview = () => {
    dispatch(setIsUpdateHome({ modal: true, modalCode: "payment-overview" }));
    setItemEdit("paymentOverviewUpdateImg");
  };

  const handleUpdatePaymentOverviewList = () => {
    dispatch(
      setIsUpdateHome({ modal: true, modalCode: "payment-overview-list" })
    );
    setItemEdit("paymentOverviewListUpdate");
  };

  const handleUpdatePaymentScope = () => {
    dispatch(setIsUpdateHome({ modal: true, modalCode: "payment-scope" }));
    setItemEdit(null);
  };

  const handleUpdatePaymentScopeTitles = () => {
    dispatch(
      setIsUpdateHome({ modal: true, modalCode: "payment-scope-title" })
    );
    setItemEdit("scopeTitleUpdate");
  };

  const handleUpdatePaymentPackagesTitles = () => {
    dispatch(
      setIsUpdateHome({ modal: true, modalCode: "payment-packages-title" })
    );
    setItemEdit("packagesTitleUpdate");
  };

  // const handleUpdatePaymentPartnersTitles = () => {
  //   dispatch(
  //     setIsUpdateHome({ modal: true, modalCode: "payment-partners-title" })
  //   );
  //   setItemEdit("partnersTitleUpdate");
  // };

  // const handleUpdatePaymentTestimonialTitles = () => {
  //   dispatch(
  //     setIsUpdateHome({
  //       modal: true,
  //       modalCode: "payment-testimonial-title",
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
                <h2>Online Payment Integration</h2>
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
              <PaymentBanner
                paymentData={paymentData}
                handleUpdatePaymentBanner={handleUpdatePaymentBanner}
              />
              <PaymentOverview
                handleUpdatePaymentOverview={handleUpdatePaymentOverview}
                handleUpdatePaymentOverviewList={
                  handleUpdatePaymentOverviewList
                }
                paymentOverviewData={paymentOverviewData}
              />
              <PaymentScope
                handleUpdatePaymentScopeTitles={handleUpdatePaymentScopeTitles}
                handleUpdatePaymentScope={handleUpdatePaymentScope}
                setItemEdit={setItemEdit}
                isLoadingScope={isLoadingScope}
                isFetchingScope={isFetchingScope}
                paymentTitlesData={paymentTitlesData}
                paymentScopeData={paymentScopeData}
              />
              <PaymentPricing
                handleUpdatePaymentPackagesTitles={
                  handleUpdatePaymentPackagesTitles
                }
                paymentTitlesData={paymentTitlesData}
              />
              {/* <EnrollmentPartners
                handleUpdatePaymentPartnersTitles={
                  handleUpdatePaymentPartnersTitles
                }
                enrollmentTitlesData={enrollmentTitlesData}
              /> */}
              {/* <EnrollmentPartnerSays
                handleUpdatePaymentTestimonialTitles={
                  handleUpdatePaymentTestimonialTitles
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
        store.isUpdateHome?.modalCode === "payment-banner" && (
          <ModalUpdatePaymentBanner
            itemEdit={itemEdit}
            paymentData={paymentData}
          />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "payment-overview" && (
          <ModalUpdatePaymentOverview
            itemEdit={itemEdit}
            paymentOverviewData={paymentOverviewData}
          />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "payment-overview-list" && (
          <ModalUpdatePaymentOverviewList
            itemEdit={itemEdit}
            paymentOverviewData={paymentOverviewData}
          />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "payment-scope" && (
          <ModalUpdatePaymentScope itemEdit={itemEdit} />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "payment-scope-title" && (
          <ModalUpdatePaymentScopeTitle
            itemEdit={itemEdit}
            paymentTitlesData={paymentTitlesData}
          />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "payment-packages-title" && (
          <ModalUpdatePaymentPackagesTitle
            itemEdit={itemEdit}
            paymentTitlesData={paymentTitlesData}
          />
        )}

      {/* {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "payment-partners-title" && (
          <ModalUpdatePaymentPartnersTitle
            itemEdit={itemEdit}
            paymentTitlesData={paymentTitlesData}
          />
        )} */}

      {/* {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "payment-testimonial-title" && (
          <ModalUpdatePaymentPartnerSaysTitle
            itemEdit={itemEdit}
            paymentTitlesData={paymentTitlesData}
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

export default OnlinePaymentIntegration;
