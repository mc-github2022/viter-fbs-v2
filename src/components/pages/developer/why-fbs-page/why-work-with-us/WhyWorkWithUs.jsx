import React from "react";
import useQueryData from "../../../../custom-hooks/useQueryData";
import { apiVersion } from "../../../../helpers/functions-general";
import { StoreContext } from "../../../../store/StoreContext";
import Navigation from "../../../../partials/dashboard/Navigation";
import Dashboard from "../../../../partials/dashboard/Dashboard";
import BreadCrumbs from "../../../../partials/BreadCrumbs";
import Header from "../../header/Header";
import Footer from "../../footer/Footer";
import ModalUpdateHeader from "../../header/ModalUpdateHeader";
import ModalUpdateContactFormDefault from "../../contact-form-default/ModalUpdateContactFormDefault";
import ModalUpdateLogoImg from "../../footer/ModalUpdateLogoImg";
import ModalUpdateQuickLinks from "../../footer/ModalUpdateQuickLinks";
import ModalUpdateCopyright from "../../footer/ModalUpdateCopyright";
import ModalSuccess from "../../../../partials/modals/ModalSuccess";
import ModalError from "../../../../partials/modals/ModalError";
import { setIsUpdateHome } from "../../../../store/StoreAction";
import WorkBanner from "./why-work-with-us-banner/WorkBanner";
import ModalUpdateWorkBanner from "./why-work-with-us-banner/ModalUpdateWorkBanner";
import WorkCompanyProfile from "./why-work-with-us-company-profile/WorkCompanyProfile";
import ModalUpdateWorkCompanyProfileList from "./why-work-with-us-company-profile/ModalUpdateWorkCompanyProfileList";
import ModalUpdateWorkCompanyProfile from "./why-work-with-us-company-profile/ModalUpdateWorkCompanyProfile";
import ModalUpdateWorkCompanyProfileDesc from "./why-work-with-us-company-profile/ModalUpdateWorkCompanyProfileDesc";
import WorkVisionMission from "./why-work-with-us-vision-mission/WorkVisionMission";
import ModalUpdateWorkVisionMission from "./why-work-with-us-vision-mission/ModalUpdateWorkVisionMission";
import ModalUpdateWorkVision from "./why-work-with-us-vision-mission/ModalUpdateWorkVision";
import ModalUpdateWorkMission from "./why-work-with-us-vision-mission/ModalUpdateWorkMission";
import ModalUpdateWorkCoreValues from "./why-work-with-us-vision-mission/ModalUpdateWorkCoreValues";
import WorkTeams from "./why-work-with-us-teams/WorkTeams";
import ModalUpdateWorkTeamsCeo from "./why-work-with-us-teams/ModalUpdateWorkTeamsCeo";
import ModalUpdateWorkTeamsOm from "./why-work-with-us-teams/ModalUpdateWorkTeamsOm";
import ModalUpdateWorkTeamsHr from "./why-work-with-us-teams/ModalUpdateWorkTeamsHr";
import ModalUpdateWorkTeamsFinance from "./why-work-with-us-teams/ModalUpdateWorkTeamsFinance";
import ModalUpdateWorkTeamsLcs from "./why-work-with-us-teams/ModalUpdateWorkTeamsLcs";
import ModalUpdateWorkTeamsWeb from "./why-work-with-us-teams/ModalUpdateWorkTeamsWeb";
import ModalUpdateWorkTeamsMarketing from "./why-work-with-us-teams/ModalUpdateWorkTeamsMarketing";
import ModalUpdateWorkTeamsVa from "./why-work-with-us-teams/ModalUpdateWorkTeamsVa";
import WorkPartners from "./why-work-with-us-partners/WorkPartners";
import ModalUpdateWorkPartnersTitle from "./why-work-with-us-titles/ModalUpdateWorkPartnersTitle";
import ModalUpdateWorkTeamsTitle from "./why-work-with-us-titles/ModalUpdateWorkTeamsTitle";

