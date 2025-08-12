import React from "react";
import useQueryData from "../../../custom-hooks/useQueryData";
import { apiVersion } from "../../../helpers/functions-general";
import Dashboard from "../../../partials/dashboard/Dashboard";
import Navigation from "../../../partials/dashboard/Navigation";
import ModalError from "../../../partials/modals/ModalError";
import ModalSuccess from "../../../partials/modals/ModalSuccess";
import { setIsUpdateHome } from "../../../store/StoreAction";
import { StoreContext } from "../../../store/StoreContext";
import Footer from "../footer/Footer";
import ModalUpdateCopyright from "../footer/ModalUpdateCopyright";
import ModalUpdateLogoImg from "../footer/ModalUpdateLogoImg";
import ModalUpdateQuickLinks from "../footer/ModalUpdateQuickLinks";
import Header from "../header/Header";
import ModalUpdateHeader from "../header/ModalUpdateHeader";
import Banner from "./Banner";
import Insights from "./home-titles/Insights";
import Partners from "./home-titles/Partners";
import Testimonial from "./home-titles/Testimonial";
import ModalUpdateInsightsTitle from "./home-titles/modals/ModalUpdateInsightsTitle";
import ModalUpdatePartnersTitle from "./home-titles/modals/ModalUpdatePartnersTitle";
import ModalUpdateTestimonialTitle from "./home-titles/modals/ModalUpdateTestimonialTitle";
import ModalUpdatePartnerWithUs from "./partner-with-us/ModalUpdatePartnerWithUs";
import PartnerWithUs from "./partner-with-us/PartnerWithUs";
import ModalUpdateProcessA from "./process/ModalUpdateProcessA";
import ModalUpdateProcessB from "./process/ModalUpdateProcessB";
import ModalUpdateProcessC from "./process/ModalUpdateProcessC";
import ModalUpdateProcessD from "./process/ModalUpdateProcessD";
import ModalUpdateProcessTitle from "./process/ModalUpdateProcessTitle";
import Process from "./process/Process";
import ModalUpdateServicesA from "./services/ModalUpdateServicesA";
import ModalUpdateServicesB from "./services/ModalUpdateServicesB";
import ModalUpdateServicesC from "./services/ModalUpdateServicesC";
import ModalUpdateServicesD from "./services/ModalUpdateServicesD";
import ModalUpdateServicesTitle from "./services/ModalUpdateServicesTitle";
import Services from "./services/Services";

