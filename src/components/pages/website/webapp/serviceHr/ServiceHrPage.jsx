import React from "react";
import Header from "../../../../partials/Header";
import Footer from "../../../../partials/Footer";
import ServiceHrBanner from "./ServiceHrBanner";
import ServiceHrPartners from "./ServiceHrPartners";
import ServiceHrOverview from "./ServiceHrOverview";
import ServiceHrScope from "./ServiceHrScope";
import ServiceHrPricing from "./ServiceHrPricing";
import ServiceHrPartnersSay from "./ServiceHrPartnersSay";

const ServiceHrPage = () => {
  return (
    <>
      <Header />
      <ServiceHrBanner />
      <ServiceHrOverview />
      <ServiceHrScope />
      <ServiceHrPricing />
      <ServiceHrPartners />
      <ServiceHrPartnersSay />
      <Footer />
    </>
  );
};

export default ServiceHrPage;
