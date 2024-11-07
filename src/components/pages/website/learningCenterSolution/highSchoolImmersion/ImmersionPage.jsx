import React from "react";
import Footer from "../../../../partials/Footer";
import Header from "../../../../partials/Header";
import ImmersionApplyNow from "./ImmersionApplyNow";
import ImmersionBanner from "./ImmersionBanner";
import ImmersionBatches from "./ImmersionBatches";
import ImmersionPartners from "./ImmersionPartners";
import ImmersionPartnersSay from "./ImmersionPartnersSay";
import ImmersionPartnersWithUs from "./ImmersionPartnersWithUs";
import ImmersionServices from "./ImmersionServices";
import ImmersionTeam from "./ImmersionTeam";
import ImmersionVidTestimonials from "./ImmersionVidTestimonials";

const ImmersionPage = () => {
  const [pageName, setPageName] = React.useState("immersion");
  return (
    <>
      <Header pageName={pageName} />
      <ImmersionBanner pageName={pageName} />
      <ImmersionPartners />
      <ImmersionPartnersWithUs />
      <ImmersionServices />
      <ImmersionApplyNow />
      <ImmersionTeam />
      <ImmersionBatches />
      <ImmersionVidTestimonials />
      <ImmersionPartnersSay />
      <Footer />
    </>
  );
};

export default ImmersionPage;
