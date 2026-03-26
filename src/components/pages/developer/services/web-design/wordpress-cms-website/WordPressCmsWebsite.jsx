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
import ModalUpdateWordpressBanner from "./wordpress-banner/ModalUpdateWordpressBanner";
import WordpressBanner from "./wordpress-banner/WordPressBanner";
import ModalUpdateWordpressOverview from "./wordpress-overview/ModalUpdateWordpressOverview";
import ModalUpdateWordpressOverviewList from "./wordpress-overview/ModalUpdateWordpressOverviewList";
import WordpressOverview from "./wordpress-overview/WordpressOverview";
import WordpressPartners from "./wordpress-partners/WordpressPartners";
import WordpressPartnerSays from "./wordpress-partnersays/WordpressPartnerSays";
import ModalUpdateWordpressPortfolioA from "./wordpress-portfolio/ModalUpdateWordpressPortfolioA";
import WordpressPortfolioNew from "./wordpress-portfolio/WordpressPortfolioNew";
import WordpressPricing from "./wordpress-pricing/WordpressPricing";
import ModalUpdateWordpressScope from "./wordpress-scope/ModalUpdateWordpressScope";
import WordpressScope from "./wordpress-scope/WordpressScope";
import ModalUpdateWordpressPackagesTitle from "./wordpress-titles/ModalUpdateWordpressPackagesTitle";
import ModalUpdateWordpressPartnerSaysTitle from "./wordpress-titles/ModalUpdateWordpressPartnerSaysTitle";
import ModalUpdateWordpressPartnersTitle from "./wordpress-titles/ModalUpdateWordpressPartnersTitle";
import ModalUpdateWordpressPortfolioTitle from "./wordpress-titles/ModalUpdateWordpressPortfolioTitle";
import ModalUpdateWordpressScopeTitle from "./wordpress-titles/ModalUpdateWordpressScopeTitle";

