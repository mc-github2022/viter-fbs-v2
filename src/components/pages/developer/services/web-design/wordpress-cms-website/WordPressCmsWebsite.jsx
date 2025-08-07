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
import WordpressBanner from "./wordpress-banner/WordPressBanner";
import ModalUpdateWordpressBanner from "./wordpress-banner/ModalUpdateWordpressBanner";
import WordpressOverview from "./wordpress-overview/WordpressOverview";
import ModalUpdateWordpressOverview from "./wordpress-overview/ModalUpdateWordpressOverview";
import ModalUpdateWordpressOverviewList from "./wordpress-overview/ModalUpdateWordpressOverviewList";
import WordpressScope from "./wordpress-scope/WordpressScope";
import ModalUpdateWordpressScope from "./wordpress-scope/ModalUpdateWordpressScope";
import WordpressPricing from "./wordpress-pricing/WordpressPricing";
import WordpressPortfolio from "./wordpress-portfolio/WordpressPortfolio";
import ModalUpdateWordpressPortfolioA from "./wordpress-portfolio/ModalUpdateWordpressPortfolioA";
import ModalUpdateWordpressPortfolioTitle from "./wordpress-portfolio/ModalUpdateWordpressPortfolioTitle";
import ModalUpdateWordpressPortfolioB from "./wordpress-portfolio/ModalUpdateWordpressPortfolioB";
import ModalUpdateWordpressPortfolioC from "./wordpress-portfolio/ModalUpdateWordpressPortfolioC";
import ModalUpdateWordpressPortfolioD from "./wordpress-portfolio/ModalUpdateWordpressPortfolioD";
import ModalUpdateWordpressPortfolioE from "./wordpress-portfolio/ModalUpdateWordpressPortfolioE";
import ModalUpdateWordpressPortfolioF from "./wordpress-portfolio/ModalUpdateWordpressPortfolioF";
import ModalUpdateWordpressPortfolioG from "./wordpress-portfolio/ModalUpdateWordpressPortfolioG";
import ModalUpdateWordpressPortfolioH from "./wordpress-portfolio/ModalUpdateWordpressPortfolioH";
import WordpressPartners from "./wordpress-partners/WordpressPartners";
import WordpressPartnerSays from "./wordpress-partnersays/WordpressPartnerSays";
import ModalUpdateWordpressScopeTitle from "./wordpress-titles/ModalUpdateWordpressScopeTitle";
import ModalUpdateWordpressPackagesTitle from "./wordpress-titles/ModalUpdateWordpressPackagesTitle";
import ModalUpdateWordpressPartnersTitle from "./wordpress-titles/ModalUpdateWordpressPartnersTitle";
import ModalUpdateWordpressPartnerSaysTitle from "./wordpress-titles/ModalUpdateWordpressPartnerSaysTitle";
import ModalUpdateContactFormDefaultWordPress from "../../../contact-form-default/ModalUpdateContactFormDefaultWordPress";

