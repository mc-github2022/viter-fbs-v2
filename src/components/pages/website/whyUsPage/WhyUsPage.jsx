import React from "react";
import Header from "../../../partials/Header";
import Footer from "../../../partials/Footer";
import WhyUsBanner from "./WhyUsBanner";
import WhyUsCompanyProfile from "./WhyUsCompanyProfile";
import MissionVission from "./MissionVission";
import WhyUsPartners from "./WhyUsPartners";
import WhyUsTheTeam from "./WhyUsTheTeam";

const WhyUsPage = () => {
  return (
    <>
      <Header />
      <WhyUsBanner />
      <WhyUsCompanyProfile />
      <MissionVission />
      <WhyUsTheTeam />
      <WhyUsPartners />
      <Footer />
    </>
  );
};

export default WhyUsPage;
