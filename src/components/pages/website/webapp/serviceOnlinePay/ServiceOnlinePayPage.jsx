import React from "react";
import Footer from "../../../../partials/Footer";
import Header from "../../../../partials/Header";
import ServiceOnlinePayBanner from "./ServiceOnlinePayBanner";
import ServiceOnlinePayPartners from "./ServiceOnlinePayPartners";
import ServiceOnlinePayOverview from "./ServiceOnlinePayOverview";
import ServiceOnlinePayScope from "./ServiceOnlinePayScope";
import ServiceOnlinePayPricing from "./ServiceOnlinePayPricing";
import ServiceOnlinePayPartnersSay from "./ServiceOnlinePayPartnersSay";
import { StoreContext } from "../../../../store/StoreContext";
import ModalSuccess from "../../../../partials/modals/ModalSuccess";
import ModalError from "../../../../partials/modals/ModalError";

const ServiceOnlinePayPage = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [pageName, setPageName] = React.useState("online-payment");
  return (
    <>
      <Header pageName={pageName} />
      <ServiceOnlinePayBanner pageName={pageName} />
      <ServiceOnlinePayOverview pageName={pageName} />
      <ServiceOnlinePayScope pageName={pageName} />
      <ServiceOnlinePayPricing pageName={pageName} />
      {/* <ServiceOnlinePayPartners /> */}
      {/* <ServiceOnlinePayPartnersSay /> */}
      <Footer />

      {store.success && <ModalSuccess />}
      {store.error && <ModalError />}
    </>
  );
};

export default ServiceOnlinePayPage;
