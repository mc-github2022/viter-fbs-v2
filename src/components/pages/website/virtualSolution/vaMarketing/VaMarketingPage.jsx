import React from "react";
import Footer from "../../../../partials/Footer";
import Header from "../../../../partials/Header";
import VaMarketingBanner from "./VaMarketingBanner";
import VaMarketingOverview from "./VaMarketingOverview";
import VaMarketingPartnerWithUs from "./VaMarketingPartnerWithUs";
import VaMarketingPricing from "./VaMarketingPricing";
import VaMarketingPartners from "./VaMarketingPartners";
import VaMarketingPartnersSay from "./VaMarketingPartnersSay";
import VaMarketingServiceList from "./VaMarketingServiceList";

const VaMarketingPage = () => {
  return (
    <>
      <Header />
      <VaMarketingBanner />
      <VaMarketingOverview />
      <VaMarketingServiceList />
      <VaMarketingPricing />
      <VaMarketingPartners />
      <VaMarketingPartnersSay />
      <Footer />
    </>
  );
};

export default VaMarketingPage;