const Home = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [itemEdit, setItemEdit] = React.useState("");

  const { data: processData } = useQueryData(
    `${apiVersion}/process`, // endpoint
    "get", // method
    "process" // key
  );

  const { data: servicesData } = useQueryData(
    `${apiVersion}/services`, // endpoint
    "get", // method
    "services" // key
  );

  const { data: partnerWithUsData } = useQueryData(
    `${apiVersion}/partnerWithUs`, // endpoint
    "get", // method
    "partnerWithUs" // key
  );

  const { data: homeTitlesData } = useQueryData(
    `${apiVersion}/homeTitles`, // endpoint
    "get", // method
    "homeTitles" // key
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

  const handleUpdateProcessTitle = () => {
    dispatch(setIsUpdateHome({ modal: true, modalCode: "process-title" }));
    setItemEdit("processTitleUpdate");
  };

  const handleUpdateProcessA = () => {
    dispatch(setIsUpdateHome({ modal: true, modalCode: "process-a" }));
    setItemEdit("processAUpdate");
  };

  const handleUpdateProcessB = () => {
    dispatch(setIsUpdateHome({ modal: true, modalCode: "process-b" }));
    setItemEdit("processBUpdate");
  };

  const handleUpdateProcessC = () => {
    dispatch(setIsUpdateHome({ modal: true, modalCode: "process-c" }));
    setItemEdit("processCUpdate");
  };

  const handleUpdateProcessD = () => {
    dispatch(setIsUpdateHome({ modal: true, modalCode: "process-d" }));
    setItemEdit("processDUpdate");
  };

  const handleUpdateServicesTitle = () => {
    dispatch(setIsUpdateHome({ modal: true, modalCode: "services-title" }));
    setItemEdit("servicesTitleUpdate");
  };

  const handleUpdateServicesA = () => {
    dispatch(setIsUpdateHome({ modal: true, modalCode: "services-a" }));
    setItemEdit("servicesAUpdate");
  };

  const handleUpdateServicesB = () => {
    dispatch(setIsUpdateHome({ modal: true, modalCode: "services-b" }));
    setItemEdit("servicesBUpdate");
  };

  const handleUpdateServicesC = () => {
    dispatch(setIsUpdateHome({ modal: true, modalCode: "services-c" }));
    setItemEdit("servicesCUpdate");
  };

  const handleUpdateServicesD = () => {
    dispatch(setIsUpdateHome({ modal: true, modalCode: "services-d" }));
    setItemEdit("servicesDUpdate");
  };

  const handleUpdatePartnerWithUs = () => {
    dispatch(setIsUpdateHome({ modal: true, modalCode: "partner-with-us" }));
    setItemEdit("partnerWithUsUpdate");
  };

  const handleUpdateTestimonialTitle = () => {
    dispatch(setIsUpdateHome({ modal: true, modalCode: "testimonial-title" }));
    setItemEdit("testimonialTitleUpdate");
  };

  const handleUpdatePartnersTitle = () => {
    dispatch(setIsUpdateHome({ modal: true, modalCode: "partners-title" }));
    setItemEdit("partnersTitleUpdate");
  };

  const handleUpdateInsightsTitle = () => {
    dispatch(setIsUpdateHome({ modal: true, modalCode: "insights-title" }));
    setItemEdit("insightsTitleUpdate");
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
        <Navigation menu="home" submenu="" />
        <Dashboard>
          <div className="mx-5 pt-2">
            <div className="py-5 flex justify-between ">
              <div className="text-sm text-[black] font-semibold">
                <h2>Home Page</h2>
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
              <Banner />
              <Process
                handleUpdateProcessTitle={handleUpdateProcessTitle}
                handleUpdateProcessA={handleUpdateProcessA}
                handleUpdateProcessB={handleUpdateProcessB}
                handleUpdateProcessC={handleUpdateProcessC}
                handleUpdateProcessD={handleUpdateProcessD}
                processData={processData}
              />
              <Services
                servicesData={servicesData}
                handleUpdateServicesTitle={handleUpdateServicesTitle}
                handleUpdateServicesA={handleUpdateServicesA}
                handleUpdateServicesB={handleUpdateServicesB}
                handleUpdateServicesC={handleUpdateServicesC}
                handleUpdateServicesD={handleUpdateServicesD}
              />
              <PartnerWithUs
                partnerWithUsData={partnerWithUsData}
                handleUpdatePartnerWithUs={handleUpdatePartnerWithUs}
              />
              <Testimonial
                handleUpdateTestimonialTitle={handleUpdateTestimonialTitle}
                homeTitlesData={homeTitlesData}
              />
              <Partners
                handleUpdatePartnersTitle={handleUpdatePartnersTitle}
                homeTitlesData={homeTitlesData}
              />
              <Insights
                handleUpdateInsightsTitle={handleUpdateInsightsTitle}
                homeTitlesData={homeTitlesData}
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
        store.isUpdateHome?.modalCode === "process-title" && (
          <ModalUpdateProcessTitle
            itemEdit={itemEdit}
            processData={processData}
          />
        )}
      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "process-a" && (
          <ModalUpdateProcessA itemEdit={itemEdit} processData={processData} />
        )}
      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "process-b" && (
          <ModalUpdateProcessB itemEdit={itemEdit} processData={processData} />
        )}
      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "process-c" && (
          <ModalUpdateProcessC itemEdit={itemEdit} processData={processData} />
        )}
      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "process-d" && (
          <ModalUpdateProcessD itemEdit={itemEdit} processData={processData} />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "services-title" && (
          <ModalUpdateServicesTitle
            itemEdit={itemEdit}
            servicesData={servicesData}
          />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "services-a" && (
          <ModalUpdateServicesA
            itemEdit={itemEdit}
            servicesData={servicesData}
          />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "services-b" && (
          <ModalUpdateServicesB
            itemEdit={itemEdit}
            servicesData={servicesData}
          />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "services-c" && (
          <ModalUpdateServicesC
            itemEdit={itemEdit}
            servicesData={servicesData}
          />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "services-d" && (
          <ModalUpdateServicesD
            itemEdit={itemEdit}
            servicesData={servicesData}
          />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "partner-with-us" && (
          <ModalUpdatePartnerWithUs
            itemEdit={itemEdit}
            partnerWithUsData={partnerWithUsData}
          />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "testimonial-title" && (
          <ModalUpdateTestimonialTitle
            itemEdit={itemEdit}
            homeTitlesData={homeTitlesData}
          />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "partners-title" && (
          <ModalUpdatePartnersTitle
            itemEdit={itemEdit}
            homeTitlesData={homeTitlesData}
          />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "insights-title" && (
          <ModalUpdateInsightsTitle
            itemEdit={itemEdit}
            homeTitlesData={homeTitlesData}
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

export default Home;
