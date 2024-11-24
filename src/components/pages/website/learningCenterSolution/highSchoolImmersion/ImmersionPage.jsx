import React from "react";
import Footer from "../../../../partials/Footer";
import Header from "../../../../partials/Header";
import ImmersionApplyNow from "./ImmersionApplyNow";
import ImmersionBanner from "./ImmersionBanner";
import ImmersionBatches from "./ImmersionBatches";
import ImmersionPartners from "./ImmersionPartners";
import ImmersionPartnersSay from "./ImmersionPartnersSay";
import ImmersionPartnersWithUs from "./ImmersionPartnersWithUs";
import ImmersionServices from "./ImmersionServices";
import ImmersionTeam from "./ImmersionTeam";
import ImmersionVidTestimonials from "./ImmersionVidTestimonials";
import { StoreContext } from "../../../../store/StoreContext";
import ModalSuccess from "../../../../partials/modals/ModalSuccess";
import ModalError from "../../../../partials/modals/ModalError";

const ImmersionPage = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [pageName, setPageName] = React.useState("Work Immersion");

  React.useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <Header pageName={pageName} />
      <ImmersionBanner pageName={pageName} />
      <ImmersionPartners />
      <ImmersionPartnersWithUs pageName={pageName} />
      <ImmersionServices />
      <ImmersionApplyNow pageName={pageName} />
      <ImmersionTeam />
      <ImmersionBatches />
      <ImmersionVidTestimonials />
      <ImmersionPartnersSay />
      <Footer />
      {store.success && <ModalSuccess />}
      {store.error && <ModalError />}
    </>
  );
};

export default ImmersionPage;
