import React from "react";
import Footer from "../../../../partials/Footer";
import Header from "../../../../partials/Header";
import ServiceOnlineDonationBanner from "./ServiceOnlineDonationBanner";
import ServiceOnlineDonationPartners from "./ServiceOnlineDonationPartners";
import ServiceOnlineDonationOverview from "./ServiceOnlineDonationOverview";
import ServiceOnlineDonationScope from "./ServiceOnlineDonationScope";
import ServiceOnlineDonationPricing from "./ServiceOnlineDonationPricing";
import ServiceOnlineDonationPartnersSay from "./ServiceOnlineDonationPartnersSay";

const ServiceOnlineDonationPage = () => {
  return (
    <>
      <Header />
      <ServiceOnlineDonationBanner />
      <ServiceOnlineDonationPartners />
      <ServiceOnlineDonationOverview />
      <ServiceOnlineDonationScope />
      <ServiceOnlineDonationPricing />
      <ServiceOnlineDonationPartnersSay />
      <Footer />
    </>
  );
};

export default ServiceOnlineDonationPage;
