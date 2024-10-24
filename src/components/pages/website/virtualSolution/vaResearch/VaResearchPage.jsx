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
  return (
    <>
      <Header />
      <VaResearchBanner />
      <VaResearchOverview />
      <VaResearchServiceList />
      <VaResearchPricing />
      <VaResearchPartners />
      <VaResearchPartnersSay />
      <Footer />
    </>
  );
};

export default VaResearchPage;
