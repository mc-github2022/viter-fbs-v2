import React from "react";
import Footer from "../../../../partials/Footer";
import Header from "../../../../partials/Header";
import SinglePageBanner from "./SinglePageBanner";
import SinglePageOverview from "./SinglePageOverview";
import SinglePageScope from "./SinglePageScope";
import SinglePagePricing from "./SinglePagePricing";
import SinglePagePartners from "./SinglePagePartners";
import SinglePagePartnersSay from "./SinglePagePartnersSay";

const SinglePageWebsite = () => {
  return (
    <>
      <Header />
      <SinglePageBanner />
      <SinglePageOverview />
      <SinglePageScope />
      <SinglePagePricing />
      <SinglePagePartners />
      {/* <SinglePagePartnersSay /> */}
      <Footer />
    </>
  );
};

export default SinglePageWebsite;
