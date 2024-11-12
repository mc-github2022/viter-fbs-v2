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
  const [pageName, setPageName] = React.useState("business-reg");
  return (
    <>
      <Header pageName={pageName} />
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
