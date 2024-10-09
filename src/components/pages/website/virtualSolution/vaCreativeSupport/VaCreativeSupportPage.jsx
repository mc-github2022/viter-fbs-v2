import React from "react";
import Footer from "../../../../partials/Footer";
import Header from "../../../../partials/Header";
import VaCreativeSupportBanner from "./VaCreativeSupportBanner";
import VaCreativeSupportOverview from "./VaCreativeSupportOverview";
import VaCreativeSupportPartners from "./VaCreativeSupportPartners";
import VaCreativeSupportPartnersSay from "./VaCreativeSupportPartnersSay";
import VaCreativeSupportPartnerWithUs from "./VaCreativeSupportPartnerWithUs";
import VaCreativeSupportPricing from "./VaCreativeSupportPricing";
import VaCreativeSupportServiceList from "./VaCreativeSupportServiceList";

const VaCreativeSupportPage = () => {
  return (
    <>
      <Header />
      <VaCreativeSupportBanner />
      <VaCreativeSupportOverview />
      <VaCreativeSupportServiceList />
      <VaCreativeSupportPricing />
      <VaCreativeSupportPartners />
      <VaCreativeSupportPartnersSay />
      <Footer />
    </>
  );
};

export default VaCreativeSupportPage;
