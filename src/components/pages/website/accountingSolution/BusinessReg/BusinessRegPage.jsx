import React from "react";
import Footer from "../../../../partials/Footer";
import Header from "../../../../partials/Header";
import BusinessRegOverview from "./BusinessRegOverview";
import BusinessRegPartners from "./BusinessRegPartners";
import BusinessRegPartnersSay from "./BusinessRegPartnersSay";
import BusinessRegPricing from "./BusinessRegPricing";
import BusinessRegServiceList from "./BusinessRegServiceList";
import BusinessRegBanner from "./BusinessRegBanner";

const BusinessRegPage = () => {
  return (
    <>
      <Header />
      <BusinessRegBanner />
      <BusinessRegOverview />
      {/* <BusinessRegServiceList /> */}
      <BusinessRegPricing />
      {/* <BusinessRegPartners />
      <BusinessRegPartnersSay /> */}
      <Footer />
    </>
  );
};

export default BusinessRegPage;
