import React from "react";
import Header from "../../../../partials/Header";
import Footer from "../../../../partials/Footer";
import ServiceEnrollmentBanner from "./ServiceEnrollmentBanner";
import ServiceEnrollmentPartners from "./ServiceEnrollmentPartners";
import ServiceEnrollmentOverview from "./ServiceEnrollmentOverview";
import ServiceEnrollmentScope from "./ServiceEnrollmentScope";
import ServiceEnrollmentPricing from "./ServiceEnrollmentPricing";
import ServiceEnrollmentPartnersSay from "./ServiceEnrollmentPartnersSay";

const ServiceEnrollmentPage = () => {
  const [pageName, setPageName] = React.useState("enrollment");
  return (
    <>
      <Header pageName={pageName} />
      <ServiceEnrollmentBanner />
      <ServiceEnrollmentOverview />
      <ServiceEnrollmentScope />
      <ServiceEnrollmentPricing />
      {/* <ServiceEnrollmentPartners /> */}
      <ServiceEnrollmentPartnersSay />
      <Footer />
    </>
  );
};

export default ServiceEnrollmentPage;
