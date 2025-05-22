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
import ModalUpdateContactUs from "../../../footer/ModalUpdateContactUs";
import ModalUpdateCopyright from "../../../footer/ModalUpdateCopyright";
import ModalUpdateLogoImg from "../../../footer/ModalUpdateLogoImg";
import ModalUpdateQuickLinks from "../../../footer/ModalUpdateQuickLinks";
import Header from "../../../header/Header";
import ModalUpdateHeader from "../../../header/ModalUpdateHeader";
import ModalUpdatePayrollBanner from "./payroll-banner/ModalUpdatePayrollBanner";
import PayrollBanner from "./payroll-banner/PayrollBanner";
import ModalUpdatePayrollOverview from "./payroll-overview/ModalUpdatePayrollOverview";
import ModalUpdatePayrollOverviewList from "./payroll-overview/ModalUpdatePayrollOverviewList";
import PayrollOverview from "./payroll-overview/PayrollOverview";
import PayrollScope from "./payroll-scope/PayrollScope";
import ModalUpdatePayrollScope from "./payroll-scope/ModalUpdatePayrollScope";
import PayrollPricing from "./payroll-pricing/PayrollPricing";
import PayrollPartners from "./payroll-partners/PayrollPartners";
import PayrollPartnerSays from "./payroll-partnersays/PayrollPartnerSays";
import ModalUpdatePayrollPackagesTitle from "./payroll-titles/ModalUpdatePayrollPackagesTitle";
import ModalUpdatePayrollPartnerSaysTitle from "./payroll-titles/ModalUpdatePayrollPartnerSaysTitle";
import ModalUpdatePayrollPartnersTitle from "./payroll-titles/ModalUpdatePayrollPartnersTitle";
import ModalUpdatePayrollScopeTitle from "./payroll-titles/ModalUpdatePayrollScopeTitle";

const OnlinePayrollSystem = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [itemEdit, setItemEdit] = React.useState(null);

  const { data: payrollData } = useQueryData(
    `${apiVersion}/payroll`, // endpoint
    "get", // method
    "payroll" // key
  );

  const { data: payrollOverviewData } = useQueryData(
    `${apiVersion}/payroll-overview`, // endpoint
    "get", // method
    "payroll-overview" // key
  );

  const {
    isLoading: isLoadingScope,
    isFetching: isFetchingScope,
    data: payrollScopeData,
  } = useQueryData(
    `${apiVersion}/payroll-scope`, // endpoint
    "get", // method
    "payroll-scope" // key
  );

  const { data: payrollTitlesData } = useQueryData(
    `${apiVersion}/payroll-titles`, // endpoint
    "get", // method
    "payroll-titles" // key
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

  const handleUpdatePayrollBanner = () => {
    dispatch(setIsUpdateHome({ modal: true, modalCode: "payroll-banner" }));
    setItemEdit("payrollBannerUpdate");
  };

  const handleUpdatePayrollOverview = () => {
    dispatch(setIsUpdateHome({ modal: true, modalCode: "payroll-overview" }));
    setItemEdit("payrollOverviewUpdateImg");
  };

  const handleUpdatePayrollOverviewList = () => {
    dispatch(
      setIsUpdateHome({ modal: true, modalCode: "payroll-overview-list" })
    );
    setItemEdit("payrollOverviewListUpdate");
  };

  const handleUpdatePayrollScope = () => {
    dispatch(setIsUpdateHome({ modal: true, modalCode: "payroll-scope" }));
    setItemEdit(null);
  };

  const handleUpdatePayrollScopeTitles = () => {
    dispatch(
      setIsUpdateHome({ modal: true, modalCode: "payroll-scope-title" })
    );
    setItemEdit("scopeTitleUpdate");
  };

  const handleUpdatePayrollPackagesTitles = () => {
    dispatch(
      setIsUpdateHome({ modal: true, modalCode: "payroll-packages-title" })
    );
    setItemEdit("packagesTitleUpdate");
  };

  const handleUpdatePayrollPartnersTitles = () => {
    dispatch(
      setIsUpdateHome({ modal: true, modalCode: "payroll-partners-title" })
    );
    setItemEdit("partnersTitleUpdate");
  };

  const handleUpdatePayrollTestimonialTitles = () => {
    dispatch(
      setIsUpdateHome({ modal: true, modalCode: "payroll-testimonial-title" })
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
                <h2>Online Payroll System</h2>
              </div>
            </div>
            <div className=" pb-4 bg-light shadow-xl">
              <Header
                headerData={headerData}
                handleUpdateHeader={handleUpdateHeader}
                isLoading={isLoading}
              />
              <PayrollBanner
                payrollData={payrollData}
                handleUpdatePayrollBanner={handleUpdatePayrollBanner}
              />
              <PayrollOverview
                handleUpdatePayrollOverview={handleUpdatePayrollOverview}
                handleUpdatePayrollOverviewList={
                  handleUpdatePayrollOverviewList
                }
                payrollOverviewData={payrollOverviewData}
                payrollData={payrollData}
              />
              <PayrollScope
                handleUpdatePayrollScopeTitles={handleUpdatePayrollScopeTitles}
                handleUpdatePayrollScope={handleUpdatePayrollScope}
                setItemEdit={setItemEdit}
                isLoadingScope={isLoadingScope}
                isFetchingScope={isFetchingScope}
                payrollTitlesData={payrollTitlesData}
                payrollScopeData={payrollScopeData}
                payrollData={payrollData}
              />
              <PayrollPricing
                handleUpdatePayrollPackagesTitles={
                  handleUpdatePayrollPackagesTitles
                }
                payrollTitlesData={payrollTitlesData}
              />
              <PayrollPartners
                handleUpdatePayrollPartnersTitles={
                  handleUpdatePayrollPartnersTitles
                }
                payrollTitlesData={payrollTitlesData}
              />
              <PayrollPartnerSays
                handleUpdatePayrollTestimonialTitles={
                  handleUpdatePayrollTestimonialTitles
                }
                payrollTitlesData={payrollTitlesData}
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
        store.isUpdateHome?.modalCode === "payroll-banner" && (
          <ModalUpdatePayrollBanner
            itemEdit={itemEdit}
            payrollData={payrollData}
          />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "payroll-overview" && (
          <ModalUpdatePayrollOverview
            itemEdit={itemEdit}
            payrollOverviewData={payrollOverviewData}
          />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "payroll-overview-list" && (
          <ModalUpdatePayrollOverviewList
            itemEdit={itemEdit}
            payrollOverviewData={payrollOverviewData}
          />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "payroll-scope" && (
          <ModalUpdatePayrollScope itemEdit={itemEdit} />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "payroll-scope-title" && (
          <ModalUpdatePayrollScopeTitle
            itemEdit={itemEdit}
            payrollTitlesData={payrollTitlesData}
          />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "payroll-packages-title" && (
          <ModalUpdatePayrollPackagesTitle
            itemEdit={itemEdit}
            payrollTitlesData={payrollTitlesData}
          />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "payroll-partners-title" && (
          <ModalUpdatePayrollPartnersTitle
            itemEdit={itemEdit}
            payrollTitlesData={payrollTitlesData}
          />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "payroll-testimonial-title" && (
          <ModalUpdatePayrollPartnerSaysTitle
            itemEdit={itemEdit}
            payrollTitlesData={payrollTitlesData}
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

export default OnlinePayrollSystem;
