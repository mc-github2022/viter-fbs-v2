import React from "react";
import Footer from "../../../../partials/Footer";
import Header from "../../../../partials/Header";
import ServiceOnlineDonationBanner from "./ServiceOnlineDonationBanner";
import ServiceOnlineDonationPartners from "./ServiceOnlineDonationPartners";
import ServiceOnlineDonationOverview from "./ServiceOnlineDonationOverview";
import ServiceOnlineDonationScope from "./ServiceOnlineDonationScope";
import ServiceOnlineDonationPricing from "./ServiceOnlineDonationPricing";
import ServiceOnlineDonationPartnersSay from "./ServiceOnlineDonationPartnersSay";
import { StoreContext } from "../../../../store/StoreContext";
import ModalSuccess from "../../../../partials/modals/ModalSuccess";
import ModalError from "../../../../partials/modals/ModalError";

const ServiceOnlineDonationPage = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [pageName, setPageName] = React.useState("donation");

  React.useEffect(() => {
    window.scrollTo(0, 0);
  });
  
  return (
    <>
      <Header pageName={pageName} />
      <ServiceOnlineDonationBanner pageName={pageName} />
      <ServiceOnlineDonationOverview pageName={pageName} />
      <ServiceOnlineDonationScope pageName={pageName} />
      <ServiceOnlineDonationPricing pageName={pageName} />
      {/* <ServiceOnlineDonationPartners /> */}
      <ServiceOnlineDonationPartnersSay />
      <Footer />
      {store.success && <ModalSuccess />}
      {store.error && <ModalError />}
    </>
  );
};

export default ServiceOnlineDonationPage;
