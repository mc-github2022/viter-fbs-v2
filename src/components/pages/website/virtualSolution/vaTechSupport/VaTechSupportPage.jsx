import React from "react";
import Footer from "../../../../partials/Footer";
import Header from "../../../../partials/Header";
import VaTechSupportBanner from "./VaTechSupportBanner";
import VaTechSupportOverview from "./VaTechSupportOverview";
import VaTechSupportPricing from "./VaTechSupportPricing";
import VaTechSupportPartners from "./VaTechSupportPartners";
import VaTechSupportPartnerWithUs from "./VaTechSupportPartnerWithUs";
import VaTechSupportPartnersSay from "./VaTechSupportPartnersSay";
import VaTechSupportServiceList from "./VaTechSupportServiceList";

const VaTechSupportPage = () => {
  return (
    <>
      <Header />
      <VaTechSupportBanner />
      <VaTechSupportOverview />
      <VaTechSupportServiceList />
      <VaTechSupportPricing />
      <VaTechSupportPartners />
      <VaTechSupportPartnersSay />
      <Footer />
    </>
  );
};

export default VaTechSupportPage;
