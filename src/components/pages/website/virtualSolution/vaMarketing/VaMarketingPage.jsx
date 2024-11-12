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
  const [pageName, setPageName] = React.useState("va-marketing");
  return (
    <>
      <Header pageName={pageName} />
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
