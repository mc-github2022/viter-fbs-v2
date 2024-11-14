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
  const [pageName, setPageName] = React.useState("payroll");
  return (
    <>
      <Header pageName={pageName} />
      <ServicePayrollBanner />
      <ServicePayrollOverview />
      <ServicePayrollScope />
      <ServicePayrollPricing pageName={pageName} />
      <ServicePayrollPartners />
      <ServicePayrollPartnersSay />
      <Footer />
    </>
  );
};

export default ServicePayrollPage;
