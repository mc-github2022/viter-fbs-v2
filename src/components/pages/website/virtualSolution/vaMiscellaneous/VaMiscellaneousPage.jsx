import React from "react";
import Footer from "../../../../partials/Footer";
import Header from "../../../../partials/Header";
import VaMiscellaneousBanner from "./VaMiscellaneousBanner";
import VaMiscellaneousOverview from "./VaMiscellaneousOverview";
import VaMiscellaneousPartnerWithUs from "./VaMiscellaneousPartnerWithUs";
import VaMiscellaneousPricing from "./VaMiscellaneousPricing";
import VaMiscellaneousPartners from "./VaMiscellaneousPartners";
import VaMiscellaneousPartnersSay from "./VaMiscellaneousPartnersSay";

const VaMiscellaneousPage = () => {
  return (
    <>
      <Header />
      <VaMiscellaneousBanner />
      <VaMiscellaneousOverview />
      <VaMiscellaneousPartnerWithUs />
      <VaMiscellaneousPricing />
      <VaMiscellaneousPartners />
      <VaMiscellaneousPartnersSay />
      <Footer />
    </>
  );
};

export default VaMiscellaneousPage;
