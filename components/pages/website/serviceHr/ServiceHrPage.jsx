import React from "react";
import Header from "../../../partials/Header";
import Footer from "../../../partials/Footer";
import ServiceHrBanner from "./ServiceHrBanner";
import ServiceHrPartners from "./ServiceHrPartners";
import ServiceHrOverview from "./ServiceHrOverview";
import ServiceHrPartnersSay from "./ServiceHrPartnersSay";
import ServiceHrPricing from "./ServiceHrPricing";
import ServiceHrScope from "./ServiceHrScope";

const ServiceHrPage = () => {
  return (
    <>
      <Header />
      <ServiceHrBanner />
      <ServiceHrPartners />
      <ServiceHrOverview />
      <ServiceHrScope />
      <ServiceHrPricing />
      <ServiceHrPartnersSay />
      <Footer />
    </>
  );
};

export default ServiceHrPage;
