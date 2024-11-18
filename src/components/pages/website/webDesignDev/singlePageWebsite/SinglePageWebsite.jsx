import React from "react";
import Footer from "../../../../partials/Footer";
import Header from "../../../../partials/Header";
import SinglePageBanner from "./SinglePageBanner";
import SinglePageOverview from "./SinglePageOverview";
import SinglePageScope from "./SinglePageScope";
import SinglePagePricing from "./SinglePagePricing";
import SinglePagePartners from "./SinglePagePartners";
import SinglePagePartnersSay from "./SinglePagePartnersSay";
import { StoreContext } from "../../../../store/StoreContext";
import ModalSuccess from "../../../../partials/modals/ModalSuccess";
import ModalError from "../../../../partials/modals/ModalError";

const SinglePageWebsite = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [pageName, setPageName] = React.useState("singlePage Website");
  return (
    <>
      <Header pageName={pageName} />
      <SinglePageBanner pageName={pageName} />
      <SinglePageOverview pageName={pageName} />
      <SinglePageScope pageName={pageName} />
      <SinglePagePricing pageName={pageName} />
      <SinglePagePartners />
      {/* <SinglePagePartnersSay /> */}
      <Footer />
      {store.success && <ModalSuccess />}
      {store.error && <ModalError />}
    </>
  );
};

export default SinglePageWebsite;
