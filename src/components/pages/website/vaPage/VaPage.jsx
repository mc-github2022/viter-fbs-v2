import React from "react";
import Header from "../../../partials/Header";
import Footer from "../../../partials/Footer";
import VaBanner from "./VaBanner";
import VaOverview from "./VaOverview";
import VaPartnerWithUs from "./VaPartnerWithUs";
import VaPricing from "./VaPricing";
import VaPartners from "./VaPartners";
import VaPartnersSay from "./VaPartnersSay";

const VaPage = () => {
  return (
    <>
      <Header />
      <VaBanner />
      <VaOverview />
      <VaPartnerWithUs />
      <VaPricing />
      <VaPartners />
      <VaPartnersSay />
      <Footer />
    </>
  );
};

export default VaPage;
