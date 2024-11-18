import React from "react";
import Footer from "../../../../partials/Footer";
import Header from "../../../../partials/Header";
import ServiceInventoryBanner from "./ServiceInventoryBanner";
import ServiceInventoryPartners from "./ServiceInventoryPartners";
import ServiceInventoryOverview from "./ServiceInventoryOverview";
import ServiceInventoryScope from "./ServiceInventoryScope";
import ServiceInventoryPricing from "./ServiceInventoryPricing";
import ServiceInventoryPartnersSay from "./ServiceInventoryPartnersSay";
import { StoreContext } from "../../../../store/StoreContext";
import ModalSuccess from "../../../../partials/modals/ModalSuccess";
import ModalError from "../../../../partials/modals/ModalError";

const ServiceInventoryPage = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [pageName, setPageName] = React.useState("inventory");
  return (
    <>
      <Header pageName={pageName} />
      <ServiceInventoryBanner pageName={pageName} />
      {/* <ServiceInventoryPartners /> */}
      <ServiceInventoryOverview pageName={pageName} />
      <ServiceInventoryScope pageName={pageName} />
      <ServiceInventoryPricing pageName={pageName} />
      {/* <ServiceInventoryPartnersSay /> */}
      <Footer />
      {store.success && <ModalSuccess />}
      {store.error && <ModalError />}
    </>
  );
};

export default ServiceInventoryPage;
