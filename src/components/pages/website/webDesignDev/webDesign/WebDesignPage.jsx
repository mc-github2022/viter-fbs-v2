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
  const [pageName, setPageName] = React.useState("web-design");
  return (
    <>
      <Header pageName={pageName} />
      <WebDesignBanner pageName={pageName} />
      <WebDesignOverview pageName={pageName} />
      <WebDesignScope pageName={pageName} />
      <WebDesignPricing pageName={pageName} />
      <WebDesignPartners />
      <WebDesignPartnersSay />
      <Footer />
    </>
  );
};

export default WebDesignPage;
