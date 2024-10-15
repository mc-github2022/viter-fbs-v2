import React from "react";
import Footer from "../../../../partials/Footer";
import Header from "../../../../partials/Header";
import BusinessRegBanner from "../vaAdminSolution/BusinessRegBanner";
import BusinessRegOverview from "./BusinessRegOverview";
import BusinessRegPartners from "./BusinessRegPartners";
import BusinessRegPartnersSay from "./BusinessRegPartnersSay";
import BusinessRegPricing from "./BusinessRegPricing";
import BusinessRegServiceList from "./BusinessRegServiceList";

const BusinessRegPage = () => {
  return (
    <>
      <Header />
      <BusinessRegBanner />
      <BusinessRegOverview />
      <BusinessRegServiceList />
      {/* <BusinessRegPartnerWithUs /> */}
      <BusinessRegPricing />
      <BusinessRegPartners />
      <BusinessRegPartnersSay />
      <Footer />
    </>
  );
};

export default BusinessRegPage;
