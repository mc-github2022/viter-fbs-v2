import React from "react";
import Header from "../../../partials/Header";
import Footer from "../../../partials/Footer";
import WhyUsBanner from "./WhyUsBanner";
import WhyUsCompanyProfile from "./WhyUsCompanyProfile";
import MissionVission from "./MissionVission";
import WhyUsPartners from "./WhyUsPartners";
import WhyUsTheTeam from "./WhyUsTheTeam";
import { StoreContext } from "../../../store/StoreContext";
import ModalSuccess from "../../../partials/modals/ModalSuccess";
import ModalError from "../../../partials/modals/ModalError";
import useQueryData from "../../../custom-hooks/useQueryData";
import { apiVersion } from "../../../helpers/functions-general";

const WhyUsPage = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [pageName, setPageName] = React.useState("whyWorkWithUs");

  const { data: workTitlesData } = useQueryData(
    `${apiVersion}/work-titles`, // endpoint
    "get", // method
    "work-titles" // key
  );

  React.useEffect(() => {
    // Only scroll to top if there's NO hash in URL
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <>
      <Header pageName={pageName} services={"default"} />
      <WhyUsBanner pageName={pageName} />
      <WhyUsCompanyProfile pageName={pageName} />
      <MissionVission />
      <WhyUsTheTeam workTitlesData={workTitlesData} />
      <WhyUsPartners workTitlesData={workTitlesData} />
      <Footer />
      {store.success && <ModalSuccess />}
      {store.error && <ModalError />}
    </>
  );
};

export default WhyUsPage;
