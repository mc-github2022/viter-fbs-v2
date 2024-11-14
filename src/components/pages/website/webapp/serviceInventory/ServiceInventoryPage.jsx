import React from "react";
import Footer from "../../../../partials/Footer";
import Header from "../../../../partials/Header";
import ServiceInventoryBanner from "./ServiceInventoryBanner";
import ServiceInventoryPartners from "./ServiceInventoryPartners";
import ServiceInventoryOverview from "./ServiceInventoryOverview";
import ServiceInventoryScope from "./ServiceInventoryScope";
import ServiceInventoryPricing from "./ServiceInventoryPricing";
import ServiceInventoryPartnersSay from "./ServiceInventoryPartnersSay";

const ServiceInventoryPage = () => {
  const [pageName, setPageName] = React.useState("inventory");
  return (
    <>
      <Header pageName={pageName} />
      <ServiceInventoryBanner pageName={pageName} />
      {/* <ServiceInventoryPartners /> */}
      <ServiceInventoryOverview pageName={pageName} />
      <ServiceInventoryScope pageName={pageName} />
      <ServiceInventoryPricing pageName={pageName} />
      {/* <ServiceInventoryPartnersSay /> */}
      <Footer />
    </>
  );
};

export default ServiceInventoryPage;
