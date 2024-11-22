import React from "react";
import Footer from "../../../../partials/Footer";
import Header from "../../../../partials/Header";
import WebDesignBanner from "./WebDesignBanner";
import WebDesignOverview from "./WebDesignOverview";
import WebDesignPartners from "./WebDesignPartners";
import WebDesignPartnersSay from "./WebDesignPartnersSay";
import WebDesignPricing from "./WebDesignPricing";
import WebDesignScope from "./WebDesignScope";
import { StoreContext } from "../../../../store/StoreContext";
import ModalSuccess from "../../../../partials/modals/ModalSuccess";
import ModalError from "../../../../partials/modals/ModalError";

const WebDesignPage = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [pageName, setPageName] = React.useState("web-design");

  React.useEffect(() => {
    window.scrollTo(0, 0);
  });
  
  return (
    <>
      <Header pageName={pageName} />
      <WebDesignBanner pageName={pageName} />
      <WebDesignOverview pageName={pageName} />
      <WebDesignScope pageName={pageName} />
      <WebDesignPricing pageName={pageName} />
      <WebDesignPartners />
      <WebDesignPartnersSay />
      <Footer />
      {store.success && <ModalSuccess />}
      {store.error && <ModalError />}
    </>
  );
};

export default WebDesignPage;
