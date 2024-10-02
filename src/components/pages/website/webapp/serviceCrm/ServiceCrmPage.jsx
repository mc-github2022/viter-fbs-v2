import React from "react";
import Header from "../../../../partials/Header";
import Footer from "../../../../partials/Footer";
import ServiceCrmBanner from "./ServiceCrmBanner";
import ServiceCrmPartners from "./ServiceCrmPartners";
import ServiceCrmOverview from "./ServiceCrmOverview";
import ServiceCrmScope from "./ServiceCrmScope";
import ServiceCrmPricing from "./ServiceCrmPricing";
import ServiceCrmPartnersSay from "./ServiceCrmPartnersSay";

const ServiceCrmPage = () => {
  return (
    <>
      <Header />
      <ServiceCrmBanner />
      <ServiceCrmPartners />
      <ServiceCrmOverview />
      <ServiceCrmScope />
      <ServiceCrmPricing />
      <ServiceCrmPartnersSay />
      <Footer />
    </>
  );
};

export default ServiceCrmPage;
