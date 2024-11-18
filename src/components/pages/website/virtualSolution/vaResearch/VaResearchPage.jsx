import React from "react";
import Footer from "../../../../partials/Footer";
import Header from "../../../../partials/Header";
import VaResearchBanner from "./VaResearchBanner";
import VaResearchOverview from "./VaResearchOverview";
import VaResearchPartnerWithUs from "./VaResearchPartnerWithUs";
import VaResearchPricing from "./VaResearchPricing";
import VaResearchPartners from "./VaResearchPartners";
import VaResearchPartnersSay from "./VaResearchPartnersSay";
import VaResearchServiceList from "./VaResearchServiceList";
import { StoreContext } from "../../../../store/StoreContext";
import ModalSuccess from "../../../../partials/modals/ModalSuccess";
import ModalError from "../../../../partials/modals/ModalError";

const VaResearchPage = () => {
  const [pageName, setPageName] = React.useState("va-business-support");
  const { store, dispatch } = React.useContext(StoreContext);
  return (
    <>
      <Header pageName={pageName} />
      <VaResearchBanner pageName={pageName} />
      <VaResearchOverview />
      <VaResearchServiceList pageName={pageName} />
      <VaResearchPricing pageName={pageName} />
      <VaResearchPartners />
      <VaResearchPartnersSay />
      <Footer />
      {store.success && <ModalSuccess />}
      {store.error && <ModalError />}
    </>
  );
};

export default VaResearchPage;
