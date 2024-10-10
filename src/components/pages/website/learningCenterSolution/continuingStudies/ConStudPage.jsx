import React from "react";
import Footer from "../../../../partials/Footer";
import Header from "../../../../partials/Header";
import ConStudApplyNow from "./ConStudApplyNow";
import ConStudBanner from "./ConStudBanner";
import ConStudBatches from "./ConStudBatches";
import ConStudPartners from "./ConStudPartners";
import ConStudPartnersSay from "./ConStudPartnersSay";
import ConStudPartnersWithUs from "./ConStudPartnersWithUs";
import ConStudServices from "./ConStudServices";
import ConStudTeam from "./ConStudTeam";
import ConStudVidTestimonials from "./ConStudVidTestimonials";

const ConStudPage = () => {
  return (
    <>
      <Header />
      <ConStudBanner />
      <ConStudPartners />
      <ConStudPartnersWithUs />
      <ConStudServices />
      <ConStudApplyNow />
      <ConStudTeam />
      <ConStudBatches />
      <ConStudVidTestimonials />
      <ConStudPartnersSay />
      <Footer />
    </>
  );
};

export default ConStudPage;