const WordPressCmsWebsite = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [itemEdit, setItemEdit] = React.useState(null);
  const [pageName, setPageName] = React.useState("wordpress");

  const { data: wordpressData } = useQueryData(
    `${apiVersion}/wordpress`, // endpoint
    "get", // method
    "wordpress", // key
  );

  const { data: wordpressOverviewData } = useQueryData(
    `${apiVersion}/wordpress-overview`, // endpoint
    "get", // method
    "wordpress-overview", // key
  );

  const {
    isLoading: isLoadingScope,
    isFetching: isFetchingScope,
    error: errorScope,
    data: wordpressScopeData,
  } = useQueryData(
    `${apiVersion}/wordpress-scope`, // endpoint
    "get", // method
    "wordpress-scope", // key
  );

  const {
    isLoading: isLoadingPortfolio,
    isFetching: isFetchingPortfolio,
    error: errorPortfolio,
    data: wordpressPortfolioData,
  } = useQueryData(
    `${apiVersion}/wordpress-portfolio`, // endpoint
    "get", // method
    "wordpress-portfolio", // key
  );

  const { data: wordpressTitlesData } = useQueryData(
    `${apiVersion}/wordpress-titles`, // endpoint
    "get", // method
    "wordpress-titles", // key
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

  const handleUpdateWordpressBanner = () => {
    dispatch(setIsUpdateHome({ modal: true, modalCode: "wordpress-banner" }));
    setItemEdit("wordpressBannerUpdate");
  };

  const handleUpdateWordpressOverview = () => {
    dispatch(setIsUpdateHome({ modal: true, modalCode: "wordpress-overview" }));
    setItemEdit("wordpressOverviewUpdateImg");
  };

  const handleUpdateWordpressOverviewList = () => {
    dispatch(
      setIsUpdateHome({ modal: true, modalCode: "wordpress-overview-list" }),
    );
    setItemEdit("wordpressOverviewListUpdate");
  };

  const handleUpdateWordpressPortfolioTitle = () => {
    dispatch(
      setIsUpdateHome({ modal: true, modalCode: "wordpress-portfolio-title" }),
    );
    setItemEdit("portfolioTitleUpdate");
  };

  const handleUpdateWordpressPortfolio = () => {
    dispatch(
      setIsUpdateHome({ modal: true, modalCode: "wordpress-portfolio" }),
    );
    setItemEdit(null);
  };


  const handleUpdateWordpressScope = () => {
    dispatch(setIsUpdateHome({ modal: true, modalCode: "wordpress-scope" }));
    setItemEdit(null);
  };

  const handleUpdateWordpressScopeTitles = () => {
    dispatch(
      setIsUpdateHome({ modal: true, modalCode: "wordpress-scope-title" }),
    );
    setItemEdit("scopeTitleUpdate");
  };

  const handleUpdateWordpressPackagesTitles = () => {
    dispatch(
      setIsUpdateHome({ modal: true, modalCode: "wordpress-packages-title" }),
    );
    setItemEdit("packagesTitleUpdate");
  };

  const handleUpdateWordpressPartnersTitles = () => {
    dispatch(
      setIsUpdateHome({ modal: true, modalCode: "wordpress-partners-title" }),
    );
    setItemEdit("partnersTitleUpdate");
  };

  const handleUpdateWordpressTestimonialTitles = () => {
    dispatch(
      setIsUpdateHome({
        modal: true,
        modalCode: "wordpress-testimonial-title",
      }),
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
        <Navigation menu="services" submenu="web-design-and-development" />
        <Dashboard>
          <div className="mx-5 pt-2">
            <div className="py-5 flex  ">
              <BreadCrumbs param={location.search} />
              <div className="text-sm text-[black] font-semibold">
                <h2>WordPress CMS Website</h2>
              </div>
            </div>
            <div className=" pb-4 bg-light shadow-xl">
              <Header
                headerData={headerData}
                handleUpdateHeader={handleUpdateHeader}
                isLoading={isLoading}
                services={"web services"}
                page={"WordPress CMS Website"}
              />
              <WordpressBanner
                wordpressData={wordpressData}
                handleUpdateWordpressBanner={handleUpdateWordpressBanner}
                pageName={pageName}
              />
              <WordpressOverview
                handleUpdateWordpressOverview={handleUpdateWordpressOverview}
                handleUpdateWordpressOverviewList={
                  handleUpdateWordpressOverviewList
                }
                wordpressOverviewData={wordpressOverviewData}
                pageName={pageName}
              />
              <WordpressScope
                handleUpdateWordpressScopeTitles={
                  handleUpdateWordpressScopeTitles
                }
                handleUpdateWordpressScope={handleUpdateWordpressScope}
                setItemEdit={setItemEdit}
                isLoadingScope={isLoadingScope}
                isFetchingScope={isFetchingScope}
                errorScope={errorScope}
                wordpressTitlesData={wordpressTitlesData}
                wordpressScopeData={wordpressScopeData}
                pageName={pageName}
              />
              <WordpressPricing
                handleUpdateWordpressPackagesTitles={
                  handleUpdateWordpressPackagesTitles
                }
                wordpressTitlesData={wordpressTitlesData}
              />
              <WordpressPortfolioNew
                wordpressPortfolioData={wordpressPortfolioData}
                wordpressTitlesData={wordpressTitlesData}
                isLoadingPortfolio={isLoadingPortfolio}
                isFetchingPortfolio={isFetchingPortfolio}
                errorPortfolio={errorPortfolio}
                handleUpdateWordpressPortfolioTitle={
                  handleUpdateWordpressPortfolioTitle
                }
                handleUpdateWordpressPortfolio={handleUpdateWordpressPortfolio}
                setItemEdit={setItemEdit}
              />
              <WordpressPartners
                handleUpdateWordpressPartnersTitles={
                  handleUpdateWordpressPartnersTitles
                }
                wordpressTitlesData={wordpressTitlesData}
              />
              <WordpressPartnerSays
                handleUpdateWordpressTestimonialTitles={
                  handleUpdateWordpressTestimonialTitles
                }
                wordpressTitlesData={wordpressTitlesData}
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
        store.isUpdateHome?.modalCode === "wordpress-banner" && (
          <ModalUpdateWordpressBanner
            itemEdit={itemEdit}
            wordpressData={wordpressData}
          />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "wordpress-overview" && (
          <ModalUpdateWordpressOverview
            itemEdit={itemEdit}
            wordpressOverviewData={wordpressOverviewData}
          />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "wordpress-overview-list" && (
          <ModalUpdateWordpressOverviewList
            itemEdit={itemEdit}
            wordpressOverviewData={wordpressOverviewData}
          />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "wordpress-scope" && (
          <ModalUpdateWordpressScope itemEdit={itemEdit} />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "wordpress-portfolio" && (
          <ModalUpdateWordpressPortfolioA itemEdit={itemEdit} />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "wordpress-scope-title" && (
          <ModalUpdateWordpressScopeTitle
            itemEdit={itemEdit}
            wordpressTitlesData={wordpressTitlesData}
          />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "wordpress-packages-title" && (
          <ModalUpdateWordpressPackagesTitle
            itemEdit={itemEdit}
            wordpressTitlesData={wordpressTitlesData}
          />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "wordpress-portfolio-title" && (
          <ModalUpdateWordpressPortfolioTitle
            itemEdit={itemEdit}
            wordpressTitlesData={wordpressTitlesData}
          />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "wordpress-partners-title" && (
          <ModalUpdateWordpressPartnersTitle
            itemEdit={itemEdit}
            wordpressTitlesData={wordpressTitlesData}
          />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "wordpress-testimonial-title" && (
          <ModalUpdateWordpressPartnerSaysTitle
            itemEdit={itemEdit}
            wordpressTitlesData={wordpressTitlesData}
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

export default WordPressCmsWebsite;
