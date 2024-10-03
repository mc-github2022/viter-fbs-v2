import React from "react";
import Footer from "../../../../partials/Footer";
import Header from "../../../../partials/Header";
import VaMarketingBanner from "./VaMarketingBanner";
import VaMarketingOverview from "./VaMarketingOverview";
import VaMarketingPartnerWithUs from "./VaMarketingPartnerWithUs";
import VaMarketingPricing from "./VaMarketingPricing";
import VaMarketingPartners from "./VaMarketingPartners";
import VaMarketingPartnersSay from "./VaMarketingPartnersSay";

const VaMarketingPage = () => {
  return (
    <>
      <Header />
      <VaMarketingBanner />
      <VaMarketingOverview />
      <VaMarketingPartnerWithUs />
      <VaMarketingPricing />
      <VaMarketingPartners />
      <VaMarketingPartnersSay />
      <Footer />
    </>
  );
};

export default VaMarketingPage;
