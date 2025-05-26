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
import ModalUpdateContactUs from "../../../footer/ModalUpdateContactUs";
import ModalUpdateCopyright from "../../../footer/ModalUpdateCopyright";
import ModalUpdateLogoImg from "../../../footer/ModalUpdateLogoImg";
import ModalUpdateQuickLinks from "../../../footer/ModalUpdateQuickLinks";
import Header from "../../../header/Header";
import ModalUpdateHeader from "../../../header/ModalUpdateHeader";
import DonationBanner from "./donation-banner/DonationBanner";
import ModalUpdateDonationBanner from "./donation-banner/ModalUpdateDonationBanner";
import DonationOverview from "./donation-overview/DonationOverview";
import ModalUpdateDonationOverview from "./donation-overview/ModalUpdateDonationOverview";
import ModalUpdateDonationOverviewList from "./donation-overview/ModalUpdateDonationOverviewList";
import DonationScope from "./donation-scope/DonationScope";
import ModalUpdateDonationScope from "./donation-scope/ModalUpdateDonationScope";
import DonationPricing from "./donation-pricing/DonationPricing";
import DonationPartnerSays from "./donation-partnersays/DonationPartnerSays";
import ModalUpdateDonationScopeTitle from "./donation-titles/ModalUpdateDonationScopeTitle";
import ModalUpdateDonationPackagesTitle from "./donation-titles/ModalUpdateDonationPackagesTitle";
import ModalUpdateDonationPartnerSaysTitle from "./donation-titles/ModalUpdateDonationPartnerSaysTitle";

const OnlineDonationSystem = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [itemEdit, setItemEdit] = React.useState(null);

  const { data: donationData } = useQueryData(
    `${apiVersion}/donation`, // endpoint
    "get", // method
    "donation" // key
  );

  const { data: donationOverviewData } = useQueryData(
    `${apiVersion}/donation-overview`, // endpoint
    "get", // method
    "donation-overview" // key
  );

  const {
    isLoading: isLoadingScope,
    isFetching: isFetchingScope,
    data: donationScopeData,
  } = useQueryData(
    `${apiVersion}/donation-scope`, // endpoint
    "get", // method
    "donation-scope" // key
  );

  const { data: donationTitlesData } = useQueryData(
    `${apiVersion}/donation-titles`, // endpoint
    "get", // method
    "donation-titles" // key
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

  const handleUpdateDonationBanner = () => {
    dispatch(setIsUpdateHome({ modal: true, modalCode: "donation-banner" }));
    setItemEdit("donationBannerUpdate");
  };

  const handleUpdateDonationOverview = () => {
    dispatch(setIsUpdateHome({ modal: true, modalCode: "donation-overview" }));
    setItemEdit("donationOverviewUpdateImg");
  };

  const handleUpdateDonationOverviewList = () => {
    dispatch(
      setIsUpdateHome({ modal: true, modalCode: "donation-overview-list" })
    );
    setItemEdit("donationOverviewListUpdate");
  };

  const handleUpdateDonationScope = () => {
    dispatch(setIsUpdateHome({ modal: true, modalCode: "donation-scope" }));
    setItemEdit(null);
  };

  const handleUpdateDonationScopeTitles = () => {
    dispatch(
      setIsUpdateHome({ modal: true, modalCode: "donation-scope-title" })
    );
    setItemEdit("scopeTitleUpdate");
  };

  const handleUpdateDonationPackagesTitles = () => {
    dispatch(
      setIsUpdateHome({ modal: true, modalCode: "donation-packages-title" })
    );
    setItemEdit("packagesTitleUpdate");
  };

  const handleUpdateDonationPartnersTitles = () => {
    dispatch(
      setIsUpdateHome({ modal: true, modalCode: "donation-partners-title" })
    );
    setItemEdit("partnersTitleUpdate");
  };

  const handleUpdateDonationTestimonialTitles = () => {
    dispatch(
      setIsUpdateHome({
        modal: true,
        modalCode: "donation-testimonial-title",
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
        <Navigation menu="services" submenu="web-application" />
        <Dashboard>
          <div className="mx-5 pt-2">
            <div className="py-5 flex  ">
              <BreadCrumbs param={location.search} />
              <div className="text-sm text-[black] font-semibold">
                <h2>Online Donation System</h2>
              </div>
            </div>
            <div className=" pb-4 bg-light shadow-xl">
              <Header
                headerData={headerData}
                handleUpdateHeader={handleUpdateHeader}
                isLoading={isLoading}
              />
              <DonationBanner
                donationData={donationData}
                handleUpdateDonationBanner={handleUpdateDonationBanner}
                handleUpdateContactFormDefault={handleUpdateContactFormDefault}
                contactFormDefaultData={contactFormDefaultData}
              />
              <DonationOverview
                handleUpdateDonationOverview={handleUpdateDonationOverview}
                handleUpdateDonationOverviewList={
                  handleUpdateDonationOverviewList
                }
                donationOverviewData={donationOverviewData}
                contactFormDefaultData={contactFormDefaultData}
                handleUpdateContactFormDefault={handleUpdateContactFormDefault}
              />
              <DonationScope
                handleUpdateDonationScopeTitles={
                  handleUpdateDonationScopeTitles
                }
                handleUpdateDonationScope={handleUpdateDonationScope}
                setItemEdit={setItemEdit}
                isLoadingScope={isLoadingScope}
                isFetchingScope={isFetchingScope}
                donationTitlesData={donationTitlesData}
                donationScopeData={donationScopeData}
                contactFormDefaultData={contactFormDefaultData}
                handleUpdateContactFormDefault={handleUpdateContactFormDefault}
              />
              <DonationPricing
                handleUpdateDonationPackagesTitles={
                  handleUpdateDonationPackagesTitles
                }
                donationTitlesData={donationTitlesData}
              />
              {/* <DonationPartners
                handleUpdateDonationPartnersTitles={
                  handleUpdateDonationPartnersTitles
                }
                donationTitlesData={donationTitlesData}
              /> */}
              <DonationPartnerSays
                handleUpdateDonationTestimonialTitles={
                  handleUpdateDonationTestimonialTitles
                }
                donationTitlesData={donationTitlesData}
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
        store.isUpdateHome?.modalCode === "donation-banner" && (
          <ModalUpdateDonationBanner
            itemEdit={itemEdit}
            donationData={donationData}
          />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "donation-overview" && (
          <ModalUpdateDonationOverview
            itemEdit={itemEdit}
            donationOverviewData={donationOverviewData}
          />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "donation-overview-list" && (
          <ModalUpdateDonationOverviewList
            itemEdit={itemEdit}
            donationOverviewData={donationOverviewData}
          />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "donation-scope" && (
          <ModalUpdateDonationScope itemEdit={itemEdit} />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "donation-scope-title" && (
          <ModalUpdateDonationScopeTitle
            itemEdit={itemEdit}
            donationTitlesData={donationTitlesData}
          />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "donation-packages-title" && (
          <ModalUpdateDonationPackagesTitle
            itemEdit={itemEdit}
            donationTitlesData={donationTitlesData}
          />
        )}

      {/* {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "donation-partners-title" && (
          <ModalUpdateDonationPartnersTitle
            itemEdit={itemEdit}
            donationTitlesData={donationTitlesData}
          />
        )} */}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "donation-testimonial-title" && (
          <ModalUpdateDonationPartnerSaysTitle
            itemEdit={itemEdit}
            donationTitlesData={donationTitlesData}
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

export default OnlineDonationSystem;
