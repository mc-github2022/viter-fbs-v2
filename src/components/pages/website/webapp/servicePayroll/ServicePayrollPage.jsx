import React from "react";
import Header from "../../../../partials/Header";
import Footer from "../../../../partials/Footer";
import ServicePayrollBanner from "./ServicePayrollBanner";
import ServicePayrollPartners from "./ServicePayrollPartners";
import ServicePayrollOverview from "./ServicePayrollOverview";
import ServicePayrollScope from "./ServicePayrollScope";
import ServicePayrollPricing from "./ServicePayrollPricing";
import ServicePayrollPartnersSay from "./ServicePayrollPartnersSay";
import { StoreContext } from "../../../../store/StoreContext";
import ModalSuccess from "../../../../partials/modals/ModalSuccess";
import ModalError from "../../../../partials/modals/ModalError";

const ServicePayrollPage = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [pageName, setPageName] = React.useState("payroll");

  React.useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <Header pageName={pageName} />
      <ServicePayrollBanner />
      <ServicePayrollOverview />
      <ServicePayrollScope />
      <ServicePayrollPricing pageName={pageName} />
      <ServicePayrollPartners />
      <ServicePayrollPartnersSay />
      <Footer />
      {store.success && <ModalSuccess />}
      {store.error && <ModalError />}
    </>
  );
};

export default ServicePayrollPage;
