import React from "react";
import Footer from "../../../../partials/Footer";
import Header from "../../../../partials/Header";
import WordPressBanner from "./WordPressBanner";
import WordPressOverview from "./WordPressOverview";
import WordPressScope from "./WordPressScope";
import WordPressPricing from "./WordPressPricing";
import WordPressPartners from "./WordPressPartners";
import WordPressPartnersSay from "./WordPressPartnersSay";

const WordPressPage = () => {
  return (
    <>
      <Header />
      <WordPressBanner />
      <WordPressOverview />
      <WordPressScope />
      <WordPressPricing />
      <WordPressPartners />
      <WordPressPartnersSay />
      <Footer />
    </>
  );
};

export default WordPressPage;
