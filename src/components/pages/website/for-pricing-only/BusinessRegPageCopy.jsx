import React from "react";
import BusinessRegOverview from "./BusinessRegOverview";
import BusinessRegPartners from "./BusinessRegPartners";
import BusinessRegPartnersSay from "./BusinessRegPartnersSay";
import BusinessRegPricing from "./BusinessRegPricing";
import BusinessRegServiceList from "./BusinessRegServiceList";
import BusinessRegBanner from "./BusinessRegBanner";
import Header from "../../../partials/Header";
import Footer from "../../../partials/Footer";

const BusinessRegPageCopy = () => {
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

export default BusinessRegPageCopy;
