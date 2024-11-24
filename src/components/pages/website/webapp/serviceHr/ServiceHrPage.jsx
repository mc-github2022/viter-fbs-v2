import React from "react";
import Header from "../../../../partials/Header";
import Footer from "../../../../partials/Footer";
import ServiceHrBanner from "./ServiceHrBanner";
import ServiceHrPartners from "./ServiceHrPartners";
import ServiceHrOverview from "./ServiceHrOverview";
import ServiceHrScope from "./ServiceHrScope";
import ServiceHrPricing from "./ServiceHrPricing";
import ServiceHrPartnersSay from "./ServiceHrPartnersSay";
import { StoreContext } from "../../../../store/StoreContext";
import ModalSuccess from "../../../../partials/modals/ModalSuccess";
import ModalError from "../../../../partials/modals/ModalError";

const ServiceHrPage = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [pageName, setPageName] = React.useState("hris");

  React.useEffect(() => {
    window.scrollTo(0, 0);
  });
  
  return (
    <>
      <Header pageName={pageName} />
      <ServiceHrBanner />
      <ServiceHrOverview />
      <ServiceHrScope />
      <ServiceHrPricing pageName={pageName} />
      <ServiceHrPartners />
      <ServiceHrPartnersSay />
      <Footer />
      {store.success && <ModalSuccess />}
      {store.error && <ModalError />}
    </>
  );
};

export default ServiceHrPage;
