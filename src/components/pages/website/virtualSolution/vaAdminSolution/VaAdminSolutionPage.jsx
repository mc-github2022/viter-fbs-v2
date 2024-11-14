import React from "react";
import Footer from "../../../../partials/Footer";
import Header from "../../../../partials/Header";
import VaAdminSolutionBanner from "./VaAdminSolutionBanner";
import VaAdminSolutionOverview from "./VaAdminSolutionOverview";
import VaAdminSolutionPartners from "./VaAdminSolutionPartners";
import VaAdminSolutionPartnersSay from "./VaAdminSolutionPartnersSay";
import VaAdminSolutionPartnerWithUs from "./VaAdminSolutionPartnerWithUs";
import VaAdminSolutionPricing from "./VaAdminSolutionPricing";
import VaAdminServiceList from "./VaAdminServiceList";

const VaAdminSolutionPage = () => {
  const [pageName, setPageName] = React.useState("va-administrative");
  return (
    <>
      <Header pageName={pageName} />
      <VaAdminSolutionBanner pageName={pageName} />
      <VaAdminSolutionOverview />
      <VaAdminServiceList />
      {/* <VaAdminSolutionPartnerWithUs /> */}
      <VaAdminSolutionPricing pageName={pageName} />
      <VaAdminSolutionPartners />
      <VaAdminSolutionPartnersSay />
      <Footer />
    </>
  );
};

export default VaAdminSolutionPage;
