import React from "react";
import Footer from "../../../../partials/Footer";
import Header from "../../../../partials/Header";
import ConStudApplyNow from "./ConStudApplyNow";
import ConStudBanner from "./ConStudBanner";
import ConStudBatches from "./ConStudBatches";
import ConStudPartners from "./ConStudPartners";
import ConStudPartnersSay from "./ConStudPartnersSay";
import ConStudPartnersWithUs from "./ConStudPartnersWithUs";
import ConStudServices from "./ConStudServices";
import ConStudTeam from "./ConStudTeam";
import ConStudVidTestimonials from "./ConStudVidTestimonials";
import ModalSuccess from "../../../../partials/modals/ModalSuccess";
import ModalError from "../../../../partials/modals/ModalError";
import { StoreContext } from "../../../../store/StoreContext";

const ConStudPage = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [pageName, setPageName] = React.useState("Continuing Study");
  return (
    <>
      <Header pageName={pageName} />
      <ConStudBanner pageName={pageName} />
      {/* <ConStudPartners /> */}
      <ConStudPartnersWithUs pageName={pageName} />
      <ConStudServices />
      <ConStudApplyNow pageName={pageName} />
      <ConStudTeam />
      <ConStudBatches />
      <ConStudVidTestimonials />
      <ConStudPartnersSay />
      <Footer />

      {store.success && <ModalSuccess />}
      {store.error && <ModalError />}
    </>
  );
};

export default ConStudPage;