const WhyWorkWithUs = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [itemEdit, setItemEdit] = React.useState(null);
  const [pageName, setPageName] = React.useState("enrollment");

  const { data: workData } = useQueryData(
    `${apiVersion}/work`, // endpoint
    "get", // method
    "work" // key
  );

  const { data: workCompanyProfileData } = useQueryData(
    `${apiVersion}/work-company-profile`, // endpoint
    "get", // method
    "work-company-profile" // key
  );

  const {
    isLoading: isLoadingVisionMission,
    isFetching: isFetchingVisionMission,
    data: workVisionMissionData,
  } = useQueryData(
    `${apiVersion}/work-vision-mission`, // endpoint
    "get", // method
    "work-vision-mission" // key
  );

  const { data: workTeamsData } = useQueryData(
    `${apiVersion}/work-teams`, // endpoint
    "get", // method
    "work-teams" // key
  );

  const { data: workTitlesData } = useQueryData(
    `${apiVersion}/work-titles`, // endpoint
    "get", // method
    "work-titles" // key
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

  const handleUpdateWorkBanner = () => {
    dispatch(setIsUpdateHome({ modal: true, modalCode: "work-banner" }));
    setItemEdit("workBannerUpdate");
  };

  const handleUpdateWorkCompanyProfileDesc = () => {
    dispatch(setIsUpdateHome({ modal: true, modalCode: "work-profile-desc" }));
    setItemEdit("workProfileUpdateDesc");
  };

  const handleUpdateWorkCompanyProfile = () => {
    dispatch(setIsUpdateHome({ modal: true, modalCode: "work-profile" }));
    setItemEdit("workProfileUpdateImg");
  };

  const handleUpdateWorkCompanyProfileList = () => {
    dispatch(setIsUpdateHome({ modal: true, modalCode: "work-profile-list" }));
    setItemEdit("workProfileListUpdate");
  };

  const handleUpdateWorkVisionMissionTitle = () => {
    dispatch(
      setIsUpdateHome({
        modal: true,
        modalCode: "work-vision-mission-title",
      })
    );
    setItemEdit("workVisionMissionTitleUpdate");
  };

  const handleUpdateWorkVision = () => {
    dispatch(setIsUpdateHome({ modal: true, modalCode: "work-vision" }));
    setItemEdit("workVisionUpdate");
  };

  const handleUpdateWorkMission = () => {
    dispatch(setIsUpdateHome({ modal: true, modalCode: "work-mission" }));
    setItemEdit("workMissionUpdate");
  };

  const handleUpdateWorkCoreValues = () => {
    dispatch(setIsUpdateHome({ modal: true, modalCode: "work-core-values" }));
    setItemEdit("workCoreValuesUpdate");
  };

  const handleUpdateWorkTeamsCeo = () => {
    dispatch(setIsUpdateHome({ modal: true, modalCode: "work-teams-ceo" }));
    setItemEdit("workTeamsCeoUpdate");
  };

  const handleUpdateWorkTeamsOm = () => {
    dispatch(setIsUpdateHome({ modal: true, modalCode: "work-teams-om" }));
    setItemEdit("workTeamsOmUpdate");
  };

  const handleUpdateWorkTeamsHr = () => {
    dispatch(setIsUpdateHome({ modal: true, modalCode: "work-teams-hr" }));
    setItemEdit("workTeamsHrUpdate");
  };

  const handleUpdateWorkTeamsFinance = () => {
    dispatch(setIsUpdateHome({ modal: true, modalCode: "work-teams-finance" }));
    setItemEdit("workTeamsFinanceUpdate");
  };

  const handleUpdateWorkTeamsLcs = () => {
    dispatch(setIsUpdateHome({ modal: true, modalCode: "work-teams-lcs" }));
    setItemEdit("workTeamsLcsUpdate");
  };

  const handleUpdateWorkTeamsWeb = () => {
    dispatch(setIsUpdateHome({ modal: true, modalCode: "work-teams-web" }));
    setItemEdit("workTeamsWebUpdate");
  };

  const handleUpdateWorkTeamsMarketing = () => {
    dispatch(
      setIsUpdateHome({ modal: true, modalCode: "work-teams-marketing" })
    );
    setItemEdit("workTeamsMarketingUpdate");
  };

  const handleUpdateWorkTeamsVa = () => {
    dispatch(setIsUpdateHome({ modal: true, modalCode: "work-teams-va" }));
    setItemEdit("workTeamsVaUpdate");
  };

  const handleUpdateWorkTeamsTitle = () => {
    dispatch(setIsUpdateHome({ modal: true, modalCode: "work-teams-title" }));
    setItemEdit("teamsTitleUpdate");
  };

  const handleUpdateWorkPartnersTitle = () => {
    dispatch(
      setIsUpdateHome({ modal: true, modalCode: "work-partners-title" })
    );
    setItemEdit("partnersTitleUpdate");
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
        <Navigation menu="whyFBS" submenu="why-work-with-us" />
        <Dashboard>
          <div className="mx-5 pt-2">
            <div className="text-sm text-[black] font-semibold py-5">
              <h2>Why Work With Us</h2>
            </div>
            <div className=" pb-4 bg-light shadow-xl">
              <Header
                headerData={headerData}
                handleUpdateHeader={handleUpdateHeader}
                isLoading={isLoading}
              />
              <WorkBanner
                workData={workData}
                handleUpdateWorkBanner={handleUpdateWorkBanner}
                handleUpdateContactFormDefault={handleUpdateContactFormDefault}
                contactFormDefaultData={contactFormDefaultData}
              />
              <WorkCompanyProfile
                handleUpdateWorkCompanyProfileDesc={
                  handleUpdateWorkCompanyProfileDesc
                }
                handleUpdateWorkCompanyProfile={handleUpdateWorkCompanyProfile}
                handleUpdateWorkCompanyProfileList={
                  handleUpdateWorkCompanyProfileList
                }
                workCompanyProfileData={workCompanyProfileData}
                contactFormDefaultData={contactFormDefaultData}
                handleUpdateContactFormDefault={handleUpdateContactFormDefault}
              />
              <WorkVisionMission
                handleUpdateWorkVisionMissionTitle={
                  handleUpdateWorkVisionMissionTitle
                }
                workVisionMissionData={workVisionMissionData}
                handleUpdateWorkVision={handleUpdateWorkVision}
                handleUpdateWorkMission={handleUpdateWorkMission}
                handleUpdateWorkCoreValues={handleUpdateWorkCoreValues}
              />
              <WorkTeams
                workTeamsData={workTeamsData}
                workTitlesData={workTitlesData}
                handleUpdateWorkTeamsTitle={handleUpdateWorkTeamsTitle}
                handleUpdateWorkTeamsCeo={handleUpdateWorkTeamsCeo}
                handleUpdateWorkTeamsOm={handleUpdateWorkTeamsOm}
                handleUpdateWorkTeamsHr={handleUpdateWorkTeamsHr}
                handleUpdateWorkTeamsFinance={handleUpdateWorkTeamsFinance}
                handleUpdateWorkTeamsLcs={handleUpdateWorkTeamsLcs}
                handleUpdateWorkTeamsWeb={handleUpdateWorkTeamsWeb}
                handleUpdateWorkTeamsMarketing={handleUpdateWorkTeamsMarketing}
                handleUpdateWorkTeamsVa={handleUpdateWorkTeamsVa}
              />
              <WorkPartners
                handleUpdateWorkPartnersTitle={handleUpdateWorkPartnersTitle}
                workTitlesData={workTitlesData}
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
        store.isUpdateHome?.modalCode === "work-banner" && (
          <ModalUpdateWorkBanner itemEdit={itemEdit} workData={workData} />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "work-profile-list" && (
          <ModalUpdateWorkCompanyProfileList
            itemEdit={itemEdit}
            workCompanyProfileData={workCompanyProfileData}
          />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "work-profile" && (
          <ModalUpdateWorkCompanyProfile
            itemEdit={itemEdit}
            workCompanyProfileData={workCompanyProfileData}
          />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "work-profile-desc" && (
          <ModalUpdateWorkCompanyProfileDesc
            itemEdit={itemEdit}
            workCompanyProfileData={workCompanyProfileData}
          />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "work-vision-mission-title" && (
          <ModalUpdateWorkVisionMission
            itemEdit={itemEdit}
            workVisionMissionData={workVisionMissionData}
          />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "work-vision" && (
          <ModalUpdateWorkVision
            itemEdit={itemEdit}
            workVisionMissionData={workVisionMissionData}
          />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "work-mission" && (
          <ModalUpdateWorkMission
            itemEdit={itemEdit}
            workVisionMissionData={workVisionMissionData}
          />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "work-core-values" && (
          <ModalUpdateWorkCoreValues
            itemEdit={itemEdit}
            workVisionMissionData={workVisionMissionData}
          />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "work-teams-ceo" && (
          <ModalUpdateWorkTeamsCeo
            itemEdit={itemEdit}
            workTeamsData={workTeamsData}
          />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "work-teams-om" && (
          <ModalUpdateWorkTeamsOm
            itemEdit={itemEdit}
            workTeamsData={workTeamsData}
          />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "work-teams-hr" && (
          <ModalUpdateWorkTeamsHr
            itemEdit={itemEdit}
            workTeamsData={workTeamsData}
          />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "work-teams-finance" && (
          <ModalUpdateWorkTeamsFinance
            itemEdit={itemEdit}
            workTeamsData={workTeamsData}
          />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "work-teams-lcs" && (
          <ModalUpdateWorkTeamsLcs
            itemEdit={itemEdit}
            workTeamsData={workTeamsData}
          />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "work-teams-web" && (
          <ModalUpdateWorkTeamsWeb
            itemEdit={itemEdit}
            workTeamsData={workTeamsData}
          />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "work-teams-marketing" && (
          <ModalUpdateWorkTeamsMarketing
            itemEdit={itemEdit}
            workTeamsData={workTeamsData}
          />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "work-teams-va" && (
          <ModalUpdateWorkTeamsVa
            itemEdit={itemEdit}
            workTeamsData={workTeamsData}
          />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "work-partners-title" && (
          <ModalUpdateWorkPartnersTitle
            itemEdit={itemEdit}
            workTitlesData={workTitlesData}
          />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "work-teams-title" && (
          <ModalUpdateWorkTeamsTitle
            itemEdit={itemEdit}
            workTitlesData={workTitlesData}
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

export default WhyWorkWithUs;
