import React from "react";
import Header from "../../../partials/Header";
import Footer from "../../../partials/Footer";
import LcssPartners from "./LcssPartners";
import LcssPartnersWithUs from "./LcssPartnersWithUs";
import LcssServices from "./LcssServices";
import LcssApplyNow from "./LcssApplyNow";
import LcssTeam from "./LcssTeam";
import LcssBatches from "./LcssBatches";
import LcssVidTestimonials from "./LcssVidTestimonials";
import LcssPartnersSay from "./LcssPartnersSay";
import LcssBanner from "./LcssBanner";

const LcssPage = () => {
  return (
    <>
      <Header />
      <LcssBanner />
      <LcssPartners />
      <LcssPartnersWithUs />
      <LcssServices />
      <LcssApplyNow />
      <LcssTeam />
      <LcssBatches />
      <LcssVidTestimonials />
      <LcssPartnersSay />
      <Footer />
    </>
  );
};

export default LcssPage;
