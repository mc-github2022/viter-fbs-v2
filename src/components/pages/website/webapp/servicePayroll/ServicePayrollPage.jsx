import React from "react";
import Header from "../../../../partials/Header";
import Footer from "../../../../partials/Footer";
import ServicePayrollBanner from "./ServicePayrollBanner";
import ServicePayrollPartners from "./ServicePayrollPartners";
import ServicePayrollOverview from "./ServicePayrollOverview";
import ServicePayrollScope from "./ServicePayrollScope";
import ServicePayrollPricing from "./ServicePayrollPricing";
import ServicePayrollPartnersSay from "./ServicePayrollPartnersSay";

const ServicePayrollPage = () => {
  return (
    <>
      <Header />
      <ServicePayrollBanner />
      <ServicePayrollPartners />
      <ServicePayrollOverview />
      <ServicePayrollScope />
      <ServicePayrollPricing />
      <ServicePayrollPartnersSay />
      <Footer />
    </>
  );
};

export default ServicePayrollPage;
