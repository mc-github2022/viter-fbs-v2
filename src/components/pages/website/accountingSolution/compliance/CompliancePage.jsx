import React from "react";
import Footer from "../../../../partials/Footer";
import Header from "../../../../partials/Header";
import ComplianceOverview from "./ComplianceOverview";
import CompliancePartners from "./CompliancePartners";
import CompliancePartnersSay from "./CompliancePartnersSay";
import CompliancePricing from "./CompliancePricing";
import ComplianceRegBanner from "./ComplianceRegBanner";
import ComplianceServiceList from "./ComplianceServiceList";

const CompliancePage = () => {
  return (
    <>
      <Header />
      <ComplianceRegBanner />
      <ComplianceOverview />
      <ComplianceServiceList />
      <CompliancePricing />
      <CompliancePartners />
      <CompliancePartnersSay />
      <Footer />
    </>
  );
};

export default CompliancePage;