const WordPressCmsWebsite = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [itemEdit, setItemEdit] = React.useState(null);
  const [pageName, setPageName] = React.useState("wordpress");

  const { data: wordpressData } = useQueryData(
    `${apiVersion}/wordpress`, // endpoint
    "get", // method
    "wordpress" // key
  );

  const { data: wordpressOverviewData } = useQueryData(
    `${apiVersion}/wordpress-overview`, // endpoint
    "get", // method
    "wordpress-overview" // key
  );

  const {
    isLoading: isLoadingScope,
    isFetching: isFetchingScope,
    error: errorScope,
    data: wordpressScopeData,
  } = useQueryData(
    `${apiVersion}/wordpress-scope`, // endpoint
    "get", // method
    "wordpress-scope" // key
  );

  const {
    isLoading: isLoadingPortfolio,
    isFetching: isFetchingPortfolio,
    error: errorPortfolio,
    data: wordpressPortfolioData,
  } = useQueryData(
    `${apiVersion}/wordpress-portfolio`, // endpoint
    "get", // method
    "wordpress-portfolio" // key
  );

  const { data: wordpressTitlesData } = useQueryData(
    `${apiVersion}/wordpress-titles`, // endpoint
    "get", // method
    "wordpress-titles" // key
  );

  const { data: contactFormDefaultData } = useQueryData(
    `${apiVersion}/contactDefault`, // endpoint
    "get", // method
    "contactDefault" // key
  );

  const { data: contactFormWordpressData } = useQueryData(
    `${apiVersion}/contactWordpress`, // endpoint
    "get", // method
    "contactWordpress" // key
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
      setIsUpdateHome({ modal: true, modalCode: "wordpress-overview-list" })
    );
    setItemEdit("wordpressOverviewListUpdate");
  };

  const handleUpdateWordpressPortfolioTitle = () => {
    dispatch(
      setIsUpdateHome({ modal: true, modalCode: "wordpress-portfolio-title" })
    );
    setItemEdit("portfolioTitleUpdate");
  };

  const handleUpdateWordpressPortfolioListA = () => {
    dispatch(
      setIsUpdateHome({ modal: true, modalCode: "wordpress-portfolio-list-a" })
    );
    setItemEdit("portfolioListAUpdate");
  };

  const handleUpdateWordpressPortfolioListB = () => {
    dispatch(
      setIsUpdateHome({ modal: true, modalCode: "wordpress-portfolio-list-b" })
    );
    setItemEdit("portfolioListBUpdate");
  };

  const handleUpdateWordpressPortfolioListC = () => {
    dispatch(
      setIsUpdateHome({ modal: true, modalCode: "wordpress-portfolio-list-c" })
    );
    setItemEdit("portfolioListCUpdate");
  };

  const handleUpdateWordpressPortfolioListD = () => {
    dispatch(
      setIsUpdateHome({ modal: true, modalCode: "wordpress-portfolio-list-d" })
    );
    setItemEdit("portfolioListDUpdate");
  };

  const handleUpdateWordpressPortfolioListE = () => {
    dispatch(
      setIsUpdateHome({ modal: true, modalCode: "wordpress-portfolio-list-e" })
    );
    setItemEdit("portfolioListEUpdate");
  };

  const handleUpdateWordpressPortfolioListF = () => {
    dispatch(
      setIsUpdateHome({ modal: true, modalCode: "wordpress-portfolio-list-f" })
    );
    setItemEdit("portfolioListFUpdate");
  };

  const handleUpdateWordpressPortfolioListG = () => {
    dispatch(
      setIsUpdateHome({ modal: true, modalCode: "wordpress-portfolio-list-g" })
    );
    setItemEdit("portfolioListGUpdate");
  };

  const handleUpdateWordpressPortfolioListH = () => {
    dispatch(
      setIsUpdateHome({ modal: true, modalCode: "wordpress-portfolio-list-h" })
    );
    setItemEdit("portfolioListHUpdate");
  };

  const handleUpdateWordpressScope = () => {
    dispatch(setIsUpdateHome({ modal: true, modalCode: "wordpress-scope" }));
    setItemEdit(null);
  };

  const handleUpdateWordpressScopeTitles = () => {
    dispatch(
      setIsUpdateHome({ modal: true, modalCode: "wordpress-scope-title" })
    );
    setItemEdit("scopeTitleUpdate");
  };

  const handleUpdateWordpressPackagesTitles = () => {
    dispatch(
      setIsUpdateHome({ modal: true, modalCode: "wordpress-packages-title" })
    );
    setItemEdit("packagesTitleUpdate");
  };

  const handleUpdateWordpressPartnersTitles = () => {
    dispatch(
      setIsUpdateHome({ modal: true, modalCode: "wordpress-partners-title" })
    );
    setItemEdit("partnersTitleUpdate");
  };

  const handleUpdateWordpressTestimonialTitles = () => {
    dispatch(
      setIsUpdateHome({
        modal: true,
        modalCode: "wordpress-testimonial-title",
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

  const handleUpdateContactFormWordpress = () => {
      dispatch(setIsUpdateHome({ modal: true, modalCode: "contact-form-wordpress" }));
      setItemEdit("contactFormWordpressUpdate");
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
              />
              <WordpressBanner
                wordpressData={wordpressData}
                handleUpdateWordpressBanner={handleUpdateWordpressBanner}
                handleUpdateContactFormDefault={handleUpdateContactFormDefault}
                contactFormDefaultData={contactFormDefaultData}
                pageName={pageName}
                contactFormWordpressData={contactFormWordpressData}
                handleUpdateContactFormWordpress={handleUpdateContactFormWordpress}
              />
              <WordpressOverview
                handleUpdateWordpressOverview={handleUpdateWordpressOverview}
                handleUpdateWordpressOverviewList={
                  handleUpdateWordpressOverviewList
                }
                wordpressOverviewData={wordpressOverviewData}
                contactFormDefaultData={contactFormDefaultData}
                handleUpdateContactFormDefault={handleUpdateContactFormDefault}
                pageName={pageName}
                contactFormWordpressData={contactFormWordpressData}
                handleUpdateContactFormWordpress={handleUpdateContactFormWordpress}
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
                contactFormDefaultData={contactFormDefaultData}
                handleUpdateContactFormDefault={handleUpdateContactFormDefault}
                pageName={pageName}
                contactFormWordpressData={contactFormWordpressData}
                handleUpdateContactFormWordpress={handleUpdateContactFormWordpress}
              />
              <WordpressPricing
                handleUpdateWordpressPackagesTitles={
                  handleUpdateWordpressPackagesTitles
                }
                wordpressTitlesData={wordpressTitlesData}
              />
              <WordpressPortfolio
                wordpressPortfolioData={wordpressPortfolioData}
                isLoadingPortfolio={isLoadingPortfolio}
                isFetchingPortfolio={isFetchingPortfolio}
                errorPortfolio={errorPortfolio}
                handleUpdateWordpressPortfolioTitle={
                  handleUpdateWordpressPortfolioTitle
                }
                handleUpdateWordpressPortfolioListA={
                  handleUpdateWordpressPortfolioListA
                }
                handleUpdateWordpressPortfolioListB={
                  handleUpdateWordpressPortfolioListB
                }
                handleUpdateWordpressPortfolioListC={
                  handleUpdateWordpressPortfolioListC
                }
                handleUpdateWordpressPortfolioListD={
                  handleUpdateWordpressPortfolioListD
                }
                handleUpdateWordpressPortfolioListE={
                  handleUpdateWordpressPortfolioListE
                }
                handleUpdateWordpressPortfolioListF={
                  handleUpdateWordpressPortfolioListF
                }
                handleUpdateWordpressPortfolioListG={
                  handleUpdateWordpressPortfolioListG
                }
                handleUpdateWordpressPortfolioListH={
                  handleUpdateWordpressPortfolioListH
                }
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
                handleUpdateFooterContactUs={handleUpdateFooterContactUs}
                footerData={footerData}
                contactFormDefaultData={contactFormDefaultData}
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
        store.isUpdateHome?.modalCode === "wordpress-portfolio-title" && (
          <ModalUpdateWordpressPortfolioTitle
            itemEdit={itemEdit}
            wordpressPortfolioData={wordpressPortfolioData}
          />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "wordpress-portfolio-list-a" && (
          <ModalUpdateWordpressPortfolioA
            itemEdit={itemEdit}
            wordpressPortfolioData={wordpressPortfolioData}
          />
        )}
      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "wordpress-portfolio-list-b" && (
          <ModalUpdateWordpressPortfolioB
            itemEdit={itemEdit}
            wordpressPortfolioData={wordpressPortfolioData}
          />
        )}
      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "wordpress-portfolio-list-c" && (
          <ModalUpdateWordpressPortfolioC
            itemEdit={itemEdit}
            wordpressPortfolioData={wordpressPortfolioData}
          />
        )}
      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "wordpress-portfolio-list-d" && (
          <ModalUpdateWordpressPortfolioD
            itemEdit={itemEdit}
            wordpressPortfolioData={wordpressPortfolioData}
          />
        )}
      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "wordpress-portfolio-list-e" && (
          <ModalUpdateWordpressPortfolioE
            itemEdit={itemEdit}
            wordpressPortfolioData={wordpressPortfolioData}
          />
        )}
      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "wordpress-portfolio-list-f" && (
          <ModalUpdateWordpressPortfolioF
            itemEdit={itemEdit}
            wordpressPortfolioData={wordpressPortfolioData}
          />
        )}
      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "wordpress-portfolio-list-g" && (
          <ModalUpdateWordpressPortfolioG
            itemEdit={itemEdit}
            wordpressPortfolioData={wordpressPortfolioData}
          />
        )}
      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "wordpress-portfolio-list-h" && (
          <ModalUpdateWordpressPortfolioH
            itemEdit={itemEdit}
            wordpressPortfolioData={wordpressPortfolioData}
          />
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
        store.isUpdateHome?.modalCode === "contact-form-default" && (
          <ModalUpdateContactFormDefault
            itemEdit={itemEdit}
            contactFormDefaultData={contactFormDefaultData}
          />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "contact-form-wordpress" && (
          <ModalUpdateContactFormDefaultWordPress
            itemEdit={itemEdit}
            contactFormWordpressData={contactFormWordpressData}
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

export default WordPressCmsWebsite;
