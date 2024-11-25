import React from "react";
import Footer from "../../../../partials/Footer";
import Header from "../../../../partials/Header";
import ModalError from "../../../../partials/modals/ModalError";
import ModalSuccess from "../../../../partials/modals/ModalSuccess";
import { StoreContext } from "../../../../store/StoreContext";
import SinglePageBanner from "./SinglePageBanner";
import SinglePageOverview from "./SinglePageOverview";
import SinglePagePartners from "./SinglePagePartners";
import SinglePagePricing from "./SinglePagePricing";
import SinglePageScope from "./SinglePageScope";

const SinglePageWebsite = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [pageName, setPageName] = React.useState("singlePage Website");

  React.useEffect(() => {
    window.scrollTo(0, 0);
  });

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
