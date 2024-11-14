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
  const [pageName, setPageName] = React.useState("donation");
  return (
    <>
      <Header pageName={pageName} />
      <ServiceOnlineDonationBanner pageName={pageName} />
      <ServiceOnlineDonationOverview pageName={pageName} />
      <ServiceOnlineDonationScope pageName={pageName} />
      <ServiceOnlineDonationPricing pageName={pageName} />
      {/* <ServiceOnlineDonationPartners /> */}
      <ServiceOnlineDonationPartnersSay />
      <Footer />
    </>
  );
};

export default ServiceOnlineDonationPage;
