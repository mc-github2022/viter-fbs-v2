import React from "react";
import Footer from "../../../../partials/Footer";
import Header from "../../../../partials/Header";
import VaAdminSolutionBanner from "./VaAdminSolutionBanner";
import VaAdminSolutionOverview from "./VaAdminSolutionOverview";
import VaAdminSolutionPartners from "./VaAdminSolutionPartners";
import VaAdminSolutionPartnersSay from "./VaAdminSolutionPartnersSay";
import VaAdminSolutionPartnerWithUs from "./VaAdminSolutionPartnerWithUs";
import VaAdminSolutionPricing from "./VaAdminSolutionPricing";
import VaAdminServiceList from "./VaAdminServiceList";
import { StoreContext } from "../../../../store/StoreContext";
import ModalSuccess from "../../../../partials/modals/ModalSuccess";
import ModalError from "../../../../partials/modals/ModalError";

const VaAdminSolutionPage = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [pageName, setPageName] = React.useState("va-administrative");

  React.useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <Header pageName={pageName} />
      <VaAdminSolutionBanner pageName={pageName} />
      <VaAdminSolutionOverview />
      <VaAdminServiceList />
      {/* <VaAdminSolutionPartnerWithUs /> */}
      <VaAdminSolutionPricing pageName={pageName} />
      <VaAdminSolutionPartners />
      <VaAdminSolutionPartnersSay />
      <Footer />
      {store.success && <ModalSuccess />}
      {store.error && <ModalError />}
    </>
  );
};

export default VaAdminSolutionPage;
