import React from "react";

import ServiceHrBanner from "./ServiceHrBanner";
import ServiceHrPartners from "./ServiceHrPartners";
import ServiceHrOverview from "./ServiceHrOverview";
import ServiceHrPartnersSay from "./ServiceHrPartnersSay";
import ServiceHrPricing from "./ServiceHrPricing";
import ServiceHrScope from "./ServiceHrScope";
import Header from "../../../../partials/Header";
import Footer from "../../../../partials/Footer";

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
