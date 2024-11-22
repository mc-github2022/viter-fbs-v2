import React from "react";
import Footer from "../../../../partials/Footer";
import Header from "../../../../partials/Header";
import BusinessRegOverview from "./BusinessRegOverview";
import BusinessRegPartners from "./BusinessRegPartners";
import BusinessRegPartnersSay from "./BusinessRegPartnersSay";
import BusinessRegPricing from "./BusinessRegPricing";
import BusinessRegServiceList from "./BusinessRegServiceList";
import BusinessRegBanner from "./BusinessRegBanner";
import { StoreContext } from "../../../../store/StoreContext";
import ModalSuccess from "../../../../partials/modals/ModalSuccess";
import ModalError from "../../../../partials/modals/ModalError";

const BusinessRegPage = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [pageName, setPageName] = React.useState("business-reg");

  React.useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <Header pageName={pageName} />
      <BusinessRegBanner pageName={pageName} />
      <BusinessRegOverview />
      {/* <BusinessRegServiceList /> */}
      <BusinessRegPricing pageName={pageName} />
      {/* <BusinessRegPartners />
      <BusinessRegPartnersSay /> */}
      <Footer />
      {store.success && <ModalSuccess />}
      {store.error && <ModalError />}
    </>
  );
};

export default BusinessRegPage;
