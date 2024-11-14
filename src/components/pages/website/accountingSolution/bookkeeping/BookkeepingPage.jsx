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
  const [pageName, setPageName] = React.useState("bookkeeping");
  return (
    <>
      <Header pageName={pageName} />
      <BookkeepingBanner pageName={pageName} />
      <BookkeepingOverview />
      {/* <BookkeepingServiceList /> */}
      <BookkeepingPricing pageName={pageName} />
      {/* <BookkeepingPartners />
      <BookkeepingPartnersSay /> */}
      <Footer />
    </>
  );
};

export default BookkeepingPage;
