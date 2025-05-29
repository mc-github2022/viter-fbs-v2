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
import RegistrationBanner from "./registration-banner/RegistrationBanner";
import ModalUpdateRegistrationBanner from "./registration-banner/ModalUpdateRegistrationBanner";
import RegistrationOverview from "./registration-overview/RegistrationOverview";
import ModalUpdateRegistrationOverview from "./registration-overview/ModalUpdateRegistrationOverview";
import ModalUpdateRegistrationOverviewList from "./registration-overview/ModalUpdateRegistrationOverviewList";
import RegistrationPricing from "./registration-pricing/RegistrationPricing";
import ModalUpdateRegistrationPackagesTitle from "./registration-pricing/ModalUpdateRegistrationPackagesTitle";

const BusinessRegistration = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [itemEdit, setItemEdit] = React.useState(null);

  const { data: registrationData } = useQueryData(
    `${apiVersion}/registration`, // endpoint
    "get", // method
    "registration" // key
  );

  const { data: registrationOverviewData } = useQueryData(
    `${apiVersion}/registration-overview`, // endpoint
    "get", // method
    "registration-overview" // key
  );

  // const {
  //   isLoading: isLoadingScope,
  //   isFetching: isFetchingScope,
  //   data: registrationScopeData,
  // } = useQueryData(
  //   `${apiVersion}/registration-scope`, // endpoint
  //   "get", // method
  //   "registration-scope" // key
  // );

  const { data: registrationPackagesTitleData } = useQueryData(
    `${apiVersion}/registration-packages-title`, // endpoint
    "get", // method
    "registration-packages-title" // key
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

  const handleUpdateRegistrationBanner = () => {
    dispatch(
      setIsUpdateHome({ modal: true, modalCode: "registration-banner" })
    );
    setItemEdit("registrationBannerUpdate");
  };

  const handleUpdateRegistrationOverview = () => {
    dispatch(
      setIsUpdateHome({ modal: true, modalCode: "registration-overview" })
    );
    setItemEdit("registrationOverviewUpdateImg");
  };

  const handleUpdateRegistrationOverviewList = () => {
    dispatch(
      setIsUpdateHome({ modal: true, modalCode: "registration-overview-list" })
    );
    setItemEdit("registrationOverviewListUpdate");
  };

  // const handleUpdateregistrationScope = () => {
  //   dispatch(setIsUpdateHome({ modal: true, modalCode: "registration-scope" }));
  //   setItemEdit(null);
  // };

  // const handleUpdateregistrationScopeTitles = () => {
  //   dispatch(
  //     setIsUpdateHome({ modal: true, modalCode: "registration-scope-title" })
  //   );
  //   setItemEdit("scopeTitleUpdate");
  // };

  const handleUpdateRegistrationPackagesTitle = () => {
    dispatch(
      setIsUpdateHome({ modal: true, modalCode: "registration-packages-title" })
    );
    setItemEdit("packagesTitleUpdate");
  };

  // const handleUpdateregistrationPartnersTitles = () => {
  //   dispatch(
  //     setIsUpdateHome({ modal: true, modalCode: "registration-partners-title" })
  //   );
  //   setItemEdit("partnersTitleUpdate");
  // };

  // const handleUpdateregistrationTestimonialTitles = () => {
  //   dispatch(
  //     setIsUpdateHome({
  //       modal: true,
  //       modalCode: "registration-testimonial-title",
  //     })
  //   );
  //   setItemEdit("testimonialTitleUpdate");
  // };

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
        <Navigation menu="services" submenu="accounting-solutions" />
        <Dashboard>
          <div className="mx-5 pt-2">
            <div className="py-5 flex  ">
              <BreadCrumbs param={location.search} />
              <div className="text-sm text-[black] font-semibold">
                <h2>Business Registration</h2>
              </div>
            </div>
            <div className=" pb-4 bg-light shadow-xl">
              <Header
                headerData={headerData}
                handleUpdateHeader={handleUpdateHeader}
                isLoading={isLoading}
              />
              <RegistrationBanner
                registrationData={registrationData}
                handleUpdateRegistrationBanner={handleUpdateRegistrationBanner}
                handleUpdateContactFormDefault={handleUpdateContactFormDefault}
                contactFormDefaultData={contactFormDefaultData}
              />
              <RegistrationOverview
                handleUpdateRegistrationOverview={
                  handleUpdateRegistrationOverview
                }
                handleUpdateRegistrationOverviewList={
                  handleUpdateRegistrationOverviewList
                }
                registrationOverviewData={registrationOverviewData}
              />
              {/* <EnrollmentScope
                handleUpdateEnrollmentScopeTitles={
                  handleUpdateEnrollmentScopeTitles
                }
                handleUpdateEnrollmentScope={handleUpdateEnrollmentScope}
                setItemEdit={setItemEdit}
                isLoadingScope={isLoadingScope}
                isFetchingScope={isFetchingScope}
                enrollmentTitlesData={enrollmentTitlesData}
                enrollmentScopeData={enrollmentScopeData}
                contactFormDefaultData={contactFormDefaultData}
                handleUpdateContactFormDefault={handleUpdateContactFormDefault}
              /> */}
              <RegistrationPricing
                handleUpdateRegistrationPackagesTitle={
                  handleUpdateRegistrationPackagesTitle
                }
                registrationPackagesTitleData={registrationPackagesTitleData}
              />
              {/* <EnrollmentPartners
                handleUpdateEnrollmentPartnersTitles={
                  handleUpdateEnrollmentPartnersTitles
                }
                enrollmentTitlesData={enrollmentTitlesData}
              /> */}
              {/* <EnrollmentPartnerSays
                handleUpdateEnrollmentTestimonialTitles={
                  handleUpdateEnrollmentTestimonialTitles
                }
                enrollmentTitlesData={enrollmentTitlesData}
              /> */}
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
        store.isUpdateHome?.modalCode === "registration-banner" && (
          <ModalUpdateRegistrationBanner
            itemEdit={itemEdit}
            registrationData={registrationData}
          />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "registration-overview" && (
          <ModalUpdateRegistrationOverview
            itemEdit={itemEdit}
            registrationOverviewData={registrationOverviewData}
          />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "registration-overview-list" && (
          <ModalUpdateRegistrationOverviewList
            itemEdit={itemEdit}
            registrationOverviewData={registrationOverviewData}
          />
        )}

      {/* {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "enrollment-scope" && (
          <ModalUpdateEnrollmentScope itemEdit={itemEdit} />
        )} */}

      {/* {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "enrollment-scope-title" && (
          <ModalUpdateEnrollmentScopeTitle
            itemEdit={itemEdit}
            enrollmentTitlesData={enrollmentTitlesData}
          />
        )} */}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "registration-packages-title" && (
          <ModalUpdateRegistrationPackagesTitle
            itemEdit={itemEdit}
            registrationPackagesTitleData={registrationPackagesTitleData}
          />
        )}

      {/* {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "enrollment-partners-title" && (
          <ModalUpdateEnrollmentPartnersTitle
            itemEdit={itemEdit}
            enrollmentTitlesData={enrollmentTitlesData}
          />
        )} */}

      {/* {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "enrollment-testimonial-title" && (
          <ModalUpdateEnrollmentPartnerSaysTitle
            itemEdit={itemEdit}
            enrollmentTitlesData={enrollmentTitlesData}
          />
        )} */}

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

export default BusinessRegistration;
