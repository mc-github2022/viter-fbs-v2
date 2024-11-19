import React from "react";
import Header from "../../../partials/Header";
import Footer from "../../../partials/Footer";
import LcssPartners from "./LcssPartners";
import LcssPartnersWithUs from "./LcssPartnersWithUs";
import LcssServices from "./LcssServices";
import LcssApplyNow from "./LcssApplyNow";
import LcssTeam from "./LcssTeam";
import LcssVidTestimonials from "./LcssVidTestimonials";
import LcssPartnersSay from "./LcssPartnersSay";
import LcssBanner from "./LcssBanner";
import LcssBatches from "./LcssBatches";
import ModalSuccess from "../../../partials/modals/ModalSuccess";
import ModalError from "../../../partials/modals/ModalError";
import { StoreContext } from "../../../store/StoreContext";

const LcssPage = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [contactSubject, setContactSubject] =
    React.useState("Contact Form: LCSS");
  const [pageName, setPageName] = React.useState("College OJT");
  return (
    <>
      <Header pageName={pageName} contactSubject={contactSubject} />
      <LcssBanner pageName={pageName} contactSubject={contactSubject} />
      <LcssPartners />
      <LcssPartnersWithUs pageName={pageName} contactSubject={contactSubject} />
      <LcssServices />
      <LcssApplyNow pageName={pageName} contactSubject={contactSubject} />
      <LcssTeam />
      <LcssBatches />
      <LcssVidTestimonials />
      <LcssPartnersSay />
      <Footer />
      {store.success && <ModalSuccess />}
      {store.error && <ModalError />}
    </>
  );
};

export default LcssPage;
