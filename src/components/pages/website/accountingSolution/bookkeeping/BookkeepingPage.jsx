import React from "react";
import Footer from "../../../../partials/Footer";
import Header from "../../../../partials/Header";
import BookkeepingBanner from "./BookkeepingBanner";
import BookkeepingOverview from "./BookkeepingOverview";
import BookkeepingServiceList from "./BookkeepingServiceList";
import BookkeepingPricing from "./BookkeepingPricing";
import BookkeepingPartners from "./BookkeepingPartners";
import BookkeepingPartnersSay from "./BookkeepingPartnersSay";
import ModalSuccess from "../../../../partials/modals/ModalSuccess";
import ModalError from "../../../../partials/modals/ModalError";
import { StoreContext } from "../../../../store/StoreContext";

const BookkeepingPage = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [pageName, setPageName] = React.useState("bookkeeping");

  React.useEffect(() => {
    window.scrollTo(0, 0);
  });
  
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
      {store.success && <ModalSuccess />}
      {store.error && <ModalError />}
    </>
  );
};

export default BookkeepingPage;
