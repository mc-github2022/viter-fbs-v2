import React from "react";
import Footer from "../../../../partials/Footer";
import Header from "../../../../partials/Header";
import ServiceInventoryBanner from "./ServiceInventoryBanner";
import ServiceInventoryPartners from "./ServiceInventoryPartners";
import ServiceInventoryOverview from "./ServiceInventoryOverview";
import ServiceInventoryScope from "./ServiceInventoryScope";
import ServiceInventoryPricing from "./ServiceInventoryPricing";
import ServiceInventoryPartnersSay from "./ServiceInventoryPartnersSay";

const ServiceInventoryPage = () => {
  return (
    <>
      <Header />
      <ServiceInventoryBanner />
      <ServiceInventoryPartners />
      <ServiceInventoryOverview />
      <ServiceInventoryScope />
      <ServiceInventoryPricing />
      <ServiceInventoryPartnersSay />
      <Footer />
    </>
  );
};

export default ServiceInventoryPage;
