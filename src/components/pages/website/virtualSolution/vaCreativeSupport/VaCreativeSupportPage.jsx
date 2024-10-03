import React from "react";
import Footer from "../../../../partials/Footer";
import Header from "../../../../partials/Header";
import VaCreativeSupportBanner from "./VaCreativeSupportBanner";
import VaCreativeSupportOverview from "./VaCreativeSupportOverview";
import VaCreativeSupportPartners from "./VaCreativeSupportPartners";
import VaCreativeSupportPartnersSay from "./VaCreativeSupportPartnersSay";
import VaCreativeSupportPartnerWithUs from "./VaCreativeSupportPartnerWithUs";
import VaCreativeSupportPricing from "./VaCreativeSupportPricing";

const VaCreativeSupportPage = () => {
  return (
    <>
      <Header />
      <VaCreativeSupportBanner />
      <VaCreativeSupportOverview />
      <VaCreativeSupportPartnerWithUs />
      <VaCreativeSupportPricing />
      <VaCreativeSupportPartners />
      <VaCreativeSupportPartnersSay />
      <Footer />
    </>
  );
};

export default VaCreativeSupportPage;
