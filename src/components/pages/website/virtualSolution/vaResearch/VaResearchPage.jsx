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

const VaResearchPage = () => {
  const [pageName, setPageName] = React.useState("va-business-support");
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
    </>
  );
};

export default VaResearchPage;
