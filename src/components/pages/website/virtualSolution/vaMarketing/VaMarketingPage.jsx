import React from "react";
import Footer from "../../../../partials/Footer";
import Header from "../../../../partials/Header";
import VaMarketingBanner from "./VaMarketingBanner";
import VaMarketingOverview from "./VaMarketingOverview";
import VaMarketingPartnerWithUs from "./VaMarketingPartnerWithUs";
import VaMarketingPricing from "./VaMarketingPricing";
import VaMarketingPartners from "./VaMarketingPartners";
import VaMarketingPartnersSay from "./VaMarketingPartnersSay";
import VaMarketingServiceList from "./VaMarketingServiceList";
import { StoreContext } from "../../../../store/StoreContext";
import ModalSuccess from "../../../../partials/modals/ModalSuccess";
import ModalError from "../../../../partials/modals/ModalError";

const VaMarketingPage = () => {
  const [pageName, setPageName] = React.useState("va-marketing");
  const { store, dispatch } = React.useContext(StoreContext);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  });
  
  return (
    <>
      <Header pageName={pageName} />
      <VaMarketingBanner pageName={pageName} />
      <VaMarketingOverview />
      <VaMarketingServiceList pageName={pageName} />
      <VaMarketingPricing pageName={pageName} />
      <VaMarketingPartners />
      <VaMarketingPartnersSay />
      <Footer />
      {store.success && <ModalSuccess />}
      {store.error && <ModalError />}
    </>
  );
};

export default VaMarketingPage;
