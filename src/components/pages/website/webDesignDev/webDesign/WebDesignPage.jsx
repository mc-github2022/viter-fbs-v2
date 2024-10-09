import React from "react";
import Footer from "../../../../partials/Footer";
import Header from "../../../../partials/Header";
import WebDesignBanner from "./WebDesignBanner";
import WebDesignOverview from "./WebDesignOverview";
import WebDesignPartners from "./WebDesignPartners";
import WebDesignPartnersSay from "./WebDesignPartnersSay";
import WebDesignPricing from "./WebDesignPricing";
import WebDesignScope from "./WebDesignScope";

const WebDesignPage = () => {
  return (
    <>
      <Header />
      <WebDesignBanner />
      <WebDesignOverview />
      <WebDesignScope />
      <WebDesignPricing />
      <WebDesignPartners />
      <WebDesignPartnersSay />
      <Footer />
    </>
  );
};

export default WebDesignPage;
