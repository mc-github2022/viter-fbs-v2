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
import GraphicBanner from "./graphic-banner/GraphicBanner";
import ModalUpdateGraphicBanner from "./graphic-banner/ModalUpdateGraphicBanner";
import GraphicOverview from "./graphic-overview/GraphicOverview";
import ModalUpdateGraphicOverview from "./graphic-overview/ModalUpdateGraphicOverview";
import ModalUpdateGraphicOverviewList from "./graphic-overview/ModalUpdateGraphicOverviewList";
import GraphicPartnerSays from "./graphic-partnersays/GraphicPartnerSays";
import GraphicScope from "./graphic-scope/GraphicScope";
import ModalUpdateGraphicScope from "./graphic-scope/ModalUpdateGraphicScope";
import ModalUpdateGraphicPartnerSaysTitle from "./graphic-titles/ModalUpdateGraphicPartnerSaysTitle";
import ModalUpdateGraphicScopeTitle from "./graphic-titles/ModalUpdateGraphicScopeTitle";

const GraphicDesign = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [itemEdit, setItemEdit] = React.useState(null);
  const [pageName, setPageName] = React.useState("cms");

  const { data: graphicData } = useQueryData(
    `${apiVersion}/graphic`, // endpoint
    "get", // method
    "graphic" // key
  );

  const { data: graphicOverviewData } = useQueryData(
    `${apiVersion}/graphic-overview`, // endpoint
    "get", // method
    "graphic-overview" // key
  );

  const {
    isLoading: isLoadingScope,
    isFetching: isFetchingScope,
    error: errorScope,
    data: graphicScopeData,
  } = useQueryData(
    `${apiVersion}/graphic-scope`, // endpoint
    "get", // method
    "graphic-scope" // key
  );

  const { data: graphicTitlesData } = useQueryData(
    `${apiVersion}/graphic-titles`, // endpoint
    "get", // method
    "graphic-titles" // key
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

  const handleUpdateGraphicBanner = () => {
    dispatch(setIsUpdateHome({ modal: true, modalCode: "graphic-banner" }));
    setItemEdit("graphicBannerUpdate");
  };

  const handleUpdateGraphicOverview = () => {
    dispatch(setIsUpdateHome({ modal: true, modalCode: "graphic-overview" }));
    setItemEdit("graphicOverviewUpdateImg");
  };

  const handleUpdateGraphicOverviewList = () => {
    dispatch(
      setIsUpdateHome({ modal: true, modalCode: "graphic-overview-list" })
    );
    setItemEdit("graphicOverviewListUpdate");
  };

  const handleUpdateGraphicScope = () => {
    dispatch(setIsUpdateHome({ modal: true, modalCode: "graphic-scope" }));
    setItemEdit(null);
  };

  const handleUpdateGraphicScopeTitles = () => {
    dispatch(
      setIsUpdateHome({ modal: true, modalCode: "graphic-scope-title" })
    );
    setItemEdit("scopeTitleUpdate");
  };

  const handleUpdateGraphicTestimonialTitles = () => {
    dispatch(
      setIsUpdateHome({
        modal: true,
        modalCode: "graphic-testimonial-title",
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
        <Navigation menu="services" submenu="web-design-and-development" />
        <Dashboard>
          <div className="mx-5 pt-2">
            <div className="py-5 flex  ">
              <BreadCrumbs param={location.search} />
              <div className="text-sm text-[black] font-semibold">
                <h2>Graphic Design</h2>
              </div>
            </div>
            <div className=" pb-4 bg-light shadow-xl">
              <Header
                headerData={headerData}
                handleUpdateHeader={handleUpdateHeader}
                isLoading={isLoading}
                services={"web services"}
                page={"Graphic Design"}
              />
              <GraphicBanner
                graphicData={graphicData}
                handleUpdateGraphicBanner={handleUpdateGraphicBanner}
                pageName={pageName}
              />
              <GraphicOverview
                handleUpdateGraphicOverview={handleUpdateGraphicOverview}
                handleUpdateGraphicOverviewList={
                  handleUpdateGraphicOverviewList
                }
                graphicOverviewData={graphicOverviewData}
                pageName={pageName}
              />
              <GraphicScope
                handleUpdateGraphicScopeTitles={handleUpdateGraphicScopeTitles}
                handleUpdateGraphicScope={handleUpdateGraphicScope}
                setItemEdit={setItemEdit}
                isLoadingScope={isLoadingScope}
                isFetchingScope={isFetchingScope}
                errorScope={errorScope}
                graphicTitlesData={graphicTitlesData}
                graphicScopeData={graphicScopeData}
                pageName={pageName}
              />
              {/* <WordpressPricing
                handleUpdateGraphicPackagesTitles={
                  handleUpdateGraphicPackagesTitles
                }
                graphicTitlesData={graphicTitlesData}
              /> */}

              {/* <WordpressPartners
                handleUpdateGraphicPartnersTitles={
                  handleUpdateGraphicPartnersTitles
                }
                graphicTitlesData={graphicTitlesData}
              /> */}
              <GraphicPartnerSays
                handleUpdateGraphicTestimonialTitles={
                  handleUpdateGraphicTestimonialTitles
                }
                graphicTitlesData={graphicTitlesData}
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
        store.isUpdateHome?.modalCode === "graphic-banner" && (
          <ModalUpdateGraphicBanner
            itemEdit={itemEdit}
            graphicData={graphicData}
          />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "graphic-overview" && (
          <ModalUpdateGraphicOverview
            itemEdit={itemEdit}
            graphicOverviewData={graphicOverviewData}
          />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "graphic-overview-list" && (
          <ModalUpdateGraphicOverviewList
            itemEdit={itemEdit}
            graphicOverviewData={graphicOverviewData}
          />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "graphic-scope" && (
          <ModalUpdateGraphicScope itemEdit={itemEdit} />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "graphic-scope-title" && (
          <ModalUpdateGraphicScopeTitle
            itemEdit={itemEdit}
            graphicTitlesData={graphicTitlesData}
          />
        )}

      {/* {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "wordpress-packages-title" && (
          <ModalUpdateWordpressPackagesTitle
            itemEdit={itemEdit}
            graphicTitlesData={graphicTitlesData}
          />
        )} */}

      {/* {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "wordpress-partners-title" && (
          <ModalUpdateWordpressPartnersTitle
            itemEdit={itemEdit}
            graphicTitlesData={graphicTitlesData}
          />
        )} */}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "graphic-testimonial-title" && (
          <ModalUpdateGraphicPartnerSaysTitle
            itemEdit={itemEdit}
            graphicTitlesData={graphicTitlesData}
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

export default GraphicDesign;
