import React from "react";
import Footer from "../../../../partials/Footer";
import Header from "../../../../partials/Header";
import ServiceOnlinePayBanner from "./ServiceOnlinePayBanner";
import ServiceOnlinePayPartners from "./ServiceOnlinePayPartners";
import ServiceOnlinePayOverview from "./ServiceOnlinePayOverview";
import ServiceOnlinePayScope from "./ServiceOnlinePayScope";
import ServiceOnlinePayPricing from "./ServiceOnlinePayPricing";
import ServiceOnlinePayPartnersSay from "./ServiceOnlinePayPartnersSay";

const ServiceOnlinePayPage = () => {
  return (
    <>
      <Header />
      <ServiceOnlinePayBanner />
      <ServiceOnlinePayOverview />
      <ServiceOnlinePayScope />
      <ServiceOnlinePayPricing />
      {/* <ServiceOnlinePayPartners /> */}
      {/* <ServiceOnlinePayPartnersSay /> */}
      <Footer />
    </>
  );
};

export default ServiceOnlinePayPage;
