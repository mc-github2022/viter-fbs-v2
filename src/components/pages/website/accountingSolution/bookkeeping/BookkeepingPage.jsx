import React from "react";
import Footer from "../../../../partials/Footer";
import Header from "../../../../partials/Header";
import BookkeepingBanner from "./BookkeepingBanner";
import BookkeepingOverview from "./BookkeepingOverview";
import BookkeepingServiceList from "./BookkeepingServiceList";
import BookkeepingPricing from "./BookkeepingPricing";
import BookkeepingPartners from "./BookkeepingPartners";
import BookkeepingPartnersSay from "./BookkeepingPartnersSay";

const BookkeepingPage = () => {
  return (
    <>
      <Header />
      <BookkeepingBanner />
      <BookkeepingOverview />
      <BookkeepingServiceList />
      <BookkeepingPricing />
      <BookkeepingPartners />
      <BookkeepingPartnersSay />
      <Footer />
    </>
  );
};

export default BookkeepingPage;
