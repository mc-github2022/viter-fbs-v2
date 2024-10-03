import React from "react";
import Footer from "../../../../partials/Footer";
import Header from "../../../../partials/Header";
import VaResearchBanner from "./VaResearchBanner";
import VaResearchOverview from "./VaResearchOverview";
import VaResearchPartnerWithUs from "./VaResearchPartnerWithUs";
import VaResearchPricing from "./VaResearchPricing";
import VaResearchPartners from "./VaResearchPartners";
import VaResearchPartnersSay from "./VaResearchPartnersSay";

const VaResearchPage = () => {
  return (
    <>
      <Header />
      <VaResearchBanner />
      <VaResearchOverview />
      <VaResearchPartnerWithUs />
      <VaResearchPricing />
      <VaResearchPartners />
      <VaResearchPartnersSay />
      <Footer />
    </>
  );
};

export default VaResearchPage;
